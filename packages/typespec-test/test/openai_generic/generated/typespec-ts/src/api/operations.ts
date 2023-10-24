// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateTranscriptionRequest,
  CreateTranscriptionResponse,
  CreateTranslationRequest,
  CreateTranslationResponse,
  CreateChatCompletionRequest,
  CreateChatCompletionResponse,
  CreateFineTuningJobRequest,
  FineTuningJob,
  ListPaginatedFineTuningJobsResponse,
  ListFineTuningJobEventsResponse,
  CreateCompletionRequest,
  CreateCompletionResponse,
  CreateEditRequest,
  CreateEditResponse,
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
  ListFilesResponse,
  OpenAIFile,
  CreateFileRequest,
  DeleteFileResponse,
  CreateFineTuneRequest,
  FineTune,
  ListFineTunesResponse,
  ListFineTuneEventsResponse,
  ListModelsResponse,
  Model,
  DeleteModelResponse,
  CreateImageRequest,
  ImagesResponse,
  CreateImageEditRequest,
  CreateImageVariationRequest,
  CreateModerationRequest,
  CreateModerationResponse,
} from "../models/models.js";
import {
  CancelFineTune200Response,
  CancelFineTuneDefaultResponse,
  CancelFineTuningJob200Response,
  CancelFineTuningJobDefaultResponse,
  CreateChatCompletion200Response,
  CreateChatCompletionDefaultResponse,
  CreateCompletion200Response,
  CreateCompletionDefaultResponse,
  CreateEdit200Response,
  CreateEditDefaultResponse,
  CreateEmbedding200Response,
  CreateEmbeddingDefaultResponse,
  CreateFile200Response,
  CreateFileDefaultResponse,
  CreateFineTune200Response,
  CreateFineTuneDefaultResponse,
  CreateFineTuningJob200Response,
  CreateFineTuningJobDefaultResponse,
  CreateImage200Response,
  CreateImageDefaultResponse,
  CreateImageEdit200Response,
  CreateImageEditDefaultResponse,
  CreateImageVariation200Response,
  CreateImageVariationDefaultResponse,
  CreateModeration200Response,
  CreateModerationDefaultResponse,
  CreateTranscription200Response,
  CreateTranscriptionDefaultResponse,
  CreateTranslation200Response,
  CreateTranslationDefaultResponse,
  DeleteFile200Response,
  DeleteFileDefaultResponse,
  DeleteOperation200Response,
  DeleteOperationDefaultResponse,
  DownloadFile200Response,
  DownloadFileDefaultResponse,
  isUnexpected,
  ListFiles200Response,
  ListFilesDefaultResponse,
  ListFineTuneEvents200Response,
  ListFineTuneEventsDefaultResponse,
  ListFineTunes200Response,
  ListFineTunesDefaultResponse,
  ListFineTuningEvents200Response,
  ListFineTuningEventsDefaultResponse,
  ListModels200Response,
  ListModelsDefaultResponse,
  ListPaginatedFineTuningJobs200Response,
  ListPaginatedFineTuningJobsDefaultResponse,
  OpenAIContext as Client,
  Retrieve200Response,
  RetrieveDefaultResponse,
  RetrieveFile200Response,
  RetrieveFileDefaultResponse,
  RetrieveFineTune200Response,
  RetrieveFineTuneDefaultResponse,
  RetrieveFineTuningJob200Response,
  RetrieveFineTuningJobDefaultResponse,
} from "../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { stringToUint8Array } from "@azure/core-util";
import {
  CreateTranscriptionOptions,
  CreateTranslationOptions,
  CreateChatCompletionOptions,
  CreateFineTuningJobOptions,
  ListPaginatedFineTuningJobsOptions,
  RetrieveFineTuningJobOptions,
  ListFineTuningEventsOptions,
  CancelFineTuningJobOptions,
  CreateCompletionOptions,
  CreateEditOptions,
  CreateEmbeddingOptions,
  ListFilesOptions,
  CreateFileOptions,
  RetrieveFileOptions,
  DeleteFileOptions,
  DownloadFileOptions,
  CreateFineTuneOptions,
  ListFineTunesOptions,
  RetrieveFineTuneOptions,
  ListFineTuneEventsOptions,
  CancelFineTuneOptions,
  ListModelsOptions,
  RetrieveOptions,
  DeleteOptions,
  CreateImageOptions,
  CreateImageEditOptions,
  CreateImageVariationOptions,
  CreateModerationOptions,
} from "../models/options.js";

export function _createTranscriptionSend(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: CreateTranscriptionOptions = { requestOptions: {} }
): StreamableMethod<
  CreateTranscription200Response | CreateTranscriptionDefaultResponse
> {
  return context
    .path("/audio/transcriptions")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: audio["file"],
        model: audio["model"],
        prompt: audio["prompt"],
        response_format: audio["responseFormat"],
        temperature: audio["temperature"],
        language: audio["language"],
      },
    });
}

export async function _createTranscriptionDeserialize(
  result: CreateTranscription200Response | CreateTranscriptionDefaultResponse
): Promise<CreateTranscriptionResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    text: result.body["text"],
  };
}

export async function createTranscription(
  context: Client,
  audio: CreateTranscriptionRequest,
  options: CreateTranscriptionOptions = { requestOptions: {} }
): Promise<CreateTranscriptionResponse> {
  const result = await _createTranscriptionSend(context, audio, options);
  return _createTranscriptionDeserialize(result);
}

export function _createTranslationSend(
  context: Client,
  audio: CreateTranslationRequest,
  options: CreateTranslationOptions = { requestOptions: {} }
): StreamableMethod<
  CreateTranslation200Response | CreateTranslationDefaultResponse
> {
  return context
    .path("/audio/translations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        file: audio["file"],
        model: audio["model"],
        prompt: audio["prompt"],
        response_format: audio["responseFormat"],
        temperature: audio["temperature"],
      },
    });
}

export async function _createTranslationDeserialize(
  result: CreateTranslation200Response | CreateTranslationDefaultResponse
): Promise<CreateTranslationResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    text: result.body["text"],
  };
}

export async function createTranslation(
  context: Client,
  audio: CreateTranslationRequest,
  options: CreateTranslationOptions = { requestOptions: {} }
): Promise<CreateTranslationResponse> {
  const result = await _createTranslationSend(context, audio, options);
  return _createTranslationDeserialize(result);
}

export function _createChatCompletionSend(
  context: Client,
  body: CreateChatCompletionRequest,
  options: CreateChatCompletionOptions = { requestOptions: {} }
): StreamableMethod<
  CreateChatCompletion200Response | CreateChatCompletionDefaultResponse
> {
  return context
    .path("/chat/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: body["model"],
        messages: (body["messages"] ?? []).map((p) => ({
          role: p["role"],
          content: p["content"],
          name: p["name"],
          function_call: !p.functionCall
            ? undefined
            : {
                name: p.functionCall?.["name"],
                arguments: p.functionCall?.["arguments"],
              },
        })),
        functions: (body["functions"] ?? []).map((p) => ({
          name: p["name"],
          description: p["description"],
          parameters: p["parameters"],
        })),
        function_call: body["functionCall"],
        temperature: body["temperature"],
        top_p: body["topP"],
        n: body["n"],
        max_tokens: body["maxTokens"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        logit_bias: body["logitBias"],
        user: body["user"],
        stream: body["stream"],
      },
    });
}

export async function _createChatCompletionDeserialize(
  result: CreateChatCompletion200Response | CreateChatCompletionDefaultResponse
): Promise<CreateChatCompletionResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created: new Date(result.body["created"]),
    model: result.body["model"],
    choices: (result.body["choices"] ?? []).map((p) => ({
      index: p["index"],
      message: {
        role: p.message["role"] as any,
        content: p.message["content"],
        functionCall: !p.message.function_call
          ? undefined
          : {
              name: p.message.function_call?.["name"],
              arguments: p.message.function_call?.["arguments"],
            },
      },
      finishReason: p["finish_reason"] as any,
    })),
    usage: !result.body.usage
      ? undefined
      : {
          promptTokens: result.body.usage?.["prompt_tokens"],
          completionTokens: result.body.usage?.["completion_tokens"],
          totalTokens: result.body.usage?.["total_tokens"],
        },
  };
}

export async function createChatCompletion(
  context: Client,
  body: CreateChatCompletionRequest,
  options: CreateChatCompletionOptions = { requestOptions: {} }
): Promise<CreateChatCompletionResponse> {
  const result = await _createChatCompletionSend(context, body, options);
  return _createChatCompletionDeserialize(result);
}

export function _createFineTuningJobSend(
  context: Client,
  job: CreateFineTuningJobRequest,
  options: CreateFineTuningJobOptions = { requestOptions: {} }
): StreamableMethod<
  CreateFineTuningJob200Response | CreateFineTuningJobDefaultResponse
> {
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

export async function _createFineTuningJobDeserialize(
  result: CreateFineTuningJob200Response | CreateFineTuningJobDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    finishedAt:
      result.body["finished_at"] === null
        ? null
        : new Date(result.body["finished_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparameters: {
      nEpochs: result.body.hyperparameters["n_epochs"] as any,
    },
    trainingFile: result.body["training_file"],
    validationFile: result.body["validation_file"],
    resultFiles: result.body["result_files"],
    trainedTokens: result.body["trained_tokens"],
    error:
      result.body.error === null
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
export async function createFineTuningJob(
  context: Client,
  job: CreateFineTuningJobRequest,
  options: CreateFineTuningJobOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _createFineTuningJobSend(context, job, options);
  return _createFineTuningJobDeserialize(result);
}

export function _listPaginatedFineTuningJobsSend(
  context: Client,
  options: ListPaginatedFineTuningJobsOptions = { requestOptions: {} }
): StreamableMethod<
  | ListPaginatedFineTuningJobs200Response
  | ListPaginatedFineTuningJobsDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs")
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listPaginatedFineTuningJobsDeserialize(
  result:
    | ListPaginatedFineTuningJobs200Response
    | ListPaginatedFineTuningJobsDefaultResponse
): Promise<ListPaginatedFineTuningJobsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      finishedAt: p["finished_at"] === null ? null : new Date(p["finished_at"]),
      model: p["model"],
      fineTunedModel: p["fine_tuned_model"],
      organizationId: p["organization_id"],
      status: p["status"] as any,
      hyperparameters: { nEpochs: p.hyperparameters["n_epochs"] as any },
      trainingFile: p["training_file"],
      validationFile: p["validation_file"],
      resultFiles: p["result_files"],
      trainedTokens: p["trained_tokens"],
      error:
        p.error === null
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

export async function listPaginatedFineTuningJobs(
  context: Client,
  options: ListPaginatedFineTuningJobsOptions = { requestOptions: {} }
): Promise<ListPaginatedFineTuningJobsResponse> {
  const result = await _listPaginatedFineTuningJobsSend(context, options);
  return _listPaginatedFineTuningJobsDeserialize(result);
}

export function _retrieveFineTuningJobSend(
  context: Client,
  fineTuningJobId: string,
  options: RetrieveFineTuningJobOptions = { requestOptions: {} }
): StreamableMethod<
  RetrieveFineTuningJob200Response | RetrieveFineTuningJobDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}", fineTuningJobId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveFineTuningJobDeserialize(
  result:
    | RetrieveFineTuningJob200Response
    | RetrieveFineTuningJobDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    finishedAt:
      result.body["finished_at"] === null
        ? null
        : new Date(result.body["finished_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparameters: {
      nEpochs: result.body.hyperparameters["n_epochs"] as any,
    },
    trainingFile: result.body["training_file"],
    validationFile: result.body["validation_file"],
    resultFiles: result.body["result_files"],
    trainedTokens: result.body["trained_tokens"],
    error:
      result.body.error === null
        ? null
        : {
            message: result.body.error["message"],
            code: result.body.error["code"],
            param: result.body.error["param"],
          },
  };
}

export async function retrieveFineTuningJob(
  context: Client,
  fineTuningJobId: string,
  options: RetrieveFineTuningJobOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _retrieveFineTuningJobSend(
    context,
    fineTuningJobId,
    options
  );
  return _retrieveFineTuningJobDeserialize(result);
}

export function _listFineTuningEventsSend(
  context: Client,
  fineTuningJobId: string,
  options: ListFineTuningEventsOptions = { requestOptions: {} }
): StreamableMethod<
  ListFineTuningEvents200Response | ListFineTuningEventsDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/events", fineTuningJobId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { after: options?.after, limit: options?.limit },
    });
}

export async function _listFineTuningEventsDeserialize(
  result: ListFineTuningEvents200Response | ListFineTuningEventsDefaultResponse
): Promise<ListFineTuningJobEventsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"] as any,
      message: p["message"],
    })),
  };
}

export async function listFineTuningEvents(
  context: Client,
  fineTuningJobId: string,
  options: ListFineTuningEventsOptions = { requestOptions: {} }
): Promise<ListFineTuningJobEventsResponse> {
  const result = await _listFineTuningEventsSend(
    context,
    fineTuningJobId,
    options
  );
  return _listFineTuningEventsDeserialize(result);
}

export function _cancelFineTuningJobSend(
  context: Client,
  fineTuningJobId: string,
  options: CancelFineTuningJobOptions = { requestOptions: {} }
): StreamableMethod<
  CancelFineTuningJob200Response | CancelFineTuningJobDefaultResponse
> {
  return context
    .path("/fine_tuning/jobs/{fine_tuning_job_id}/cancel", fineTuningJobId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelFineTuningJobDeserialize(
  result: CancelFineTuningJob200Response | CancelFineTuningJobDefaultResponse
): Promise<FineTuningJob> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    finishedAt:
      result.body["finished_at"] === null
        ? null
        : new Date(result.body["finished_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparameters: {
      nEpochs: result.body.hyperparameters["n_epochs"] as any,
    },
    trainingFile: result.body["training_file"],
    validationFile: result.body["validation_file"],
    resultFiles: result.body["result_files"],
    trainedTokens: result.body["trained_tokens"],
    error:
      result.body.error === null
        ? null
        : {
            message: result.body.error["message"],
            code: result.body.error["code"],
            param: result.body.error["param"],
          },
  };
}

export async function cancelFineTuningJob(
  context: Client,
  fineTuningJobId: string,
  options: CancelFineTuningJobOptions = { requestOptions: {} }
): Promise<FineTuningJob> {
  const result = await _cancelFineTuningJobSend(
    context,
    fineTuningJobId,
    options
  );
  return _cancelFineTuningJobDeserialize(result);
}

export function _createCompletionSend(
  context: Client,
  body: CreateCompletionRequest,
  options: CreateCompletionOptions = { requestOptions: {} }
): StreamableMethod<
  CreateCompletion200Response | CreateCompletionDefaultResponse
> {
  return context
    .path("/completions")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: body["model"],
        prompt: body["prompt"],
        suffix: body["suffix"],
        temperature: body["temperature"],
        top_p: body["topP"],
        n: body["n"],
        max_tokens: body["maxTokens"],
        stop: body["stop"],
        presence_penalty: body["presencePenalty"],
        frequency_penalty: body["frequencyPenalty"],
        logit_bias: body["logitBias"],
        user: body["user"],
        stream: body["stream"],
        logprobs: body["logprobs"],
        echo: body["echo"],
        best_of: body["bestOf"],
      },
    });
}

export async function _createCompletionDeserialize(
  result: CreateCompletion200Response | CreateCompletionDefaultResponse
): Promise<CreateCompletionResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created: new Date(result.body["created"]),
    model: result.body["model"],
    choices: (result.body["choices"] ?? []).map((p) => ({
      index: p["index"],
      text: p["text"],
      logprobs:
        p.logprobs === null
          ? null
          : {
              tokens: p.logprobs["tokens"],
              tokenLogprobs: p.logprobs["token_logprobs"],
              topLogprobs: p.logprobs["top_logprobs"],
              textOffset: p.logprobs["text_offset"],
            },
      finishReason: p["finish_reason"] as any,
    })),
    usage: !result.body.usage
      ? undefined
      : {
          promptTokens: result.body.usage?.["prompt_tokens"],
          completionTokens: result.body.usage?.["completion_tokens"],
          totalTokens: result.body.usage?.["total_tokens"],
        },
  };
}

export async function createCompletion(
  context: Client,
  body: CreateCompletionRequest,
  options: CreateCompletionOptions = { requestOptions: {} }
): Promise<CreateCompletionResponse> {
  const result = await _createCompletionSend(context, body, options);
  return _createCompletionDeserialize(result);
}

export function _createEditSend(
  context: Client,
  edit: CreateEditRequest,
  options: CreateEditOptions = { requestOptions: {} }
): StreamableMethod<CreateEdit200Response | CreateEditDefaultResponse> {
  return context
    .path("/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: edit["model"],
        input: edit["input"],
        instruction: edit["instruction"],
        n: edit["n"],
        temperature: edit["temperature"],
        top_p: edit["topP"],
      },
    });
}

export async function _createEditDeserialize(
  result: CreateEdit200Response | CreateEditDefaultResponse
): Promise<CreateEditResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    created: new Date(result.body["created"]),
    choices: (result.body["choices"] ?? []).map((p) => ({
      text: p["text"],
      index: p["index"],
      finishReason: p["finish_reason"] as any,
    })),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      completionTokens: result.body.usage["completion_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

export async function createEdit(
  context: Client,
  edit: CreateEditRequest,
  options: CreateEditOptions = { requestOptions: {} }
): Promise<CreateEditResponse> {
  const result = await _createEditSend(context, edit, options);
  return _createEditDeserialize(result);
}

export function _createEmbeddingSend(
  context: Client,
  embedding: CreateEmbeddingRequest,
  options: CreateEmbeddingOptions = { requestOptions: {} }
): StreamableMethod<
  CreateEmbedding200Response | CreateEmbeddingDefaultResponse
> {
  return context
    .path("/embeddings")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        model: embedding["model"],
        input: embedding["input"],
        user: embedding["user"],
      },
    });
}

export async function _createEmbeddingDeserialize(
  result: CreateEmbedding200Response | CreateEmbeddingDefaultResponse
): Promise<CreateEmbeddingResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    model: result.body["model"],
    data: (result.body["data"] ?? []).map((p) => ({
      index: p["index"],
      object: p["object"],
      embedding: p["embedding"],
    })),
    usage: {
      promptTokens: result.body.usage["prompt_tokens"],
      totalTokens: result.body.usage["total_tokens"],
    },
  };
}

export async function createEmbedding(
  context: Client,
  embedding: CreateEmbeddingRequest,
  options: CreateEmbeddingOptions = { requestOptions: {} }
): Promise<CreateEmbeddingResponse> {
  const result = await _createEmbeddingSend(context, embedding, options);
  return _createEmbeddingDeserialize(result);
}

export function _listFilesSend(
  context: Client,
  options: ListFilesOptions = { requestOptions: {} }
): StreamableMethod<ListFiles200Response | ListFilesDefaultResponse> {
  return context
    .path("/files")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listFilesDeserialize(
  result: ListFiles200Response | ListFilesDefaultResponse
): Promise<ListFilesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
  };
}

export async function listFiles(
  context: Client,
  options: ListFilesOptions = { requestOptions: {} }
): Promise<ListFilesResponse> {
  const result = await _listFilesSend(context, options);
  return _listFilesDeserialize(result);
}

export function _createFileSend(
  context: Client,
  file: CreateFileRequest,
  options: CreateFileOptions = { requestOptions: {} }
): StreamableMethod<CreateFile200Response | CreateFileDefaultResponse> {
  return context
    .path("/files")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: { file: file["file"], purpose: file["purpose"] },
    });
}

export async function _createFileDeserialize(
  result: CreateFile200Response | CreateFileDefaultResponse
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    bytes: result.body["bytes"],
    createdAt: new Date(result.body["createdAt"]),
    filename: result.body["filename"],
    purpose: result.body["purpose"],
    status: result.body["status"] as any,
    statusDetails: result.body["status_details"],
  };
}

export async function createFile(
  context: Client,
  file: CreateFileRequest,
  options: CreateFileOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _createFileSend(context, file, options);
  return _createFileDeserialize(result);
}

export function _retrieveFileSend(
  context: Client,
  fileId: string,
  options: RetrieveFileOptions = { requestOptions: {} }
): StreamableMethod<RetrieveFile200Response | RetrieveFileDefaultResponse> {
  return context
    .path("/files/files/{file_id}", fileId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveFileDeserialize(
  result: RetrieveFile200Response | RetrieveFileDefaultResponse
): Promise<OpenAIFile> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    bytes: result.body["bytes"],
    createdAt: new Date(result.body["createdAt"]),
    filename: result.body["filename"],
    purpose: result.body["purpose"],
    status: result.body["status"] as any,
    statusDetails: result.body["status_details"],
  };
}

export async function retrieveFile(
  context: Client,
  fileId: string,
  options: RetrieveFileOptions = { requestOptions: {} }
): Promise<OpenAIFile> {
  const result = await _retrieveFileSend(context, fileId, options);
  return _retrieveFileDeserialize(result);
}

export function _deleteFileSend(
  context: Client,
  fileId: string,
  options: DeleteFileOptions = { requestOptions: {} }
): StreamableMethod<DeleteFile200Response | DeleteFileDefaultResponse> {
  return context
    .path("/files/files/{file_id}", fileId)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteFileDeserialize(
  result: DeleteFile200Response | DeleteFileDefaultResponse
): Promise<DeleteFileResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    deleted: result.body["deleted"],
  };
}

export async function deleteFile(
  context: Client,
  fileId: string,
  options: DeleteFileOptions = { requestOptions: {} }
): Promise<DeleteFileResponse> {
  const result = await _deleteFileSend(context, fileId, options);
  return _deleteFileDeserialize(result);
}

export function _downloadFileSend(
  context: Client,
  fileId: string,
  options: DownloadFileOptions = { requestOptions: {} }
): StreamableMethod<DownloadFile200Response | DownloadFileDefaultResponse> {
  return context
    .path("/files/files/{file_id}/content", fileId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _downloadFileDeserialize(
  result: DownloadFile200Response | DownloadFileDefaultResponse
): Promise<string> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return result.body;
}

export async function downloadFile(
  context: Client,
  fileId: string,
  options: DownloadFileOptions = { requestOptions: {} }
): Promise<string> {
  const result = await _downloadFileSend(context, fileId, options);
  return _downloadFileDeserialize(result);
}

export function _createFineTuneSend(
  context: Client,
  fineTune: CreateFineTuneRequest,
  options: CreateFineTuneOptions = { requestOptions: {} }
): StreamableMethod<CreateFineTune200Response | CreateFineTuneDefaultResponse> {
  return context
    .path("/fine-tunes")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        training_file: fineTune["trainingFile"],
        validation_file: fineTune["validationFile"],
        model: fineTune["model"],
        n_epochs: fineTune["nEpochs"],
        batch_size: fineTune["batchSize"],
        learning_rate_multiplier: fineTune["learningRateMultiplier"],
        prompt_loss_rate: fineTune["promptLossRate"],
        compute_classification_metrics:
          fineTune["computeClassificationMetrics"],
        classification_n_classes: fineTune["classificationNClasses"],
        classification_positive_class: fineTune["classificationPositiveClass"],
        classification_betas: fineTune["classificationBetas"],
        suffix: fineTune["suffix"],
      },
    });
}

export async function _createFineTuneDeserialize(
  result: CreateFineTune200Response | CreateFineTuneDefaultResponse
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    updatedAt: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparams: {
      nEpochs: result.body.hyperparams["n_epochs"],
      batchSize: result.body.hyperparams["batch_size"],
      promptLossWeight: result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: (result.body["training_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    validationFiles: (result.body["validation_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    events: (result.body["events"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function createFineTune(
  context: Client,
  fineTune: CreateFineTuneRequest,
  options: CreateFineTuneOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _createFineTuneSend(context, fineTune, options);
  return _createFineTuneDeserialize(result);
}

export function _listFineTunesSend(
  context: Client,
  options: ListFineTunesOptions = { requestOptions: {} }
): StreamableMethod<ListFineTunes200Response | ListFineTunesDefaultResponse> {
  return context
    .path("/fine-tunes")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listFineTunesDeserialize(
  result: ListFineTunes200Response | ListFineTunesDefaultResponse
): Promise<ListFineTunesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      updatedAt: new Date(p["updated_at"]),
      model: p["model"],
      fineTunedModel: p["fine_tuned_model"],
      organizationId: p["organization_id"],
      status: p["status"] as any,
      hyperparams: {
        nEpochs: p.hyperparams["n_epochs"],
        batchSize: p.hyperparams["batch_size"],
        promptLossWeight: p.hyperparams["prompt_loss_weight"],
        learningRateMultiplier: p.hyperparams["learning_rate_multiplier"],
        computeClassificationMetrics:
          p.hyperparams["compute_classification_metrics"],
        classificationPositiveClass:
          p.hyperparams["classification_positive_class"],
        classificationNClasses: p.hyperparams["classification_n_classes"],
      },
      trainingFiles: (p["training_files"] ?? []).map((p) => ({
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"] as any,
        statusDetails: p["status_details"],
      })),
      validationFiles: (p["validation_files"] ?? []).map((p) => ({
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"] as any,
        statusDetails: p["status_details"],
      })),
      resultFiles: (p["result_files"] ?? []).map((p) => ({
        id: p["id"],
        object: p["object"],
        bytes: p["bytes"],
        createdAt: new Date(p["createdAt"]),
        filename: p["filename"],
        purpose: p["purpose"],
        status: p["status"] as any,
        statusDetails: p["status_details"],
      })),
      events: (p["events"] ?? []).map((p) => ({
        object: p["object"],
        createdAt: new Date(p["created_at"]),
        level: p["level"],
        message: p["message"],
      })),
    })),
  };
}

export async function listFineTunes(
  context: Client,
  options: ListFineTunesOptions = { requestOptions: {} }
): Promise<ListFineTunesResponse> {
  const result = await _listFineTunesSend(context, options);
  return _listFineTunesDeserialize(result);
}

export function _retrieveFineTuneSend(
  context: Client,
  fineTuneId: string,
  options: RetrieveFineTuneOptions = { requestOptions: {} }
): StreamableMethod<
  RetrieveFineTune200Response | RetrieveFineTuneDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}", fineTuneId)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveFineTuneDeserialize(
  result: RetrieveFineTune200Response | RetrieveFineTuneDefaultResponse
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    updatedAt: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparams: {
      nEpochs: result.body.hyperparams["n_epochs"],
      batchSize: result.body.hyperparams["batch_size"],
      promptLossWeight: result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: (result.body["training_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    validationFiles: (result.body["validation_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    events: (result.body["events"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function retrieveFineTune(
  context: Client,
  fineTuneId: string,
  options: RetrieveFineTuneOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _retrieveFineTuneSend(context, fineTuneId, options);
  return _retrieveFineTuneDeserialize(result);
}

export function _listFineTuneEventsSend(
  context: Client,
  fineTuneId: string,
  options: ListFineTuneEventsOptions = { requestOptions: {} }
): StreamableMethod<
  ListFineTuneEvents200Response | ListFineTuneEventsDefaultResponse
> {
  return context
    .path("/fine-tunes/{fine_tune_id}/events", fineTuneId)
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { stream: options?.stream },
    });
}

export async function _listFineTuneEventsDeserialize(
  result: ListFineTuneEvents200Response | ListFineTuneEventsDefaultResponse
): Promise<ListFineTuneEventsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function listFineTuneEvents(
  context: Client,
  fineTuneId: string,
  options: ListFineTuneEventsOptions = { requestOptions: {} }
): Promise<ListFineTuneEventsResponse> {
  const result = await _listFineTuneEventsSend(context, fineTuneId, options);
  return _listFineTuneEventsDeserialize(result);
}

export function _cancelFineTuneSend(
  context: Client,
  fineTuneId: string,
  options: CancelFineTuneOptions = { requestOptions: {} }
): StreamableMethod<CancelFineTune200Response | CancelFineTuneDefaultResponse> {
  return context
    .path("/fine-tunes/{fine_tune_id}/cancel", fineTuneId)
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cancelFineTuneDeserialize(
  result: CancelFineTune200Response | CancelFineTuneDefaultResponse
): Promise<FineTune> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    createdAt: new Date(result.body["created_at"]),
    updatedAt: new Date(result.body["updated_at"]),
    model: result.body["model"],
    fineTunedModel: result.body["fine_tuned_model"],
    organizationId: result.body["organization_id"],
    status: result.body["status"] as any,
    hyperparams: {
      nEpochs: result.body.hyperparams["n_epochs"],
      batchSize: result.body.hyperparams["batch_size"],
      promptLossWeight: result.body.hyperparams["prompt_loss_weight"],
      learningRateMultiplier:
        result.body.hyperparams["learning_rate_multiplier"],
      computeClassificationMetrics:
        result.body.hyperparams["compute_classification_metrics"],
      classificationPositiveClass:
        result.body.hyperparams["classification_positive_class"],
      classificationNClasses:
        result.body.hyperparams["classification_n_classes"],
    },
    trainingFiles: (result.body["training_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    validationFiles: (result.body["validation_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    resultFiles: (result.body["result_files"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      bytes: p["bytes"],
      createdAt: new Date(p["createdAt"]),
      filename: p["filename"],
      purpose: p["purpose"],
      status: p["status"] as any,
      statusDetails: p["status_details"],
    })),
    events: (result.body["events"] ?? []).map((p) => ({
      object: p["object"],
      createdAt: new Date(p["created_at"]),
      level: p["level"],
      message: p["message"],
    })),
  };
}

export async function cancelFineTune(
  context: Client,
  fineTuneId: string,
  options: CancelFineTuneOptions = { requestOptions: {} }
): Promise<FineTune> {
  const result = await _cancelFineTuneSend(context, fineTuneId, options);
  return _cancelFineTuneDeserialize(result);
}

export function _listModelsSend(
  context: Client,
  options: ListModelsOptions = { requestOptions: {} }
): StreamableMethod<ListModels200Response | ListModelsDefaultResponse> {
  return context
    .path("/models")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listModelsDeserialize(
  result: ListModels200Response | ListModelsDefaultResponse
): Promise<ListModelsResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    object: result.body["object"],
    data: (result.body["data"] ?? []).map((p) => ({
      id: p["id"],
      object: p["object"],
      created: new Date(p["created"]),
      ownedBy: p["owned_by"],
    })),
  };
}

export async function listModels(
  context: Client,
  options: ListModelsOptions = { requestOptions: {} }
): Promise<ListModelsResponse> {
  const result = await _listModelsSend(context, options);
  return _listModelsDeserialize(result);
}

export function _retrieveSend(
  context: Client,
  model: string,
  options: RetrieveOptions = { requestOptions: {} }
): StreamableMethod<Retrieve200Response | RetrieveDefaultResponse> {
  return context
    .path("/models/{model}", model)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _retrieveDeserialize(
  result: Retrieve200Response | RetrieveDefaultResponse
): Promise<Model> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    created: new Date(result.body["created"]),
    ownedBy: result.body["owned_by"],
  };
}

export async function retrieve(
  context: Client,
  model: string,
  options: RetrieveOptions = { requestOptions: {} }
): Promise<Model> {
  const result = await _retrieveSend(context, model, options);
  return _retrieveDeserialize(result);
}

export function _deleteOperationSend(
  context: Client,
  model: string,
  options: DeleteOptions = { requestOptions: {} }
): StreamableMethod<
  DeleteOperation200Response | DeleteOperationDefaultResponse
> {
  return context
    .path("/models/{model}", model)
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteOperationDeserialize(
  result: DeleteOperation200Response | DeleteOperationDefaultResponse
): Promise<DeleteModelResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    object: result.body["object"],
    deleted: result.body["deleted"],
  };
}

/**
 *  @fixme delete is a reserved word that cannot be used as an operation name. Please add @projectedName(
 *       "javascript", "<JS-Specific-Name>") to the operation to override the generated name.
 */
export async function deleteOperation(
  context: Client,
  model: string,
  options: DeleteOptions = { requestOptions: {} }
): Promise<DeleteModelResponse> {
  const result = await _deleteOperationSend(context, model, options);
  return _deleteOperationDeserialize(result);
}

export function _createImageSend(
  context: Client,
  image: CreateImageRequest,
  options: CreateImageOptions = { requestOptions: {} }
): StreamableMethod<CreateImage200Response | CreateImageDefaultResponse> {
  return context
    .path("/images/generations")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        prompt: image["prompt"],
        n: image["n"],
        size: image["size"],
        response_format: image["responseFormat"],
        user: image["user"],
      },
    });
}

export async function _createImageDeserialize(
  result: CreateImage200Response | CreateImageDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    created: new Date(result.body["created"]),
    data: (result.body["data"] ?? []).map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function createImage(
  context: Client,
  image: CreateImageRequest,
  options: CreateImageOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createImageSend(context, image, options);
  return _createImageDeserialize(result);
}

export function _createImageEditSend(
  context: Client,
  image: CreateImageEditRequest,
  options: CreateImageEditOptions = { requestOptions: {} }
): StreamableMethod<
  CreateImageEdit200Response | CreateImageEditDefaultResponse
> {
  return context
    .path("/images/edits")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        prompt: image["prompt"],
        image: image["image"],
        mask: image["mask"],
        n: image["n"],
        size: image["size"],
        response_format: image["responseFormat"],
        user: image["user"],
      },
    });
}

export async function _createImageEditDeserialize(
  result: CreateImageEdit200Response | CreateImageEditDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    created: new Date(result.body["created"]),
    data: (result.body["data"] ?? []).map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function createImageEdit(
  context: Client,
  image: CreateImageEditRequest,
  options: CreateImageEditOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createImageEditSend(context, image, options);
  return _createImageEditDeserialize(result);
}

export function _createImageVariationSend(
  context: Client,
  image: CreateImageVariationRequest,
  options: CreateImageVariationOptions = { requestOptions: {} }
): StreamableMethod<
  CreateImageVariation200Response | CreateImageVariationDefaultResponse
> {
  return context
    .path("/images/variations")
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: (options.contentType as any) ?? "multipart/form-data",
      body: {
        image: image["image"],
        n: image["n"],
        size: image["size"],
        response_format: image["responseFormat"],
        user: image["user"],
      },
    });
}

export async function _createImageVariationDeserialize(
  result: CreateImageVariation200Response | CreateImageVariationDefaultResponse
): Promise<ImagesResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    created: new Date(result.body["created"]),
    data: (result.body["data"] ?? []).map((p) => ({
      url: p["url"],
      b64Json:
        typeof p["b64_json"] === "string"
          ? stringToUint8Array(p["b64_json"], "base64")
          : p["b64_json"],
    })),
  };
}

export async function createImageVariation(
  context: Client,
  image: CreateImageVariationRequest,
  options: CreateImageVariationOptions = { requestOptions: {} }
): Promise<ImagesResponse> {
  const result = await _createImageVariationSend(context, image, options);
  return _createImageVariationDeserialize(result);
}

export function _createModerationSend(
  context: Client,
  content: CreateModerationRequest,
  options: CreateModerationOptions = { requestOptions: {} }
): StreamableMethod<
  CreateModeration200Response | CreateModerationDefaultResponse
> {
  return context
    .path("/moderations")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { input: content["input"], model: content["model"] },
    });
}

export async function _createModerationDeserialize(
  result: CreateModeration200Response | CreateModerationDefaultResponse
): Promise<CreateModerationResponse> {
  if (isUnexpected(result)) {
    throw result.body;
  }

  return {
    id: result.body["id"],
    model: result.body["model"],
    results: (result.body["results"] ?? []).map((p) => ({
      flagged: p["flagged"],
      categories: {
        hate: p.categories["hate"],
        "hate/threatening": p.categories["hate/threatening"],
        harassment: p.categories["harassment"],
        "harassment/threatening": p.categories["harassment/threatening"],
        selfHarm: p.categories["self-harm"],
        "selfHarm/intent": p.categories["self-harm/intent"],
        "selfHarm/instructive": p.categories["self-harm/instructive"],
        sexual: p.categories["sexual"],
        "sexual/minors": p.categories["sexual/minors"],
        violence: p.categories["violence"],
        "violence/graphic": p.categories["violence/graphic"],
      },
      categoryScores: {
        hate: p.category_scores["hate"],
        "hate/threatening": p.category_scores["hate/threatening"],
        harassment: p.category_scores["harassment"],
        "harassment/threatening": p.category_scores["harassment/threatening"],
        selfHarm: p.category_scores["self-harm"],
        "selfHarm/intent": p.category_scores["self-harm/intent"],
        "selfHarm/instructive": p.category_scores["self-harm/instructive"],
        sexual: p.category_scores["sexual"],
        "sexual/minors": p.category_scores["sexual/minors"],
        violence: p.category_scores["violence"],
        "violence/graphic": p.category_scores["violence/graphic"],
      },
    })),
  };
}

export async function createModeration(
  context: Client,
  content: CreateModerationRequest,
  options: CreateModerationOptions = { requestOptions: {} }
): Promise<CreateModerationResponse> {
  const result = await _createModerationSend(context, content, options);
  return _createModerationDeserialize(result);
}
