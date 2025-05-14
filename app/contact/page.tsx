'use client';

import { useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { BsGithub, BsMailbox } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen px-4 py-16 bg-gray-50 text-gray-800 flex flex-col items-center justify-center shadow-lg">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg mb-8 text-gray-600">
            I&apos;d love to hear from you! Whether you have a question or just want to say hi — feel free to drop a message.
          </p>
          <div className="space-y-4">
            <ContactLink
              href="mailto:qamrabbas629@email.com"
              icon={<BsMailbox className="w-5 h-5" />}
              label="qamrabbas629@email.com"
            />
            <ContactLink
              href="https://www.linkedin.com/in/qamar-abbas-7a39902b6/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BVXEC3UuLS9KM0Ypg1zC7aQ%3D%3D"
              icon={<LiaLinkedin className="w-5 h-5" />}
              label="linkedin.com/in/your-profile"
            />
            <ContactLink
              href="https://github.com/qamarabbas01"
              icon={<BsGithub className="w-5 h-5" />}
              label="github.com/your-github"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
              >
                <BiSend size={18} /> Send Message
              </button>
            </form>
          ) : (
            <p className="text-green-600 text-lg font-semibold">
              Thank you for reaching out! I&apos;ll respond as soon as possible.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}

function ContactLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-gray-700 hover:text-black transition"
    >
      {icon}
      <span className="underline underline-offset-2">{label}</span>
    </a>
  );
}
