import urls from "@/assets/jsons/urls.json";

const ourLuxuryCarData: {
    image: string;
    title: string;
    url: string;
}[] = [
    {
        image: '/assets/images/car1.jpg',
        title: 'FORD EXPEDITION',
        url: urls.our_pricing,
    },
    {
        image: '/assets/images/car2.jpg',
        title: 'LINCOLN NAVIGATOR L',
        url: urls.our_pricing,
    },
    {
        image: '/assets/images/car3.jpg',
        title: 'CHEVY SUBURBAN',
        url: urls.our_pricing,
    },
];

export default ourLuxuryCarData;