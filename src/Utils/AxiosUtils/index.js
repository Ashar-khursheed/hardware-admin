import axios from "axios";
import Cookies from "js-cookie";
import { fallbackLng } from "@/app/i18n/settings";

const client = axios.create({
  baseURL: process.env.API_PROD_URL,
  headers: {
    Accept: "application/json",
  },
});

client.interceptors.request.use((config) => {
  const { localLanguage, formLanguage } = JSON.parse(
    window.localStorage.getItem("languageContext") || "{}"
  );

  // Determine the appropriate accept-language
  const isTranslateEndpoint = config.url?.includes(`/translation/admin`);
  const acceptLanguage =
    formLanguage && !isTranslateEndpoint
      ? formLanguage
      : localLanguage || fallbackLng;

  config.headers["accept-lang"] = acceptLanguage;

  // Set Authorization token
  const token = Cookies.get("uat_multikart");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const request = async ({ ...options }, router,headerOption) => {
  const onSuccess = (response) => response;
  const onError = (error) => {
    if (error?.response?.status == 401) {
      Cookies.remove("uat_multikart");
      Cookies.remove("ue_multikart");
      Cookies.remove("account_multikart");
      localStorage.clear();
      router && router.push("/auth/login");
    }
    return error;
  };
  try {
    if (headerOption) {
      options.headers = { ...options.headers, ...headerOption };
    }
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default request;
