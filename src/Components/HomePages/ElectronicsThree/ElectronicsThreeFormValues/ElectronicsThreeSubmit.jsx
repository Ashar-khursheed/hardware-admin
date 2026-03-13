import { concatDynamicProductKeys } from "@/Utils/CustomFunctions/concatDynamicProductKeys";

const ElectronicsThreeSubmit = (values, mutate, lang) => {
  const content = values["content"]?.[lang] || values["content"];
  content["products_ids"] = Array.from(new Set(concatDynamicProductKeys(values)));

  content["home_banner"]["banners"].forEach((elem, i) => {
    if (!content["home_banner"]["banners"][i]["redirect_link"]) {
      content["home_banner"]["banners"][i]["redirect_link"] = {}; // Initialize redirect_link if undefined
    }

    if (values[`homeBannerImage${i}`]) {
      content["home_banner"]["banners"][i]["image_url"] = values[`homeBannerImage${i}`].hasOwnProperty('asset_url') ? values[`homeBannerImage${i}`].asset_url : values[`homeBannerImage${i}`].original_url;
    } else {
      content["home_banner"]["banners"][i]["image_url"] = "";
    }

    if (values[`homeRedirectLinkType${i}`] || values[`homeRedirectLink${i}`]) {
      content["home_banner"]["banners"][i]["redirect_link"]["link_type"] = values[`homeRedirectLinkType${i}`];
      content["home_banner"]["banners"][i]["redirect_link"]["link"] = values[`homeRedirectLink${i}`];
      if (values[`homeRedirectLinkType${i}`] == "product") {
        content["home_banner"]["banners"][i]["redirect_link"]["product_ids"] = values[`homeRedirectLink${i}`];
      } else {
        content["home_banner"]["banners"][i]["redirect_link"]["product_ids"] = "";
      }
    } else {
      content["home_banner"]["banners"][i]["redirect_link"]["link_type"] = "";
      content["home_banner"]["banners"][i]["redirect_link"]["link"] = "";
    }
  });

  content["services"]["banners"].forEach((elem, i) => {
    if (values[`serviceBannerImage${i}`]) {
      content["services"]["banners"][i]["image_url"] = values[`serviceBannerImage${i}`].hasOwnProperty('asset_url') ? values[`serviceBannerImage${i}`].asset_url : values[`serviceBannerImage${i}`].original_url;
    } else {
      content["services"]["banners"][i]["image_url"] = "";
    }
  });
  // Images

  if (values["banner1Image"]) {
    content["banner"]["main_banner"]["image_url"] = values["banner1Image"].hasOwnProperty('asset_url') ? values["banner1Image"].asset_url : values["banner1Image"].original_url;
  } else content["banner"]["main_banner"]["image_url"] = "";

  if (values["banner2Image"]) {
    content["banner"]["grid_banner_1"]["image_url"] = values["banner2Image"].hasOwnProperty('asset_url') ? values["banner2Image"].asset_url : values["banner2Image"].original_url;
  } else content["banner"]["grid_banner_1"]["image_url"] = "";

  if (values["banner3Image"]) {
    content["banner"]["grid_banner_2"]["image_url"] = values["banner3Image"].hasOwnProperty('asset_url') ? values["banner3Image"].asset_url : values["banner3Image"].original_url;
  } else content["banner"]["grid_banner_2"]["image_url"] = "";

  if (values["banner4Image"]) {
    content["banner"]["grid_banner_3"]["image_url"] = values["banner4Image"].hasOwnProperty('asset_url') ? values["banner4Image"].asset_url : values["banner4Image"].original_url;
  } else content["banner"]["grid_banner_3"]["image_url"] = "";

  if (values["offerBanner2Image1"]) {
    content["offer_banner_2"]["banner_1"]["image_url"] = values["offerBanner2Image1"].hasOwnProperty('asset_url') ? values["offerBanner2Image1"].asset_url : values["offerBanner2Image1"].original_url;
  } else content["offer_banner_2"]["banner_1"]["image_url"] = "";

  if (values["offerBanner2Image2"]) {
    content["offer_banner_2"]["banner_2"]["image_url"] = values["offerBanner2Image2"].hasOwnProperty('asset_url') ? values["offerBanner2Image2"].asset_url : values["offerBanner2Image2"].original_url;
  } else content["offer_banner_2"]["banner_2"]["image_url"] = "";

  if (values["offerBannerImage"]) {
    content["offer_banner_1"]["image_url"] = values["offerBannerImage"].hasOwnProperty('asset_url') ? values["offerBannerImage"].asset_url : values["offerBannerImage"].original_url;
  } else content["offer_banner_1"]["image_url"] = "";

  // ================================================================================
  // For redirect link

  if (values["banner1LinkType"]) {
    content["banner"]["main_banner"]["redirect_link"]["link_type"] = values["banner1LinkType"];
  } else {
    content["banner"]["main_banner"]["redirect_link"]["link_type"] = "";
    content["banner"]["main_banner"]["redirect_link"]["link"] = "";
  }
  if (values["banner1Link"]) {
    content["banner"]["main_banner"]["redirect_link"]["link"] = values["banner1Link"];
    if (values["banner1LinkType"] == "product") {
      content["banner"]["main_banner"]["redirect_link"]["product_ids"] = values["banner1Link"];
    } else {
      content["banner"]["main_banner"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    content["banner"]["main_banner"]["redirect_link"]["link"] = "";
  }

  if (values["banner2LinkType"]) {
    content["banner"]["grid_banner_1"]["redirect_link"]["link_type"] = values["banner2LinkType"];
  } else {
    content["banner"]["grid_banner_1"]["redirect_link"]["link_type"] = "";
    content["banner"]["grid_banner_1"]["redirect_link"]["link"] = "";
    values["banner1LinkType"] = "";
  }
  if (values["banner2Link"]) {
    content["banner"]["grid_banner_1"]["redirect_link"]["link"] = values["banner2Link"];
    if (values["banner2LinkType"] == "product") {
      content["banner"]["grid_banner_1"]["redirect_link"]["product_ids"] = values["banner2Link"];
    } else {
      content["banner"]["grid_banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    content["banner"]["grid_banner_1"]["redirect_link"]["link"] = "";
  }

  if (values["banner3LinkType"]) {
    content["banner"]["grid_banner_2"]["redirect_link"]["link_type"] = values["banner3LinkType"];
  } else {
    content["banner"]["grid_banner_2"]["redirect_link"]["link_type"] = "";
    content["banner"]["grid_banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["banner3Link"]) {
    content["banner"]["grid_banner_2"]["redirect_link"]["link"] = values["banner3Link"];
    if (values["banner3LinkType"] == "product") {
      content["banner"]["grid_banner_2"]["redirect_link"]["product_ids"] = values["banner3Link"];
    } else {
      content["banner"]["grid_banner_2"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    content["banner"]["grid_banner_2"]["redirect_link"]["link"] = "";
  }

  if (values["banner4LinkType"]) {
    content["banner"]["grid_banner_3"]["redirect_link"]["link_type"] = values["banner4LinkType"];
  } else {
    content["banner"]["grid_banner_3"]["redirect_link"]["link_type"] = "";
    content["banner"]["grid_banner_3"]["redirect_link"]["link"] = "";
  }
  if (values["banner4Link"]) {
    content["banner"]["grid_banner_3"]["redirect_link"]["link"] = values["banner4Link"];
    if (values["banner4LinkType"] == "product") {
      content["banner"]["grid_banner_3"]["redirect_link"]["product_ids"] = values["banner4Link"];
    } else {
      content["banner"]["grid_banner_3"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    content["banner"]["grid_banner_3"]["redirect_link"]["link"] = "";
  }

  if (values["offerBannerLinkType"]) {
    content["offer_banner_1"]["redirect_link"]["link_type"] = values["offerBannerLinkType"];
  } else {
    content["offer_banner_1"]["redirect_link"]["link_type"] = "";
    content["offer_banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBannerLink"]) {
    content["offer_banner_1"]["redirect_link"]["link"] = values["offerBannerLink"];
    if (values["offerBannerLinkType"] == "product") {
      content["offer_banner_1"]["redirect_link"]["product_ids"] = values["offerBannerLink"];
    } else {
      content["offer_banner_1"]["redirect_link"]["product_ids"] = "";
    }
  } else {
    content["offer_banner_1"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  if (values["offerBanner2LinkType1"]) {
    content["offer_banner_2"]["banner_1"]["redirect_link"]["link_type"] = values["offerBanner2LinkType1"];
  } else {
    content["offer_banner_2"]["banner_1"]["redirect_link"]["link_type"] = "";
    content["offer_banner_2"]["banner_1"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link1"]) {
    content["offer_banner_2"]["banner_1"]["redirect_link"]["link"] = values["offerBanner2Link1"];
    if (values["offerBanner2LinkType1"] == "product") {
      content["offer_banner_2"]["banner_1"]["redirect_link"]["link"] = values["offerBanner2Link1"];
    } else {
      content["offer_banner_2"]["banner_1"]["redirect_link"]["link"] = "";
    }
  } else {
    content["offer_banner_2"]["banner_1"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================
  if (values["offerBanner2LinkType2"]) {
    content["offer_banner_2"]["banner_2"]["redirect_link"]["link_type"] = values["offerBanner2LinkType2"];
  } else {
    content["offer_banner_2"]["banner_2"]["redirect_link"]["link_type"] = "";
    content["offer_banner_2"]["banner_2"]["redirect_link"]["link"] = "";
  }
  if (values["offerBanner2Link2"]) {
    content["offer_banner_2"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link2"];
    if (values["offerBanner2LinkType2"] == "product") {
      content["offer_banner_2"]["banner_2"]["redirect_link"]["link"] = values["offerBanner2Link2"];
    } else {
      content["offer_banner_2"]["banner_2"]["redirect_link"]["link"] = "";
    }
  } else {
    content["offer_banner_2"]["banner_2"]["redirect_link"]["link"] = "";
  }
  // ============================================================================================

  //MultiSelect

  if (values["categoryProduct2Categories"]) {
    content["category_product_2"]["category_ids"] = values["categoryProduct2Categories"];
  }

  if (values["productList1Product"]) {
    content["products_list_1"]["product_ids"] = values["productList1Product"];
  }

  if (values["categoryProduct1Product"]) {
    content["category_product_1"]["products"]["product_ids"] = values["categoryProduct1Product"];
  }

  if (values["categoryProduct1Categories"]) {
    content["category_product_1"]["categories"]["category_ids"] = values["categoryProduct1Categories"];
  }

  if (values["brandItems"]) {
    content["brand"]["brand_ids"] = values["brandItems"];
  }

  const finalContent = values["content"]?.[lang] ? { ...values["content"], [lang]: content } : content;

  const updatedValues = {
    ...values,
    content: finalContent,
  };

  mutate(updatedValues);
};
export default ElectronicsThreeSubmit;
