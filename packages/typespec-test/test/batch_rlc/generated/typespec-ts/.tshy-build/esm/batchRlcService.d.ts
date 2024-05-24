import { ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { BatchRlcServiceClient } from "./clientDefinitions.js";
/**
 * Initialize a new instance of `BatchRlcServiceClient`
 * @param endpointParam - Batch account endpoint (for example: https://batchaccount.eastus2.batch.azure.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(endpointParam: string, credentials: TokenCredential, options?: ClientOptions): BatchRlcServiceClient;
//# sourceMappingURL=batchRlcService.d.ts.map