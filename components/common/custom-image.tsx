type Props = {
    src: string;
    alt: string;
    className?: string;
};

const CustomImage = ({src, alt, className}: Props) => {
    return (
        <img src={src} alt={alt} className={`border-4 border-white rounded-2.5xl ${className || ''}`}/>
    );
};

export default CustomImage;