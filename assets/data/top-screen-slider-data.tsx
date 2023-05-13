import {MouseEventHandler} from "react";
import Router from "next/router";
import urls from "@/assets/jsons/urls.json";

const topScreenSliderData: {
    image: string;
    title: string;
    subtitle: string;
    description: string;
    buttons: {
        text: string;
        onClick: MouseEventHandler<HTMLButtonElement>;
        type: 'primary' | 'outline';
        size: 'small' | 'medium' | 'large';
    }[],
}[] = [
    {
        image: '/assets/images/slider1.jpg',
        title: 'BOOK A LUXURY CAR',
        subtitle: 'WELCOME',
        description: 'We can provide a safe and comfortable journey. Our Luxury Cars are driven by our experienced drivers. You can choose any of our luxury cars and book your seat.',
        buttons: [
            {
                text: 'BOOK NOW',
                type: 'primary',
                size: 'medium',
                onClick: () => Router.push(urls.booking),
            },
            {
                text: 'LEARN MORE !',
                type: 'outline',
                size: 'medium',
                onClick: () => Router.push(urls.our_pricing),
            },
        ],
    },
    {
        image: '/assets/images/slider2.jpg',
        title: 'COMFORTABLE TRAVEL',
        subtitle: 'WELCOME',
        description: 'We can provide a safe and comfortable journey. Our Luxury Cars are driven by our experienced drivers. You can choose any of our luxury cars and book your seat.',
        buttons: [
            {
                text: 'BOOK NOW',
                type: 'primary',
                size: 'medium',
                onClick: () => Router.push(urls.booking),
            },
            {
                text: 'LEARN MORE !',
                type: 'outline',
                size: 'medium',
                onClick: () => Router.push(urls.our_pricing),
            },
        ],
    },
    {
        image: '/assets/images/slider3.jpg',
        title: 'LUXURY TRAVELING',
        subtitle: 'WELCOME',
        description: 'We can provide a safe and comfortable journey. Our Luxury Cars are driven by our experienced drivers. You can choose any of our luxury cars and book your seat.',
        buttons: [
            {
                text: 'BOOK NOW',
                type: 'primary',
                size: 'medium',
                onClick: () => Router.push(urls.booking),
            },
            {
                text: 'LEARN MORE !',
                type: 'outline',
                size: 'medium',
                onClick: () => Router.push(urls.our_pricing),
            },
        ],
    },
];

export default topScreenSliderData;