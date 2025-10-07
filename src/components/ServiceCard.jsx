import React from 'react';

export default function ServiceCard({title, desc}){
  return (
    <article className="p-4 border rounded-md bg-white">
      <div className="mb-3">
        <div className="w-12 h-12 bg-gray-100 rounded flex items-center justify-center">🔌</div>
      </div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-slate-600">{desc}</p>
    </article>
  );
}
