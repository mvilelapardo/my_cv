import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Interactive Curriculum Website</h1>
      <Link to="/curriculum">Go to Curriculum</Link>
    </div>
  );
};

export default Home;
