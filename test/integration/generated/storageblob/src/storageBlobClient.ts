import { BlockBlobImpl } from "./operations";
import { BlockBlob } from "./operationsInterfaces";
import { StorageBlobClientContext } from "./storageBlobClientContext";
import { StorageBlobClientOptionalParams } from "./models";

export class StorageBlobClient extends StorageBlobClientContext {
  /**
   * Initializes a new instance of the StorageBlobClient class.
   * @param url The URL of the service account, container, or blob that is the targe of the desired
   *            operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageBlobClientOptionalParams) {
    super(url, options);
    this.blockBlob = new BlockBlobImpl(this);
  }

  blockBlob: BlockBlob;
}
