import { ReactNode } from "react";
import { FaBoxOpen, FaCouch, FaGlobe, FaRegCalendarAlt } from "react-icons/fa";

const discoverCharacterBenefitsData: {
  icon: ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <FaCouch size={60} className="mt-6 md:mt-12" />,
    title: "LUXURY AND COMFORT",
    description:
      "Luxury Transportation Services effortlessly and consistently caters to all your transportation requirements in Los Angeles.",
  },
  {
    icon: <FaBoxOpen size={60} className="mt-6 md:mt-12" />,
    title: "SAFETY AND CONFIDENTIALITY",
    description:
      "Our top priority is safety, and as a fully licensed and insured company, we ensure our drivers are experienced and professional.",
  },
  {
    icon: <FaRegCalendarAlt size={60} className="mt-6 md:mt-12" />,
    title: "PERSONAL SCHEDULE",
    description:
      "We are available 24/7, allowing you to schedule your ride from anywhere and at any time.",
  },
  {
    icon: <FaGlobe size={60} className="mt-6 md:mt-12" />,
    title: "TRAVEL ANYWHERE",
    description:
      "Our top-rated limo service in Los Orange county provides luxury car transportation throughout California and Las Vegas.",
  },
];

export default discoverCharacterBenefitsData;
