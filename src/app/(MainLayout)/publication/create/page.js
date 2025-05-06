'use client'
import PublicationForm from "@/Components/Publication/PublicationForm";
import { PublicationApi } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const CreatePublication = () => {
  const { mutate, isLoading } = useCreate(PublicationApi, false, "/publication");
  return (
    <FormWrapper title="create_publication">
      <PublicationForm loading={isLoading} mutate={mutate} buttonName="save"/>
    </FormWrapper>
  );
};

export default CreatePublication;