import {useTranslation} from "next-export-i18n";
import {useFormik} from "formik";
import * as yup from "yup";
import {MouseEvent, useState} from "react";
import {toast} from "react-toastify";
import emailjs from "@emailjs/browser";
import websiteInformation from "@/assets/jsons/website-information.json";
import InnerLoading from "@/components/common/inner-loading";
import ContactUsSubmitted from "@/components/contact-us/contact-us-submitted";
import ContactUsForm from "@/components/contact-us/contact-us-form";

const validationSchema = yup.object({
    email: yup.string().email().required(),
});

const ContactUsActions = () => {
    const [status, setStatus] = useState<'pending' | 'loading' | 'sent'>('pending');

    const {t} = useTranslation();

    const handleSubmitButtonClick = (values: {
        first_name: string;
        last_name: string;
        email: string;
        message: string;
    }) => {
        setStatus('loading');
        emailjs.send(
            websiteInformation.emailjs.service_id_contact,
            websiteInformation.emailjs.template_id_contact,
            {
                to_name: websiteInformation.send_email_contact_to_name,
                from_name: `${values.first_name} ${values.last_name}`,
                message: `<div>
                        <p><strong>${t('first_name')}:</strong> ${values.first_name}</p>
                        <p><strong>${t('last_name')}:</strong> ${values.last_name}</p>
                        <p><strong>${t('email')}:</strong> ${values.email}</p>
                        <p><strong>${t('message')}:</strong> ${values.message}</p>
                    </div>`,
            },
            websiteInformation.emailjs.public_key,
        ).then(() => {
            setStatus('sent');
        }).catch(error => {
            setStatus('pending');
            toast.error(error.text);
        });
    };

    const formik = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
            message: '',
        },
        initialErrors: {
            email: '',
        },
        validationSchema,
        onSubmit: handleSubmitButtonClick,
    });

    const handleClickSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (Object.keys(formik.errors).length > 0) {
            toast.error(formik.errors.email || t('please_enter_your_email'));
        }
        formik.handleSubmit();
    };

    const renderByStatus = () => {
        switch (status) {
            case 'pending':
                return <ContactUsForm formik={formik} handleClickSubmit={handleClickSubmit}/>;
            case 'loading':
                return <InnerLoading/>;
            case 'sent':
                return <ContactUsSubmitted/>;
            default:
                return null;
        }
    };

    return (
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
            {renderByStatus()}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423284.0441656114!2d-118.74138717652868!3d34.02060845603288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1683814433889!5m2!1sen!2s"
                className="flex-1 w-full h-96" style={{border: 0}} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
        </div>
    );
};

export default ContactUsActions;