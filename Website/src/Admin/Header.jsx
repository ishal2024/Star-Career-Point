import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  LayoutGrid, 
  FileText, 
  Settings, 
  Zap 
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../public/logo.jpeg'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('Gallery');

  const navigate = useNavigate()

  // Navigation Links Data
  const navLinks = [
    { name: 'Gallery', path : '/admin/', icon: <LayoutGrid size={18} /> },
    { name: 'Resources',path : '/admin/resources', icon: <FileText size={18} /> },
    { name: 'Setting',path : '/admin/setting', icon: <Settings size={18} /> },
  ];

  function changeTheme(){
    document.getElementById('adminClass').classList.toggle('light')
  }

  return (
    
<nav className="sticky top-0 z-[100] w-full border-b border-[var(--border)] bg-[var(--bg-primary)] shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16 md:h-20">
      
      {/* 1. LEFT SECTION: Branding */}
      <div className="flex items-center gap-2 cursor-pointer group shrink-0">
        <img src="../../public/logo.jpeg" alt="logo" />
        <span className="text-lg md:text-xl font-bold tracking-tight text-[var(--text-primary)]">
          Coaching<span className="text-[var(--accent)] font-black">AI</span>
        </span>
      </div>

      {/* 2. CENTER SECTION: Desktop Navigation (Hidden on Mobile) */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            onClick={() => setActiveTab(link.name)}
            className={`relative px-4 py-2 text-sm font-semibold transition-all rounded-[var(--radius-md)] flex items-center gap-2
              ${activeTab === link.name 
                ? 'text-[var(--accent)] bg-[var(--accent)]/10' 
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
              }`}
          >
            {link.icon}
            {link.name}
            {/* Improved Active Indicator */}
            {activeTab === link.name && (
              <span className="absolute bottom-[-18px] left-0 w-full h-0.5 bg-[var(--accent)]" />
            )}
          </NavLink>
        ))}
      </div>

      {/* 3. RIGHT SECTION: Actions */}
      <div className="flex items-center gap-2 md:gap-4">
        {/* Theme Toggle - Visible on all screens */}
        <button
          onClick={() => {
            setIsDarkMode(!isDarkMode)
            changeTheme()
          }}
          className="p-2 md:p-2.5 rounded-[var(--radius-md)] text-[var(--text-secondary)] bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all active:scale-90"
          aria-label="Toggle Theme"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Mobile Menu Button - Styled for better touch target */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-[var(--radius-md)] text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border)] active:bg-[var(--bg-tertiary)]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  </div>

  {/* 4. MOBILE DRAWER - Fixed transparency, positioning, and added solid background */}
  <div 
    className={`fixed inset-x-0 bottom-0 top-[64px] z-[90] w-full bg-[var(--bg-primary)] border-t border-[var(--border)] transition-transform duration-300 ease-in-out md:hidden overflow-y-auto
      ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
    `}
  >
    <div className="flex flex-col p-4 space-y-2">
      {navLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => {
            setActiveTab(link.name);
            navigate(link.path);
            setIsMobileMenuOpen(false);
          }}
          className={`flex items-center gap-4 p-4 rounded-[var(--radius-md)] text-base font-bold transition-all
            ${activeTab === link.name 
              ? 'bg-[var(--accent)] text-white shadow-md' 
              : 'text-[var(--text-secondary)] bg-[var(--bg-secondary)] active:bg-[var(--bg-tertiary)]'
            }`}
        >
          <span className={activeTab === link.name ? 'text-white' : 'text-[var(--accent)]'}>
            {link.icon}
          </span>
          {link.name}
        </button>
      ))}
      
      {/* Mobile Profile Footer - Pinned to bottom of menu */}
      <div className="mt-6 p-4 border border-[var(--border)] rounded-[var(--radius-lg)] flex items-center gap-4 bg-[var(--bg-tertiary)]/30">
         <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center font-bold text-white shadow-sm">
            JD
         </div>
         <div className="flex flex-col">
            <p className="text-sm font-bold text-[var(--text-primary)] leading-none">John Doe</p>
            <p className="text-xs text-[var(--text-secondary)] mt-1">Administrator</p>
         </div>
      </div>
    </div>
  </div>
</nav>
  );
};

export default Header;