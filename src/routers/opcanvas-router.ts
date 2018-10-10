import { Router, Request, Response } from 'express';
import { OpCanvasService } from '../services/opcanvas-service';

export class OpCanvasRouter {
  router: Router;

  constructor(public service: OpCanvasService) {
    this.router = Router();
    this.router.get('/opcanvas', (req, res) => this.getAllHandler(req,res));
    this.router.get('/opcanvas/:opcanvasid', (req, res) => this.getHandler(req,res));
    this.router.post('/opcanvas', (req, res) => this.postHandler(req,res));
  }

  async getAllHandler(req: Request, res: Response) {
    let returnAll: any[] = await this.service.getOpCanvasAll();
    res.send(returnAll);
  }

  async getHandler(req: Request, res: Response) {
    let canvas : any = await this.service.getOpCanvasById(req.params.opcanvasid);
    res.send(canvas)
  }

  async postHandler(req: Request, res: Response) {
    res.send('The POST was received')
  }
}
