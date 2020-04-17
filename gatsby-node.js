const path = require('path');

module.exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type CsvTestCsv implements Node @dontInfer {
      name: String!
      year: Date! @dateformat
      code: Int!
    }
    type JsonTestJson implements Node @dontInfer {
      name: String!
      year: Date! @dateformat
      code: Int!
      }
  `
  createTypes(typeDefs)
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const csvResponse = await graphql(`
    query {
      allCsvTestCsv {
        edges {
          node {
            code
            name
          }
        }
      }
    }
  `);
  csvResponse.data.allCsvTestCsv.edges.forEach(edge => {
    let csvTemplate = path.resolve('./src/templates/csvs.js');
    let csvSlug = '/csv-' + edge.node.name;
    createPage({
      component: csvTemplate,
      path: csvSlug,
      context: {
        code: edge.node.code
      }
    });
  });

  const jsonResponse = await graphql(`
    query {
      allJsonTestJson {
        edges {
          node {
            code
            name
          }
        }
      }
    }
  `);
  jsonResponse.data.allJsonTestJson.edges.forEach(edge => {
    let jsonTemplate = path.resolve('./src/templates/jsons.js');
    let jsonSlug = '/json-' + edge.node.name;
    createPage({
      component: jsonTemplate,
      path: jsonSlug,
      context: {
        code: edge.node.code
      }
    });
  });
}
