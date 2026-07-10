import SettingContext from "@/Helper/SettingContext";
import LanguageContext from "@/Helper/LanguageContext";
import { fallbackLng } from "@/app/i18n/settings";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { RiEyeLine, RiPencilLine,RiEarthFill } from "react-icons/ri";
import NoSsr from "../../Utils/HOC/NoSsr";
import usePermissionCheck from "../../Utils/Hooks/usePermissionCheck";
import AnswerModal from "../Q&A/Widgets/AnswerModal";
import DeleteButton from "./DeleteButton";
import ProductDownload from "./ProductDownload";
import ViewDetails from "./ViewDetails";

const Options = ({ fullObj, mutate, type, moduleName, optionPermission, refetch, keyInPermission, extraActions,language, lang }) => {
  const pathname = usePathname();
  const [modal, setModal] = useState(false);
  const { settingObj } = useContext(SettingContext);
  const { localLanguage } = useContext(LanguageContext);
  const editLocale = lang || settingObj?.general?.default_language?.locale || localLanguage || fallbackLng;
  const [edit, destroy] = usePermissionCheck(["edit", "destroy"], keyInPermission ?? keyInPermission);
  return (
    <div className="custom-ul">
      <NoSsr>
        {optionPermission?.optionHead?.type == "View" ? (
          <ViewDetails fullObj={fullObj} tableData={optionPermission?.optionHead} refetch={refetch} />
        ) : (
          <>
            <div>
              {keyInPermission == "question_and_answer" && edit ? (
                <a onClick={() => setModal(true)}>
                  <RiPencilLine className="pencil" />
                </a>
              ) : (
                edit &&
                fullObj?.id &&
                !optionPermission?.noEdit && (
                  <>
                  {optionPermission?.editRedirect ? (
                      <Link href={`/${optionPermission?.editRedirect}/${editLocale}/edit/${fullObj.id}`}>
                        <RiPencilLine />
                      </Link>
                  ) : type === "post" && ['tag', 'blog/tag'].includes(moduleName?.toLowerCase()) ? (
                      <Link href={`/${pathname.split("/")[1]}/tag/${editLocale}/edit/${fullObj.id}`}>
                        <RiPencilLine />
                      </Link>
                  ) : type === "post" ? (
                      <Link href={`/${pathname.split("/")[1]}/category/${editLocale}/edit/${fullObj.id}`}>
                        <RiPencilLine />
                      </Link>
                  ) : (
                      <Link href={`/${pathname.split("/")[1]}/${editLocale}/edit/${fullObj.id}`}>
                        <RiPencilLine />
                      </Link>
                  )}
                </>
                )
              )}
            </div>
            <div>{destroy && !optionPermission?.noDelete && <DeleteButton id={fullObj?.id} mutate={mutate} />}</div>
            {optionPermission?.optionHead.show && (
              <div>
                <a href={`${settingObj?.general?.site_url}/${optionPermission?.optionHead.show}/${fullObj?.slug}`} target="_blank" rel="noreferrer">
                  <RiEyeLine className="ri-pencil-line" />
                </a>
              </div>
            )}
            <div>{fullObj?.product_type == "digital" &&  optionPermission?.optionHead.type == "download" ? <ProductDownload fullObj={fullObj} tableData={optionPermission?.optionHead} /> : " "}</div>
            <div>
              {language && (
                <Link href={"/language/translate/" + fullObj.locale}>
                  <RiEarthFill />
                </Link>
              )}
            </div>
            <div>
              {extraActions?.length &&
                extraActions?.map((item) => {
                  return (
                    <div>
                      <a
                        onClick={() => {
                          item?.func();
                        }}
                      >
                        {item?.logo}
                      </a>
                    </div>
                  );
                })}
            </div>
          </>
        )}
        {modal && <AnswerModal refetch={refetch} fullObj={fullObj} modal={modal} setModal={setModal} />}
      </NoSsr>
    </div>
  );
};

export default Options;
