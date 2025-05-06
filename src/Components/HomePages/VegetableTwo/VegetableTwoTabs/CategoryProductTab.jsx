import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const CategoryProductTab = ({ setSearch, categoryData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][category_product][title]`, placeholder: t("enter_title"), title: "title" }]} />
      <SearchableSelectInput
        nameList={[
          {
            name: "categoryProductList",
            title: "categories",
            inputprops: {
              name: "categoryProductList",
              id: "categoryProductList",
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
