const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res, next) => {
    return res.json('Hello Phu Le');
});

app.listen(PORT, () => {
    console.log('Server running on 4000');
})