import React from 'react';

function Footer() {
  return (
    <div style={{ position: 'relative', backgroundColor: '#1F2D20', paddingTop: '100px', marginTop: '100px' }}>
      
      {/* Map Embed Positioned Half Outside Footer */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        maxWidth: '1000px',
        width:'90%',
        height: '200px',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
        border: '4px solid white',
        zIndex: 5,
      }}>
        <iframe
          title="Center of Excellence Maddur Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62239.76341050878!2d77.0402915!3d12.5878556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafaf1cb75f816b%3A0x52f49e085766e334!2sCenter%20of%20Excellence%20Maddur!5e0!3m2!1sen!2sin!4v1713895698421!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Footer Content */}
      <div style={{
        paddingTop: '120px',
        textAlign: 'center',
        color: 'white',
        paddingBottom: '40px',
        marginTop:'-70px',
      }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Centre of Excellence – Maddur</h2>
        <p style={{ fontSize: '16px', color: '#ccc', maxWidth: '600px', margin: '0 auto 30px' }}>
          Empowering the future of agriculture through innovation and excellence.
        </p>

        {/* Social Media Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <img src="/facebooklogo.png" alt="Facebook" style={{ width: '50px', height: '50px' }} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
            <img src="/instagramlogo.png" alt="Instagram" style={{ width: '60px', height: '60px', marginTop:'-3px', }} />
          </a>
        </div>

        <p style={{ fontSize: '14px', color: '#888' }}>
          © {new Date().getFullYear()} Centre of Excellence – Maddur. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
