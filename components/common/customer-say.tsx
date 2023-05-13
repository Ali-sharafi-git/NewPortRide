import {ReactNode} from "react";
import parse from "html-react-parser";

type Props = {
    image: string;
    name: string;
    comment: ReactNode;
};

const CustomerSay = ({image, name, comment}: Props) => {
    return (
        <article
            className="flex flex-col justify-center items-center text-center border-2 border-white p-16 md:p-28 h-full">
            <img src={image} alt={name}
                 className="w-20 h-20 border-4 border-white rounded-full"/>
            <h5 className="text-2xl font-bold mt-2.5">{name}</h5>
            <p className="mt-14">{parse(comment as string)}</p>
        </article>
    );
};

export default CustomerSay;