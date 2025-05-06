'use client'
import TaxForm from "@/Components/Tax/TaxForm";
import LanguageContext from "@/Helper/LanguageContext";
import { tax } from "@/Utils/AxiosUtils/API";
import useUpdate from "@/Utils/Hooks/useUpdate";
import { useContext, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Row } from "reactstrap";

const TaxUpdate = ({ params }) => {
  
  const { t } = useTranslation( 'common');
  const { setFormLanguage } = useContext(LanguageContext);

  const { lang, updateId } = params;

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const { mutate, isLoading } = useUpdate(tax, updateId, "/tax");
  return (
    updateId && (
      <Row>
        <Col sm="8" className="m-auto">
          <Card >
            <CardBody>
              <div className="card-header-2">
                <h5>{t("edit_tax")}</h5>
                {lang && <span className="badge title-header-badge">{lang}</span>}
              </div>
              <TaxForm mutate={mutate} updateId={updateId} loading={isLoading} buttonName="Update" language={lang}/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  );
};

export default TaxUpdate;