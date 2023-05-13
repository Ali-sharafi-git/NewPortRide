import {ReactNode} from "react";

type Props = {
    icon: ReactNode;
    title: string;
    linkText: string;
    linkUrl: string;
};

const ContactInfoItem = ({icon, title, linkText, linkUrl}: Props) => {
    return (
        <div className="flex flex-col justify-center items-center gap-6 font-bold text-center">
            <span className="bg-white rounded-full flex justify-center items-center p-3">
                {icon}
            </span>
            <h5 className="text-xl -mt-4">{title}</h5>
            <a href={linkUrl} className="text-lg">{linkText}</a>
        </div>
    );
};

export default ContactInfoItem;