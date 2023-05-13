import CustomButton from "@/components/common/custom-button";
import {FaLongArrowAltRight} from "react-icons/fa";
import OurPricingItemImage from "@/components/our-pricing/our-pricing-item-image";
import {useTranslation} from "next-export-i18n";
import urls from "@/assets/jsons/urls.json";
import Router from "next/router";

type Props = {
    images: string[];
    title: string;
    subtitle: string;
    detail: string;
    paragraphs: string[];
};

const renderImages = (images: string[], title: string) => {
    switch (images.length) {
        case 1:
            return <figure className="col-start-1 col-end-5 row-start-1 row-end-3">
                <OurPricingItemImage src={images[0]} alt={title}/>
            </figure>;
        case 2:
            return <>
                <figure className="col-start-1 col-end-5 md:col-end-3 row-start-1 row-end-3">
                    <OurPricingItemImage src={images[0]} alt={title}/>
                </figure>
                <figure className="col-start-1 md:col-start-3 col-end-5 row-start-2 md:row-start-1 row-end-3">
                    <OurPricingItemImage src={images[1]} alt={title}/>
                </figure>
            </>;
        case 3:
            return <>
                <figure className="col-start-1 col-end-5 md:col-end-4 row-start-1 row-end-2 md:row-end-3">
                    <OurPricingItemImage src={images[0]} alt={title}/>
                </figure>
                <figure
                    className="col-start-1 md:col-start-4 col-end-3 md:col-end-5 row-start-2 md:row-start-1 row-end-3 md:row-end-2">
                    <OurPricingItemImage src={images[1]} alt={title}/>
                </figure>
                <figure className="col-start-3 md:col-start-4 col-end-5 row-start-2 row-end-3">
                    <OurPricingItemImage src={images[2]} alt={title}/>
                </figure>
            </>;
        default:
            return null;
    }
};

const OurPricingItem = ({images, title, subtitle, detail, paragraphs}: Props) => {
    const {t} = useTranslation();

    return (
        <article className="flex flex-col justify-center items-center gap-8">
            <div className="grid grid-cols-4 grid-rows-2 gap-5">
                {renderImages(images, title)}
            </div>
            <div className="flex flex-col justify-center items-center gap-5 font-bold">
                <h3 className="text-xl md:text-4xl">{title}</h3>
                <h4 className="text-lg md:text-2xl">{subtitle}</h4>
                <h6 className="text-xl md:text-2xl">{detail}</h6>
                <ul className="flex flex-col justify-center items-start text-left gap-5 text-base md:text-xl">
                    {paragraphs.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <CustomButton buttonType="primary" buttonSize="large" className="mt-16"
                              onClick={() => Router.push(urls.booking)}>{t('book_now')} <FaLongArrowAltRight
                    size={30}/></CustomButton>
            </div>
        </article>
    );
};

export default OurPricingItem;