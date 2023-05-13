import Head from "next/head";
import {useTranslation} from "next-export-i18n";

type Props = {
    title: string;
};

const HeaderInfo = ({title}: Props) => {
    const {t} = useTranslation();

    return (
        <Head>
            <title>{`${title} | ${t('title')}`}</title>
        </Head>
    );
};

export default HeaderInfo;