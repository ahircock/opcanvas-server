import * as express from 'express';
import * as cors from 'cors'; // HTTP cross-origin resource sharing for API
import opCanvasRouter from './routers/opcanvas-router';

let expressApp = express();

expressApp.use("/api", cors({origin:true, credentials:true})); // allows access to API endpoints from any site
expressApp.use('/api', opCanvasRouter);

expressApp.listen(5000, (err) => {
  if(!err) {
    console.log('Server listening on port 5000...');
  }
});