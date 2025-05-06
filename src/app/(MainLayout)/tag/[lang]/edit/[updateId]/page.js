"use client";

import TagForm from "@/Components/Tag/TagForm";
import LanguageContext from "@/Helper/LanguageContext";
import { tag } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useContext, useEffect } from "react";

const RoleUpdate = ({ params }) => {
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang, updateId } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);
  
  const { mutate, isLoading } = useUpdate(tag, updateId, `/tag`);
  return (
    updateId && (
      <FormWrapper title="edit_tag" lang={lang}>
        <TagForm
          mutate={mutate}
          updateId={updateId}
          loading={isLoading}
          type={"product"}
          buttonName="Update"
          language={lang}
        />
      </FormWrapper>
    )
  );
};

export default RoleUpdate;
