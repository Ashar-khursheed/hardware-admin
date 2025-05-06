import { Form, Formik } from 'formik';
import { useTranslation } from "react-i18next";
import Btn from '../../Elements/Buttons/Btn';
import { updateProfilePassword } from '../../Utils/AxiosUtils/API';
import useCreate from '../../Utils/Hooks/useCreate';
import { YupObject, nameSchema, passwordConfirmationSchema, passwordSchema } from '../../Utils/Validation/ValidationSchemas';
import SimpleInputField from '../InputFields/SimpleInputField';

const ProfilePasswordTab = () => {
    
    const { t } = useTranslation( 'common');
    const { mutate, isLoading } = useCreate(updateProfilePassword, false, "/account");
    return (
        <Formik
            enableReinitialize
            initialValues={{
                current_password: "",
                password: "",
                password_confirmation: ""
            }}
            validationSchema={YupObject({
                current_password: nameSchema,
                password: passwordSchema,
                password_confirmation: passwordConfirmationSchema
            })}
            onSubmit={(values) => {
                values["_method"] = "put";
                mutate(values);
            }}>
            {({ values, setFieldValue }) => (
                <Form className="theme-form theme-form-2 mega-form">
                    <SimpleInputField nameList={[{ name: 'current_password', title: 'current_password', placeholder: t('enter_current_password'), require: "true",type:'password' }, { name: 'password', title: 'password', require: "true", placeholder: t("enter_new_password"),type:'password' }, { name: 'password_confirmation', title: 'confirm_password', require: "true", placeholder: t("enter_confirm_password"),type:'password' }]} />
                    <Btn className="btn btn-theme ms-auto mt-4" type="submit" title="save" loading={Number(isLoading)} />
                </Form>
            )}
        </Formik>
    )
}

export default ProfilePasswordTab