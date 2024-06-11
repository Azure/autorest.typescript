import { TokenCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AVSContext } from "../rest/index.js";
export interface AVSClientOptions extends ClientOptions {
    /** The API version to use for this operation. */
    apiVersion?: string;
}
export { AVSContext } from "../rest/index.js";
/** Azure VMware Solution API */
export declare function createAVS(credential: TokenCredential, options?: AVSClientOptions): AVSContext;
//# sourceMappingURL=aVSContext.d.ts.map