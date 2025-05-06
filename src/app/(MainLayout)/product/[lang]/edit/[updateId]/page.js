'use client'
import { useContext, useEffect, useState } from "react";
import ProductForm from "@/Components/Product/ProductForm";
import { product } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import LanguageContext from "@/Helper/LanguageContext";

const UpdateProduct = ({ params }) => {
  const [resetKey, setResetKey] = useState(false)
  const [saveButton, setSaveButton] = useState(false)
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang, updateId } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = useCreate(product, updateId, !saveButton ? product : false, false, (resDta) => {
    if (resDta?.status == 200 || resDta?.status == 201) {
      setResetKey(true)
    }
  });

  return (
    updateId && (
      <ProductForm saveButton={saveButton} setSaveButton={setSaveButton} values={mutate} mutate={mutate} updateId={updateId} loading={isLoading} title={"edit_product"} key={resetKey}  buttonName="Update" language={lang}/>
    )
  );
};

export default UpdateProduct;
