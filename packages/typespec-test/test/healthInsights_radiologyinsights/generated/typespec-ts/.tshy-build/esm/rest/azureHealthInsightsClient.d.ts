import { ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { AzureHealthInsightsContext } from "./clientDefinitions.js";
/** The optional parameters for the client */
export interface AzureHealthInsightsContextOptions extends ClientOptions {
    /** The api version option of the client */
    apiVersion?: string;
}
/**
 * Initialize a new instance of `AzureHealthInsightsContext`
 * @param endpointParam - Supported Cognitive Services endpoints (protocol and hostname, for example: https://westus2.api.cognitive.microsoft.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(endpointParam: string, credentials: KeyCredential, { apiVersion, ...options }?: AzureHealthInsightsContextOptions): AzureHealthInsightsContext;
//# sourceMappingURL=azureHealthInsightsClient.d.ts.map