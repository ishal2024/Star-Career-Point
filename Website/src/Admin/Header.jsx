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
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('Gallery');

  // Navigation Links Data
  const navLinks = [
    { name: 'Gallery', path : '/', icon: <LayoutGrid size={18} /> },
    { name: 'Resources',path : '/resources', icon: <FileText size={18} /> },
    { name: 'Setting',path : '/setting', icon: <Settings size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--bg-primary)]/80 backdrop-blur-md transition-[var(--transition)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* 1. LEFT SECTION: Branding */}
          <div className="flex items-center gap-2 cursor-pointer group">
            <div className="p-2 rounded-lg bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/20 transition-[var(--transition)] group-hover:rotate-12">
              <Zap size={20} fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
              Coaching<span className="text-[var(--accent)] font-black">AI</span>
            </span>
          </div>

          {/* 2. CENTER SECTION: Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setActiveTab(link.name)}
                className={`relative px-4 py-2 text-sm font-medium transition-[var(--transition)] rounded-[var(--radius-md)] flex items-center gap-2
                  ${activeTab === link.name 
                    ? 'text-[var(--accent)] bg-[var(--accent)]/10' 
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)]'
                  }`}
              >
                {link.icon}
                {link.name}
                {/* Active Indicator Underline */}
                {activeTab === link.name && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-[var(--accent)] rounded-full" />
                )}
              </NavLink>
            ))}
          </div>

          {/* 3. RIGHT SECTION: Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2.5 rounded-[var(--radius-md)] text-[var(--text-secondary)] bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-[var(--transition)] hover:scale-110 active:scale-95"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-[var(--radius-md)] text-[var(--text-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)] transition-[var(--transition)]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 4. MOBILE DRAWER */}
      <div 
        className={`fixed inset-0 top-[64px] md:top-[80px] z-50 w-full  bg-[var(--bg-primary)]/80 border-t border-[var(--border)] transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col p-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                setActiveTab(link.name);
                setIsMobileMenuOpen(false);
              }}
              className={`flex items-center gap-4 p-4 rounded-[var(--radius-lg)] text-lg font-semibold transition-[var(--transition)]
                ${activeTab === link.name 
                  ? 'bg-[var(--accent)] text-white shadow-[var(--shadow-md)]' 
                  : 'text-[var(--text-secondary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)]'
                }`}
            >
              {link.icon}
              {link.name}
            </button>
          ))}
          
          {/* Mobile Profile Peek (Optional) */}
          <div className="mt-10 p-4 border border-[var(--border)] rounded-[var(--radius-lg)] flex items-center gap-3 bg-[var(--bg-secondary)]/50">
             <div className="w-10 h-10 rounded-full bg-[var(--accent)] flex items-center justify-center font-bold text-white">JD</div>
             <div>
                <p className="text-sm font-bold text-[var(--text-primary)]">John Doe</p>
                <p className="text-xs text-[var(--text-muted)]">Admin Dashboard</p>
             </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;