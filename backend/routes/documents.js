// routes/documents.js
const express = require("express");
const router = express.Router();
const Document = require("../models/Document");

router.post("/", async (req, res) => {
    const { title, content } = req.body;
    try {
      const doc = new Document({ title, content });
      await doc.save();
      res.status(201).json(doc);
    } catch (err) {
      res.status(500).json({ error: "Failed to save document" });
    }
  });
  

// GET - Fetch Documents
router.get("/", async (req, res) => {
  try {
    const docs = await Document.find().sort({ createdAt: -1 });
    res.json(docs);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch documents." });
  }
});

// DELETE /api/documents/:id
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Document.findByIdAndDelete(id);
      res.status(200).json({ message: 'Document deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Delete failed', error: err.message });
    }
  });
  
  

  module.exports = router;