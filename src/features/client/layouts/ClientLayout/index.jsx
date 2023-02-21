import React from "react";

import Header from "../../components/Header/index.jsx";
import Footer from "../../components/Footer/index.jsx";

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
