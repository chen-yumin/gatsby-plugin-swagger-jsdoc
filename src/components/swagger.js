import { createElement } from 'react';
import SwaggerUI from 'swagger-ui-react';
import 'swagger-ui-react/swagger-ui.css';

const Swagger = ({ pageContext }) =>
  createElement(SwaggerUI, { spec: pageContext.apiSpec });

export default Swagger;
