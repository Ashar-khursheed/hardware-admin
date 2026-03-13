import { sanitizeUrl } from "@/Utils/CustomFunctions/SanitizeUrl";
import SettingContext from '@/Helper/SettingContext';
import Image from 'next/image';
import { useContext } from 'react';
import { CardBody } from 'reactstrap';
import placeHolderImage from "../../../../public/assets/images/placeholder.png";
import { useTranslation } from "react-i18next";
import IncDec from '../IncDec';
import useDelete from '@/Utils/Hooks/useDelete';
import useCreate from '@/Utils/Hooks/useCreate';
import { AddtoCartAPI } from '@/Utils/AxiosUtils/API';

const SidebarCheckoutCard = ({ values, setFieldValue }) => {

    const { t } = useTranslation('common');
    const { convertCurrency } = useContext(SettingContext)
    const { mutate: deleteMutate } = useDelete(AddtoCartAPI);
    const { mutate: addToCart } = useCreate(AddtoCartAPI, false, false, "No");
    return (
        <CardBody>
            <div className="title-header">
                <h5 className="fw-bold">{t("checkout")}</h5>
            </div>
            <div className="product-details">
                <>
                    <ul className="cart-listing">
                        {values['products']?.map((item, i) => (
                            <li key={i}>
                                <div className='checkout-product-list-box'>
                                    <Image src={item?.variation && item?.variation?.variation_image ? (sanitizeUrl(item?.variation?.variation_image, 'product') || placeHolderImage)
                                        : item?.product?.product_thumbnail ? (sanitizeUrl(item?.product?.product_thumbnail, 'product') || placeHolderImage)
                                            : (sanitizeUrl(item?.product?.thumbnail, 'product') || placeHolderImage)} className="img-fluid" alt={item?.product?.name || ''} width={70} height={70} />
                                    <div className="cart-content">
                                        <h4>{item?.variation ? item?.variation?.name : item?.product?.name}</h4>
                                        <h5 className='text-theme'>
                                            {item?.variation ? convertCurrency(item?.variation.sale_price) : item?.product && item?.wholesale_price ? convertCurrency(item?.wholesale_price) : convertCurrency(item?.product?.sale_price)}
                                        </h5>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h5 className='price'>{convertCurrency((item?.variation ? item?.variation.sale_price : item?.product?.sale_price) * (item.quantity))}</h5>
                                            <IncDec item={item} values={values} setFieldValue={setFieldValue} deleteMutate={deleteMutate} addToCart={addToCart} />
                                        </div>
                                    </div>
                                </div >
                            </li >
                        ))}
                    </ul >
                </>
            </div >
        </CardBody >
    )
}

export default SidebarCheckoutCard