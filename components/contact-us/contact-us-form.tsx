import FormItem from "@/components/common/form-item";
import {useTranslation} from "next-export-i18n";
import {FormikProps} from "formik";
import {MouseEventHandler} from "react";

type Props = {
    formik: FormikProps<any>;
    handleClickSubmit: MouseEventHandler<HTMLButtonElement>;
};

const ContactUsForm = ({formik, handleClickSubmit}: Props) => {
    const {t} = useTranslation();

    return (
        <form className="flex-1 w-full grid grid-cols-2 items-center gap-7">
            <FormItem type="input" name="first_name" label={t('first_name')} formik={formik}/>
            <FormItem type="input" name="last_name" label={t('last_name')} formik={formik}/>
            <FormItem type="input" name="email" label={t('email')} formik={formik} parentClassName="col-span-full"
                      inputProps={{
                          type: 'email',
                          required: true,
                      }}/>
            <FormItem type="textarea" name="message" label={t('message')} formik={formik}
                      parentClassName="col-span-full"/>
            <FormItem type="button" name="send" label={t('send')} formik={formik} parentClassName="col-span-full"
                      buttonProps={{
                          type: 'submit',
                          onClick: handleClickSubmit,
                      }}/>
        </form>
    );
};

export default ContactUsForm;