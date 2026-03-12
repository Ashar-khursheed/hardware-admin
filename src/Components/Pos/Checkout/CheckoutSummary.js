import React, { useContext, useEffect } from "react";
import { Card } from "reactstrap";
import SettingContext from "@/Helper/SettingContext";
import PlaceOrder from "./PlaceOrder";
import ApplyCoupon from "../ApplyCoupon";
import PointWallet from "../PointWallet";
import Loader from "@/Components/CommonComponent/Loader";
import { useTranslation } from "react-i18next";

const CheckoutSidebar = ({ addToCartData, values, setFieldValue, data, loading, mutate, userData, errorCoupon, appliedCoupon, setAppliedCoupon, storeCoupon, setStoreCoupon }) => {
  const { convertCurrency } = useContext(SettingContext);
  const { t } = useTranslation("common");

  // Checking point and wallet for particular user
  useEffect(() => {
    userData?.filter((elem) => {
      if (elem.id == values["consumer_id"]) {
        if (elem?.point) {
          setFieldValue("isPoint", elem?.point);
        } else {
          setFieldValue("isPoint", "");
        }
        if (elem?.wallet) {
          setFieldValue("isWallet", elem?.wallet);
        } else {
          setFieldValue("isWallet", "");
        }
      }
    });
  }, [values["consumer_id"]]);

  // Submitting data on Checkout
  useEffect(() => {
    if (values["billing_address_id"] && (addToCartData?.is_digital_only || values["shipping_address_id"])) {
      values["variation_id"] = "";

      const targetObject = {
        ...values,
        coupon: values["coupon"] || "",
        billing_address_id: values["billing_address_id"],
        shipping_address_id: values["shipping_address_id"] || values["billing_address_id"],
        billing_address: values["billing_address"] || {},
        shipping_address: values["shipping_address"] || values["billing_address"] || {},
        delivery_description: values["delivery_description"] || "standard",
        delivery_interval: values["delivery_interval"] || "",
        points_amount: values["points_amount"] || 0,
        payment_method: values["payment_method"] || "cod",
        products: values["products"],
        wallet_balance: values["wallet_balance"] || 0,
      };

      mutate(targetObject);
      if (loading) {
        setStoreCoupon("");
        setFieldValue("coupon", "");
      }
    }
  }, [values["billing_address_id"], values["shipping_address_id"], values["payment_method"], values["delivery_description"], values["points_amount"], values["wallet_balance"]]);
  return (
    <Card className="pos-detail-card">
      <div className="pos-loader">
        {loading && <Loader />}
        <ul className={`summary-total`}>
          <li>
            <h4>{t("subtotal")}</h4>
            <h4 className="price">{typeof data?.data?.total?.sub_total !== "undefined" ? convertCurrency(data?.data?.total?.sub_total) : addToCartData?.total?.sub_total ? convertCurrency(addToCartData?.total?.sub_total) : t(`not_calculated_yet`)}</h4>
          </li>
          <li>
            <h4>{t("shipping")}</h4>
            <h4 className="price">{typeof data?.data?.total?.shipping_total !== "undefined" ? convertCurrency(data?.data?.total?.shipping_total) : t(`not_calculated_yet`)}</h4>
          </li>
          <li>
            <h4>{t("tax")}</h4>
            <h4 className="price">{typeof data?.data?.total?.tax_total !== "undefined" ? convertCurrency(data?.data?.total?.tax_total) : t(`not_calculated_yet`)}</h4>
          </li>

          <PointWallet values={values} setFieldValue={setFieldValue} data={data} />
          {values["consumer_id"] && values["billing_address_id"] && (addToCartData?.is_digital_only || values["shipping_address_id"]) && values["payment_method"] && values["delivery_description"] && <ApplyCoupon errorCoupon={errorCoupon} values={values} setFieldValue={setFieldValue} data={data} storeCoupon={storeCoupon} setStoreCoupon={setStoreCoupon} mutate={mutate} isLoading={loading} appliedCoupon={appliedCoupon} setAppliedCoupon={setAppliedCoupon} />}

          <li className="list-total">
            <h4>{t("total")}</h4>
            <h4 className="price">{typeof data?.data?.total?.total !== "undefined" ? convertCurrency(data?.data?.total?.total) : addToCartData?.total?.total ? convertCurrency(addToCartData?.total?.total) : t(`not_calculated_yet`)}</h4>
          </li>
        </ul>
      </div>
      <PlaceOrder addToCartData={addToCartData} values={values} />
    </Card>
  );
};

export default CheckoutSidebar;
