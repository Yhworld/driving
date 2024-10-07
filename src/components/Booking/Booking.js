import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import emailjs from 'emailjs-com';

function BookingForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    address: '',
    phone: '',
    course: '',
    transmission: '',
    hours: 5,
    startDate: '',
    availableDays: [],
  });

  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDaysChange = (e) => {
    const { value, checked } = e.target;
    const updatedDays = checked
      ? [...formData.availableDays, value]
      : formData.availableDays.filter((day) => day !== value);
    setFormData({ ...formData, availableDays: updatedDays });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Send the booking confirmation email (first template)
    emailjs
      .send(
        'service_orpb9xu',
        'template_ve7158r', // Booking confirmation template
        formData,
        'O8dGhFet4qwWbcx95'
      )
      .then(
        (response) => {
          // After booking confirmation is sent, send auto-reply email (second template)
          emailjs
            .send(
              'service_orpb9xu',
              'template_8fugpbr', // Auto-reply template
              formData, // Send same data or modify as needed for the auto-reply
              'O8dGhFet4qwWbcx95'
            )
            .then(
              (autoReplyResponse) => {
                setShowToast(true); // Show success toast after both emails are sent
                setTimeout(() => {
                  setShowToast(false);
                  setFormData({
                    firstName: '',
                    surname: '',
                    email: '',
                    address: '',
                    phone: '',
                    course: '',
                    transmission: '',
                    hours: 5,
                    startDate: '',
                    availableDays: [],
                  });
                  navigate('/'); // Redirect to homepage after success
                }, 3000); // Wait 3 seconds before redirecting
              },
              (autoReplyError) => {
                alert('Failed to send auto-reply. Please try again.');
              }
            );
        },
        (error) => {
          alert('Failed to submit booking. Please try again.');
        }
      );
  };

  // Determine min and max hours based on the selected course
  const getHoursConstraints = () => {
    if (formData.course === 'pay') {
      return { min: 2, max: 3 }; // For "Pay as you go"
    }
    return { min: 5, max: 50 }; // For other courses
  };

  const { min, max } = getHoursConstraints();

  return (
    <div className="max-w-2xl mx-auto mb-24">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300">
          <p>Booking submitted successfully!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg mt-6">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Book Your Driving Course</h1>

        <div className="grid grid-cols-1 gap-6">
          {/* First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Surname */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Surname:</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone:</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Course */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Course:</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select Course</option>
              <option value="pay">Pay as you go</option>
              <option value="Beginner">Beginner Course</option>
              <option value="Refresher">Refresher Course</option>
              <option value="Crash">Intensive Crash Course</option>
            </select>
          </div>

          {/* Transmission Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Transmission Type:</label>
            <select
              name="transmission"
              value={formData.transmission}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select Transmission</option>
              <option value="Manual">Manual</option>
              <option value="Automatic">Automatic</option>
            </select>
          </div>

          {/* Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Hours:</label>
            <input
              type="number"
              name="hours"
              min={min}
              max={max}
              value={formData.hours}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-red-500 focus:border-red-500"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]} // Prevents selecting past dates
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          {/* Available Days */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Available Days of the Week:</label>
            <div className="mt-2 grid grid-cols-3 gap-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                <div key={day}>
                  <input
                    type="checkbox"
                    value={day}
                    checked={formData.availableDays.includes(day)}
                    onChange={handleDaysChange}
                    className="mr-2"
                  />
                  <span>{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full bg-red-600 text-white font-semibold py-2 rounded-md shadow-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}

export default BookingForm;
