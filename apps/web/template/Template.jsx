import React, { useState, useEffect } from 'react'
import Head from 'next/head'
//import Script from 'next/script'
import { useRouter } from 'next/router'

export default function Template({ children, title, description, keywords }){

    useEffect(() => {
        let body = document.querySelector('body');
        if(body.classList.contains('dark-mode') || body.classList.contains('light-mode')) {
            return
        } else {
            body.classList.add('dark-mode');
        }
    })

    const router = useRouter();
    const [ogUrl, setOgUrl] = useState("");
    useEffect(() => {
        const host = window.location.host,
                baseUrl = `https://${host}`;
    
        setOgUrl(`${baseUrl}${router.pathname}`);
    }, [router.pathname]);

    return(
        <>
            <Head>
                <title>{title}</title> 
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="shortcut icon" href="./favicon.png" type="image/x-icon" />
                <meta name="robots" content="INDEX, FOLLOW, ARCHIVE" />

                <link rel="alternate" hrefLang="es" href="" />

                <meta itemProp="name" content={title}/>
                <meta itemProp="description" content={description}/>
                <meta itemProp="url" content={ogUrl} />
                <meta itemProp="image" content={`${ogUrl}social.jpg`}/>

                <meta property="fb:app_id" content="app-id"/>
                <meta property="og:site_name" content={title}/>
                <meta property="og:title" content={title}/>
                <meta property="og:description" content={description}/>
                <meta property="og:url" content={ogUrl} />
                <meta property="og:image" content={`${ogUrl}social.jpg`} />
                <meta property="og:type" content="website"/>

                <meta name="twitter:site" content=""/>
                <meta name="twitter:title" content={title}/>
                <meta name="twitter:description" content={description}/>
                <meta name="twitter:url" content={ogUrl} />
                <meta name="twitter:image" content={`${ogUrl}social.jpg`} />
                <meta name="twitter:card" content="summary"/>

            </Head>
            <div className='outer-wrapper'>
                {children}
            </div>
        </>
    )
}