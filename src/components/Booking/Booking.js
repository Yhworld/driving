import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    hours: '',
    startDate: '',
    availableDays: [],
    additionalRequests: '',
  });

  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

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
  
    emailjs
      .send(
        'service_orpb9xu',
        'template_ve7158r',
        formData,
        'O8dGhFet4qwWbcx95'
      )
      .then(
        (response) => {
          emailjs
            .send(
              'service_orpb9xu',
              'template_8fugpbr',
              formData,
              'O8dGhFet4qwWbcx95'
            )
            .then(
              (autoReplyResponse) => {
                setShowToast(true);
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
                    hours: '',
                    startDate: '',
                    availableDays: [],
                    additionalRequests: '',
                  });
                  navigate('/');
                }, 3000);
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

  return (
    <div className="max-w-2xl mx-auto mb-24">
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-600 text-white p-4 rounded-lg shadow-lg transition-opacity duration-300">
          <p>Booking submitted successfully!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg mt-6">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Book Your Driving Course</h1>

        <div className="grid grid-cols-1 gap-6">
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
              <option value="DrivingFees">Driving Fees</option> {/* Added Driving Fees option */}
            </select>
          </div>

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

          <div>
            <label className="block text-sm font-medium text-gray-700">Hours:</label>
            <select
              name="hours"
              value={formData.hours}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-red-500 focus:border-red-500"
            >
              <option value="">Select Hours</option>
              {/* Hours condition based on course selection */}
              {(formData.course === 'pay' ? [1, 2] : 
                formData.course === 'DrivingFees' ? [1] : 
                [1, 2, 5, 10, 15, 20, 25, 30]
              ).map((hour) => (
                <option key={hour} value={hour}>
                  {hour} hours
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              min={new Date().toISOString().split("T")[0]}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <div>
  <label className="block text-sm font-medium text-gray-700">Available Days of the Week:</label>
  <div className="mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
      <div key={day}>
        <input
          type="checkbox"
          value={day}
          checked={formData.availableDays.includes(day)}
          onChange={handleDaysChange}
          className="mr-2"
        />
        <label>{day}</label>
      </div>
    ))}
  </div>
</div>


          {/* Additional Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Additional Requests:</label>
            <textarea
              name="additionalRequests"
              value={formData.additionalRequests}
              onChange={handleChange}
              placeholder="Any specific requirements?"
              rows="3"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:ring-red-500 focus:border-red-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-red-600 text-white font-bold py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-200"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
