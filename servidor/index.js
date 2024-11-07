const express= require('express');
const cors = require('cors');
const mysql = require('msql2');
const app = express();
const PORT =3001;

app.use(cors());
app.use(express.json());