import { Partytown } from "@builder.io/partytown/react"
import React from "react"

const googleTagManager = `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${process.env.GOOGLE_TAG_MANAGER_ID}');
`

const intercomSnippet = `
window.intercomSettings = {
  api_base: "https://api-iam.intercom.io",
  app_id: "znpit64y"
};
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/znpit64y';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
`

const metaPixelScriptSnippet = `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${process.env.META_ID}');
fbq('track', 'PageView');`

const metaPixelPixelSnippet = `
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=${process.env.META_ID}&ev=PageView&noscript=1"
/>`

const gtmPixelSnippet = `
<iframe
  src={https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_MANAGER_ID}}
  height="0"
  width="0"
  style="display:none;visibility:hidden"
></iframe>
`

export const onRenderBody = ({
  setPostBodyComponents,
  setHeadComponents,
  pathname,
}) => {
  // pathnames that only Partytown should be enabled on
  const partytownPathnames = ["/partytown", "/partytown/"]
  const usePartytown = partytownPathnames.includes(pathname)

  const headComponents = [
    <script
      type={usePartytown ? "text/partytown" : "text/javascript"}
      key="intercom"
      dangerouslySetInnerHTML={{ __html: intercomSnippet }}
      async
    />,
    <script
      type={usePartytown ? "text/partytown" : "text/javascript"}
      key="gtm-script"
      dangerouslySetInnerHTML={{ __html: googleTagManager }}
    />,
    <script
      type={usePartytown ? "text/partytown" : "text/javascript"}
      key="meta-pixel-script"
      dangerouslySetInnerHTML={{ __html: metaPixelScriptSnippet }}
    />,
    <noscript
      key="meta-pixel-pixel"
      dangerouslySetInnerHTML={{ __html: metaPixelPixelSnippet }}
    />,
    <script
      type={usePartytown ? "text/partytown" : "text/javascript"}
      key="wistia"
      src="https://fast.wistia.com/assets/external/E-v1.js"
      async
    />,
    <script
      async
      type={usePartytown ? "text/partytown" : "text/javascript"}
      src={`https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=${process.env.KLAVIYO_COMPANY_ID}`}
    />,
  ]

  const postBodyComponents = [
    <noscript
      key="gtm-pixel"
      dangerouslySetInnerHTML={{ __html: gtmPixelSnippet }}
    />,
  ]

  if (usePartytown) {
    headComponents.push(
      // https://partytown.builder.io/configuration
      <Partytown
        resolveUrl={(url) => {
          // https://partytown.builder.io/proxying-requests
          const proxyDomains = [
            "connect.facebook.net",
            "js.intercomcdn.com",
            "www.googletagmanager.com",
            "static.klaviyo.com",
            "static-tracking.klaviyo.com",
            "fast.wistia.net",
            "embedwistia-a.akamaihd.net",
          ]
          if (proxyDomains.includes(url.hostname)) {
            const proxyUrl = new URL("https://cdn.builder.io/api/v1/proxy-api")
            proxyUrl.searchParams.append("url", url)
            return proxyUrl
          }
        }}
        forward={[
          // https://partytown.builder.io/forwarding-events
          "dataLayer.push",
          "fbq",
          "_learnq.push",
          "ttq.track",
          "ttq.page",
          "ttq.load",
          "Intercom",
        ]}
        debug={true}
        key="partytown"
      />
    )
  }

  setHeadComponents(headComponents)
  setPostBodyComponents(postBodyComponents)
}
