'use client'
import AuthorForm from "@/Components/Author/AuthorForm";
import { AuthorApi } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const CreateAuthor = () => {
  const { mutate, isLoading } = useCreate(AuthorApi, false, "/author");
  return (
    <FormWrapper title="create_author">
      <AuthorForm loading={isLoading} mutate={mutate} buttonName="save"/>
    </FormWrapper>
  );
};

export default CreateAuthor;
