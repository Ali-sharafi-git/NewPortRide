import {ReactNode} from "react";

const whatOurCustomerSaysData: {
    image: string;
    name: string;
    comment: ReactNode;
}[] = [
    {
        image: '/assets/images/customer1.jpg',
        name: 'Mr. Johnson',
        comment: `These guys are the best. They are my &quot;go to&quot; <strong>Lux
                                    Limousine</strong> company and
                                    their service is awesome. I call them no matter what my travel requirement might be,
                                    airport, hospital, special event and they have never let me down. They go above and
                                    beyond to provide excellent service. Thanks for everything.`,
    },
    {
        image: '/assets/images/customer2.jpg',
        name: 'Mrs. Sinha',
        comment: `Traveling with Lux Limousine is truly a pleasure. Their drivers are
                                    drive really well. I am very happy to travel in their car. If one wants to ride for
                                    a
                                    short distance then I would suggest you go for Lux Limousine. They will really give
                                    you
                                    a great write up and save you a lot of time.`,
    },
    {
        image: '/assets/images/customer3.jpg',
        name: 'Underson',
        comment: `In one word, my traveling was very wonderful. I have never traveled
                                    so
                                    comfortably before. My sincere thanks to LAX LIMOUSINE COMPANY. Really awesome.
                                    Highly
                                    Recommended!`,
    },
];

export default whatOurCustomerSaysData;