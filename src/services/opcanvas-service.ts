import * as mongodb from 'mongodb';


/**
 * This will return an opcanvas given a particular ID
 * @param id the id of the opcanvas you want to return
 */
export async function getOpCanvasById( id: string ): Promise<any> {
  return 'The new service-based GET was received: ' + id;
}

export async function getOpCanvasAll(): Promise<any[]> {
  const mongoClient = new mongodb.MongoClient('mongodb://localhost:27017');
  console.log('client created')
  await mongoClient.connect();
  console.log('connected')
  let opCanvasList: any[] = await mongoClient.db('opcanvas').collection('opcanvas').find({}).toArray();
  console.log('data returned')

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
