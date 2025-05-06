'use client'
import { PagesAPI } from '@/Utils/AxiosUtils/API';
import useUpdate from '@/Utils/Hooks/useUpdate';
import PageForm from '@/Components/Pages/PageForm';
import FormWrapper from '@/Utils/HOC/FormWrapper';
import { useContext, useEffect } from 'react';
import LanguageContext from '@/Helper/LanguageContext';

const UpdatePage = ({ params }) => {
    const { lang, updateId } = params;
    const { setFormLanguage } = useContext(LanguageContext);

    useEffect(() => {
        if (lang) {
          setFormLanguage(lang);
        }
    }, [lang, setFormLanguage]);

    const { mutate, isLoading } = useUpdate(PagesAPI, updateId, PagesAPI);
    return (
        updateId && (
            <FormWrapper title="update_page" lang={lang}>
                <PageForm mutate={mutate} loading={isLoading} updateId={updateId}  buttonName="Update" language={lang}/>
            </FormWrapper>
        )
    )
}

export default UpdatePage