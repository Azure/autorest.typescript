import { ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { AVSContext } from "./clientDefinitions.js";
/** The optional parameters for the client */
export interface AVSContextOptions extends ClientOptions {
    /** The api version option of the client */
    apiVersion?: string;
}
/**
 * Initialize a new instance of `AVSContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(credentials: TokenCredential, { apiVersion, ...options }?: AVSContextOptions): AVSContext;
//# sourceMappingURL=aVSClient.d.ts.map