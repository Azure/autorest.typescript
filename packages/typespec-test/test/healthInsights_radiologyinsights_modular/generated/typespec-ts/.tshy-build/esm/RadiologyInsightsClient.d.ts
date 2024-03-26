import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { RadiologyInsightsData, HealthInsightsOperationStatus } from "./models/models.js";
import { InferRadiologyInsightsOptions } from "./models/options.js";
import { RadiologyInsightsClientOptions } from "./api/index.js";
export { RadiologyInsightsClientOptions } from "./api/RadiologyInsightsContext.js";
export declare class RadiologyInsightsClient {
    private _client;
    /** The pipeline used by this client to make requests */
    readonly pipeline: Pipeline;
    constructor(endpoint: string, credential: KeyCredential, options?: RadiologyInsightsClientOptions);
    /** Creates a Radiology Insights job with the given request body. */
    inferRadiologyInsights(body: RadiologyInsightsData, options?: InferRadiologyInsightsOptions): Promise<HealthInsightsOperationStatus>;
}
//# sourceMappingURL=RadiologyInsightsClient.d.ts.map