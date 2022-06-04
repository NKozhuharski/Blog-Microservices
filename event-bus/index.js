const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', (req, res) => {
    try {
        const event = req.body;
    
        axios.post('http://localhost:4000/events', event);
        axios.post('http://localhost:4001/events', event);
        axios.post('http://localhost:4002/events', event);

    } catch(err) {console.log(err)}

    res.send({status: 'ok'});
})

app.listen(4005, () => {
    console.log("listening at port 4005");
});