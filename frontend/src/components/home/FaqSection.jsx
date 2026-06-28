const FqaSection = () => {
  return (
    <section className="py-16 bg-slate-950/50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-slate-900">
      <h2 className="text-2xl sm:text-3xl font-bold tacking-tight text-center mb-12">
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
          <h3 className="text-large font-bold">Offline Downloads</h3>
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
          <h3 className="text-large font-bold">Simulcast from Japan</h3>
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
          <h3 className="text-large font-bold">Profiles for Everyone</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Create up to five separate profiles per account, each with its own
            watch lists, suggestions, and customized history.
          </p>
        </div>
      </div>
    </section>
  );
};
export default FqaSection;
