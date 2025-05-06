import SimpleInputField from "@/Components/InputFields/SimpleInputField";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownLine, RiCloseLine } from "react-icons/ri";
import { Col, Row } from "reactstrap";
import Btn from "@/Elements/Buttons/Btn";
import { getHelperText } from "@/Utils/CustomFunctions/getHelperText";
import CheckBoxField from "@/Components/InputFields/CheckBoxField";
import FileUploadField from "@/Components/InputFields/FileUploadField";
import { mediaConfig } from "@/Data/MediaConfig";

const TestimonialTab = ({ values, setFieldValue }) => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState();

  const removeBanners = (index) => {
    if (values["content"]["testimonial"]["banners"].length > 1) {
      let filterValue = values["content"]["testimonial"]["banners"].filter((item, i) => i !== index);
      setFieldValue("[content][testimonial][banners]", filterValue);
      filterValue?.forEach((elem, i) => {
        elem?.image_url && setFieldValue(`testimonialImage${i}`, { original_url: elem?.image_url });
      });
    }
  };
  return (
    <>
      <SimpleInputField
        nameList={[
          { name: `[content][testimonial][title]`, placeholder: t("enter_title"), title: "title" },
        ]}
      />
      {<Btn className="btn-theme my-4" onClick={() => setFieldValue("[content][testimonial][banners]", [...values["content"]?.["testimonial"]["banners"], { title: "" }])} title="add_banners" />}
      {values["content"]?.["testimonial"]?.["banners"]?.map((elem, index) => {
        return (
          <Row className="align-items-center" key={index}>
            <Col xs="11">
              <div className="shipping-accordion-custom">
                <div className="p-3 rule-dropdown d-flex justify-content-between" onClick={() => setActive((prev) => prev !== index && index)}>
                  {t("testimonial") + " " + (index + 1)}
                  <RiArrowDownLine />
                </div>
                {active == index && (
                  <div className="rule-edit-form">
                    <SimpleInputField nameList={[{ name: `[content][testimonial][banners][${index}][name]`, placeholder: t("enter_name"), title: "name" }, { name: `[content][testimonial][banners][${index}][review]`, placeholder: t("enter_review"), title: "review" }]} />
                    <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name={`testimonialImage${index}`} title="image" id={`testimonialImage${index}`} type="file" values={values} setFieldValue={setFieldValue} showImage={values[`testimonialImage${index}`]} helpertext={getHelperText("375x586px")} />
                    <CheckBoxField name={`[content][testimonial][banners][${index}][status]`} title="status" />
                  </div>
                )}
              </div>
            </Col>
            <Col xs="1">
              <a className="h-100 w-100 cursor-pointer close-icon" onClick={() => removeBanners(index)}>
                <RiCloseLine />
              </a>
            </Col>
          </Row>
        );
      })}
    </>
  );
};

export default TestimonialTab;
