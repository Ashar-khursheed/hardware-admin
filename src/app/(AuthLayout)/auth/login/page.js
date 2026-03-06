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
    <div className="box-wrapper w-100">
      <ShowBox showBoxMessage={showBoxMessage} />
      <div className="premium-login-box w-100">
        <div className="log-in-title">
          <Image className="for-white mb-4" src={state?.setDarkLogo?.original_url ? state?.setDarkLogo?.original_url : LogoImg} alt="Light Logo" width={140} height={40} style={{ objectFit: 'contain' }} priority />
          <h4 className="fw-bold">{t("log_in_your_account")}</h4>
          <p className="text-muted">Enter your credentials to securely access your admin dashboard.</p>
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
                    className="form-control form-control-lg"
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
                    className="form-control form-control-lg"
                    id="password"
                    placeholder={t("password")}
                    label={t("password")}
                  />
                  <div className="forgot-box mt-2">
                    <Link href={`/auth/forgot-password`} className="forgot-password">
                      {t("forgot_password")}?
                    </Link>
                  </div>
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

                <Col sm="12" className="mt-4">
                  <Btn
                    title="log_in"
                    className="btn-animation w-100 justify-content-center"
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
    </div>
  );
};

export default Login;
