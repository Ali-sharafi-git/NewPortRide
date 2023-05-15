import SectionTitle from "@/components/common/section-title";
import PictureCard from "@/components/common/picture-card";
import { useTranslation } from "next-export-i18n";
import ourLuxuryCarData from "@/assets/data/our-luxury-car-data";

const OurLuxuryCar = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-c-dark">
      <div className="container mx-auto max-w-6xl py-20 px-5">
        <SectionTitle
          title={t("our_luxury_car")}
          subtitle={t("vehicles")}
          firstTitle={false}
          size="large"
          className="mb-24"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {ourLuxuryCarData.map((item, index) => (
            <PictureCard
              key={index}
              image={item.image}
              title={item.title}
              linkText={t("view_more")}
              linkUrl={item.url}
              theme="light"
              size="medium"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurLuxuryCar;
