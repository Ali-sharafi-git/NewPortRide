import {FaLongArrowAltRight} from "react-icons/fa";
import SectionTitle from "@/components/common/section-title";
import IconCard from "@/components/common/icon-card";
import CustomImage from "@/components/common/custom-image";
import CustomButton from "@/components/common/custom-button";
import {useTranslation} from "next-export-i18n";
import discoverCharacterBenefitsData from "@/assets/data/discover-character-benefits-data";
import urls from "@/assets/jsons/urls.json";
import Router from "next/router";

type Props = {
    hiddenDescription: boolean;
};

const DiscoverCharacterBenefits = ({hiddenDescription}: Props) => {
    const {t} = useTranslation();

    return (
        <section className="container mx-auto max-w-6xl py-20 px-5">
            <SectionTitle title={t('discover_charter_benefits')} subtitle={t('luxury_comfort')} firstTitle={false}
                          size="medium"
                          className={hiddenDescription ? 'mb-24' : 'mb-3'}/>
            {!hiddenDescription && <p className="text-center px-0 md:px-20 mb-24">{t('discover_description')}</p>}
            <div className="flex flex-col lg:flex-row justify-between items-stretch gap-10">
                <div className="flex-1 flex flex-col justify-between items-center gap-24">
                    <CustomImage src="/assets/images/discover_cover.jpg" alt={t('discover_charter_benefits')}
                                 className="!border-2"/>
                    <CustomButton buttonType="primary" buttonSize="large"
                                  onClick={() => Router.push(urls.booking)}>{t('book_now')} <FaLongArrowAltRight
                        size={30}/></CustomButton>
                </div>
                <div className="flex-1 grid grid-cols-2 gap-5">
                    {discoverCharacterBenefitsData.map((item, index) => (
                        <IconCard key={index} icon={item.icon} title={item.title} description={item.description}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverCharacterBenefits;