import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import BookingForm from './components/BookingForm'
import AdminDashboard from './components/AdminDashboard'
import AdminLogin from './components/AdminLogin'
import { services } from './data/services'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={
          localStorage.getItem('adminToken') ? <AdminDashboard /> : <Navigate to="/admin/login" />
        } />
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-secondary-100 via-primary-50 to-accent-50 py-12 px-4 sm:px-6 lg:px-8 transition-all duration-500">
            <div className="max-w-7xl mx-auto">
              <header className="text-center mb-16">
                <h1 className="text-4xl font-bold text-secondary-900 mb-4 font-sans">
                  Professional Xizmatlar
                </h1>
                <p className="text-xl text-secondary-600">
                  Raqamli xizmatlar uchun yagona yechim
                </p>
              </header>

              <section className="mb-20">
                <h2 className="text-3xl font-bold text-center text-secondary-800 mb-12">
                  Bizning Xizmatlar
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {services.map(service => (
                    <div
                      key={service.id}
                      className="bg-white/90 backdrop-blur-sm rounded-xl shadow-premium hover:shadow-premium-lg transform hover:-translate-y-2 hover:bg-white transition-all duration-500 overflow-hidden"
                    >
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-secondary-800 mb-3">
                          {service.name}
                        </h3>
                        <p className="text-secondary-600 mb-4 min-h-[60px]">
                          {service.description}
                        </p>
                        <span className="block text-2xl font-bold text-primary-600">
                          {service.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-premium hover:shadow-premium-lg transition-all duration-500 p-8 mb-16">
                <BookingForm />
              </section>

              <footer className="text-center py-8 border-t border-secondary-200">
                <p className="text-secondary-600">
                  &copy; 2024 Professional Xizmatlar. Barcha huquqlar himoyalangan.
                </p>
              </footer>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
