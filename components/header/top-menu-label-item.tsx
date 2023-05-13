import {ReactNode} from "react";

type Props = {
    icon: ReactNode;
    text: string;
    href: string;
};

const TopMenuLabelItem = ({icon, text, href}: Props) => {
    return (
        <li className="flex items-center gap-1">
            <span className="bg-white rounded-full w-5 h-5 flex justify-center items-center">
                {icon}
            </span>
            <a href={href}>{text}</a>
        </li>
    );
};

export default TopMenuLabelItem;