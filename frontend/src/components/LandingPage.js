import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="animated-heading">Welcome to Real-Time Collab Tool</h1>
      <p>Collaborate, Edit & Work Together in Real-Time.</p>
      <Link to="/register" className="btn-primary">Get Started</Link>
    </div>
  );
}

export default LandingPage;
