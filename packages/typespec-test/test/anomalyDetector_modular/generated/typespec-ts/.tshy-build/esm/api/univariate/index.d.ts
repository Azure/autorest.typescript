import { UnivariateUnivariateDetectionOptions, UnivariateUnivariateEntireDetectionResult, UnivariateUnivariateLastDetectionResult, UnivariateUnivariateChangePointDetectionOptions, UnivariateUnivariateChangePointDetectionResult } from "../../models/models.js";
import { AnomalyDetectorContext as Client, DetectUnivariateChangePoint200Response, DetectUnivariateChangePointDefaultResponse, DetectUnivariateEntireSeries200Response, DetectUnivariateEntireSeriesDefaultResponse, DetectUnivariateLastPoint200Response, DetectUnivariateLastPointDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { UnivariateDetectUnivariateEntireSeriesOptions, UnivariateDetectUnivariateLastPointOptions, UnivariateDetectUnivariateChangePointOptions } from "../../models/options.js";
export declare function _detectUnivariateEntireSeriesSend(context: Client, options: UnivariateUnivariateDetectionOptions, options?: UnivariateDetectUnivariateEntireSeriesOptions): StreamableMethod<DetectUnivariateEntireSeries200Response | DetectUnivariateEntireSeriesDefaultResponse>;
export declare function _detectUnivariateEntireSeriesDeserialize(result: DetectUnivariateEntireSeries200Response | DetectUnivariateEntireSeriesDefaultResponse): Promise<UnivariateUnivariateEntireDetectionResult>;
/**
 * This operation generates a model with an entire series, each point is detected
 * with the same model. With this method, points before and after a certain point
 * are used to determine whether it is an anomaly. The entire detection can give
 * user an overall status of the time series.
 */
export declare function detectUnivariateEntireSeries(context: Client, options: UnivariateUnivariateDetectionOptions, options?: UnivariateDetectUnivariateEntireSeriesOptions): Promise<UnivariateUnivariateEntireDetectionResult>;
export declare function _detectUnivariateLastPointSend(context: Client, options: UnivariateUnivariateDetectionOptions, options?: UnivariateDetectUnivariateLastPointOptions): StreamableMethod<DetectUnivariateLastPoint200Response | DetectUnivariateLastPointDefaultResponse>;
export declare function _detectUnivariateLastPointDeserialize(result: DetectUnivariateLastPoint200Response | DetectUnivariateLastPointDefaultResponse): Promise<UnivariateUnivariateLastDetectionResult>;
/**
 * This operation generates a model using the points that you sent into the API,
 * and based on all data to determine whether the last point is anomalous.
 */
export declare function detectUnivariateLastPoint(context: Client, options: UnivariateUnivariateDetectionOptions, options?: UnivariateDetectUnivariateLastPointOptions): Promise<UnivariateUnivariateLastDetectionResult>;
export declare function _detectUnivariateChangePointSend(context: Client, options: UnivariateUnivariateChangePointDetectionOptions, options?: UnivariateDetectUnivariateChangePointOptions): StreamableMethod<DetectUnivariateChangePoint200Response | DetectUnivariateChangePointDefaultResponse>;
export declare function _detectUnivariateChangePointDeserialize(result: DetectUnivariateChangePoint200Response | DetectUnivariateChangePointDefaultResponse): Promise<UnivariateUnivariateChangePointDetectionResult>;
/** Evaluate change point score of every series point */
export declare function detectUnivariateChangePoint(context: Client, options: UnivariateUnivariateChangePointDetectionOptions, options?: UnivariateDetectUnivariateChangePointOptions): Promise<UnivariateUnivariateChangePointDetectionResult>;
//# sourceMappingURL=index.d.ts.map