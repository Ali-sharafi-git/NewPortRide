import urls from "@/assets/jsons/urls.json";

const ourLuxuryCarData: {
  image: string;
  title: string;
  url: string;
}[] = [
  {
    image: "/assets/images/car1.jpg",
    title: "Chevrolet Suburban",
    url: urls.our_pricing,
  },
  {
    image: "/assets/images/car2.jpg",
    title: "Ford Expedition Max",
    url: urls.our_pricing,
  },
  {
    image: "/assets/images/car3.jpg",
    title: "Cadillac Escalade ESV",
    url: urls.our_pricing,
  },
  {
    image: "/assets/images/car4.jpg",
    title: "Lincoln Continental",
    url: urls.our_pricing,
  },
];

export default ourLuxuryCarData;
