import React from 'react';

export default function Header(){
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold">WE</div>
          <div>
            <div className="font-heading font-bold">Winter Electrical</div>
            <div className="text-xs text-slate-500">Calgary, AB</div>
          </div>
        </div>
        <nav className="hidden md:flex gap-4 items-center">
          <a href="#services" className="text-sm">Services</a>
          <a href="#about" className="text-sm">About</a>
          <a href="#quote" className="text-sm">Get a Quote</a>
        </nav>
        <div className="md:hidden">
          <a href="tel:+14045551234" className="text-sm">Call: (403) 555-1234</a>
        </div>
      </div>
    </header>
  );
}
