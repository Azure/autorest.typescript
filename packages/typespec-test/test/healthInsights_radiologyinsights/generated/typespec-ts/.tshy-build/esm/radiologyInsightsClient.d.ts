import { KeyCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import { RadiologyInsightsData, HealthInsightsOperationStatusError } from "./models/models.js";
import { InferRadiologyInsightsOptionalParams } from "./models/options.js";
import { RadiologyInsightsClientOptions } from "./api/index.js";
export { RadiologyInsightsClientOptions } from "./api/radiologyInsightsContext.js";
export declare class RadiologyInsightsClient {
    private _client;
    /** The pipeline used by this client to make requests */
    readonly pipeline: Pipeline;
    constructor(endpointParam: string, credential: KeyCredential, options?: RadiologyInsightsClientOptions);
    /** Creates a Radiology Insights job with the given request body. */
    inferRadiologyInsights(body: RadiologyInsightsData, options?: InferRadiologyInsightsOptionalParams): Promise<HealthInsightsOperationStatusError>;
}
//# sourceMappingURL=radiologyInsightsClient.d.ts.map