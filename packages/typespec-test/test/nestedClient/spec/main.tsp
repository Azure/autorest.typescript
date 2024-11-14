import "@typespec/http";

using TypeSpec.Http;

@service
namespace StorageClient {
  @route("/account/{accountName}")
  op download(@path accountName: string): void;

  interface BlobClient {
    @route("/blob/{blobName}")
    download(@path blobName: string): void;
  }
}
