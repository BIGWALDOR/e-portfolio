import React from 'react';

import { Navbar } from '../components/Navbar/components/Navbar';
import { Footer } from '../components/Footer/components/Footer';

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
