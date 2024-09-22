const express = require('express');

const app = express();

const port = process.env.PORT || 5050;

app.get('/', (req, res) => {
    res.send('Hello, Welcome to Docker Daemon!');
});

app.listen(port, () => {
    console.log('Listening on port' + port);
});
