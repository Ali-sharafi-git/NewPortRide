const pointToPointData: {
  title: string;
  image: string;
  paragraphs: {
    title?: string;
    description?: string;
    list?: string[];
  }[];
} = {
  title: "POINT TO POINT",
  image: "/assets/images/point-to-point.jpg",
  paragraphs: [
    {
      title: "Point to Point Chauffeur Service",
      description: `Our Point to Point service is available throughout Los Angeles and surrounding counties, providing a safe and stress-free transportation option in one of the world's busiest cities. At LAX LIMOUSINE, we understand that navigating LA's crowded streets can be challenging, which is why we offer personalized chauffeur services to take you where you need to go, on time and in comfort. Whether you are traveling for business or pleasure, we provide a tailored service to meet your specific needs. We know schedules can be hectic, so we prioritize reliability and efficiency to ensure your trip is seamless. With our point to point service, you can sit back, relax, and enjoy the ride while we handle the planning, monitoring, and communication for a smooth experience. From door-to-door luxury to your next business meeting, you can trust us to provide the highest level of service in the industry.`,
    },
    {
      title: "Point to Point Car Service is best option if:",
      list: [
        "You require a one-way transfer between or within cities in the Bay Area.",
        "You need round trip service between point A and point B and know the exact pick-up time for both points.",
        "You are unsure about using a taxi service",
        "You prioritize safety and care for you and your loved ones.",
        "You need a designated driver for a ride home after a night of fun.",
      ],
    },
  ],
};

export default pointToPointData;
