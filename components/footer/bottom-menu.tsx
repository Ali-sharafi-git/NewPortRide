import BottomMenuList from "@/components/footer/bottom-menu-list";
import {useTranslation} from "next-export-i18n";
import footerMenuListData from "@/assets/data/footer-menu-list-data";

const BottomMenu = () => {
    const {t} = useTranslation();

    return (
        <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container mx-auto max-w-5xl py-14 px-16 lg:px-0">
            <div className="flex flex-col gap-8 justify-start items-center lg:items-start">
                <a href="#" className="mx-auto">
                    <img src="/assets/images/footer_logo.png" alt={t('title')}/>
                </a>
                <p className="text-center text-xs md:text-base">{t('footer_section_info_description')}</p>
            </div>
            <BottomMenuList title={t('footer_section_pages_title')} items={footerMenuListData.pages}/>
            <BottomMenuList title={t('footer_section_services_title')} items={footerMenuListData.services}/>
            <BottomMenuList title={t('footer_section_help_title')} items={footerMenuListData.help}/>
        </div>
    );
};

export default BottomMenu;