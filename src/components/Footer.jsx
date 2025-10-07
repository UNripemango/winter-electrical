import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-slate-100 mt-12">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">© {new Date().getFullYear()} Winter Electrical — Serving Calgary, AB</div>
        <div className="text-sm">Licensed & Insured • Emergency Repairs • EV Charger Install</div>
      </div>
    </footer>
  );
}
