import "@typespec/http";

using TypeSpec.Http;

@service
@route("/account/{accountName}")
namespace StorageClient {
  
  op download(@path accountName: string): void;

  @route("/blob/{blobName}")
  namespace BlobClient {
    
    op download(@path accountName: string, @path blobName: string): void;
  }
}
