import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-16 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Contact <span className="text-orange-500">Support</span></h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            Have a question about your subscription, streaming quality, or content requests? Drop us a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Details */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-4">
              <h3 className="text-lg font-bold text-orange-500">Customer Support</h3>
              <p className="text-sm text-slate-400">Our customer support team is available 24/7 to resolve account issues.</p>
              <div className="text-sm space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-orange-500">📞</span> 
                  <a href="tel:000-800-919-1743" className="hover:underline text-slate-300">000-800-919-1743 (Toll-Free)</a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-orange-500">✉️</span> 
                  <a href="mailto:support@aniflix.com" className="hover:underline text-slate-300">support@aniflix.com</a>
                </p>
              </div>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 space-y-3">
              <h3 className="text-lg font-bold text-orange-500">Social Support</h3>
              <p className="text-sm text-slate-400">Join our Discord community or Tweet at us for real-time streaming status updates.</p>
              <div className="flex gap-4 pt-1">
                <a href="#" className="text-sm font-semibold text-orange-400 hover:text-orange-300 hover:underline">@AniflixHelp</a>
                <a href="#" className="text-sm font-semibold text-orange-400 hover:text-orange-300 hover:underline">Discord Support</a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800/80 space-y-4 relative overflow-hidden">
              {submitted && (
                <div className="absolute inset-0 bg-slate-900/95 flex flex-col items-center justify-center text-center p-6 space-y-3">
                  <span className="text-4xl">✉️</span>
                  <h3 className="text-xl font-bold text-orange-500">Message Received!</h3>
                  <p className="text-sm text-slate-400 max-w-xs">We've received your inquiry and our support team will get back to you within 24 hours.</p>
                </div>
              )}
              
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400" htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-slate-500 outline-none transition-all text-sm"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-slate-500 outline-none transition-all text-sm"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-400" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-slate-500 outline-none transition-all text-sm resize-none"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2 mt-4 text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
