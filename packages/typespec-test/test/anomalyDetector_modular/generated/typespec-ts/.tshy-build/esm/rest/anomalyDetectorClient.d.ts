import { ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { AnomalyDetectorContext } from "./clientDefinitions.js";
export interface AnomalyDetectorContextOptions extends ClientOptions {
    apiVersion?: string;
}
/**
 * Initialize a new instance of `AnomalyDetectorContext`
 * @param endpointParam - Supported Cognitive Services endpoints (protocol and hostname, for example:
 * https://westus2.api.cognitive.microsoft.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(endpointParam: string, credentials: KeyCredential, options?: AnomalyDetectorContextOptions): AnomalyDetectorContext;
//# sourceMappingURL=anomalyDetectorClient.d.ts.map