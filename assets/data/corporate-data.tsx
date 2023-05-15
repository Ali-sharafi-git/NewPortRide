const corporateData: {
  title: string;
  image: string;
  paragraphs: {
    title?: string;
    description?: string;
    list?: string[];
  }[];
} = {
  title: "CORPORATE",
  image: "/assets/images/corporate.webp",
  paragraphs: [
    {
      title: "Corporate Car Service",
      description: `We understand that every corporate event is unique, which is why our chauffeured services can be tailored to meet your specific requirements. Whether you're in town for a convention, a meeting, or a roadshow, trust us to create a customized corporate travel package that suits your needs. With our professional chauffeurs behind the wheel, you can concentrate on your business without having to worry about transportation.`,
    },
    {
      title: "Here are some benefits of our Executive Car Service Fleet:",
      description: `We provide luxury SUV models to make your journey more comfortable and stylish.
      You'll have a personal chauffeur at your service, ensuring that you arrive on time and in style.
      Our vehicles are equipped with the latest amenities to enhance your traveling experience.
      We understand the importance of privacy in business, which is why our vehicles are designed to provide you with a quiet and confidential environment to conduct your work.
      Choose LAX LIMOUSINE Executive Transportation for a seamless corporate travel experience.`,
    },
  ],
};

export default corporateData;
