const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(require('path').join(__dirname, 'public')));
app.listen(PORT, () => console.log('http://localhost:3000'));