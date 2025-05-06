import TabTitle from "@/Components/Widgets/TabTitle";

import { useTranslation } from "react-i18next";
import { useContext, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { FashionSixProductList2Title } from "@/Data/TabTitleListData";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { mediaConfig } from "@/Data/MediaConfig";

const ProductList2Tab = ({ setFieldValue, values, productData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  
  const { t } = useTranslation( "common");
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][products_list_2][status]`} title="status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FashionSixProductList2Title} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField
            nameList={[
              { name: `[content][products_list_2][products][tag]`, placeholder: t("enter_title"), title: "title" },
              { name: `[content][products_list_2][products][title]`, placeholder: t("enter_sub_title"), title: "sub_title" },
            ]}
          />
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
        <TabPane tabId="2">
          <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="rightPanelImage" title="image" id="rightPanelImage" showImage={values["rightPanelImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
        </TabPane>
      </TabContent>
    </div>
  );
};
export default ProductList2Tab;
