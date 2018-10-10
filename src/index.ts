import * as express from 'express';
import * as cors from 'cors'; // HTTP cross-origin resource sharing for API
import { OpCanvasService } from './services/opcanvas-service';
import { OpCanvasRouter } from './routers/opcanvas-router';
import * as mongodb from 'mongodb';

const DB_URL = 'mongodb://172.27.188.96:27017';

let expressApp = express();

let client = new mongodb.MongoClient(DB_URL, { useNewUrlParser: true });
client.connect().then(function (db) {
    // initalize services & routers
    let opCanvasService = new OpCanvasService(client);
    let opCanvasRouter = new OpCanvasRouter(opCanvasService);
    
    // set up express routing
    expressApp.use("/api", cors({origin:true, credentials:true})); // allows access to API endpoints from any site
    expressApp.use('/api', opCanvasRouter.router);
    
    // start server
    expressApp.listen(5000, (err) => {
      if(!err) {
        console.log('Server listening on port 5000...');
      }
    });
  })
  .catch(function (err) {
    console.log('Error starting server. Could not connect to db at: ' + DB_URL);
  })


  
