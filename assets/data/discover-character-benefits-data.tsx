import {ReactNode} from "react";
import {FaBoxOpen, FaCouch, FaGlobe, FaRegCalendarAlt} from "react-icons/fa";

const discoverCharacterBenefitsData: {
    icon: ReactNode;
    title: string;
    description: string;
}[] = [
    {
        icon: <FaCouch size={60} className="mt-6 md:mt-12"/>,
        title: 'LUXURY AND COMFORT',
        description: 'Luxury Transportation Services covers all your transportation needs in Los Angeles effortlessly and consistently.',
    },
    {
        icon: <FaBoxOpen size={60} className="mt-6 md:mt-12"/>,
        title: 'SAFETY AND CONFIDENTIALITY',
        description: 'Safety is our priority, we are fully licensed and insured company, our drivers are experienced and professional',
    },
    {
        icon: <FaRegCalendarAlt size={60} className="mt-6 md:mt-12"/>,
        title: 'PERSONAL SCHEDULE',
        description: 'You can schedule your ride from anywhere and anytime, we are available 24 hours 7 days a week for you.',
    },
    {
        icon: <FaGlobe size={60} className="mt-6 md:mt-12"/>,
        title: 'TRAVEL ANYWHERE',
        description: 'We are top rated Los Angeles limo service that serves all of California and Las Vegas with our luxury cars.',
    },
];

export default discoverCharacterBenefitsData;