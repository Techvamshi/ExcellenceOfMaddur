'use client';

import React from 'react';
import OurImpactSection from './Count';
import WhatWeOfferSection from './programs';

function HomeBody() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '40px 100px', backgroundColor: '#F5F5F5' }}>

      {/* Hero Section */}
      <div style={{
        backgroundColor: '#fff',
        padding: '80px 40px 80px 480px',
        borderRadius: '16px',
        position: 'relative',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        marginBottom: '120px',
        overflow: 'hidden',
      }}>
        {/* Floating Image Left */}
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '400px',
          height: '100%',
          borderRadius: '16px 0 0 16px',
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
              objectPosition: '65px',
            }}
          />
        </div>

        {/* Hero Content */}
        <h1 style={{
          fontSize: '42px',
          color: '#3E5B3A',
          marginBottom: '20px',
          fontWeight: '700',
        }}>Centre of Excellence - Maddur</h1>
        <p style={{
          fontSize: '18px',
          color: '#333',
          maxWidth: '700px',
          lineHeight: '1.8',
          marginBottom: '40px',
        }}>
          Cultivating Innovation, Empowering Farmers, Transforming Horticulture.
        </p>
        <button
          style={{
            padding: '15px 30px',
            backgroundColor: '#6D8B47',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
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
        gap: '40px',
        alignItems: 'center',
        marginBottom: '100px',
        flexWrap: 'wrap',
      }}>
        <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
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
          loop
          autoPlay
          muted
          style={{
            flex: '1 1 400px',
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            minWidth: '300px',
          }}
        />
      </div>

      {/* Impact & Offerings */}
      <OurImpactSection />
      <WhatWeOfferSection />

    </div>
  );
}

export default HomeBody;
