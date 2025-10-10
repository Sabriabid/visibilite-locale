import { Client } from 'basic-ftp';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdir } from 'fs/promises';

// Charger les variables d'environnement
dotenv.config({ path: '.env.local' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Configuration FTP depuis les variables d'environnement
const config = {
  host: process.env.FTP_HOST,
  user: process.env.FTP_USER,
  password: process.env.FTP_PASSWORD,
  secure: false,
  port: 21
};

// Dossier distant sur Hostinger
const remoteDir = process.env.FTP_REMOTE_DIR || '/public_html';

// Fonction pour vider un dossier distant
async function clearRemoteDirectory(client, path) {
  try {
    const list = await client.list(path);
    for (const item of list) {
      const itemPath = `${path}/${item.name}`;
      if (item.isDirectory) {
        await clearRemoteDirectory(client, itemPath);
        await client.removeDir(itemPath);
        console.log(`📁 Supprimé: ${itemPath}`);
      } else {
        await client.remove(itemPath);
        console.log(`🗑️  Supprimé: ${itemPath}`);
      }
    }
  } catch (err) {
    // Si le dossier n'existe pas, ce n'est pas grave
    if (!err.message.includes('550')) {
      throw err;
    }
  }
}

async function deploy() {
  const client = new Client();
  client.ftp.verbose = true;

  try {
    // Vérifier que les variables d'environnement sont définies
    if (!config.host || !config.user || !config.password) {
      throw new Error(
        '❌ Configuration FTP manquante!\n' +
        'Créez un fichier .env.local avec:\n' +
        'FTP_HOST=ftp.votre-domaine.fr\n' +
        'FTP_USER=votre-username\n' +
        'FTP_PASSWORD=votre-mot-de-passe\n' +
        'FTP_REMOTE_DIR=/public_html'
      );
    }

    console.log('🚀 Démarrage du déploiement...\n');
    
    // Connexion au serveur FTP
    console.log(`📡 Connexion à ${config.host}...`);
    await client.access(config);
    console.log('✅ Connecté au serveur FTP\n');

    // Vérifier que le dossier dist existe
    const localDir = join(__dirname, 'dist');
    try {
      await readdir(localDir);
    } catch (err) {
      throw new Error(
        '❌ Le dossier dist/ n\'existe pas!\n' +
        'Exécutez d\'abord: npm run build'
      );
    }

    // Créer le dossier distant si nécessaire
    console.log(`📁 Préparation du dossier distant: ${remoteDir}`);
    try {
      await client.ensureDir(remoteDir);
    } catch (err) {
      console.log('⚠️  Impossible de créer le dossier (peut-être qu\'il existe déjà)');
    }

    // Nettoyer le dossier distant
    console.log('\n🧹 Nettoyage du dossier distant...');
    await clearRemoteDirectory(client, remoteDir);
    console.log('✅ Dossier distant nettoyé\n');

    // Upload de tous les fichiers
    console.log('📤 Upload des fichiers...');
    await client.uploadFromDir(localDir, remoteDir);
    console.log('\n✅ Tous les fichiers ont été uploadés!\n');

    // Vérifier que index.html est présent
    const remoteFiles = await client.list(remoteDir);
    const hasIndex = remoteFiles.some(f => f.name === 'index.html');
    
    if (hasIndex) {
      console.log('✅ index.html trouvé sur le serveur');
    } else {
      console.warn('⚠️  ATTENTION: index.html non trouvé sur le serveur!');
    }

    // Afficher l'URL du site
    const domain = config.host.replace('ftp.', '');
    console.log('\n🎉 Déploiement terminé avec succès!');
    console.log(`🌐 Votre site est accessible à: https://${domain}\n`);

  } catch (err) {
    console.error('\n❌ Erreur lors du déploiement:', err.message);
    process.exit(1);
  } finally {
    client.close();
  }
}

// Exécuter le déploiement
deploy();

