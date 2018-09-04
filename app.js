const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const Routes = require('./routes')
const app = express();

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', new Routes().router)

app.listen(3009);