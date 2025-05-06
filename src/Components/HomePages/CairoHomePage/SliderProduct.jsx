import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";

import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useTranslation } from "react-i18next";
import { useContext } from "react";

const SliderProduct = ({ values, setFieldValue, productData, setSearch }) => {
  
  const { t } = useTranslation( "common");

  return (
    <>
      <FileUploadField
        name="sliderImage"
        title="image"
        id="sliderImage"
        showImage={values["sliderImage"]}
        type="file"
        values={values}
        setFieldValue={setFieldValue}
        helpertext={getHelperText("1859x550px")}
      />

      <SimpleInputField
        nameList={[
          {
            name: `[content][slider_product][title]`,
            placeholder: t("enter_title"),
            title: "title",
          },
          {
            name: `[content][slider_product][description]`,
            placeholder: t("enter_sub_title"),
            title: "title",
          },
        ]}
      />
      <SearchableSelectInput
        nameList={[
          {
            name: "sliderProductIds",
            title: "products",
            inputprops: {
              name: "sliderProductIds",
              id: "sliderProductIds",
              options: productData || [],
              setsearch: setSearch,
            },
          },
        ]}
      />
    </>
  );
};

export default SliderProduct;
