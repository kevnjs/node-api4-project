const express = require('express');
const server = express();
const dotenv = require('dotenv');
const api = require('./src/api-router')


dotenv.config()
server.use(express.json());
server.use('/', api)

const port = process.env.PORT
server.listen(port, () => console.log("Server is running at port :", port))

module.exports = server;