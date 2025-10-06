import React from "react";

const Header = () => (
  <header className="bg-navy text-white p-4 flex justify-between items-center">
    <h1 className="text-xl font-heading">Winter Electrical</h1>
    <nav className="space-x-4">
      <a href="/" className="hover:text-amber">Home</a>
      <a href="/services" className="hover:text-amber">Services</a>
      <a href="/about" className="hover:text-amber">About</a>
      <a href="/gallery" className="hover:text-amber">Gallery</a>
      <a href="/contact" className="hover:text-amber">Contact</a>
    </nav>
  </header>
);

export default Header;