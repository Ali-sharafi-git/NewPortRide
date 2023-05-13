import Layout from "@/components/layout/layout";
import PageTitle from "@/components/common/page-title";
import OurPricingItem from "@/components/our-pricing/our-pricing-item";
import PageSection from "@/components/common/page-section";
import {useTranslation} from "next-export-i18n";
import ourPricingData from "@/assets/data/our-pricing-data";

const OurPricing = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('our_pricing_title')}>
            <PageTitle title={t('our_pricing_section_title')} subtitle={t('lax_limousine_service')}/>
            <PageSection className="py-16 gap-16 text-center text-lg">
                {
                    ourPricingData.map((item, index) => (
                        <OurPricingItem key={index} images={item.images} title={item.title} subtitle={item.subtitle}
                                        detail={item.detail} paragraphs={item.paragraphs}/>
                    ))
                }
            </PageSection>
        </Layout>
    );
};

export default OurPricing;