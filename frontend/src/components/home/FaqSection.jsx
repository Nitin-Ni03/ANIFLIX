import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faqData } from "../../data/data";

const FqaSection = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [email, setEmail] = useState("");

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (email) {
      navigate("/sign-in", { state: { email } });
    }
  };

  return (
    <section className="py-16 max-w-4xl mx-auto sm:px-6 border-b border-slate-900">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            lassName="bg-slate-900 border border-slate-800/80 rounded-xl overflow-hidden transition-all"
          >
            <button
              className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-base sm:text-lg hover:bg-slate-800/50  transition-colors focus:outline-none"
              onclick={() => toggleFaq(index)}
            >
              <span>{faq.question}</span>
              <span
                className={`text-orange-500 font-bold transition-transform duration-300 text-xl ${openFaq === index ? "rotate" - 45 : ""}`}
              >
                +
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === index ? "max-h-60 border-t border-slate-800/60" : "max-h-0"}`}
            >
              <p className="p-6 text-sm sm:text-base text-slate-300 leading-relaxed bg-slate-900/60">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* email section */}

      <div className="text-center pt-12 space-y-4">
        <p className="text-sm sm:text-base text-slate-300">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form
          onSubmit={handleGetStarted}
          className="flex flex-col sm:flex-row items-center justify-center max-w-xl mx-auto gap-3"
        >
          <input
            type="email"
            placeholder="Email address"
            className="w-full sm:flex-1 px-4 py-4 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 text-white placeholder-slate-400 outline-none transition-all"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-8 py-4 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Get Started
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};
export default FqaSection;
