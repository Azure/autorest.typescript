import { ClientOptions } from "@azure-rest/core-client";
import { TokenCredential } from "@azure/core-auth";
import { AVSContext } from "./clientDefinitions.js";
/**
 * Initialize a new instance of `AVSContext`
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(credentials: TokenCredential, options?: ClientOptions): AVSContext;
//# sourceMappingURL=aVSClient.d.ts.map