import React, { useState } from 'react';
import { X, AlertCircle, GraduationCap, Send, MapPin, Phone, Mail, User } from 'lucide-react';
import '../App.css'
import { enquireNow } from '../axios/mailApi';
import { toast } from 'react-toastify';
import { SyncLoader } from 'react-spinners'
import logo from '../assets/logo2.png'

const EnquireModal = ({ isOpen, onClose, subject }) => {
  // UI-level state for demonstration
  const [showError, setShowError] = useState({ status: false, message: "" });
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  if (!isOpen) return null;

  async function handleEnquireNow(e) {
    try {
      e.preventDefault();
      
      setLoading(true)
      console.log("Everything is working")
      setShowError({ status: false, message: "" })
      if (!contact || contact.length != 10) {
        setShowError({ status: true, message: "Invalid Contact Number , Phone number should be of 10 digits" })
        setLoading(false)
        return
      }
      const data = {
        subject: subject,
        name,
        userEmail: email,
        contact,
        address,
        message
      }

      const res = await enquireNow(data)
      if (res?.data?.status) {
        toast.success("Thank you for your enquiry! Our team will contact you shortly.")
        onClose()
        setLoading(false)
      }
    } catch (error) {
      setShowError({ tatus: true, message: error?.response?.data?.message })
      setLoading(false)
    }
  }

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-[90vw] max-w-xl bg-white shadow-2xl h-[80vh] md:h-auto md:max-h-[90vh] rounded-[var(--radius-lg)] overflow-hidden flex flex-col animate-in fade-in zoom-in duration-300">

        {/* --- 1. PREMIUM STICKY HEADER --- */}
        <header className="sticky top-0 z-30 bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary)] p-4 md:p-6 shadow-md flex items-center justify-between">
          {/* Left: Branding */}
          <div className="flex items-center gap-3">
              <img className='w-12 h-12 rounded-md' src={logo} alt="logo" />
            <div>
              <h2 className="text-white font-black leading-tight tracking-tight text-lg md:text-xl">
                StarPoint Classes
              </h2>
              <p className="text-red-100 text-[10px] uppercase font-bold tracking-widest">
                Enquire Now Form
              </p>
            </div>
          </div>

          {/* Right: Ribbon/Badge */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:block bg-yellow-400 text-red-900 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-[0_0_15px_rgba(250,204,21,0.4)] animate-pulse">
              3-Day Free Demo
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors p-1"
            >
              <X size={28} />
            </button>
          </div>
        </header>

        {/* --- 2. STICKY ERROR BANNER --- */}
        {showError.status && (
          <div className="sticky top-[72px] md:top-[88px] z-20 bg-red-600 text-white px-6 py-3 flex items-center gap-3 animate-in slide-in-from-top duration-300 shadow-lg">
            <AlertCircle size={18} className="shrink-0" />
            <p className="text-sm font-bold">{showError.message}</p>
            <button
              onClick={() => setShowError(false)}
              className="ml-auto text-white/70 hover:text-white text-xs uppercase font-black"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* --- 3. SCROLLABLE FORM SECTION --- */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-black text-gray-900">Enquire Now</h3>
            <p className="text-gray-500 text-sm mt-1">Fill the form below and our counselor will call you shortly.</p>
          </div>

          <form className="space-y-5" onSubmit={handleEnquireNow}>
            {/* Name Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-gray-700 ml-1">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-4 focus:ring-red-50 outline-none transition-all "
                />
              </div>
            </div>

            {/* Contact Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase tracking-wider text-gray-700 ml-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
                  <input
                    type="tel"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    required
                    placeholder="+91 00000 00000"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-4 focus:ring-red-50 outline-none transition-all "
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-black uppercase tracking-wider text-gray-700 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@email.com"
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-4 focus:ring-red-50 outline-none transition-all "
                  />
                </div>
              </div>
            </div>

            {/* Address Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-gray-700 ml-1">Current Location</label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-700" size={18} />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  placeholder="City, State"
                  className="w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-4 focus:ring-red-50 outline-none transition-all "
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase tracking-wider text-gray-700 ml-1">Your Query</label>
              <textarea
                rows="3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Tell us which course you are interested in..."
                className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl focus:border-[var(--color-primary)] focus:ring-4 focus:ring-red-50 outline-none transition-all  resize-none"
              ></textarea>
            </div>

            {/* --- 4. SUBMIT BUTTON --- */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-black py-4 rounded-xl shadow-lg shadow-red-200 flex items-center justify-center gap-2 transition-all active:scale-[0.98] mt-4"
            >
              {!loading ?
              <>
              <Send size={18} /> ENQUIRE NOW</> :
                <div className="flex justify-center items-center">
                  <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              }
            </button>

            <p className="text-[10px] text-center text-gray-700 font-medium">
              By clicking Enquire Now, you agree to our terms and privacy policy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquireModal;