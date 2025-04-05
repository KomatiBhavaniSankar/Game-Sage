import React from 'react';

const Contact = () => {
  return (
    <>
      <div style={{ textAlign: 'center', padding: '20px', minHeight: '80vh' }}>
        <h1 style={{ color: '#2c3e50', fontSize: '2.5em', marginBottom: '20px' }}>Contact Us</h1>
        <p style={{ fontSize: '1.2em', maxWidth: '700px', margin: '0 auto 30px', lineHeight: '1.6' }}>
          Have questions, suggestions, or just want to talk Pokémon ROMs? We’d love to hear from you! Reach out to us via email and join the community conversation.
        </p>
        
        <div style={{ margin: '20px 0' }}>
          <h2 style={{ fontSize: '1.5em', color: '#34495e' }}>Email Us</h2>
          <p style={{ fontSize: '1.1em' }}>
            <a 
              href="mailto:komatibhavanishankar@gmail.com" 
              style={{ color: '#e74c3c', textDecoration: 'none', fontWeight: 'bold' }}
            >
             firetypepokemon2004@gmail.com
            </a>
          </p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <p style={{ fontSize: '1em', color: '#7f8c8d' }}>
            We’ll get back to you as soon as possible. Stay tuned for more Pokémon ROM ranking updates!
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;