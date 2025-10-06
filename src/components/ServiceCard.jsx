import React from "react";

const ServiceCard = ({ title, icon }) => (
  <div className="border p-4 rounded shadow hover:shadow-lg transition">
    <div className="text-4xl mb-2">{icon}</div>
    <h4 className="font-bold text-lg">{title}</h4>
    <a href="/services" className="text-amber underline mt-2 block">Learn More</a>
  </div>
);

export default ServiceCard;