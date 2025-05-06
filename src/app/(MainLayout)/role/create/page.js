"use client";
import PermissionForm from "@/Components/Role/PermissionForm";
import { role } from "@/Utils/AxiosUtils/API";
import FormWrapper from "@/Utils/HOC/FormWrapper";

import useCreate from "@/Utils/Hooks/useCreate";

const Role = () => {
  const { mutate, isLoading } = useCreate(role, false, `/role`);
  return (
    <FormWrapper title="add_role">
      <PermissionForm mutate={mutate} loading={isLoading} buttonName="save" />
    </FormWrapper>
  );
};

export default Role;
