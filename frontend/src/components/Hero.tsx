const Hero = () => {
  return (
    <div
      className="bg-gray-900 text-white container h-full"
      style={{
        backgroundImage: 'url("https://res.cloudinary.com/drvv53jnw/image/upload/v1709607487/homepage-hero_bjz7t8.jpg")',
      }}
    >
      <div className="py-8">
        <h1 className="text-4xl font-semibold mb-4">
          A dream stay for a bucket list trip
        </h1>
        <p className="text-lg mb-6">
          Make it a trip to remember in a holiday home
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Discover holiday rentals
        </button>
      </div>
    </div>
  );
};

export default Hero;
