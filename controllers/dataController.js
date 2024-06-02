const dataModel = require('../models/dataModel');

exports.getData = (req, res) => {
  const data = dataModel.getData();
  res.json(data);
};

exports.createData = (req, res) => {
  const { nom, prenom, hostname, port } = req.body;
  const newData = dataModel.createData(nom, prenom, hostname, port);
  res.status(201).json(newData);
};

exports.updateData = (req, res) => {
  const { id } = req.params;
  const { nom, prenom, hostname, port } = req.body;
  const updatedData = dataModel.updateData(id, nom, prenom, hostname, port);
  if (updatedData) {
    res.json(updatedData);
  } else {
    res.status(404).json({ message: 'Données non trouvées' });
  }
};

exports.deleteData = (req, res) => {
  const { id } = req.params;
  dataModel.deleteData(id);
  res.sendStatus(204);
};