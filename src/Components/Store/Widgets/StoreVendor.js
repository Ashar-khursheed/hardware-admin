import { useTranslation } from "react-i18next";
import { AllCountryCode } from '@/Data/AllCountryCode';
import SearchableSelectInput from '../../InputFields/SearchableSelectInput';
import SimpleInputField from '../../InputFields/SimpleInputField';

const StoreVendor = () => {
    
    const { t } = useTranslation( 'common');
    return (
        <>
            <SimpleInputField nameList={[{ name: "name", placeholder: t("enter_name"), require: "true" }, { name: "email", placeholder: t("enter_email"), title: "email_address", require: "true" }]} />
            <div className='country-input mb-4'>
                <SimpleInputField nameList={[{ name: "phone", title: "phone", placeholder: t("enter_phone"), require: "true", type: 'number' }]} />

                <SearchableSelectInput
                    nameList={[
                        {

                            name: "country_code",
                            notitle: "true",
                            inputprops: {
                                name: "country_code",
                                id: "country_code",
                                options: AllCountryCode,
                            },
                        },
                    ]}
                />
            </div>
        </>
    )
}

export default StoreVendor