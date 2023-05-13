import {ReactNode} from "react";

type Props = {
    icon: ReactNode;
    title: string;
    description: string;
};

const IconCard = ({icon, title, description}: Props) => {
    return (
        <article
            className="flex flex-col justify-center items-center text-center border border-c-gray rounded-lg bg-c-dark px-3">
            {icon}
            <h5 className="text-sm md:text-lg font-bold mt-3 md:mt-8">{title}</h5>
            <p className="text-xs md:text-sm mt-3 mb-12 px-0 md:px-3">{description}</p>
        </article>
    );
};

export default IconCard;