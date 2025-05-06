"use client"

import AccountForm from "@/Components/Account"
import FormWrapper from "@/Utils/HOC/FormWrapper"

const Account = () => {
    return (
        <FormWrapper title="my_account">
            <AccountForm />
        </FormWrapper>
    )
}

export default Account