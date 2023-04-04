import React from 'react';
import { Link } from "react-router-dom"

const WelcomePage = () => {
  const imageUrl = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80';

  return (
    <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize:
     'cover', height: '100vh', position: 'relative' }}>
      <h1 style={{ position: 'absolute', top: '20%', left: '25%', transform:
       'translate(-50%, -50%)', textAlign: 'center', color: '#fff', textShadow:
        '1px 1px 2px #333' }}>Välkommen till oss på Doggy Daycare!</h1>
        
        <h2 style={{ position: 'absolute', top: '30%', left: '45%', transform:
       'translate(-50%, -50%)', textAlign: 'center', color: '#fff', textShadow:
        '1px 1px 2px #333' }}>Här kan dina lurviga kompisar leka och vila ut!</h2>
    </div>
  );
};

export default WelcomePage;
  
  
  
  
  






