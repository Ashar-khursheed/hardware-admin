'use client'
import LanguageForm from "@/Components/Language/LanguageForm";
import { AllLanguageApi, store } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const LanguageCreate = () => {
  const { mutate, isLoading } = useCreate(AllLanguageApi, false, "/language");
  return (
    <FormWrapper title="add_language">
      <LanguageForm mutate={mutate} loading={isLoading} buttonName="save"/>
    </FormWrapper>
  );
};

export default LanguageCreate;
