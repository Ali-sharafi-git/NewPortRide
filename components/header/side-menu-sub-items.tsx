import SideMenuItemChild from "@/components/header/side-menu-item-child";

type Props = {
    subItems: {
        text: string;
        href: string;
    }[];
    isModal: boolean;
    isOpened: boolean;
};

const SideMenuSubItems = ({subItems, isModal, isOpened}: Props) => {
    if (isModal && !isOpened) return null;

    return (
        <ul className={`z-50 border border-white text-base p-1 ${isModal ? 'block' : 'min-w-max w-full absolute top-12 left-0 bg-black hidden hover:block peer-hover:block'}`}>
            {subItems.map((item, index) => (
                <li key={index}>
                    <SideMenuItemChild text={item.text} href={item.href} hasChild={false} isModal={isModal}/>
                </li>
            ))}
        </ul>
    );
};

export default SideMenuSubItems;