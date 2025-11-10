import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-white text-gray-800">
      <section className="text-center py-20 px-6 border-b border-gray-200">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-600">
          We’d love to hear from you — get in touch for inquiries, feedback, or collaborations.
        </p>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Whether it’s a question about our products, your order, or anything else, we’re always here to help. 
            Reach out to us using any of the methods below.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Phone className="text-black" size={28} strokeWidth={1.5} />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-black" size={28} strokeWidth={1.5} />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-600">support@foreverwear.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-black" size={28} strokeWidth={1.5} />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-gray-600">Kandivali West, Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-6 text-center">Find Us Here</h2>
          <div className="w-full h-[350px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="Forever Wear Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1777891530493!2d72.82400477521214!3d19.20806468202124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63e5dcd8b59%3A0x3aef70f977ad0f70!2sKandivali%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1709800000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
