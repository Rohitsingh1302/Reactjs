import { useState } from "react";
import '../index.css';

export default function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    phone: "",
    password: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.length < 3) newErrors.name = "Name must be at least 3 characters";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (formData.age < 18 || formData.age > 100) newErrors.age = "Age must be between 18 and 100";
    if (formData.phone && !/^\d{10}$/.test(formData.phone)) newErrors.phone = "Phone must be 10 digits";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", age: "", phone: "", password: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4 animate-[gradient_8s_ease_infinite] bg-[length:200%_200%]">
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.5s ease-out; }
        .animate-slideIn { animation: slideIn 0.5s ease-out; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>
      <div className="w-full max-w-lg animate-scaleIn">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-white/20 hover:shadow-3xl transition-shadow duration-300">
          <div className="text-center mb-10 animate-fadeInUp">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mb-4 animate-[spin_3s_ease-in-out_infinite]">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 animate-fadeInUp delay-100">Create Account</h2>
            <p className="text-gray-600 animate-fadeInUp delay-200">Join us today and get started</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="animate-slideIn delay-300">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 border ${errors.name ? 'border-red-400' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white`}
                required
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="animate-slideIn delay-400">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 border ${errors.email ? 'border-red-400' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white`}
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4 animate-slideIn delay-500">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Age *</label>
                <input
                  type="number"
                  name="age"
                  placeholder="25"
                  value={formData.age}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 border ${errors.age ? 'border-red-400' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white`}
                  required
                />
                {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="1234567890"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3.5 border ${errors.phone ? 'border-red-400' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div className="animate-slideIn delay-500">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password *</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-3.5 border ${errors.password ? 'border-red-400' : 'border-gray-300'} rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-gray-50 focus:bg-white`}
                required
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 mt-6 animate-fadeInUp delay-500 hover:animate-pulse"
            >
              Create Account
            </button>
          </form>

          {submitted && (
            <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-xl animate-[bounce_1s_ease-in-out]">
              <p className="text-green-700 font-semibold text-center flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Registration successful!
              </p>
            </div>
          )}

          <p className="text-center text-sm text-gray-500 mt-6 animate-fadeInUp delay-500">
            Already have an account? <span className="text-blue-600 font-semibold cursor-pointer hover:underline hover:scale-105 inline-block transition-transform">Sign in</span>
          </p>
        </div>
      </div>
    </div>
  );
}
