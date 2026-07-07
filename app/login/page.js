'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        setError('Invalid email or password.');
      } else {
        router.push('/');
        router.refresh();
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-carbon pt-24 pb-16 px-4 flex items-center justify-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none"></div>
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-cian/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[50%] bg-tactical/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="w-full max-w-md glass-panel p-8 relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-syne font-extrabold text-white uppercase tracking-tighter">Sign <span className="text-cian">In</span></h1>
          <p className="text-cyber font-inter mt-2">Welcome back to Sudoku Prime</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 font-mono text-sm p-3 rounded-sm mb-6 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-white font-inter text-sm mb-2">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@sudoku.com" 
              className="w-full bg-black/50 border border-cyber/30 rounded-sm px-4 py-3 text-white font-mono focus:border-cian focus:outline-none transition-colors"
              required 
            />
          </div>
          
          <div>
            <label className="block text-white font-inter text-sm mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full bg-black/50 border border-cyber/30 rounded-sm px-4 py-3 text-white font-mono focus:border-cian focus:outline-none transition-colors"
              required 
            />
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-cian text-carbon font-orbitron font-bold px-6 py-4 rounded-sm uppercase tracking-widest hover:shadow-glow-cian transition-all duration-300 disabled:opacity-50 mt-2"
          >
            {isLoading ? 'Authenticating...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-cyber/30"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0c0c0c] text-cyber font-inter">Or continue with</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <button 
              onClick={() => signIn('google')}
              className="w-full flex items-center justify-center gap-3 bg-white text-black font-inter font-bold px-4 py-3 rounded-sm hover:bg-gray-200 transition-colors"
            >
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>
            <button 
              onClick={() => signIn('facebook')}
              className="w-full flex items-center justify-center gap-3 bg-[#1877F2] text-white font-inter font-bold px-4 py-3 rounded-sm hover:bg-[#1877F2]/90 transition-colors"
            >
              <i className="fab fa-facebook-f text-xl"></i>
              Sign in with Facebook
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
