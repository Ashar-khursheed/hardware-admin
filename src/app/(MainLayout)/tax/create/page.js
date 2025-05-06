'use client'
import TaxForm from "@/Components/Tax/TaxForm";
import { tax } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";

const TaxCreate = () => {
  const { mutate, isLoading } = useCreate(tax, false, "/tax");
  return (
    <FormWrapper title="add_tax">
      <TaxForm loading={isLoading} mutate={mutate} buttonName="save" />
    </FormWrapper>
  );
};

export default TaxCreate;
