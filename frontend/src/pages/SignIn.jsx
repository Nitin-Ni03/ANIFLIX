import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialEmail = location.state?.email || '';

  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: initialEmail,
    password: '',
    confirmPassword: '',
    name: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
      if (!formData.name) {
        setError('Please enter your name.');
        return;
      }
      // Simulate success
      setSuccess(true);
      setTimeout(() => {
        setIsSignUp(false);
        setSuccess(false);
        setError('');
      }, 2000);
    } else {
      // Simulate login
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 1500);
    }
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 pb-16 font-sans flex items-center justify-center">
      <div className="w-full max-w-md px-4 sm:px-6">
        <div className="bg-slate-900/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-slate-800/80 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold tracking-tight">
              {isSignUp ? "Sign Up to" : "Sign In to"}{" "}
              <span className="text-orange-500">ANIFLIX</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              {isSignUp ? 'Register a new account' : 'Access your streaming catalog'}
            </p>
          </div>

          {error && (
            <div className="bg-red-500/15 border border-red-500/30 text-red-400 p-3.5 rounded-xl text-xs font-semibold text-center">
              ⚠️ {error}
            </div>
          )}

          {success && (
            <div className="bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 p-3.5 rounded-xl text-xs font-semibold text-center">
              🎉 {isSignUp ? 'Registration successful! Directing to Sign In...' : 'Login successful! Redirecting to Home...'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-slate-500 outline-none transition-all text-sm"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            )}

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400" htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-slate-500 outline-none transition-all text-sm"
                placeholder="you@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-slate-500 outline-none transition-all text-sm"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>

            {isSignUp && (
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400" htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 text-white placeholder-slate-500 outline-none transition-all text-sm"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-orange-500/20 flex items-center justify-center gap-2 mt-6 text-sm"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </form>

          <div className="text-center pt-4 text-xs text-slate-400 space-y-2 border-t border-slate-800/80">
            <p>
              {isSignUp ? 'Already have an account?' : "New to ANIFLIX?"}{' '}
              <button
                type="button"
                className="text-orange-500 hover:underline font-semibold"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setError('');
                }}
              >
                {isSignUp ? 'Sign In now' : 'Sign Up now'}
              </button>
            </p>
            <p className="text-[10px] text-slate-500 leading-relaxed max-w-280px mx-auto">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
