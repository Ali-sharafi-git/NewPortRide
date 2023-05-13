const corporateData: {
    title: string;
    image: string;
    paragraphs: {
        title?: string;
        description?: string;
        list?: string[];
    }[];
} = {
    title: 'CORPORATE',
    image: '/assets/images/corporate.webp',
    paragraphs: [
        {
            title: 'Corporate Car Service',
            description: `LAX LIMOUSINE Executive Transportation: Since every corporate event is different, you can trust LAX
                    LIMOUSINE&apos;s chauffeured services to create a corporate travel package that best suits your specific
                    needs. Hire a personal chauffeur while you&apos;re in town for a roadshow, convention or a meeting and
                    focus on your business without dealing with transfers from one place to another. Our Executive Car
                    Service Fleet provides the latest luxury SUV models.`,
        },
    ],
};

export default corporateData;