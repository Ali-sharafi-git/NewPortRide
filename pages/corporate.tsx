import Layout from "@/components/layout/layout";
import PageTitle from "@/components/common/page-title";
import ServiceDetailSection from "@/components/services/service-detail-section";
import {useTranslation} from "next-export-i18n";
import corporateData from "@/assets/data/corporate-data";



const AirportTransfers = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('corporate_title')}>
            <PageTitle title={t('service_details')} subtitle={t('lax_limousine_service')}/>
            <ServiceDetailSection title={corporateData.title} image={corporateData.image}
                                  paragraphs={corporateData.paragraphs}/>
        </Layout>
    );
};

export default AirportTransfers;