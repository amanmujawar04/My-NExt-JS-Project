export default function Course() {
  return (
    <main className="bg-gray-50 text-gray-900">
      {/* Header */}
      <section className="py-16 text-center bg-white shadow-sm px-4 sm:px-6 lg:px-8">
        <h1 className="mb-4 text-3xl font-bold text-blue-600 md:text-4xl lg:text-5xl">
          Our Courses
        </h1>
        <p className="max-w-2xl mx-auto text-base text-gray-600 md:text-lg">
          Learn modern web development skills with our curated courses on
          Next.js, Tailwind CSS, and full-stack development.
        </p>
      </section>

      {/* Course List */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Course 1 */}
          <div className="p-6 bg-white shadow rounded-xl transition hover:shadow-lg hover:scale-105">
            <h2 className="mb-2 text-xl font-bold text-blue-600">
              Next.js Basics
            </h2>
            <p className="mb-4 text-gray-600">
              Learn the fundamentals of Next.js, including file-based routing,
              components, and fast rendering techniques.
            </p>
            <a href="/login" className="font-medium text-blue-600 hover:underline">
              Enroll Now →
            </a>
          </div>

          {/* Course 2 */}
          <div className="p-6 bg-white shadow rounded-xl transition hover:shadow-lg hover:scale-105">
            <h2 className="mb-2 text-xl font-bold text-green-600">
              Tailwind CSS
            </h2>
            <p className="mb-4 text-gray-600">
              Master Tailwind CSS and learn how to create responsive,
              beautiful, and modern user interfaces with ease.
            </p>
            <a href="/login" className="font-medium text-green-600 hover:underline">
              Enroll Now →
            </a>
          </div>

          {/* Course 3 */}
          <div className="p-6 bg-white shadow rounded-xl transition hover:shadow-lg hover:scale-105">
            <h2 className="mb-2 text-xl font-bold text-purple-600">
              Full Stack Development
            </h2>
            <p className="mb-4 text-gray-600">
              Go beyond the basics and build complete full-stack apps with
              Next.js, APIs, and databases.
            </p>
            <a href="/login" className="font-medium text-purple-600 hover:underline">
              Enroll Now →
            </a>
          </div>

          {/* Course 4 */}
          <div className="p-6 bg-white shadow rounded-xl transition hover:shadow-lg hover:scale-105">
            <h2 className="mb-2 text-xl font-bold text-red-600">React Advanced</h2>
            <p className="mb-4 text-gray-600">
              Deep dive into React hooks, context API, performance optimization,
              and state management techniques.
            </p>
            <a href="/login" className="font-medium text-red-600 hover:underline">
              Enroll Now →
            </a>
          </div>

          {/* Course 5 */}
          <div className="p-6 bg-white shadow rounded-xl transition hover:shadow-lg hover:scale-105">
            <h2 className="mb-2 text-xl font-bold text-yellow-600">
              JavaScript Essentials
            </h2>
            <p className="mb-4 text-gray-600">
              Strengthen your JavaScript skills, from ES6 features to async
              programming and DOM manipulation.
            </p>
            <a href="/login" className="font-medium text-yellow-600 hover:underline">
              Enroll Now →
            </a>
          </div>

          {/* Course 6 */}
          <div className="p-6 bg-white shadow rounded-xl transition hover:shadow-lg hover:scale-105">
            <h2 className="mb-2 text-xl font-bold text-indigo-600">
              Backend with Node.js
            </h2>
            <p className="mb-4 text-gray-600">
              Learn how to build scalable backend applications using Node.js,
              Express, and REST APIs.
            </p>
            <a href="/login" className="font-medium text-indigo-600 hover:underline">
              Enroll Now →
            </a>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 text-center text-white bg-blue-600 px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">
          Start Learning Today
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-base md:text-lg">
          Whether you are a beginner or an experienced developer, our courses
          are designed to help you level up your skills and build amazing
          projects.
        </p>
        <a
          href="/signin"
          className="px-8 py-4 font-semibold text-blue-600 bg-white rounded-lg transition hover:bg-gray-100"
        >
          Sign In to Enroll
        </a>
      </section>
    </main>
  );
}