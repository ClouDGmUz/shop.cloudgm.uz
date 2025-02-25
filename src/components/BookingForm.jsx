import { useState } from 'react';
import { services } from '../data/services';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceId: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Buyurtma yuborishda xatolik');
      }

      alert('Buyurtma muvaffaqiyatli yuborildi!');
      setFormData({ name: '', phone: '', serviceId: '' });
    } catch (error) {
      console.error('Buyurtma yuborishda xatolik:', error);
      alert('Buyurtma yuborishda xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold text-secondary-800 mb-8 text-center">Xizmat buyurtma qilish</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium text-secondary-700">
            Xizmatni tanlang
          </label>
          <select
            id="service"
            name="serviceId"
            value={formData.serviceId}
            onChange={handleChange}
            required
            className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-secondary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 rounded-md shadow-sm transition duration-150 ease-in-out"
          >
            <option value="">Xizmat turini tanlang...</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name} - {service.price}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-secondary-700">
            Ismingiz
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="To'liq ismingizni kiriting"
            className="mt-1 block w-full px-3 py-3 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150 ease-in-out"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-secondary-700">
            Telefon raqamingiz
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+998"
            className="mt-1 block w-full px-3 py-3 border border-secondary-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition duration-150 ease-in-out"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition duration-150 ease-in-out font-medium text-base shadow-sm"
        >
          Buyurtma berish
        </button>
      </form>
    </div>
  );
};

export default BookingForm;