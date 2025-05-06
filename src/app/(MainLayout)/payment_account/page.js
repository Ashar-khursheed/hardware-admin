'use client'

import PaymentDetailsForm from "@/Components/PaymentDetails"
import FormWrapper from "@/Utils/HOC/FormWrapper"

const PaymentDetails = () => {
    return (
        <FormWrapper title="payment_details">
            <PaymentDetailsForm />
        </FormWrapper>
    )
}
export default PaymentDetails