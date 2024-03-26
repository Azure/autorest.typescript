import { ClientOptions } from "@azure-rest/core-client";
import { KeyCredential } from "@azure/core-auth";
import { FaceContext } from "./clientDefinitions.js";
/**
 * Initialize a new instance of `FaceContext`
 * @param endpointParam - Supported Cognitive Services endpoints (protocol and hostname, for example:
 * https://<resource-name>.cognitiveservices.azure.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(endpointParam: string, credentials: KeyCredential, options?: ClientOptions): FaceContext;
//# sourceMappingURL=faceClient.d.ts.map