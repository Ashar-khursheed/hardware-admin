import LanguageContext from "@/Helper/LanguageContext";
import request from "@/Utils/AxiosUtils";
import { AllLanguageApi } from "@/Utils/AxiosUtils/API";
import useOutsideDropdown from "@/Utils/Hooks/CustomHooks/useOutsideDropdown";
import { useQuery } from "@tanstack/react-query";
import i18next from "i18next";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { RiArrowDownSLine, RiTranslate2 } from "react-icons/ri";

const Language = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideDropdown(false);
  const { i18n } = useTranslation("common");
  const currentLanguage = i18n.resolvedLanguage;
  const { setLocalLanguage, setFormLanguage } = useContext(LanguageContext);
  const [selectedLang, setSelectedLang] = useState({ lang: currentLanguage,});
  const router = useRouter();

    // To change Language
    const handleChangeLang = (value) => {
      setSelectedLang(value);
      setLocalLanguage(value.lang);
      setFormLanguage(value.lang);
      i18next.changeLanguage(value.lang);
      Cookies.set("i18next", value.lang);
      window.localStorage.setItem("selectedLanguage", value.lang);
      router.refresh();
    };
  
    const { data } = useQuery(["newLang"], () => request({ url: AllLanguageApi }), {enabled: true,
      refetchOnWindowFocus: false,
      refetchOnMount: false, select: (res) => res.data.data });
  
    const langData = data?.map((item) => ({
      LanuageName: item.name,
      lang: item.locale,
      icon: item.flag,
    }));

  return (
    <li className="profile-nav onhover-dropdown">
      <div className="language-box">
        <RiTranslate2
          onClick={() =>
            setIsComponentVisible((prev) =>
              prev !== "language" ? "language" : ""
            )
          }
        />
        <RiArrowDownSLine className="down-arrow" />
      </div>
      <ul ref={ref} className={`language-dropdown profile-dropdown onhover-show-div ${isComponentVisible == "language" ? "active" : ""}`}>
        {langData?.map((data, i) => {
          if (data.lang === currentLanguage) {
            return null;
          }
          return (
            <li
              key={i}
              onClick={() => handleChangeLang(data)}
              className={`${selectedLang?.lang == data.lang ? "active" : ""}`}
            >
              <a>
                {data.LanuageName}
              </a>
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default Language;
