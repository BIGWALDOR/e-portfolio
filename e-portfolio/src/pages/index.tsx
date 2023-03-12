import React from 'react';

import { Footer, Hero, Navbar } from '../components';

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
      <main>
        <Hero />
      </main>
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
