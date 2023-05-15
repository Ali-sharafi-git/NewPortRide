import urls from "@/assets/jsons/urls.json";

const ourServicesData: {
  image: string;
  title: string;
  description: string;
  url: string;
}[] = [
  {
    image: "/assets/images/service1.jpg",
    title: "AIRPORT TRANSFERS",
    description:
      "Schedule your upcoming trip to Los Angeles International Airport (LAX), Hollywood Burbank Airport (BUR), Van Nuys Airport (VNY), Long Beach (LGB) or Sanata Ana (SNA) with us. you can chose meet and greet option as well",
    url: urls.airport_transfers,
  },
  {
    image: "/assets/images/service2.jpg",
    title: "POINT TO POINT",
    description:
      "We offer Point-to-Point transportation services in Los Angeles, as well as neighboring counties and states.",
    url: urls.point_to_point,
  },
  {
    image: "/assets/images/service3.jpg",
    title: "HOURLY AS DIRECTED",
    description:
      "Hourly car services are perfect for passengers who require private and adaptable transportation without any restrictions.",
    url: urls.hourly_as_directed,
  },
  {
    image: "/assets/images/service4.png",
    title: "CORPORATE",
    description:
      "Our chauffeur services are available to corporate clients for business travel and events",
    url: urls.corporate,
  },
];

export default ourServicesData;
