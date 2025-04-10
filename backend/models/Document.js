// models/Document.js
const mongoose = require("mongoose");

const DocumentSchema = new mongoose.Schema({
    title: String,
    content: String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });
  
module.exports = mongoose.model("Document", DocumentSchema);
