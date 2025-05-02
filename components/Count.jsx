'use client';

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function OurImpactSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { label: 'Individuals Trained', value: 7000 },
    { label: 'Lakhs of Planting Materials Distributed', value: 40, suffix: '+' },
    { label: 'Sustainable Farming Practices', value: 1, suffix: '+' },
  ];

  // Check if device width is small (for responsiveness)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#f0f9f4',
        padding: isMobile ? '40px 20px' : '100px 20px',
        textAlign: 'center',
        borderRadius: '24px',
        margin: '60px auto',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.06)',
        maxWidth: '1200px',
        transition: 'all 0.3s ease-in-out',
      }}
    >
      <p style={{
        fontSize: isMobile ? '28px' : '42px',
        color: 'green',
        fontWeight: 1000,
        marginBottom: '20px',
      }}>
        Our Impact
      </p>

      <p style={{
        fontSize: isMobile ? '16px' : '18px',
        color: '#444',
        maxWidth: '800px',
        margin: '0 auto 40px',
        lineHeight: '1.8',
        fontWeight: '400',
      }}>
        Trained over <strong>7,000 individuals</strong> in advanced horticulture techniques. <br />
        Distributed <strong>40+ lakhs</strong> of high-quality planting materials. <br />
        Pioneered sustainable farming practices in the region.
      </p>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap',
        marginBottom: '40px',
      }}>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              background: '#ffffff',
              padding: isMobile ? '20px' : '30px 20px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              minWidth: isMobile ? '100%' : '220px',
              flex: '1',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            <h3 style={{
              fontSize: isMobile ? '32px' : '48px',
              color: '#2F4F2F',
              fontWeight: '700',
              marginBottom: '10px',
              letterSpacing: isMobile ? '0' : '-1px',
            }}>
              {inView ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix || ''}
                  separator=","
                />
              ) : (
                0
              )}
            </h3>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#666',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              fontWeight: '500',
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <p style={{
        fontSize: isMobile ? '16px' : '20px',
        maxWidth: '700px',
        margin: '0 auto 30px',
        color: '#2E3D2C',
        lineHeight: '1.7',
        fontWeight: '400',
      }}>
        <strong>Join the Horticulture Revolution!</strong> Whether you're a seasoned farmer, a budding entrepreneur, or a passionate gardener, we invite you to be part of the transformation.
      </p>

      <button style={{
        marginTop: '20px',
        padding: '12px 28px',
        fontSize: isMobile ? '14px' : '16px',
        fontWeight: '600',
        backgroundColor: '#3E5B3A',
        color: '#fff',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(62, 91, 58, 0.3)',
        transition: 'all 0.3s ease',
        width: isMobile ? '100%' : 'auto',
      }}>
        Get Involved
      </button>
    </section>
  );
}

export default OurImpactSection;
