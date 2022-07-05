# gatsby-plugin-swagger-jsdoc

Provides drop-in support for generating a [Swagger UI](https://swagger.io/tools/swagger-ui/) view from JSDoc-style comments.

## Install

`npm install gatsby-plugin-swagger-jsdoc swagger-ui-react`

## How to use

Add in your `gatsby-config.js`:

```javascript
plugins: [
  {
    resolve: 'gatsby-plugin-swagger-jsdoc',
    options: {
      uiRoute: '/api', // Path Swagger UI available at
      source: [`${__dirname}/src/api/**/*.js`], // Recursively scan `api` folder
    },
    definition: {
      info: {
        title: 'Your API Title',
        description: 'Your API description',
        version: '0.0.1',
      },
    },
  },
];
```

## Configuration options

**`uiRoute`** [array|string][required]

Route to the Swagger UI to which the generated spec is injected into context.

**`source`** [array|string][optional]

Paths of the source files to scan for `@openapi` annotations. By default, it scans the `api` folder (`['/src/api/**/*.js']`). You can change the value to scan any files, but only JSDoc-style comments are scanned. `**/*` means recursively scanning subfolders too.

**`definition`** [object][optional]

Extra properties to pass down to Swagger spec definition.
