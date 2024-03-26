import { MultivariateMultivariateDetectionResult, MultivariateMultivariateBatchDetectionOptions, MultivariateModelInfo, MultivariateAnomalyDetectionModel, MultivariateModelList, MultivariateMultivariateLastDetectionOptions, MultivariateMultivariateLastDetectionResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AnomalyDetectorContext as Client, DeleteMultivariateModel204Response, DeleteMultivariateModelDefaultResponse, DetectMultivariateBatchAnomaly202Response, DetectMultivariateBatchAnomalyDefaultResponse, DetectMultivariateLastAnomaly200Response, DetectMultivariateLastAnomalyDefaultResponse, GetMultivariateBatchDetectionResult200Response, GetMultivariateBatchDetectionResultDefaultResponse, GetMultivariateModel200Response, GetMultivariateModelDefaultResponse, ListMultivariateModels200Response, ListMultivariateModelsDefaultResponse, TrainMultivariateModel201Response, TrainMultivariateModelDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { MultivariateGetMultivariateBatchDetectionResultOptions, MultivariateTrainMultivariateModelOptions, MultivariateListMultivariateModelsOptions, MultivariateDeleteMultivariateModelOptions, MultivariateGetMultivariateModelOptions, MultivariateDetectMultivariateBatchAnomalyOptions, MultivariateDetectMultivariateLastAnomalyOptions } from "../../models/options.js";
export declare function _getMultivariateBatchDetectionResultSend(context: Client, resultId: string, options?: MultivariateGetMultivariateBatchDetectionResultOptions): StreamableMethod<GetMultivariateBatchDetectionResult200Response | GetMultivariateBatchDetectionResultDefaultResponse>;
export declare function _getMultivariateBatchDetectionResultDeserialize(result: GetMultivariateBatchDetectionResult200Response | GetMultivariateBatchDetectionResultDefaultResponse): Promise<MultivariateMultivariateDetectionResult>;
/**
 * For asynchronous inference, get multivariate anomaly detection result based on
 * resultId returned by the BatchDetectAnomaly api.
 */
export declare function getMultivariateBatchDetectionResult(context: Client, resultId: string, options?: MultivariateGetMultivariateBatchDetectionResultOptions): Promise<MultivariateMultivariateDetectionResult>;
export declare function _trainMultivariateModelSend(context: Client, modelInfo: MultivariateModelInfo, options?: MultivariateTrainMultivariateModelOptions): StreamableMethod<TrainMultivariateModel201Response | TrainMultivariateModelDefaultResponse>;
export declare function _trainMultivariateModelDeserialize(result: TrainMultivariateModel201Response | TrainMultivariateModelDefaultResponse): Promise<MultivariateAnomalyDetectionModel>;
/**
 * Create and train a multivariate anomaly detection model. The request must
 * include a source parameter to indicate an externally accessible Azure blob
 * storage URI.There are two types of data input: An URI pointed to an Azure blob
 * storage folder which contains multiple CSV files, and each CSV file contains
 * two columns, timestamp and variable. Another type of input is an URI pointed to
 * a CSV file in Azure blob storage, which contains all the variables and a
 * timestamp column.
 */
export declare function trainMultivariateModel(context: Client, modelInfo: MultivariateModelInfo, options?: MultivariateTrainMultivariateModelOptions): Promise<MultivariateAnomalyDetectionModel>;
export declare function _listMultivariateModelsSend(context: Client, options?: MultivariateListMultivariateModelsOptions): StreamableMethod<ListMultivariateModels200Response | ListMultivariateModelsDefaultResponse>;
export declare function _listMultivariateModelsDeserialize(result: ListMultivariateModels200Response | ListMultivariateModelsDefaultResponse): Promise<MultivariateModelList>;
/** List models of a resource. */
export declare function listMultivariateModels(context: Client, options?: MultivariateListMultivariateModelsOptions): PagedAsyncIterableIterator<MultivariateAnomalyDetectionModel>;
export declare function _deleteMultivariateModelSend(context: Client, modelId: string, options?: MultivariateDeleteMultivariateModelOptions): StreamableMethod<DeleteMultivariateModel204Response | DeleteMultivariateModelDefaultResponse>;
export declare function _deleteMultivariateModelDeserialize(result: DeleteMultivariateModel204Response | DeleteMultivariateModelDefaultResponse): Promise<void>;
/** Delete an existing multivariate model according to the modelId */
export declare function deleteMultivariateModel(context: Client, modelId: string, options?: MultivariateDeleteMultivariateModelOptions): Promise<void>;
export declare function _getMultivariateModelSend(context: Client, modelId: string, options?: MultivariateGetMultivariateModelOptions): StreamableMethod<GetMultivariateModel200Response | GetMultivariateModelDefaultResponse>;
export declare function _getMultivariateModelDeserialize(result: GetMultivariateModel200Response | GetMultivariateModelDefaultResponse): Promise<MultivariateAnomalyDetectionModel>;
/**
 * Get detailed information of multivariate model, including the training status
 * and variables used in the model.
 */
export declare function getMultivariateModel(context: Client, modelId: string, options?: MultivariateGetMultivariateModelOptions): Promise<MultivariateAnomalyDetectionModel>;
export declare function _detectMultivariateBatchAnomalySend(context: Client, modelId: string, options: MultivariateMultivariateBatchDetectionOptions, options?: MultivariateDetectMultivariateBatchAnomalyOptions): StreamableMethod<DetectMultivariateBatchAnomaly202Response | DetectMultivariateBatchAnomalyDefaultResponse>;
export declare function _detectMultivariateBatchAnomalyDeserialize(result: DetectMultivariateBatchAnomaly202Response | DetectMultivariateBatchAnomalyDefaultResponse): Promise<MultivariateMultivariateDetectionResult>;
/**
 * Submit multivariate anomaly detection task with the modelId of trained model
 * and inference data, the input schema should be the same with the training
 * request. The request will complete asynchronously and return a resultId to
 * query the detection result.The request should be a source link to indicate an
 * externally accessible Azure storage Uri, either pointed to an Azure blob
 * storage folder, or pointed to a CSV file in Azure blob storage.
 */
export declare function detectMultivariateBatchAnomaly(context: Client, modelId: string, options: MultivariateMultivariateBatchDetectionOptions, options?: MultivariateDetectMultivariateBatchAnomalyOptions): Promise<MultivariateMultivariateDetectionResult>;
export declare function _detectMultivariateLastAnomalySend(context: Client, modelId: string, options: MultivariateMultivariateLastDetectionOptions, options?: MultivariateDetectMultivariateLastAnomalyOptions): StreamableMethod<DetectMultivariateLastAnomaly200Response | DetectMultivariateLastAnomalyDefaultResponse>;
export declare function _detectMultivariateLastAnomalyDeserialize(result: DetectMultivariateLastAnomaly200Response | DetectMultivariateLastAnomalyDefaultResponse): Promise<MultivariateMultivariateLastDetectionResult>;
/**
 * Submit multivariate anomaly detection task with the modelId of trained model
 * and inference data, and the inference data should be put into request body in a
 * JSON format. The request will complete synchronously and return the detection
 * immediately in the response body.
 */
export declare function detectMultivariateLastAnomaly(context: Client, modelId: string, options: MultivariateMultivariateLastDetectionOptions, options?: MultivariateDetectMultivariateLastAnomalyOptions): Promise<MultivariateMultivariateLastDetectionResult>;
//# sourceMappingURL=index.d.ts.map