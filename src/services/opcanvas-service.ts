import * as mongodb from 'mongodb';


/**
 * This will return an opcanvas given a particular ID
 * @param id the id of the opcanvas you want to return
 */
export async function getOpCanvasById( id: string ): Promise<any> {
  return 'The new service-based GET was received: ' + id;
}

export async function getOpCanvasAll(): Promise<any[]> {
  const mongoClient = new mongodb.MongoClient('mongodb://172.27.188.96:27017');
  await mongoClient.connect();
  let opCanvasList: any[] = await mongoClient.db('opcanvas').collection('opcanvas').find({}).toArray();
  
  return opCanvasList;
}

/**
 * This method creates a new opcanvas
 * @param opCanvas the object of the new opcanvas
 * @return the ID of the newly created opcanvas
 */
export function createOpCanvas( opCanvas: any ) : string {
  return 'new-opcanvas-id';
}
