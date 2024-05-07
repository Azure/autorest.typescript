import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AzureHealthInsightsContext } from "../rest/index.js";
export interface RadiologyInsightsClientOptions extends ClientOptions {
    /** The API version to use for this operation. */
    apiVersion?: string;
}
export { AzureHealthInsightsContext } from "../rest/index.js";
export declare function createRadiologyInsights(endpointParam: string, credential: KeyCredential, options?: RadiologyInsightsClientOptions): AzureHealthInsightsContext;
//# sourceMappingURL=radiologyInsightsContext.d.ts.map