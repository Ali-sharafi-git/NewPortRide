import urls from "@/assets/jsons/urls.json";

type BottomMenuProps = {
    text: string;
    href: string;
}[];

const footerMenuListData: {
    pages: BottomMenuProps;
    services: BottomMenuProps;
    help: BottomMenuProps;
} = {
    pages: [
        {
            text: 'Home',
            href: urls.home,
        },
        {
            text: 'About Us',
            href: urls.about_us,
        },
        {
            text: 'Pricing Info',
            href: urls.our_pricing,
        },
        {
            text: 'Booking',
            href: urls.booking,
        },
        {
            text: 'Contact Us',
            href: urls.contact_us,
        },
    ],
    services: [
        {
            text: 'AIRPORT TRANSFERS',
            href: urls.airport_transfers,
        },
        {
            text: 'POINT TO POINT',
            href: urls.point_to_point,
        },
        {
            text: 'HOURLY AS DIRECTED',
            href: urls.hourly_as_directed,
        },
        {
            text: 'CORPORATE',
            href: urls.corporate,
        },
    ],
    help: [
        {
            text: 'Terms & Conditions',
            href: urls.terms_condition,
        },
        {
            text: 'Privacy Policy',
            href: urls.privacy_policy,
        },
        {
            text: 'FAQ',
            href: urls.faq,
        },
    ],
};

export default footerMenuListData;