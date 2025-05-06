import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";

const FeaturedBlogTab = ({ setSearch, blogData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField nameList={[{ name: `[content][featured_blogs][title]`, placeholder: t("enter_title"), title: "title" }]} />
      <SearchableSelectInput
        nameList={[
          {
            name: "featuredBlogList",
            title: "blogs",
            inputprops: {
              name: "featuredBlogList",
              id: "featuredBlogList",
              options: blogData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
      <CheckBoxField name={`[content][featured_blogs][status]`} title="status" />
    </>
  );
};
export default FeaturedBlogTab;
