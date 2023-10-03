const swaggerAutogen=require('swagger-autogen')();
const outputFile='./swagger.json';
const endpointsFiles=['../routes/articleRoute.js','../routes/commentRoute.js','../routes/profileRoute.js','../routes/subscriptionsRoute.js','../routes/tagRoute.js','../routes/userRoute.js'];

const config={
    info:{
        title:'Blog API Documentation',
        description:'',
    },
    tags:[ ],
    host:'localhost:3000/api',
    schemes:['http','https'],
};

swaggerAutogen(outputFile,endpointsFiles,config)