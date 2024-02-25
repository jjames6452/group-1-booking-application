import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold mb-4 text-3xl">Privacy Policy</h1>

      <p className="mb-2">
        Welcome to Hotel Booking app . This Privacy Policy outlines how we
        collect, use, disclose, and protect your information when you use our
        services.
      </p>

      <h2 className="text-xl mb-2 font-bold">Information We Collect</h2>
      <p className="mb-2">
        We collect various types of information when you use our App, including
        but not limited to:
      </p>

      <ul className="list-disc list-inside mb-2">
        <li>
          Personal Information: Name, contact details, and other identifiable
          information.
        </li>
        <li>Booking Information: Details of your hotel reservations.</li>
        <li>
          Payment Information: Credit card details for processing payments.
        </li>
        <li>
          Device Information: Information about your device, such as IP address
          and device type.
        </li>
        <li>Usage Information: Data on how you interact with our App.</li>
      </ul>

      <h2 className="text-xl mb-2 font-bold">How We Use Your Information</h2>
      <p className="mb-2">
        We use the collected information for various purposes, including but not
        limited to:
      </p>
      <ul className="list-disc list-inside mb-2">
        <li>Processing and managing hotel bookings.</li>
        <li>Providing customer support and responding to inquiries.</li>
        <li>Improving and optimizing our services.</li>
        <li>Sending promotional offers and updates (with your consent).</li>
        <li>Ensuring the security and integrity of our App.</li>
      </ul>

      <h2 className="text-xl mb-2 font-bold">Sharing Your Information</h2>
      <p className="mb-2">
        We may share your information with third parties for the following
        purposes:
      </p>
      <ul className="list-disc list-inside mb-2">
        <li>
          Hotel Partners: Sharing necessary details to fulfill your bookings.
        </li>
        <li>Payment Processors: Facilitating secure payment transactions.</li>
        <li>
          Service Providers: Engaging third-party services for app
          functionality.
        </li>
        <li>
          Legal Compliance: Complying with legal requirements and protecting our
          rights.
        </li>
      </ul>

      <h2 className="text-xl mb-2 font-bold">Security Measures</h2>
      <p className="mb-2">
        We implement industry-standard security measures to protect your
        information from unauthorized access, disclosure, alteration, and
        destruction.
      </p>

      <h2 className="text-xl mb-2 font-bold">Your Choices</h2>
      <p className="mb-2">You have the right to:</p>
      <ul className="list-disc list-inside mb-2">
        <li>Access, correct, or delete your personal information.</li>
        <li>Opt-out of receiving promotional communications.</li>
        <li>Disable location tracking through your device settings.</li>
      </ul>

      <h2 className="text-xl mb-2 font-bold">Changes to This Privacy Policy</h2>
      <p className="mb-2">
        We may update this Privacy Policy from time to time. Any changes will be
        posted on this page, and the effective date will be indicated.
      </p>

      <h2 className="text-xl mb-2 font-bold">Contact Us</h2>
      <p className="mb-2">
        If you have any questions or concerns about this Privacy Policy, please
        contact us at Hotelbooking@gmail.com.
      </p>

      <p className="mb-4 text-sm">
        <i>Last updated: 2 febuary 2024</i>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
