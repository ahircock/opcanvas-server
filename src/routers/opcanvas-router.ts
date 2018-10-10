import { Router, Request, Response } from 'express';
import * as opCanvasService from '../services/opcanvas-service';

// create an express router
const router: Router = Router();

// map the URLs to the handlers
router.get('/opcanvas', getAllHandler );
router.get('/opcanvas/:opcanvasid', getHandler );
router.post('/opcanvas', postHandler );

async function getAllHandler( req: Request, res: Response ) {
  let returnAll: any[] = await opCanvasService.getOpCanvasAll();
  res.send(returnAll);
}

async function getHandler( req: Request, res: Response ) {
  res.send( opCanvasService.getOpCanvasById(req.params.opcanvasid) )
}

function postHandler( req: Request, res: Response ) {
  res.send('The POST was received')
}

// export the router
export default router;