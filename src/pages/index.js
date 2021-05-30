import * as React from "react"
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle="HomePage">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage 
        alt="Cute foxes"
        src="../images/jeremy-hynes-BU82EbpT7hk-unsplash.jpg"
      />  
    </Layout>
  )
}

export default IndexPage