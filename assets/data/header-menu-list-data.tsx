import urls from "@/assets/jsons/urls.json";

type SideItemProps = {
    text: string;
    href: string;
};

type SideProps = SideItemProps & {
    children?: SideItemProps[],
};

const headerMenuListData: SideProps[] = [
    {
        text: 'HOME',
        href: urls.home,
    },
    {
        text: 'ABOUT US',
        href: urls.about_us,
    },
    {
        text: 'SERVICES',
        href: '#',
        children: [
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
    },
    {
        text: 'OUR PRICING',
        href: urls.our_pricing,
    },
    {
        text: 'BOOKING',
        href: urls.booking,
    },
    {
        text: 'CONTACT US',
        href: urls.contact_us,
    },
];

export default headerMenuListData;