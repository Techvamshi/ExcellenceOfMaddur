'use client'

import React from 'react';


function HomeBody() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      padding: '20px',
      marginTop: '60px', // To account for fixed navbar
    }}>

      {/* Hero Section */}
      <div style={{
        backgroundColor: '#fff',
        padding: '30px 20px',
        borderRadius: '16px',
        textAlign: 'center',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        marginBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          top: '0px',
          left: '-120px',
          width: '310px',
          height: '290px',
          borderRadius: '28%',
          overflow: 'hidden',
        }}>
          <img
            src="/farmer_2.jpeg"
            alt="Farmer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition:'60px',
              
            
            }}
          />
        </div>

        <h1 style={{
          marginLeft:'170px',
          fontSize: '24px',
          color: '#3E5B3A',
          marginBottom: '22px',
          fontWeight: '700',
          marginTop: '0px',
          fontWeight:'bold',
        }}>Centre of Excellence - Maddur</h1>
        
        <p style={{
          fontSize: '12px',
          color: '#333',
          margin: '0 auto',
          lineHeight: '1.6',
          marginBottom: '20px',
          marginLeft:'180px',
        }}>
          Cultivating Innovation, Empowering  Farmers,<br /> Transforming Horticulture.
        </p>
        
        <button style={{
          padding: '10px 14px',
          backgroundColor: '#6D8B47',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginLeft:'180px',
        }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#4B6A38'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#6D8B47'}
        >
          Explore Our Work
        </button>
      </div>

      {/* About Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '40px',
      }}>
        <div>
          <h2 style={{
            color: '#3E5B3A',
            fontSize: '24px',
            marginBottom: '15px',
            fontWeight: '600',
          }}>About Centre of Excellence</h2>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#555',
          }}>
            Our Centre of Excellence in Maddur is dedicated to fostering innovation in horticulture. We empower local farmers with cutting-edge tools and knowledge, transforming horticulture practices for sustainable growth and agricultural success.
          </p>
        </div>
        
        <video 
          src="/intro.mp4" 
          alt="Horticulture" 
          loop 
          autoPlay 
          muted 
          style={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
          }} 
        />
      </div>

      {/* <OurImpactSection />
      <WhatWeOfferSection /> */}
    </div>
  );
}

export default HomeBody;