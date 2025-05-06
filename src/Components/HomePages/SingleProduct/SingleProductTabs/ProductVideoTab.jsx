import CheckBoxField from '@/Components/InputFields/CheckBoxField';
import FileUploadField from '@/Components/InputFields/FileUploadField';
import { mediaConfig } from '@/Data/MediaConfig';
import { getHelperText } from '@/Utils/CustomFunctions/getHelperText';
import React from 'react'

const ProductVideoTab = ({ values, setFieldValue }) => {
  return (
    <>
      <CheckBoxField name={`[content][product_video][status]`} title="status" />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.image.join(",") }} name="productImage" title="image" id="productImage" showImage={values["productImage"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={getHelperText("806x670px")} />
      <FileUploadField paramsProps={{ mime_type: mediaConfig.video.join(",") }} name="productVideo" title="Video" id="productVideo" showImage={values["productVideo"]} type="file" values={values} setFieldValue={setFieldValue} helpertext={"*Upload video size 10mb recommended"} />
    </>
  )
}
export default ProductVideoTab;