import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`
function Hero(props) {
  return (
    <div className={container}>
      <h1 className={intro}>Welcome to the GatsbyJS + Shopify Demo Store.</h1>
      {!!process.env.GATSBY_DEMO_STORE && (
        <>
          <p className={callOut}>
            It's a proof-of-concept in a box, with 10k products and 30k variants
            to help you get to proof-of-concept as soon as right now.
          </p>
          <p className={callToAction}>
            Hook it up to your own Shopify store data and start customizing in
            minutes by deploying it to Gatsby Cloud for free. Grab your Shopify
            store credentials and
            <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-shopify&utm_campaign=shopify-starter">
              <img
                src="https://www.gatsbyjs.com/deploynow.png"
                alt="Deploy to Gatsby Cloud"
                className={deployButton}
              />
            </a>
          </p>
        </>
      )}
    </div>
  )
}

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Hero />
      <script
        src="https://fast.wistia.com/embed/medias/43qmexrvt5.jsonp"
        async
      />
      <div
        class="wistia_responsive_padding"
        style={{ padding: "56.25% 0 0 0", position: "relative" }}
      >
        <div
          class="wistia_responsive_wrapper"
          style={{
            height: "100%",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <div
            class="wistia_embed wistia_async_43qmexrvt5 videoFoam=true"
            style={{ height: "100%", position: "relative", width: "100%" }}
          >
            <div
              class="wistia_swatch"
              style={{
                height: "100%",
                left: 0,
                opacity: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                transition: "opacity 200ms",
                width: "100%",
              }}
            >
              <img
                src="https://fast.wistia.com/embed/medias/43qmexrvt5/swatch"
                style={{
                  filter: "blur(5px)",
                  height: "100%",
                  objectFit: "contain",
                  width: "100%",
                }}
                alt=""
                aria-hidden="true"
                onload="this.parentNode.style.opacity=1;"
              />
            </div>
          </div>
        </div>
      </div>
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}
