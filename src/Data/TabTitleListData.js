import { RiAccountBoxLine, RiAlertLine, RiBankCardLine, RiBankLine, RiCheckboxCircleLine, RiCloseCircleLine, RiComputerLine, RiContactsLine, RiDatabaseLine, RiEarthLine, RiFacebookCircleLine, RiFileList2Line, RiFileListLine, RiGoogleFill, RiGoogleLine, RiImageLine, RiLayoutBottom2Line, RiLayoutTop2Line, RiLineChartLine, RiMailOpenLine, RiPaypalLine, RiPercentLine, RiPhoneLockLine, RiPieChartLine, RiRadioButtonLine, RiRecordCircleLine, RiRefundLine, RiSettingsLine, RiShoppingBasketLine, RiToolsLine, RiTruckLine, RiWallet3Fill, RiWalletLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import header1 from "../../public/assets/images/theme-option/header/01.jpg";
import header2 from "../../public/assets/images/theme-option/header/02.jpg";
import header3 from "../../public/assets/images/theme-option/header/03.jpg";
import header04 from "../../public/assets/images/theme-option/header/05.jpg";
import header01 from "../../public/assets/images/theme-option/header/1.jpg";
import header02 from "../../public/assets/images/theme-option/header/2.jpg";
import header03 from "../../public/assets/images/theme-option/header/3.jpg";
import header4 from "../../public/assets/images/theme-option/header/5.jpg";
import product01 from "../../public/assets/images/theme-option/product/01.jpg";
import product02 from "../../public/assets/images/theme-option/product/02.jpg";
import product03 from "../../public/assets/images/theme-option/product/04.jpg";
import product04 from "../../public/assets/images/theme-option/product/07.jpg";
import basicSellerStore from "../../public/assets/images/theme-option/seller/basic-details.png";
import basicSeller from "../../public/assets/images/theme-option/seller/basic.png";
import classicSellerStore from "../../public/assets/images/theme-option/seller/classic-details.png";
import classicSeller from "../../public/assets/images/theme-option/seller/classic.png";
import { default as blog01, default as blogStore1 } from "../../public/assets/images/theme-option/shop/01.jpg";
import blog02 from "../../public/assets/images/theme-option/shop/02.jpg";
import themeOption3 from "../../public/assets/images/theme-option/shop/03.jpg";
import themeOption4 from "../../public/assets/images/theme-option/shop/04.jpg";
import themeOption5 from "../../public/assets/images/theme-option/shop/05.jpg";
import themeOption6 from "../../public/assets/images/theme-option/shop/06.jpg";
import themeOption7 from "../../public/assets/images/theme-option/shop/07.jpg";
import blogStore2 from "../../public/assets/images/theme-option/shop/08.jpg";
import blogStore3 from "../../public/assets/images/theme-option/shop/09.jpg";
import themeOption1 from "../../public/assets/images/theme-option/shop/10.jpg";
import themeOption2 from "../../public/assets/images/theme-option/shop/11.jpg";
import themeOption8 from "../../public/assets/images/theme-option/shop/13.jpg";
import themeOption9 from "../../public/assets/images/theme-option/shop/14.jpg";

export const ProductTabTitleListData = [
  {
    title: "general",
    icon: <RiSettingsLine />,
    inputs: ["product_type", "store_id", "name", "description", "short_description", "description", "tax_id"],
  },
  {
    title: "product_images",
    icon: <RiImageLine />,
    inputs: ["product_thumbnail", "product_thumbnail_id", "size_chart_image", "size_chart_image_id", "product_galleries", "product_galleries_id", "watermark", "watermark_position", "watermark_image_id"],
  },
  {
    title: "inventory",
    icon: <RiFileListLine />,
    inputs: ["type", "stock_status", "sku", "quantity", "price", "discount", "sale_price", "wholesale_price_type", "wholesale_prices", "external_url", "external_button_text"],
  },
  {
    title: "variants",
    icon: <RiDatabaseLine />,
    inputs: ["type", "stock_status", "sku", "quantity", "price", "sale_price", "show_stock_quantity", "discount", "visible_time", "variations", "is_licensable", "is_licensekey_auto", "separator", "license_key"],
  },
  {
    title: "digital_product",
    icon: <RiComputerLine />,
    inputs: ["is_licensable", "is_licensekey_auto", "separator", "license_key", "preview_audio_file_id", "preview_type", "preview_video_file_id", "preview_url"],
  },
  {
    title: "setup",
    icon: <RiToolsLine />,
    inputs: ["is_sale_enable", "sale_starts_at", "sale_expired_at", "unit", "tags", "brand_id", "is_random_related_products", "related_products", "categories", "cross_sell_products", "cross_sell_product_id"],
  },
  {
    title: "seo",
    icon: <RiEarthLine />,
    inputs: ["meta_title", "meta_description ", "product_meta_image"],
  },
  {
    title: "shipping",
    icon: <RiTruckLine />,
    inputs: ["is_free_shipping", "is_return", "estimated_delivery_text", "return_policy_text", "weight"],
  },
  {
    title: "status",
    icon: <RiCheckboxCircleLine />,
    inputs: ["is_featured", "safe_checkout", "secure_checkout", "social_share", "encourage_order", "encourage_view", "is_trending", "status"],
  },
];
export const CouponTabTitleListData = [
  {
    title: "general",
    icon: <RiSettingsLine />,
    inputs: ["code", "type", "amount", "status", "is_expired"],
  },
  {
    title: "restriction",
    icon: <RiCloseCircleLine />,
    inputs: ["products", "exclude_products", "min_spend", "max_spend"],
  },
  {
    title: "usage",
    icon: <RiPieChartLine />,
    inputs: ["is_unlimited", "usage_per_coupon", "usage_per_customer"],
  },
];

export const SettingTabTitleListData = [
  { title: "general", icon: <RiSettingsLine /> },
  { title: "activation", icon: <RiRadioButtonLine /> },
  { title: "wallet_points", icon: <RiWalletLine />  },
  { title: "email_configuration", icon: <RiMailOpenLine /> },
  { title: "vendor_commissions", icon: <RiPercentLine /> },
  { title: "sms_configuration", icon: <RiBankCardLine /> },
  { title: "media_configuration", icon: <RiMailOpenLine /> },
  { title: "refund", icon: <RiRefundLine /> },
  // { title: "newsletter", icon: <RiMailUnreadLine /> },
  { title: "delivery", icon: <TbTruckDelivery /> },
  { title: "payment_method", icon: <RiBankCardLine /> },
  { title: "analytics", icon: <RiLineChartLine /> },
  { title: "re-captcha", icon: <RiGoogleFill /> },
  { title: "maintenance", icon: <RiAlertLine /> },
];

export const SettingProductBoxOptions = [
  { id: "product_box_one", name: "ProductBoxOne" },
  { id: "product_box_two", name: "ProductBoxTwo" },
  { id: "product_box_three", name: "ProductBoxThree" },
  { id: "product_box_four", name: "ProductBoxFour" },
  { id: "product_box_five", name: "ProductBoxFive" },
  { id: "product_box_six", name: "ProductBoxSix" },
  { id: "product_box_seven", name: "ProductBoxSeven" },
  { id: "product_box_eight", name: "ProductBoxEight" },
  { id: "product_box_nine", name: "ProductBoxNine" },
  { id: "product_box_ten", name: "ProductBoxTen" },
  { id: "product_box_eleven", name: "ProductBoxEleven" },
  { id: "product_box_twelve", name: "ProductBoxTwelve" },
];

export const SettingProductLayoutOptions = [
  { id: "product_images", name: "ProductImage" },
  { id: "product_thumbnail", name: "ProductThumbnail" },
  { id: "product_slider", name: "ProductSlider" },
  { id: "product_sticky", name: "ProductSticky" },
  { id: "product_tabs", name: "ProductTabs" },
  { id: "product_box_six", name: "ProductAccordion" },
  { id: "product_sidebar_left", name: "ProductLeftSidebar" },
  { id: "product_sidebar_right", name: "ProductRightSidebar" },
  { id: "product_no_sidebar", name: "ProductNoSidebar" },
  { id: "vertical_tab", name: "VerticalTab" },
  { id: "product_column_thumbnail", name: "ProductColumnThumbnail" },
  { id: "product_thumbnail_image_outside", name: "ProductThumbnailImageOutside" },
];

export const ThemeOptionTabTitleListData = [
  { title: "general", icon: <RiSettingsLine /> },
  { title: "header", icon: <RiLayoutTop2Line /> },
  { title: "footer", icon: <RiLayoutBottom2Line /> },
  { title: "collection_layout", icon: <RiShoppingBasketLine /> },
  { title: "product_layout", icon: <RiShoppingBasketLine /> },
  { title: "blog", icon: <RiFileList2Line /> },
  { title: "seller", icon: <RiFileList2Line /> },
  { title: "about_us", icon: <RiContactsLine /> },
  { title: "contact_page", icon: <RiContactsLine /> },
  { title: "404_error_page", icon: <RiAlertLine /> },
  { title: "popup", icon: <RiAlertLine /> },
  { title: "seo", icon: <RiEarthLine /> },
];

export const waterMarkPosition = [
  {
    id: "top-left",
    name: "Top Left",
  },
  {
    id: "top",
    name: "Top",
  },
  {
    id: "top-right",
    name: "Top Right",
  },
  {
    id: "left",
    name: "Left",
  },
  {
    id: "center",
    name: "Center",
  },
  {
    id: "right",
    name: "Right",
  },
  {
    id: "bottom-left",
    name: "Bottom Left",
  },
  {
    id: "bottom",
    name: "Bottom",
  },
  {
    id: "bottom-right",
    name: "Bottom Right",
  },
];

export const SettingPaymentMethodTab = [
  {
    key: "PaypalProvider",
    title: "paypal",
    inputs: ["site_title", "site_tagline", "default_timezone", "default_currency", "default_language", "min_order_amount", "front_site_langauge_direction", "admin_site_langauge_direction", "store_prefix", "copyright"],
  },
  {
    key: "StripeProvider",
    title: "stripe",
    inputs: ["catalog_enable", "maintenance", "vendor_activation", "product_auto_approve", "wallet_enable", "coupon_enable", "stock_product_hide"],
  },
  {
    key: "CcAvenueProvider",
    title: "ccavenue",
    inputs: ["catalog_enable", "maintenance", "vendor_activation", "product_auto_approve", "wallet_enable", "coupon_enable", "stock_product_hide"],
  },
  {
    key: "RazorpayProvider",
    title: "razorpay",
    inputs: ["mail_mailer", "mail_host", "mail_port", "mail_username", "mail_password", "mail_encryption", "mail_from_address", "mail_from_name", "mailgun_domain", "mailgun_secret"],
  },
  {
    key: "CashOnDeliveryProvider",
    title: "cod",
    inputs: ["mail_mailer", "mail_host", "mail_port", "mail_username", "mail_password", "mail_encryption", "mail_from_address", "mail_from_name", "mailgun_domain", "mailgun_secret"],
  },
  {
    key: "MollieProvider",
    title: "mollie",
    inputs: ["mail_mailer", "mail_host", "mail_port", "mail_username", "mail_password", "mail_encryption", "mail_from_address", "mail_from_name", "mailgun_domain", "mailgun_secret"],
  },
  {
    key: "InstaMojoProvider",
    title: "instamojo",
    inputs: ["mail_mailer", "mail_host", "mail_port", "mail_username", "mail_password", "mail_encryption", "mail_from_address", "mail_from_name", "mailgun_domain", "mailgun_secret"],
  },
  {
    key: "PhonepeProvider",
    title: "phonepe",
    inputs: ["mail_mailer", "mail_host", "mail_port", "mail_username", "mail_password", "mail_encryption", "mail_from_address", "mail_from_name", "mailgun_domain", "mailgun_secret"],
  },
  {
    key: "bkashProvider",
    title: "bkash",
    inputs: ["title", "status", "app_key", "password", "username", "app_secret", "sandbox_mode"],
  },
  {
    key: "paystackProvider",
    title: "paystack",
    inputs: ["title", "status", "public_key", "secret_key", "sandbox_mode"],
  },
  {
    key: "sslcommerzProvider",
    title: "sslcommerz",
    inputs: ["title", "status", "store_id", "sandbox_mode", "store_password"],
  },
  {
    key: "flutter_waveProvider",
    title: "flutter_wave",
    inputs: ["title", "status", "public_key", "secret_key", "sandbox_mod", "secret_hash"],
  },
  {
    key: "bank_transferProvider",
    title: "bank_transfer",
    inputs: ["title", "status"],
  },
];

export const settingAnalyticsTab = [
  { title: "facebook_pixel", icon: <RiFacebookCircleLine /> },
  { title: "google_analytics", icon: <RiGoogleLine /> },
];

export const HeaderOption = [
  {
    id: 1,
    title: "Header 1",
    value: "basic_header",
    dummyImg: header1,
    realImg: header01,
  },
  {
    id: 2,
    title: "Header 2",
    value: "classic_header",
    dummyImg: header2,
    realImg: header02,
  },
  {
    id: 3,
    title: "Header 3",
    value: "standard_header",
    dummyImg: header3,
    realImg: header03,
  },
  {
    id: 4,
    title: "Header 4",
    value: "minimal_header",
    dummyImg: header4,
    realImg: header04,
  },
];

export const FooterUseFulLink = [
  { id: 1, value: "home", name: "Home" },
  { id: 2, value: "collections", name: "Collections" },
  { id: 3, value: "about-us", name: "About Us" },
  { id: 4, value: "blogs", name: "Blogs" },
  { id: 5, value: "offers", name: "Offers" },
  { id: 6, value: "search", name: "Search" },
];

export const helpCenter = [
  {
    id: 1,
    name: "My Account",
    value: "account/dashboard",
  },
  {
    id: 2,
    name: "My Orders",
    value: "account/order",
  },
  {
    id: 3,
    name: "Wishlist",
    value: "wishlist",
  },
  {
    id: 4,
    name: "Compare",
    value: "compare",
  },
  {
    id: 5,
    name: "FAQ's",
    value: "faq",
  },
  {
    id: 6,
    name: "Contact Us",
    value: "contact-us",
  },
];

export const CollectionLayoutOption = [
  {
    id: 1,
    value: "collection_category_slider",
    title: "collection_category_slider",
    img: themeOption1,
  },
  {
    id: 2,
    value: "collection_category_sidebar",
    title: "collection_category_sidebar",
    img: themeOption2,
  },
  {
    id: 3,
    value: "collection_banner",
    title: "collection_banner",
    img: themeOption3,
  },
  {
    id: 4,
    value: "collection_left_sidebar",
    title: "collection_left_sidebar",
    img: themeOption4,
  },
  {
    id: 5,
    value: "collection_list",
    title: "collection_list",
    img: themeOption5,
  },
  {
    id: 6,
    value: "collection_right_sidebar",
    title: "collection_right_sidebar",
    img: themeOption6,
  },
  {
    id: 7,
    value: "collection_offcanvas_filter",
    title: "collection_offcanvas_filter",
    img: themeOption7,
  },
  {
    id: 8,
    value: "collection_sidebar_popup",
    title: "collection_sidebar_popup",
    img: themeOption8,
  },
  {
    id: 9,
    value: "collection_product_infinite_scroll",
    title: "collection_product_infinite_scroll",
    img: themeOption9,
  },
];
export const ProductLayoutOption = [
  { id: 1, value: "product_images", title: "product_images", img: product01 },
  {
    id: 2,
    value: "product_thumbnail",
    title: "product_thumbnail",
    img: product02,
  },
  { id: 3, value: "product_slider", title: "product_slider", img: product03 },
  { id: 4, value: "product_sticky", title: "product_sticky", img: product04 },
];
export const BlogStyleOption = [
  { value: "grid_view", title: "grid_view", img: blog01 },
  { value: "list_view", title: "list_view", img: blog02 },
];
export const BlogTypeOption = [
  { value: "left_sidebar", title: "left_sidebar", img: blogStore1 },
  { value: "right_sidebar", title: "right_sidebar", img: blogStore2 },
  { value: "no_sidebar", title: "no_sidebar", img: blogStore3 },
];

export const AccountTab = [
  { title: "profile_setting", icon: <RiAccountBoxLine /> },
  { title: "change_password", icon: <RiPhoneLockLine /> },
];

export const PaymentDetailTab = [
  { title: "bank", icon: <RiBankLine /> },
  { title: "paypal", icon: <RiPaypalLine /> },
];

export const HomePage1SettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "featured_banners", icon: <RiRecordCircleLine /> },
  { title: "main_content", icon: <RiRecordCircleLine /> },
  { title: "newsletter", icon: <RiRecordCircleLine /> },
];

export const AppSettingsPageTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "recent_product", icon: <RiRecordCircleLine /> },
  { title: "categories_list", icon: <RiRecordCircleLine /> },
  { title: "offer_products", icon: <RiRecordCircleLine /> },
  { title: "section_1_products", icon: <RiRecordCircleLine /> },
  { title: "section_2_products", icon: <RiRecordCircleLine /> },
  { title: "coupons", icon: <RiRecordCircleLine /> },
  { title: "section_3_products", icon: <RiRecordCircleLine /> },
  { title: "navigate_button", icon: <RiRecordCircleLine /> },
];
export const HomePage7SettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories_icon_list", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "coupons", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "newsletter", icon: <RiRecordCircleLine /> },
];
export const cairoHomePageTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories_icon_list", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "categories_icon_list", icon: <RiRecordCircleLine /> },
  { title: "categories_icon_list", icon: <RiRecordCircleLine /> },
  { title: "categories_products", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "newsletter", icon: <RiRecordCircleLine /> },
];

export const ThemeOneHomeHorizontalTab = [{ title: "main_banner" }, { title: "SubBanner1" }, { title: "SubBanner2" }];

export const ThemeOneMainHorizontalTab = [{ title: "left_sidebar" }, { title: "right_content" }];
export const ThemeSevenHorizontalTab = [{ title: "slider" }, { title: "banner" }];
export const ThemeOneMainHorizontalTab2 = [{ title: "left_panel" }, { title: "right_sidebar" }];

export const ThemeSixMainHorizontalTab = [{ title: "left_panel" }, { title: "right_sidebar" }];

export const HomePage3SetttingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories_icon_list", icon: <RiRecordCircleLine /> },
  { title: "coupons", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "product_bundles", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "newsletter", icon: <RiRecordCircleLine /> },
];

export const ThemeThreeHomeHorizontalTab = [{ title: "main_banner" }, { title: "SubBanner1" }];

export const HomePage2SettingTab = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories_icon_list", icon: <RiRecordCircleLine /> },
  { title: "coupons", icon: <RiRecordCircleLine /> },
  { title: "featured_banners", icon: <RiRecordCircleLine /> },
  { title: "main_content", icon: <RiRecordCircleLine /> },
  { title: "full_width_banner", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "newsletter", icon: <RiRecordCircleLine /> },
];

export const MainRightSidebarBannerTab = [{ title: "Banner1" }, { title: "Banner2" }];

export const SliderProduct9Title = [{ title: "banner" }, { title: "slider" }];

export const ProductWithDealTab = [{ title: "product_list" }, { title: "deal_of_days" }];

export const HomePage4SettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories_image_list", icon: <RiRecordCircleLine /> },
  { title: "value_banners", icon: <RiRecordCircleLine /> },
  { title: "categories_products", icon: <RiRecordCircleLine /> },
  { title: "two_column_banner", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "full_width_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "newsletter", icon: <RiRecordCircleLine /> },
];

export const HomePage5SettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "featured_banners", icon: <RiRecordCircleLine /> },
  { title: "categories_image_list", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "bank_wallet_offers", icon: <RiRecordCircleLine /> },
  { title: "product_with_deals", icon: <RiRecordCircleLine /> },
  { title: "full_width_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "two_column_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList4", icon: <RiRecordCircleLine /> },
  { title: "ProductList5", icon: <RiRecordCircleLine /> },
  { title: "delivery_banners", icon: <RiRecordCircleLine /> },
  { title: "ProductList6", icon: <RiRecordCircleLine /> },
  { title: "ProductList7", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
];

export const HomePage8SettingTitle = [{ title: "main_content", icon: <RiRecordCircleLine /> }];

export const HomePage6SettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services_banner", icon: <RiRecordCircleLine /> },
  { title: "main_content", icon: <RiRecordCircleLine /> },
  { title: "full_width_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "newsletter", icon: <RiRecordCircleLine /> },
];

export const HomePage9SettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories_icon_list", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "column_banners", icon: <RiRecordCircleLine /> },
  { title: "slider_product", icon: <RiRecordCircleLine /> },
  { title: "coupon_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "newsletter", icon: <RiRecordCircleLine /> },
];

export const SellerDashboardTitles = [{ title: "about" }, { title: "services" }, { title: "steps" }, { title: "selling" }];
export const AboutUsTabTitle = [{ title: "about" }, { title: "team" }, { title: "testimonial" }];
export const popUpTabTitle = [{ title: "newsletter" }, { title: "exit" }, { title: "auth" }];

export const SellerAboutStore = [
  { value: "basic_store", title: "basic_store", img: basicSeller },
  { value: "classic_store", title: "classic_store", img: classicSeller },
];
export const SellerSetailsStore = [
  {
    value: "basic_store_details",
    title: "basic_store_details",
    img: basicSellerStore,
  },
  {
    value: "classic_store_details",
    title: "classic_store_details",
    img: classicSellerStore,
  },
];

export const redirectOptions = [
  { id: "product", name: "Product" },
  { id: "collection", name: "Collection" },
  { id: "external_url", name: "External Link" },
];

export const topStoreOption = [
  {
    value: "today",
    name: "today",
  },
  {
    value: "last_week",
    name: "last_week",
  },
  {
    value: "last_month",
    name: "last_month",
  },
  {
    value: "this_year",
    name: "this_year",
  },
];

export const variantStyle = [
  { id: "rectangle", name: "Rectangle" },
  { id: "circle", name: "Circle" },
  { id: "radio", name: "Radio" },
  { id: "dropdown", name: "Dropdown" },
  { id: "image", name: "Image" },
  { id: "color", name: "Color" },
];
// ===========================================================================================//

export const FashionOneSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const FashionTwoSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "full_banner", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const FashionThreeSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "full_banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "brand_tab", icon: <RiRecordCircleLine /> },
];

export const FashionFourSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const FashionFiveSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories", icon: <RiRecordCircleLine /> },
  { title: "knockout_deals", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const FashionSixSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "product_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const FashionSevenSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "featured_banners", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "product_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const SingleProductTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "grid_banner", icon: <RiRecordCircleLine /> },
  { title: "product_video", icon: <RiRecordCircleLine /> },
  { title: "single_product", icon: <RiRecordCircleLine /> },
  { title: "products_list", icon: <RiRecordCircleLine /> },
  { title: "testimonial", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const GridBannerTabs = [{ title: "GridBanner1" }, { title: "GridBanner2" }, { title: "GridBanner3" }];


export const FashionOneFeatureBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const FashionTwoFeatureBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }, { title: "Banner4" }];

export const FashionFourFeatureBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const FashionFourProductListTitle = [{ title: "categories" }, { title: "products" }];

export const FashionFiveKnockoutDealsTitle = [{ title: "main_banner" }, { title: "GridBanner1" }, { title: "GridBanner2" }, { title: "GridBanner3" }];

export const FashionSixBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }, { title: "Banner4" }, { title: "Banner 5" }, { title: "Banner 6" }];
export const FashionSixProductList2Title = [{ title: "product_list" }, { title: "RightPanel" }];

export const FashionSevenProductList2Title = [{ title: "left_panel" }, { title: "product_list" }];
export const FashionSevenBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const FashionSevenCollectionBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const SignleProductServicesTitle = [{ title: "left_panel" }, { title: "right_panel" }];

export const FurnitureOneSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "full_banner", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const FurnitureOneOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const FurnitureTwoSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "categories_icon_list", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "grid_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const FurnitureTwoFeatureBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const FurnitureTwoProductListTitle = [{ title: "product_list" }, { title: "right_content" }];
export const FurnitureTwoProductListOfferBannersTitle = [{ title: "Banner1" }, { title: "Banner2" }];
export const FurnitureTwoBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const FurnitureDarkSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "categories_icon_list", icon: <RiRecordCircleLine /> },
  { title: "banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const FurnitureDarkBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const FurnitureDarkProductList2Title = [{ title: "left_panel" }, { title: "product_list" }];

export const ElectronicsOneSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const ElectronicsTwoSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const ElectronicsTwoHomeBannerTitle = [{ title: "main_banner" }, { title: "home_banner1" }, { title: "home_banner2" }];

export const ElectronicsThreeSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "banner", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct2", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const ElectronicThreeBannerTitle = [{ title: "main_banner" }, { title: "GridBanner1" }, { title: "GridBanner2" }, { title: "GridBanner3" }];
export const ElectronicThreeProductList2Title = [{ title: "categories" }, { title: "products" }];
export const ElectronicThreeCollectionBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const MarketplaceOneSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const MarketplaceOneOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }, { title: "Banner4" }];
export const MarketplaceOneProductList2Title = [{ title: "left_panel" }, { title: "right_content" }];

export const MarketplaceThreeSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "categories_products", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const MarketplaceThreeOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const MarketplaceCategoryProductOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];
export const MarketplaceThreeCategoriesAndProductTitle = [{ title: "left_panel" }, { title: "right_content" }];

export const MarketplaceTwoSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "ProductList4", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "ProductList5", icon: <RiRecordCircleLine /> },
  { title: "ProductList6", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner3", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const MarketplaceTwoOfferBanner2Title = [{ title: "Banner1" }, { title: "Banner2" }];
export const MarketplaceTwoOfferBanner1Title = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }, { title: "Banner4" }];

export const MarketplaceFourSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductBanner1", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "ProductBanner2", icon: <RiRecordCircleLine /> },
  { title: "ProductBanner3", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
];
export const MarketplaceFourProductBanner1Title = [{ title: "left_panel" }, { title: "right_content" }];
export const MarketplaceFourProductAndBannerTitle = [{ title: "left_panel" }, { title: "center_panel" }, { title: "right_content" }];

export const VegetableOneSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "full_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const VegetableTwoSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const VegetableThreeSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const VegetableFourSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "ProductList4", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const JwelleryOneSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const JwelleryTwoSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "categories", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "Product&Banner", icon: <RiRecordCircleLine /> },
  { title: "Categories2", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const JwelleryTwoProductBannerTitle = [{ title: "left_panel" }, { title: "center_panel" }, { title: "right_content" }];

export const JwelleryThreeSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "main_banner", icon: <RiRecordCircleLine /> },
  { title: "categories", icon: <RiRecordCircleLine /> },
  { title: "Product&Banner", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const JwelleryThreeOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const BagHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "categories", icon: <RiRecordCircleLine /> },
  { title: "full_banner", icon: <RiRecordCircleLine /> },
  { title: "Product&Banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "grid_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const BagOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const MedicalHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "column_banner_product", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const MedicalColumnBannerProductTitle = [{ title: "OfferBanner1" }, { title: "ProductList1" }, { title: "OfferBanner2" }, { title: "ProductList2" }];

export const PerfumeHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "collection_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const PerfumeOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }, { title: "Banner4" }];
export const PerfumeProductListTitle = [{ title: "product_list" }, { title: "left_panel" }];

export const ParallaxHomePageSettingTitle = [{ title: "parallax_banner", icon: <RiRecordCircleLine /> }];

export const FullHomePageSettingTitle = [{ title: "home_banner", icon: <RiRecordCircleLine /> }];

export const PetsHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "full_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
];

export const YogaHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "ProductList3", icon: <RiRecordCircleLine /> },
  { title: "product_banner", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const YogaOfferBanner1Title = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const YogaOfferBanner2Title = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];
export const YogaProductBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const ChristmasHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner3", icon: <RiRecordCircleLine /> },
  { title: "CategoryProduct2", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const ChristmasOfferBanner1Title = [{ title: "Banner1" }, { title: "Banner2" }];

export const BicycleHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const WatchHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "categories", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
];
export const WatchOfferBanner2Title = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const NurseryHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const VideoHomePageSettingTitle = [{ title: "video", icon: <RiRecordCircleLine /> }];

export const KidsHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "full_banner", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const KidsHomePageOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const BooksHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "Categories1", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "Categories2", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const BooksHomePageOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const GameHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner1", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "OfferBanner2", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "full_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const GameHomePageOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const BeautyHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "about_us", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "product_video", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const MarijuanaHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "details_section", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const MarijuanaOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const GymHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "parallax_product", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];

export const ToolsHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "categories", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const ToolsCategoryProductTitle = [{ title: "left_panel" }, { title: "right_content" }];

export const ShoesHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "Categories1", icon: <RiRecordCircleLine /> },
  { title: "about_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "Categories2", icon: <RiRecordCircleLine /> },
  { title: "slider_products", icon: <RiRecordCircleLine /> },
  { title: "attribute", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const ShoesAboutBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const GogglesHomePageSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "full_banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const GogglesOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const FlowerSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "ProductList1", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const FlowerOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const VideoSliderSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "collection_banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "full_banner", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "services", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const VideoSliderCollectionBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }, { title: "Banner3" }];

export const GradientSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "Categories1", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "coupons", icon: <RiRecordCircleLine /> },
  { title: "parallax_banner", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "social_media", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const GradientParallaxBannerTitle = [{ title: "ParallaxBanner1" }, { title: "ParallaxBanner2" }];

export const SurfingSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "Categories1", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "offer_banner", icon: <RiRecordCircleLine /> },
  { title: "column_banner_product", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
  { title: "brand", icon: <RiRecordCircleLine /> },
];
export const SurfingOfferBannerTitle = [{ title: "Banner1" }, { title: "Banner2" }];

export const DigitalDownloadSettingTitle = [
  { title: "home_banner", icon: <RiRecordCircleLine /> },
  { title: "categories", icon: <RiRecordCircleLine /> },
  { title: "product_list", icon: <RiRecordCircleLine /> },
  { title: "ProductList2", icon: <RiRecordCircleLine /> },
  { title: "category_product", icon: <RiRecordCircleLine /> },
  { title: "featured_blogs", icon: <RiRecordCircleLine /> },
];

export const DigitalDownloadProduct2Title = [{ title: "left_panel" }, { title: "products_list" }];
