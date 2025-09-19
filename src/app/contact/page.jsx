export default function Contact() {
  return (
    <main className="text-gray-900 bg-gray-50">
      {/* Header */}
      <section className="px-4 py-16 text-center bg-white shadow-sm sm:px-6 lg:px-8">
        <h1 className="mb-4 text-3xl font-bold text-blue-600 md:text-4xl lg:text-5xl">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-base text-gray-600 md:text-lg">
          Have questions or want to work with us? Fill out the form below and
          we’ll get back to you as soon as possible.
        </p>
      </section>

      {/* Contact Form */}
      <section className="max-w-3xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <form className="p-8 space-y-6 bg-white shadow-md rounded-xl">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Contact Info */}
      <section className="px-4 py-12 text-center text-gray-700 sm:px-6 lg:px-8">
        <p className="mb-2">📍 Location: Bengaluru, India</p>
        <p className="mb-2">📞 Phone: +91 77-7770-9784</p>
        <p>✉️ Email: support@myapp.com</p>
      </section>
    </main>
  );
}