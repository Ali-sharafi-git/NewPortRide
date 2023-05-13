import FormItem from "@/components/common/form-item";
import {useTranslation} from "next-export-i18n";
import {useFormik} from "formik";
import {Dispatch, MouseEvent, SetStateAction} from "react";
import * as yup from "yup";
import {toast} from "react-toastify";
import emailjs from "@emailjs/browser";
import websiteInformation from "@/assets/jsons/website-information.json";

type Props = {
    setStatus: Dispatch<SetStateAction<'pending' | 'loading' | 'sent'>>;
};

const BookingForm = ({setStatus}: Props) => {
    const {t} = useTranslation();

    const validationSchema = yup.object({
        full_name: yup.string().required(t('full_name_is_a_required_field')),
        email: yup.string().email().required(),
    });

    const handleSubmitButtonClick = (values: {
        full_name: '',
        email: '',
        phone_number: '',
        service_name: '',
        from: '',
        to: '',
        date: '',
        time: '',
        car: '',
        message: '',
    }) => {
        setStatus('loading');
        emailjs.send(
            websiteInformation.emailjs.service_id_booking,
            websiteInformation.emailjs.template_id_booking,
            {
                to_name: websiteInformation.send_email_booking_to_name,
                from_name: values.full_name,
                message: `<div>
                        <p><strong>${t('your_name')}:</strong> ${values.full_name}</p>
                        <p><strong>${t('email')}:</strong> ${values.email}</p>
                        <p><strong>${t('phone')}:</strong> ${values.phone_number}</p>
                        <p><strong>${t('service')}:</strong> ${values.service_name}</p>
                        <p><strong>${t('from')}:</strong> ${values.from}</p>
                        <p><strong>${t('to')}:</strong> ${values.to}</p>
                        <p><strong>${t('date')}:</strong> ${values.date}</p>
                        <p><strong>${t('time')}:</strong> ${values.time}</p>
                        <p><strong>${t('car')}:</strong> ${values.car}</p>
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
            full_name: '',
            email: '',
            phone_number: '',
            service_name: '',
            from: '',
            to: '',
            date: '',
            time: '',
            car: '',
            message: '',
        },
        initialErrors: {
            full_name: '',
            email: '',
        },
        validationSchema,
        onSubmit: handleSubmitButtonClick,
    });

    const handleClickSubmit = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (Object.keys(formik.errors).length > 0) {
            toast.error(`${formik.errors.full_name || ''} ${formik.errors.email || ''}`.trim() || t('please_enter_your_name_and_email'));
        }
        formik.handleSubmit();
    };

    return (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <FormItem type="input" name="full_name" label={t('your_name')} formik={formik} showLabel={false}
                      inputProps={{
                          required: true,
                      }}/>
            <FormItem type="input" name="email" label={t('email')} formik={formik} showLabel={false} inputProps={{
                type: 'email',
                required: true,
            }}/>
            <FormItem type="input" name="phone_number" label={t('phone')} formik={formik} showLabel={false}/>
            <FormItem type="select" name="service_name" label={t('select_your_service')} formik={formik}
                      showLabel={false}
                      selectOptions={[
                          {
                              value: t('airport_transfers'),
                              label: t('airport_transfers'),
                          },
                          {
                              value: t('point_to_point'),
                              label: t('point_to_point'),
                          },
                          {
                              value: t('hourly_as_directed'),
                              label: t('hourly_as_directed'),
                          },
                          {
                              value: t('corporate'),
                              label: t('corporate'),
                          },
                      ]}/>
            <FormItem type="input" name="from" label={t('from')} formik={formik} showLabel={false}/>
            <FormItem type="input" name="to" label={t('to')} formik={formik} showLabel={false}/>
            <FormItem type="datetime" name="date" label={t('pick_up_date')} formik={formik} showLabel={false}
                      datetimeProps={{
                          timeFormat: false,
                      }}/>
            <FormItem type="datetime" name="time" label={t('pick_up_time')} formik={formik} showLabel={false}
                      datetimeProps={{
                          dateFormat: false,
                      }}/>
            <FormItem type="select" name="car" label={t('select_a_car')} formik={formik} showLabel={false}
                      parentClassName="col-span-full" selectOptions={[
                {
                    value: t('lincoln_navigator_l'),
                    label: t('lincoln_navigator_l'),
                },
                {
                    value: t('ford_expedition'),
                    label: t('ford_expedition'),
                },
                {
                    value: t('chevy_suburban'),
                    label: t('chevy_suburban'),
                },
            ]}/>
            <FormItem type="textarea" name="message" label={t('enter_your_message')} formik={formik} showLabel={false}
                      parentClassName="col-span-full"/>
            <FormItem type="button" name="submit" label={t('submit')} formik={formik} className="w-full"
                      parentClassName="col-span-full" buttonProps={{
                type: 'submit',
                onClick: handleClickSubmit,
            }}/>
        </form>
    );
};

export default BookingForm;