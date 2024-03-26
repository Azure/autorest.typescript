import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { FaceContext } from "../rest/index.js";
export interface FaceClientOptions extends ClientOptions {
}
export { FaceContext } from "../rest/index.js";
export declare function createFace(endpoint: string, credential: KeyCredential, apiVersion: string, options?: FaceClientOptions): FaceContext;
//# sourceMappingURL=FaceContext.d.ts.map