import React from 'react';

export default function Home({ }) {
    return (
      <div>
        <div>

        </div>
        <div
        style={{
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          overflow: 'hidden',
          backgroundImage: 'url("/roadtrip_ai/static/images/rectangle-7.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',  // Use 'fixed' instead of 'absolute' for a full-page background
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      </div>
      
      ); 
}
