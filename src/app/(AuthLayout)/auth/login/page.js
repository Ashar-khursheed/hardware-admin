"use client";
import { ReactstrapInput } from "@/Components/ReactstrapFormik";
import ShowBox from "@/Elements/Alerts&Modals/ShowBox";
import Btn from "@/Elements/Buttons/Btn";
import SettingContext from "@/Helper/SettingContext";
import LoginBoxWrapper from "@/Utils/HOC/LoginBoxWrapper";
import useHandleLogin from "@/Utils/Hooks/Auth/useLogin";
import { YupObject, emailSchema, nameSchema, recaptchaSchema } from "@/Utils/Validation/ValidationSchemas";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import { useContext, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import LogoImg from "../../../../../public/assets/images/logo.png";
import { useTranslation } from "react-i18next";
import { Col } from "reactstrap";
import Image from "next/image";

const Login = () => {
  const [showBoxMessage, setShowBoxMessage] = useState();
  const { settingObj, state } = useContext(SettingContext);
  const { t } = useTranslation('common');
  const { mutate, isLoading } = useHandleLogin(setShowBoxMessage);
  const reCaptchaRef = useRef();

  return (
    <div className="box-wrapper">
      <ShowBox showBoxMessage={showBoxMessage} />
      <LoginBoxWrapper>
        <div className="log-in-title text-center">
          <Image className="for-white" src={state?.setDarkLogo?.original_url ? state?.setDarkLogo?.original_url : LogoImg} alt="Light Logo" width={140} height={28} priority />
          <h4>{t("log_in_your_account")}</h4>
        </div>
        <div className="input-box">

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
          
          {/* <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={YupObject({
              email: emailSchema,
              password: nameSchema,
              recaptcha: settingObj?.google_reCaptcha?.status ? recaptchaSchema : "",
            })}
            onSubmit={mutate}
            >
            {({ errors, touched, setFieldValue }) => (
              <Form className="row g-4">
                <Col sm="12">
                  <Field inputprops={{ noExtraSpace: true }} autoComplete={true}  name="email" type="email" component={ReactstrapInput} className="form-control" id="email" placeholder={t("email_address")} label={t("email_address")}/>
                </Col>
                <Col sm="12">
                  <Field inputprops={{ noExtraSpace: true }} name="password" component={ReactstrapInput} type="password" className="form-control" id="password" placeholder={t("password")} label={t("password")} />
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
                    {errors.recaptcha && touched.recaptcha && <ErrorMessage name="recaptcha" render={(msg) => <div className="invalid-feedback d-block">{errors.recaptcha}</div>} />}
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
                  <Btn title="log_in" className="btn btn-animation w-100 justify-content-center" type="submit" color="false" loading={Number(isLoading)} />
                  <div className="sign-up-box">
                    <h4>{t("dont_account")}</h4>
                    <Link href={`/auth/register`}>{t('sign_up')}</Link>
                  </div>
                </Col>
              </Form>
            )}
          </Formik> */}
        </div>
      </LoginBoxWrapper>
    </div>
  );
};

export default Login;
