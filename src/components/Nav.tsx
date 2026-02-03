import React from 'react';

const navItems = [
  { label: 'Home', href: '/homepage' },
  { label: 'Work', href: '/work' },
  { label: 'Photography', href: '/photography' },
  { label: 'Bookmarks', href: '/bookmarks' },
  { label: 'Writings', href: '/writings' },
  { label: 'Sims 3', href: '/sims-3' },
];

const Nav: React.FC = () => {
  return (
    <>
      <nav
        style={{
          display: 'flex',
          gap: '32px',
          padding: '40px',
          justifyContent: 'center',
        }}
      >
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="nav-link"
            style={{
              fontSize: '11px',
              textDecoration: 'none',
              color: '#0000FE',
              transition: 'all 0.2s ease',
              fontFamily: "'Departure Mono', monospace",
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <style>{`
        .nav-link:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  );
};

export default Nav;
