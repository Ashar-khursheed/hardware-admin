'use client'
import ZoneForm from "@/Components/Zone/ZoneForm";
import { ZoneApi } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";
import useCreate from "@/Utils/Hooks/useCreate";
import React from "react";

const ZoneCreate = () => {
  const { mutate, isLoading } = useCreate(ZoneApi, false, "/zone");
  return (
    <FormWrapper title="add_zone">
      <ZoneForm mutate={mutate} loading={isLoading} buttonName="save" />
    </FormWrapper>
  );
};
export default ZoneCreate;
