import urls from "@/assets/jsons/urls.json";

const ourServicesData: {
    image: string;
    title: string;
    description: string;
    url: string;
}[] = [
    {
        image: '/assets/images/service1.jpg',
        title: 'AIRPORT TRANSFERS',
        description: 'Book your next airport ride to the Los Angeles International Airport (LAX), Hollywood Burbank Airport (BUR), and Van Nuys Airport (VNY).',
        url: urls.airport_transfers,
    },
    {
        image: '/assets/images/service2.jpg',
        title: 'POINT TO POINT',
        description: 'Point to Point service are available within Los Angeles, and surrounding counties and states.',
        url: urls.point_to_point,
    },
    {
        image: '/assets/images/service3.jpg',
        title: 'HOURLY AS DIRECTED',
        description: 'The hourly car services are ideal for passengers needing private and flexible transportation without  limitations.',
        url: urls.hourly_as_directed,
    },
    {
        image: '/assets/images/service4.png',
        title: 'CORPORATE',
        description: 'We offer chauffeur services to corporates for events and business travel.',
        url: urls.corporate,
    },
];

export default ourServicesData;