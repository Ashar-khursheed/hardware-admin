import SimpleInputField from "../InputFields/SimpleInputField";

const SeoTab = () => {
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: "[values][seo][meta_title]", title: "meta_title", placeholder: "enter_meta_title" },
          { name: "[values][seo][meta_description]", title: "meta_description", placeholder: "enter_meta_description" },
          { name: "[values][seo][meta_tags]", title: "meta_tags", placeholder: "enter_meta_tags" },
          { name: "[values][seo][og_title]", title: "og_title", placeholder: "enter_og_title" },
          { name: "[values][seo][og_description]", title: "og_description", placeholder: "enter_og_description" },
        ]}
      />
    </>
  );
};

export default SeoTab;
