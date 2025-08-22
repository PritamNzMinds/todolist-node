import swaggerAutogen from 'swagger-autogen'
swaggerAutogen();

const doc = {
    info: {
        title: 'My API',
        description: 'Description'
    },
    host: 'localhost:3005'
};

const outputFile = './swagger.json';
const routes = ['./app/router/task.router.js','./app/router/auth.router.js'];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);