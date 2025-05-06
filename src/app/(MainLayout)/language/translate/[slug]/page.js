"use client";
import TranslationForm from "@/Components/Language/Translations";
import { product } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import { useState } from "react";

const TranslationContainer = ({params}) => {
  const [page, setPage] = useState(1);
  const [resetKey, setResetKey] = useState(false);
  const [translationModule, setTranslationModule] = useState("");

  const { mutate, isLoading } = useCreate(
    `/translation/${translationModule}`,
    false,
    false,
    "Language translation updated successfully",
    (resDta) => {
      if (resDta?.status == 200 || resDta?.status == 201) {
        setResetKey(true);
      }
    },
    false,
    false,
    "put",
    { pagination: 1, page, paginate: 15 }
  );
  return <TranslationForm currentLang={params?.slug} isLoading={isLoading} setPage={setPage} page={page} setTranslationModule={setTranslationModule} translationModule={translationModule} values={resetKey} mutate={mutate} loading={isLoading} title={"AddProduct"} key={resetKey} buttonName="save" />;
};

export default TranslationContainer;
