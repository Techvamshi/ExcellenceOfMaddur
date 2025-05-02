'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/About' },
    { label: 'Training', href: '/Training' },
    { label: 'Demonstration', href: '/Demonstration' },
    { label: 'Activities', href: '/Activities' },
    { label: 'Sales', href: '/Sales' },
  ];

  return (
    <>
      <style jsx>{`
        .navbar-container {
          margin: 35px auto 0 auto;
          height: 50px;
          max-width: 1205px;
          width: 90%;
          background-color: green;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          display: flex;
          overflow: hidden;
          clip-path: ${animate ? 'inset(0% 0% 0% 0%)' : 'inset(0% 50% 0% 50%)'};
          transition: clip-path 1s ease-in-out;
        }

        .link-group {
          display: flex;
          flex-direction: row;
          gap: 50px;
          margin-left: 200px;
          margin-top: 13px;
        }

        .nav-link {
          text-decoration: none;
          color: white;
          cursor: pointer;
          opacity: 0;
          animation: ${animate ? 'fadeIn 0.6s ease forwards' : 'none'};
        }

        .nav-link:nth-child(1) { animation-delay: 0.2s; }
        .nav-link:nth-child(2) { animation-delay: 0.3s; }
        .nav-link:nth-child(3) { animation-delay: 0.4s; }
        .nav-link:nth-child(4) { animation-delay: 0.5s; }
        .nav-link:nth-child(5) { animation-delay: 0.6s; }
        .nav-link:nth-child(6) { animation-delay: 0.7s; }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        .logo-container {
          height: 55px;
          border-bottom-left-radius: 27px;
          overflow: hidden;
          margin-top: -4px;
        }

        .animated-bar {
          height: 4px;
          width: 45px;
          background-color: #655967;
          border-radius: 10px;
          margin-top: 38px;
          margin-left: -608px;
          animation: colorShift 2s infinite ease-in-out;
        }

        @keyframes colorShift {
          0%   { background-color: #2e7d32; }
          25%  { background-color: #00c853; }
          50%  { background-color: #00bfa5; }
          75%  { background-color: #b2ff59; }
          100% { background-color: #2e7d32; }
        }

        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .navbar-container {
            flex-direction: column;
            align-items: center;
            height: auto;
            padding: 15px 10px 20px 10px;
            gap: 10px;
            border-radius: 0 0 15px 15px;
          }

          .logo-container {
            height: 45px;
            margin-top: 0;
          }

          .logo-container video {
            width: 100%;
            height: 100%;
            transform: scale(1.5);
            object-fit: cover;
          }

          .link-group {
            flex-direction: column;
            gap: 12px;
            margin-left: 0;
            margin-top: 10px;
            align-items: center;
          }

          .nav-link {
            font-size: 16px;
            color: #fff;
            opacity: 0;
            animation: ${animate ? 'fadeIn 0.5s ease forwards' : 'none'};
          }

          .animated-bar {
            display: none;
          }
        }
      `}</style>

      <div className="navbar-container">
        <Link href="/">
          <div className="logo-container">
            <video
              src="/logo_2.mp4"
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: '120%',
                height: '305%',
                marginTop: '-54px',
                marginLeft: '-4px',
                objectFit: 'cover',
                transform: 'scale(2)',
                transformOrigin: 'center',
              }}
            />
          </div>
        </Link>

        <div className="link-group">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="animated-bar" />
      </div>
    </>
  );
};

export default Navbar;
