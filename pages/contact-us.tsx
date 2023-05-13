import Layout from "@/components/layout/layout";
import PageTitle from "@/components/common/page-title";
import PageSection from "@/components/common/page-section";
import ContactUsInformation from "@/components/contact-us/contact-us-information";
import ContactUsActions from "@/components/contact-us/contact-us-actions";
import {useTranslation} from "next-export-i18n";

const ContactUs = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('contact_us_title')}>
            <PageTitle title={t('contact_us_section_title')} subtitle={t('lax_limousine_service')}/>
            <PageSection className="py-16 gap-32 text-center text-lg">
                <ContactUsInformation/>
                <ContactUsActions/>
            </PageSection>
        </Layout>
    );
};

export default ContactUs;