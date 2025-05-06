'use client'

import BlogForm from "@/Components/Blog/BlogForm";
import LanguageContext from "@/Helper/LanguageContext";
import { blog } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";
import { useContext, useEffect } from "react";

const BlogUpdate = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang, updateId } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = useCreate(blog, updateId, "/blog");
  return (
    updateId && (
      <FormWrapper title="edit_blog" lang={lang}>
        <BlogForm mutate={mutate} updateId={updateId} loading={isLoading} buttonName="Update" language={lang}/>
      </FormWrapper>
    )
  );
};

export default BlogUpdate;
