import React from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import Meta from './Meta';
import Copyright from './Copyright';

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Header />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
      <Copyright />
    </>
  );
};

export default Layout;
