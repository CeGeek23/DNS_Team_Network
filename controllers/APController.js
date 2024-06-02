const express = require('express');

exports.launchWifi = (req, res) => {
    const ssid = req.body.ssid;
    const password = req.body.password;
    console.log(ssid)
    console.log(password)
  
      //Modifier les permissions du fichier 'wifi.sh' en utilisant la commande 'chmod'
      exec(`chmod +x ./wifi.sh`, (error, stdout, stderr) => {
        if (error) {
          console.error(`Erreur lors de la modification des permissions du fichier : ${error}`);
          
        }}
      )
        // Exécute le script en passant les valeurs du SSID et du mot de passe en tant qu'arguments
        exec(`./wifi.sh "${ssid}" "${password}"`, (error, stdout, stderr) => {
          if (error) {
            console.error(`Erreur lors de l'exécution du script 1: ${error}`);
            res.status(500).send('Erreur lors de la création du point d\'accès.');
          }
          else {
                    console.log('Le point d\'accès a été créé avec succès.');
                       
                    res.send('Le point d\'accès a été créé avec succès.');
                           
          }
        });
}

exports.generateAPWebPage = (req, res) => {
    res.send(`
      <form action="/create-access-point" method="POST">
        <label for="ssid">SSID:</label>
        <input type="text" id="ssid" name="ssid"><br><br>
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" name="password"><br><br>
        <input type="submit" value="Créer le point d'accès">
      </form>
    `);
}