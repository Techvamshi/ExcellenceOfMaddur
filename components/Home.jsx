'use client'

import React from 'react';
import OurImpactSection from './Count';
import WhatWeOfferSection from './programs';

function HomeBody() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px 100px' }}>

      {/* Hero Section */}
      <div style={{
        backgroundColor: '#fff',
        padding: '80px',
        borderRadius: '16px',
        textAlign: 'center',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        marginBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        
      }}>
        <h1 style={{
          fontSize: '48px',
          color: '#3E5B3A',
          marginBottom: '30px',
          fontWeight: '700',
          animation: 'fadeIn 2s ease-out',
          marginLeft:'340px',
        }}>Centre of Excellence - Maddur</h1>
        <p style={{
          fontSize: '18px',
          color: '#333',
          maxWidth: '800px',
          margin: '0 auto',
          lineHeight: '1.8',
          animation: 'fadeIn 3s ease-out',
          marginLeft:'340px',
        }}>
          Cultivating Innovation, Empowering Farmers, Transforming Horticulture.
        </p>
        <button style={{
          marginTop: '40px',
          padding: '15px 30px',
          backgroundColor: '#6D8B47',
          color: '#fff',
          border: 'none',
          borderRadius: '12px',
          fontSize: '18px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          animation: 'fadeIn 4s ease-out',
          marginLeft:'340px',
        }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#4B6A38'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#6D8B47'}
        >Explore Our Work</button>

        {/* Hero Background Decoration */}
       
        <div style={{
          position: 'absolute',
          top: '0%',
          left: '-9%',
          width: '440px',
          height: '410px',
          borderRadius: '30%',
          overflow: 'hidden',
          animation: 'bounce 4s infinite ease-in-out',
        }}>
          <img
            src="/farmer_2.jpeg"
            alt="Farmer"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: '65px', // ← Focus on the left part
            }}
          />
        </div>




      </div>

      {/* About Section */}
      <div style={{
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        marginBottom: '80px',
        animation: 'fadeInUp 2s ease-out',
      }}>
        <div>
          <h2 style={{
            color: '#3E5B3A',
            fontSize: '32px',
            marginBottom: '20px',
            fontWeight: '600',
          }}>About Centre of Excellence</h2>
          <p style={{
            fontSize: '18px',
            lineHeight: '1.6',
            color: '#555',
            maxWidth: '700px',
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
          width: '60%',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
        }} 
      />

        
      </div>

      {/* Stats / Highlights */}
      {/* <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: '60px',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.05)',
        marginBottom: '80px',
      }}>
        {[
          { label: 'Farmers Empowered', value: '500+' },
          { label: 'Innovations Implemented', value: '30+' },
          { label: 'Crops Improved', value: '15+' },
          { label: 'Sustainable Practices', value: '100%' }
        ].map((stat, idx) => (
          <div key={idx} style={{ textAlign: 'center' }}>
            <h3 style={{
              fontSize: '36px',
              color: '#3E5B3A',
              marginBottom: '15px',
              fontWeight: '700',
            }}>{stat.value}</h3>
            <p style={{
              fontSize: '18px',
              color: '#666',
              textTransform: 'uppercase',
            }}>{stat.label}</p>
          </div>
        ))}
      </div> */}
      <OurImpactSection />
      <WhatWeOfferSection />

      

    </div>
  );
}

export default HomeBody;
