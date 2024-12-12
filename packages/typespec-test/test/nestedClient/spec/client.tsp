import "@azure-tools/typespec-client-generator-core";
import "./main.tsp";

using Azure.ClientGenerator.Core;

model StorageClientInitialization {
    accountName: string;
}
model BlobClientInitialization {
    accountName: string;
    blobName: string;
}

@@clientInitialization(StorageClient, StorageClientInitialization);
@@clientInitialization(StorageClient.BlobClient, BlobClientInitialization);

