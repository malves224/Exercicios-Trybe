const express = require('express');
const app = express();
const port = process.env.HOST || 3000;


app.get('/', (req, res) => res.send('esta vivo!!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));