const SingleProductInitialValue = (data) => {
  
  let obj = {};

  data?.content?.services?.length > 0 &&
    data?.content?.services?.forEach((elem, index) => {
      elem.image_url ? (obj[`servicesImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`servicesLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`servicesLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
  });

  data?.content?.social_media?.banners?.length > 0 &&
    data?.content?.social_media?.banners?.forEach((elem, index) => {
      elem.image_url ? (obj[`socialMediaBannerImage${index}`] = { original_url: elem.image_url }) : "";
      elem?.redirect_link ? (obj[`socialMediaRedirectLinkType${index}`] = elem?.redirect_link?.link_type) : "";
      elem?.redirect_link ? (obj[`socialMediaRedirectLink${index}`] = elem?.redirect_link?.link) : "";
      return obj;
  });

  return {
    content: data?.content,
    sequence: data?.sequence,
    slug: data?.slug,
    
    // Images
    homeBannerImage: data?.content?.home_banner?.banner_image ? { original_url: data?.content?.home_banner?.banner_image } : "",
    banner1Image: data?.content?.grid_banner?.banner_1?.image_url ? { original_url: data?.content?.grid_banner?.banner_1?.image_url } : "",
    banner2Image: data?.content?.grid_banner?.banner_2?.image_url ? { original_url: data?.content?.grid_banner?.banner_2?.image_url } : "",
    banner3Image: data?.content?.grid_banner?.banner_3?.image_url ? { original_url: data?.content?.grid_banner?.banner_3?.image_url } : "",

    productVideo: data?.content?.product_video?.video ? { original_url: data?.content?.product_video?.video } : "",
    productVideoImage: data?.content?.product_video?.image ? { original_url: data?.content?.product_video?.image } : "",

    rightPanelImage: data?.content?.services?.right_panel?.banners?.image_url ? { original_url: data?.content?.services?.right_panel?.banners?.image_url } : "",

    testimonialImage : data?.content?.testimonial?.banners?.image_url ? { original_url: data?.content?.testimonial?.banners?.image_url } : "",

    ...obj,

    // Redirect Link
    homeBannerLinkType: data?.content?.home_banner?.redirect_link?.link_type || "",
    homeBannerLink: data?.content?.home_banner?.redirect_link?.link || "",

    banner1LinkType: data?.content?.grid_banner?.banner_1?.redirect_link?.link_type || "",
    banner1Link: data?.content?.grid_banner?.banner_1?.redirect_link?.link || "",

    banner2LinkType: data?.content?.grid_banner?.banner_2?.redirect_link?.link_type || "",
    banner2Link: data?.content?.grid_banner?.banner_2?.redirect_link?.link || "",

    banner3LinkType: data?.content?.grid_banner?.banner_3?.redirect_link?.link_type || "",
    banner3Link: data?.content?.grid_banner?.banner_3?.redirect_link?.link || "",

    //Ids
    productIds: data?.content?.product_ids || [],
    productListProduct: data?.content?.products_list?.product_ids || [],
    singleProductList: data?.content?.single_product?.product_ids || [],

    brandItems: data?.content?.brand?.brand_ids || [],


  };
};

export default SingleProductInitialValue;
