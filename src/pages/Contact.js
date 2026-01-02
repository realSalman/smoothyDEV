import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleWhatsAppClick = (e) => {
    if (!message.trim()) {
      e.preventDefault();
      alert('Please enter a message before sending.');
      return;
    }
    const encodedMessage = encodeURIComponent(message);
    e.currentTarget.href = `https://wa.me/8801560016595?text=${encodedMessage}`;
  };

  return (
    <div className="contact-page animate-fadeIn">
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        id="contact-form"
        className="pt-6 pb-25 sm:px-5 sm:pb-10 sm:pt-0"
      >
        <div className="block max-w-[800px] mx-auto px-5">
          <div className="mb-2">
            <form
              id="wf-form-Contact-Form"
              name="wf-form-Contact-Form"
              data-name="Contact Form"
              autoComplete="on"
            >
              <div className="grid grid-cols-2 gap-5 mt-10 sm:grid-cols-1">
                <div className="col-span-2 sm:col-span-1">
                  <textarea
                    id="Message"
                    name="message"
                    maxLength="5000"
                    data-name="Message"
                    placeholder="Enter message here..."
                    autoComplete="off"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-gray-800 dark:text-gray-100 align-middle bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 w-full h-38 mb-2.5 py-2 px-3 text-sm leading-[1.42857] block min-h-[120px] rounded-full focus:border-primary focus:outline-0 dark:focus:border-primary rounded-xl focus:ring-0 focus:ring-offset-0 shadow-xl"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center">
            <a
              href={message.trim() ? `https://wa.me/8801560016595?text=${encodeURIComponent(message)}` : 'https://wa.me/8801560016595'}
              onClick={handleWhatsAppClick}
              className="cssbuttons-io-button w-64 justify-center items-center mx-auto"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
            >
              Send
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: '#25D366' }}
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
              </div>
            </a>
          </div>
          <p className="text-center text-xs font-light leading-[1.2] block font-poppins mt-3.5 text-gray-600 dark:text-gray-400">(Get instant response)</p>
        </div>
      </motion.section>
      <style>{`
        @keyframes whatsapp-pulse {
          0%, 100% {
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
          }
          50% {
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.5), 0 0 0 10px rgba(37, 211, 102, 0.1);
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
