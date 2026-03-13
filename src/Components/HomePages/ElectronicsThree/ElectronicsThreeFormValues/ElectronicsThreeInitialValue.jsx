const ElectronicsThreeSubmitInitialValue = (data, lang) => {
  let obj = {};
  const content = data?.content?.[lang] || data?.content;

  content?.home_banner?.banners?.length > 0 &&
    content?.home_banner?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`homeBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`homeRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`homeRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
    });

  content?.services?.banners?.length > 0 &&
    content?.services?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`serviceBannerImage${index}`] = { original_url: elem.image_url }) : "";
      return obj;
    });
  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,

    //Images

    banner1Image: content?.banner?.main_banner?.image_url ? { original_url: content?.banner?.main_banner?.image_url } : "",
    banner2Image: content?.banner?.grid_banner_1?.image_url ? { original_url: content?.banner?.grid_banner_1?.image_url } : "",
    banner3Image: content?.banner?.grid_banner_2?.image_url ? { original_url: content?.banner?.grid_banner_2?.image_url } : "",
    banner4Image: content?.banner?.grid_banner_3?.image_url ? { original_url: content?.banner?.grid_banner_3?.image_url } : "",

    offerBanner2Image1: content?.offer_banner_2?.banner_1?.image_url ? { original_url: content?.offer_banner_2?.banner_1?.image_url } : "",
    offerBanner2Image2: content?.offer_banner_2?.banner_2?.image_url ? { original_url: content?.offer_banner_2?.banner_2?.image_url } : "",

    offerBannerImage: content?.offer_banner_1?.image_url ? { original_url: content?.offer_banner_1?.image_url } : "",
    ...obj,

    // For Redirect Link
    banner1LinkType: content?.banner?.main_banner?.redirect_link?.link_type || "",
    banner1Link: content?.banner?.main_banner?.redirect_link?.link || "",

    banner2LinkType: content?.banner?.grid_banner_1?.redirect_link?.link_type || "",
    banner2Link: content?.banner?.grid_banner_1?.redirect_link?.link || "",

    banner3LinkType: content?.banner?.grid_banner_2?.redirect_link?.link_type || "",
    banner3Link: content?.banner?.grid_banner_2?.redirect_link?.link || "",

    banner4LinkType: content?.banner?.grid_banner_3?.redirect_link?.link_type || "",
    banner4Link: content?.banner?.grid_banner_3?.redirect_link?.link || "",

    offerBannerLinkType: content?.offer_banner_1?.redirect_link?.link_type || "",
    offerBannerLink: content?.offer_banner_1?.redirect_link?.link || "",

    offerBanner2LinkType1: content?.offer_banner_2?.banner_1?.redirect_link?.link_type || "",
    offerBanner2Link1: content?.offer_banner_2?.banner_1?.redirect_link?.link || "",

    offerBanner2LinkType2: content?.offer_banner_2?.banner_2?.redirect_link?.link_type || "",
    offerBanner2Link2: content?.offer_banner_2?.banner_2?.redirect_link?.link || "",

    //MultiSelect
    brandItems: content?.brand?.brand_ids || [],
    productList1Product: content?.products_list_1?.product_ids || [],

    categoryProduct1Product: content?.category_product_1?.products?.product_ids || [],
    categoryProduct1Categories: content?.category_product_1?.categories?.category_ids || [],

    categoryProduct2Categories: content?.category_product_2?.category_ids || [],
  };
};

export default ElectronicsThreeSubmitInitialValue;
