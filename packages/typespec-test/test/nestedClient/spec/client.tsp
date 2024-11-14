import "@azure-tools/typespec-client-generator-core";
import "./main.tsp";

using Azure.ClientGenerator.Core;

model ClientInitialization {
    blobName: string;
}

@@clientInitialization(StorageClient, ClientInitialization);
@@clientInitialization(StorageClient.BlobClient, ClientInitialization);
