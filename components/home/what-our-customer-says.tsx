import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionTitle from "@/components/common/section-title";
import CustomerSay from "@/components/common/customer-say";
import {useTranslation} from "next-export-i18n";
import whatOurCustomerSaysData from "@/assets/data/what-our-customer-says-data";

const WhatOurCustomerSays = () => {
    const {t} = useTranslation();

    return (
        <section className="bg-c-dark">
            <div className="container mx-auto max-w-6xl py-20 px-5">
                <SectionTitle title={t('what_our_customer_says')} subtitle={t('testimonial')} firstTitle={false}
                              size="large" className="mb-14"/>
                <div className="px-0 md:px-20">
                    <Swiper modules={[Navigation, Pagination]} navigation pagination={{clickable: true}} loop
                            speed={2000} autoplay={true} breakpoints={{
                        0: {
                            navigation: {
                                enabled: false,
                            },
                        },
                        768: {
                            navigation: {
                                enabled: true,
                            },
                        },
                    }}>
                        {whatOurCustomerSaysData.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CustomerSay image={item.image} name={item.name} comment={item.comment}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default WhatOurCustomerSays;