import Layout from "@/components/layout/layout";
import PageTitle from "@/components/common/page-title";
import ServiceDetailSection from "@/components/services/service-detail-section";
import {useTranslation} from "next-export-i18n";
import airportTransfersData from "@/assets/data/airport-transfers-data";

const AirportTransfers = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('airport_transfers_title')}>
            <PageTitle title={t('service_details')} subtitle={t('lax_limousine_service')}/>
            <ServiceDetailSection title={airportTransfersData.title} image={airportTransfersData.image}
                                  paragraphs={airportTransfersData.paragraphs}/>
        </Layout>
    );
};

export default AirportTransfers;