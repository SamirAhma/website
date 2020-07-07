import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"




const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="hero">
      <h1>Hero Text</h1>
    </div>

    <div className="container">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa unde,
        perferendis neque dolor ad eius nemo consequuntur modi omnis odio!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus
        laudantium tempore architecto commodi dolorem esse molestias maxime, at
        omnis quia quis suscipit minima iste cupiditate? Quos eligendi porro,
        laboriosam odio illum suscipit sint, inventore soluta, esse architecto
        earum voluptates. Consequuntur et, illo ullam quo laborum reiciendis
        quas magni aspernatur magnam.
      </p>
    </div>
  </Layout>
)

export default IndexPage
