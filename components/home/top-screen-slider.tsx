import {Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScreenSlideItem from "@/components/common/screen-slide-item";
import topScreenSliderData from "@/assets/data/top-screen-slider-data";

const TopScreenSlider = () => {
    return (
        <section>
            <Swiper modules={[Navigation, Pagination]} navigation pagination={{clickable: true}} loop speed={2000}
                    autoplay={true} breakpoints={{
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
                {topScreenSliderData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ScreenSlideItem image={item.image} title={item.title} subtitle={item.subtitle}
                                         description={item.description} buttons={item.buttons}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TopScreenSlider;