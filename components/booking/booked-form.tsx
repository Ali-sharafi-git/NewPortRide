import {useTranslation} from "next-export-i18n";

const BookedForm = () => {
    const {t} = useTranslation();

    return (
        <div className="flex flex-col justify-center items-center gap-10 text-center font-bold p-10">
            <h5 className="text-5xl">{t('form_booked_title')}</h5>
            <p className="text-xl">{t('form_booked_description')}</p>
        </div>
    );
};

export default BookedForm;