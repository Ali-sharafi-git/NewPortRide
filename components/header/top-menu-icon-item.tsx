import {ReactNode} from "react";

type Props = {
    icon: ReactNode;
    href: string;
};

const TopMenuIconItem = ({icon, href}: Props) => {
    return (
        <li>
            <a href={href}>
                {icon}
            </a>
        </li>
    );
};

export default TopMenuIconItem;