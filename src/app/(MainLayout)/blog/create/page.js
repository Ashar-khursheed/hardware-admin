'use client'
import BlogForm from "@/Components/Blog/BlogForm";
import { blog } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const AddBlog = () => {
  const { mutate, isLoading } = useCreate(blog, false, "/blog");
  return (
    <FormWrapper title="add_blog">
      <BlogForm mutate={mutate} loading={isLoading} buttonName="save"/>
    </FormWrapper>
  );
};

export default AddBlog;
