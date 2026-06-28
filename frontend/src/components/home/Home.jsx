import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../assets/Aniflix-banner.jpeg";

const Home = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (email) {
      navigate("/sign-in", { state: { email } });
    }
  };
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      <div
        className="relative h-[90vh] bg-cover items-center flex justify-center pt-16"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(2, 6, 23, 0.4) 0%, rgba(2, 6, 23, 0.9) 100%), url(${bannerImg})`,
        }}
      >
        <div className="absolute inset-0 bg-slate-950/40"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 z-10 space-y-6">
          <div className="inline-block bg-orange-600/20 text-orange-400 border border-orange-500/30 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-2">
            Now Streaming Worldwide
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Unlimited Anime,{" "}
            <span className="text-orange-500">ZERO Limits</span>
          </h1>
          <p className="text-lg sm:text-2xl text-slate-200 font-medium max-w-2xl mx-auto">
            Starts at just ₹149/month. Cancel at any time. Offline viewing
            enabled.
          </p>
          <p className="text-sm sm:text-base text-slate-300">
            Ready to jump in? Enter your email to create or restart your
            membership.
          </p>
          <form
            onSubmit={handleGetStarted}
            className="flex flex-col sm:flex-row items-center justify-center max-w-xl mx-auto gap-3 pt-2"
          >
            <input
              type="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:flex-1 px-4 py-4 rounded-xl bg-slate-900/80 border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 text-white placeholder-slate-400 outline-none transition-all"
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
      </div>
    </div>
  );
};
export default Home;
