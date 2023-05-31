import React from 'react'

import SingleProduct from './SingleProduct';

const Products = ({ products }) => {
    return (
        <section className="block products" id='productos'>
            <div className="holder">
                <div className="content">
                    {
                        products.categories.map((product, index) => (
                            <div className="category" key={index}>
                                <div className="category-header">
                                    <div className="category-title text-inview">{product.text1}</div>
                                    <div className="category-desc text-inview">{product.text2}</div>
                                </div>
                                <div className="category-content">
                                    <div className="flex-content">
                                        {
                                            product.all_products.map((sinle_product, index) => (
                                                <SingleProduct
                                                    product_id={sinle_product._ref}
                                                    key={index}
                                                />
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    <a href="#" target="_blank" rel="noopener noreferrer" className='download text-inview'>Descarga nuestro catálogo completo</a>
                </div>
            </div>
        </section>
    );
}

export default Products;