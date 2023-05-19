import { ReactNode } from "react";

const whatOurCustomerSaysData: {
  image: string;
  name: string;
  comment: ReactNode;
}[] = [
  {
    image: "/assets/images/customer1.jpg",
    name: "Tom",
    comment: `Whenever I need to travel, whether it's to the airport, hospital, or a special occasion, I rely on their excellent service. They have never disappointed me, consistently providing superior service. They go above and beyond to ensure customer satisfaction, and I genuinely appreciate everything they do.

        .`,
  },
  {
    image: "/assets/images/customer2.jpg",
    name: "Sara",
    comment: `For a truly delightful journey, you can reach out to Newport Luxury Ride. Their skilled drivers and well-maintained vehicles ensure a smooth and enjoyable ride. I personally recommend choosing a sedan for your shorter distances. Even for shorter distances, they will provide you with an exceptional experience, helping you save valuable time.
    `,
  },
  {
    image: "/assets/images/customer3.jpg",
    name: "Mike",
    comment: `In summary, my travel experiences with Newport Luxury Ride were absolutely fantastic. I have never experienced such comfort during my journeys before. I extend my heartfelt thanks to them for providing exceptional service. I highly recommend Newport Luxury Ride to anyone seeking an outstanding travel experience.
    Highly Recommended!
`,
  },
];

export default whatOurCustomerSaysData;
