import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';

interface SocialMediaLink {
  name: string;
  url: string;
  icon: any;
}

const socialMediaLinks: SocialMediaLink[] = [
  { name: 'Facebook', url: 'https://www.facebook.com', icon: faFacebook },
  { name: 'Twitter', url: 'https://www.twitter.com', icon: faXTwitter },
  { name: 'Instagram', url: 'https://www.instagram.com', icon: faInstagram },
];

const Footer: React.FC = () => {
  return (
    <div className="bg-blue-800 py-10">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4">
        <div className="text-white font-bold tracking-tight mb-4 lg:mb-0 text-center lg:text-left">
          <span className="text-3xl">MernHolidays.com</span>
        </div>
        <div className="text-white font-bold tracking-tight flex flex-col items-center lg:items-start">
          <p className="mb-2">Follow Us On</p>
          <div className="flex justify-center gap-4">
            {socialMediaLinks.map((link) => (
              <div key={link.name} className="text-white cursor-pointer social-icon">
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={link.icon} size="2x" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="text-white font-bold tracking-tight flex gap-4 text-center lg:text-left">
          <Link to="/privacy-policy" className="text-white cursor-pointer hover:underline">
            Privacy Policy
          </Link>
          <Link to="/terms-of-service" className="text-white cursor-pointer hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
      {/* Copyright information at the bottom */}
      <div className="text-white text-center mt-4">
        <p>&copy; 2024 MernHolidays.com. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
