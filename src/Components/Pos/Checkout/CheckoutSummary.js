import React, { useContext, useEffect } from "react";
import { Card } from "reactstrap";
import SettingContext from "@/Helper/SettingContext";
import PlaceOrder from "./PlaceOrder";
import ApplyCoupon from "../ApplyCoupon";
import PointWallet from "../PointWallet";
import Loader from "@/Components/CommonComponent/Loader";
import { useTranslation } from "react-i18next";

const CheckoutSummary = ({ addToCartData, values, setFieldValue, data, loading, mutate, userData, errorCoupon, appliedCoupon, setAppliedCoupon, storeCoupon, setStoreCoupon }) => {
  const { convertCurrency, statsData } = useContext(SettingContext);
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
    if (values["billing_address_id"]) {
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
    }
  }, [values["billing_address_id"], values["shipping_address_id"], values["payment_method"], values["delivery_description"], values["points_amount"], values["wallet_balance"]]);

  const summaryData = data?.data?.total;

  // prioritize address from Formik values (set in ShowAddress.js)
  const selectedAddress = values["shipping_address"] || values["billing_address"];
  const addressTaxRate = selectedAddress?.state?.tax_rate || selectedAddress?.tax_rate;

  const taxRate = addressTaxRate !== undefined ? Number(addressTaxRate) : (statsData?.tax_rate || 0);
  const subTotal = (summaryData?.sub_total !== undefined && summaryData?.sub_total !== 0) ? summaryData?.sub_total : addToCartData?.total || 0;
  const calculatedTax = (summaryData?.tax_total !== undefined && summaryData?.tax_total !== 0) ? summaryData?.tax_total : (subTotal * taxRate) / 100;
  const totalAmount = (summaryData?.total !== undefined && summaryData?.total !== 0 && summaryData?.tax_total !== 0) ? summaryData?.total : (subTotal + calculatedTax + (summaryData?.shipping_total || 0) - (summaryData?.coupon_total_discount || 0) - (summaryData?.points_amount || 0) - (summaryData?.wallet_balance || 0));

  return (
    <Card className="pos-detail-card">
      <div className="pos-loader">
        {loading && <Loader />}
        <ul className={`summary-total`}>
          <li>
            <h4>{t("subtotal")}</h4>
            <h4 className="price">{convertCurrency(subTotal)}</h4>
          </li>
          <li>
            <h4>{t("shipping")}</h4>
            <h4 className="price">{summaryData?.shipping_total !== undefined ? convertCurrency(summaryData?.shipping_total) : t(`not_calculated_yet`)}</h4>
          </li>
          <li>
            <h4>{t("tax")}</h4>
            <h4 className="price">{convertCurrency(calculatedTax)}</h4>
          </li>

          <PointWallet values={values} setFieldValue={setFieldValue} data={data} />
          {values["consumer_id"] && values["billing_address_id"] && (addToCartData?.is_digital_only || values["shipping_address_id"]) && values["payment_method"] && values["delivery_description"] && <ApplyCoupon errorCoupon={errorCoupon} values={values} setFieldValue={setFieldValue} data={data} storeCoupon={storeCoupon} setStoreCoupon={setStoreCoupon} mutate={mutate} isLoading={loading} appliedCoupon={appliedCoupon} setAppliedCoupon={setAppliedCoupon} />}

          <li className="list-total">
            <h4>{t("total")}</h4>
            <h4 className="price">{convertCurrency(totalAmount)}</h4>
          </li>
        </ul>
      </div>
      <PlaceOrder addToCartData={addToCartData} values={values} />
    </Card>
  );
};

export default CheckoutSummary;
