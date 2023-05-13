import SectionTitle from "@/components/common/section-title";

type Props = {
    title: string;
    subtitle: string;
};

const PageTitle = ({title, subtitle}: Props) => {
    return (
        <section className="bg-c-very-dark-gray py-40">
            <SectionTitle title={title} subtitle={subtitle} firstTitle={true} size="large"
                          className="!mb-0"/>
        </section>
    );
};

export default PageTitle;