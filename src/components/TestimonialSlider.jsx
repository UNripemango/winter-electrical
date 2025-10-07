import React from 'react';

const items = [
  {text: 'Winter Electrical did a great job wiring our new kitchen. Professional and efficient.', name: 'Happy Client'},
  {text: 'Fast response and fair pricing when our breaker tripped. Highly recommend.', name: 'L. from Calgary'},
];

export default function TestimonialSlider(){
  return (
    <div className="space-y-4">
      {items.map((it,i)=> (
        <blockquote key={i} className="p-4 border rounded bg-white">
          <p className="text-sm">"{it.text}"</p>
          <footer className="mt-3 text-xs text-slate-600">— {it.name}</footer>
        </blockquote>
      ))}
    </div>
  );
}
