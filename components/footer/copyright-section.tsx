import {useTranslation} from "next-export-i18n";
import websiteInformation from "@/assets/jsons/website-information.json";

const CopyrightSection = () => {
    const {t} = useTranslation();

    return (
        <div className="border-t border-t-c-gray py-9">
            <p className="text-center">{t('copyright_text')}<a href={websiteInformation.website_url}
                                                               className="underline">{websiteInformation.website_url}/</a>
            </p>
        </div>
    );
};

export default CopyrightSection;