const dotenv = require('dotenv');
dotenv.config();

let data = [
    { 
        id: 1, 
        nom: 'Tchakonte', 
        prenom: 'Cedrick', 
        hostname: 'cedrick', 
        port: 1269 
    },
    { 
        id: 2, 
        nom: 'Heutchou', 
        prenom: 'Kologne', 
        hostname: 'kologne', 
        port: 1980 
    },
    { 
        id: 3, 
        nom: 'Dada', 
        prenom: 'Cedric', 
        hostname: 'cedric', 
        port: 1715
    },
];
  
exports.getData = () => {
    return data;
};
  
exports.createData = (nom, prenom, hostname, port) => {
    const newData = { id: Date.now(), nom, prenom, hostname, port };
    data.push(newData);
    return newData;
};
  
exports.updateData = (id, nom, prenom, hostname, port) => {
    const dataIndex = data.findIndex((item) => item.id === parseInt(id));
    if (dataIndex !== -1) {
      data[dataIndex].nom = nom;
      data[dataIndex].prenom = prenom;
      data[dataIndex].hostname = hostname;
      data[dataIndex].port = port;
      return data[dataIndex];
    }
    return null;
};
  
  
exports.deleteData = (id) => {
    data = data.filter((item) => item.id !== parseInt(id));
  };