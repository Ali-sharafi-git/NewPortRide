import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
} from "react-icons/fa";
import TopMenuLabelItem from "@/components/header/top-menu-label-item";
import TopMenuIconItem from "@/components/header/top-menu-icon-item";
import { useTranslation } from "next-export-i18n";
import websiteInformation from "@/assets/jsons/website-information.json";

const TopMenu = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center py-1 font-bold">
      <ul className="flex flex-row items-center gap-3 md:gap-10 text-xx md:text-sm">
        <TopMenuLabelItem
          icon={<FaRegEnvelope color="#000" size={12} />}
          text={websiteInformation.support_email}
          href={`mailto:${websiteInformation.support_email}`}
        />
        <TopMenuLabelItem
          icon={<FaPhoneAlt color="#000" size={12} />}
          text={websiteInformation.support_number}
          href={`tel:${websiteInformation.support_number}`}
        />
        <TopMenuLabelItem
          icon={<FaPhoneAlt color="#000" size={12} />}
          text={websiteInformation.support_number2}
          href={`tel:${websiteInformation.support_number2}`}
        />
      </ul>
      <div className="flex items-center gap-6 mt-3 lg:mt-0">
        <span>{t("social_media")}:</span>
        <ul className="flex items-center gap-4">
          <TopMenuIconItem
            icon={<FaFacebook size={20} />}
            href={websiteInformation.social_media_urls.facebook}
          />
          <TopMenuIconItem
            icon={<FaTwitter size={20} />}
            href={websiteInformation.social_media_urls.twitter}
          />
          <TopMenuIconItem
            icon={<FaInstagram size={20} />}
            href={websiteInformation.social_media_urls.instagram}
          />
          <TopMenuIconItem
            icon={<FaLinkedinIn size={20} />}
            href={websiteInformation.social_media_urls.linkedin}
          />
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
