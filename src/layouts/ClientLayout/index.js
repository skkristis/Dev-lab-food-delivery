import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "./index.css";

function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <main className="Layout__main">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
