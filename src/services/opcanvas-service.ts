/**
 * This will return an opcanvas given a particular ID
 * @param id the id of the opcanvas you want to return
 */
export function getOpCanvasById( id: string ): any {
  return 'The new service-based GET was received: ' + id;
}

/**
 * This method creates a new opcanvas
 * @param opCanvas the object of the new opcanvas
 * @return the ID of the newly created opcanvas
 */
export function createOpCanvas( opCanvas: any ) : string {
  return 'new-opcanvas-id';
}
