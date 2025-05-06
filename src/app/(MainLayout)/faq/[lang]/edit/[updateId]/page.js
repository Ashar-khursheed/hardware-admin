'use client'
import FaqForm from "@/Components/Faq/FaqForm";
import LanguageContext from "@/Helper/LanguageContext";
import { FaqAPI } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useContext, useEffect } from "react";

const UpdateFaq = ({ params }) => {
    const { lang, updateId } = params;
    const { setFormLanguage } = useContext(LanguageContext);
  
    useEffect(() => {
      if (lang) {
        setFormLanguage(lang);
      }
    }, [lang, setFormLanguage]);
    const { mutate, isLoading } = useUpdate(FaqAPI, updateId, FaqAPI);
    return (
        updateId && (
            <FormWrapper title="edit_faq" lang={lang}>
                <FaqForm mutate={mutate} loading={isLoading} updateId={updateId} buttonName="Update" language={lang}/>
            </FormWrapper>
        )
    )
}

export default UpdateFaq