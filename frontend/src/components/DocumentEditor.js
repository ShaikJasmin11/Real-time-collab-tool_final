import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./DocumentEditor.css";

const DocumentEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/documents", {
        title,
        content,
      });

      setMessage("✅ Document saved successfully!");

      // Give the user a moment to see the message
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500); // 1.5 seconds delay
    } catch (error) {
      console.error("Save failed:", error);
      setMessage("❌ Failed to save document.");
    }
  };

  return (
    <div className="editor-container">
      <h2>Create a New Document</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Document Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Start writing here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={15}
          required
        />
        <button type="submit">* Save Document *</button>
      </form>
      {message && <p className="save-message">{message}</p>}
    </div>
  );
};

export default DocumentEditor;
