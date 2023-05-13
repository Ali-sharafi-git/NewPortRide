import CustomButton from "@/components/common/custom-button";
import {Fragment, MouseEventHandler} from "react";

type Props = {
    image: string;
    title?: string;
    subtitle?: string;
    description?: string;
    buttons?: {
        text: string;
        onClick: MouseEventHandler<HTMLButtonElement>;
        type: 'primary' | 'outline',
        size: 'small' | 'medium' | 'large';
    }[];
};

const ScreenSlideItem = ({image, title, subtitle, description, buttons}: Props) => {
    return (
        <article
            className="flex flex-col justify-center items-center text-center border-2 border-white p-0 md:p-28 h-full">
            <img src={image} alt={title || 'slide'}
                 className="absolute inset-0 w-full h-full"/>
            <div className="absolute inset-0 bg-black opacity-70"></div>
            <div className="z-50 flex flex-col justify-center items-center text-center mt-14">
                {subtitle ? <strong className="text-xl font-bold mb-3">{subtitle}</strong> : <div/>}
                {title ? <h3 className="text-2xl md:text-4xl lg:text-6xl font-bold">{title}</h3> : <div/>}
                {description ? <p className="mt-8 px-5 md:px-40 text-sm md:text-lg">{description}</p> : <div/>}
                {buttons ? <div className="flex flex-col md:flex-row items-center gap-3 md:gap-8 mt-10 md:mt-28 mb-32">
                    {buttons.map((item, index) => (
                        <Fragment key={index}>
                            <CustomButton key={index} buttonType={item.type} buttonSize={item.size}
                                          onClick={item.onClick}>{item.text}</CustomButton>
                            {index !== buttons.length - 1 && <span className="text-4xl font-bold">&</span>}
                        </Fragment>
                    ))}
                </div> : <div/>}
            </div>
        </article>
    );
};

export default ScreenSlideItem;