// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
import { getMultivariateBatchDetectionResult, trainMultivariateModel, listMultivariateModels, deleteMultivariateModel, getMultivariateModel, detectMultivariateBatchAnomaly, detectMultivariateLastAnomaly, } from "../../api/multivariate/index.js";
export function getMultivariate(context) {
    return {
        getMultivariateBatchDetectionResult: (resultId, options) => getMultivariateBatchDetectionResult(context, resultId, options),
        trainMultivariateModel: (modelInfo, options) => trainMultivariateModel(context, modelInfo, options),
        listMultivariateModels: (options) => listMultivariateModels(context, options),
        deleteMultivariateModel: (modelId, options) => deleteMultivariateModel(context, modelId, options),
        getMultivariateModel: (modelId, options) => getMultivariateModel(context, modelId, options),
        detectMultivariateBatchAnomaly: (modelId, options, options) => detectMultivariateBatchAnomaly(context, modelId, options, options),
        detectMultivariateLastAnomaly: (modelId, options, options) => detectMultivariateLastAnomaly(context, modelId, options, options),
    };
}
export function getMultivariateOperations(context) {
    return {
        ...getMultivariate(context),
    };
}
//# sourceMappingURL=index.js.map