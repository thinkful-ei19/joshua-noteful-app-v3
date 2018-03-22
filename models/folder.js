'use strict';

const mongoose = require('mongoose');

const folderSchema = new mongoose.Schema({
  name: { type: String, unique: true }
});

module.exports = mongoose.model('Folder', folderSchema);