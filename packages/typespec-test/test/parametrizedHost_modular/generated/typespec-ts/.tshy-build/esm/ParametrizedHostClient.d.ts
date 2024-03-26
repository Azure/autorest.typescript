import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { ConfidentialLedgerOperations } from "./classic/confidentialLedger/index.js";
import { ParametrizedHostClientOptions } from "./api/index.js";
export { ParametrizedHostClientOptions } from "./api/ParametrizedHostContext.js";
export declare class ParametrizedHostClient {
    private _client;
    /** The pipeline used by this client to make requests */
    readonly pipeline: Pipeline;
    constructor(host: string, subdomain: string, sufix: string, credential: TokenCredential, options?: ParametrizedHostClientOptions);
    /** The operation groups for ConfidentialLedger */
    readonly confidentialLedger: ConfidentialLedgerOperations;
}
//# sourceMappingURL=ParametrizedHostClient.d.ts.map