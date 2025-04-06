// DocumentForm.js
import React, { useState } from "react";

const DocumentForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    setError("");
    onSubmit({ title });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        📝 Create New Document
      </h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter document title"
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
      />

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      <button
        type="submit"
        className="mt-6 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        ➕ Create Document
      </button>
    </form>
  );
};

export default DocumentForm;
