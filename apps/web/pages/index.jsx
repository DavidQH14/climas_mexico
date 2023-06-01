import React, { useEffect } from "react";

import Navigation from '../partials/Navigation';
import Cover from '../sections/Cover';
import Products from '../sections/Products';
import HowItWorks from '../sections/HowItWorks';
import Faqs from '../sections/Faqs';
import Contact from '../sections/Contact';
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

    const page_content = await Client.fetch(
        `
            *[_type == "page" ][0]{
                content
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
            page_content,
            extra_info
        }
    }
}

const Index = ({ page_settings, page_content, extra_info }) => {

    const { content } = page_content;

    const { pathname, asPath } = useRouter();

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

        if (asPath !== '/') {
            let ContactSection = document.querySelector('.block.contact');

            ContactSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    })

    return (
        <Template title={page_settings.title} description={page_settings.metadescription} keywords={page_settings.keywords} >
            <Navigation pathname={pathname} />
            <Cover cover={content[0]} />
            <Products products={content[1]} />
            <HowItWorks how_it_works={content[2]} />
            <Faqs faqs={content[3]} />
            <Contact contact={content[4]} />
            <Footer footer={extra_info} />
        </Template>
    );
}

export default Index;