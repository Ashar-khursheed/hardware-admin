import { RiBankCardLine } from 'react-icons/ri';
import { Input, Label } from 'reactstrap';
import CheckoutCard from './common/CheckoutCard';
import { useTranslation } from "react-i18next";

function PaymentOptions({ values, setFieldValue }) {

    const { t } = useTranslation('common');
    return (
        <CheckoutCard icon={<RiBankCardLine />}>
            <div className="checkout-title">
                <h4>{t("payment_options")}</h4>
            </div>
            <div className="checkout-detail">
                <div className="payment-option-wrapper">
                    {values['consumer_id'] ?
                        <div className="d-flex flex-wrap gap-4 p-3 border rounded bg-light">
                            <div className="payment-radio">
                                <div className="custom-form-check form-check mb-0 d-flex align-items-center">
                                    <Input
                                        className="form-check-input me-2"
                                        type="radio"
                                        name="payment_method"
                                        id="cod"
                                        checked={values['payment_method'] === 'cod'}
                                        onChange={() => setFieldValue('payment_method', "cod")}
                                    />
                                    <Label className="form-check-label mb-0 cursor-pointer" htmlFor="cod">
                                        {t("cash_on_delivery")}
                                    </Label>
                                </div>
                            </div>
                            <div className="payment-radio">
                                <div className="custom-form-check form-check mb-0 d-flex align-items-center">
                                    <Input
                                        className="form-check-input me-2"
                                        type="radio"
                                        name="payment_method"
                                        id="stripe"
                                        checked={values['payment_method'] === 'stripe'}
                                        onChange={() => setFieldValue('payment_method', "stripe")}
                                    />
                                    <Label className="form-check-label mb-0 cursor-pointer" htmlFor="stripe">
                                        {t("stripe")}
                                    </Label>
                                </div>
                            </div>
                        </div>
                        : <div className="empty-box w-100 p-3 text-center border rounded">
                            <h5 className="text-muted mb-0">{t("no_payment_options_found")}</h5>
                        </div>
                    }
                </div>
            </div>
        </CheckoutCard >
    )
}

export default PaymentOptions