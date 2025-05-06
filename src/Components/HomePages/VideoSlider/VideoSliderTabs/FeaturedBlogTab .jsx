import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useTranslation } from "react-i18next";

const FeaturedBlogTab = ({ setSearch, blogData }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][featured_blogs][tag]`, placeholder: t("enter_tag"), title: "tags" },
          { name: `[content][featured_blogs][title]`, placeholder: t("enter_title"), title: "title" },
        ]}
      />
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
