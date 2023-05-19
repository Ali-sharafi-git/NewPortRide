import { MouseEventHandler } from "react";
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
    type: "primary" | "outline";
    size: "small" | "medium" | "large";
  }[];
}[] = [
  {
    image: "/assets/images/slider1.jpg",
    title: "BOOK A LUXURY CAR",
    subtitle: "WELCOME",
    description:
      "We assure you a secure and enjoyable journey with our highly skilled drivers who operate our fleet of luxurious vehicles. You have the option to reserve a seat in any of our exquisite vehicles.",
    buttons: [
      {
        text: "BOOK NOW",
        type: "primary",
        size: "medium",
        onClick: () => Router.push(urls.booking),
      },
      {
        text: "LEARN MORE !",
        type: "outline",
        size: "medium",
        onClick: () => Router.push(urls.our_pricing),
      },
    ],
  },
  {
    image: "/assets/images/slider2.jpg",
    title: "COMFORTABLE TRAVEL",
    subtitle: "WELCOME",
    description:
      "Providing premier transportation solutions since 2015, we specialize in delivering top-notch private chauffeurs, corporate travel services, group transportation, and much more. Our commitment to excellence has made us a trusted choice in the industry for first-class transportation experiences.",
    buttons: [
      {
        text: "BOOK NOW",
        type: "primary",
        size: "medium",
        onClick: () => Router.push(urls.booking),
      },
      {
        text: "LEARN MORE !",
        type: "outline",
        size: "medium",
        onClick: () => Router.push(urls.our_pricing),
      },
    ],
  },
  {
    image: "/assets/images/slider3.jpg",
    title: "LUXURY TRAVELING",
    subtitle: "WELCOME",
    description:
      "Whether you're traveling for business or pleasure, airport travel can either be a source of frustration or a truly relaxing experience. At Newport Luxury Ride, we understand the importance of hassle-free journeys. Say goodbye to worries about traffic, parking fees, or the security of your vehicle while you're away. Trust us to handle your airport transfer arrangements and enjoy a stress-free start or end to your trip.",
    buttons: [
      {
        text: "BOOK NOW",
        type: "primary",
        size: "medium",
        onClick: () => Router.push(urls.booking),
      },
      {
        text: "LEARN MORE !",
        type: "outline",
        size: "medium",
        onClick: () => Router.push(urls.our_pricing),
      },
    ],
  },
];

export default topScreenSliderData;
