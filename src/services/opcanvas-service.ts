
export class OpCanvasService {

  constructor(public mongoDb : any) {
  }

  /**
   * This will return an opcanvas given a particular ID
   * @param id the id of the opcanvas you want to return
   */
  async  getOpCanvasById(id: string): Promise<any> {
    return 'The new service-based GET was received: ' + id;
  }

  async getOpCanvasAll(): Promise<any[]> {
    let opCanvasList: any[] = await this.mongoDb.db('opcanvas').collection('opcanvas').find({}).toArray();
    return opCanvasList;
  }

  /**
   * This method creates a new opcanvas
   * @param opCanvas the object of the new opcanvas
   * @return the ID of the newly created opcanvas
   */
  async createOpCanvas(opCanvas: any): Promise<string> {
    return 'new-opcanvas-id';
  }

}
