import Layout from "@/components/layout/layout";
import PageTitle from "@/components/common/page-title";
import SimpleArticleItem from "@/components/common/simple-article-item";
import PageSection from "@/components/common/page-section";
import {useTranslation} from "next-export-i18n";
import privacyPolicyData from "@/assets/data/privacy-policy-data";

const PrivacyPolicy = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('privacy_policy_title')}>
            <PageTitle title={t('privacy_policy_section_title')} subtitle={t('lax_limousine_service')}/>
            <PageSection className="py-16 gap-10 text-center text-lg">
                {privacyPolicyData.map((item, index) => (
                    <SimpleArticleItem key={index} title={item.title} paragraphs={item.paragraphs}/>
                ))}
            </PageSection>
        </Layout>
    );
};

export default PrivacyPolicy;