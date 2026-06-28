import { animeList } from "../../data/data";

const Animecard = () => {
  return (
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
            className="group relative bg-slate-900 rounded-xl overflow-hidden shadow-md border border-slate-800/60 hover:border-orange-500/90 transition-all duration-400 hover:-translate-y-1.5 cursor-pointer"
          >
            <div className="aspect-3/4 overflow-hidden">
              <img
                src={anime.image}
                alt={anime.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
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
  );
};
export default Animecard;
