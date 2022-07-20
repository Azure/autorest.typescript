// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  LROsPut200Succeeded200Response,
  LROsPut200Succeeded204Response,
  LROsPut200SucceededdefaultResponse,
  LROsPatch200SucceededIgnoreHeaders200Response,
  LROsPatch200SucceededIgnoreHeadersdefaultResponse,
  LROsPatch201RetryWithAsyncHeader200Response,
  LROsPatch201RetryWithAsyncHeader201Response,
  LROsPatch201RetryWithAsyncHeaderdefaultResponse,
  LROsPatch202RetryWithAsyncAndLocationHeader200Response,
  LROsPatch202RetryWithAsyncAndLocationHeader202Response,
  LROsPatch202RetryWithAsyncAndLocationHeaderdefaultResponse,
  LROsPut201Succeeded201Response,
  LROsPut201SucceededdefaultResponse,
  LROsPost202List200Response,
  LROsPost202List202Response,
  LROsPost202ListdefaultResponse,
  LROsPut200SucceededNoState200Response,
  LROsPut200SucceededNoStatedefaultResponse,
  LROsPut202Retry200202Response,
  LROsPut202Retry200defaultResponse,
  LROsPut201CreatingSucceeded200200Response,
  LROsPut201CreatingSucceeded200201Response,
  LROsPut201CreatingSucceeded200defaultResponse,
  LROsPut200UpdatingSucceeded204200Response,
  LROsPut200UpdatingSucceeded204defaultResponse,
  LROsPut201CreatingFailed200200Response,
  LROsPut201CreatingFailed200201Response,
  LROsPut201CreatingFailed200defaultResponse,
  LROsPut200Acceptedcanceled200200Response,
  LROsPut200Acceptedcanceled200defaultResponse,
  LROsPutNoHeaderInRetry202Response,
  LROsPutNoHeaderInRetrydefaultResponse,
  LROsPutAsyncRetrySucceeded200Response,
  LROsPutAsyncRetrySucceededdefaultResponse,
  LROsPutAsyncNoRetrySucceeded200Response,
  LROsPutAsyncNoRetrySucceededdefaultResponse,
  LROsPutAsyncRetryFailed200Response,
  LROsPutAsyncRetryFaileddefaultResponse,
  LROsPutAsyncNoRetrycanceled200Response,
  LROsPutAsyncNoRetrycanceleddefaultResponse,
  LROsPutAsyncNoHeaderInRetry201Response,
  LROsPutAsyncNoHeaderInRetrydefaultResponse,
  LROsPutNonResource202Response,
  LROsPutNonResourcedefaultResponse,
  LROsPutAsyncNonResource202Response,
  LROsPutAsyncNonResourcedefaultResponse,
  LROsPutSubResource202Response,
  LROsPutSubResourcedefaultResponse,
  LROsPutAsyncSubResource202Response,
  LROsPutAsyncSubResourcedefaultResponse,
  LROsDeleteProvisioning202Accepted200Succeeded200Response,
  LROsDeleteProvisioning202Accepted200Succeeded202Response,
  LROsDeleteProvisioning202Accepted200SucceededdefaultResponse,
  LROsDeleteProvisioning202DeletingFailed200200Response,
  LROsDeleteProvisioning202DeletingFailed200202Response,
  LROsDeleteProvisioning202DeletingFailed200defaultResponse,
  LROsDeleteProvisioning202Deletingcanceled200200Response,
  LROsDeleteProvisioning202Deletingcanceled200202Response,
  LROsDeleteProvisioning202Deletingcanceled200defaultResponse,
  LROsDelete204Succeeded204Response,
  LROsDelete204SucceededdefaultResponse,
  LROsDelete202Retry200200Response,
  LROsDelete202Retry200202Response,
  LROsDelete202Retry200defaultResponse,
  LROsDelete202NoRetry204200Response,
  LROsDelete202NoRetry204202Response,
  LROsDelete202NoRetry204defaultResponse,
  LROsDeleteNoHeaderInRetry202Response,
  LROsDeleteNoHeaderInRetry204Response,
  LROsDeleteNoHeaderInRetrydefaultResponse,
  LROsDeleteAsyncNoHeaderInRetry202Response,
  LROsDeleteAsyncNoHeaderInRetry204Response,
  LROsDeleteAsyncNoHeaderInRetrydefaultResponse,
  LROsDeleteAsyncRetrySucceeded202Response,
  LROsDeleteAsyncRetrySucceededdefaultResponse,
  LROsDeleteAsyncNoRetrySucceeded202Response,
  LROsDeleteAsyncNoRetrySucceededdefaultResponse,
  LROsDeleteAsyncRetryFailed202Response,
  LROsDeleteAsyncRetryFaileddefaultResponse,
  LROsDeleteAsyncRetrycanceled202Response,
  LROsDeleteAsyncRetrycanceleddefaultResponse,
  LROsPost200WithPayload200Response,
  LROsPost200WithPayload202Response,
  LROsPost200WithPayloaddefaultResponse,
  LROsPost202Retry200202Response,
  LROsPost202Retry200defaultResponse,
  LROsPost202NoRetry204202Response,
  LROsPost202NoRetry204defaultResponse,
  LROsPostDoubleHeadersFinalLocationGet202Response,
  LROsPostDoubleHeadersFinalLocationGetdefaultResponse,
  LROsPostDoubleHeadersFinalAzureHeaderGet202Response,
  LROsPostDoubleHeadersFinalAzureHeaderGetdefaultResponse,
  LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response,
  LROsPostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse,
  LROsPostAsyncRetrySucceeded200Response,
  LROsPostAsyncRetrySucceeded202Response,
  LROsPostAsyncRetrySucceededdefaultResponse,
  LROsPostAsyncNoRetrySucceeded200Response,
  LROsPostAsyncNoRetrySucceeded202Response,
  LROsPostAsyncNoRetrySucceededdefaultResponse,
  LROsPostAsyncRetryFailed202Response,
  LROsPostAsyncRetryFaileddefaultResponse,
  LROsPostAsyncRetrycanceled202Response,
  LROsPostAsyncRetrycanceleddefaultResponse,
  LRORetrysPut201CreatingSucceeded200200Response,
  LRORetrysPut201CreatingSucceeded200201Response,
  LRORetrysPut201CreatingSucceeded200defaultResponse,
  LRORetrysPutAsyncRelativeRetrySucceeded200Response,
  LRORetrysPutAsyncRelativeRetrySucceededdefaultResponse,
  LRORetrysDeleteProvisioning202Accepted200Succeeded200Response,
  LRORetrysDeleteProvisioning202Accepted200Succeeded202Response,
  LRORetrysDeleteProvisioning202Accepted200SucceededdefaultResponse,
  LRORetrysDelete202Retry200202Response,
  LRORetrysDelete202Retry200defaultResponse,
  LRORetrysDeleteAsyncRelativeRetrySucceeded202Response,
  LRORetrysDeleteAsyncRelativeRetrySucceededdefaultResponse,
  LRORetrysPost202Retry200202Response,
  LRORetrysPost202Retry200defaultResponse,
  LRORetrysPostAsyncRelativeRetrySucceeded202Response,
  LRORetrysPostAsyncRelativeRetrySucceededdefaultResponse,
  LrosaDsPutNonRetry400200Response,
  LrosaDsPutNonRetry400201Response,
  LrosaDsPutNonRetry400defaultResponse,
  LrosaDsPutNonRetry201Creating400200Response,
  LrosaDsPutNonRetry201Creating400201Response,
  LrosaDsPutNonRetry201Creating400defaultResponse,
  LrosaDsPutNonRetry201Creating400InvalidJson200Response,
  LrosaDsPutNonRetry201Creating400InvalidJson201Response,
  LrosaDsPutNonRetry201Creating400InvalidJsondefaultResponse,
  LrosaDsPutAsyncRelativeRetry400200Response,
  LrosaDsPutAsyncRelativeRetry400defaultResponse,
  LrosaDsDeleteNonRetry400202Response,
  LrosaDsDeleteNonRetry400defaultResponse,
  LrosaDsDelete202NonRetry400202Response,
  LrosaDsDelete202NonRetry400defaultResponse,
  LrosaDsDeleteAsyncRelativeRetry400202Response,
  LrosaDsDeleteAsyncRelativeRetry400defaultResponse,
  LrosaDsPostNonRetry400202Response,
  LrosaDsPostNonRetry400defaultResponse,
  LrosaDsPost202NonRetry400202Response,
  LrosaDsPost202NonRetry400defaultResponse,
  LrosaDsPostAsyncRelativeRetry400202Response,
  LrosaDsPostAsyncRelativeRetry400defaultResponse,
  LrosaDsPutError201NoProvisioningStatePayload200Response,
  LrosaDsPutError201NoProvisioningStatePayload201Response,
  LrosaDsPutError201NoProvisioningStatePayloaddefaultResponse,
  LrosaDsPutAsyncRelativeRetryNoStatus200Response,
  LrosaDsPutAsyncRelativeRetryNoStatusdefaultResponse,
  LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response,
  LrosaDsPutAsyncRelativeRetryNoStatusPayloaddefaultResponse,
  LrosaDsDelete204Succeeded204Response,
  LrosaDsDelete204SucceededdefaultResponse,
  LrosaDsDeleteAsyncRelativeRetryNoStatus202Response,
  LrosaDsDeleteAsyncRelativeRetryNoStatusdefaultResponse,
  LrosaDsPost202NoLocation202Response,
  LrosaDsPost202NoLocationdefaultResponse,
  LrosaDsPostAsyncRelativeRetryNoPayload202Response,
  LrosaDsPostAsyncRelativeRetryNoPayloaddefaultResponse,
  LrosaDsPut200InvalidJson200Response,
  LrosaDsPut200InvalidJson204Response,
  LrosaDsPut200InvalidJsondefaultResponse,
  LrosaDsPutAsyncRelativeRetryInvalidHeader200Response,
  LrosaDsPutAsyncRelativeRetryInvalidHeaderdefaultResponse,
  LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response,
  LrosaDsPutAsyncRelativeRetryInvalidJsonPollingdefaultResponse,
  LrosaDsDelete202RetryInvalidHeader202Response,
  LrosaDsDelete202RetryInvalidHeaderdefaultResponse,
  LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Response,
  LrosaDsDeleteAsyncRelativeRetryInvalidHeaderdefaultResponse,
  LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Response,
  LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse,
  LrosaDsPost202RetryInvalidHeader202Response,
  LrosaDsPost202RetryInvalidHeaderdefaultResponse,
  LrosaDsPostAsyncRelativeRetryInvalidHeader202Response,
  LrosaDsPostAsyncRelativeRetryInvalidHeaderdefaultResponse,
  LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Response,
  LrosaDsPostAsyncRelativeRetryInvalidJsonPollingdefaultResponse,
  LROsCustomHeaderPutAsyncRetrySucceeded200Response,
  LROsCustomHeaderPutAsyncRetrySucceededdefaultResponse,
  LROsCustomHeaderPut201CreatingSucceeded200200Response,
  LROsCustomHeaderPut201CreatingSucceeded200201Response,
  LROsCustomHeaderPut201CreatingSucceeded200defaultResponse,
  LROsCustomHeaderPost202Retry200202Response,
  LROsCustomHeaderPost202Retry200defaultResponse,
  LROsCustomHeaderPostAsyncRetrySucceeded202Response,
  LROsCustomHeaderPostAsyncRetrySucceededdefaultResponse
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
    "202"
  ],
  "GET /lro/retryerror/delete/provisioning/202/accepted/200/succeeded": [
    "200",
    "202"
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
  "GET /lro/customheader/postasync/retry/succeeded": ["202"]
};

export function isUnexpected(
  response:
    | LROsPut200Succeeded200Response
    | LROsPut200Succeeded204Response
    | LROsPut200SucceededdefaultResponse
): response is LROsPut200SucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsPatch200SucceededIgnoreHeaders200Response
    | LROsPatch200SucceededIgnoreHeadersdefaultResponse
): response is LROsPatch200SucceededIgnoreHeadersdefaultResponse;
export function isUnexpected(
  response:
    | LROsPatch201RetryWithAsyncHeader200Response
    | LROsPatch201RetryWithAsyncHeader201Response
    | LROsPatch201RetryWithAsyncHeaderdefaultResponse
): response is LROsPatch201RetryWithAsyncHeaderdefaultResponse;
export function isUnexpected(
  response:
    | LROsPatch202RetryWithAsyncAndLocationHeader200Response
    | LROsPatch202RetryWithAsyncAndLocationHeader202Response
    | LROsPatch202RetryWithAsyncAndLocationHeaderdefaultResponse
): response is LROsPatch202RetryWithAsyncAndLocationHeaderdefaultResponse;
export function isUnexpected(
  response: LROsPut201Succeeded201Response | LROsPut201SucceededdefaultResponse
): response is LROsPut201SucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsPost202List200Response
    | LROsPost202List202Response
    | LROsPost202ListdefaultResponse
): response is LROsPost202ListdefaultResponse;
export function isUnexpected(
  response:
    | LROsPut200SucceededNoState200Response
    | LROsPut200SucceededNoStatedefaultResponse
): response is LROsPut200SucceededNoStatedefaultResponse;
export function isUnexpected(
  response: LROsPut202Retry200202Response | LROsPut202Retry200defaultResponse
): response is LROsPut202Retry200defaultResponse;
export function isUnexpected(
  response:
    | LROsPut201CreatingSucceeded200200Response
    | LROsPut201CreatingSucceeded200201Response
    | LROsPut201CreatingSucceeded200defaultResponse
): response is LROsPut201CreatingSucceeded200defaultResponse;
export function isUnexpected(
  response:
    | LROsPut200UpdatingSucceeded204200Response
    | LROsPut200UpdatingSucceeded204defaultResponse
): response is LROsPut200UpdatingSucceeded204defaultResponse;
export function isUnexpected(
  response:
    | LROsPut201CreatingFailed200200Response
    | LROsPut201CreatingFailed200201Response
    | LROsPut201CreatingFailed200defaultResponse
): response is LROsPut201CreatingFailed200defaultResponse;
export function isUnexpected(
  response:
    | LROsPut200Acceptedcanceled200200Response
    | LROsPut200Acceptedcanceled200defaultResponse
): response is LROsPut200Acceptedcanceled200defaultResponse;
export function isUnexpected(
  response:
    | LROsPutNoHeaderInRetry202Response
    | LROsPutNoHeaderInRetrydefaultResponse
): response is LROsPutNoHeaderInRetrydefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncRetrySucceeded200Response
    | LROsPutAsyncRetrySucceededdefaultResponse
): response is LROsPutAsyncRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncNoRetrySucceeded200Response
    | LROsPutAsyncNoRetrySucceededdefaultResponse
): response is LROsPutAsyncNoRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncRetryFailed200Response
    | LROsPutAsyncRetryFaileddefaultResponse
): response is LROsPutAsyncRetryFaileddefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncNoRetrycanceled200Response
    | LROsPutAsyncNoRetrycanceleddefaultResponse
): response is LROsPutAsyncNoRetrycanceleddefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncNoHeaderInRetry201Response
    | LROsPutAsyncNoHeaderInRetrydefaultResponse
): response is LROsPutAsyncNoHeaderInRetrydefaultResponse;
export function isUnexpected(
  response: LROsPutNonResource202Response | LROsPutNonResourcedefaultResponse
): response is LROsPutNonResourcedefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncNonResource202Response
    | LROsPutAsyncNonResourcedefaultResponse
): response is LROsPutAsyncNonResourcedefaultResponse;
export function isUnexpected(
  response: LROsPutSubResource202Response | LROsPutSubResourcedefaultResponse
): response is LROsPutSubResourcedefaultResponse;
export function isUnexpected(
  response:
    | LROsPutAsyncSubResource202Response
    | LROsPutAsyncSubResourcedefaultResponse
): response is LROsPutAsyncSubResourcedefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteProvisioning202Accepted200Succeeded200Response
    | LROsDeleteProvisioning202Accepted200Succeeded202Response
    | LROsDeleteProvisioning202Accepted200SucceededdefaultResponse
): response is LROsDeleteProvisioning202Accepted200SucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteProvisioning202DeletingFailed200200Response
    | LROsDeleteProvisioning202DeletingFailed200202Response
    | LROsDeleteProvisioning202DeletingFailed200defaultResponse
): response is LROsDeleteProvisioning202DeletingFailed200defaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteProvisioning202Deletingcanceled200200Response
    | LROsDeleteProvisioning202Deletingcanceled200202Response
    | LROsDeleteProvisioning202Deletingcanceled200defaultResponse
): response is LROsDeleteProvisioning202Deletingcanceled200defaultResponse;
export function isUnexpected(
  response:
    | LROsDelete204Succeeded204Response
    | LROsDelete204SucceededdefaultResponse
): response is LROsDelete204SucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsDelete202Retry200200Response
    | LROsDelete202Retry200202Response
    | LROsDelete202Retry200defaultResponse
): response is LROsDelete202Retry200defaultResponse;
export function isUnexpected(
  response:
    | LROsDelete202NoRetry204200Response
    | LROsDelete202NoRetry204202Response
    | LROsDelete202NoRetry204defaultResponse
): response is LROsDelete202NoRetry204defaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteNoHeaderInRetry202Response
    | LROsDeleteNoHeaderInRetry204Response
    | LROsDeleteNoHeaderInRetrydefaultResponse
): response is LROsDeleteNoHeaderInRetrydefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteAsyncNoHeaderInRetry202Response
    | LROsDeleteAsyncNoHeaderInRetry204Response
    | LROsDeleteAsyncNoHeaderInRetrydefaultResponse
): response is LROsDeleteAsyncNoHeaderInRetrydefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteAsyncRetrySucceeded202Response
    | LROsDeleteAsyncRetrySucceededdefaultResponse
): response is LROsDeleteAsyncRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteAsyncNoRetrySucceeded202Response
    | LROsDeleteAsyncNoRetrySucceededdefaultResponse
): response is LROsDeleteAsyncNoRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteAsyncRetryFailed202Response
    | LROsDeleteAsyncRetryFaileddefaultResponse
): response is LROsDeleteAsyncRetryFaileddefaultResponse;
export function isUnexpected(
  response:
    | LROsDeleteAsyncRetrycanceled202Response
    | LROsDeleteAsyncRetrycanceleddefaultResponse
): response is LROsDeleteAsyncRetrycanceleddefaultResponse;
export function isUnexpected(
  response:
    | LROsPost200WithPayload200Response
    | LROsPost200WithPayload202Response
    | LROsPost200WithPayloaddefaultResponse
): response is LROsPost200WithPayloaddefaultResponse;
export function isUnexpected(
  response: LROsPost202Retry200202Response | LROsPost202Retry200defaultResponse
): response is LROsPost202Retry200defaultResponse;
export function isUnexpected(
  response:
    | LROsPost202NoRetry204202Response
    | LROsPost202NoRetry204defaultResponse
): response is LROsPost202NoRetry204defaultResponse;
export function isUnexpected(
  response:
    | LROsPostDoubleHeadersFinalLocationGet202Response
    | LROsPostDoubleHeadersFinalLocationGetdefaultResponse
): response is LROsPostDoubleHeadersFinalLocationGetdefaultResponse;
export function isUnexpected(
  response:
    | LROsPostDoubleHeadersFinalAzureHeaderGet202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetdefaultResponse
): response is LROsPostDoubleHeadersFinalAzureHeaderGetdefaultResponse;
export function isUnexpected(
  response:
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse
): response is LROsPostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse;
export function isUnexpected(
  response:
    | LROsPostAsyncRetrySucceeded200Response
    | LROsPostAsyncRetrySucceeded202Response
    | LROsPostAsyncRetrySucceededdefaultResponse
): response is LROsPostAsyncRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsPostAsyncNoRetrySucceeded200Response
    | LROsPostAsyncNoRetrySucceeded202Response
    | LROsPostAsyncNoRetrySucceededdefaultResponse
): response is LROsPostAsyncNoRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsPostAsyncRetryFailed202Response
    | LROsPostAsyncRetryFaileddefaultResponse
): response is LROsPostAsyncRetryFaileddefaultResponse;
export function isUnexpected(
  response:
    | LROsPostAsyncRetrycanceled202Response
    | LROsPostAsyncRetrycanceleddefaultResponse
): response is LROsPostAsyncRetrycanceleddefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysPut201CreatingSucceeded200200Response
    | LRORetrysPut201CreatingSucceeded200201Response
    | LRORetrysPut201CreatingSucceeded200defaultResponse
): response is LRORetrysPut201CreatingSucceeded200defaultResponse;
export function isUnexpected(
  response:
    | LRORetrysPutAsyncRelativeRetrySucceeded200Response
    | LRORetrysPutAsyncRelativeRetrySucceededdefaultResponse
): response is LRORetrysPutAsyncRelativeRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysDeleteProvisioning202Accepted200Succeeded200Response
    | LRORetrysDeleteProvisioning202Accepted200Succeeded202Response
    | LRORetrysDeleteProvisioning202Accepted200SucceededdefaultResponse
): response is LRORetrysDeleteProvisioning202Accepted200SucceededdefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysDelete202Retry200202Response
    | LRORetrysDelete202Retry200defaultResponse
): response is LRORetrysDelete202Retry200defaultResponse;
export function isUnexpected(
  response:
    | LRORetrysDeleteAsyncRelativeRetrySucceeded202Response
    | LRORetrysDeleteAsyncRelativeRetrySucceededdefaultResponse
): response is LRORetrysDeleteAsyncRelativeRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LRORetrysPost202Retry200202Response
    | LRORetrysPost202Retry200defaultResponse
): response is LRORetrysPost202Retry200defaultResponse;
export function isUnexpected(
  response:
    | LRORetrysPostAsyncRelativeRetrySucceeded202Response
    | LRORetrysPostAsyncRelativeRetrySucceededdefaultResponse
): response is LRORetrysPostAsyncRelativeRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutNonRetry400200Response
    | LrosaDsPutNonRetry400201Response
    | LrosaDsPutNonRetry400defaultResponse
): response is LrosaDsPutNonRetry400defaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutNonRetry201Creating400200Response
    | LrosaDsPutNonRetry201Creating400201Response
    | LrosaDsPutNonRetry201Creating400defaultResponse
): response is LrosaDsPutNonRetry201Creating400defaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutNonRetry201Creating400InvalidJson200Response
    | LrosaDsPutNonRetry201Creating400InvalidJson201Response
    | LrosaDsPutNonRetry201Creating400InvalidJsondefaultResponse
): response is LrosaDsPutNonRetry201Creating400InvalidJsondefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutAsyncRelativeRetry400200Response
    | LrosaDsPutAsyncRelativeRetry400defaultResponse
): response is LrosaDsPutAsyncRelativeRetry400defaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDeleteNonRetry400202Response
    | LrosaDsDeleteNonRetry400defaultResponse
): response is LrosaDsDeleteNonRetry400defaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDelete202NonRetry400202Response
    | LrosaDsDelete202NonRetry400defaultResponse
): response is LrosaDsDelete202NonRetry400defaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDeleteAsyncRelativeRetry400202Response
    | LrosaDsDeleteAsyncRelativeRetry400defaultResponse
): response is LrosaDsDeleteAsyncRelativeRetry400defaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPostNonRetry400202Response
    | LrosaDsPostNonRetry400defaultResponse
): response is LrosaDsPostNonRetry400defaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPost202NonRetry400202Response
    | LrosaDsPost202NonRetry400defaultResponse
): response is LrosaDsPost202NonRetry400defaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPostAsyncRelativeRetry400202Response
    | LrosaDsPostAsyncRelativeRetry400defaultResponse
): response is LrosaDsPostAsyncRelativeRetry400defaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutError201NoProvisioningStatePayload200Response
    | LrosaDsPutError201NoProvisioningStatePayload201Response
    | LrosaDsPutError201NoProvisioningStatePayloaddefaultResponse
): response is LrosaDsPutError201NoProvisioningStatePayloaddefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutAsyncRelativeRetryNoStatus200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusdefaultResponse
): response is LrosaDsPutAsyncRelativeRetryNoStatusdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusPayloaddefaultResponse
): response is LrosaDsPutAsyncRelativeRetryNoStatusPayloaddefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDelete204Succeeded204Response
    | LrosaDsDelete204SucceededdefaultResponse
): response is LrosaDsDelete204SucceededdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDeleteAsyncRelativeRetryNoStatus202Response
    | LrosaDsDeleteAsyncRelativeRetryNoStatusdefaultResponse
): response is LrosaDsDeleteAsyncRelativeRetryNoStatusdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPost202NoLocation202Response
    | LrosaDsPost202NoLocationdefaultResponse
): response is LrosaDsPost202NoLocationdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPostAsyncRelativeRetryNoPayload202Response
    | LrosaDsPostAsyncRelativeRetryNoPayloaddefaultResponse
): response is LrosaDsPostAsyncRelativeRetryNoPayloaddefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPut200InvalidJson200Response
    | LrosaDsPut200InvalidJson204Response
    | LrosaDsPut200InvalidJsondefaultResponse
): response is LrosaDsPut200InvalidJsondefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutAsyncRelativeRetryInvalidHeader200Response
    | LrosaDsPutAsyncRelativeRetryInvalidHeaderdefaultResponse
): response is LrosaDsPutAsyncRelativeRetryInvalidHeaderdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPollingdefaultResponse
): response is LrosaDsPutAsyncRelativeRetryInvalidJsonPollingdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDelete202RetryInvalidHeader202Response
    | LrosaDsDelete202RetryInvalidHeaderdefaultResponse
): response is LrosaDsDelete202RetryInvalidHeaderdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeaderdefaultResponse
): response is LrosaDsDeleteAsyncRelativeRetryInvalidHeaderdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse
): response is LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPost202RetryInvalidHeader202Response
    | LrosaDsPost202RetryInvalidHeaderdefaultResponse
): response is LrosaDsPost202RetryInvalidHeaderdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPostAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsPostAsyncRelativeRetryInvalidHeaderdefaultResponse
): response is LrosaDsPostAsyncRelativeRetryInvalidHeaderdefaultResponse;
export function isUnexpected(
  response:
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPollingdefaultResponse
): response is LrosaDsPostAsyncRelativeRetryInvalidJsonPollingdefaultResponse;
export function isUnexpected(
  response:
    | LROsCustomHeaderPutAsyncRetrySucceeded200Response
    | LROsCustomHeaderPutAsyncRetrySucceededdefaultResponse
): response is LROsCustomHeaderPutAsyncRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsCustomHeaderPut201CreatingSucceeded200200Response
    | LROsCustomHeaderPut201CreatingSucceeded200201Response
    | LROsCustomHeaderPut201CreatingSucceeded200defaultResponse
): response is LROsCustomHeaderPut201CreatingSucceeded200defaultResponse;
export function isUnexpected(
  response:
    | LROsCustomHeaderPost202Retry200202Response
    | LROsCustomHeaderPost202Retry200defaultResponse
): response is LROsCustomHeaderPost202Retry200defaultResponse;
export function isUnexpected(
  response:
    | LROsCustomHeaderPostAsyncRetrySucceeded202Response
    | LROsCustomHeaderPostAsyncRetrySucceededdefaultResponse
): response is LROsCustomHeaderPostAsyncRetrySucceededdefaultResponse;
export function isUnexpected(
  response:
    | LROsPut200Succeeded200Response
    | LROsPut200Succeeded204Response
    | LROsPut200SucceededdefaultResponse
    | LROsPatch200SucceededIgnoreHeaders200Response
    | LROsPatch200SucceededIgnoreHeadersdefaultResponse
    | LROsPatch201RetryWithAsyncHeader200Response
    | LROsPatch201RetryWithAsyncHeader201Response
    | LROsPatch201RetryWithAsyncHeaderdefaultResponse
    | LROsPatch202RetryWithAsyncAndLocationHeader200Response
    | LROsPatch202RetryWithAsyncAndLocationHeader202Response
    | LROsPatch202RetryWithAsyncAndLocationHeaderdefaultResponse
    | LROsPut201Succeeded201Response
    | LROsPut201SucceededdefaultResponse
    | LROsPost202List200Response
    | LROsPost202List202Response
    | LROsPost202ListdefaultResponse
    | LROsPut200SucceededNoState200Response
    | LROsPut200SucceededNoStatedefaultResponse
    | LROsPut202Retry200202Response
    | LROsPut202Retry200defaultResponse
    | LROsPut201CreatingSucceeded200200Response
    | LROsPut201CreatingSucceeded200201Response
    | LROsPut201CreatingSucceeded200defaultResponse
    | LROsPut200UpdatingSucceeded204200Response
    | LROsPut200UpdatingSucceeded204defaultResponse
    | LROsPut201CreatingFailed200200Response
    | LROsPut201CreatingFailed200201Response
    | LROsPut201CreatingFailed200defaultResponse
    | LROsPut200Acceptedcanceled200200Response
    | LROsPut200Acceptedcanceled200defaultResponse
    | LROsPutNoHeaderInRetry202Response
    | LROsPutNoHeaderInRetrydefaultResponse
    | LROsPutAsyncRetrySucceeded200Response
    | LROsPutAsyncRetrySucceededdefaultResponse
    | LROsPutAsyncNoRetrySucceeded200Response
    | LROsPutAsyncNoRetrySucceededdefaultResponse
    | LROsPutAsyncRetryFailed200Response
    | LROsPutAsyncRetryFaileddefaultResponse
    | LROsPutAsyncNoRetrycanceled200Response
    | LROsPutAsyncNoRetrycanceleddefaultResponse
    | LROsPutAsyncNoHeaderInRetry201Response
    | LROsPutAsyncNoHeaderInRetrydefaultResponse
    | LROsPutNonResource202Response
    | LROsPutNonResourcedefaultResponse
    | LROsPutAsyncNonResource202Response
    | LROsPutAsyncNonResourcedefaultResponse
    | LROsPutSubResource202Response
    | LROsPutSubResourcedefaultResponse
    | LROsPutAsyncSubResource202Response
    | LROsPutAsyncSubResourcedefaultResponse
    | LROsDeleteProvisioning202Accepted200Succeeded200Response
    | LROsDeleteProvisioning202Accepted200Succeeded202Response
    | LROsDeleteProvisioning202Accepted200SucceededdefaultResponse
    | LROsDeleteProvisioning202DeletingFailed200200Response
    | LROsDeleteProvisioning202DeletingFailed200202Response
    | LROsDeleteProvisioning202DeletingFailed200defaultResponse
    | LROsDeleteProvisioning202Deletingcanceled200200Response
    | LROsDeleteProvisioning202Deletingcanceled200202Response
    | LROsDeleteProvisioning202Deletingcanceled200defaultResponse
    | LROsDelete204Succeeded204Response
    | LROsDelete204SucceededdefaultResponse
    | LROsDelete202Retry200200Response
    | LROsDelete202Retry200202Response
    | LROsDelete202Retry200defaultResponse
    | LROsDelete202NoRetry204200Response
    | LROsDelete202NoRetry204202Response
    | LROsDelete202NoRetry204defaultResponse
    | LROsDeleteNoHeaderInRetry202Response
    | LROsDeleteNoHeaderInRetry204Response
    | LROsDeleteNoHeaderInRetrydefaultResponse
    | LROsDeleteAsyncNoHeaderInRetry202Response
    | LROsDeleteAsyncNoHeaderInRetry204Response
    | LROsDeleteAsyncNoHeaderInRetrydefaultResponse
    | LROsDeleteAsyncRetrySucceeded202Response
    | LROsDeleteAsyncRetrySucceededdefaultResponse
    | LROsDeleteAsyncNoRetrySucceeded202Response
    | LROsDeleteAsyncNoRetrySucceededdefaultResponse
    | LROsDeleteAsyncRetryFailed202Response
    | LROsDeleteAsyncRetryFaileddefaultResponse
    | LROsDeleteAsyncRetrycanceled202Response
    | LROsDeleteAsyncRetrycanceleddefaultResponse
    | LROsPost200WithPayload200Response
    | LROsPost200WithPayload202Response
    | LROsPost200WithPayloaddefaultResponse
    | LROsPost202Retry200202Response
    | LROsPost202Retry200defaultResponse
    | LROsPost202NoRetry204202Response
    | LROsPost202NoRetry204defaultResponse
    | LROsPostDoubleHeadersFinalLocationGet202Response
    | LROsPostDoubleHeadersFinalLocationGetdefaultResponse
    | LROsPostDoubleHeadersFinalAzureHeaderGet202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetdefaultResponse
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse
    | LROsPostAsyncRetrySucceeded200Response
    | LROsPostAsyncRetrySucceeded202Response
    | LROsPostAsyncRetrySucceededdefaultResponse
    | LROsPostAsyncNoRetrySucceeded200Response
    | LROsPostAsyncNoRetrySucceeded202Response
    | LROsPostAsyncNoRetrySucceededdefaultResponse
    | LROsPostAsyncRetryFailed202Response
    | LROsPostAsyncRetryFaileddefaultResponse
    | LROsPostAsyncRetrycanceled202Response
    | LROsPostAsyncRetrycanceleddefaultResponse
    | LRORetrysPut201CreatingSucceeded200200Response
    | LRORetrysPut201CreatingSucceeded200201Response
    | LRORetrysPut201CreatingSucceeded200defaultResponse
    | LRORetrysPutAsyncRelativeRetrySucceeded200Response
    | LRORetrysPutAsyncRelativeRetrySucceededdefaultResponse
    | LRORetrysDeleteProvisioning202Accepted200Succeeded200Response
    | LRORetrysDeleteProvisioning202Accepted200Succeeded202Response
    | LRORetrysDeleteProvisioning202Accepted200SucceededdefaultResponse
    | LRORetrysDelete202Retry200202Response
    | LRORetrysDelete202Retry200defaultResponse
    | LRORetrysDeleteAsyncRelativeRetrySucceeded202Response
    | LRORetrysDeleteAsyncRelativeRetrySucceededdefaultResponse
    | LRORetrysPost202Retry200202Response
    | LRORetrysPost202Retry200defaultResponse
    | LRORetrysPostAsyncRelativeRetrySucceeded202Response
    | LRORetrysPostAsyncRelativeRetrySucceededdefaultResponse
    | LrosaDsPutNonRetry400200Response
    | LrosaDsPutNonRetry400201Response
    | LrosaDsPutNonRetry400defaultResponse
    | LrosaDsPutNonRetry201Creating400200Response
    | LrosaDsPutNonRetry201Creating400201Response
    | LrosaDsPutNonRetry201Creating400defaultResponse
    | LrosaDsPutNonRetry201Creating400InvalidJson200Response
    | LrosaDsPutNonRetry201Creating400InvalidJson201Response
    | LrosaDsPutNonRetry201Creating400InvalidJsondefaultResponse
    | LrosaDsPutAsyncRelativeRetry400200Response
    | LrosaDsPutAsyncRelativeRetry400defaultResponse
    | LrosaDsDeleteNonRetry400202Response
    | LrosaDsDeleteNonRetry400defaultResponse
    | LrosaDsDelete202NonRetry400202Response
    | LrosaDsDelete202NonRetry400defaultResponse
    | LrosaDsDeleteAsyncRelativeRetry400202Response
    | LrosaDsDeleteAsyncRelativeRetry400defaultResponse
    | LrosaDsPostNonRetry400202Response
    | LrosaDsPostNonRetry400defaultResponse
    | LrosaDsPost202NonRetry400202Response
    | LrosaDsPost202NonRetry400defaultResponse
    | LrosaDsPostAsyncRelativeRetry400202Response
    | LrosaDsPostAsyncRelativeRetry400defaultResponse
    | LrosaDsPutError201NoProvisioningStatePayload200Response
    | LrosaDsPutError201NoProvisioningStatePayload201Response
    | LrosaDsPutError201NoProvisioningStatePayloaddefaultResponse
    | LrosaDsPutAsyncRelativeRetryNoStatus200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusdefaultResponse
    | LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusPayloaddefaultResponse
    | LrosaDsDelete204Succeeded204Response
    | LrosaDsDelete204SucceededdefaultResponse
    | LrosaDsDeleteAsyncRelativeRetryNoStatus202Response
    | LrosaDsDeleteAsyncRelativeRetryNoStatusdefaultResponse
    | LrosaDsPost202NoLocation202Response
    | LrosaDsPost202NoLocationdefaultResponse
    | LrosaDsPostAsyncRelativeRetryNoPayload202Response
    | LrosaDsPostAsyncRelativeRetryNoPayloaddefaultResponse
    | LrosaDsPut200InvalidJson200Response
    | LrosaDsPut200InvalidJson204Response
    | LrosaDsPut200InvalidJsondefaultResponse
    | LrosaDsPutAsyncRelativeRetryInvalidHeader200Response
    | LrosaDsPutAsyncRelativeRetryInvalidHeaderdefaultResponse
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPollingdefaultResponse
    | LrosaDsDelete202RetryInvalidHeader202Response
    | LrosaDsDelete202RetryInvalidHeaderdefaultResponse
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeaderdefaultResponse
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse
    | LrosaDsPost202RetryInvalidHeader202Response
    | LrosaDsPost202RetryInvalidHeaderdefaultResponse
    | LrosaDsPostAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsPostAsyncRelativeRetryInvalidHeaderdefaultResponse
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPollingdefaultResponse
    | LROsCustomHeaderPutAsyncRetrySucceeded200Response
    | LROsCustomHeaderPutAsyncRetrySucceededdefaultResponse
    | LROsCustomHeaderPut201CreatingSucceeded200200Response
    | LROsCustomHeaderPut201CreatingSucceeded200201Response
    | LROsCustomHeaderPut201CreatingSucceeded200defaultResponse
    | LROsCustomHeaderPost202Retry200202Response
    | LROsCustomHeaderPost202Retry200defaultResponse
    | LROsCustomHeaderPostAsyncRetrySucceeded202Response
    | LROsCustomHeaderPostAsyncRetrySucceededdefaultResponse
): response is
  | LROsPut200SucceededdefaultResponse
  | LROsPatch200SucceededIgnoreHeadersdefaultResponse
  | LROsPatch201RetryWithAsyncHeaderdefaultResponse
  | LROsPatch202RetryWithAsyncAndLocationHeaderdefaultResponse
  | LROsPut201SucceededdefaultResponse
  | LROsPost202ListdefaultResponse
  | LROsPut200SucceededNoStatedefaultResponse
  | LROsPut202Retry200defaultResponse
  | LROsPut201CreatingSucceeded200defaultResponse
  | LROsPut200UpdatingSucceeded204defaultResponse
  | LROsPut201CreatingFailed200defaultResponse
  | LROsPut200Acceptedcanceled200defaultResponse
  | LROsPutNoHeaderInRetrydefaultResponse
  | LROsPutAsyncRetrySucceededdefaultResponse
  | LROsPutAsyncNoRetrySucceededdefaultResponse
  | LROsPutAsyncRetryFaileddefaultResponse
  | LROsPutAsyncNoRetrycanceleddefaultResponse
  | LROsPutAsyncNoHeaderInRetrydefaultResponse
  | LROsPutNonResourcedefaultResponse
  | LROsPutAsyncNonResourcedefaultResponse
  | LROsPutSubResourcedefaultResponse
  | LROsPutAsyncSubResourcedefaultResponse
  | LROsDeleteProvisioning202Accepted200SucceededdefaultResponse
  | LROsDeleteProvisioning202DeletingFailed200defaultResponse
  | LROsDeleteProvisioning202Deletingcanceled200defaultResponse
  | LROsDelete204SucceededdefaultResponse
  | LROsDelete202Retry200defaultResponse
  | LROsDelete202NoRetry204defaultResponse
  | LROsDeleteNoHeaderInRetrydefaultResponse
  | LROsDeleteAsyncNoHeaderInRetrydefaultResponse
  | LROsDeleteAsyncRetrySucceededdefaultResponse
  | LROsDeleteAsyncNoRetrySucceededdefaultResponse
  | LROsDeleteAsyncRetryFaileddefaultResponse
  | LROsDeleteAsyncRetrycanceleddefaultResponse
  | LROsPost200WithPayloaddefaultResponse
  | LROsPost202Retry200defaultResponse
  | LROsPost202NoRetry204defaultResponse
  | LROsPostDoubleHeadersFinalLocationGetdefaultResponse
  | LROsPostDoubleHeadersFinalAzureHeaderGetdefaultResponse
  | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse
  | LROsPostAsyncRetrySucceededdefaultResponse
  | LROsPostAsyncNoRetrySucceededdefaultResponse
  | LROsPostAsyncRetryFaileddefaultResponse
  | LROsPostAsyncRetrycanceleddefaultResponse
  | LRORetrysPut201CreatingSucceeded200defaultResponse
  | LRORetrysPutAsyncRelativeRetrySucceededdefaultResponse
  | LRORetrysDeleteProvisioning202Accepted200SucceededdefaultResponse
  | LRORetrysDelete202Retry200defaultResponse
  | LRORetrysDeleteAsyncRelativeRetrySucceededdefaultResponse
  | LRORetrysPost202Retry200defaultResponse
  | LRORetrysPostAsyncRelativeRetrySucceededdefaultResponse
  | LrosaDsPutNonRetry400defaultResponse
  | LrosaDsPutNonRetry201Creating400defaultResponse
  | LrosaDsPutNonRetry201Creating400InvalidJsondefaultResponse
  | LrosaDsPutAsyncRelativeRetry400defaultResponse
  | LrosaDsDeleteNonRetry400defaultResponse
  | LrosaDsDelete202NonRetry400defaultResponse
  | LrosaDsDeleteAsyncRelativeRetry400defaultResponse
  | LrosaDsPostNonRetry400defaultResponse
  | LrosaDsPost202NonRetry400defaultResponse
  | LrosaDsPostAsyncRelativeRetry400defaultResponse
  | LrosaDsPutError201NoProvisioningStatePayloaddefaultResponse
  | LrosaDsPutAsyncRelativeRetryNoStatusdefaultResponse
  | LrosaDsPutAsyncRelativeRetryNoStatusPayloaddefaultResponse
  | LrosaDsDelete204SucceededdefaultResponse
  | LrosaDsDeleteAsyncRelativeRetryNoStatusdefaultResponse
  | LrosaDsPost202NoLocationdefaultResponse
  | LrosaDsPostAsyncRelativeRetryNoPayloaddefaultResponse
  | LrosaDsPut200InvalidJsondefaultResponse
  | LrosaDsPutAsyncRelativeRetryInvalidHeaderdefaultResponse
  | LrosaDsPutAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  | LrosaDsDelete202RetryInvalidHeaderdefaultResponse
  | LrosaDsDeleteAsyncRelativeRetryInvalidHeaderdefaultResponse
  | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  | LrosaDsPost202RetryInvalidHeaderdefaultResponse
  | LrosaDsPostAsyncRelativeRetryInvalidHeaderdefaultResponse
  | LrosaDsPostAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  | LROsCustomHeaderPutAsyncRetrySucceededdefaultResponse
  | LROsCustomHeaderPut201CreatingSucceeded200defaultResponse
  | LROsCustomHeaderPost202Retry200defaultResponse
  | LROsCustomHeaderPostAsyncRetrySucceededdefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
