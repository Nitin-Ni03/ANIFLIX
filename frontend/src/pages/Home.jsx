import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import asset
import { animeList, faqData } from "../data/data";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [openFaq, setOpenFaq] = useState(null);


  const handleGetStarted = (e) => {
    e.preventDefault();
    if (email) {
      navigate("/sign-in", { state: { email } });
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      {/* Hero Banner Section */}
      <Home />
      {/* Anime Slider/Carousel Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Trending Anime Series
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              Our most-watched shows this week
            </p>
          </div>
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded bg-slate-900 text-xs font-semibold text-orange-400 border border-orange-500/10">
              Simulcast
            </span>
            <span className="px-3 py-1 rounded bg-slate-900 text-xs font-semibold text-orange-400 border border-orange-500/10">
              Full HD
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-4">
          {animeList.map((anime) => (
            <div
              key={anime.id}
              className="group relative bg-slate-900 rounded-xl overflow-hidden shadow-md border border-slate-800/60 hover:border-orange-500/40 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <h3 className="font-bold text-xs sm:text-sm line-clamp-1 text-white">
                  {anime.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] text-slate-300 mt-1 font-semibold">
                  <span className="flex items-center gap-0.5 text-orange-400">
                    ⭐ {anime.rating}
                  </span>
                  <span>{anime.year}</span>
                </div>
                <div className="text-[9px] text-slate-400 mt-0.5">
                  {anime.episodes} Episodes
                </div>
              </div>
              {/* Fallback label for touch devices or default state */}
              <div className="p-3 bg-slate-900/90 border-t border-slate-800/40 group-hover:hidden block">
                <h3 className="font-semibold text-[11px] sm:text-xs truncate text-slate-200">
                  {anime.title}
                </h3>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-0.5">
                  <span className="text-orange-400 font-medium">
                    ⭐ {anime.rating}
                  </span>
                  <span>{anime.episodes} Ep</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-16 bg-slate-950/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12">
          Packed With Anime Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-slate-800 transition-colors">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold">Offline Downloads</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Download episodes on the go and watch them wherever you are, even
              without internet access. Perfect for long commutes.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-slate-800 transition-colors">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold">Simulcast from Japan</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Watch new episodes of your favorite airing anime series just one
              hour after they air live in Japan, fully subtitled.
            </p>
          </div>

          <div className="bg-slate-900/40 border border-slate-900 p-6 rounded-2xl space-y-4 hover:border-slate-800 transition-colors">
            <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold">Profiles for Everyone</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Create up to five separate profiles per account, each with its own
              watch lists, suggestions, and customized history.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 border-b border-slate-900">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800/80 rounded-xl overflow-hidden transition-all"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left font-semibold text-base sm:text-lg hover:bg-slate-800/50 transition-colors focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span
                  className={`text-orange-500 font-bold transition-transform duration-300 text-xl ${openFaq === index ? "rotate-45" : ""}`}
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

        <div className="text-center pt-12 space-y-4">
          <p className="text-sm sm:text-base text-slate-300">
            Ready to watch? Enter your email to create or restart your
            membership.
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
    </div>
  );
};

export default Home;
