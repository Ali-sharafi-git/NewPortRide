import Layout from "@/components/layout/layout";
import PageTitle from "@/components/common/page-title";
import PageSection from "@/components/common/page-section";
import BookingForm from "@/components/booking/booking-form";
import {useTranslation} from "next-export-i18n";
import {useState} from "react";
import BookedForm from "@/components/booking/booked-form";
import InnerLoading from "@/components/common/inner-loading";

const Booking = () => {
    const [status, setStatus] = useState<'pending' | 'loading' | 'sent'>('pending');

    const {t} = useTranslation();

    const renderByStatus = () => {
        switch (status) {
            case 'pending':
                return <>
                    <h5 className="text-2xl font-bold mb-7">{t('fill_up_the_form_for_booking')}</h5>
                    <BookingForm setStatus={setStatus}/>
                </>;
            case 'loading':
                return <InnerLoading/>;
            case 'sent':
                return <BookedForm/>;
            default:
                return null;
        }
    };

    return (
        <Layout title={t('booking_title')}>
            <PageTitle title={t('booking_section_title')} subtitle={t('lax_limousine_service')}/>
            <PageSection className="md:px-52 py-16 gap-32 text-center text-lg">
                <div className="w-full border-2 border-c-gray rounded-xl px-7 py-5">
                    {renderByStatus()}
                </div>
            </PageSection>
        </Layout>
    );
};

export default Booking;