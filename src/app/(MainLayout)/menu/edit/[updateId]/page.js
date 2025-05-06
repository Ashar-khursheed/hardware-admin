"use client";
import TittleWithDropDown from "@/Components/Common/TittleWithDropDown";
import FrontMenuForm from "@/Components/FrontMenu/FrontMenuForm";
import MenuForm from "@/Components/FrontMenu/MenuForm";
import LanguageContext from "@/Helper/LanguageContext";
import { Menu } from "@/Utils/AxiosUtils/API";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { RiLockLine } from "react-icons/ri";
import { Card, CardBody, Col, Row } from "reactstrap";

const FrontMenuCreate = ({ params }) => {

  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { t } = useTranslation("common");
  const [edit] = usePermissionCheck(["edit"]);
  const { mutate, isLoading } = useUpdate(Menu,updateId,`/menu`,"Menu updated successfully");
  return (
    <>
      <Row>
        <Col xl="4">
          <Card>
            <CardBody>
              <TittleWithDropDown pathName="/menu" moduleName="menu" />
              <FrontMenuForm isLoading={isLoading} />
            </CardBody>
          </Card>
        </Col>
        <Col xl="8">
          <Card>
            <CardBody>
              <div className="title-header option-title">
                <h5>{t("edit_menu")}</h5>
                {lang && <span className="badge title-header-badge">{lang}</span>}
              </div>
              <MenuForm
                updateId={updateId}
                loading={isLoading}
                mutate={mutate}
                language={lang}
              />
            </CardBody>
            <div className="no-permission">
              <div>
                <RiLockLine />
                <h3>{t("permissions_is_required")}</h3>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default FrontMenuCreate;
