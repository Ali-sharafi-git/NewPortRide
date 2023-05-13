import {useTranslation} from "next-export-i18n";

const ContactUsSubmitted = () => {
    const {t} = useTranslation();

    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-10 text-center font-bold py-40">
            <h5 className="font-bold text-lg">{t('thanks_for_submitting')}</h5>
        </div>
    );
};

export default ContactUsSubmitted;