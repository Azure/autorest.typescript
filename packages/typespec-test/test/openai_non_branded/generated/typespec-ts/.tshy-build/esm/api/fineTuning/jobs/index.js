// Licensed under the MIT license.
import { isUnexpected, } from "../../../rest/index.js";
import { operationOptionsToRequestParameters, createRestError, } from "@typespec/ts-http-runtime";
export function _createSend(context, job, options = { requestOptions: {} }) {
    return context
        .path("/fine_tuning/jobs")
        .post({
        ...operationOptionsToRequestParameters(options),
        body: {
            training_file: job["trainingFile"],
            validation_file: job["validationFile"],
            model: job["model"],
            hyperparameters: !job.hyperparameters
                ? undefined
                : { n_epochs: job.hyperparameters?.["nEpochs"] },
            suffix: job["suffix"],
        },
    });
}
export async function _createDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        id: result.body["id"],
        object: result.body["object"],
        createdAt: new Date(result.body["created_at"]),
        finishedAt: result.body["finished_at"] === null
            ? null
            : new Date(result.body["finished_at"]),
        model: result.body["model"],
        fineTunedModel: result.body["fine_tuned_model"],
        organizationId: result.body["organization_id"],
        status: result.body["status"],
        hyperparameters: { nEpochs: result.body.hyperparameters["n_epochs"] },
        trainingFile: result.body["training_file"],
        validationFile: result.body["validation_file"],
        resultFiles: result.body["result_files"],
        trainedTokens: result.body["trained_tokens"],
        error: result.body.error === null
            ? null
            : {
                message: result.body.error["message"],
                code: result.body.error["code"],
                param: result.body.error["param"],
            },
    };
}
/**
 * Creates a job that fine-tunes a specified model from a given dataset.
 *
 * Response includes details of the enqueued job including job status and the name of the
 * fine-tuned models once complete.
 *
 * [Learn more about fine-tuning](/docs/guides/fine-tuning)
 */
export async function create(context, job, options = { requestOptions: {} }) {
    const result = await _createSend(context, job, options);
    return _createDeserialize(result);
}
export function _listSend(context, options = { requestOptions: {} }) {
    return context
        .path("/fine_tuning/jobs")
        .get({
        ...operationOptionsToRequestParameters(options),
        queryParameters: { after: options?.after, limit: options?.limit },
    });
}
export async function _listDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        object: result.body["object"],
        data: result.body["data"].map((p) => ({
            id: p["id"],
            object: p["object"],
            createdAt: new Date(p["created_at"]),
            finishedAt: p["finished_at"] === null ? null : new Date(p["finished_at"]),
            model: p["model"],
            fineTunedModel: p["fine_tuned_model"],
            organizationId: p["organization_id"],
            status: p["status"],
            hyperparameters: { nEpochs: p.hyperparameters["n_epochs"] },
            trainingFile: p["training_file"],
            validationFile: p["validation_file"],
            resultFiles: p["result_files"],
            trainedTokens: p["trained_tokens"],
            error: p.error === null
                ? null
                : {
                    message: p.error["message"],
                    code: p.error["code"],
                    param: p.error["param"],
                },
        })),
        hasMore: result.body["has_more"],
    };
}
export async function list(context, options = { requestOptions: {} }) {
    const result = await _listSend(context, options);
    return _listDeserialize(result);
}
export function _retrieveSend(context, fineTuningJobId, options = { requestOptions: {} }) {
    return context
        .path("/fine_tuning/jobs/{fine_tuning_job_id}", fineTuningJobId)
        .get({ ...operationOptionsToRequestParameters(options) });
}
export async function _retrieveDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        id: result.body["id"],
        object: result.body["object"],
        createdAt: new Date(result.body["created_at"]),
        finishedAt: result.body["finished_at"] === null
            ? null
            : new Date(result.body["finished_at"]),
        model: result.body["model"],
        fineTunedModel: result.body["fine_tuned_model"],
        organizationId: result.body["organization_id"],
        status: result.body["status"],
        hyperparameters: { nEpochs: result.body.hyperparameters["n_epochs"] },
        trainingFile: result.body["training_file"],
        validationFile: result.body["validation_file"],
        resultFiles: result.body["result_files"],
        trainedTokens: result.body["trained_tokens"],
        error: result.body.error === null
            ? null
            : {
                message: result.body.error["message"],
                code: result.body.error["code"],
                param: result.body.error["param"],
            },
    };
}
export async function retrieve(context, fineTuningJobId, options = { requestOptions: {} }) {
    const result = await _retrieveSend(context, fineTuningJobId, options);
    return _retrieveDeserialize(result);
}
export function _listEventsSend(context, fineTuningJobId, options = { requestOptions: {} }) {
    return context
        .path("/fine_tuning/jobs/{fine_tuning_job_id}/events", fineTuningJobId)
        .get({
        ...operationOptionsToRequestParameters(options),
        queryParameters: { after: options?.after, limit: options?.limit },
    });
}
export async function _listEventsDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        object: result.body["object"],
        data: result.body["data"].map((p) => ({
            id: p["id"],
            object: p["object"],
            createdAt: new Date(p["created_at"]),
            level: p["level"],
            message: p["message"],
        })),
    };
}
export async function listEvents(context, fineTuningJobId, options = { requestOptions: {} }) {
    const result = await _listEventsSend(context, fineTuningJobId, options);
    return _listEventsDeserialize(result);
}
export function _cancelSend(context, fineTuningJobId, options = { requestOptions: {} }) {
    return context
        .path("/fine_tuning/jobs/{fine_tuning_job_id}/cancel", fineTuningJobId)
        .post({ ...operationOptionsToRequestParameters(options) });
}
export async function _cancelDeserialize(result) {
    if (isUnexpected(result)) {
        throw createRestError(result);
    }
    return {
        id: result.body["id"],
        object: result.body["object"],
        createdAt: new Date(result.body["created_at"]),
        finishedAt: result.body["finished_at"] === null
            ? null
            : new Date(result.body["finished_at"]),
        model: result.body["model"],
        fineTunedModel: result.body["fine_tuned_model"],
        organizationId: result.body["organization_id"],
        status: result.body["status"],
        hyperparameters: { nEpochs: result.body.hyperparameters["n_epochs"] },
        trainingFile: result.body["training_file"],
        validationFile: result.body["validation_file"],
        resultFiles: result.body["result_files"],
        trainedTokens: result.body["trained_tokens"],
        error: result.body.error === null
            ? null
            : {
                message: result.body.error["message"],
                code: result.body.error["code"],
                param: result.body.error["param"],
            },
    };
}
export async function cancel(context, fineTuningJobId, options = { requestOptions: {} }) {
    const result = await _cancelSend(context, fineTuningJobId, options);
    return _cancelDeserialize(result);
}
//# sourceMappingURL=index.js.map