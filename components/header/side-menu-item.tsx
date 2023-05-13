import SideMenuSubItems from "@/components/header/side-menu-sub-items";
import SideMenuItemChild from "@/components/header/side-menu-item-child";
import {useState} from "react";

type ItemProps = {
    text: string;
    href: string;
};

type Props = ItemProps & {
    subItems?: ItemProps[],
    isModal: boolean;
};

const SideMenuItem = ({text, href, subItems, isModal}: Props) => {
    const [openedChildren, setOpenedChildren] = useState<boolean>(false);

    return (
        <li className="relative">
            {subItems && subItems.length > 0 ? <>
                    <SideMenuItemChild text={text} hasChild={true} isModal={isModal} isOpened={openedChildren} setIsOpened={setOpenedChildren}/>
                    <SideMenuSubItems subItems={subItems} isModal={isModal} isOpened={openedChildren}/>
                </> :
                <SideMenuItemChild text={text} href={href} hasChild={false} isModal={isModal}/>}
        </li>
    );
};

export default SideMenuItem;