import Layout from "@/components/layout/layout";
import AboutOurCompany from "@/components/home/about-our-company";
import OurServices from "@/components/home/our-services";
import DiscoverCharacterBenefits from "@/components/home/discover-character-benefits";
import OurLuxuryCar from "@/components/home/our-luxury-car";
import OurExperienceDrivers from "@/components/home/our-experience-drivers";
import WhatOurCustomerSays from "@/components/home/what-our-customer-says";
import TopScreenSlider from "@/components/home/top-screen-slider";
import {useTranslation} from "next-export-i18n";

const Home = () => {
    const {t} = useTranslation();

    return (
        <Layout title={t('home_title')}>
            <TopScreenSlider/>
            <AboutOurCompany hiddenHeader={false}/>
            <OurServices/>
            <DiscoverCharacterBenefits hiddenDescription={true}/>
            <OurLuxuryCar/>
            <WhatOurCustomerSays/>
            <OurExperienceDrivers/>
        </Layout>
    )
}

export default Home;
