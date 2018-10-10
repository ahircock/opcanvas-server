import * as express from 'express';
import opCanvasRouter from './routers/api-opcanvas';

let expressApp = express();

// respond with "hello world" when a GET request is made to the homepage
expressApp.use('/api', opCanvasRouter);

expressApp.listen(5000, (err) => {
  if(!err) {
    console.log('Server listening on port 5000...');
  }
});