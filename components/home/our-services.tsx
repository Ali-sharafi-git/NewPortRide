import SectionTitle from "@/components/common/section-title";
import PictureCard from "@/components/common/picture-card";
import {useTranslation} from "next-export-i18n";
import ourServicesData from "@/assets/data/our-services-data";

const OurServices = () => {
    const {t} = useTranslation();

    return (
        <section className="container mx-auto max-w-6xl py-20 px-5">
            <SectionTitle title={t('our_services')} subtitle={t('what_will_you_get')} firstTitle={false} size="large"
                          className="mb-14"/>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {ourServicesData.map((item, index) => (
                    <PictureCard key={index} image={item.image} title={item.title} description={item.description}
                                 linkText={t('learn_more')} linkUrl={item.url} theme="dark" size="medium"/>
                ))}
            </div>
        </section>
    );
};

export default OurServices;