import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import { useTranslation } from "react-i18next";

const FeaturedBlogTab = ({ values, setFieldValue, setSearch, blogData }) => {
  
  const { t } = useTranslation( "common");
  return (
    <>
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
