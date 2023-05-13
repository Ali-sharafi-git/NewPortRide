import Layout from "@/components/layout/layout";
import PageTitle from "@/components/common/page-title";
import ServiceDetailSection from "@/components/services/service-detail-section";
import {useTranslation} from "next-export-i18n";
import pointToPointData from "@/assets/data/point-to-point-data";

const AirportTransfers = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('point_to_point_title')}>
            <PageTitle title={t('service_details')} subtitle={t('lax_limousine_service')}/>
            <ServiceDetailSection title={pointToPointData.title} image={pointToPointData.image}
                                  paragraphs={pointToPointData.paragraphs}/>
        </Layout>
    );
};

export default AirportTransfers;