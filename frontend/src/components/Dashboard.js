import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [documents, setDocuments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/documents");
      setDocuments(response.data);
    } catch (error) {
      console.error("Error fetching documents:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/documents/${id}`);
      setDocuments(documents.filter((doc) => doc._id !== id));
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleNewDocument = () => {
    navigate("/editor");
  };

  return (
    <div className="dashboard-container">
      <h2>Your Documents</h2>
      <button className="new-doc-btn" onClick={handleNewDocument}>
        + New Document
      </button>

      <div className="document-list">
        {documents.length > 0 ? (
          documents.map((doc) => (
            <div className="document-card" key={doc._id}>
              <h3>{doc.title}</h3>
              <p>{doc.content.substring(0, 100)}...</p>
              <button onClick={() => handleDelete(doc._id)}>~ Delete</button>
            </div>
          ))
        ) : (
          <p className="no-docs">You haven't written anything yet !!</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
