const express = require('express');
const app = express();

const port = process.env || 3100;

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
    
})