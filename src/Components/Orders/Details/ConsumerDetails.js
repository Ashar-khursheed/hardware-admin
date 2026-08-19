import { Card, CardBody } from 'reactstrap';
import { useTranslation } from "react-i18next";

const ConsumerDetails = ({ data }) => {

    const { t } = useTranslation('common');
    return (
        <Card>
            <CardBody>
                <div className="title-header" >
                    <div className="d-flex align-items-center">
                        <h5>{t("consumer_details")}</h5>
                    </div>
                </div>
                <div className="customer-detail tracking-wrapper">
                    <ul>
                        <li>
                            <label>{t("name")}:</label>
                            <h4>{data?.consumer?.name}</h4>
                        </li>
                        <li>
                            <label>{t("email_address")}:</label>
                            <h4>{data?.consumer?.email}</h4>
                        </li>
                        <li>
                            <label>{t("billing_address")}:</label>
                            <h4>
                                {data?.billing_address?.street}
                                {data?.billing_address?.city} {data?.billing_address?.state?.name} {
                                    data?.billing_address?.country?.name}
                                {data?.billing_address?.pincode} <br />
                                {t("phone")} : {data?.billing_address?.phone}
                            </h4>
                        </li>
                        {!data?.is_digital_only &&
                            <li>
                                <label>{t("shipping_address")}:</label>
                                <h4>
                                    {data?.shipping_address?.street}
                                    {data?.shipping_address?.city} {data?.shipping_address?.state?.name} {
                                        data?.shipping_address?.country?.name}
                                    {data?.shipping_address?.pincode} <br />
                                    {t("phone")} :  {data?.shipping_address?.phone}
                                </h4>
                            </li>
                        }
                        {!data?.is_digital_only && (
                            <>
                                <li>
                                    <label>{t("Shipping Method")}:</label>
                                    <h4>{data?.delivery_description || 'Standard Shipping'}</h4>
                                </li>
                                <li>
                                    <label>{t("Shipping Cost")}:</label>
                                    <h4>{data?.shipping_total ? `$${Number(data.shipping_total).toFixed(2)}` : '$0.00'}</h4>
                                </li>
                            </>
                        )}

                        <li>
                            <label>{t("Payment Mode")}:</label>
                            <h4>{data?.payment_method?.toUpperCase()}</h4>
                        </li>
                    </ul>
                </div>
            </CardBody>
        </Card >
    )
}

export default ConsumerDetails