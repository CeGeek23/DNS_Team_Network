const dotenv = require('dotenv');
dotenv.config();

let data = [
    { 
        id: 1, 
        nom: 'Tchakonte', 
        prenom: 'Cedrick', 
        hostname: 'cedrick', 
        email: 'tchakontecedrick@example.cm' 
    },
    { 
        id: 2, 
        nom: 'Heutchou', 
        prenom: 'Kologne', 
        hostname: 'kologne', 
        email: 'heutchoukologne@example.cm',
    },
    { 
        id: 3, 
        nom: 'Dada', 
        prenom: 'Cedric', 
        hostname: 'cedric', 
        email: 'dadacedric@example.cm' },
];
  
exports.getData = () => {
    return data;
};
  
exports.createData = (nom, prenom, hostname, email) => {
    const newData = { id: Date.now(), nom, prenom, hostname, email };
    data.push(newData);
    return newData;
};
  
exports.updateData = (id, nom, prenom, hostname, email) => {
    const dataIndex = data.findIndex((item) => item.id === parseInt(id));
    if (dataIndex !== -1) {
      data[dataIndex].nom = nom;
      data[dataIndex].prenom = prenom;
      data[dataIndex].hostname = hostname;
      data[dataIndex].email = email;
      return data[dataIndex];
    }
    return null;
};
  
  
exports.deleteData = (id) => {
    data = data.filter((item) => item.id !== parseInt(id));
  };