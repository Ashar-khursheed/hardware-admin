import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import MultiSelectField from "@/Components/InputFields/MultiSelectField";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import React, { useContext } from "react";

const HomeBannerTab = ({ values, setFieldValue, categoryData }) => {
  
  const { t } = useTranslation( "common");

  return (
    <>
      <FileUploadField
        name="homeBannerImage"
        title="image"
        id="homeBannerImage"
        showImage={values["homeBannerImage"]}
        type="file"
        values={values}
        setFieldValue={setFieldValue}
        helpertext={getHelperText("1859x550px")}
      />
      <SimpleInputField
        nameList={[
          {
            name: `[content][home_banner][main_banner][title]`,
            placeholder: t("enter_title"),
            title: "title",
          },
          {
            name: `[content][home_banner][main_banner][sub_title]`,
            placeholder: t("enter_sub_title"),
            title: "title",
          },
        ]}
      />
      <CheckBoxField
        name={`[content][home_banner][status]`}
        title="status"
      />
      <MultiSelectField
        values={values}
        setFieldValue={setFieldValue}
        name="homeCategoryIconList"
        title="categories"
        data={categoryData}
      />
    </>
  );
};

export default HomeBannerTab;
