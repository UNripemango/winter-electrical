import React from "react";
import ServiceCard from "../components/ServiceCard";
import TestimonialSlider from "../components/TestimonialSlider";

const Home = () => (
  <main>
    <section className="bg-navy text-white p-10 text-center">
      <h2 className="text-3xl font-heading mb-2">Reliable Local Electricians You Can Count On.</h2>
      <p className="mb-4">Fast, friendly service for your home or business.</p>
      <a href="/contact" className="bg-amber text-navy px-6 py-2 rounded font-bold">Get a Free Quote</a>
    </section>
    <section className="p-6 text-center">
      <p className="text-lg font-semibold">Licensed & Insured • 10+ Years Experience • Locally Owned</p>
    </section>
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <ServiceCard title="Panel Upgrades" icon="⚡" />
      <ServiceCard title="Lighting Installation" icon="💡" />
      <ServiceCard title="Emergency Repairs" icon="🚨" />
      <ServiceCard title="EV Chargers" icon="🔌" />
    </section>
    <section className="bg-gray-100 p-6 grid grid-cols-1 md:grid-cols-3 text-center">
      <div><h3 className="font-bold">Fast Response</h3></div>
      <div><h3 className="font-bold">Upfront Pricing</h3></div>
      <div><h3 className="font-bold">Guaranteed Work</h3></div>
    </section>
    <TestimonialSlider />
    <section className="bg-amber text-navy p-6 text-center">
      <p className="text-xl font-bold">Need help today? Call (403) 555-1234 or <a href="/contact" className="underline">Request a Quote →</a></p>
    </section>
  </main>
);

export default Home;