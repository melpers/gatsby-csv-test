import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  query {
    allCsvTestCsv {
      edges {
        node {
          code
          name
          year
        }
      }
    },
    allJsonTestJson {
      edges {
        node {
          code
          name
          year
        }
      }
    }
  }
`

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <p>Results of allCsvTestCsv:</p>
    <ul>
      {props.data.allCsvTestCsv.edges.map((edge, idx) => (
        <li key={edge.node.code}>
          <p>
            {"Row " + idx + ": "}
            <Link to={"/csv-" + edge.node.name}>{edge.node.name}</Link>
            {" | " + edge.node.year + " | " + edge.node.code}
          </p>
        </li>
      ))}
    </ul>
    <p>Results of allJsonTestJson:</p>
    <ul>
      {props.data.allJsonTestJson.edges.map((edge, idx) => (
        <li key={edge.node.code}>
          <p>
            {"Row " + idx + ": "}
            <Link to={"/json-" + edge.node.name}>{edge.node.name}</Link>
            {" | " + edge.node.year + " | " + edge.node.code}
          </p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage