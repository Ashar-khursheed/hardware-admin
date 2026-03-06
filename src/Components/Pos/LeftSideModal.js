import { sanitizeUrl } from "@/Utils/CustomFunctions/SanitizeUrl";
import Image from 'next/image'
import { Col } from 'reactstrap'
import productImage from '../../../public/assets/images/placeholder.png'

const LeftSideModal = ({ cloneVariation, productData }) => {
    return (
        <Col lg="6">
            <div className="slider-image">
                <Image src={sanitizeUrl(cloneVariation?.selectedVariation?.variation_image || productData?.product_thumbnail || productData?.product_galleries?.[0]) || productImage}
                    className="img-fluid" alt="product" width={369} height={369} />
            </div >
        </Col >
    )
}

export default LeftSideModal