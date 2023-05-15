import Layout from "@/components/layout/layout";
import AboutOurCompany from "@/components/home/about-our-company";
import DiscoverCharacterBenefits from "@/components/home/discover-character-benefits";
import OurExperienceDrivers from "@/components/home/our-experience-drivers";
import PageTitle from "@/components/common/page-title";
import { useTranslation } from "next-export-i18n";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <Layout title={t("about_us_title")}>
      <PageTitle
        title={t("about_us_section_title")}
        subtitle={t("lax_limousine_service")}
      />
      <AboutOurCompany hiddenHeader={true} />
      <DiscoverCharacterBenefits hiddenDescription={false} />
      {/* <OurExperienceDrivers/> */}
    </Layout>
  );
};

export default AboutUs;
