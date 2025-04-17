import "@azure-tools/typespec-client-generator-core";
import "./main.tsp";

using Azure.ClientGenerator.Core;

model StorageClientInitialization {
    accountName: string;
}
model BlobClientInitialization {
    accountName: string;
    @paramAlias("blob")
    blobName: string;
}

@@clientInitialization(StorageClient, StorageClientInitialization);
@@clientInitialization(StorageClient.BlobClient, { parameters: BlobClientInitialization, initializedBy: InitializedBy.individually | InitializedBy.parent });

