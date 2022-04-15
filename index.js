const fs = require('fs');
const cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https'); 
const options = {
   key  : fs.readFileSync('/etc/letsencrypt/live/v2vbro.com-0001/privkey.pem', 'utf8'),
   cert : fs.readFileSync('/etc/letsencrypt/live/v2vbro.com-0001/cert.pem', 'utf8')
};

const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false}));//disbale parsing application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '1mb'})); // for req.body
app.use(cors({
  origin: '*',
  allowedHeaders: 'x-access-token',
}));

const PORT = process.env.PORT || 8082;
const server = https.createServer(options, app);
server.listen(PORT, () => {
  console.log(`Server start for port: ${PORT}`);
});

//---------Controller----------
const home = require('./routes/login');
//Routes
app.use('/', home);
app.use((req, res, next) => {
  res.status(404).send({
    status: 404,
    error: `API_NOT_FOUND`,
  })
});





