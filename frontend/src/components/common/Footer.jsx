import { footerData } from '../../../data/data';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Branding & Expandable Locations */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pb-12 border-b border-slate-800">
          
          {/* Logo & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white tracking-wider">
              PENTA <span className="text-orange-500">FREIGHT</span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Delivering seamless supply chain and global logistics solutions for over 30 years. Specialists in air cargo and temperature-sensitive transport.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-800 text-orange-400">
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>

          {/* India Offices Summary */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-lg font-bold text-white">
              {footerData.indiaIntro.title} <span className="text-orange-500">{footerData.indiaIntro.highlight}</span> {footerData.indiaIntro.suffix}
            </h4>
            
            {/* Grid of Branch Offices */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {footerData.indiaOffices.map((office, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700/60 transition-all">
                  <h5 className="font-semibold text-white text-sm pb-1 border-b border-slate-700/50 mb-2">
                    {office.city}
                  </h5>
                  <div className="text-xs space-y-1 text-slate-400">
                    {office.address.map((line, lIdx) => (
                      <p key={lIdx}>{line}</p>
                    ))}
                    <p className="pt-2 text-orange-400 font-medium">
                      Phone: <span className="text-slate-300">{office.phone}</span>
                    </p>
                    {office.email && (
                      <p className="text-slate-400 font-medium">
                        Email: <a href={`mailto:${office.email}`} className="text-orange-400 hover:underline">{office.email}</a>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Section: International / USA Office */}
        <div className="py-12 border-b border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h4 className="text-lg font-bold text-white">
                {footerData.usaIntro.title} <span className="text-orange-500">{footerData.usaIntro.highlight}</span> {footerData.usaIntro.suffix}
              </h4>
              <p className="text-sm text-slate-400 mt-1 max-w-xl">
                {footerData.usaIntro.description}
              </p>
            </div>
            
            {/* Chicago Office Card */}
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-800 hover:border-slate-700 transition-all min-w-[280px]">
              <h5 className="font-semibold text-white text-sm pb-1 border-b border-slate-700 mb-2">
                {footerData.usaOffice.city} (USA)
              </h5>
              <div className="text-xs space-y-1 text-slate-400">
                {footerData.usaOffice.address.map((line, lIdx) => (
                  <p key={lIdx}>{line}</p>
                ))}
                <p className="pt-2 text-orange-400 font-medium">
                  Phone: <span className="text-slate-300">{footerData.usaOffice.phone}</span>
                </p>
                <p className="text-slate-400 font-medium">
                  Email: <a href={`mailto:${footerData.usaOffice.email}`} className="text-orange-400 hover:underline">{footerData.usaOffice.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Footer Links & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            <p>{footerData.copyright}</p>
          </div>
          <div className="flex space-x-6">
            {footerData.bottomLinks.map((link, idx) => (
              <a key={idx} href={link.link} className="hover:text-orange-400 transition-colors">
                {link.title}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
