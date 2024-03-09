const HeroBanner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-64 lg:h-96"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/drvv53jnw/image/upload/v1709667644/hero_p9hshm.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 lg:w-2/4">
            A dream stay for a bucket list trip
          </h1>
          <p className="text-base md:text-xl">
            Make it a trip to remember in a holiday home
          </p>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
