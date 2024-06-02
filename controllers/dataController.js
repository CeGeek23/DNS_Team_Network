const dataModel = require('../models/dataModel');

exports.getData = (req, res, next) => {
  const data = dataModel.getData();
  res.json(data);
  next();
};

exports.createData = (req, res, next) => {
  const { nom, prenom, hostname, port } = req.body;
  const newData = dataModel.createData(nom, prenom, hostname, port);
  res.status(201).json(newData);
  next();
};

exports.updateData = (req, res, next) => {
  const { id } = req.params;
  const { nom, prenom, hostname, port } = req.body;
  const updatedData = dataModel.updateData(id, nom, prenom, hostname, port);
  if (updatedData) {
    res.json(updatedData);
  } else {
    res.status(404).json({ message: 'Données non trouvées' });
  }
  next();
};

exports.deleteData = (req, res, next) => {
  const { id } = req.params;
  dataModel.deleteData(id);
  res.sendStatus(204);
};