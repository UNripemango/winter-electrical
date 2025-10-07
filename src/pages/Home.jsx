import React from 'react';
import ServiceCard from '../components/ServiceCard';
import QuoteForm from '../components/QuoteForm';
import TestimonialSlider from '../components/TestimonialSlider';

const services = [
  {
    title: "Residential Wiring",
    desc: "Complete wiring solutions for your home.",
    icon: "🏠",
  },
  {
    title: "EV Charger Installation",
    desc: "Installations for electric vehicle charging stations.",
    icon: "⚡",
  },
  {
    title: "Emergency Repairs",
    desc: "24/7 urgent electrical repairs.",
    icon: "🚨",
  },
];


export default function Home() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Reliable Local Electricians You Can Count On</h1>
          <p className="mb-6 text-lg">Fast, friendly service across Calgary. Licensed & insured — same-day call-backs when available.</p>
          <div className="flex gap-3">
            <a href="#quote" className="inline-block px-5 py-3 bg-brand-accent text-white rounded-md shadow hover:opacity-95">Get a Free Quote</a>
            <a href="tel:+14045551234" className="inline-block px-5 py-3 border rounded-md">Call Now</a>
          </div>
          <ul className="mt-6 space-y-2 text-sm">
            <li>✔ Licensed & Insured</li>
            <li>✔ 10+ Years Experience</li>
            <li>✔ Locally Owned — Calgary, AB</li>
          </ul>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 shadow-inner">
          <img alt="Electrician working" src="dist/assets/Designer.png" className="w-full h-64 object-cover rounded-md" />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-heading font-semibold mb-4">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-4">
  {services.map(s => (
    <ServiceCard key={s.title} title={s.title} desc={s.desc} icon={s.icon} />
  ))}
</div>

      </div>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h3 className="text-xl font-heading mb-4">What Our Clients Say</h3>
          <TestimonialSlider />
        </div>
        <aside id="quote" className="bg-white p-4 rounded-md shadow">
          <h4 className="font-semibold mb-2">Request Your Free Quote</h4>
          <QuoteForm />
        </aside>
      </div>
    </section>
  );
}
