// DocumentDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const mockDetails = {
  1: {
    title: "Project Report",
    author: "Jasmin Shaik",
    tags: ["Research", "Collab", "Tech"],
    created: "2025-04-01",
    content: "This is the content of the project report.",
  },
  2: {
    title: "Research Notes",
    author: "Jasmin Shaik",
    tags: ["AI", "Experiment", "Notes"],
    created: "2025-03-28",
    content: "These are research notes for the project.",
  },
};

const DocumentDetails = () => {
  const { id } = useParams();
  const doc = mockDetails[id];

  return (
    <div className="min-h-screen bg-white p-8 md:p-16 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">{doc.title}</h1>

      <div className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-4">
        👤 <span>{doc.author}</span>
        📅 <span>{doc.created}</span>
        🏷️{" "}
        <span className="flex flex-wrap gap-2">
          {doc.tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </span>
          ))}
        </span>
      </div>

      <p className="leading-relaxed text-lg">{doc.content}</p>
    </div>
  );
};

export default DocumentDetails;
