export default function About() {
  return (
    <main className="text-gray-900 bg-gray-50">
      {/* Header */}
      <section className="px-4 py-16 text-center bg-white shadow-sm sm:px-6 lg:px-8">
        <h1 className="mb-4 text-3xl font-bold text-blue-600 md:text-4xl lg:text-5xl">
          About Us
        </h1>
        <p className="max-w-2xl mx-auto text-base text-gray-600 md:text-lg">
          We are passionate developers building modern, scalable, and responsive
          web applications using Next.js and Tailwind CSS.
        </p>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-6 text-xl font-semibold text-center md:text-2xl">
          Our Mission
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-center text-gray-700">
          Our mission is to empower developers and businesses with powerful web
          applications that are fast, user-friendly, and visually appealing.
          Using Next.js for performance and Tailwind CSS for design, we create
          projects that deliver both functionality and beauty.
        </p>
      </section>

      {/* Vision Section */}
      <section className="px-4 py-16 bg-gray-100 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="mb-6 text-xl font-semibold md:text-2xl">
            Our Vision
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-gray-700">
            We envision a future where building modern web apps is simple,
            accessible, and efficient. With cutting-edge tools like Next.js,
            Tailwind, and other modern frameworks, we aim to bridge the gap
            between design and development for all.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-6xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <h2 className="mb-12 text-xl font-semibold text-center md:text-2xl">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
          {/* Team Member 1 */}
          <div className="p-6 text-center transition bg-white shadow rounded-xl hover:shadow-lg hover:scale-105">
            <div className="w-24 h-24 mx-auto mb-4 bg-blue-200 rounded-full"></div>
            <h3 className="text-lg font-bold">Aman</h3>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
          {/* Team Member 2 */}
          <div className="p-6 text-center transition bg-white shadow rounded-xl hover:shadow-lg hover:scale-105">
            <div className="w-24 h-24 mx-auto mb-4 bg-green-200 rounded-full"></div>
            <h3 className="text-lg font-bold">Priya Sharma</h3>
            <p className="text-gray-600">UI/UX Designer</p>
          </div>
          {/* Team Member 3 */}
          <div className="p-6 text-center transition bg-white shadow rounded-xl hover:shadow-lg hover:scale-105">
            <div className="w-24 h-24 mx-auto mb-4 bg-purple-200 rounded-full"></div>
            <h3 className="text-lg font-bold">Rahul Singh</h3>
            <p className="text-gray-600">Backend Developer</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-20 text-center text-white bg-blue-600 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">
          Work With Us
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg">
          We love collaborating on exciting projects! If you have an idea,
          want to learn, or want to contribute, let’s connect and build
          something amazing together.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-gray-100"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
