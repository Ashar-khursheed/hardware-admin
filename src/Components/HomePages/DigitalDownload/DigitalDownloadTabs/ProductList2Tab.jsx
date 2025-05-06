import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import { mediaConfig } from "@/Data/MediaConfig";
import { DigitalDownloadProduct2Title } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TabContent, TabPane } from "reactstrap";
import CommonRedirect from "../../CommonRedirect";

const ProductList2Tab = ({ values, setFieldValue, productData, categoryData, setSearch }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][products_list_2][status]`} title="status" />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productListMainImage" title="image" id="productListMainImage" showImage={values["productListMainImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("376x231px")} />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={DigitalDownloadProduct2Title} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField
            nameList={[
              { name: `[content][products_list_2][left_panel][title]`, placeholder: t("enter_title"), title: "title" },
              { name: `[content][products_list_2][left_panel][description]`, placeholder: t("enter_title"), title: "description", type: "textarea" },
            ]}
          />
          <CheckBoxField name={`[content][products_list_2][left_panel][status]`} title="MoreButton" />

          <SimpleInputField nameList={[{ name: `[content][products_list_2][left_panel][button_text]`, placeholder: t("enter_button_text"), title: "button_text" }]} />

          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "productListLeftContentLinkType", multipleNameKey: "productListLeftContentLink" }} setSearch={setSearch} />
          <CheckBoxField name={`[content][products_list_2][left_panel][status]`} title="status" />
        </TabPane>
        <TabPane tabId="2">
          <SearchableSelectInput
            nameList={[
              {
                name: "productList2Product",
                title: "products",
                inputprops: {
                  name: "productList2Product",
                  id: "productList2Product",
                  options: productData || [],
                  setsearch: setSearch,
                },
              },
            ]}
          />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default ProductList2Tab;
