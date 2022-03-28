import { useEffect, useState } from 'react'
import NextHead from 'next/head'
import { DefaultSeo } from 'next-seo'
import config from '@config/seo.json'

import { useRouter } from 'next/router'
import document from 'next/document'

const Head = () => {
  const router = useRouter()

  const [CurrentRouter, setCurrentRouter] = useState(router.asPath)

  useEffect(() => {
    setCurrentRouter(router.asPath)
  }, [router, document])

  return (
    <>
      <DefaultSeo {...config} />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
        <script
          dangerouslySetInnerHTML={{
            __html: `var UnbxdSiteName="sleekhair_mybigcommerce_com-u1474746314480";
          var UnbxdApiKey="a32a56fd1a3bd51b04a38278db19e452";`,
          }}
        />

        <link
          href="//libraries.unbxdapi.com/search-sdk/v2.0.4/vanillaSearch.min.css"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="//sandbox.unbxd.io/sleekhair_mybigcommerce_com-u1474746314480_search.css"
        />

        <link
          rel="stylesheet"
          href="//sandbox.unbxd.io/sleekhair_mybigcommerce_com-u1474746314480_autosuggest.css"
        />

        <link
          rel="stylesheet"
          data-href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700&amp;display=swap"
          data-optimized-fonts="true"
        />
        <style data-href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;600;700&amp;display=swap" />

        <link
          href="https://www.ystore.us/sleekshop/common.css"
          rel="stylesheet"
        />
      </NextHead>
    </>
  )
}

export default Head
