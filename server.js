const express = require('express');
const app = express();
const path = require('path');

const port = process.env.port || 3100;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`app is listening on ${port}`);
    
})