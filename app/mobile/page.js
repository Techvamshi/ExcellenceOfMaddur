'use client';
import HomeBody from '@/components/HomeMobile';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/mobile', icon: '🏠' },
    { label: 'About', href: '/About', icon: 'ℹ️' },
    { label: 'Training', href: '/Training', icon: '🎓' },
    { label: 'Demonstration', href: '/Demonstration', icon: '🎬' },
    { label: 'Activities', href: '/Activities', icon: '📝' },
    { label: 'Sales', href: '/Sales', icon: '💰' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <style jsx>{`
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 64px;
          background: #008001;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .logo-container {
          height: 64px;
          width: 150px;
          border-radius: 10%;
          overflow: hidden;
        }

        .menu-button {
          position: absolute;
          top: 10px;
          right: 16px;
          background: rgba(255, 255, 255, 0.15);
          border: none;
          color: white;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          font-size: 24px;
          cursor: pointer;
          transition: transform 0.3s ease;
          text-align:center;
        }

        .menu-button:hover {
          transform: scale(1.1) rotate(5deg);
        }

        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(6px);
          z-index: 999;
          opacity: ${isOpen ? '1' : '0'};
          pointer-events: ${isOpen ? 'auto' : 'none'};
          transition: opacity 0.4s ease;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: 80%;
          max-width: 320px;
          height: 100vh;
          background: linear-gradient(to bottom right, #1b5e20, #388e3c);
          z-index: 1000;
          padding: 20px;
          box-shadow: -6px 0 25px rgba(0, 0, 0, 0.3);
          transform: ${isOpen ? 'translateX(0)' : 'translateX(100%)'};
          transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          display: flex;
          flex-direction: column;
          animation: ${isOpen ? 'bounceInRight 0.5s ease-out' : 'none'};
        }

        .menu-header {
          display: flex;
          justify-content: flex-end;
        }

        .nav-button {
          margin-top: 16px;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          font-size: 18px;
          font-weight: 500;
          text-decoration: none;
          padding: 14px 20px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          opacity: ${isOpen ? '1' : '0'};
          animation: ${isOpen ? 'fadeInUp 0.4s ease forwards' : 'none'};
          backdrop-filter: blur(8px);
          transform: translateY(10px);
        }

        .nav-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05) translateX(6px);
          transition: all 0.3s ease;
        }

        .nav-icon {
          margin-right: 12px;
          font-size: 22px;
          transition: transform 0.4s ease;
        }

        .nav-button:hover .nav-icon {
          transform: rotate(10deg) scale(1.2);
        }

        @keyframes bounceInRight {
          0% {
            transform: translateX(100%);
          }
          60% {
            transform: translateX(-20px);
          }
          80% {
            transform: translateX(10px);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="navbar-container" style={{
        borderBottomLeftRadius:'10%',
        borderBottomRightRadius:'10%',
        
      }}>
        <Link href="/mobile">
          <div className="logo-container" style={{
            marginLeft:'-40px',
          }}>
            <video
              src="/logo_2.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                transform: 'scale(4.3)',
              }}
            />
          </div>
        </Link>

        <button
  className="menu-button"
  onClick={() => setIsOpen(!isOpen)}
  aria-label="Menu Toggle"
>
  <img
    src={isOpen ? '/closing.svg' : '/hamburger.svg'}
    alt="Menu Icon"
    style={{ width: '40px',
             height: '50px',
             marginTop:'-3px',
             marginRight:'-2px',
             marginLeft:'2px',

            
          }}
  />
</button>

      </div>

      <div className="overlay" onClick={() => setIsOpen(false)} />

      <div className="mobile-menu">
        <div className="menu-header">
          <button
            className="menu-button"
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
          >
            ×
          </button>
        </div>

        {navItems.map((item, index) => (
          <Link key={index} href={item.href} onClick={() => setIsOpen(false)}>
            <button
              className="nav-button"
              style={{
                animationDelay: `${index * 0.1 + 0.3}s`,
              }}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          </Link>
        ))}
      </div>
      <HomeBody />
    </>
  );
};

export default NavbarMobile;
