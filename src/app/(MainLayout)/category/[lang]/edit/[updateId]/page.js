"use client";
import { useRouter } from "next/router";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import dynamic from "next/dynamic";
import { Category, CategoryExportAPI, CategoryImportAPI } from "@/Utils/AxiosUtils/API";
import CategoryForm from "@/Components/category/CategoryForm";
import TreeForm from "@/Components/category/TreeForm";
import usePermissionCheck from "@/Utils/Hooks/usePermissionCheck";
import useCreate from "@/Utils/Hooks/useCreate";
import TittleWithDropDown from "@/Components/Common/TittleWithDropDown";
import { useContext, useEffect } from "react";
import LanguageContext from "@/Helper/LanguageContext";

const CategoryUpdate = ({params}) => {

  const { lang, updateId } = params;
  const { setFormLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (lang) {
      setFormLanguage(lang);
    }
  }, [lang, setFormLanguage]);

  const TableTitle = dynamic(() => import("@/Components/Table/TableTitle"), {
    ssr: false,
  });
  const [edit] = usePermissionCheck(["edit"]);
  const { mutate, isLoading } = useCreate(`${Category}/${updateId}`, false, "/category", false);
  return (
    <>
      <Container fluid={true}>
        <Row>
          <Col xl="4">
            <Card>
              <CardBody>
                <TittleWithDropDown pathName="/category" moduleName="category"   importExport={{ importUrl: CategoryImportAPI, exportUrl: CategoryExportAPI}} />
                <TreeForm type={'product'} isLoading={isLoading} />
              </CardBody>
            </Card>
          </Col>
          <Col xl="8">
            <Card>
              {edit ? <CardBody>
                <TableTitle moduleName="edit_category" onlyTitle={true} lang={lang}/>
                {updateId && (
                  <CategoryForm mutate={mutate} updateId={updateId} loading={isLoading} type={'product'} buttonName="Update" language={lang}/>
                )}
              </CardBody>
                :
                <h1>No Permission</h1>}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CategoryUpdate;