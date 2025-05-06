import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

import { useTranslation } from "react-i18next";
import { useContext } from "react";

const CategoryIconListTab = ({
  values,
  setFieldValue,
  categoryData,
  category,
  status,
  name,
}) => {
  
  const { t } = useTranslation( "common");
  return (
    <>
      {name && (
        <SimpleInputField
          nameList={[
            {
              name: `[content][${name}][title]`,
              placeholder: t("enter_title"),
              title: "title",
            },
          ]}
        />
      )}
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name={category}
        title="categories"
        data={categoryData}
      />
      <CheckBoxField name={`[content][${status}][status]`} title="status" />
    </>
  );
};

export default CategoryIconListTab;
