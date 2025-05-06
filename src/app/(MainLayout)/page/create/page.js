"use client"
import FormWrapper from '@/Utils/HOC/FormWrapper';
import PageForm from '@/Components/Pages/PageForm';
import useCreate from '@/Utils/Hooks/useCreate';
import { PagesAPI } from '@/Utils/AxiosUtils/API'

const CreatePage = () => {
    const { mutate, isLoading } = useCreate(PagesAPI, false, "/page");
    return (
        <FormWrapper title="create_page">
            <PageForm mutate={mutate} loading={isLoading} buttonName="save" />
        </FormWrapper>
    )
}

export default CreatePage
