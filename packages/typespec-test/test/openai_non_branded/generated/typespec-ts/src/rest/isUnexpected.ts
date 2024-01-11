// Licensed under the MIT license.

import {
  AudioTranscriptionsCreate200Response,
  AudioTranscriptionsCreateDefaultResponse,
  AudioTranslationsCreate200Response,
  AudioTranslationsCreateDefaultResponse,
  ChatCompletionsCreate200Response,
  ChatCompletionsCreateDefaultResponse,
  FineTuningJobsCreate200Response,
  FineTuningJobsCreateDefaultResponse,
  FineTuningJobsList200Response,
  FineTuningJobsListDefaultResponse,
  FineTuningJobsRetrieve200Response,
  FineTuningJobsRetrieveDefaultResponse,
  FineTuningJobsListEvents200Response,
  FineTuningJobsListEventsDefaultResponse,
  FineTuningJobsCancel200Response,
  FineTuningJobsCancelDefaultResponse,
  CompletionsCreate200Response,
  CompletionsCreateDefaultResponse,
  EditsCreate200Response,
  EditsCreateDefaultResponse,
  EmbeddingsCreate200Response,
  EmbeddingsCreateDefaultResponse,
  FilesList200Response,
  FilesListDefaultResponse,
  FilesCreate200Response,
  FilesCreateDefaultResponse,
  FilesRetrieve200Response,
  FilesRetrieveDefaultResponse,
  FilesDeleteOperation200Response,
  FilesDeleteOperationDefaultResponse,
  FilesDownload200Response,
  FilesDownloadDefaultResponse,
  FineTunesCreate200Response,
  FineTunesCreateDefaultResponse,
  FineTunesList200Response,
  FineTunesListDefaultResponse,
  FineTunesRetrieve200Response,
  FineTunesRetrieveDefaultResponse,
  FineTunesListEvents200Response,
  FineTunesListEventsDefaultResponse,
  FineTunesCancel200Response,
  FineTunesCancelDefaultResponse,
  ModelsList200Response,
  ModelsListDefaultResponse,
  ModelsRetrieve200Response,
  ModelsRetrieveDefaultResponse,
  ModelsDeleteOperation200Response,
  ModelsDeleteOperationDefaultResponse,
  ImagesCreate200Response,
  ImagesCreateDefaultResponse,
  ImagesCreateEdit200Response,
  ImagesCreateEditDefaultResponse,
  ImagesCreateVariation200Response,
  ImagesCreateVariationDefaultResponse,
  ModerationsCreate200Response,
  ModerationsCreateDefaultResponse,
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
  response:
    | AudioTranscriptionsCreate200Response
    | AudioTranscriptionsCreateDefaultResponse,
): response is AudioTranscriptionsCreateDefaultResponse;
export function isUnexpected(
  response:
    | AudioTranslationsCreate200Response
    | AudioTranslationsCreateDefaultResponse,
): response is AudioTranslationsCreateDefaultResponse;
export function isUnexpected(
  response:
    | ChatCompletionsCreate200Response
    | ChatCompletionsCreateDefaultResponse,
): response is ChatCompletionsCreateDefaultResponse;
export function isUnexpected(
  response:
    | FineTuningJobsCreate200Response
    | FineTuningJobsCreateDefaultResponse,
): response is FineTuningJobsCreateDefaultResponse;
export function isUnexpected(
  response: FineTuningJobsList200Response | FineTuningJobsListDefaultResponse,
): response is FineTuningJobsListDefaultResponse;
export function isUnexpected(
  response:
    | FineTuningJobsRetrieve200Response
    | FineTuningJobsRetrieveDefaultResponse,
): response is FineTuningJobsRetrieveDefaultResponse;
export function isUnexpected(
  response:
    | FineTuningJobsListEvents200Response
    | FineTuningJobsListEventsDefaultResponse,
): response is FineTuningJobsListEventsDefaultResponse;
export function isUnexpected(
  response:
    | FineTuningJobsCancel200Response
    | FineTuningJobsCancelDefaultResponse,
): response is FineTuningJobsCancelDefaultResponse;
export function isUnexpected(
  response: CompletionsCreate200Response | CompletionsCreateDefaultResponse,
): response is CompletionsCreateDefaultResponse;
export function isUnexpected(
  response: EditsCreate200Response | EditsCreateDefaultResponse,
): response is EditsCreateDefaultResponse;
export function isUnexpected(
  response: EmbeddingsCreate200Response | EmbeddingsCreateDefaultResponse,
): response is EmbeddingsCreateDefaultResponse;
export function isUnexpected(
  response: FilesList200Response | FilesListDefaultResponse,
): response is FilesListDefaultResponse;
export function isUnexpected(
  response: FilesCreate200Response | FilesCreateDefaultResponse,
): response is FilesCreateDefaultResponse;
export function isUnexpected(
  response: FilesRetrieve200Response | FilesRetrieveDefaultResponse,
): response is FilesRetrieveDefaultResponse;
export function isUnexpected(
  response:
    | FilesDeleteOperation200Response
    | FilesDeleteOperationDefaultResponse,
): response is FilesDeleteOperationDefaultResponse;
export function isUnexpected(
  response: FilesDownload200Response | FilesDownloadDefaultResponse,
): response is FilesDownloadDefaultResponse;
export function isUnexpected(
  response: FineTunesCreate200Response | FineTunesCreateDefaultResponse,
): response is FineTunesCreateDefaultResponse;
export function isUnexpected(
  response: FineTunesList200Response | FineTunesListDefaultResponse,
): response is FineTunesListDefaultResponse;
export function isUnexpected(
  response: FineTunesRetrieve200Response | FineTunesRetrieveDefaultResponse,
): response is FineTunesRetrieveDefaultResponse;
export function isUnexpected(
  response: FineTunesListEvents200Response | FineTunesListEventsDefaultResponse,
): response is FineTunesListEventsDefaultResponse;
export function isUnexpected(
  response: FineTunesCancel200Response | FineTunesCancelDefaultResponse,
): response is FineTunesCancelDefaultResponse;
export function isUnexpected(
  response: ModelsList200Response | ModelsListDefaultResponse,
): response is ModelsListDefaultResponse;
export function isUnexpected(
  response: ModelsRetrieve200Response | ModelsRetrieveDefaultResponse,
): response is ModelsRetrieveDefaultResponse;
export function isUnexpected(
  response:
    | ModelsDeleteOperation200Response
    | ModelsDeleteOperationDefaultResponse,
): response is ModelsDeleteOperationDefaultResponse;
export function isUnexpected(
  response: ImagesCreate200Response | ImagesCreateDefaultResponse,
): response is ImagesCreateDefaultResponse;
export function isUnexpected(
  response: ImagesCreateEdit200Response | ImagesCreateEditDefaultResponse,
): response is ImagesCreateEditDefaultResponse;
export function isUnexpected(
  response:
    | ImagesCreateVariation200Response
    | ImagesCreateVariationDefaultResponse,
): response is ImagesCreateVariationDefaultResponse;
export function isUnexpected(
  response: ModerationsCreate200Response | ModerationsCreateDefaultResponse,
): response is ModerationsCreateDefaultResponse;
export function isUnexpected(
  response:
    | AudioTranscriptionsCreate200Response
    | AudioTranscriptionsCreateDefaultResponse
    | AudioTranslationsCreate200Response
    | AudioTranslationsCreateDefaultResponse
    | ChatCompletionsCreate200Response
    | ChatCompletionsCreateDefaultResponse
    | FineTuningJobsCreate200Response
    | FineTuningJobsCreateDefaultResponse
    | FineTuningJobsList200Response
    | FineTuningJobsListDefaultResponse
    | FineTuningJobsRetrieve200Response
    | FineTuningJobsRetrieveDefaultResponse
    | FineTuningJobsListEvents200Response
    | FineTuningJobsListEventsDefaultResponse
    | FineTuningJobsCancel200Response
    | FineTuningJobsCancelDefaultResponse
    | CompletionsCreate200Response
    | CompletionsCreateDefaultResponse
    | EditsCreate200Response
    | EditsCreateDefaultResponse
    | EmbeddingsCreate200Response
    | EmbeddingsCreateDefaultResponse
    | FilesList200Response
    | FilesListDefaultResponse
    | FilesCreate200Response
    | FilesCreateDefaultResponse
    | FilesRetrieve200Response
    | FilesRetrieveDefaultResponse
    | FilesDeleteOperation200Response
    | FilesDeleteOperationDefaultResponse
    | FilesDownload200Response
    | FilesDownloadDefaultResponse
    | FineTunesCreate200Response
    | FineTunesCreateDefaultResponse
    | FineTunesList200Response
    | FineTunesListDefaultResponse
    | FineTunesRetrieve200Response
    | FineTunesRetrieveDefaultResponse
    | FineTunesListEvents200Response
    | FineTunesListEventsDefaultResponse
    | FineTunesCancel200Response
    | FineTunesCancelDefaultResponse
    | ModelsList200Response
    | ModelsListDefaultResponse
    | ModelsRetrieve200Response
    | ModelsRetrieveDefaultResponse
    | ModelsDeleteOperation200Response
    | ModelsDeleteOperationDefaultResponse
    | ImagesCreate200Response
    | ImagesCreateDefaultResponse
    | ImagesCreateEdit200Response
    | ImagesCreateEditDefaultResponse
    | ImagesCreateVariation200Response
    | ImagesCreateVariationDefaultResponse
    | ModerationsCreate200Response
    | ModerationsCreateDefaultResponse,
): response is
  | AudioTranscriptionsCreateDefaultResponse
  | AudioTranslationsCreateDefaultResponse
  | ChatCompletionsCreateDefaultResponse
  | FineTuningJobsCreateDefaultResponse
  | FineTuningJobsListDefaultResponse
  | FineTuningJobsRetrieveDefaultResponse
  | FineTuningJobsListEventsDefaultResponse
  | FineTuningJobsCancelDefaultResponse
  | CompletionsCreateDefaultResponse
  | EditsCreateDefaultResponse
  | EmbeddingsCreateDefaultResponse
  | FilesListDefaultResponse
  | FilesCreateDefaultResponse
  | FilesRetrieveDefaultResponse
  | FilesDeleteOperationDefaultResponse
  | FilesDownloadDefaultResponse
  | FineTunesCreateDefaultResponse
  | FineTunesListDefaultResponse
  | FineTunesRetrieveDefaultResponse
  | FineTunesListEventsDefaultResponse
  | FineTunesCancelDefaultResponse
  | ModelsListDefaultResponse
  | ModelsRetrieveDefaultResponse
  | ModelsDeleteOperationDefaultResponse
  | ImagesCreateDefaultResponse
  | ImagesCreateEditDefaultResponse
  | ImagesCreateVariationDefaultResponse
  | ModerationsCreateDefaultResponse {
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
          `${candidateParts[i]?.slice(start, end)}`,
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
