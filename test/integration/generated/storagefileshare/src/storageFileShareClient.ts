import { FileImpl } from "./operations";
import { File } from "./operationsInterfaces";
import { StorageFileShareClientContext } from "./storageFileShareClientContext";
import { StorageFileShareClientOptionalParams } from "./models";

export class StorageFileShareClient extends StorageFileShareClientContext {
  /**
   * Initializes a new instance of the StorageFileShareClient class.
   * @param url The URL of the service account, share, directory or file that is the target of the
   *            desired operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageFileShareClientOptionalParams) {
    super(url, options);
    this.file = new FileImpl(this);
  }

  file: File;
}
