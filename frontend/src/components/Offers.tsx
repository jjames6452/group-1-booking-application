import React from "react";

interface OffersProps {
  title: string;
  description: string;
  buttonTxt: string;
  imageUrl: string;
}

const Offers: React.FC<OffersProps> = ({
  title,
  description,
  buttonTxt,
  imageUrl,
}) => {
  return (
    <div className="relative w-full h-48 border border-gray-300 overflow-hidden rounded-lg">
      <img
        className="object-cover w-full h-full"
        src={imageUrl}
        alt="Sample Image"
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-6 bg-black bg-opacity-50 text-white">
        <h2 className="font-bold mb-2 text-2xl">{title}</h2>
        <div className="text-base mb-2">{description}</div>
        <a
          href="#"
          className="px-4 py-1 bg-blue-500 text-white text-base font-bold no-underline rounded"
        >
          {buttonTxt}
        </a>
      </div>
    </div>
  );
};

export default Offers;
