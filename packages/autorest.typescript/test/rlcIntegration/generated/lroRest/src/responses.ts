// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ProductOutput,
  CloudErrorOutput,
  SkuOutput,
  SubProductOutput,
} from "./outputModels";

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsPut200Succeeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsPut200Succeeded204Response extends HttpResponse {
  status: "204";
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsPut200SucceededDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPatch200SucceededIgnoreHeaders200Headers {
  /** This header should be ignored in this case */
  "azure-asyncoperation"?: string;
}

/** Long running put request, service returns a 200 to the initial request with location header. We should not have any subsequent calls after receiving this first response. */
export interface LROsPatch200SucceededIgnoreHeaders200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsPatch200SucceededIgnoreHeaders200Headers;
}

/** Long running put request, service returns a 200 to the initial request with location header. We should not have any subsequent calls after receiving this first response. */
export interface LROsPatch200SucceededIgnoreHeadersDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running patch request, service returns a 201 to the initial request with async header. */
export interface LROsPatch201RetryWithAsyncHeader200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsPatch201RetryWithAsyncHeader201Headers {
  /** Location to poll for result status: will be set to /lro/patch/201/retry/onlyAsyncHeader/operationStatuses/201 */
  "azure-asyncoperation"?: string;
}

/** Long running patch request, service returns a 201 to the initial request with async header. */
export interface LROsPatch201RetryWithAsyncHeader201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsPatch201RetryWithAsyncHeader201Headers;
}

/** Long running patch request, service returns a 201 to the initial request with async header. */
export interface LROsPatch201RetryWithAsyncHeaderDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running patch request, service returns a 202 to the initial request with async and location header. */
export interface LROsPatch202RetryWithAsyncAndLocationHeader200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsPatch202RetryWithAsyncAndLocationHeader202Headers {
  /** Location to poll for result status: will be set to /lro/patch/202/retry/asyncAndLocationHeader/operationResults/202 */
  "azure-asyncoperation"?: string;
  /** Location to poll for final status: will be set to /lro/patch/202/retry/asyncAndLocationHeader/operationResults/202/finalResults/202 */
  location?: string;
}

/** Long running patch request, service returns a 202 to the initial request with async and location header. */
export interface LROsPatch202RetryWithAsyncAndLocationHeader202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LROsPatch202RetryWithAsyncAndLocationHeader202Headers;
}

/** Long running patch request, service returns a 202 to the initial request with async and location header. */
export interface LROsPatch202RetryWithAsyncAndLocationHeaderDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsPut201Succeeded201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsPut201SucceededDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LROsPost202List200Response extends HttpResponse {
  status: "200";
  body: Array<ProductOutput>;
}

export interface LROsPost202List202Headers {
  /** Location to poll for result status: will be set to /lro/list/pollingGet */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/list/finalGet */
  location?: string;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LROsPost202List202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsPost202List202Headers;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LROsPost202ListDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
export interface LROsPut200SucceededNoState200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
export interface LROsPut200SucceededNoStateDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
export interface LROsPut202Retry200202Response extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
export interface LROsPut202Retry200DefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsPut201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsPut201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsPut201CreatingSucceeded200DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsPut200UpdatingSucceeded204200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsPut200UpdatingSucceeded204DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsPut201CreatingFailed200200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsPut201CreatingFailed200201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsPut201CreatingFailed200DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsPut200Acceptedcanceled200200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsPut200Acceptedcanceled200DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPutNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/noheader/202/200/operationResults */
  location?: string;
}

/** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
export interface LROsPutNoHeaderInRetry202Response extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsPutNoHeaderInRetry202Headers;
}

/** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
export interface LROsPutNoHeaderInRetryDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPutAsyncRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsPutAsyncRetrySucceeded200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPutAsyncNoRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/noretry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/noretry/succeeded/operationResults/200 */
  location?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncNoRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsPutAsyncNoRetrySucceeded200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncNoRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPutAsyncRetryFailed200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncRetryFailed200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsPutAsyncRetryFailed200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncRetryFailedDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPutAsyncNoRetrycanceled200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/noretry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/noretry/canceled/operationResults/200 */
  location?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncNoRetrycanceled200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsPutAsyncNoRetrycanceled200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncNoRetrycanceledDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPutAsyncNoHeaderInRetry201Headers {
  "azure-asyncoperation"?: string;
}

/** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsPutAsyncNoHeaderInRetry201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsPutAsyncNoHeaderInRetry201Headers;
}

/** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsPutAsyncNoHeaderInRetryDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request with non resource. */
export interface LROsPutNonResource202Response extends HttpResponse {
  status: "202";
  body: SkuOutput;
}

/** Long running put request with non resource. */
export interface LROsPutNonResourceDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request with non resource. */
export interface LROsPutAsyncNonResource202Response extends HttpResponse {
  status: "202";
  body: SkuOutput;
}

/** Long running put request with non resource. */
export interface LROsPutAsyncNonResourceDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request with sub resource. */
export interface LROsPutSubResource202Response extends HttpResponse {
  status: "202";
  body: SubProductOutput;
}

/** Long running put request with sub resource. */
export interface LROsPutSubResourceDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request with sub resource. */
export interface LROsPutAsyncSubResource202Response extends HttpResponse {
  status: "202";
  body: SubProductOutput;
}

/** Long running put request with sub resource. */
export interface LROsPutAsyncSubResourceDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDeleteProvisioning202Accepted200Succeeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsDeleteProvisioning202Accepted200Succeeded202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/accepted/200/succeeded */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDeleteProvisioning202Accepted200Succeeded202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LROsDeleteProvisioning202Accepted200Succeeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDeleteProvisioning202Accepted200SucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsDeleteProvisioning202DeletingFailed200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsDeleteProvisioning202DeletingFailed200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/deleting/200/failed */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsDeleteProvisioning202DeletingFailed200202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LROsDeleteProvisioning202DeletingFailed200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsDeleteProvisioning202DeletingFailed200DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsDeleteProvisioning202Deletingcanceled200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsDeleteProvisioning202Deletingcanceled200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/deleting/200/canceled */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsDeleteProvisioning202Deletingcanceled200202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LROsDeleteProvisioning202Deletingcanceled200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsDeleteProvisioning202Deletingcanceled200DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running delete succeeds and returns right away */
export interface LROsDelete204Succeeded204Response extends HttpResponse {
  status: "204";
}

/** Long running delete succeeds and returns right away */
export interface LROsDelete204SucceededDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202Retry200200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsDelete202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202Retry200202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsDelete202Retry200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202Retry200DefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202NoRetry204200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsDelete202NoRetry204202Headers {
  /** Location to poll for result status: will be set to /lro/delete/202/noretry/204 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202NoRetry204202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsDelete202NoRetry204202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202NoRetry204DefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsDeleteNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/put/noheader/202/204/operationresults */
  location?: string;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LROsDeleteNoHeaderInRetry202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsDeleteNoHeaderInRetry202Headers;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LROsDeleteNoHeaderInRetry204Response extends HttpResponse {
  status: "204";
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LROsDeleteNoHeaderInRetryDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsDeleteAsyncNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/put/noheader/202/204/operationresults */
  location?: string;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsDeleteAsyncNoHeaderInRetry202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsDeleteAsyncNoHeaderInRetry202Headers;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsDeleteAsyncNoHeaderInRetry204Response
  extends HttpResponse {
  status: "204";
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsDeleteAsyncNoHeaderInRetryDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsDeleteAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetrySucceeded202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsDeleteAsyncRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsDeleteAsyncNoRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/noretry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/noretry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncNoRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsDeleteAsyncNoRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncNoRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsDeleteAsyncRetryFailed202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetryFailed202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsDeleteAsyncRetryFailed202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetryFailedDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsDeleteAsyncRetrycanceled202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/canceled/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetrycanceled202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsDeleteAsyncRetrycanceled202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetrycanceledDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LROsPost200WithPayload200Response extends HttpResponse {
  status: "200";
  body: SkuOutput;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LROsPost200WithPayload202Response extends HttpResponse {
  status: "202";
  body: SkuOutput;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LROsPost200WithPayloadDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROsPost202Retry200202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsPost202Retry200202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROsPost202Retry200DefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPost202NoRetry204202Headers {
  /** Location to poll for result status: will be set to /lro/post/202/noretry/204 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
export interface LROsPost202NoRetry204202Response extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsPost202NoRetry204202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
export interface LROsPost202NoRetry204DefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
export interface LROsPostDoubleHeadersFinalLocationGet202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
export interface LROsPostDoubleHeadersFinalLocationGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
export interface LROsPostDoubleHeadersFinalAzureHeaderGet202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
export interface LROsPostDoubleHeadersFinalAzureHeaderGetDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
export interface LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
export interface LROsPostDoubleHeadersFinalAzureHeaderGetDefaultDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsPostAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetrySucceeded202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsPostAsyncRetrySucceeded202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncNoRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsPostAsyncNoRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncNoRetrySucceeded202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsPostAsyncNoRetrySucceeded202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncNoRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPostAsyncRetryFailed202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetryFailed202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsPostAsyncRetryFailed202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetryFailedDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsPostAsyncRetrycanceled202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/canceled/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetrycanceled202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsPostAsyncRetrycanceled202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetrycanceledDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysPut201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysPut201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysPut201CreatingSucceeded200DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LRORetrysPutAsyncRelativeRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysPutAsyncRelativeRetrySucceeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LRORetrysPutAsyncRelativeRetrySucceeded200Headers;
}

/** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysPutAsyncRelativeRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysDeleteProvisioning202Accepted200Succeeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LRORetrysDeleteProvisioning202Accepted200Succeeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/provisioning/202/accepted/200/succeeded */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysDeleteProvisioning202Accepted200Succeeded202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LRORetrysDeleteProvisioning202Accepted200Succeeded202Headers;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysDeleteProvisioning202Accepted200SucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LRORetrysDelete202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysDelete202Retry200202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LRORetrysDelete202Retry200202Headers;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysDelete202Retry200DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LRORetrysDeleteAsyncRelativeRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysDeleteAsyncRelativeRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    LRORetrysDeleteAsyncRelativeRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysDeleteAsyncRelativeRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LRORetrysPost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LRORetrysPost202Retry200202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LRORetrysPost202Retry200202Headers;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LRORetrysPost202Retry200DefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LRORetrysPostAsyncRelativeRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysPostAsyncRelativeRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LRORetrysPostAsyncRelativeRetrySucceeded202Headers;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysPostAsyncRelativeRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 400 to the initial request */
export interface LrosaDsPutNonRetry400200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 400 to the initial request */
export interface LrosaDsPutNonRetry400201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 400 to the initial request */
export interface LrosaDsPutNonRetry400DefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400InvalidJson200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400InvalidJson201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400InvalidJsonDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPutAsyncRelativeRetry400200Headers {
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 with ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetry400200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrosaDsPutAsyncRelativeRetry400200Headers;
}

/** Long running put request, service returns a 200 with ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetry400DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsDeleteNonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 400 with an error body */
export interface LrosaDsDeleteNonRetry400202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsDeleteNonRetry400202Headers;
}

/** Long running delete request, service returns a 400 with an error body */
export interface LrosaDsDeleteNonRetry400DefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsDelete202NonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 with a location header */
export interface LrosaDsDelete202NonRetry400202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsDelete202NonRetry400202Headers;
}

/** Long running delete request, service returns a 202 with a location header */
export interface LrosaDsDelete202NonRetry400DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsDeleteAsyncRelativeRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/nonretryerror/deleteasync/retry/operationResults/400 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/nonretryerror/deleteasync/retry/operationResults/400 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetry400202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsDeleteAsyncRelativeRetry400202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetry400DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPostNonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 400 with no error body */
export interface LrosaDsPostNonRetry400202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsPostNonRetry400202Headers;
}

/** Long running post request, service returns a 400 with no error body */
export interface LrosaDsPostNonRetry400DefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPost202NonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 with a location header */
export interface LrosaDsPost202NonRetry400202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsPost202NonRetry400202Headers;
}

/** Long running post request, service returns a 202 with a location header */
export interface LrosaDsPost202NonRetry400DefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPostAsyncRelativeRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetry400202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsPostAsyncRelativeRetry400202Headers;
}

/** Long running post request, service returns a 202 to the initial request Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetry400DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request with no payload */
export interface LrosaDsPutError201NoProvisioningStatePayload200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request with no payload */
export interface LrosaDsPutError201NoProvisioningStatePayload201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request with no payload */
export interface LrosaDsPutError201NoProvisioningStatePayloadDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPutAsyncRelativeRetryNoStatus200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryNoStatus200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrosaDsPutAsyncRelativeRetryNoStatus200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryNoStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPutAsyncRelativeRetryNoStatusPayload200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LrosaDsPutAsyncRelativeRetryNoStatusPayload200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryNoStatusPayloadDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 204 to the initial request, indicating success. */
export interface LrosaDsDelete204Succeeded204Response extends HttpResponse {
  status: "204";
}

/** Long running delete request, service returns a 204 to the initial request, indicating success. */
export interface LrosaDsDelete204SucceededDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsDeleteAsyncRelativeRetryNoStatus202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetryNoStatus202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsDeleteAsyncRelativeRetryNoStatus202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetryNoStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPost202NoLocation202Headers {
  /** Location to poll for result status: will not be set */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, without a location header. */
export interface LrosaDsPost202NoLocation202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsPost202NoLocation202Headers;
}

/** Long running post request, service returns a 202 to the initial request, without a location header. */
export interface LrosaDsPost202NoLocationDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPostAsyncRelativeRetryNoPayload202Headers {
  /** Location to poll for result status: will be set to /lro/error/putasync/retry/failed/operationResults/nopayload */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/error/putasync/retry/failed/operationResults/nopayload */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetryNoPayload202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsPostAsyncRelativeRetryNoPayload202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetryNoPayloadDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
export interface LrosaDsPut200InvalidJson200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
export interface LrosaDsPut200InvalidJson204Response extends HttpResponse {
  status: "204";
}

/** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
export interface LrosaDsPut200InvalidJsonDefaultResponse extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPutAsyncRelativeRetryInvalidHeader200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDsPutAsyncRelativeRetryInvalidHeader200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrosaDsPutAsyncRelativeRetryInvalidHeader200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDsPutAsyncRelativeRetryInvalidHeaderDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPollingDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsDelete202RetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to /foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request receing a reponse with an invalid 'Location' and 'Retry-After' headers */
export interface LrosaDsDelete202RetryInvalidHeader202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsDelete202RetryInvalidHeader202Headers;
}

/** Long running delete request, service returns a 202 to the initial request receing a reponse with an invalid 'Location' and 'Retry-After' headers */
export interface LrosaDsDelete202RetryInvalidHeaderDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to /foo */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. The endpoint indicated in the Azure-AsyncOperation header is invalid */
export interface LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. The endpoint indicated in the Azure-AsyncOperation header is invalid */
export interface LrosaDsDeleteAsyncRelativeRetryInvalidHeaderDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Headers {
  /** Location to poll for result status: will be set to /lro/error/deleteasync/retry/failed/operationResults/invalidjsonpolling */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/error/deleteasync/retry/failed/operationResults/invalidjsonpolling */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPost202RetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to /foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with invalid 'Location' and 'Retry-After' headers. */
export interface LrosaDsPost202RetryInvalidHeader202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LrosaDsPost202RetryInvalidHeader202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with invalid 'Location' and 'Retry-After' headers. */
export interface LrosaDsPost202RetryInvalidHeaderDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPostAsyncRelativeRetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to foo */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDsPostAsyncRelativeRetryInvalidHeader202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    LrosaDsPostAsyncRelativeRetryInvalidHeader202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDsPostAsyncRelativeRetryInvalidHeaderDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Headers {
  /** Location to poll for result status: will be set to /lro/error/postasync/retry/failed/operationResults/invalidjsonpolling */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/error/postasync/retry/failed/operationResults/invalidjsonpolling */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders &
    LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetryInvalidJsonPollingDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsCustomHeaderPutAsyncRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderPutAsyncRetrySucceeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsCustomHeaderPutAsyncRetrySucceeded200Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderPutAsyncRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsCustomHeaderPut201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsCustomHeaderPut201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsCustomHeaderPut201CreatingSucceeded200DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsCustomHeaderPost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/customheader/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROsCustomHeaderPost202Retry200202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsCustomHeaderPost202Retry200202Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROsCustomHeaderPost202Retry200DefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}

export interface LROsCustomHeaderPostAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderPostAsyncRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LROsCustomHeaderPostAsyncRetrySucceeded202Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderPostAsyncRetrySucceededDefaultResponse
  extends HttpResponse {
  status: string;
  body: CloudErrorOutput;
}
