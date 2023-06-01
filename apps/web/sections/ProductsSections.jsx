import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Client from "../libs/Client";

import SectionOne from './SectionOne';
import Types from './Types';
import HowItWorksSteps from './HowItWorksSteps';
import Benefits from './Benefits';

const ProductsSections = ({products}) => {

    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {

        setScriptLoaded(false)
        setTimeout(() => {
            setScriptLoaded(true)
        }, 250);
    }, [])

    const route = useRouter();
    const slug = route.query.entry;

    const [singleProduct, setProduct] = useState(null);

    useEffect(() => {
        Client
            .fetch(`*[slug.current == "${slug}"]{
                _type,
                text1,
                text2,
                content,
                all_benefits
            }`)
            .then((data) => setProduct(data[0]))
            .catch(console.error)
    }, [slug]);

    if (!singleProduct) return (<div></div>)

    return (
        <section className="block products-sections">
            <div className="holder">
                <div className="header">
                    <div className={`title text-effect ${(scriptLoaded) ? 'loaded' : ''}`}>¿Cómo funcionan los equipos?</div>
                    <div className={`tabs-content text-effect ${(scriptLoaded) ? 'loaded' : ''}`}>
                        <a href="calentadores-climastar" className={(slug === "calentadores-climastar") ? "link active" : 'link'}>
                            <span>Calentadores Climastar</span>
                        </a>
                        <a href="calentadores-infrarojos" className={(slug === "calentadores-infrarojos") ? "link active" : 'link'}>
                            <span>Calentadores Infrarrojos</span>
                        </a>
                        <a href="toldos-retractiles" className={(slug === "toldos-retractiles") ? "link active" : 'link'}>
                            <span>Toldos</span>
                        </a>
                        <a href="persianas-europeas" className={(slug === "persianas-europeas") ? "link active" : 'link'}>
                            <span>Persianas Europeas</span>
                        </a>
                        <a href="screen-rits" className={(slug === "screen-rits") ? "link active" : 'link'}>
                            <span>Screen Rits</span>
                        </a>
                    </div>
                    <div className={`product-title text-effect ${(scriptLoaded) ? 'loaded' : ''}`}>{singleProduct.text1}</div>
                    {
                        (singleProduct.text2 !== '')
                            ?
                                <div className="desc">{singleProduct.text2}</div>
                            :
                                null
                    }
                </div>
                <div className="content">
                    <SectionOne section_one={singleProduct.content[0]} />
                    {
                        (singleProduct.content[1])
                            ?
                                (singleProduct.content[1]._type === 'types')
                                    ?
                                        <Types types={singleProduct.content[1]} />
                                    :
                                        null
                            :
                                null
                    }
                    {
                        (singleProduct.content[1])
                            ?
                                (singleProduct.content[1]._type === 'howItWorksSteps')
                                    ?
                                        <HowItWorksSteps how_it_works={singleProduct.content[1]}/>
                                    :
                                        null
                            :
                                null
                    }
                    <Benefits benefits={singleProduct.all_benefits} />
                    <a href="/?contacto" className="see-more text-inview">Contáctanos</a>
                </div>
            </div>
        </section>
    );
}

export default ProductsSections;