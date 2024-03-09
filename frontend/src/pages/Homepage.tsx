import Carousel from "../components/Carousel/Carousel";
import Offers from "../components/Offers";

const Homepage = () => {
  const images = [
    {
      place: "Montreal",
      image:
        "https://res.cloudinary.com/drvv53jnw/image/upload/v1709869147/montreal_nebysn.jpg",
      description: "Montreal",
      properties: "50 properties",
    },
    {
      place: "Toronto",
      image:
        "https://res.cloudinary.com/drvv53jnw/image/upload/v1709779752/toronto_y6iwpv.jpg",
      description: "toronto",
      properties: "50 properties",
    },
    {
      place: "Quebec",
      image:
        "https://res.cloudinary.com/drvv53jnw/image/upload/v1709779752/quebec_daalcw.jpg",
      description: "quebec",
      properties: "50 properties",
    },
    {
      place: "Niagara",
      image:
        "https://res.cloudinary.com/drvv53jnw/image/upload/v1709779752/niagara_yb7mik.jpg",
      description: "Niagara",
      properties: "50 properties",
    },
    {
      place: "Vancouver",
      image:
        "https://res.cloudinary.com/drvv53jnw/image/upload/v1709869147/vancouver_zhywwb.jpg",
      description: "Vancouver",
      properties: "50 properties",
    },
    {
      place: "Banff",
      image:
        "https://res.cloudinary.com/drvv53jnw/image/upload/v1709869147/banff_s9k2km.jpg",
      description: "Banff",
      properties: "50 properties",
    },
    {
      place: "Calgary",
      image:
        "https://res.cloudinary.com/drvv53jnw/image/upload/v1709869146/calgary_c8iwiv.jpg",
      description: "Calgary",
      properties: "50 properties",
    },
  ];
  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <h2 className="font-bold text-4xl">Offers</h2>
        <p className="text-base mb-4">
          Promotions, deals and special offers for you
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <Offers
            title="Fly away to your dream"
            description="Get inspired, compare and book flights with more flexibility"
            buttonTxt="Search for flights"
            imageUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709669054/offer_kteeei.jpg"
          />
          <Offers
            title="New year, new adventures"
            description="Save 15% or more when you book and stay before 1 April 2024"
            buttonTxt="Find Early 2024 Deals"
            imageUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709778069/adventure_zpylzh.jpg"
          />
        </div>
      </div>
      <div className="bg-slate-300 py-10">
        <div className="container mx-auto">
          <h2 className="font-bold text-4xl pl-4 mb-4">Explore Canada</h2>
          <p className="text-base pl-4 mb-4">
            These popular destinations have a lot to offer
          </p>
          <Carousel images={images} />
        </div>
      </div>
      <div className="py-10 container mx-auto">
        <h2 className="font-bold text-4xl pl-4 mb-4">Trending destinations</h2>
        <p className="text-base pl-4 mb-4">
          Most popular choices for travellers from Canada
        </p>
        <div className="w-full flex flex-wrap flex-col lg:flex-row gap-4 mb-4">
          <a
            href=""
            className="relative flex-1 group overflow-hidden rounded-lg"
          >
            <img
              src="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872567/trend-montreal_witk39.jpg"
              alt=""
              className="w-full transition-transform transform group-hover:scale-105"
            />
            <div className="flex gap-2 absolute top-0 left-0 p-6 w-full bg-gradient-to-b from-slate-600">
              <h3 className="text-3xl font-semibold text-white">Montreal</h3>
              <img
                src="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872207/canada-flag_r4bxik.png"
                alt=""
              />
            </div>
          </a>

          <a
            href=""
            className="relative flex-1 group overflow-hidden rounded-lg"
          >
            <img
              src="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872567/trend-montreal_witk39.jpg"
              alt=""
              className="w-full transition-transform transform group-hover:scale-105"
            />
            <div className="flex gap-2 absolute top-0 left-0 p-6 w-full bg-gradient-to-b from-slate-600">
              <h3 className="text-3xl font-semibold text-white">Montreal</h3>
              <img
                src="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872207/canada-flag_r4bxik.png"
                alt=""
              />
            </div>
          </a>
        </div>
        <div className="w-full flex flex-wrap flex-col lg:flex-row gap-4">
          <a
            href=""
            className="relative flex-1 group overflow-hidden rounded-lg"
          >
            <img
              src="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872567/trend-montreal_witk39.jpg"
              alt=""
              className="w-full transition-transform transform group-hover:scale-105"
            />
            <div className="flex gap-2 absolute top-0 left-0 p-6 w-full bg-gradient-to-b from-slate-600">
              <h3 className="text-3xl font-semibold text-white">Montreal</h3>
              <img
                src="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872207/canada-flag_r4bxik.png"
                alt=""
              />
            </div>
          </a>
          <a
            href=""
            className="relative flex-1 group overflow-hidden rounded-lg"
          >
            <img
              src="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872567/trend-montreal_witk39.jpg"
              alt=""
              className="w-full transition-transform transform group-hover:scale-105"
            />
            <div className="flex gap-2 absolute top-0 left-0 p-6 w-full bg-gradient-to-b from-slate-600">
              <h3 className="text-3xl font-semibold text-white">Montreal</h3>
              <img
                src="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872207/canada-flag_r4bxik.png"
                alt=""
              />
            </div>
          </a>
          <a
            href=""
            className="relative flex-1 group overflow-hidden rounded-lg"
          >
            <img
              src="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872567/trend-montreal_witk39.jpg"
              alt=""
              className="w-full transition-transform transform group-hover:scale-105"
            />
            <div className="flex gap-2 absolute top-0 left-0 p-6 w-full bg-gradient-to-b from-slate-600">
              <h3 className="text-3xl font-semibold text-white">Montreal</h3>
              <img
                src="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872207/canada-flag_r4bxik.png"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Homepage;
