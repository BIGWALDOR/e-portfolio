import React from 'react';

import { Navbar } from '../components/Navbar/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar
        links={[
          { link: '/', label: 'Home' },
          { link: '/about', label: 'About' },
          { link: '/projects', label: 'Projects' },
          { link: '/contact', label: 'Contact' },
        ]}
      />
      <h1>Home</h1>
    </div>
  );
}
