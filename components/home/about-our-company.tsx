import SectionTitle from "@/components/common/section-title";
import CustomImage from "@/components/common/custom-image";
import CustomButton from "@/components/common/custom-button";
import {useTranslation} from "next-export-i18n";
import websiteInformation from "@/assets/jsons/website-information.json";
import urls from "@/assets/jsons/urls.json";
import Router from "next/router";

type Props = {
    hiddenHeader: boolean;
};

const AboutOurCompany = ({hiddenHeader}: Props) => {
    const {t} = useTranslation();

    return (
        <section className="bg-c-dark">
            <div className="container mx-auto max-w-6xl py-20 px-5">
                <div className="flex flex-col-reverse lg:flex-row justify-between items-start gap-10">
                    <div className="flex-1">
                        {!hiddenHeader &&
                            <SectionTitle title={t('lax_limousine_service')} subtitle={t('about_our_company')}
                                          firstTitle={false}
                                          size="medium" className="mb-4 md:!text-left"/>}
                        <p className="text-sm md:text-base text-center md:text-left">{t('about_our_company_description')}</p>
                        <strong
                            className="text-lg font-bold mt-14 block text-center md:text-left mb-5 md:mb-0">{t('call_for_a_book')}:</strong>
                        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-2.5">
                            <a href={`tel:${websiteInformation.support_number}`}
                               className="text-lg font-bold mb-10 md:mb-0">{websiteInformation.support_number}</a>
                            <CustomButton buttonType="primary" buttonSize="medium"
                                          onClick={() => Router.push(urls.booking)}>{t('book_now')}</CustomButton>
                        </div>
                    </div>
                    <div className="mx-auto md:mx-0 flex-1">
                        <CustomImage src="/assets/images/about_cover.jpg" alt={t('about_our_company')}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutOurCompany;