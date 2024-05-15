import { PollerLike, OperationState } from "@azure/core-lro";
import { RadiologyInsightsData, RadiologyInsightsInferenceResult } from "../models/models.js";
import { AzureHealthInsightsContext as Client, CreateJob202Response, CreateJobDefaultResponse, CreateJobLogicalResponse } from "../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { InferRadiologyInsightsOptionalParams } from "../models/options.js";
export declare function _inferRadiologyInsightsSend(context: Client, body: RadiologyInsightsData, options?: InferRadiologyInsightsOptionalParams): StreamableMethod<CreateJob202Response | CreateJobDefaultResponse | CreateJobLogicalResponse>;
export declare function _inferRadiologyInsightsDeserialize(result: CreateJob202Response | CreateJobDefaultResponse | CreateJobLogicalResponse): Promise<RadiologyInsightsInferenceResult>;
/** Creates a Radiology Insights job with the given request body. */
export declare function inferRadiologyInsights(context: Client, body: RadiologyInsightsData, options?: InferRadiologyInsightsOptionalParams): PollerLike<OperationState<RadiologyInsightsInferenceResult>, RadiologyInsightsInferenceResult>;
//# sourceMappingURL=operations.d.ts.map