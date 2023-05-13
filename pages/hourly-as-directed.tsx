import Layout from "@/components/layout/layout";
import PageTitle from "@/components/common/page-title";
import ServiceDetailSection from "@/components/services/service-detail-section";
import {useTranslation} from "next-export-i18n";
import hourlyAsDirectedData from "@/assets/data/hourly-as-directed-data";

const AirportTransfers = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('hourly_as_directed_title')}>
            <PageTitle title={t('service_details')} subtitle={t('lax_limousine_service')}/>
            <ServiceDetailSection title={hourlyAsDirectedData.title} image={hourlyAsDirectedData.image}
                                  paragraphs={hourlyAsDirectedData.paragraphs}/>
        </Layout>
    );
};

export default AirportTransfers;