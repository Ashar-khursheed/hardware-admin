'use client'

import CouponForm from "@/Components/Coupon/CouponForm";
import LanguageContext from "@/Helper/LanguageContext";
import { coupon } from "@/Utils/AxiosUtils/API";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useContext, useEffect } from "react";

const CouponUpdate = ({ params }) => {
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);
  const { mutate, isLoading } = useUpdate(coupon, updateId, coupon);

  return (
    updateId && (
      <CouponForm mutate={mutate} updateId={updateId} loading={isLoading} title={"update_coupon"} buttonName="Update" languagae={lang}/>
    )
  );
};

export default CouponUpdate;