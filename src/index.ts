import * as express from 'express';

let expressApp = express();

// respond with "hello world" when a GET request is made to the homepage
expressApp.get('/hi', function (req, res) {
  res.send('hello world');
})

// respond with "hello world" when a GET request is made to the homepage
expressApp.get('/*', function (req, res) {
  res.send('dont know this URL')
})

expressApp.listen(5000, (err) => {
  if(!err) {
    console.log('Server listening on port 5000...');
  }
});