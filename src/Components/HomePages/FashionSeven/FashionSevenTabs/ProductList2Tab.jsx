import { useContext, useState } from "react";
import { TabContent, TabPane } from "reactstrap";
import { FashionSevenProductList2Title } from "@/Data/TabTitleListData";

import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import CommonRedirect from "../../CommonRedirect";

const ProductList2Tab = ({ setFieldValue, values, productData,categoryData, setSearch }) => {
  const [activeTab, setActiveTab] = useState("1");
  
  const { t } = useTranslation( "common");
  const buttonText = values["content"]["products_list_2"]?.["left_panel"]?.["more_button"];
  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][products_list_2][status]`} title="status" />
      <TabTitle activeTab={activeTab} setActiveTab={setActiveTab} titleList={FashionSevenProductList2Title} />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField
            nameList={[
              { name: `[content][products_list_2][left_panel][title]`, placeholder: t("enter_title"), title: "title" },
              { name: `[content][products_list_2][left_panel][description]`, placeholder: t("enter_description"), title: "description" },
            ]}
          />
          <CheckBoxField name={`[content][products_list_2][left_panel][more_button]`} title="MoreButton" />
          {buttonText && <SimpleInputField nameList={[{ name: `[content][products_list_2][left_panel][button_text]`, placeholder: t("enter_title"), title: "button_text" }]} />}
          <CommonRedirect values={values} setFieldValue={setFieldValue} productData={productData} categoryData={categoryData} nameList={{ selectNameKey: "leftPanelLinkType", multipleNameKey: "leftPanelLink" }} setSearch={setSearch} />
       
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
      <CheckBoxField name={`[content][products_list_2][left_panel][status]`} title="status" />
      </TabContent>

    </div>
  );
};
export default ProductList2Tab;
