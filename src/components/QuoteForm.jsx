import React from 'react';

export default function QuoteForm() {
  return (
    <div className="mt-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          const payload = Object.fromEntries(data.entries());

          fetch('https://domainaces.app.n8n.cloud/webhook-test/form-test', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          })
            .then(() => alert('Quote request sent — thank you!'))
            .catch(() => alert('Submission failed.'));
        }}
      >
        <label className="block text-sm">
          First Name
          <input
            name="first-name"
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block text-sm">
          Last Name
          <input
            name="last-name"
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block text-sm mt-2">
          Phone
          <input
            name="phone"
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block text-sm">
          Email
          <input
            name="email"
            required
            className="w-full mt-1 p-2 border rounded"
          />
        </label>

        <label className="block text-sm mt-2">
          Service
          <select name="service" className="w-full mt-1 p-2 border rounded">
            <option>Residential Wiring</option>
            <option>EV Charger Installation</option>
            <option>Emergency Repairs</option>
          </select>
        </label>

        <label className="block text-sm mt-2">
          Message
          <textarea
            name="message"
            rows="3"
            className="w-full mt-1 p-2 border rounded"
          />
        </label>

        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-brand-accent text-white rounded"
        >
          Send
        </button>
      </form>

      <p className="text-xs text-slate-500 mt-2">
        This form sends data directly to our automation system powered by n8n.
      </p>
    </div>
  );
}