import { useState } from 'react';
import Button from './Button';
import { FiCalendar, FiMail } from 'react-icons/fi';

const BookDemo = () => {
  const [formData, setFormData] = useState({
    email: '',
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (API call, toast, etc.)
    console.log('Booking Demo:', formData);
  };

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container bg-teal-500 w-[70vw] mx-auto rounded-xl">
        <div className="bg-gradient-to-r from-primary/90 to-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          
          <div className="relative z-10 max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-sora leading-tight">
              Book a Free Demo
            </h2>
            <p className="mt-4 text-lg text-white/90 font-sora">
              See how Inteloop can streamline your feedback workflow in a personalized walkthrough.
            </p>
            
            <form 
              onSubmit={handleSubmit} 
              className="mt-8 space-y-4"
            >
              <div className="flex items-center bg-white rounded-md px-4 py-3">
                <FiMail className="text-primary mr-2" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full outline-none text-sm text-gray-700 font-sora bg-transparent"
                />
              </div>

              <div className="flex items-center bg-white rounded-md px-4 py-3">
                <FiCalendar className="text-primary mr-2" />
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full outline-none text-sm text-gray-700 font-sora bg-transparent"
                />
              </div>

              <Button variant="filled" size='md' radius='lg' fullWidth>Book Demo</Button>
            </form>

            <div className="mt-6 inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
              <span className="text-white font-medium font-sora text-sm">Free During Beta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDemo;
