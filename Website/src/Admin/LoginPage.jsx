import React, { useState } from 'react';
import { Eye, EyeOff, Lock, User, Zap } from 'lucide-react';
import { login } from '../axios/adminApi';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [username , setUsername] = useState("")
  const [password , setPassword] = useState("")

  const navigate = useNavigate()

  async function handleLogin(e){
    e.preventDefault()
    try {
        const data = {username,password}
        const res = await login(data)
        if(res.status == 200){
            navigate('/admin/')
            alert("Login Completed")

        }
    } catch (error) {
        alert(error?.response?.data?.message)
    }
  }

  return (
    /* 1. WRAPPER: Full screen, centered content, midnight background */
    <div className="min-h-screen w-full flex items-center justify-center bg-[#05070a] p-4 relative overflow-hidden">
      
      {/* 2. BACKGROUND DECORATION (Glow effects) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px]" />

      {/* 3. LOGIN CARD: Glassmorphism effect */}
      <div className="w-full max-w-md z-10 animate-in fade-in zoom-in duration-700">
        <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
          
          {/* HEADER: Logo & Title */}
          <div className="flex flex-col items-center mb-8">
            <div className="p-3 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/20 mb-4">
              <Zap size={32} className="text-white" fill="white" />
            </div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h1>
            <p className="text-gray-400 mt-2 text-sm">Please enter your details to sign in</p>
          </div>

          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* USERNAME FIELD */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-1">
                Username
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-500 transition-colors">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="admin_user"
                  className="w-full bg-white/[0.05] border border-white/10 text-white text-sm rounded-xl py-3.5 pl-11 pr-4 outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-gray-600"
                />
              </div>
            </div>

            {/* PASSWORD FIELD */}
            <div className="space-y-2">
              <div className="flex justify-between items-center px-1">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Password
                </label>
                <a href="#" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">Forgot?</a>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500 group-focus-within:text-indigo-500 transition-colors">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/[0.05] border border-white/10 text-white text-sm rounded-xl py-3.5 pl-11 pr-12 outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 transition-all placeholder:text-gray-600"
                />
                {/* Toggle Password Visibility */}
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform active:scale-[0.98] mt-2 flex items-center justify-center gap-2"
            >
              Sign In
            </button>
          </form>

          {/* FOOTER */}
          <p className="text-center text-gray-500 text-sm mt-8">
            Don't have an account? <a href="#" className="text-white font-semibold hover:underline">Request access</a>
          </p>
        </div>

        {/* BOTTOM DECORATION: Simple copyright/links */}
        <div className="mt-8 flex justify-center gap-6 text-xs text-gray-600 font-medium">
          <a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;