import React, { useEffect } from "react";

import Navigation from '../partials/Navigation';
import ProductsSections from '../sections/ProductsSections';
import Footer from '../partials/Footer';

import Client from "../libs/Client";
import Template from '../template/Template'

import { useRouter } from "next/router";

export async function getServerSideProps(){

    const page_settings = await Client.fetch(
        `
            *[_type == "page_settings" ][0]{
                ...
            }
        `
    )

    const extra_info = await Client.fetch(
        `
            *[_type == "extra_info" ][0]{
                ...
            }
        `
    )

    return{
        props: {
            page_settings,
            extra_info
        }
    }
}

const Products = ({ page_settings, extra_info }) => {

    const { pathname } = useRouter();

    const setInview = (event) => {

        let allTextInview = document.querySelectorAll('.text-inview'),
            allImageInview = document.querySelectorAll('.image-inview');

            if (allTextInview) {
                allTextInview.forEach(textInview => {
                    let textRect = textInview.getBoundingClientRect();
                    if (textRect.top < (window.innerHeight/1.1)) {
                        textInview.classList.add('viewed');
                    }
                })
            }
            
            if (allImageInview) {
                allImageInview.forEach(imageInview => {
                    let imageRect = imageInview.getBoundingClientRect();
                    if (imageRect.top < (window.innerHeight/1.3)) {
                        imageInview.classList.add('viewed');
                    }
                })
            }
    }

    useEffect(() => {
        window.addEventListener('scroll', setInview)
    })

    return (
        <Template title={page_settings.title} description={page_settings.metadescription} keywords={page_settings.keywords} >
            <Navigation pathname={pathname} />
            <ProductsSections/>
            <Footer footer={extra_info} pathname={pathname} />
        </Template>
    );
}

export default Products;