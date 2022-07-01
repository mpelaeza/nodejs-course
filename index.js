const process = require('process')
const express = require('express');
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')


const routerApi = require('./src/routes')
const {logErrors, errorHandler, boomErrorHandler, validatorHandler} = require('./src/middelwares/error.handler')

const morganLevel = process.env.NODE_ENV === 'production' ? 'combined' : 'dev'
const app = express();
const port = 3000

app.use(morgan(morganLevel));
app.use(helmet());
app.use(express.json());
app.use(cors());
routerApi(app);

//Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


app.get('/', (req, res) => {
  res.json({message: "hola mundo"});
})


