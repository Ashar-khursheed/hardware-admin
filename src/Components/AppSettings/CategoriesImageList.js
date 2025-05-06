
import { useTranslation } from "react-i18next";
import CheckBoxField from '../InputFields/CheckBoxField';
import MultiSelectField from '../InputFields/MultiSelectField';
import SimpleInputField from '../InputFields/SimpleInputField';

const CategoriesImageList = ({ values, setFieldValue, categoryData }) => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[{ name: `[values][categories_list][title]`, placeholder: t("enter_title"), title: "title" },]} />
            <MultiSelectField values={values} setFieldValue={setFieldValue} name='categoryIconList' title="categories" data={categoryData} />
            <CheckBoxField name={`[values][categories_list][status]`} title="status" />
        </>
    )
}

export default CategoriesImageList