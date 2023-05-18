import { ReactNode } from "react";

const whatOurCustomerSaysData: {
  image: string;
  name: string;
  comment: ReactNode;
}[] = [
  {
    image: "/assets/images/customer1.jpg",
    name: "Tom",
    comment: `They provide excellent service. Whenever I need to travel, whether it be for an airport, hospital, or special occasion, I call them, and they have never let me down. For the purpose of offering superior service, they go above and beyond. I appreciate everything.

        .`,
  },
  {
    image: "/assets/images/customer2.jpg",
    name: "Sara",
    comment: `Newport Ride makes for a genuinely enjoyable ride. Their drivers operate their vehicles quite skillfully. I'm overjoyed to ride along in their car. I advise choosing Sedan if you only want to travel a small distance. They will really provide you with a fantastic write-up and help you save a ton of time.
    `,
  },
  {
    image: "/assets/images/customer3.jpg",
    name: "Mike",
    comment: `In a nutshell, my travels were fantastic. Never before have I traveled so comfortably. Thank you so much, Newport ride COMPANY. wonderful in a big way.
    Highly Recommended!
`,
  },
];

export default whatOurCustomerSaysData;
