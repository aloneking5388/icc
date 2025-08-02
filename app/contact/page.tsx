// app/contact/page.tsx
'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // Later: send to backend or email provider
  };

  return (
    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>

      <div className="mb-8">
        <p><strong>Address:</strong> P.O Box 900708, Jinja, Uganda</p>
        <p><strong>Phone:</strong> +256 701 494021</p>
        <p><strong>Email:</strong> <a href="mailto:interchildcare1@gmail.com" className="text-blue-600 underline">interchildcare1@gmail.com</a></p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded shadow">
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Message</label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
          Send Message
        </button>
      </form>
    </main>
  );
};

export default Contact;
