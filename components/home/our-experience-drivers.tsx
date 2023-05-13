import SectionTitle from "@/components/common/section-title";
import UserCard from "@/components/common/user-card";
import {useTranslation} from "next-export-i18n";
import ourExperienceDriversData from "@/assets/data/our-experience-drivers-data";

const OurExperienceDrivers = () => {
    const {t} = useTranslation();

    return (
        <section className="container mx-auto max-w-6xl my-10 px-5">
            <SectionTitle title={t('our_experience_drivers')} subtitle={t('team')} firstTitle={false} size="large"
                          className="mb-14"/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start gap-7">
                {ourExperienceDriversData.map((item, index) => (
                    <UserCard key={index} image={item.image} name={item.name} instagram={item.instagram}
                              linkedin={item.linkedin}/>
                ))}
            </div>
        </section>
    );
};

export default OurExperienceDrivers;