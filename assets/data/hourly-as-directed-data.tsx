const hourlyAsDirectedData: {
    title: string;
    image: string;
    paragraphs: {
        title?: string;
        description?: string;
        list?: string[];
    }[];
} = {
    title: 'HOURLY AS DIRECTED',
    image: '/assets/images/hourly-as-directed.webp',
    paragraphs: [
        {
            title: 'Hourly as Directed Service Chauffeur Service',
            description: `The most convenient way to have a car and driver. The hourly car services are ideal for passengers
                    needing private transportation. At LAX LIMOUSINE we give you the flexibility to truly personalize
                    your luxury ground transportation experience. When you reserve an hourly car service, you are
                    unrestricted to the amount of locations as you wish to go to and stop at, all you need to do is just
                    give direction’s to any destination you need to go. Your driver will also wait for you to take you
                    to your next stop. `,
        },
        {
            title: 'Hourly As Directed rental is the best option if:',
            list: [
                'You need a car for more than 3 hours.',
                'You need to make multiple stops.',
                'You are not certain what time you will need a second or third pick up.',
                'You would like to keep a driver and car for the entire trip.',
                'You are going to Malibu for wine tasting.',
                'You love the flexibility of an hourly rental.',
                'You need a car for business meetings.',
                'You need a car for special occasions such as wedding.',
                'You need a pick up from the airport with several stops and then return to the airport.',
            ],
        },
    ],
};

export default hourlyAsDirectedData;