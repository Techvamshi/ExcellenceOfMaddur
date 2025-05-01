'use client';

import React, { useRef } from 'react';

function WhatWeOfferSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 320; // You can adjust this value
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div style={{
      padding: '40px 20px',
      backgroundColor: '#f0f9f4',
      borderRadius: '24px',
      boxShadow: '0 12px 36px rgba(0, 0, 0, 0.06)',
    }}>
      <h2 style={{
        fontSize: '36px',
        color: '#38755b',
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: '20px',
      }}>
        What We Offer
      </h2>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '20px',
          scrollBehavior: 'smooth',
          paddingBottom: '10px',
        }}
      >
        {/* Card 1 */}
        <div style={{
          minWidth: '280px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
          padding: '14px', // Reduced padding to decrease height
          flexShrink: 0,
          textAlign: 'center',
        }}>
          <img 
            src='/planti.png' 
            alt='Training Programs' 
            style={{
              width: '250px', // Adjusted width
              height: '248px', // Adjusted height
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '10px', // Reduced margin
              marginLeft:'115px',
            }} 
          />
          <h3 style={{
            fontSize: '20px',
            color: '#2c5a3a',
            fontWeight: '600',
            marginBottom: '8px',
          }}>
            Training Programs
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#444',
            lineHeight: '1.5',
          }}>
            Courses on precision farming, protected cultivation, and sustainable practices.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{
          minWidth: '280px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
          padding: '14px',
          flexShrink: 0,
          textAlign: 'center',
        }}>
          <img 
            src='/planti_1.png' 
            alt='Quality Planting Materials' 
            style={{
              width: '180px', // Adjusted width
              height: '248px', // Adjusted height
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '10px',
              marginLeft:'80px',
            }} 
          />
          <h3 style={{
            fontSize: '20px',
            color: '#2c5a3a',
            fontWeight: '600',
            marginBottom: '8px',
          }}>
            Quality Planting Materials
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#444',
            lineHeight: '1.5',
          }}>
            Disease-free seedlings and cuttings for horticultural crops.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{
          minWidth: '280px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
          padding: '14px',
          flexShrink: 0,
          textAlign: 'center',
        }}>
          <img 
            src='/planti_2.png' 
            alt='State-of-the-Art Facilities' 
            style={{
              width: '200px', // Adjusted width
              height: '248px', // Adjusted height
              objectFit: 'cover',
              borderRadius: '12px',
              marginBottom: '10px',
              marginLeft:'68px',
            }} 
          />
          <h3 style={{
            fontSize: '20px',
            color: '#2c5a3a',
            fontWeight: '600',
            marginBottom: '8px',
          }}>
            State-of-the-Art Facilities
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#444',
            lineHeight: '1.5',
          }}>
            26 acres of infrastructure for research and demonstration.
          </p>
        </div>

        {/* Card 4 */}
        <div style={{
          minWidth: '280px',
          backgroundColor: '#fff',
          borderRadius: '16px',
          boxShadow: '0 6px 15px rgba(0,0,0,0.1)',
          padding: '14px',
          flexShrink: 0,
          textAlign: 'center',
        }}>
          <img 
            src='/planti_3.png' 
            alt='Innovative Products' 
            style={{
              width: '240px', // Adjusted width
              height: '240px', // Adjusted height
              borderRadius: '12px',
              marginBottom: '10px',
              marginLeft:'70px',
            }} 
          />
          <h3 style={{
            fontSize: '20px',
            color: '#2c5a3a',
            fontWeight: '600',
            marginBottom: '8px',
          }}>
            Innovative Products
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#444',
            lineHeight: '1.5',
          }}>
            Micronutrient mixtures, vermicompost, and organic solutions.
          </p>
        </div>
      </div>

      {/* Scroll Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '40px' }}>
        <button onClick={() => scroll('left')} style={buttonStyle}>←</button>
        <button onClick={() => scroll('right')} style={buttonStyle}>→</button>
      </div>
    </div>
  );
}

// Reusable Styles for Buttons
const buttonStyle = {
  fontSize: '24px',
  padding: '10px 20px',
  margin: '0 10px',
  backgroundColor: '#38755b',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

export default WhatWeOfferSection;
