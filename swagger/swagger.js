const swaggerUi=require('swagger-ui-exress');
const swaggerDocument=require('../swagger.json');

module.exports=(app)=>{
    app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument))
};