import { AnomalyDetectorContext } from "../../api/AnomalyDetectorContext.js";
import { MultivariateMultivariateDetectionResult, MultivariateMultivariateBatchDetectionOptions, MultivariateModelInfo, MultivariateAnomalyDetectionModel, MultivariateMultivariateLastDetectionOptions, MultivariateMultivariateLastDetectionResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { MultivariateGetMultivariateBatchDetectionResultOptions, MultivariateTrainMultivariateModelOptions, MultivariateListMultivariateModelsOptions, MultivariateDeleteMultivariateModelOptions, MultivariateGetMultivariateModelOptions, MultivariateDetectMultivariateBatchAnomalyOptions, MultivariateDetectMultivariateLastAnomalyOptions } from "../../models/options.js";
export interface MultivariateOperations {
    getMultivariateBatchDetectionResult: (resultId: string, options?: MultivariateGetMultivariateBatchDetectionResultOptions) => Promise<MultivariateMultivariateDetectionResult>;
    trainMultivariateModel: (modelInfo: MultivariateModelInfo, options?: MultivariateTrainMultivariateModelOptions) => Promise<MultivariateAnomalyDetectionModel>;
    listMultivariateModels: (options?: MultivariateListMultivariateModelsOptions) => PagedAsyncIterableIterator<MultivariateAnomalyDetectionModel>;
    deleteMultivariateModel: (modelId: string, options?: MultivariateDeleteMultivariateModelOptions) => Promise<void>;
    getMultivariateModel: (modelId: string, options?: MultivariateGetMultivariateModelOptions) => Promise<MultivariateAnomalyDetectionModel>;
    detectMultivariateBatchAnomaly: (modelId: string, options?: MultivariateMultivariateBatchDetectionOptions, options?: MultivariateDetectMultivariateBatchAnomalyOptions) => Promise<MultivariateMultivariateDetectionResult>;
    detectMultivariateLastAnomaly: (modelId: string, options?: MultivariateMultivariateLastDetectionOptions, options?: MultivariateDetectMultivariateLastAnomalyOptions) => Promise<MultivariateMultivariateLastDetectionResult>;
}
export declare function getMultivariate(context: AnomalyDetectorContext): {
    getMultivariateBatchDetectionResult: (resultId: string, options?: MultivariateGetMultivariateBatchDetectionResultOptions) => Promise<MultivariateMultivariateDetectionResult>;
    trainMultivariateModel: (modelInfo: MultivariateModelInfo, options?: MultivariateTrainMultivariateModelOptions) => Promise<MultivariateAnomalyDetectionModel>;
    listMultivariateModels: (options?: MultivariateListMultivariateModelsOptions) => PagedAsyncIterableIterator<MultivariateAnomalyDetectionModel, MultivariateAnomalyDetectionModel[], import("../../models/pagingTypes.js").PageSettings>;
    deleteMultivariateModel: (modelId: string, options?: MultivariateDeleteMultivariateModelOptions) => Promise<void>;
    getMultivariateModel: (modelId: string, options?: MultivariateGetMultivariateModelOptions) => Promise<MultivariateAnomalyDetectionModel>;
    detectMultivariateBatchAnomaly: (modelId: string, options?: MultivariateMultivariateBatchDetectionOptions, options?: MultivariateDetectMultivariateBatchAnomalyOptions) => Promise<MultivariateMultivariateDetectionResult>;
    detectMultivariateLastAnomaly: (modelId: string, options?: MultivariateMultivariateLastDetectionOptions, options?: MultivariateDetectMultivariateLastAnomalyOptions) => Promise<MultivariateMultivariateLastDetectionResult>;
};
export declare function getMultivariateOperations(context: AnomalyDetectorContext): MultivariateOperations;
//# sourceMappingURL=index.d.ts.map