import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

const CategoryProductTab = ({ categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][category_product][tag]`, placeholder: t("enter_tag"), title: "tags" },
          { name: `[content][category_product][title]`, placeholder: t("enter_title"), title: "title" },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "productCategory",
            title: "products",
            inputprops: {
              name: "productCategory",
              id: "productCategory",
              options: categoryData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][category_product][status]`} title="status" />
    </>
  );
};
export default CategoryProductTab;
