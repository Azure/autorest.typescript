import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AVSContext } from "../rest/index.js";
/** Optional parameters for the client. */
export interface AVSClientOptionalParams extends ClientOptions {
    /** The API version to use for this operation. */
    apiVersion?: string;
}
export { AVSContext } from "../rest/index.js";
/** Azure VMware Solution API */
export declare function createAVS(credential: TokenCredential, options?: AVSClientOptionalParams): AVSContext;
//# sourceMappingURL=aVSContext.d.ts.map