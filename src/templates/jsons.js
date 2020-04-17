import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query ($code: Int!) {
    jsonTestJson(code: {eq: $code}) {
      code
      year
      name
    }
  }
`

const JsonPage = (props) => (
  <Layout>
    <SEO title={props.data.jsonTestJson.name} />
    <p>Name: {props.data.jsonTestJson.name}</p>
    <p>Year: {props.data.jsonTestJson.year}</p>
    <p>Code: {props.data.jsonTestJson.code}</p>
  </Layout>
)

export default JsonPage