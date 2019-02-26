const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json("Hello there")
})
const port = 5000;

app.listen(port, () => console.log(`server started on port ${port}`));