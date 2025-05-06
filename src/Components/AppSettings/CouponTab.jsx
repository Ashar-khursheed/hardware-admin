import { useQuery } from "@tanstack/react-query";
import SimpleInputField from "../InputFields/SimpleInputField";
import request from "@/Utils/AxiosUtils";
import { coupon } from "@/Utils/AxiosUtils/API";
import { useTranslation } from "react-i18next";
import CheckBoxField from "../InputFields/CheckBoxField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import { useRouter } from "next/navigation";

const CouponTab = ({ values, setFieldValue }) => {
  
  const { t } = useTranslation("common");
  const router = useRouter();
  const { data: couponData, isLoading: categoryLoader } = useQuery(
    [coupon],
    () => request({ url: coupon },router),
    {
      refetchOnWindowFocus: false,
      select: (res) =>
        res?.data?.data.map((elem) => {
          return { id: elem.id, name: elem.title };
        }),
    }
  );
  return (
    <>
      <SimpleInputField
        nameList={[
          {
            name: `[values][coupons][title]`,
            placeholder: t("enter_title"),
            title: "title",
          },
          {
            name: `[values][coupons][description]`,
            placeholder: t("enter_description"),
            title: "description",
          },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "couponIds",
            title: "coupons",
            inputprops: {
              name: "couponIds",
              id: "couponIds",
              options: couponData || [],
            },
          },
        ]}
      />
      <CheckBoxField name={`[values][coupons][status]`} title="status" />
    </>
  );
};

export default CouponTab;
