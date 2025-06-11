'use client'
import { RegistrationInitialValues, RegistrationValidationSchema } from "@/Components/Auth/RegistrationFormObjects";
import UserAddress from "@/Components/Auth/UserAddress";
import UserContact from "@/Components/Auth/UserContact";
import UserPersonalInfo from "@/Components/Auth/UserPersonalInfo";
import Btn from "@/Elements/Buttons/Btn";
import SettingContext from "@/Helper/SettingContext";
import { state, store } from "@/Utils/AxiosUtils/API";
import useCreate from "@/Utils/Hooks/useCreate";
import { YupObject } from "@/Utils/Validation/ValidationSchemas";
import { Form, Formik } from "formik";
import Image from "next/image";
import LogoImg from "../../../../public/assets/images/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";

const VendorRegister = () => {
    const { state } = useContext(SettingContext)
    const { t } = useTranslation('common');
    const { mutate, isLoading } = useCreate(store, false, `/auth/login`);
    return (
        <section className='log-in-section section-b-space'>
            <Container className='w-100'>
                <Row>
                    <Col xl={7} className="mx-auto">
                        <div className="log-in-box">
                            <div className="log-in-title text-center">
                                <Image className="for-white" src={state?.setDarkLogo?.original_url ? state?.setDarkLogo?.original_url : LogoImg} alt="Light Logo" width={140} height={28} priority />
                                <h4>{t("setup_your_store_information")}</h4>
                            </div>
                            <div className="input-box">
                                {/* <Formik
                                    initialValues={RegistrationInitialValues}
                                    validationSchema={YupObject({
                                        ...RegistrationValidationSchema,
                                    })}
                                    onSubmit={(values) => {
                                        values["status"] = 1;
                                        mutate(values);
                                    }}
                                >
                                    {({ values, errors }) => (
                                        <Form className="row g-4">
                                            <UserPersonalInfo />
                                            <UserAddress values={values} />
                                            <UserContact />
                                            <Col xs={12}>
                                                <Btn title="submit" className="btn-lg btn-theme justify-content-center w-100" type="submit" color="false" loading={Number(isLoading)} />
                                                <div className="sign-up-box">
                                                    <h4>{t("already_have_account")}</h4>
                                                    <Link href={`/auth/login`}>{t("log_in")}</Link>
                                                </div>
                                            </Col>
                                        </Form>
                                    )}
                                </Formik> */}
                                <Formik
                                    initialValues={{
                                        email: "",
                                        password: "",
                                    }}
                                    validationSchema={YupObject({
                                        email: emailSchema,
                                        password: nameSchema,
                                        recaptcha: settingObj?.google_reCaptcha?.status ? recaptchaSchema : "",
                                    })}
                                    onSubmit={(values, actions) => {
                                        mutate(values, {
                                        onSuccess: () => {
                                            window.location.reload(); // ✅ Reload after successful login
                                        },
                                        onError: (error) => {
                                            setShowBoxMessage({
                                            type: "danger",
                                            message: error?.message || "Login failed",
                                            });
                                            actions.setSubmitting(false);
                                        },
                                        });
                                    }}
                                    >
                                    {({ errors, touched, setFieldValue }) => (
                                        <Form className="row g-4">
                                        <Col sm="12">
                                            <Field
                                            inputprops={{ noExtraSpace: true }}
                                            autoComplete="email"
                                            name="email"
                                            type="email"
                                            component={ReactstrapInput}
                                            className="form-control"
                                            id="email"
                                            placeholder={t("email_address")}
                                            label={t("email_address")}
                                            />
                                        </Col>
                                        <Col sm="12">
                                            <Field
                                            inputprops={{ noExtraSpace: true }}
                                            name="password"
                                            type="password"
                                            component={ReactstrapInput}
                                            className="form-control"
                                            id="password"
                                            placeholder={t("password")}
                                            label={t("password")}
                                            />
                                        </Col>

                                        {settingObj?.google_reCaptcha?.status && (
                                            <Col sm="12">
                                            <ReCAPTCHA
                                                ref={reCaptchaRef}
                                                sitekey={settingObj?.google_reCaptcha?.site_key}
                                                onChange={(value) => {
                                                setFieldValue("recaptcha", value);
                                                }}
                                            />
                                            {errors.recaptcha && touched.recaptcha && (
                                                <ErrorMessage
                                                name="recaptcha"
                                                render={(msg) => (
                                                    <div className="invalid-feedback d-block">{msg}</div>
                                                )}
                                                />
                                            )}
                                            </Col>
                                        )}

                                        <Col sm="12">
                                            <div className="forgot-box">
                                            <Link href={`/auth/forgot-password`} className="forgot-password">
                                                {t("forgot_password")}?
                                            </Link>
                                            </div>
                                        </Col>
                                        <Col sm="12">
                                            <Btn
                                            title="log_in"
                                            className="btn btn-animation w-100 justify-content-center"
                                            type="submit"
                                            color="false"
                                            loading={Number(isLoading)}
                                            />
                                            <div className="sign-up-box">
                                            <h4>{t("dont_account")}</h4>
                                            <Link href={`/auth/register`}>{t("sign_up")}</Link>
                                            </div>
                                        </Col>
                                        </Form>
                                    )}
                                    </Formik>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
export default VendorRegister;
