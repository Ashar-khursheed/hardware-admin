import { concatDynamicProductKeys } from "../../../../Utils/CustomFunctions/concatDynamicProductKeys";

const SingleProductSubmit = (values, mutate) => {
  values["content"]["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  // Images
  if (values["homeBannerImage"]) {
    values["content"]["home_banner"]["banner_image"] = values[`homeBannerImage`].hasOwnProperty('asset_url') ? values[`homeBannerImage`].asset_url : values[`homeBannerImage`].original_url;
  } else values["content"]["home_banner"]["banner_image"] = "";

  if (values["banner1Image"]) {
    values["content"]["grid_banner"]["banner_1"]["image_url"] = values[`banner1Image`].hasOwnProperty('asset_url') ? values[`banner1Image`].asset_url : values[`banner1Image`].original_url;
  } else values["content"]["grid_banner"]["banner_1"]["image_url"] = "";

  if (values["banner2Image"]) {
    values["content"]["grid_banner"]["banner_2"]["image_url"] = values[`banner2Image`].hasOwnProperty('asset_url') ? values[`banner2Image`].asset_url : values[`banner2Image`].original_url;
  } else values["content"]["grid_banner"]["banner_2"]["image_url"] = "";

  if (values["banner3Image"]) {
    values["content"]["grid_banner"]["banner_3"]["image_url"] = values[`banner3Image`].hasOwnProperty('asset_url') ? values[`banner3Image`].asset_url : values[`banner3Image`].original_url;
  } else values["content"]["grid_banner"]["banner_3"]["image_url"] = "";

  if (values["productVideo"]) {
    values["content"]["product_video"]["video"] = values[`productVideo`].hasOwnProperty('asset_url') ? values[`productVideo`].asset_url : values[`productVideo`].original_url;
  } else values["content"]["product_video"]["video"] = "";

  if (values["productVideoImage"]) {
    values["content"]["product_video"]["image"] = values[`productVideoImage`].hasOwnProperty('asset_url') ? values[`productVideoImage`].asset_url : values[`productVideoImage`].original_url;
  } else values["content"]["product_video"]["image"] = "";

  if (values["rightPanelImage"]) {
    values["content"]["services"]["right_panel"]["banners"]["image_url"] = values[`rightPanelImage`].hasOwnProperty('asset_url') ? values[`rightPanelImage`].asset_url : values[`rightPanelImage`].original_url;
  } else values["content"]["services"]["right_panel"]["banners"]["image_url"] = "";

  if (values["testimonialImage"]) {
    values["content"]["testimonial"]["banners"]["image_url"] = values[`testimonialImage`].hasOwnProperty('asset_url') ? values[`testimonialImage`].asset_url : values[`testimonialImage`].original_url;
  } else values["content"]["testimonial"]["banners"]["image_url"] = "";


  // For Passing Redirect Link
  if (values["banner1LinkType"]) {
    values["content"]["grid_banner"]["banner_1"]["redirect_link"]["link_type"] = values["banner1LinkType"];
  } else {
    values["content"]["grid_banner"]["banner_1"]["redirect_link"]["link_type"] = "";
    values["content"]["grid_banner"]["banner_1"]["redirect_link"]["link"] = "";
    values["banner1LinkType"] = "";
  }
  if (values["banner1Link"]) {
    values["content"]["grid_banner"]["banner_1"]["redirect_link"]["link"] = values["banner1Link"];
    if (values["banner1LinkType"] == "product") {
      values["content"]["grid_banner"]["banner_1"]["redirect_link"]["product_ids"] = values["banner1Link"];
    } else {
      values["content"]["grid_banner"]["banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["grid_banner"]["banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["banner2LinkType"]) {
    values["content"]["grid_banner"]["banner_2"]["redirect_link"]["link_type"] = values["banner2LinkType"];
  } else {
    values["content"]["grid_banner"]["banner_2"]["redirect_link"]["link_type"] = "";
    values["content"]["grid_banner"]["banner_2"]["redirect_link"]["link"] = "";
    values["banner1LinkType"] = "";
  }
  if (values["banner2Link"]) {
    values["content"]["grid_banner"]["banner_2"]["redirect_link"]["link"] = values["banner2Link"];
    if (values["banner1LinkType"] == "product") {
      values["content"]["grid_banner"]["banner_2"]["redirect_link"]["product_ids"] = values["banner2Link"];
    } else {
      values["content"]["grid_banner"]["banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["grid_banner"]["banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["banner3LinkType"]) {
    values["content"]["grid_banner"]["banner_3"]["redirect_link"]["link_type"] = values["banner3LinkType"];
  } else {
    values["content"]["grid_banner"]["banner_3"]["redirect_link"]["link_type"] = "";
    values["content"]["grid_banner"]["banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["banner3Link"]) {
    values["content"]["grid_banner"]["banner_3"]["redirect_link"]["link"] = values["banner3Link"];
    if (values["banner3LinkType"] == "product") {
      values["content"]["grid_banner"]["banner_3"]["redirect_link"]["product_ids"] = values["banner3Link"];
    } else {
      values["content"]["grid_banner"]["banner_3"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["grid_banner"]["banner_3"]["redirect_link"]["link"] = "";
  }

  if (values["homeBannerLinkType"]) {
    values["content"]["home_banner"]["redirect_link"]["link_type"] = values["homeBannerLinkType"];
  } else {
    values["content"]["home_banner"]["redirect_link"]["link_type"] = "";
    values["content"]["home_banner"]["redirect_link"]["link"] = "";
  }
  if (values["homeBannerLink"]) {
    values["content"]["home_banner"]["redirect_link"]["link"] = values["homeBannerLink"];
    if (values["homeBannerLinkType"] == "product") {
      values["content"]["home_banner"]["redirect_link"]["product_ids"] = values["homeBannerLink"];
    } else {
      values["content"]["home_banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    values["content"]["home_banner"]["redirect_link"]["link"] = "";
  }

  //social media
  values["content"]["social_media"]["banners"].forEach((elem, i) => {
    if (!values["content"]["social_media"]["banners"][i]["redirect_link"]) {
      values["content"]["social_media"]["banners"][i]["redirect_link"] = {}; // Initialize redirect_link if undefined
    }
    if (values[`socialMediaBannerImage${i}`]) {
      values["content"]["social_media"]["banners"][i]["image_url"] = values[`socialMediaBannerImage${i}`].hasOwnProperty('asset_url') ? values[`socialMediaBannerImage${i}`].asset_url : values[`socialMediaBannerImage${i}`].original_url;
    } else {
      values["content"]["social_media"]["banners"][i]["image_url"] = "";
    }
    if (values[`socialMediaRedirectLinkType${i}`] || values[`socialMediaRedirectLink${i}`]) {
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link_type"] = values[`socialMediaRedirectLinkType${i}`];
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link"] = values[`socialMediaRedirectLink${i}`];
      if (values[`socialMediaRedirectLinkType${i}`] == "product") {
        values["content"]["social_media"]["banners"][i]["redirect_link"]["product_ids"] = values[`socialMediaRedirectLink${i}`];
      } else {
        values["content"]["social_media"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link_type"] = "";
      values["content"]["social_media"]["banners"][i]["redirect_link"]["link"] = "";
    }
  });

  //MultiSelect
  if (values["productIds"]) {
    values["content"]["product_ids"] = values["productIds"];
  }
  if (values["brandItems"]) {
    values["content"]["brand"]["brand_ids"] = values["brandItems"];
  }
  if (values["productListProduct"]) {
    values["content"]["products_list"]["product_ids"] = values["productListProduct"];
  }
  if (values["singleProductList"]) {
    values["content"]["single_product"]["product_ids"] = values["singleProductList"];
  }
  
  const updatedValues = {
    ...values,
    content: {
      ...values.content,
      products_ids: Array.from(new Set(concatDynamicProductKeys(values))),
    },
  };

  mutate(updatedValues);
};
export default SingleProductSubmit;
