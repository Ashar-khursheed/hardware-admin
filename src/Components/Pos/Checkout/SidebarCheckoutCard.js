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
                    <ul className="cart-listing summary-cart-listing">
                        {values['products']?.map((item, i) => (
                            <li key={i}>
                                <div className='checkout-product-list-box'>
                                    <Image src={sanitizeUrl(item?.variation?.variation_image || item?.product?.product_thumbnail || item?.product?.product_galleries?.[0] || item?.product?.thumbnail || item?.variation?.variation_image?.original_url || item?.product?.thumbnail?.original_url || item?.product_thumbnail, 'product') || placeHolderImage} className="img-fluid" alt={item?.product?.name || ''} width={70} height={70} />
                                    <div className="cart-content w-100">
                                        <div className="d-flex justify-content-between align-items-start gap-2">
                                            <h4 className="flex-grow-1 text-truncate" style={{ maxWidth: '140px' }}>{item?.variation ? item?.variation?.name : item?.product?.name}</h4>
                                            <h5 className='text-theme text-nowrap'>
                                                {item?.variation ? convertCurrency(item?.variation.sale_price) : item?.product && item?.wholesale_price ? convertCurrency(item?.wholesale_price) : convertCurrency(item?.product?.sale_price)}
                                            </h5>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-end mt-2">
                                            <h5 className='price mb-0'>{convertCurrency((item?.variation ? item?.variation.sale_price : item?.product?.sale_price) * (item.quantity))}</h5>
                                            <div className="checkout-qty-control">
                                                <IncDec item={item} values={values} setFieldValue={setFieldValue} deleteMutate={deleteMutate} addToCart={addToCart} />
                                            </div>
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