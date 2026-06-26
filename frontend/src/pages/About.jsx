const About = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-16 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About <span className="text-orange-500">ANIFLIX</span></h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto">
            We are the ultimate home for anime fans worldwide, dedicated to delivering the best animation straight to your screens.
          </p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden aspect-[21/9] bg-slate-900 border border-slate-800 flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-slate-950/90 z-0"></div>
          <div className="relative z-10 text-center max-w-lg space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">The Ultimate Anime Experience</h3>
            <p className="text-slate-300 text-xs sm:text-sm">Streaming premium anime series, manga adaptations, and exclusive movies in stunning high definition.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 hover:border-slate-800 transition-colors space-y-3">
            <h2 className="text-xl font-bold text-orange-500">Our Mission</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We strive to bridge the gap between talented Japanese animation creators and anime enthusiasts worldwide. By providing fast, high-quality, and legally licensed streaming, we support the anime industry directly while offering fans the best possible viewing experience.
            </p>
          </div>
          <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-900 hover:border-slate-800 transition-colors space-y-3">
            <h2 className="text-xl font-bold text-orange-500">Why We Exist</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              We believe anime is more than just entertainment; it's a global culture of storytellers, artists, and passionate fans. Whether you've been a fan since the classic era or you're just starting your journey, ANIFLIX is your digital sanctuary.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
