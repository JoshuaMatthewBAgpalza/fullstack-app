const express = require('express');
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 1ce7cc7c1f06729c28cf5f7301d8d3208f70dd8c
