import ContactInfoItem from "@/components/contact-us/contact-info-item";
import {FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope} from "react-icons/fa";
import {useTranslation} from "next-export-i18n";
import websiteInformation from "@/assets/jsons/website-information.json";

const ContactUsInformation = () => {
    const {t} = useTranslation();

    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-16">
            <ContactInfoItem icon={<FaPhoneAlt size={40} color="#000"/>} title={t('phone_call_uppercase')}
                             linkText={websiteInformation.support_number}
                             linkUrl={`tel:${websiteInformation.support_number}`}/>
            <ContactInfoItem icon={<FaRegEnvelope size={40} color="#000"/>} title={t('email_uppercase')}
                             linkText={websiteInformation.support_email}
                             linkUrl={`mailto:${websiteInformation.support_email}`}/>
            <ContactInfoItem icon={<FaMapMarkerAlt size={40} color="#000"/>} title={t('location_uppercase')}
                             linkText={websiteInformation.company_address} linkUrl="#"/>
        </div>
    );
};

export default ContactUsInformation;