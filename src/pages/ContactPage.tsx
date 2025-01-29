import React from 'react';
import { MapPin, Phone, AtSign, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <section className="min-h-screen py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16">Details Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="card-3d bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">About Me</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="text-indigo-600" size={20} />
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-gray-600">Mohali, Punjab, INDIA</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-indigo-600" size={20} />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-gray-600">9861598082</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <AtSign className="text-indigo-600" size={20} />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">gsoumya671@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-3d bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;