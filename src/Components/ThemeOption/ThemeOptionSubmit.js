const ThemeOptionSubmit = (values, mutate) => {
  if (values["header_logo_id"]) {
    values["options"]["logo"]["header_logo_id"] = values["header_logo_id"];
  } else {
    values["options"]["logo"]["header_logo_id"] = null;
  }
  if (values["footer_logo_id"]) {
    values["options"]["logo"]["footer_logo_id"] = values["footer_logo_id"];
  } else {
    values["options"]["logo"]["footer_logo_id"] = null;
  }
  if (values["favicon_icon_id"]) {
    values["options"]["logo"]["favicon_icon_id"] = values["favicon_icon_id"];
  } else {
    values["options"]["logo"]["favicon_icon_id"] = null;
  }
  if (values["og_image_id"]) {
    values["options"]["seo"]["og_image_id"] = values["og_image_id"];
  } else {
    values["options"]["seo"]["og_image_id"] = null;
  }
  if (values["headerCategories"]) {
    values["options"]["header"]["category_ids"] = values["headerCategories"];
  }
  if (values["footer_categories"]) {
    values["options"]["footer"]["footer_categories"] = values["footer_categories"];
  }
  if (values["useful_link"]) {
    values["options"]["footer"]["useful_link"] = values["useful_link"];
  }
  if (values["help_center"]) {
    values["options"]["footer"]["help_center"] = values["help_center"];
  }
  if (values["today_deals"]) {
    values["options"]["header"]["today_deals"] = values["today_deals"];
  }
  if (values["footer_pages"]) {
    values["options"]["footer"]["footer_pages"] = values["footer_pages"];
  }

  if (values["serviceImage1"]) {
    values["options"]["seller"]["services"]["service_1"]["image_url"] = values["serviceImage1"].hasOwnProperty('asset_url') ? values["serviceImage1"]?.asset_url : values["serviceImage1"]?.original_url; 
  } else values["options"]["seller"]["services"]["service_1"]["image_url"] = "";

  if (values["serviceImage2"]) {
    values["options"]["seller"]["services"]["service_2"]["image_url"] = values["serviceImage2"].hasOwnProperty('asset_url') ? values["serviceImage2"]?.asset_url : values["serviceImage2"]?.original_url; 
  } else values["options"]["seller"]["services"]["service_2"]["image_url"] = "";

  if (values["serviceImage3"]) {
    values["options"]["seller"]["services"]["service_3"]["image_url"] = values["serviceImage3"].hasOwnProperty('asset_url') ? values["serviceImage3"]?.asset_url : values["serviceImage3"]?.original_url; 
  } else values["options"]["seller"]["services"]["service_3"]["image_url"] = "";

  if (values["serviceImage4"]) {
    values["options"]["seller"]["services"]["service_4"]["image_url"] = values["serviceImage4"].hasOwnProperty('asset_url') ? values["serviceImage4"]?.asset_url : values["serviceImage4"]?.original_url; 
  } else values["options"]["seller"]["services"]["service_4"]["image_url"] = "";

  if (values["newsLetterImage"]) {
    values["options"]["popup"]["news_letter"]["image_url"] = values["newsLetterImage"].hasOwnProperty('asset_url') ? values["newsLetterImage"]?.asset_url : values["newsLetterImage"]?.original_url; 
  } else values["options"]["popup"]["news_letter"]["image_url"] = "";

  if (values["exitImage"]) {
    values["options"]["popup"]["exit"]["image_url"] = values["exitImage"].hasOwnProperty('asset_url') ? values["exitImage"]?.asset_url : values["exitImage"]?.original_url; 
  } else values["options"]["popup"]["exit"]["image_url"] = "";

  if (values["authImage"]) {
    values["options"]["popup"]["auth"]["image_url"] = values["authImage"].hasOwnProperty('asset_url') ? values["authImage"]?.asset_url : values["authImage"]?.original_url; 
  } else values["options"]["popup"]["auth"]["image_url"] = "";

  if (values["aboutSellerImage"]) {
    values["options"]["seller"]["about"]["image_url"] = values["aboutSellerImage"].hasOwnProperty('asset_url') ? values["aboutSellerImage"]?.asset_url : values["aboutSellerImage"]?.original_url; 
  } else values["options"]["seller"]["about"]["image_url"] = "";

  if (values["contactUsImage"]) {
    values["options"]["contact_us"]["imageUrl"] = values["contactUsImage"].hasOwnProperty('asset_url') ? values["contactUsImage"]?.asset_url : values["contactUsImage"]?.original_url; 
  } else values["options"]["contact_us"]["imageUrl"] = "";

  if (values["collection_banner_image"]) {
    values["options"]["collection"]["collection_banner_image_url"] = values["collection_banner_image"].hasOwnProperty('asset_url') ? values["collection_banner_image"]?.asset_url : values["collection_banner_image"]?.original_url; 
  } else values["options"]["collection"]["collection_banner_image_url"] = "";

  if (values["FooterSubscribeImage"]) {
    values["options"]["footer"]["bg_image"] = values["FooterSubscribeImage"].hasOwnProperty('asset_url') ? values["FooterSubscribeImage"]?.asset_url : values["FooterSubscribeImage"]?.original_url; 
  } else values["options"]["footer"]["bg_image"] = "";

  if (values["banner_image_url"]) {
    values["options"]["product"]["banner_image_url"] = values["banner_image_url"].hasOwnProperty('asset_url') ? values["banner_image_url"]?.asset_url : values["banner_image_url"]?.original_url; 
  } else values["options"]["product"]["banner_image_url"] = "";

  if (values["safe_checkout_image"]) {
    values["options"]["product"]["safe_checkout_image"] = values["safe_checkout_image"].hasOwnProperty('asset_url') ? values["safe_checkout_image"]?.asset_url : values["safe_checkout_image"]?.original_url; 
  } else values["options"]["product"]["safe_checkout_image"] = "";

  if (values["secure_checkout_image"]) {
    values["options"]["product"]["secure_checkout_image"] = values["secure_checkout_image"].hasOwnProperty('asset_url') ? values["secure_checkout_image"]?.asset_url : values["secure_checkout_image"]?.original_url; 
  } else values["options"]["product"]["secure_checkout_image"] = "";

  if (values["footerImage"]) {
    values["options"]["footer"]["bg_image"] = values["footerImage"].hasOwnProperty('asset_url') ? values["footerImage"]?.asset_url : values["footerImage"]?.original_url; 
  } else values["options"]["footer"]["bg_image"] = "";

  if (values["paymentOptionImage"]) {
    values["options"]["footer"]["payment_option_image_url"] = values["paymentOptionImage"].hasOwnProperty('asset_url') ? values["paymentOptionImage"]?.asset_url : values["paymentOptionImage"]?.original_url; 
  } else values["options"]["footer"]["payment_option_image_url"] = "";

  // About Us
  if (values["content_left_image_url"]) {
    values["options"]["about_us"]["about"]["content_left_image_url"] = values["content_left_image_url"].hasOwnProperty('asset_url') ? values["content_left_image_url"]?.asset_url : values["content_left_image_url"]?.original_url; 
  } else values["options"]["about_us"]["about"]["content_left_image_url"] = "";

  if (values["content_right_image_url"]) {
    values["options"]["about_us"]["about"]["content_right_image_url"] = values["content_right_image_url"].hasOwnProperty('asset_url') ? values["content_right_image_url"]?.asset_url : values["content_right_image_url"]?.original_url; 
  } else values["options"]["about_us"]["about"]["content_right_image_url"] = "";

  values["options"]["about_us"]["about"]["futures"]?.forEach((elem, i) => {
    if (values[`futureIcons${i}`]) {
      values["options"]["about_us"]["about"]["futures"][i]["icon"] = values[`futureIcons${i}`].hasOwnProperty('asset_url') ? values[`futureIcons${i}`]?.asset_url : values[`futureIcons${i}`].original_url; 
    } else {
      values["options"]["about_us"]["about"]["futures"][i]["icon"] = "";
    }
  });

  values["options"]["about_us"]["team"]["members"]?.forEach((elem, i) => {
    if (values[`teamContentImage${i}`]) {
      values["options"]["about_us"]["team"]["members"][i]["profile_image_url"] = values[`teamContentImage${i}`].hasOwnProperty('asset_url') ? values[`teamContentImage${i}`].asset_url : values[`teamContentImage${i}`]?.original_url
    } else {
      values["options"]["about_us"]["team"]["members"][i]["profile_image_url"] = "";
    }
  });

  values["options"]["about_us"]["testimonial"]["reviews"]?.forEach((elem, i) => {
    if (values[`testimonialReviewImage${i}`]) {
      values["options"]["about_us"]["testimonial"]["reviews"][i]["profile_image_url"] = values[`testimonialReviewImage${i}`].hasOwnProperty('asset_url') ? values[`testimonialReviewImage${i}`]?.asset_url : values[`testimonialReviewImage${i}`]?.original_url; 
    } else {
      values["options"]["about_us"]["testimonial"]["reviews"][i]["profile_image_url"] = "";
    }
  });

  delete values?.options?.logo?.favicon_icon;
  delete values?.options?.logo?.footer_logo;
  delete values?.options?.logo?.header_logo;
  delete values?.options?.seo?.og_image;
  values["_method"] = "put";
  mutate(values);
};

// // export default ThemeOptionSubmit;
// const ThemeOptionSubmit = (values, mutate) => {
//   // Make a deep copy of the values
//   const updatedValues = JSON.parse(JSON.stringify(values));
  
//   // Ensure the base structure exists
//   if (!updatedValues.options) {
//     // If there's no options object at all, this might mean it's not properly initialized
//     // Let's check if the values object itself contains the necessary data structure
//     if (updatedValues.general || updatedValues.logo || updatedValues.header) {
//       // It appears the options data is at the root level - restructure it
//       updatedValues.options = {
//         general: updatedValues.general || {},
//         logo: updatedValues.logo || {},
//         header: updatedValues.header || {},
//         footer: updatedValues.footer || {},
//         seo: updatedValues.seo || {},
//         // Add other sections as needed
//       };
//     } else {
//       // Initialize with empty structure
//       updatedValues.options = {
//         general: {},
//         logo: {},
//         header: {},
//         footer: {},
//         seo: {},
//         product: {},
//         collection: {},
//         contact_us: {},
//         about_us: {
//           about: {},
//           team: { members: [] },
//           testimonial: { reviews: [] }
//         },
//         seller: {
//           about: {},
//           services: {}
//         },
//         popup: {
//           news_letter: {},
//           exit: {},
//           auth: {}
//         }
//       };
//     }
//   }
  
//   // Ensure all required nested objects exist
//   const ensurePath = (obj, path) => {
//     const parts = path.split('.');
//     let current = obj;
//     for (const part of parts) {
//       if (!current[part]) current[part] = {};
//       current = current[part];
//     }
//     return current;
//   };
  
//   // Ensure all necessary paths
//   ensurePath(updatedValues, 'options.logo');
//   ensurePath(updatedValues, 'options.seo');
//   ensurePath(updatedValues, 'options.header');
//   ensurePath(updatedValues, 'options.footer');
//   ensurePath(updatedValues, 'options.product');
//   ensurePath(updatedValues, 'options.collection');
//   ensurePath(updatedValues, 'options.contact_us');
//   ensurePath(updatedValues, 'options.seller.services');
//   ensurePath(updatedValues, 'options.seller.about');
//   ensurePath(updatedValues, 'options.popup.news_letter');
//   ensurePath(updatedValues, 'options.popup.exit');
//   ensurePath(updatedValues, 'options.popup.auth');
//   ensurePath(updatedValues, 'options.about_us.about');
//   ensurePath(updatedValues, 'options.about_us.team');
//   ensurePath(updatedValues, 'options.about_us.testimonial');
  
//   // Handle logo options
//   const logoFields = ['header_logo_id', 'footer_logo_id', 'favicon_icon_id'];
//   logoFields.forEach(field => {
//     if (updatedValues[field]) {
//       updatedValues.options.logo[field] = updatedValues[field];
//     } else {
//       updatedValues.options.logo[field] = null;
//     }
//   });
  
//   // Handle SEO options
//   if (updatedValues.og_image_id) {
//     updatedValues.options.seo.og_image_id = updatedValues.og_image_id;
//   } else {
//     updatedValues.options.seo.og_image_id = null;
//   }
  
//   // Handle header options
//   if (updatedValues.headerCategories) {
//     updatedValues.options.header.category_ids = updatedValues.headerCategories;
//   }
  
//   if (updatedValues.today_deals) {
//     updatedValues.options.header.today_deals = updatedValues.today_deals;
//   }
  
//   // Handle footer options
//   const footerFields = ['footer_categories', 'useful_link', 'help_center', 'footer_pages'];
//   footerFields.forEach(field => {
//     if (updatedValues[field]) {
//       updatedValues.options.footer[field] = updatedValues[field];
//     }
//   });
  
//   // Helper function to set values at any path depth
//   const setValueAtPath = (obj, path, value) => {
//     const parts = path.split('.');
//     let current = obj;
    
//     // Navigate to the target object
//     for (let i = 0; i < parts.length - 1; i++) {
//       if (!current[parts[i]]) {
//         current[parts[i]] = {};
//       }
//       current = current[parts[i]];
//     }
    
//     // Set the value
//     current[parts[parts.length - 1]] = value;
//   };
  
//   // Process image fields
//   const processImageField = (sourceField, targetPath) => {
//     if (updatedValues[sourceField]) {
//       const imageUrl = updatedValues[sourceField].hasOwnProperty('asset_url') 
//         ? updatedValues[sourceField].asset_url 
//         : (updatedValues[sourceField].original_url || updatedValues[sourceField]);
      
//       setValueAtPath(updatedValues, targetPath, imageUrl);
//     }
//   };
  
//   // Process seller service images
//   processImageField('serviceImage1', 'options.seller.services.service_1.image_url');
//   processImageField('serviceImage2', 'options.seller.services.service_2.image_url');
//   processImageField('serviceImage3', 'options.seller.services.service_3.image_url');
//   processImageField('serviceImage4', 'options.seller.services.service_4.image_url');
  
//   // Process popup images
//   processImageField('newsLetterImage', 'options.popup.news_letter.image_url');
//   processImageField('exitImage', 'options.popup.exit.image_url');
//   processImageField('authImage', 'options.popup.auth.image_url');
  
//   // Process other images
//   processImageField('aboutSellerImage', 'options.seller.about.image_url');
//   processImageField('contactUsImage', 'options.contact_us.imageUrl');
//   processImageField('collection_banner_image', 'options.collection.collection_banner_image_url');
//   processImageField('FooterSubscribeImage', 'options.footer.bg_image');
//   processImageField('banner_image_url', 'options.product.banner_image_url');
//   processImageField('safe_checkout_image', 'options.product.safe_checkout_image');
//   processImageField('secure_checkout_image', 'options.product.secure_checkout_image');
//   processImageField('footerImage', 'options.footer.bg_image');
//   processImageField('paymentOptionImage', 'options.footer.payment_option_image_url');
  
//   // About Us images
//   processImageField('content_left_image_url', 'options.about_us.about.content_left_image_url');
//   processImageField('content_right_image_url', 'options.about_us.about.content_right_image_url');
  
//   // Process arrays if they exist
//   try {
//     // Process future icons
//     if (updatedValues.options?.about_us?.about?.futures) {
//       updatedValues.options.about_us.about.futures.forEach((elem, i) => {
//         const fieldName = `futureIcons${i}`;
//         if (updatedValues[fieldName]) {
//           const iconUrl = updatedValues[fieldName].hasOwnProperty('asset_url') 
//             ? updatedValues[fieldName].asset_url 
//             : (updatedValues[fieldName].original_url || updatedValues[fieldName]);
          
//           updatedValues.options.about_us.about.futures[i].icon = iconUrl;
//         }
//       });
//     }
    
//     // Process team member images
//     if (updatedValues.options?.about_us?.team?.members) {
//       updatedValues.options.about_us.team.members.forEach((elem, i) => {
//         const fieldName = `teamContentImage${i}`;
//         if (updatedValues[fieldName]) {
//           const imageUrl = updatedValues[fieldName].hasOwnProperty('asset_url') 
//             ? updatedValues[fieldName].asset_url 
//             : (updatedValues[fieldName].original_url || updatedValues[fieldName]);
          
//           updatedValues.options.about_us.team.members[i].profile_image_url = imageUrl;
//         }
//       });
//     }
    
//     // Process testimonial review images
//     if (updatedValues.options?.about_us?.testimonial?.reviews) {
//       updatedValues.options.about_us.testimonial.reviews.forEach((elem, i) => {
//         const fieldName = `testimonialReviewImage${i}`;
//         if (updatedValues[fieldName]) {
//           const imageUrl = updatedValues[fieldName].hasOwnProperty('asset_url') 
//             ? updatedValues[fieldName].asset_url 
//             : (updatedValues[fieldName].original_url || updatedValues[fieldName]);
          
//           updatedValues.options.about_us.testimonial.reviews[i].profile_image_url = imageUrl;
//         }
//       });
//     }
//   } catch (error) {
//     console.error("Error processing array fields:", error);
//   }
  
//   // Clean up unnecessary fields
//   delete updatedValues?.options?.logo?.favicon_icon;
//   delete updatedValues?.options?.logo?.footer_logo;
//   delete updatedValues?.options?.logo?.header_logo;
//   delete updatedValues?.options?.seo?.og_image;
  
//   // Make sure we have an ID field if it exists
//   if (values.id) {
//     updatedValues.id = values.id;
//   }
  
//   // Add method for the API
//   updatedValues["_method"] = "put";
  
//   // Debug the final data structure
//   console.log("Submitting values:", JSON.stringify(updatedValues, null, 2));
  
//   // Call the mutate function with the updated values
//   try {
//     mutate(updatedValues);
//   } catch (error) {
//     console.error("Error during mutation:", error);
//   }
// };

// export default ThemeOptionSubmit;