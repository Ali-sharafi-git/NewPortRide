import Layout from "@/components/layout/layout";
import PageTitle from "@/components/common/page-title";
import SimpleArticleItem from "@/components/common/simple-article-item";
import PageSection from "@/components/common/page-section";
import {useTranslation} from "next-export-i18n";
import termsConditionData from "@/assets/data/terms-condition-data";

const TermsCondition = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('terms_conditions_title')}>
            <PageTitle title={t('terms_conditions_section_title')} subtitle={t('lax_limousine_service')}/>
            <PageSection className="py-16 gap-10 text-center text-lg">
                {termsConditionData.map((item, index) => (
                    <SimpleArticleItem key={index} title={item.title} paragraphs={item.paragraphs}/>
                ))}
            </PageSection>
        </Layout>
    );
};

export default TermsCondition;