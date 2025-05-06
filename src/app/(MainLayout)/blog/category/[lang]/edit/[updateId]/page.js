'use client'
import TittleWithDropDown from '@/Components/Common/TittleWithDropDown';
import CategoryForm from '@/Components/category/CategoryForm';
import TreeForm from '@/Components/category/TreeForm';
import LanguageContext from '@/Helper/LanguageContext';
import { Category } from '@/Utils/AxiosUtils/API';
import useCreate from '@/Utils/Hooks/useCreate';
import usePermissionCheck from '@/Utils/Hooks/usePermissionCheck';
import dynamic from 'next/dynamic';
import { useContext, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Card, CardBody, Col, Container, Row } from 'reactstrap';

const UpdateBlogCategory = ({ params }) => {
    const TableTitle = dynamic(() => import("@/Components/Table/TableTitle"), { ssr: false, });
    const [edit] = usePermissionCheck(["edit"], "category");
    const { t } = useTranslation('common');

    const { setFormLanguage } = useContext(LanguageContext);

    const { lang, updateId } = params;

    useEffect(() => {
        if (lang) {
        setFormLanguage(lang);
        }
    }, [lang, setFormLanguage]);

    const { mutate, isLoading } = useCreate(`${Category}/${updateId}`, false, "/blog/category", false);
    return (
        <>
            <Row>
                <Col xl="4">
                    <Card>
                        <CardBody>
                            <TittleWithDropDown pathName="/blog/category" moduleName="category" />
                            <TreeForm type={'post'} isLoading={isLoading} />
                        </CardBody>
                    </Card>
                </Col>
                <Col xl="8">
                    <Card>
                        {edit ? <CardBody>
                            {updateId && (
                                <>
                                    <TableTitle moduleName="edit_category" onlyTitle={true} />
                                    <CategoryForm mutate={mutate} updateId={updateId} loading={isLoading} type={'post'} buttonName="Update" language={lang}/>
                                </>
                            )}
                        </CardBody>
                            : <h1>{t("permissions_is_required")}</h1>}
                    </Card>
                </Col>
            </Row>
        </>
    );
}
export default UpdateBlogCategory