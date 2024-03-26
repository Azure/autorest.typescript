import { KeyCredential } from "@azure/core-auth";
import { ClientOptions } from "@azure-rest/core-client";
import { AzureHealthInsightsContext } from "../rest/index.js";
export interface RadiologyInsightsClientOptions extends ClientOptions {
}
export { AzureHealthInsightsContext } from "../rest/index.js";
export declare function createRadiologyInsights(endpoint: string, credential: KeyCredential, options?: RadiologyInsightsClientOptions): AzureHealthInsightsContext;
//# sourceMappingURL=RadiologyInsightsContext.d.ts.map