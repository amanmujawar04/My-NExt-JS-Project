export default function Home() {
  return (
    <main className="text-gray-900 bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 text-center bg-white shadow-sm">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-extrabold text-blue-600 sm:text-5xl">
            Welcome to My First Next JS And Tailwind CSS Project.
          </h1>
          <p className="max-w-2xl mx-auto text-base text-gray-600 sm:text-lg">
            This is the home page built with Next.js and styled using Tailwind CSS.
            Explore our About , Courses, and get started by signin  or
            creating an account and contact us also is there And
           This is My First Next.JS And Tailwind Css Project Hope u Like This Project..
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 text-center bg-gray-100">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">About Us</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-700">
            We build web apps using Next.js and Tailwind CSS. Our mission is
            to help developers to learn and create fast, scalable, and beautiful
            applications.
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 text-center bg-white">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">Courses</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-700">
            Explore our curated list of courses designed to take you from beginner
            to advanced in Next.js, Tailwind CSS, and full-stack development.
          </p>
          <a
            href="/course"
            className="inline-block px-6 py-3 text-white transition bg-green-600 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-400"
          >
            View Courses
          </a>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-20 text-center bg-gray-100">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">Log In</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-700">
            Already have an account? Sign in to continue learning and access your
            dashboard.
          </p>
          <a
            href="/login"
            className="inline-block px-6 py-3 text-white transition bg-purple-600 rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-400"
          >
            Log In
          </a>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-20 text-center bg-white">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-semibold sm:text-3xl">Sign Up</h2>
          <p className="max-w-2xl mx-auto mb-6 text-gray-700">
            New here? Create an account and start your journey with our modern
            learning platform today.
          </p>
          <a
            href="/signin"
            className="inline-block px-6 py-3 text-white transition bg-red-600 rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-400"
          >
            Create Account
          </a>
        </div>
      </section>
    </main>
  );
}