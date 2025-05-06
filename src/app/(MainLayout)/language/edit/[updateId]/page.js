"use client";

import LanguageForm from "@/Components/Language/LanguageForm";
import { AllLanguageApi, store } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const StoreUpdate = ({ params }) => {
  const { mutate, isLoading } = useCreate(AllLanguageApi, params?.updateId, "/language", false, false, false, false, "put");
  return (
    params?.updateId && (
      <FormWrapper title="edit_language">
        <LanguageForm mutate={mutate} updateId={params?.updateId} loading={isLoading} buttonName="update" />
      </FormWrapper>
    )
  );
};

export default StoreUpdate;
