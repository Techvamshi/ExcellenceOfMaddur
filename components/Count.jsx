'use client'

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

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: '#f0f9f4',
        padding: '100px 20px',
        textAlign: 'center',
        borderRadius: '24px',
        margin: '60px auto',
        boxShadow: '0 12px 36px rgba(0, 0, 0, 0.06)',
        maxWidth: '1200px',
      }}
    >
      <p style={{
        fontSize: '42px',
        color: '#2F4F2F',
        fontWeight: 1000,
        marginBottom: '20px',
        color:'green',
      }}>
        Our Impact
      </p>

      <p style={{
        fontSize: '18px',
        color: '#444',
        maxWidth: '800px',
        margin: '0 auto 60px',
        lineHeight: '1.8',
      }}>
        Trained over <strong>7,000 individuals</strong> in advanced horticulture techniques. <br />
        Distributed <strong>40+ lakhs</strong> of high-quality planting materials. <br />
        Pioneered sustainable farming practices in the region.
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
        marginBottom: '60px',
      }}>
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              background: '#ffffff',
              padding: '30px 20px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              minWidth: '220px',
              flex: '1',
              transition: 'transform 0.3s ease',
            }}
          >
            <h3 style={{
              fontSize: '48px',
              color: '#2F4F2F',
              fontWeight: '700',
              marginBottom: '10px',
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
              fontSize: '16px',
              color: '#666',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      <p style={{
        fontSize: '20px',
        maxWidth: '700px',
        margin: '0 auto 30px',
        color: '#2E3D2C',
        lineHeight: '1.7',
      }}>
        <strong>Join the Horticulture Revolution!</strong> Whether you're a seasoned farmer, a budding entrepreneur, or a passionate gardener, we invite you to be part of the transformation.
      </p>

      <button style={{
        marginTop: '20px',
        padding: '14px 32px',
        fontSize: '16px',
        fontWeight: '600',
        backgroundColor: '#3E5B3A',
        color: '#fff',
        border: 'none',
        borderRadius: '12px',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(62, 91, 58, 0.3)',
        transition: 'all 0.3s ease',
      }}>
        Get Involved
      </button>
    </section>
  );
}

export default OurImpactSection;
