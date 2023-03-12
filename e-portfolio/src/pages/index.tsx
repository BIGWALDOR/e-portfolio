import React from 'react';

import { Navbar, Footer } from '../components';

export default function Home() {
  return (
    <>
      <Navbar
        links={[
          { link: '/', label: 'Home' },
          { link: '/about', label: 'About' },
          { link: '/projects', label: 'Projects' },
          { link: '/contact', label: 'Contact' },
        ]}
      />
      <Footer
        links={[
          { link: '/', label: 'Home' },
          { link: '/about', label: 'About' },
          { link: '/projects', label: 'Projects' },
          { link: '/contact', label: 'Contact' },
        ]}
      />
    </>
  );
}
