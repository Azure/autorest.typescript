// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  LROsPut200Succeeded200Response,
  LROsPut200Succeeded204Response,
  LROsPut200SucceededDefaultResponse,
  LROsPatch200SucceededIgnoreHeaders200Response,
  LROsPatch200SucceededIgnoreHeadersDefaultResponse,
  LROsPatch201RetryWithAsyncHeader200Response,
  LROsPatch201RetryWithAsyncHeader201Response,
  LROsPatch201RetryWithAsyncHeaderDefaultResponse,
  LROsPatch202RetryWithAsyncAndLocationHeader200Response,
  LROsPatch202RetryWithAsyncAndLocationHeader202Response,
  LROsPatch202RetryWithAsyncAndLocationHeaderDefaultResponse,
  LROsPut201Succeeded201Response,
  LROsPut201SucceededDefaultResponse,
  LROsPost202List200Response,
  LROsPost202List202Response,
  LROsPost202ListDefaultResponse,
  LROsPut200SucceededNoState200Response,
  LROsPut200SucceededNoStateDefaultResponse,
  LROsPut202Retry200202Response,
  LROsPut202Retry200DefaultResponse,
  LROsPut201CreatingSucceeded200200Response,
  LROsPut201CreatingSucceeded200201Response,
  LROsPut201CreatingSucceeded200DefaultResponse,
  LROsPut200UpdatingSucceeded204200Response,
  LROsPut200UpdatingSucceeded204DefaultResponse,
  LROsPut201CreatingFailed200200Response,
  LROsPut201CreatingFailed200201Response,
  LROsPut201CreatingFailed200DefaultResponse,
  LROsPut200Acceptedcanceled200200Response,
  LROsPut200Acceptedcanceled200DefaultResponse,
  LROsPutNoHeaderInRetry202Response,
  LROsPutNoHeaderInRetryDefaultResponse,
  LROsPutAsyncRetrySucceeded200Response,
  LROsPutAsyncRetrySucceededDefaultResponse,
  LROsPutAsyncNoRetrySucceeded200Response,
  LROsPutAsyncNoRetrySucceededDefaultResponse,
  LROsPutAsyncRetryFailed200Response,
  LROsPutAsyncRetryFailedDefaultResponse,
  LROsPutAsyncNoRetrycanceled200Response,
  LROsPutAsyncNoRetrycanceledDefaultResponse,
  LROsPutAsyncNoHeaderInRetry201Response,
  LROsPutAsyncNoHeaderInRetryDefaultResponse,
  LROsPutNonResource202Response,
  LROsPutNonResourceDefaultResponse,
  LROsPutAsyncNonResource202Response,
  LROsPutAsyncNonResourceDefaultResponse,
  LROsPutSubResource202Response,
  LROsPutSubResourceDefaultResponse,
  LROsPutAsyncSubResource202Response,
  LROsPutAsyncSubResourceDefaultResponse,
  LROsDeleteProvisioning202Accepted200Succeeded200Response,
  LROsDeleteProvisioning202Accepted200Succeeded202Response,
  LROsDeleteProvisioning202Accepted200SucceededDefaultResponse,
  LROsDeleteProvisioning202DeletingFailed200200Response,
  LROsDeleteProvisioning202DeletingFailed200202Response,
  LROsDeleteProvisioning202DeletingFailed200DefaultResponse,
  LROsDeleteProvisioning202Deletingcanceled200200Response,
  LROsDeleteProvisioning202Deletingcanceled200202Response,
  LROsDeleteProvisioning202Deletingcanceled200DefaultResponse,
  LROsDelete204Succeeded204Response,
  LROsDelete204SucceededDefaultResponse,
  LROsDelete202Retry200200Response,
  LROsDelete202Retry200202Response,
  LROsDelete202Retry200DefaultResponse,
  LROsDelete202NoRetry204200Response,
  LROsDelete202NoRetry204202Response,
  LROsDelete202NoRetry204DefaultResponse,
  LROsDeleteNoHeaderInRetry202Response,
  LROsDeleteNoHeaderInRetry204Response,
  LROsDeleteNoHeaderInRetryDefaultResponse,
  LROsDeleteAsyncNoHeaderInRetry202Response,
  LROsDeleteAsyncNoHeaderInRetry204Response,
  LROsDeleteAsyncNoHeaderInRetryDefaultResponse,
  LROsDeleteAsyncRetrySucceeded202Response,
  LROsDeleteAsyncRetrySucceededDefaultResponse,
  LROsDeleteAsyncNoRetrySucceeded202Response,
  LROsDeleteAsyncNoRetrySucceededDefaultResponse,
  LROsDeleteAsyncRetryFailed202Response,
  LROsDeleteAsyncRetryFailedDefaultResponse,
  LROsDeleteAsyncRetrycanceled202Response,
  LROsDeleteAsyncRetrycanceledDefaultResponse,
  LROsPost200WithPayload200Response,
  LROsPost200WithPayload202Response,
  LROsPost200WithPayloadDefaultResponse,
  LROsPost202Retry200202Response,
  LROsPost202Retry200DefaultResponse,
  LROsPost202NoRetry204202Response,
  LROsPost202NoRetry204DefaultResponse,
  LROsPostDoubleHeadersFinalLocationGet202Response,
  LROsPostDoubleHeadersFinalLocationGetDefaultResponse,
  LROsPostDoubleHeadersFinalAzureHeaderGet202Response,
  LROsPostDoubleHeadersFinalAzureHeaderGetDefaultResponse,
  LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response,
  LROsPostDoubleHeadersFinalAzureHeaderGetDefaultDefaultResponse,
  LROsPostAsyncRetrySucceeded200Response,
  LROsPostAsyncRetrySucceeded202Response,
  LROsPostAsyncRetrySucceededDefaultResponse,
  LROsPostAsyncNoRetrySucceeded200Response,
  LROsPostAsyncNoRetrySucceeded202Response,
  LROsPostAsyncNoRetrySucceededDefaultResponse,
  LROsPostAsyncRetryFailed202Response,
  LROsPostAsyncRetryFailedDefaultResponse,
  LROsPostAsyncRetrycanceled202Response,
  LROsPostAsyncRetrycanceledDefaultResponse,
  LRORetrysPut201CreatingSucceeded200200Response,
  LRORetrysPut201CreatingSucceeded200201Response,
  LRORetrysPut201CreatingSucceeded200DefaultResponse,
  LRORetrysPutAsyncRelativeRetrySucceeded200Response,
  LRORetrysPutAsyncRelativeRetrySucceededDefaultResponse,
  LRORetrysDeleteProvisioning202Accepted200Succeeded200Response,
  LRORetrysDeleteProvisioning202Accepted200Succeeded202Response,
  LRORetrysDeleteProvisioning202Accepted200SucceededDefaultResponse,
  LRORetrysDelete202Retry200202Response,
  LRORetrysDelete202Retry200DefaultResponse,
  LRORetrysDeleteAsyncRelativeRetrySucceeded202Response,
  LRORetrysDeleteAsyncRelativeRetrySucceededDefaultResponse,
  LRORetrysPost202Retry200202Response,
  LRORetrysPost202Retry200DefaultResponse,
  LRORetrysPostAsyncRelativeRetrySucceeded202Response,
  LRORetrysPostAsyncRelativeRetrySucceededDefaultResponse,
  LrosaDsPutNonRetry400200Response,
  LrosaDsPutNonRetry400201Response,
  LrosaDsPutNonRetry400DefaultResponse,
  LrosaDsPutNonRetry201Creating400200Response,
  LrosaDsPutNonRetry201Creating400201Response,
  LrosaDsPutNonRetry201Creating400DefaultResponse,
  LrosaDsPutNonRetry201Creating400InvalidJson200Response,
  LrosaDsPutNonRetry201Creating400InvalidJson201Response,
  LrosaDsPutNonRetry201Creating400InvalidJsonDefaultResponse,
  LrosaDsPutAsyncRelativeRetry400200Response,
  LrosaDsPutAsyncRelativeRetry400DefaultResponse,
  LrosaDsDeleteNonRetry400202Response,
  LrosaDsDeleteNonRetry400DefaultResponse,
  LrosaDsDelete202NonRetry400202Response,
  LrosaDsDelete202NonRetry400DefaultResponse,
  LrosaDsDeleteAsyncRelativeRetry400202Response,
  LrosaDsDeleteAsyncRelativeRetry400DefaultResponse,
  LrosaDsPostNonRetry400202Response,
  LrosaDsPostNonRetry400DefaultResponse,
  LrosaDsPost202NonRetry400202Response,
  LrosaDsPost202NonRetry400DefaultResponse,
  LrosaDsPostAsyncRelativeRetry400202Response,
  LrosaDsPostAsyncRelativeRetry400DefaultResponse,
  LrosaDsPutError201NoProvisioningStatePayload200Response,
  LrosaDsPutError201NoProvisioningStatePayload201Response,
  LrosaDsPutError201NoProvisioningStatePayloadDefaultResponse,
  LrosaDsPutAsyncRelativeRetryNoStatus200Response,
  LrosaDsPutAsyncRelativeRetryNoStatusDefaultResponse,
  LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response,
  LrosaDsPutAsyncRelativeRetryNoStatusPayloadDefaultResponse,
  LrosaDsDelete204Succeeded204Response,
  LrosaDsDelete204SucceededDefaultResponse,
  LrosaDsDeleteAsyncRelativeRetryNoStatus202Response,
  LrosaDsDeleteAsyncRelativeRetryNoStatusDefaultResponse,
  LrosaDsPost202NoLocation202Response,
  LrosaDsPost202NoLocationDefaultResponse,
  LrosaDsPostAsyncRelativeRetryNoPayload202Response,
  LrosaDsPostAsyncRelativeRetryNoPayloadDefaultResponse,
  LrosaDsPut200InvalidJson200Response,
  LrosaDsPut200InvalidJson204Response,
  LrosaDsPut200InvalidJsonDefaultResponse,
  LrosaDsPutAsyncRelativeRetryInvalidHeader200Response,
  LrosaDsPutAsyncRelativeRetryInvalidHeaderDefaultResponse,
  LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response,
  LrosaDsPutAsyncRelativeRetryInvalidJsonPollingDefaultResponse,
  LrosaDsDelete202RetryInvalidHeader202Response,
  LrosaDsDelete202RetryInvalidHeaderDefaultResponse,
  LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Response,
  LrosaDsDeleteAsyncRelativeRetryInvalidHeaderDefaultResponse,
  LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Response,
  LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingDefaultResponse,
  LrosaDsPost202RetryInvalidHeader202Response,
  LrosaDsPost202RetryInvalidHeaderDefaultResponse,
  LrosaDsPostAsyncRelativeRetryInvalidHeader202Response,
  LrosaDsPostAsyncRelativeRetryInvalidHeaderDefaultResponse,
  LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Response,
  LrosaDsPostAsyncRelativeRetryInvalidJsonPollingDefaultResponse,
  LROsCustomHeaderPutAsyncRetrySucceeded200Response,
  LROsCustomHeaderPutAsyncRetrySucceededDefaultResponse,
  LROsCustomHeaderPut201CreatingSucceeded200200Response,
  LROsCustomHeaderPut201CreatingSucceeded200201Response,
  LROsCustomHeaderPut201CreatingSucceeded200DefaultResponse,
  LROsCustomHeaderPost202Retry200202Response,
  LROsCustomHeaderPost202Retry200DefaultResponse,
  LROsCustomHeaderPostAsyncRetrySucceeded202Response,
  LROsCustomHeaderPostAsyncRetrySucceededDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "PUT /lro/put/200/succeeded": ["200", "204"],
  "GET /lro/put/200/succeeded": ["200", "204"],
  "PATCH /lro/patch/200/succeeded/ignoreheaders": ["200"],
  "GET /lro/patch/200/succeeded/ignoreheaders": ["200"],
  "PATCH /lro/patch/201/retry/onlyAsyncHeader": ["200", "201"],
  "GET /lro/patch/201/retry/onlyAsyncHeader": ["200", "201"],
  "PATCH /lro/patch/202/retry/asyncAndLocationHeader": ["200", "202"],
  "GET /lro/patch/202/retry/asyncAndLocationHeader": ["200", "202"],
  "PUT /lro/put/201/succeeded": ["201"],
  "GET /lro/put/201/succeeded": ["201"],
  "POST /lro/list": ["200", "202"],
  "GET /lro/list": ["200", "202"],
  "PUT /lro/put/200/succeeded/nostate": ["200"],
  "GET /lro/put/200/succeeded/nostate": ["200"],
  "PUT /lro/put/202/retry/200": ["202"],
  "GET /lro/put/202/retry/200": ["202"],
  "PUT /lro/put/201/creating/succeeded/200": ["200", "201"],
  "GET /lro/put/201/creating/succeeded/200": ["200", "201"],
  "PUT /lro/put/200/updating/succeeded/200": ["200"],
  "GET /lro/put/200/updating/succeeded/200": ["200"],
  "PUT /lro/put/201/created/failed/200": ["200", "201"],
  "GET /lro/put/201/created/failed/200": ["200", "201"],
  "PUT /lro/put/200/accepted/canceled/200": ["200"],
  "GET /lro/put/200/accepted/canceled/200": ["200"],
  "PUT /lro/put/noheader/202/200": ["202"],
  "GET /lro/put/noheader/202/200": ["202"],
  "PUT /lro/putasync/retry/succeeded": ["200"],
  "GET /lro/putasync/retry/succeeded": ["200"],
  "PUT /lro/putasync/noretry/succeeded": ["200"],
  "GET /lro/putasync/noretry/succeeded": ["200"],
  "PUT /lro/putasync/retry/failed": ["200"],
  "GET /lro/putasync/retry/failed": ["200"],
  "PUT /lro/putasync/noretry/canceled": ["200"],
  "GET /lro/putasync/noretry/canceled": ["200"],
  "PUT /lro/putasync/noheader/201/200": ["201"],
  "GET /lro/putasync/noheader/201/200": ["201"],
  "PUT /lro/putnonresource/202/200": ["202"],
  "GET /lro/putnonresource/202/200": ["202"],
  "PUT /lro/putnonresourceasync/202/200": ["202"],
  "GET /lro/putnonresourceasync/202/200": ["202"],
  "PUT /lro/putsubresource/202/200": ["202"],
  "GET /lro/putsubresource/202/200": ["202"],
  "PUT /lro/putsubresourceasync/202/200": ["202"],
  "GET /lro/putsubresourceasync/202/200": ["202"],
  "DELETE /lro/delete/provisioning/202/accepted/200/succeeded": ["200", "202"],
  "GET /lro/delete/provisioning/202/accepted/200/succeeded": ["200", "202"],
  "DELETE /lro/delete/provisioning/202/deleting/200/failed": ["200", "202"],
  "GET /lro/delete/provisioning/202/deleting/200/failed": ["200", "202"],
  "DELETE /lro/delete/provisioning/202/deleting/200/canceled": ["200", "202"],
  "GET /lro/delete/provisioning/202/deleting/200/canceled": ["200", "202"],
  "DELETE /lro/delete/204/succeeded": ["204"],
  "GET /lro/delete/204/succeeded": ["204"],
  "DELETE /lro/delete/202/retry/200": ["200", "202"],
  "GET /lro/delete/202/retry/200": ["200", "202"],
  "DELETE /lro/delete/202/noretry/204": ["200", "202"],
  "GET /lro/delete/202/noretry/204": ["200", "202"],
  "DELETE /lro/delete/noheader": ["202", "204"],
  "GET /lro/delete/noheader": ["202", "204"],
  "DELETE /lro/deleteasync/noheader/202/204": ["202", "204"],
  "GET /lro/deleteasync/noheader/202/204": ["202", "204"],
  "DELETE /lro/deleteasync/retry/succeeded": ["202"],
  "GET /lro/deleteasync/retry/succeeded": ["202"],
  "DELETE /lro/deleteasync/noretry/succeeded": ["202"],
  "GET /lro/deleteasync/noretry/succeeded": ["202"],
  "DELETE /lro/deleteasync/retry/failed": ["202"],
  "GET /lro/deleteasync/retry/failed": ["202"],
  "DELETE /lro/deleteasync/retry/canceled": ["202"],
  "GET /lro/deleteasync/retry/canceled": ["202"],
  "POST /lro/post/payload/200": ["200", "202"],
  "GET /lro/post/payload/200": ["200", "202"],
  "POST /lro/post/202/retry/200": ["202"],
  "GET /lro/post/202/retry/200": ["202"],
  "POST /lro/post/202/noretry/204": ["202"],
  "GET /lro/post/202/noretry/204": ["202"],
  "POST /lro/LROPostDoubleHeadersFinalLocationGet": ["202"],
  "GET /lro/LROPostDoubleHeadersFinalLocationGet": ["202"],
  "POST /lro/LROPostDoubleHeadersFinalAzureHeaderGet": ["202"],
  "GET /lro/LROPostDoubleHeadersFinalAzureHeaderGet": ["202"],
  "POST /lro/LROPostDoubleHeadersFinalAzureHeaderGetDefault": ["202"],
  "GET /lro/LROPostDoubleHeadersFinalAzureHeaderGetDefault": ["202"],
  "POST /lro/postasync/retry/succeeded": ["200", "202"],
  "GET /lro/postasync/retry/succeeded": ["200", "202"],
  "POST /lro/postasync/noretry/succeeded": ["200", "202"],
  "GET /lro/postasync/noretry/succeeded": ["200", "202"],
  "POST /lro/postasync/retry/failed": ["202"],
  "GET /lro/postasync/retry/failed": ["202"],
  "POST /lro/postasync/retry/canceled": ["202"],
  "GET /lro/postasync/retry/canceled": ["202"],
  "PUT /lro/retryerror/put/201/creating/succeeded/200": ["200", "201"],
  "GET /lro/retryerror/put/201/creating/succeeded/200": ["200", "201"],
  "PUT /lro/retryerror/putasync/retry/succeeded": ["200"],
  "GET /lro/retryerror/putasync/retry/succeeded": ["200"],
  "DELETE /lro/retryerror/delete/provisioning/202/accepted/200/succeeded": [
    "200",
    "202",
  ],
  "GET /lro/retryerror/delete/provisioning/202/accepted/200/succeeded": [
    "200",
    "202",
  ],
  "DELETE /lro/retryerror/delete/202/retry/200": ["202"],
  "GET /lro/retryerror/delete/202/retry/200": ["202"],
  "DELETE /lro/retryerror/deleteasync/retry/succeeded": ["202"],
  "GET /lro/retryerror/deleteasync/retry/succeeded": ["202"],
  "POST /lro/retryerror/post/202/retry/200": ["202"],
  "GET /lro/retryerror/post/202/retry/200": ["202"],
  "POST /lro/retryerror/postasync/retry/succeeded": ["202"],
  "GET /lro/retryerror/postasync/retry/succeeded": ["202"],
  "PUT /lro/nonretryerror/put/400": ["200", "201"],
  "GET /lro/nonretryerror/put/400": ["200", "201"],
  "PUT /lro/nonretryerror/put/201/creating/400": ["200", "201"],
  "GET /lro/nonretryerror/put/201/creating/400": ["200", "201"],
  "PUT /lro/nonretryerror/put/201/creating/400/invalidjson": ["200", "201"],
  "GET /lro/nonretryerror/put/201/creating/400/invalidjson": ["200", "201"],
  "PUT /lro/nonretryerror/putasync/retry/400": ["200"],
  "GET /lro/nonretryerror/putasync/retry/400": ["200"],
  "DELETE /lro/nonretryerror/delete/400": ["202"],
  "GET /lro/nonretryerror/delete/400": ["202"],
  "DELETE /lro/nonretryerror/delete/202/retry/400": ["202"],
  "GET /lro/nonretryerror/delete/202/retry/400": ["202"],
  "DELETE /lro/nonretryerror/deleteasync/retry/400": ["202"],
  "GET /lro/nonretryerror/deleteasync/retry/400": ["202"],
  "POST /lro/nonretryerror/post/400": ["202"],
  "GET /lro/nonretryerror/post/400": ["202"],
  "POST /lro/nonretryerror/post/202/retry/400": ["202"],
  "GET /lro/nonretryerror/post/202/retry/400": ["202"],
  "POST /lro/nonretryerror/postasync/retry/400": ["202"],
  "GET /lro/nonretryerror/postasync/retry/400": ["202"],
  "PUT /lro/error/put/201/noprovisioningstatepayload": ["200", "201"],
  "GET /lro/error/put/201/noprovisioningstatepayload": ["200", "201"],
  "PUT /lro/error/putasync/retry/nostatus": ["200"],
  "GET /lro/error/putasync/retry/nostatus": ["200"],
  "PUT /lro/error/putasync/retry/nostatuspayload": ["200"],
  "GET /lro/error/putasync/retry/nostatuspayload": ["200"],
  "DELETE /lro/error/delete/204/nolocation": ["204"],
  "GET /lro/error/delete/204/nolocation": ["204"],
  "DELETE /lro/error/deleteasync/retry/nostatus": ["202"],
  "GET /lro/error/deleteasync/retry/nostatus": ["202"],
  "POST /lro/error/post/202/nolocation": ["202"],
  "GET /lro/error/post/202/nolocation": ["202"],
  "POST /lro/error/postasync/retry/nopayload": ["202"],
  "GET /lro/error/postasync/retry/nopayload": ["202"],
  "PUT /lro/error/put/200/invalidjson": ["200", "204"],
  "GET /lro/error/put/200/invalidjson": ["200", "204"],
  "PUT /lro/error/putasync/retry/invalidheader": ["200"],
  "GET /lro/error/putasync/retry/invalidheader": ["200"],
  "PUT /lro/error/putasync/retry/invalidjsonpolling": ["200"],
  "GET /lro/error/putasync/retry/invalidjsonpolling": ["200"],
  "DELETE /lro/error/delete/202/retry/invalidheader": ["202"],
  "GET /lro/error/delete/202/retry/invalidheader": ["202"],
  "DELETE /lro/error/deleteasync/retry/invalidheader": ["202"],
  "GET /lro/error/deleteasync/retry/invalidheader": ["202"],
  "DELETE /lro/error/deleteasync/retry/invalidjsonpolling": ["202"],
  "GET /lro/error/deleteasync/retry/invalidjsonpolling": ["202"],
  "POST /lro/error/post/202/retry/invalidheader": ["202"],
  "GET /lro/error/post/202/retry/invalidheader": ["202"],
  "POST /lro/error/postasync/retry/invalidheader": ["202"],
  "GET /lro/error/postasync/retry/invalidheader": ["202"],
  "POST /lro/error/postasync/retry/invalidjsonpolling": ["202"],
  "GET /lro/error/postasync/retry/invalidjsonpolling": ["202"],
  "PUT /lro/customheader/putasync/retry/succeeded": ["200"],
  "GET /lro/customheader/putasync/retry/succeeded": ["200"],
  "PUT /lro/customheader/put/201/creating/succeeded/200": ["200", "201"],
  "GET /lro/customheader/put/201/creating/succeeded/200": ["200", "201"],
  "POST /lro/customheader/post/202/retry/200": ["202"],
  "GET /lro/customheader/post/202/retry/200": ["202"],
  "POST /lro/customheader/postasync/retry/succeeded": ["202"],
  "GET /lro/customheader/postasync/retry/succeeded": ["202"],
};

export function isUnexpected(
  response:
    | LROsPut200Succeeded200Response
    | LROsPut200Succeeded204Response
    | LROsPut200SucceededDefaultResponse,
): response is LROsPut200SucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsPatch200SucceededIgnoreHeaders200Response
    | LROsPatch200SucceededIgnoreHeadersDefaultResponse,
): response is LROsPatch200SucceededIgnoreHeadersDefaultResponse;
export function isUnexpected(
  response:
    | LROsPatch201RetryWithAsyncHeader200Response
    | LROsPatch201RetryWithAsyncHeader201Response
    | LROsPatch201RetryWithAsyncHeaderDefaultResponse,
): response is LROsPatch201RetryWithAsyncHeaderDefaultResponse;
export function isUnexpected(
  response:
    | LROsPatch202RetryWithAsyncAndLocationHeader200Response
    | LROsPatch202RetryWithAsyncAndLocationHeader202Response
    | LROsPatch202RetryWithAsyncAndLocationHeaderDefaultResponse,
): response is LROsPatch202RetryWithAsyncAndLocationHeaderDefaultResponse;
export function isUnexpected(
  response: LROsPut201Succeeded201Response | LROsPut201SucceededDefaultResponse,
): response is LROsPut201SucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsPost202List200Response
    | LROsPost202List202Response
    | LROsPost202ListDefaultResponse,
): response is LROsPost202ListDefaultResponse;
export function isUnexpected(
  response:
    | LROsPut200SucceededNoState200Response
    | LROsPut200SucceededNoStateDefaultResponse,
): response is LROsPut200SucceededNoStateDefaultResponse;
export function isUnexpected(
  response: LROsPut202Retry200202Response | LROsPut202Retry200DefaultResponse,
): response is LROsPut202Retry200DefaultResponse;
export function isUnexpected(
  response:
    | LROsPut201CreatingSucceeded200200Response
    | LROsPut201CreatingSucceeded200201Response
    | LROsPut201CreatingSucceeded200DefaultResponse,
): response is LROsPut201CreatingSucceeded200DefaultResponse;
export function isUnexpected(
  response:
    | LROsPut200UpdatingSucceeded204200Response
    | LROsPut200UpdatingSucceeded204DefaultResponse,
): response is LROsPut200UpdatingSucceeded204DefaultResponse;
export function isUnexpected(
  response:
    | LROsPut201CreatingFailed200200Response
    | LROsPut201CreatingFailed200201Response
    | LROsPut201CreatingFailed200DefaultResponse,
): response is LROsPut201CreatingFailed200DefaultResponse;
export function isUnexpected(
  response:
    | LROsPut200Acceptedcanceled200200Response
    | LROsPut200Acceptedcanceled200DefaultResponse,
): response is LROsPut200Acceptedcanceled200DefaultResponse;
export function isUnexpected(
  response:
    | LROsPutNoHeaderInRetry202Response
    | LROsPutNoHeaderInRetryDefaultResponse,
): response is LROsPutNoHeaderInRetryDefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncRetrySucceeded200Response
    | LROsPutAsyncRetrySucceededDefaultResponse,
): response is LROsPutAsyncRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncNoRetrySucceeded200Response
    | LROsPutAsyncNoRetrySucceededDefaultResponse,
): response is LROsPutAsyncNoRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncRetryFailed200Response
    | LROsPutAsyncRetryFailedDefaultResponse,
): response is LROsPutAsyncRetryFailedDefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncNoRetrycanceled200Response
    | LROsPutAsyncNoRetrycanceledDefaultResponse,
): response is LROsPutAsyncNoRetrycanceledDefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncNoHeaderInRetry201Response
    | LROsPutAsyncNoHeaderInRetryDefaultResponse,
): response is LROsPutAsyncNoHeaderInRetryDefaultResponse;
export function isUnexpected(
  response: LROsPutNonResource202Response | LROsPutNonResourceDefaultResponse,
): response is LROsPutNonResourceDefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncNonResource202Response
    | LROsPutAsyncNonResourceDefaultResponse,
): response is LROsPutAsyncNonResourceDefaultResponse;
export function isUnexpected(
  response: LROsPutSubResource202Response | LROsPutSubResourceDefaultResponse,
): response is LROsPutSubResourceDefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncSubResource202Response
    | LROsPutAsyncSubResourceDefaultResponse,
): response is LROsPutAsyncSubResourceDefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteProvisioning202Accepted200Succeeded200Response
    | LROsDeleteProvisioning202Accepted200Succeeded202Response
    | LROsDeleteProvisioning202Accepted200SucceededDefaultResponse,
): response is LROsDeleteProvisioning202Accepted200SucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteProvisioning202DeletingFailed200200Response
    | LROsDeleteProvisioning202DeletingFailed200202Response
    | LROsDeleteProvisioning202DeletingFailed200DefaultResponse,
): response is LROsDeleteProvisioning202DeletingFailed200DefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteProvisioning202Deletingcanceled200200Response
    | LROsDeleteProvisioning202Deletingcanceled200202Response
    | LROsDeleteProvisioning202Deletingcanceled200DefaultResponse,
): response is LROsDeleteProvisioning202Deletingcanceled200DefaultResponse;
export function isUnexpected(
  response:
    | LROsDelete204Succeeded204Response
    | LROsDelete204SucceededDefaultResponse,
): response is LROsDelete204SucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsDelete202Retry200200Response
    | LROsDelete202Retry200202Response
    | LROsDelete202Retry200DefaultResponse,
): response is LROsDelete202Retry200DefaultResponse;
export function isUnexpected(
  response:
    | LROsDelete202NoRetry204200Response
    | LROsDelete202NoRetry204202Response
    | LROsDelete202NoRetry204DefaultResponse,
): response is LROsDelete202NoRetry204DefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteNoHeaderInRetry202Response
    | LROsDeleteNoHeaderInRetry204Response
    | LROsDeleteNoHeaderInRetryDefaultResponse,
): response is LROsDeleteNoHeaderInRetryDefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteAsyncNoHeaderInRetry202Response
    | LROsDeleteAsyncNoHeaderInRetry204Response
    | LROsDeleteAsyncNoHeaderInRetryDefaultResponse,
): response is LROsDeleteAsyncNoHeaderInRetryDefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteAsyncRetrySucceeded202Response
    | LROsDeleteAsyncRetrySucceededDefaultResponse,
): response is LROsDeleteAsyncRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteAsyncNoRetrySucceeded202Response
    | LROsDeleteAsyncNoRetrySucceededDefaultResponse,
): response is LROsDeleteAsyncNoRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteAsyncRetryFailed202Response
    | LROsDeleteAsyncRetryFailedDefaultResponse,
): response is LROsDeleteAsyncRetryFailedDefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteAsyncRetrycanceled202Response
    | LROsDeleteAsyncRetrycanceledDefaultResponse,
): response is LROsDeleteAsyncRetrycanceledDefaultResponse;
export function isUnexpected(
  response:
    | LROsPost200WithPayload200Response
    | LROsPost200WithPayload202Response
    | LROsPost200WithPayloadDefaultResponse,
): response is LROsPost200WithPayloadDefaultResponse;
export function isUnexpected(
  response: LROsPost202Retry200202Response | LROsPost202Retry200DefaultResponse,
): response is LROsPost202Retry200DefaultResponse;
export function isUnexpected(
  response:
    | LROsPost202NoRetry204202Response
    | LROsPost202NoRetry204DefaultResponse,
): response is LROsPost202NoRetry204DefaultResponse;
export function isUnexpected(
  response:
    | LROsPostDoubleHeadersFinalLocationGet202Response
    | LROsPostDoubleHeadersFinalLocationGetDefaultResponse,
): response is LROsPostDoubleHeadersFinalLocationGetDefaultResponse;
export function isUnexpected(
  response:
    | LROsPostDoubleHeadersFinalAzureHeaderGet202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultResponse,
): response is LROsPostDoubleHeadersFinalAzureHeaderGetDefaultResponse;
export function isUnexpected(
  response:
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultDefaultResponse,
): response is LROsPostDoubleHeadersFinalAzureHeaderGetDefaultDefaultResponse;
export function isUnexpected(
  response:
    | LROsPostAsyncRetrySucceeded200Response
    | LROsPostAsyncRetrySucceeded202Response
    | LROsPostAsyncRetrySucceededDefaultResponse,
): response is LROsPostAsyncRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsPostAsyncNoRetrySucceeded200Response
    | LROsPostAsyncNoRetrySucceeded202Response
    | LROsPostAsyncNoRetrySucceededDefaultResponse,
): response is LROsPostAsyncNoRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsPostAsyncRetryFailed202Response
    | LROsPostAsyncRetryFailedDefaultResponse,
): response is LROsPostAsyncRetryFailedDefaultResponse;
export function isUnexpected(
  response:
    | LROsPostAsyncRetrycanceled202Response
    | LROsPostAsyncRetrycanceledDefaultResponse,
): response is LROsPostAsyncRetrycanceledDefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysPut201CreatingSucceeded200200Response
    | LRORetrysPut201CreatingSucceeded200201Response
    | LRORetrysPut201CreatingSucceeded200DefaultResponse,
): response is LRORetrysPut201CreatingSucceeded200DefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysPutAsyncRelativeRetrySucceeded200Response
    | LRORetrysPutAsyncRelativeRetrySucceededDefaultResponse,
): response is LRORetrysPutAsyncRelativeRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysDeleteProvisioning202Accepted200Succeeded200Response
    | LRORetrysDeleteProvisioning202Accepted200Succeeded202Response
    | LRORetrysDeleteProvisioning202Accepted200SucceededDefaultResponse,
): response is LRORetrysDeleteProvisioning202Accepted200SucceededDefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysDelete202Retry200202Response
    | LRORetrysDelete202Retry200DefaultResponse,
): response is LRORetrysDelete202Retry200DefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysDeleteAsyncRelativeRetrySucceeded202Response
    | LRORetrysDeleteAsyncRelativeRetrySucceededDefaultResponse,
): response is LRORetrysDeleteAsyncRelativeRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysPost202Retry200202Response
    | LRORetrysPost202Retry200DefaultResponse,
): response is LRORetrysPost202Retry200DefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysPostAsyncRelativeRetrySucceeded202Response
    | LRORetrysPostAsyncRelativeRetrySucceededDefaultResponse,
): response is LRORetrysPostAsyncRelativeRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutNonRetry400200Response
    | LrosaDsPutNonRetry400201Response
    | LrosaDsPutNonRetry400DefaultResponse,
): response is LrosaDsPutNonRetry400DefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutNonRetry201Creating400200Response
    | LrosaDsPutNonRetry201Creating400201Response
    | LrosaDsPutNonRetry201Creating400DefaultResponse,
): response is LrosaDsPutNonRetry201Creating400DefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutNonRetry201Creating400InvalidJson200Response
    | LrosaDsPutNonRetry201Creating400InvalidJson201Response
    | LrosaDsPutNonRetry201Creating400InvalidJsonDefaultResponse,
): response is LrosaDsPutNonRetry201Creating400InvalidJsonDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutAsyncRelativeRetry400200Response
    | LrosaDsPutAsyncRelativeRetry400DefaultResponse,
): response is LrosaDsPutAsyncRelativeRetry400DefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDeleteNonRetry400202Response
    | LrosaDsDeleteNonRetry400DefaultResponse,
): response is LrosaDsDeleteNonRetry400DefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDelete202NonRetry400202Response
    | LrosaDsDelete202NonRetry400DefaultResponse,
): response is LrosaDsDelete202NonRetry400DefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDeleteAsyncRelativeRetry400202Response
    | LrosaDsDeleteAsyncRelativeRetry400DefaultResponse,
): response is LrosaDsDeleteAsyncRelativeRetry400DefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPostNonRetry400202Response
    | LrosaDsPostNonRetry400DefaultResponse,
): response is LrosaDsPostNonRetry400DefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPost202NonRetry400202Response
    | LrosaDsPost202NonRetry400DefaultResponse,
): response is LrosaDsPost202NonRetry400DefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPostAsyncRelativeRetry400202Response
    | LrosaDsPostAsyncRelativeRetry400DefaultResponse,
): response is LrosaDsPostAsyncRelativeRetry400DefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutError201NoProvisioningStatePayload200Response
    | LrosaDsPutError201NoProvisioningStatePayload201Response
    | LrosaDsPutError201NoProvisioningStatePayloadDefaultResponse,
): response is LrosaDsPutError201NoProvisioningStatePayloadDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutAsyncRelativeRetryNoStatus200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusDefaultResponse,
): response is LrosaDsPutAsyncRelativeRetryNoStatusDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusPayloadDefaultResponse,
): response is LrosaDsPutAsyncRelativeRetryNoStatusPayloadDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDelete204Succeeded204Response
    | LrosaDsDelete204SucceededDefaultResponse,
): response is LrosaDsDelete204SucceededDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDeleteAsyncRelativeRetryNoStatus202Response
    | LrosaDsDeleteAsyncRelativeRetryNoStatusDefaultResponse,
): response is LrosaDsDeleteAsyncRelativeRetryNoStatusDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPost202NoLocation202Response
    | LrosaDsPost202NoLocationDefaultResponse,
): response is LrosaDsPost202NoLocationDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPostAsyncRelativeRetryNoPayload202Response
    | LrosaDsPostAsyncRelativeRetryNoPayloadDefaultResponse,
): response is LrosaDsPostAsyncRelativeRetryNoPayloadDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPut200InvalidJson200Response
    | LrosaDsPut200InvalidJson204Response
    | LrosaDsPut200InvalidJsonDefaultResponse,
): response is LrosaDsPut200InvalidJsonDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutAsyncRelativeRetryInvalidHeader200Response
    | LrosaDsPutAsyncRelativeRetryInvalidHeaderDefaultResponse,
): response is LrosaDsPutAsyncRelativeRetryInvalidHeaderDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPollingDefaultResponse,
): response is LrosaDsPutAsyncRelativeRetryInvalidJsonPollingDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDelete202RetryInvalidHeader202Response
    | LrosaDsDelete202RetryInvalidHeaderDefaultResponse,
): response is LrosaDsDelete202RetryInvalidHeaderDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeaderDefaultResponse,
): response is LrosaDsDeleteAsyncRelativeRetryInvalidHeaderDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingDefaultResponse,
): response is LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPost202RetryInvalidHeader202Response
    | LrosaDsPost202RetryInvalidHeaderDefaultResponse,
): response is LrosaDsPost202RetryInvalidHeaderDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPostAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsPostAsyncRelativeRetryInvalidHeaderDefaultResponse,
): response is LrosaDsPostAsyncRelativeRetryInvalidHeaderDefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPollingDefaultResponse,
): response is LrosaDsPostAsyncRelativeRetryInvalidJsonPollingDefaultResponse;
export function isUnexpected(
  response:
    | LROsCustomHeaderPutAsyncRetrySucceeded200Response
    | LROsCustomHeaderPutAsyncRetrySucceededDefaultResponse,
): response is LROsCustomHeaderPutAsyncRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsCustomHeaderPut201CreatingSucceeded200200Response
    | LROsCustomHeaderPut201CreatingSucceeded200201Response
    | LROsCustomHeaderPut201CreatingSucceeded200DefaultResponse,
): response is LROsCustomHeaderPut201CreatingSucceeded200DefaultResponse;
export function isUnexpected(
  response:
    | LROsCustomHeaderPost202Retry200202Response
    | LROsCustomHeaderPost202Retry200DefaultResponse,
): response is LROsCustomHeaderPost202Retry200DefaultResponse;
export function isUnexpected(
  response:
    | LROsCustomHeaderPostAsyncRetrySucceeded202Response
    | LROsCustomHeaderPostAsyncRetrySucceededDefaultResponse,
): response is LROsCustomHeaderPostAsyncRetrySucceededDefaultResponse;
export function isUnexpected(
  response:
    | LROsPut200Succeeded200Response
    | LROsPut200Succeeded204Response
    | LROsPut200SucceededDefaultResponse
    | LROsPatch200SucceededIgnoreHeaders200Response
    | LROsPatch200SucceededIgnoreHeadersDefaultResponse
    | LROsPatch201RetryWithAsyncHeader200Response
    | LROsPatch201RetryWithAsyncHeader201Response
    | LROsPatch201RetryWithAsyncHeaderDefaultResponse
    | LROsPatch202RetryWithAsyncAndLocationHeader200Response
    | LROsPatch202RetryWithAsyncAndLocationHeader202Response
    | LROsPatch202RetryWithAsyncAndLocationHeaderDefaultResponse
    | LROsPut201Succeeded201Response
    | LROsPut201SucceededDefaultResponse
    | LROsPost202List200Response
    | LROsPost202List202Response
    | LROsPost202ListDefaultResponse
    | LROsPut200SucceededNoState200Response
    | LROsPut200SucceededNoStateDefaultResponse
    | LROsPut202Retry200202Response
    | LROsPut202Retry200DefaultResponse
    | LROsPut201CreatingSucceeded200200Response
    | LROsPut201CreatingSucceeded200201Response
    | LROsPut201CreatingSucceeded200DefaultResponse
    | LROsPut200UpdatingSucceeded204200Response
    | LROsPut200UpdatingSucceeded204DefaultResponse
    | LROsPut201CreatingFailed200200Response
    | LROsPut201CreatingFailed200201Response
    | LROsPut201CreatingFailed200DefaultResponse
    | LROsPut200Acceptedcanceled200200Response
    | LROsPut200Acceptedcanceled200DefaultResponse
    | LROsPutNoHeaderInRetry202Response
    | LROsPutNoHeaderInRetryDefaultResponse
    | LROsPutAsyncRetrySucceeded200Response
    | LROsPutAsyncRetrySucceededDefaultResponse
    | LROsPutAsyncNoRetrySucceeded200Response
    | LROsPutAsyncNoRetrySucceededDefaultResponse
    | LROsPutAsyncRetryFailed200Response
    | LROsPutAsyncRetryFailedDefaultResponse
    | LROsPutAsyncNoRetrycanceled200Response
    | LROsPutAsyncNoRetrycanceledDefaultResponse
    | LROsPutAsyncNoHeaderInRetry201Response
    | LROsPutAsyncNoHeaderInRetryDefaultResponse
    | LROsPutNonResource202Response
    | LROsPutNonResourceDefaultResponse
    | LROsPutAsyncNonResource202Response
    | LROsPutAsyncNonResourceDefaultResponse
    | LROsPutSubResource202Response
    | LROsPutSubResourceDefaultResponse
    | LROsPutAsyncSubResource202Response
    | LROsPutAsyncSubResourceDefaultResponse
    | LROsDeleteProvisioning202Accepted200Succeeded200Response
    | LROsDeleteProvisioning202Accepted200Succeeded202Response
    | LROsDeleteProvisioning202Accepted200SucceededDefaultResponse
    | LROsDeleteProvisioning202DeletingFailed200200Response
    | LROsDeleteProvisioning202DeletingFailed200202Response
    | LROsDeleteProvisioning202DeletingFailed200DefaultResponse
    | LROsDeleteProvisioning202Deletingcanceled200200Response
    | LROsDeleteProvisioning202Deletingcanceled200202Response
    | LROsDeleteProvisioning202Deletingcanceled200DefaultResponse
    | LROsDelete204Succeeded204Response
    | LROsDelete204SucceededDefaultResponse
    | LROsDelete202Retry200200Response
    | LROsDelete202Retry200202Response
    | LROsDelete202Retry200DefaultResponse
    | LROsDelete202NoRetry204200Response
    | LROsDelete202NoRetry204202Response
    | LROsDelete202NoRetry204DefaultResponse
    | LROsDeleteNoHeaderInRetry202Response
    | LROsDeleteNoHeaderInRetry204Response
    | LROsDeleteNoHeaderInRetryDefaultResponse
    | LROsDeleteAsyncNoHeaderInRetry202Response
    | LROsDeleteAsyncNoHeaderInRetry204Response
    | LROsDeleteAsyncNoHeaderInRetryDefaultResponse
    | LROsDeleteAsyncRetrySucceeded202Response
    | LROsDeleteAsyncRetrySucceededDefaultResponse
    | LROsDeleteAsyncNoRetrySucceeded202Response
    | LROsDeleteAsyncNoRetrySucceededDefaultResponse
    | LROsDeleteAsyncRetryFailed202Response
    | LROsDeleteAsyncRetryFailedDefaultResponse
    | LROsDeleteAsyncRetrycanceled202Response
    | LROsDeleteAsyncRetrycanceledDefaultResponse
    | LROsPost200WithPayload200Response
    | LROsPost200WithPayload202Response
    | LROsPost200WithPayloadDefaultResponse
    | LROsPost202Retry200202Response
    | LROsPost202Retry200DefaultResponse
    | LROsPost202NoRetry204202Response
    | LROsPost202NoRetry204DefaultResponse
    | LROsPostDoubleHeadersFinalLocationGet202Response
    | LROsPostDoubleHeadersFinalLocationGetDefaultResponse
    | LROsPostDoubleHeadersFinalAzureHeaderGet202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultResponse
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultDefaultResponse
    | LROsPostAsyncRetrySucceeded200Response
    | LROsPostAsyncRetrySucceeded202Response
    | LROsPostAsyncRetrySucceededDefaultResponse
    | LROsPostAsyncNoRetrySucceeded200Response
    | LROsPostAsyncNoRetrySucceeded202Response
    | LROsPostAsyncNoRetrySucceededDefaultResponse
    | LROsPostAsyncRetryFailed202Response
    | LROsPostAsyncRetryFailedDefaultResponse
    | LROsPostAsyncRetrycanceled202Response
    | LROsPostAsyncRetrycanceledDefaultResponse
    | LRORetrysPut201CreatingSucceeded200200Response
    | LRORetrysPut201CreatingSucceeded200201Response
    | LRORetrysPut201CreatingSucceeded200DefaultResponse
    | LRORetrysPutAsyncRelativeRetrySucceeded200Response
    | LRORetrysPutAsyncRelativeRetrySucceededDefaultResponse
    | LRORetrysDeleteProvisioning202Accepted200Succeeded200Response
    | LRORetrysDeleteProvisioning202Accepted200Succeeded202Response
    | LRORetrysDeleteProvisioning202Accepted200SucceededDefaultResponse
    | LRORetrysDelete202Retry200202Response
    | LRORetrysDelete202Retry200DefaultResponse
    | LRORetrysDeleteAsyncRelativeRetrySucceeded202Response
    | LRORetrysDeleteAsyncRelativeRetrySucceededDefaultResponse
    | LRORetrysPost202Retry200202Response
    | LRORetrysPost202Retry200DefaultResponse
    | LRORetrysPostAsyncRelativeRetrySucceeded202Response
    | LRORetrysPostAsyncRelativeRetrySucceededDefaultResponse
    | LrosaDsPutNonRetry400200Response
    | LrosaDsPutNonRetry400201Response
    | LrosaDsPutNonRetry400DefaultResponse
    | LrosaDsPutNonRetry201Creating400200Response
    | LrosaDsPutNonRetry201Creating400201Response
    | LrosaDsPutNonRetry201Creating400DefaultResponse
    | LrosaDsPutNonRetry201Creating400InvalidJson200Response
    | LrosaDsPutNonRetry201Creating400InvalidJson201Response
    | LrosaDsPutNonRetry201Creating400InvalidJsonDefaultResponse
    | LrosaDsPutAsyncRelativeRetry400200Response
    | LrosaDsPutAsyncRelativeRetry400DefaultResponse
    | LrosaDsDeleteNonRetry400202Response
    | LrosaDsDeleteNonRetry400DefaultResponse
    | LrosaDsDelete202NonRetry400202Response
    | LrosaDsDelete202NonRetry400DefaultResponse
    | LrosaDsDeleteAsyncRelativeRetry400202Response
    | LrosaDsDeleteAsyncRelativeRetry400DefaultResponse
    | LrosaDsPostNonRetry400202Response
    | LrosaDsPostNonRetry400DefaultResponse
    | LrosaDsPost202NonRetry400202Response
    | LrosaDsPost202NonRetry400DefaultResponse
    | LrosaDsPostAsyncRelativeRetry400202Response
    | LrosaDsPostAsyncRelativeRetry400DefaultResponse
    | LrosaDsPutError201NoProvisioningStatePayload200Response
    | LrosaDsPutError201NoProvisioningStatePayload201Response
    | LrosaDsPutError201NoProvisioningStatePayloadDefaultResponse
    | LrosaDsPutAsyncRelativeRetryNoStatus200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusDefaultResponse
    | LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusPayloadDefaultResponse
    | LrosaDsDelete204Succeeded204Response
    | LrosaDsDelete204SucceededDefaultResponse
    | LrosaDsDeleteAsyncRelativeRetryNoStatus202Response
    | LrosaDsDeleteAsyncRelativeRetryNoStatusDefaultResponse
    | LrosaDsPost202NoLocation202Response
    | LrosaDsPost202NoLocationDefaultResponse
    | LrosaDsPostAsyncRelativeRetryNoPayload202Response
    | LrosaDsPostAsyncRelativeRetryNoPayloadDefaultResponse
    | LrosaDsPut200InvalidJson200Response
    | LrosaDsPut200InvalidJson204Response
    | LrosaDsPut200InvalidJsonDefaultResponse
    | LrosaDsPutAsyncRelativeRetryInvalidHeader200Response
    | LrosaDsPutAsyncRelativeRetryInvalidHeaderDefaultResponse
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPollingDefaultResponse
    | LrosaDsDelete202RetryInvalidHeader202Response
    | LrosaDsDelete202RetryInvalidHeaderDefaultResponse
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeaderDefaultResponse
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingDefaultResponse
    | LrosaDsPost202RetryInvalidHeader202Response
    | LrosaDsPost202RetryInvalidHeaderDefaultResponse
    | LrosaDsPostAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsPostAsyncRelativeRetryInvalidHeaderDefaultResponse
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPollingDefaultResponse
    | LROsCustomHeaderPutAsyncRetrySucceeded200Response
    | LROsCustomHeaderPutAsyncRetrySucceededDefaultResponse
    | LROsCustomHeaderPut201CreatingSucceeded200200Response
    | LROsCustomHeaderPut201CreatingSucceeded200201Response
    | LROsCustomHeaderPut201CreatingSucceeded200DefaultResponse
    | LROsCustomHeaderPost202Retry200202Response
    | LROsCustomHeaderPost202Retry200DefaultResponse
    | LROsCustomHeaderPostAsyncRetrySucceeded202Response
    | LROsCustomHeaderPostAsyncRetrySucceededDefaultResponse,
): response is
  | LROsPut200SucceededDefaultResponse
  | LROsPatch200SucceededIgnoreHeadersDefaultResponse
  | LROsPatch201RetryWithAsyncHeaderDefaultResponse
  | LROsPatch202RetryWithAsyncAndLocationHeaderDefaultResponse
  | LROsPut201SucceededDefaultResponse
  | LROsPost202ListDefaultResponse
  | LROsPut200SucceededNoStateDefaultResponse
  | LROsPut202Retry200DefaultResponse
  | LROsPut201CreatingSucceeded200DefaultResponse
  | LROsPut200UpdatingSucceeded204DefaultResponse
  | LROsPut201CreatingFailed200DefaultResponse
  | LROsPut200Acceptedcanceled200DefaultResponse
  | LROsPutNoHeaderInRetryDefaultResponse
  | LROsPutAsyncRetrySucceededDefaultResponse
  | LROsPutAsyncNoRetrySucceededDefaultResponse
  | LROsPutAsyncRetryFailedDefaultResponse
  | LROsPutAsyncNoRetrycanceledDefaultResponse
  | LROsPutAsyncNoHeaderInRetryDefaultResponse
  | LROsPutNonResourceDefaultResponse
  | LROsPutAsyncNonResourceDefaultResponse
  | LROsPutSubResourceDefaultResponse
  | LROsPutAsyncSubResourceDefaultResponse
  | LROsDeleteProvisioning202Accepted200SucceededDefaultResponse
  | LROsDeleteProvisioning202DeletingFailed200DefaultResponse
  | LROsDeleteProvisioning202Deletingcanceled200DefaultResponse
  | LROsDelete204SucceededDefaultResponse
  | LROsDelete202Retry200DefaultResponse
  | LROsDelete202NoRetry204DefaultResponse
  | LROsDeleteNoHeaderInRetryDefaultResponse
  | LROsDeleteAsyncNoHeaderInRetryDefaultResponse
  | LROsDeleteAsyncRetrySucceededDefaultResponse
  | LROsDeleteAsyncNoRetrySucceededDefaultResponse
  | LROsDeleteAsyncRetryFailedDefaultResponse
  | LROsDeleteAsyncRetrycanceledDefaultResponse
  | LROsPost200WithPayloadDefaultResponse
  | LROsPost202Retry200DefaultResponse
  | LROsPost202NoRetry204DefaultResponse
  | LROsPostDoubleHeadersFinalLocationGetDefaultResponse
  | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultResponse
  | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultDefaultResponse
  | LROsPostAsyncRetrySucceededDefaultResponse
  | LROsPostAsyncNoRetrySucceededDefaultResponse
  | LROsPostAsyncRetryFailedDefaultResponse
  | LROsPostAsyncRetrycanceledDefaultResponse
  | LRORetrysPut201CreatingSucceeded200DefaultResponse
  | LRORetrysPutAsyncRelativeRetrySucceededDefaultResponse
  | LRORetrysDeleteProvisioning202Accepted200SucceededDefaultResponse
  | LRORetrysDelete202Retry200DefaultResponse
  | LRORetrysDeleteAsyncRelativeRetrySucceededDefaultResponse
  | LRORetrysPost202Retry200DefaultResponse
  | LRORetrysPostAsyncRelativeRetrySucceededDefaultResponse
  | LrosaDsPutNonRetry400DefaultResponse
  | LrosaDsPutNonRetry201Creating400DefaultResponse
  | LrosaDsPutNonRetry201Creating400InvalidJsonDefaultResponse
  | LrosaDsPutAsyncRelativeRetry400DefaultResponse
  | LrosaDsDeleteNonRetry400DefaultResponse
  | LrosaDsDelete202NonRetry400DefaultResponse
  | LrosaDsDeleteAsyncRelativeRetry400DefaultResponse
  | LrosaDsPostNonRetry400DefaultResponse
  | LrosaDsPost202NonRetry400DefaultResponse
  | LrosaDsPostAsyncRelativeRetry400DefaultResponse
  | LrosaDsPutError201NoProvisioningStatePayloadDefaultResponse
  | LrosaDsPutAsyncRelativeRetryNoStatusDefaultResponse
  | LrosaDsPutAsyncRelativeRetryNoStatusPayloadDefaultResponse
  | LrosaDsDelete204SucceededDefaultResponse
  | LrosaDsDeleteAsyncRelativeRetryNoStatusDefaultResponse
  | LrosaDsPost202NoLocationDefaultResponse
  | LrosaDsPostAsyncRelativeRetryNoPayloadDefaultResponse
  | LrosaDsPut200InvalidJsonDefaultResponse
  | LrosaDsPutAsyncRelativeRetryInvalidHeaderDefaultResponse
  | LrosaDsPutAsyncRelativeRetryInvalidJsonPollingDefaultResponse
  | LrosaDsDelete202RetryInvalidHeaderDefaultResponse
  | LrosaDsDeleteAsyncRelativeRetryInvalidHeaderDefaultResponse
  | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingDefaultResponse
  | LrosaDsPost202RetryInvalidHeaderDefaultResponse
  | LrosaDsPostAsyncRelativeRetryInvalidHeaderDefaultResponse
  | LrosaDsPostAsyncRelativeRetryInvalidJsonPollingDefaultResponse
  | LROsCustomHeaderPutAsyncRetrySucceededDefaultResponse
  | LROsCustomHeaderPut201CreatingSucceeded200DefaultResponse
  | LROsCustomHeaderPost202Retry200DefaultResponse
  | LROsCustomHeaderPostAsyncRetrySucceededDefaultResponse {
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
