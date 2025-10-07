import React from 'react';

// This component embeds a Tally form (recommended) and also provides a simple fallback form.
// Steps:
// 1) Create a Tally form and copy its embed URL into TALLY_EMBED_SRC below OR
// 2) Use the fallback form which posts to your n8n webhook (set N8N_WEBHOOK in env when building server-side)
//
const TALLY_EMBED_SRC = 'https://tally.so/embed/your-form-id'; // <- replace with your Tally embed URL

export default function QuoteForm(){
  return (
    <div>
      {/* Tally embed (iframe) */}
      <div className="mb-3">
        <iframe
          title="Tally Quote Form"
          src={TALLY_EMBED_SRC}
          height="520"
          className="w-full border rounded"
          style={{minHeight: '360px'}}
        />
      </div>

      {/* Fallback quick form: posts to an example n8n webhook */}
      <div className="mt-4">
        <form
          onSubmit={(e)=>{
            e.preventDefault();
            const data = new FormData(e.target);
            const payload = Object.fromEntries(data.entries());
            // Send to n8n webhook (replace URL in production)
            fetch('https://your-n8n-webhook.example/webhook', {
              method: 'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify(payload)
            }).then(()=> alert('Quote request sent — thank you!')).catch(()=> alert('Submission failed.'))
          }}
        >
          <label className="block text-sm">Name<input name="name" required className="w-full mt-1 p-2 border rounded" /></label>
          <label className="block text-sm mt-2">Phone<input name="phone" required className="w-full mt-1 p-2 border rounded" /></label>
          <label className="block text-sm mt-2">Service
            <select name="service" className="w-full mt-1 p-2 border rounded">
              <option>Residential Wiring</option>
              <option>EV Charger Installation</option>
              <option>Emergency Repairs</option>
            </select>
          </label>
          <label className="block text-sm mt-2">Message<textarea name="message" rows="3" className="w-full mt-1 p-2 border rounded" /></label>
          <button type="submit" className="mt-3 px-4 py-2 bg-brand-accent text-white rounded">Send</button>
        </form>
        <p className="text-xs text-slate-500 mt-2">Tip: For richer automation and auto-replies use Tally + n8n — see README.</p>
      </div>
    </div>
  );
}
