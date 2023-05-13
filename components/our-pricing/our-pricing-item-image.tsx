type Props = {
    src: string;
    alt: string;
};

const OurPricingItemImage = ({src, alt}: Props) => {
    return (
        <img src={src} alt={alt} className="w-full h-full object-cover border-2 border-white"/>
    );
};

export default OurPricingItemImage;