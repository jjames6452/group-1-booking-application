import Offers from "../components/Offers";

const Homepage = () => {
  return (
    <>
      <h2 className="font-bold text-2xl">Offers</h2>
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
    </>
  );
};

export default Homepage;
