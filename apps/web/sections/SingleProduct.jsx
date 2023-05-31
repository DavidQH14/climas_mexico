import React, { useState, useEffect } from 'react'

import Client from "../libs/Client";
import { buildImages } from '../libs/helpers'
import SanityBlockContent from '@sanity/block-content-to-react';

const SingleProduct = ({ product_id }) => {

    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(() => {
        Client
            .fetch(`*[_id == "${product_id}"]{
                ...
            }`)
            .then((data) => setSingleProduct(data[0]))
            .catch(console.error)
    }, [product_id]);

    if (!singleProduct) return <div className="text-loading"></div>

    return (
        <a href={singleProduct.slug.current} className='product text-inview'>
            <div className="image-wrapper">
                <div className="image">
                    <img
                        src={buildImages(singleProduct.image_preview?.asset._ref).url()}
                        alt={singleProduct.text1}
                    />
                </div>
                <div className="product-title">{singleProduct.text1}</div>
            </div>
            <div className="text-wrapper">
                <div className="product-desc">
                    <SanityBlockContent blocks={singleProduct.text3} />
                </div>
                <div className="see-more">Conoce más</div>
            </div>
        </a>
    );
}

export default SingleProduct;