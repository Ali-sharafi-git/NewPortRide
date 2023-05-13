import SideMenuItem from "@/components/header/side-menu-item";
import headerMenuListData from "@/assets/data/header-menu-list-data";

type Props = {
    isModal: boolean;
};

const SideMenuList = ({isModal}: Props) => {
    return (
        <ul className={`${isModal ? 'flex text-center mr-32' : 'hidden md:flex'} flex-col md:flex-row gap-1 font-bold text-lg md:text-sm lg:text-lg`}>
            {headerMenuListData.map((item, index) => (
                <SideMenuItem key={index} text={item.text} href={item.href} subItems={item.children} isModal={isModal}/>
            ))}
        </ul>
    );
};

export default SideMenuList;