import SectionTitle from "@/components/common/section-title";
import CustomButton from "@/components/common/custom-button";
import {FaLongArrowAltRight} from "react-icons/fa";
import {Fragment} from "react";
import parse from "html-react-parser";
import {useTranslation} from "next-export-i18n";
import urls from "@/assets/jsons/urls.json";
import Router from "next/router";

type Props = {
    title: string;
    image: string;
    paragraphs: {
        title?: string;
        description?: string;
        list?: string[];
    }[],
};

const ServiceDetailSection = ({title, image, paragraphs}: Props) => {
    const {t} = useTranslation();

    return (
        <section
            className="container mx-auto max-w-6xl py-16 px-5 flex flex-col justify-center items-center gap-10 text-center text-lg">
            <SectionTitle title={title} firstTitle={true} size="medium" className="mb-1"/>
            <img src={image} alt={title} className="w-full"/>
            {paragraphs.map((item, index) => (
                <Fragment key={index}>
                    {item.title && <SectionTitle title={item.title} firstTitle={true} size="small"
                                                 className={`-mb-5 ${index !== 0 ? 'mt-10' : ''}`}/>}
                    {item.description && <p>{parse(item.description)}</p>}
                    {item.list && <ul className="list-disc text-left">
                        {item.list.map((lItem, lIndex) => (
                            <li key={lIndex}>{lItem}</li>
                        ))}
                    </ul>}
                </Fragment>
            ))}
            <CustomButton buttonType="primary" buttonSize="large" className="mt-10"
                          onClick={() => Router.push(urls.booking)}>{t('book_now')} <FaLongArrowAltRight
                size={30}/></CustomButton>
        </section>
    );
};

export default ServiceDetailSection;