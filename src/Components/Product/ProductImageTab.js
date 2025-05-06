import React from "react";
import FileUploadField from "../InputFields/FileUploadField";
import { getHelperText } from "../../Utils/CustomFunctions/getHelperText";
import CheckBoxField from "../InputFields/CheckBoxField";
import SearchableSelectInput from "../InputFields/SearchableSelectInput";
import {waterMarkPosition} from "@/Data/TabTitleListData"
import { mediaConfig } from "@/Data/MediaConfig";
import { useTranslation } from "react-i18next";
import SimpleInputField from "../InputFields/SimpleInputField";

const ImagesTab = ({ values, setFieldValue, errors, updateId }) => {

  const { t } = useTranslation('common');

  return (
    <>
      <FileUploadField  paramsProps={{ mime_type: mediaConfig.image.join(",") }}  errors={errors} name="product_thumbnail_id" id="product_thumbnail_id" title="thumbnail" type="file" values={values} setFieldValue={setFieldValue} updateId={updateId} helpertext={getHelperText('600x600px')} />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} errors={errors} name="product_galleries_id" id="product_galleries_id" title="images" type="file" multiple={true} values={values} setFieldValue={setFieldValue} updateId={updateId} helpertext={getHelperText('600x600px')} />
      {values["product_type"] === "digital" ? (
        null
      ):
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} errors={errors} name="size_chart_image_id" id="size_chart_image_id" title="size_chart" type="file" values={values} setFieldValue={setFieldValue} updateId={updateId} helpertext={'*Upload an image showcasing the size chart tailored for fashion products. A table format image is suggested for easy reference.'} />
      }
      <CheckBoxField name="watermark" title="watermark" helpertext="*Enabling this setting will apply a watermark to images" />
      {values["watermark"] &&
      <SearchableSelectInput
        nameList={[
          {
            name: "watermark_position",
            title: "watermark_position",
            require: "true",
            inputprops: {
              name: "watermark_position",
              id: "watermark_position",
              options: waterMarkPosition,
            },
          },
        ]}
      />
    }
      {values["watermark"] &&
        <FileUploadField errors={errors} name="watermark_image_id" id="watermark_image_id" title="Watermark_image"  require="true" type="file" values={values} setFieldValue={setFieldValue} updateId={updateId} helpertext={'*Upload image size 180x50px recommended'} />
      }
      <FileUploadField  paramsProps={{ mime_type: mediaConfig.readable.join(",") }}  errors={errors} name="read_document_id" id="read_document_id" title="read_document" type="file" values={values} setFieldValue={setFieldValue} updateId={updateId} helpertext={getHelperText('600x600px')} />
      <SimpleInputField nameList={[{ name: "read_button_text", placeholder:t("enter_read_button_text") }, ]}/>
    </>
  );
};

export default ImagesTab;