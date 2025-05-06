'use client'
import BrandForm from "@/Components/Brand/BrandForm";
import LanguageContext from "@/Helper/LanguageContext";
import { BrandAPI } from "@/Utils/AxiosUtils/API";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Row } from "reactstrap";

const TaxUpdate = ({ params }) => {
  const { t } = useTranslation( 'common');
  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);
  const { mutate, isLoading } = useUpdate(BrandAPI, updateId, "/brand");
  return (
    updateId && (
      <Row>
        <Col sm="8" className="m-auto">
          <Card >
            <CardBody>
              <div className="card-header-2">
                <h5>{t("edit_brand")}</h5>
                {lang && <span className="badge title-header-badge">{lang}</span>}
              </div>
              <BrandForm mutate={mutate} updateId={updateId} loading={isLoading} buttonName="Update" language={lang}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  );
};

export default TaxUpdate;