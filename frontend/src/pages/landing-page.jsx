import { FeatureCard } from "../components/feature-card";
import { TestimonyCard } from "../components/testimony-card";
import Header from "../components/header";

const LandingPage = () => {
  return (
    <div className="min-h-screen" data-theme="light">
      {/* Header (Placeholder)
      <header className="bg-primary p-4 text-white text-center">
        <h1 className="text-2xl">Placeholder Header</h1>
      </header> */}
      <div>
        <Header />
      </div>

      {/* Hero Section */}
      <section className="relative hero min-h-screen">
        {/* Circular Logo - Visible on mobile only */}
        <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gray-400 z-10">
          <img
            src="https://placehold.co/100x100"
            alt="Company Logo"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Background Image */}
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-neutral-content text-center mt-12">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">
                Transform Your Productivity
              </h1>
              <p className="mb-5">Manage tasks effortlessly on the go.</p>
              <button className="btn btn-primary">Sign Up Free</button>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Features Section */}
      <section className="p-4 flex flex-col items-center justify-center gap-6 md:flex-row">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </section>

      <div className="divider"></div>

      {/* Testimonial Section */}
      <section className="p-4 flex flex-col items-center justify-center gap-6">
        {/* Mobile view - Column layout */}
        <div className="md:hidden flex flex-col items-center gap-6">
          <TestimonyCard />
          <TestimonyCard />
        </div>

        {/* Tablet and Desktop view - Carousel layout */}
        <div className="hidden md:flex justify-center w-full">
          <div className="carousel w-full max-w-4xl">
            {/* Carousel items */}
            <div className="carousel-item w-full justify-center">
              <TestimonyCard />
            </div>
            <div className="carousel-item w-full justify-center">
              <TestimonyCard />
            </div>
            {/* Add more <TestimonyCard /> as needed */}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Call to Action Section */}
      <section className="text-center p-4">
        <h2 className="text-2xl font-bold">What are you waiting for?</h2>
        <button className="btn btn-primary btn-lg m-8">Sign Up Free!</button>
      </section>

      {/* Footer (Placeholder) */}
      <footer className="bg-primary text-white text-center p-4 mt-4">
        <p>Placeholder Footer Content</p>
      </footer>
    </div>
  );
};

export default LandingPage;
