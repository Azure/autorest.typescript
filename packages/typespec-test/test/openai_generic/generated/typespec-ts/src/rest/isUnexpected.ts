// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateTranscription200Response,
  CreateTranscriptionDefaultResponse,
  CreateTranslation200Response,
  CreateTranslationDefaultResponse,
  CreateChatCompletion200Response,
  CreateChatCompletionDefaultResponse,
  CreateFineTuningJob200Response,
  CreateFineTuningJobDefaultResponse,
  ListPaginatedFineTuningJobs200Response,
  ListPaginatedFineTuningJobsDefaultResponse,
  RetrieveFineTuningJob200Response,
  RetrieveFineTuningJobDefaultResponse,
  ListFineTuningEvents200Response,
  ListFineTuningEventsDefaultResponse,
  CancelFineTuningJob200Response,
  CancelFineTuningJobDefaultResponse,
  CreateCompletion200Response,
  CreateCompletionDefaultResponse,
  CreateEdit200Response,
  CreateEditDefaultResponse,
  CreateEmbedding200Response,
  CreateEmbeddingDefaultResponse,
  ListFiles200Response,
  ListFilesDefaultResponse,
  CreateFile200Response,
  CreateFileDefaultResponse,
  RetrieveFile200Response,
  RetrieveFileDefaultResponse,
  DeleteFile200Response,
  DeleteFileDefaultResponse,
  DownloadFile200Response,
  DownloadFileDefaultResponse,
  CreateFineTune200Response,
  CreateFineTuneDefaultResponse,
  ListFineTunes200Response,
  ListFineTunesDefaultResponse,
  RetrieveFineTune200Response,
  RetrieveFineTuneDefaultResponse,
  ListFineTuneEvents200Response,
  ListFineTuneEventsDefaultResponse,
  CancelFineTune200Response,
  CancelFineTuneDefaultResponse,
  ListModels200Response,
  ListModelsDefaultResponse,
  Retrieve200Response,
  RetrieveDefaultResponse,
  DeleteOperation200Response,
  DeleteOperationDefaultResponse,
  CreateImage200Response,
  CreateImageDefaultResponse,
  CreateImageEdit200Response,
  CreateImageEditDefaultResponse,
  CreateImageVariation200Response,
  CreateImageVariationDefaultResponse,
  CreateModeration200Response,
  CreateModerationDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "POST /audio/transcriptions": ["200"],
  "POST /audio/translations": ["200"],
  "POST /chat/completions": ["200"],
  "POST /fine_tuning/jobs": ["200"],
  "GET /fine_tuning/jobs": ["200"],
  "GET /fine_tuning/jobs/{fine_tuning_job_id}": ["200"],
  "GET /fine_tuning/jobs/{fine_tuning_job_id}/events": ["200"],
  "POST /fine_tuning/jobs/{fine_tuning_job_id}/cancel": ["200"],
  "POST /completions": ["200"],
  "POST /edits": ["200"],
  "POST /embeddings": ["200"],
  "GET /files": ["200"],
  "POST /files": ["200"],
  "POST /files/files/{file_id}": ["200"],
  "DELETE /files/files/{file_id}": ["200"],
  "GET /files/files/{file_id}/content": ["200"],
  "POST /fine-tunes": ["200"],
  "GET /fine-tunes": ["200"],
  "GET /fine-tunes/{fine_tune_id}": ["200"],
  "GET /fine-tunes/{fine_tune_id}/events": ["200"],
  "POST /fine-tunes/{fine_tune_id}/cancel": ["200"],
  "GET /models": ["200"],
  "GET /models/{model}": ["200"],
  "DELETE /models/{model}": ["200"],
  "POST /images/generations": ["200"],
  "POST /images/edits": ["200"],
  "POST /images/variations": ["200"],
  "POST /moderations": ["200"],
};

export function isUnexpected(
  response: CreateTranscription200Response | CreateTranscriptionDefaultResponse
): response is CreateTranscriptionDefaultResponse;
export function isUnexpected(
  response: CreateTranslation200Response | CreateTranslationDefaultResponse
): response is CreateTranslationDefaultResponse;
export function isUnexpected(
  response:
    | CreateChatCompletion200Response
    | CreateChatCompletionDefaultResponse
): response is CreateChatCompletionDefaultResponse;
export function isUnexpected(
  response: CreateFineTuningJob200Response | CreateFineTuningJobDefaultResponse
): response is CreateFineTuningJobDefaultResponse;
export function isUnexpected(
  response:
    | ListPaginatedFineTuningJobs200Response
    | ListPaginatedFineTuningJobsDefaultResponse
): response is ListPaginatedFineTuningJobsDefaultResponse;
export function isUnexpected(
  response:
    | RetrieveFineTuningJob200Response
    | RetrieveFineTuningJobDefaultResponse
): response is RetrieveFineTuningJobDefaultResponse;
export function isUnexpected(
  response:
    | ListFineTuningEvents200Response
    | ListFineTuningEventsDefaultResponse
): response is ListFineTuningEventsDefaultResponse;
export function isUnexpected(
  response: CancelFineTuningJob200Response | CancelFineTuningJobDefaultResponse
): response is CancelFineTuningJobDefaultResponse;
export function isUnexpected(
  response: CreateCompletion200Response | CreateCompletionDefaultResponse
): response is CreateCompletionDefaultResponse;
export function isUnexpected(
  response: CreateEdit200Response | CreateEditDefaultResponse
): response is CreateEditDefaultResponse;
export function isUnexpected(
  response: CreateEmbedding200Response | CreateEmbeddingDefaultResponse
): response is CreateEmbeddingDefaultResponse;
export function isUnexpected(
  response: ListFiles200Response | ListFilesDefaultResponse
): response is ListFilesDefaultResponse;
export function isUnexpected(
  response: CreateFile200Response | CreateFileDefaultResponse
): response is CreateFileDefaultResponse;
export function isUnexpected(
  response: RetrieveFile200Response | RetrieveFileDefaultResponse
): response is RetrieveFileDefaultResponse;
export function isUnexpected(
  response: DeleteFile200Response | DeleteFileDefaultResponse
): response is DeleteFileDefaultResponse;
export function isUnexpected(
  response: DownloadFile200Response | DownloadFileDefaultResponse
): response is DownloadFileDefaultResponse;
export function isUnexpected(
  response: CreateFineTune200Response | CreateFineTuneDefaultResponse
): response is CreateFineTuneDefaultResponse;
export function isUnexpected(
  response: ListFineTunes200Response | ListFineTunesDefaultResponse
): response is ListFineTunesDefaultResponse;
export function isUnexpected(
  response: RetrieveFineTune200Response | RetrieveFineTuneDefaultResponse
): response is RetrieveFineTuneDefaultResponse;
export function isUnexpected(
  response: ListFineTuneEvents200Response | ListFineTuneEventsDefaultResponse
): response is ListFineTuneEventsDefaultResponse;
export function isUnexpected(
  response: CancelFineTune200Response | CancelFineTuneDefaultResponse
): response is CancelFineTuneDefaultResponse;
export function isUnexpected(
  response: ListModels200Response | ListModelsDefaultResponse
): response is ListModelsDefaultResponse;
export function isUnexpected(
  response: Retrieve200Response | RetrieveDefaultResponse
): response is RetrieveDefaultResponse;
export function isUnexpected(
  response: DeleteOperation200Response | DeleteOperationDefaultResponse
): response is DeleteOperationDefaultResponse;
export function isUnexpected(
  response: CreateImage200Response | CreateImageDefaultResponse
): response is CreateImageDefaultResponse;
export function isUnexpected(
  response: CreateImageEdit200Response | CreateImageEditDefaultResponse
): response is CreateImageEditDefaultResponse;
export function isUnexpected(
  response:
    | CreateImageVariation200Response
    | CreateImageVariationDefaultResponse
): response is CreateImageVariationDefaultResponse;
export function isUnexpected(
  response: CreateModeration200Response | CreateModerationDefaultResponse
): response is CreateModerationDefaultResponse;
export function isUnexpected(
  response:
    | CreateTranscription200Response
    | CreateTranscriptionDefaultResponse
    | CreateTranslation200Response
    | CreateTranslationDefaultResponse
    | CreateChatCompletion200Response
    | CreateChatCompletionDefaultResponse
    | CreateFineTuningJob200Response
    | CreateFineTuningJobDefaultResponse
    | ListPaginatedFineTuningJobs200Response
    | ListPaginatedFineTuningJobsDefaultResponse
    | RetrieveFineTuningJob200Response
    | RetrieveFineTuningJobDefaultResponse
    | ListFineTuningEvents200Response
    | ListFineTuningEventsDefaultResponse
    | CancelFineTuningJob200Response
    | CancelFineTuningJobDefaultResponse
    | CreateCompletion200Response
    | CreateCompletionDefaultResponse
    | CreateEdit200Response
    | CreateEditDefaultResponse
    | CreateEmbedding200Response
    | CreateEmbeddingDefaultResponse
    | ListFiles200Response
    | ListFilesDefaultResponse
    | CreateFile200Response
    | CreateFileDefaultResponse
    | RetrieveFile200Response
    | RetrieveFileDefaultResponse
    | DeleteFile200Response
    | DeleteFileDefaultResponse
    | DownloadFile200Response
    | DownloadFileDefaultResponse
    | CreateFineTune200Response
    | CreateFineTuneDefaultResponse
    | ListFineTunes200Response
    | ListFineTunesDefaultResponse
    | RetrieveFineTune200Response
    | RetrieveFineTuneDefaultResponse
    | ListFineTuneEvents200Response
    | ListFineTuneEventsDefaultResponse
    | CancelFineTune200Response
    | CancelFineTuneDefaultResponse
    | ListModels200Response
    | ListModelsDefaultResponse
    | Retrieve200Response
    | RetrieveDefaultResponse
    | DeleteOperation200Response
    | DeleteOperationDefaultResponse
    | CreateImage200Response
    | CreateImageDefaultResponse
    | CreateImageEdit200Response
    | CreateImageEditDefaultResponse
    | CreateImageVariation200Response
    | CreateImageVariationDefaultResponse
    | CreateModeration200Response
    | CreateModerationDefaultResponse
): response is
  | CreateTranscriptionDefaultResponse
  | CreateTranslationDefaultResponse
  | CreateChatCompletionDefaultResponse
  | CreateFineTuningJobDefaultResponse
  | ListPaginatedFineTuningJobsDefaultResponse
  | RetrieveFineTuningJobDefaultResponse
  | ListFineTuningEventsDefaultResponse
  | CancelFineTuningJobDefaultResponse
  | CreateCompletionDefaultResponse
  | CreateEditDefaultResponse
  | CreateEmbeddingDefaultResponse
  | ListFilesDefaultResponse
  | CreateFileDefaultResponse
  | RetrieveFileDefaultResponse
  | DeleteFileDefaultResponse
  | DownloadFileDefaultResponse
  | CreateFineTuneDefaultResponse
  | ListFineTunesDefaultResponse
  | RetrieveFineTuneDefaultResponse
  | ListFineTuneEventsDefaultResponse
  | CancelFineTuneDefaultResponse
  | ListModelsDefaultResponse
  | RetrieveDefaultResponse
  | DeleteOperationDefaultResponse
  | CreateImageDefaultResponse
  | CreateImageEditDefaultResponse
  | CreateImageVariationDefaultResponse
  | CreateModerationDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
