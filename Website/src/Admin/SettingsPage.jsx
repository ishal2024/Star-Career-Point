import React, { useState } from 'react';
import { 
  Lock, 
  Eye, 
  EyeOff, 
  LogOut, 
  ChevronDown, 
  ChevronUp, 
  UserCog,
  ShieldCheck
} from 'lucide-react';
import { changePassword, logout } from '../axios/adminApi';
import { useNavigate } from 'react-router-dom';

const SettingsPage = () => {
  const [isPasswordFormOpen, setIsPasswordFormOpen] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [password , setPassword] = useState("")

  const navigate = useNavigate()


  async function handleChangePassword(e){
    e.preventDefault()
    try {
      const data = {newPassword : password}
      console.log(data)
      const res = await changePassword(data)
      if(res.status == 200){
        alert("Password is changed successfully")
      }
    } catch (error) {
      
    }
  }

  async function handleLogout(){
    try {
      const res = await logout()
      if(res.status == 200){
        navigate('/login')
        alert("Logout Successfully")
      }
       
    } catch (error) {
      
    }
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] p-6 md:p-12 text-[var(--text-primary)] transition-[var(--transition)]">
      <div className="max-w-2xl mx-auto">
        
        {/* 1. HEADER SECTION */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">Settings</h1>
          <p className="text-[var(--text-secondary)] mt-2">
            Manage your account security and preferences.
          </p>
        </div>

        <div className="space-y-6">
          
          {/* 2. CHANGE PASSWORD SECTION (Accordion Card) */}
          <div className={`bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] overflow-hidden transition-[var(--transition)] ${isPasswordFormOpen ? 'ring-1 ring-[var(--accent)]' : ''}`}>
            
            {/* Clickable Header/Trigger */}
            <button 
              onClick={() => setIsPasswordFormOpen(!isPasswordFormOpen)}
              className="w-full flex items-center justify-between p-5 md:p-6 hover:bg-[var(--bg-tertiary)] transition-[var(--transition)] group"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[var(--bg-tertiary)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-white transition-[var(--transition)]">
                  <Lock size={22} />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-lg text-[var(--text-primary)]">Change Password</h3>
                  <p className="text-sm text-[var(--text-muted)]">Update your login credentials</p>
                </div>
              </div>
              {isPasswordFormOpen ? <ChevronUp size={20} className="text-[var(--text-muted)]" /> : <ChevronDown size={20} className="text-[var(--text-muted)]" />}
            </button>

            {/* Expandable Form Section */}
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isPasswordFormOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <form onSubmit={handleChangePassword} className="p-6 pt-2 border-t border-[var(--border)] space-y-5">
                

                {/* Input 2: New Password */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[var(--text-secondary)] px-1">New Password</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] group-focus-within:text-[var(--accent)] transition-colors">
                      <ShieldCheck size={18} />
                    </div>
                    <input 
                      type={showNewPass ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-12 pr-12 py-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-[var(--radius-md)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)]/20 transition-[var(--transition)] placeholder:text-[var(--text-muted)]"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowNewPass(!showNewPass)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                    >
                      {showNewPass ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-[var(--radius-md)] shadow-[var(--shadow-md)] transition-[var(--transition)] active:scale-[0.98] mt-4"
                >
                  Update Password
                </button>
              </form>
            </div>
          </div>


          {/* 4. LOGOUT SECTION */}
          <div className="pt-6 mt-6 border-t border-[var(--border)]">
            <button 
              onClick={handleLogout}
              className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-transparent border-2 border-[var(--danger)] text-[var(--danger)] hover:bg-[var(--danger)] hover:text-white font-bold rounded-[var(--radius-md)] transition-[var(--transition)] active:scale-95 group"
            >
              <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span>Logout from Account</span>
            </button>
          </div>

        </div>

        {/* Footer info */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[var(--text-muted)]">
            Last password change: 3 months ago • Connected as Admin
          </p>
        </div>

      </div>
    </div>
  );
};

export default SettingsPage;