import React from "react";

const testimonials = [
  "Kyle was amazing! Fast and professional.",
  "Great service, fair pricing. Highly recommend.",
  "Installed our EV charger perfectly. Thanks!"
];

const TestimonialSlider = () => (
  <section className="p-6 bg-white text-center">
    <h3 className="text-2xl font-heading mb-4">What Our Customers Say</h3>
    <div className="space-y-4">
      {testimonials.map((quote, index) => (
        <blockquote key={index} className="italic text-gray-700">“{quote}”</blockquote>
      ))}
    </div>
  </section>
);

export default TestimonialSlider;