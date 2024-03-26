import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { SessionClientOperations } from "./classic/sessionClient/index.js";
import { FaceClientOptions } from "./api/index.js";
export { FaceClientOptions } from "./api/FaceContext.js";
export declare class FaceClient {
    private _client;
    /** The pipeline used by this client to make requests */
    readonly pipeline: Pipeline;
    constructor(endpoint: string, credential: KeyCredential, apiVersion: string, options?: FaceClientOptions);
    /** The operation groups for SessionClient */
    readonly sessionClient: SessionClientOperations;
}
//# sourceMappingURL=FaceClient.d.ts.map