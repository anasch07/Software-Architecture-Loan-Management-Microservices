const express = require('express');
const {info} = require("js-logger");
const {post,get} = require("axios");

const ports = require('../ports');


const app = express();
const PORT = ports.ExternalService;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));






app.get('/', (req, res) => {
    console.log('--------------------------------------------');

    console.log('Request received for External Access Service');
    res.send({message: 'Request received'});
});


// Routes
app.get('/externalAccessService', async (req, res) => {
        console.log('--------------------------------------------');

 console.log('doing external access');
          res.send({message: 'External Access done'});
}
);


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
