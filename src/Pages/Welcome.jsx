import React from 'react';

  const MyComponent = () => {
    const imageUrl = 'https://source.unsplash.com/2560x1440/?dog';
  
    return (
      <div style={{ backgroundImage: `url(${imageUrl})`, backgroundSize:
       'cover', height: '100vh', position: 'relative' }}>
        <h1 style={{ position: 'absolute', top: '20%', left: '25%', transform:
         'translate(-50%, -50%)', textAlign: 'center', color: '#fff', textShadow:
          '1px 1px 2px #333' }}>Welcome to Doggy Daycare</h1>
      </div>
    );
  };
  
  export default MyComponent;
  
  
  
  
  






