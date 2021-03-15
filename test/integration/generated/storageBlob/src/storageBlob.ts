import {
  Service,
  Container,
  Directory,
  Blob,
  PageBlob,
  AppendBlob,
  BlockBlob
} from "./operations";
import { StorageBlobContext } from "./storageBlobContext";
import { StorageBlobOptionalParams } from "./models";

export class StorageBlob extends StorageBlobContext {
  /**
   * Initializes a new instance of the StorageBlob class.
   * @param url The URL of the service account, container, or blob that is the targe of the desired
   *            operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageBlobOptionalParams) {
    super(url, options);
    this.service = new Service(this);
    this.container = new Container(this);
    this.directory = new Directory(this);
    this.blob = new Blob(this);
    this.pageBlob = new PageBlob(this);
    this.appendBlob = new AppendBlob(this);
    this.blockBlob = new BlockBlob(this);
  }

  service: Service;
  container: Container;
  directory: Directory;
  blob: Blob;
  pageBlob: PageBlob;
  appendBlob: AppendBlob;
  blockBlob: BlockBlob;
}
