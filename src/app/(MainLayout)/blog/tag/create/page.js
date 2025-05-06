'use client'
import TagForm from "@/Components/Tag/TagForm";
import { tag } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const TagsCreate = () => {
  const { mutate, isLoading } = useCreate(tag, false, "/blog/tag");
  return (
    <FormWrapper title="add_tag">
      <TagForm loading={isLoading} mutate={mutate} type={"post"} buttonName="save"/>
    </FormWrapper>
  );
};

export default TagsCreate;
