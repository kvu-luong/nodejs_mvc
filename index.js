const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const PORT = process.env.PORT || 3000;

//Routes
app.use('/', require('./routes/login'));

app.listen(PORT, () => {
  console.log(`Server start for port: ${PORT}`);
});
