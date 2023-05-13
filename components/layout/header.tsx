import {FaBars} from "react-icons/fa";
import {useState} from "react";
import TopMenu from "@/components/header/top-menu";
import SideMenuList from "@/components/header/side-menu-list";
import Link from "next/link";
import urls from "@/assets/jsons/urls.json";
import {HidingHeader} from "hiding-header-react";
import "hiding-header/dist/style.css";
import {useTranslation} from "next-export-i18n";
import MenuMobileModal from "@/components/header/menu-mobile-modal";

const Header = () => {
    const [openedMenu, setOpenedMenu] = useState<boolean>(false);

    const {t} = useTranslation();

    return (
        <HidingHeader>
            <header
                className={`bg-black transition-all ease-out duration-300`}>
                <div className="container mx-auto max-w-6xl py-3 px-5 md:px-0">
                    <TopMenu/>
                    <div
                        className="flex flex-row md:flex-col lg:flex-row justify-between items-center gap-0 md:gap-3 lg:gap-0 py-1 mt-3 lg:mt-0">
                        <Link href={urls.home}>
                            <img src="/assets/images/header_logo.png" alt={t('lax_limousine_service')}/>
                        </Link>
                        <SideMenuList isModal={false}/>
                        <div/>
                        <button className="block md:hidden border-2 border-white p-5"
                                onClick={() => setOpenedMenu(true)}>
                            <FaBars size={32}/>
                        </button>
                    </div>
                </div>
                <MenuMobileModal openedMenu={openedMenu} setOpenedMenu={setOpenedMenu}/>
            </header>
        </HidingHeader>
    );
};

export default Header;