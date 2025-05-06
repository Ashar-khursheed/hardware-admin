import React from "react";
import { useState } from "react";
import { Col, Row, TabContent, TabPane } from "reactstrap";
import { SignleProductServicesTitle } from "@/Data/TabTitleListData";
import { useTranslation } from "react-i18next";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import SearchableSelectInput from "@/Components/InputFields/SearchableSelectInput";
import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import TabTitle from "@/Components/Widgets/TabTitle";
import CommonRedirect from "../../CommonRedirect";
import Btn from "@/Elements/Buttons/Btn";
import { mediaConfig } from "@/Data/MediaConfig";
import { RiArrowDownLine, RiCloseLine } from "react-icons/ri";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";

const ServicesTab = ({ setFieldValue, values }) => {
  const { t } = useTranslation("common");
  const [activeTab, setActiveTab] = useState("1");
  const [active, setActive] = useState();
  const removeBanners = (index) => {
    if (values["content"]["services"]["right_panel"]["banners"].length > 1) {
      let filterValue = values["content"]["services"]["right_panel"]["banners"].filter((item, i) => i !== index);
      setFieldValue("[content][services][right_panel][banners]", filterValue);
      filterValue?.forEach((elem, i) => {
        elem?.image_url && setFieldValue(`rightPanelImage${i}`, { original_url: elem?.image_url });
      });
    }
  };

  return (
    <div className="inside-horizontal-tabs">
      <CheckBoxField name={`[content][services][status]`} title="status" />
      <TabTitle
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        titleList={SignleProductServicesTitle}
      />
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <SimpleInputField
            nameList={[
              {
                name: `[content][services][left_panel][title]`,
                placeholder: t("enter_title"),
                title: "title",
              },
              {
                name: `[content][services][left_panel][description]`,
                placeholder: t("enter_description"),
                title: "description",
              },
            ]}
          />
          <CheckBoxField
            name={`[content][services][left_panel][status]`}
            title="status"
          />
        </TabPane>
        <TabPane tabId="2">
          <>
            {
              <Btn
                className="btn-theme my-4"
                onClick={() =>
                  setFieldValue("[content][services][right_panel][banners]", [
                    ...values["content"]?.["services"]["right_panel"]["banners"],
                    { title: "", description: "" },
                  ])
                }
                title="add_banners"
              />
            }
            {values["content"]?.["services"]?.["right_panel"]?.["banners"]?.map(
              (elem, index) => {
                return (
                  <Row className="align-items-center" key={index}>
                    <Col xs="11">
                      <div className="shipping-accordion-custom">
                        <div
                          className="p-3 rule-dropdown d-flex justify-content-between"
                          onClick={() =>
                            setActive((prev) => prev !== index && index)
                          }
                        >
                          {t("services") + " " + (index + 1)}
                          <RiArrowDownLine />
                        </div>
                        {active == index && (
                          <div className="rule-edit-form">
                            <SimpleInputField
                              nameList={[
                                {
                                  name: `[content][services][right_panel][banners][${index}][title]`,
                                  placeholder: t("enter_title"),
                                  title: "title",
                                },
                                {
                                  name: `[content][services][right_panel][banners][${index}][description]`,
                                  placeholder: t("enter_description"),
                                  title: "description",
                                  type: "textarea",
                                },
                              ]}
                            />
                            <FileUploadField
                              paramsProps={{
                                mime_type: mediaConfig.image.join(","),
                              }}
                              name={`rightPanelImage${index}`}
                              title="image"
                              id={`rightPanelImage${index}`}
                              type="file"
                              values={values}
                              setFieldValue={setFieldValue}
                              showImage={values[`rightPanelImage${index}`]}
                              helpertext={getHelperText("375x586px")}
                            />
                            <CheckBoxField
                              name={`[content][services][right_panel][banners][${index}][status]`}
                              title="status"
                            />
                          </div>
                        )}
                      </div>
                    </Col>
                    <Col xs="1">
                      <a
                        className="h-100 w-100 cursor-pointer close-icon"
                        onClick={() => removeBanners(index)}
                      >
                        <RiCloseLine />
                      </a>
                    </Col>
                  </Row>
                );
              }
            )}
          </>
        </TabPane>
      </TabContent>
    </div>
  );
};
export default ServicesTab;
