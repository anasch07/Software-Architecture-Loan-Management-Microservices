const express = require('express');
const {info} = require("js-logger");
const {post,get} = require("axios");

const ports = require('../ports');


const app = express();
const PORT = ports.OcrService;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));






app.get('/', (req, res) => {
    console.log('--------------------------------------------');

    console.log('Request received for OCR SERVICE');
    res.send({message: 'Request received'});
});


// Routes
app.get('/ocr', async (req, res) => {
        console.log('--------------------------------------------');

        console.log('doing OCR');
        res.send({message: 'OCR done'});
}
);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
