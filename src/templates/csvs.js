import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query ($code: Int!) {
    csvTestCsv(code: {eq: $code}) {
      code
      year
      name
    }
  }
`

const CsvPage = (props) => (
  <Layout>
    <SEO title={props.data.csvTestCsv.name} />
    <p>Name: {props.data.csvTestCsv.name}</p>
    <p>Year: {props.data.csvTestCsv.year}</p>
    <p>Code: {props.data.csvTestCsv.code}</p>
  </Layout>
)

export default CsvPage