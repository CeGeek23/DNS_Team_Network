const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

// Middleware
const bodyParserMiddleware = require('./middleware/bodyParser');
const staticFilesMiddleware = require('./middleware/staticFiles');

// Routes
const indexRoutes = require('./routes/indexRoutes');
const dataRoutes = require('./routes/dataRoutes');

const app = express();

// Middleware
app.use(bodyParserMiddleware);
app.use(staticFilesMiddleware);

// Routes
app.use('/', indexRoutes);
app.use('/api/data', dataRoutes);



// Fonction pour trouver un port disponible
function getAvailablePort(startPort = 3000, maxPort = 65535) {
    return new Promise((resolve, reject) => {
      let port = startPort;
      const server = app.listen(port, () => {
        server.close(() => {
          resolve(port);
        });
      });
      server.on('error', () => {
        if (port >= maxPort) {
          reject(new Error('Aucun port disponible trouvé'));
        } else {
          port += 1;
          getAvailablePort(port, maxPort).then(resolve);
        }
      });
    });
}
  
// Démarrage du serveur
getAvailablePort(process.env.PORT ? parseInt(process.env.PORT) : 4000)
    .then((port) => {
      app.listen(port, () => {
        console.log(`Serveur démarré sur le port ${port}`);
      });
    })
    .catch((err) => {
      console.error('Erreur lors du démarrage du serveur:', err);
    });


