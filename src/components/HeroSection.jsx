import heroImg from '../assets/react.svg'; // You can use any image here

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Welcome to MyBrand</h1>
          <p className="text-lg text-gray-600 mb-6">
            We offer top-notch services to help grow your business online.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img src={heroImg} alt="Hero" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
}
