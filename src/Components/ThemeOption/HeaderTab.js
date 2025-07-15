// import { useQuery } from "@tanstack/react-query";
// import { useRouter } from "next/navigation";
// import { useTranslation } from "react-i18next";
// import { Col, Row } from "reactstrap";
// import request from "../../Utils/AxiosUtils";
// import { product , announcement} from "../../Utils/AxiosUtils/API";
// import Loader from "../CommonComponent/Loader";
// import CheckBoxField from "../InputFields/CheckBoxField";
// import MultiSelectField from "../InputFields/MultiSelectField";
// import SearchableSelectInput from "../InputFields/SearchableSelectInput";
// import SimpleInputField from "../InputFields/SimpleInputField";

// const HeaderTab = ({ values, setFieldValue, categoryData }) => {
//   const { t } = useTranslation("common");
//   const router = useRouter();
//   const handleClick = (val) => {
//     setFieldValue("[options][header][header_options]", val.value);
//   };
//   const { data, isLoading } = useQuery([product], () => request({ url: product, params: { status: 1 } }, router), { refetchOnWindowFocus: false, select: (res) => res?.data?.data });
//   if (isLoading) return <Loader />;
//   return (
//     <>
//       <Row>
//         <Col sm="12">
//           <SearchableSelectInput
//             nameList={[
//               {
//                 name: "[options][header][header_options]",
//                 title: "header_options",
//                 inputprops: {
//                   name: "[options][header][header_options]",
//                   id: "[options][header][header_options]",
//                   options: [
//                     { id: "header_one", name: "HeaderOne" },
//                     { id: "header_two", name: "HeaderTwo" },
//                     { id: "header_three", name: "HeaderThree" },
//                     { id: "header_four", name: "HeaderFour" },
//                     { id: "header_five", name: "HeaderFive" },
//                     { id: "header_six", name: "HeaderSix" },
//                     { id: "header_seven", name: "HeaderSeven" },
//                     { id: "header_eight", name: "HeaderEight" },
//                   ],
//                   defaultOption: "Select Header Style",
//                 },
//               },
//             ]}
//           />
//           <CheckBoxField name="[options][header][sticky_header_enable]" title="sticky_header" />
//           <CheckBoxField name="[options][header][page_top_bar_enable]" title="topbar" />
//           {values["options"]?.["header"]?.["page_top_bar_enable"]
//             ? values["options"]?.["header"]?.["top_bar_content"]?.map((elem, i) => (
//                 <SimpleInputField
//                   nameList={[
//                     {
//                       name: `[options][header][top_bar_content]${i}[content]`,
//                       title: `topbar_content_${i + 1}`,
//                       placeholder: t("enter_top_bar_content"),
//                       helpertext: "*Utilize HTML tags for custom content presentation.",
//                     },
//                   ]}
//                   key={i}
//                 />
//               ))
//             : null}
//           <SimpleInputField nameList={[{ name: "[options][header][support_number]", title: "support_number", placeholder: t("enter_support_number") }]} />
//           <MultiSelectField values={values} setFieldValue={setFieldValue} name="headerCategories" title={"categories"} data={categoryData || []} />
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default HeaderTab;
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { Col, Row } from "reactstrap";
import { useEffect } from "react";

import request from "../../Utils/AxiosUtils";
import { product, announcement } from "../../Utils/AxiosUtils/API";

import Loader from "../CommonComponent/Loader";
import CheckBoxField from "../InputFields/CheckBoxField";
import MultiSelectField from "../InputFields/MultiSelectField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import SimpleInputField from "../InputFields/SimpleInputField";

const HeaderTab = ({ values, setFieldValue, categoryData }) => {
  const { t } = useTranslation("common");
  const router = useRouter();

  // Fetch product data
  const { data: productData, isLoading } = useQuery(
    [product],
    () => request({ url: product, params: { status: 1 } }, router),
    {
      refetchOnWindowFocus: false,
      select: (res) => res?.data?.data,
    }
  );

  // Fetch announcement data
  const {
    data: announcementData,
    isLoading: announcementLoading,
  } = useQuery(
    ["announcement"],
    () => request({ url: announcement }, router),
    {
      refetchOnWindowFocus: false,
      select: (res) => res?.data?.data,
    }
  );

  // Set default form values for announcement
  useEffect(() => {
    if (announcementData) {
      setFieldValue("announcement", {
        status: !!announcementData.status,
        message: announcementData.message || "",
        background_color: announcementData.background_color || "",
        text_color: announcementData.text_color || "",
      });
    }
  }, [announcementData]);

  if (isLoading || announcementLoading) return <Loader />;

  return (
    <Row>
      <Col sm="12">
        {/* Header Style */}
        <SearchableSelectInput
          nameList={[
            {
              name: "[options][header][header_options]",
              title: "header_options",
              inputprops: {
                name: "[options][header][header_options]",
                id: "[options][header][header_options]",
                options: [
                  { id: "header_one", name: "HeaderOne" },
                  { id: "header_two", name: "HeaderTwo" },
                  { id: "header_three", name: "HeaderThree" },
                  { id: "header_four", name: "HeaderFour" },
                  { id: "header_five", name: "HeaderFive" },
                  { id: "header_six", name: "HeaderSix" },
                  { id: "header_seven", name: "HeaderSeven" },
                  { id: "header_eight", name: "HeaderEight" },
                ],
                defaultOption: "Select Header Style",
              },
            },
          ]}
        />

        {/* ✅ Announcement Section (Above Sticky Header) */}
        {(values?.announcement || announcementData) && (
          <>
            <CheckBoxField
              name="[announcement][status]"
              title="Enable Announcement"
              inputprops={{
                defaultChecked:
                  values?.announcement?.status ??
                  Boolean(announcementData?.status),
              }}
            />

            {(values?.announcement?.status || announcementData?.status) && (
              <>
                <SimpleInputField
                  nameList={[
                    {
                      name: "[announcement][message]",
                      title: "Announcement Message",
                      placeholder: "Enter announcement message",
                      inputprops: {
                        defaultValue:
                          values?.announcement?.message ??
                          announcementData?.message ??
                          "",
                      },
                    },
                  ]}
                />

                <SimpleInputField
                  nameList={[
                    {
                      name: "[announcement][background_color]",
                      title: "Background Color",
                      placeholder: "#ffff00",
                      inputprops: {
                        defaultValue:
                          values?.announcement?.background_color ??
                          announcementData?.background_color ??
                          "",
                      },
                    },
                  ]}
                />

                <SimpleInputField
                  nameList={[
                    {
                      name: "[announcement][text_color]",
                      title: "Text Color",
                      placeholder: "#000000",
                      inputprops: {
                        defaultValue:
                          values?.announcement?.text_color ??
                          announcementData?.text_color ??
                          "",
                      },
                    },
                  ]}
                />
              </>
            )}
          </>
        )}

        {/* Sticky Header / Topbar */}
        <CheckBoxField
          name="[options][header][sticky_header_enable]"
          title="sticky_header"
        />
        <CheckBoxField
          name="[options][header][page_top_bar_enable]"
          title="topbar"
        />

        {/* Topbar Content */}
        {values["options"]?.["header"]?.["page_top_bar_enable"] &&
          values["options"]?.["header"]?.["top_bar_content"]?.map((elem, i) => (
            <SimpleInputField
              key={i}
              nameList={[
                {
                  name: `[options][header][top_bar_content]${i}[content]`,
                  title: `topbar_content_${i + 1}`,
                  placeholder: t("enter_top_bar_content"),
                  helpertext:
                    "*Utilize HTML tags for custom content presentation.",
                },
              ]}
            />
          ))}

        {/* Support Number */}
        <SimpleInputField
          nameList={[
            {
              name: "[options][header][support_number]",
              title: "support_number",
              placeholder: t("enter_support_number"),
            },
          ]}
        />

        {/* Category Select */}
        <MultiSelectField
          values={values}
          setFieldValue={setFieldValue}
          name="headerCategories"
          title={"categories"}
          data={categoryData || []}
        />
      </Col>
    </Row>
  );
};

export default HeaderTab;
