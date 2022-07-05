const swaggerJSDoc = require('swagger-jsdoc');
const { createPath } = require('gatsby-page-utils');

const openapiVersion = '3.0.3';

const createSpec = (source, definition) =>
  swaggerJSDoc({
    definition: {
      openapi: openapiVersion,
      ...definition,
    },
    apis: source,
  });

exports.createPages = ({ actions }, pluginOptions) => {
  const {
    uiRoute = '/api',
    source = ['src/api/**/*.js'],
    definition = {},
  } = pluginOptions;

  actions.createPage({
    path: createPath(uiRoute),
    component: require.resolve(`${__dirname}./src/components/swagger.js`),
    context: { apiSpec: createSpec(source, definition) },
  });
};

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    uiRoute: Joi.string()
      .default('/api')
      .description('Route to the Swagger UI.'),
    source: Joi.array()
      .items(Joi.string())
      .default(['./src/api/**/*.js'])
      .description(
        'Paths of the source files to scan for `@openapi` annotations in JSDoc-style comments.'
      ),
    definition: Joi.object()
      .default({})
      .description('Optional. Any definition to add to the spec.'),
  });
};
