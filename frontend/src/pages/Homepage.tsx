import { Link } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Offers from "../components/Offers";
import Trend from "../components/Trend";

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
      description: "Toronto",
      properties: "50 properties",
    },
    {
      place: "Quebec",
      image:
        "https://res.cloudinary.com/drvv53jnw/image/upload/v1709779752/quebec_daalcw.jpg",
      description: "Quebec",
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
      {/* Offers Section */}
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

      {/* Explore Canada Section */}
      <div className="bg-slate-300 py-10">
        <div className="container mx-auto px-4">
          <h2 className="font-bold text-4xl pl-4 mb-4">Explore Canada</h2>
          <p className="text-base pl-4 mb-4">
            These popular destinations have a lot to offer
          </p>
          <Carousel images={images} />
        </div>
      </div>

      {/* Trending Section */}
      <div className="py-10 container mx-auto px-4">
        <h2 className="font-bold text-4xl pl-4 mb-4">Trending destinations</h2>
        <p className="text-base pl-4 mb-4">
          Most popular choices for travellers from Canada
        </p>
        <div className="w-full flex flex-wrap flex-col lg:flex-row gap-4 mb-4">
          <Trend
            imageUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872567/trend-montreal_witk39.jpg"
            title="Montreal"
            iconUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872207/canada-flag_r4bxik.png"
          />
          <Trend
            imageUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872402/trend-toronto_gy5g5v.jpg"
            title="Toronto"
            iconUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872207/canada-flag_r4bxik.png"
          />
        </div>
        <div className="w-full flex flex-wrap flex-col lg:flex-row gap-4">
          <Trend
            imageUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872401/trend-quebec_hilpjn.jpg"
            title="Quebec City"
            iconUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872207/canada-flag_r4bxik.png"
          />
          <Trend
            imageUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872401/trend-niagara_kiibhp.jpg"
            title="Niagara Falls"
            iconUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872207/canada-flag_r4bxik.png"
          />
          <Trend
            imageUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872402/trend-calgary_yn56mi.jpg"
            title="Calgary"
            iconUrl="https://res.cloudinary.com/drvv53jnw/image/upload/v1709872207/canada-flag_r4bxik.png"
          />
        </div>
      </div>
      {/* Discount Section */}
      <div className="container mx-auto flex gap-6 shadow-2xl py-6 px-6 rounded-lg mb-10">
        <div className=" w-1/4">
          <img
            src="https://res.cloudinary.com/drvv53jnw/image/upload/v1710046598/hotel-discount_lq0ona.jpg"
            className=""
          />
          <span className="text-xs hidden lg:block">
            <a href="http://www.freepik.com">
              Designed by vectorjuice / Freepik
            </a>
          </span>
        </div>
        <div>
          <h3 className="font-bold mb-4 text-xl">Get instant discounts</h3>
          <p className="mb-4">
            Simply sign into your Booking.com account and look for the blue
            Genius logo to save
          </p>
          <div className="flex gap-4">
            <Link
              to={"/sign-in"}
              className="py-2 px-4 border rounded border-blue-600 text-blue-600 hover:text-white hover:border-white hover:bg-blue-600 font-semibold"
            >
              Sign in
            </Link>
            <Link
              to={"/register"}
              className="py-2 px-4 text-blue-600 font-semibold hover:bg-blue-600 hover:text-white rounded"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
