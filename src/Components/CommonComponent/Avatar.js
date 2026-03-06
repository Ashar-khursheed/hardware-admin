"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { sanitizeUrl } from "@/Utils/CustomFunctions/SanitizeUrl";
import placeholderImg from "../../../public/assets/images/placeholder.png";

const Avatar = ({ data, placeHolder, name, customeClass, height, width, noPrevClass, NameWithRound, imageClass }) => {
    const [imgError, setImgError] = useState(false);
    const fallback = placeHolder || placeholderImg;
    const src = !imgError && (data || placeHolder) ? sanitizeUrl(data || placeHolder, 'product') : fallback;

    return (
        <>
            {data || placeHolder ? (
                <div className={`${!noPrevClass ? 'user-profile' : ""} ${customeClass ? customeClass : ""}`}>
                    <Image
                        src={src}
                        className={`${customeClass ? customeClass : ""} ${imageClass ? imageClass : ""}`}
                        height={height || 50}
                        width={width || 50}
                        alt={name?.name || ""}
                        onError={() => setImgError(true)}
                    />
                </div>
            ) : NameWithRound ? (
                <div className='user-round'>
                    <h4>{name?.name?.charAt(0).toString().toUpperCase()}</h4>
                </div>
            ) : (
                <h4>{name?.name?.charAt(0).toString().toUpperCase()}</h4>
            )}
        </>
    );
};

export default Avatar;