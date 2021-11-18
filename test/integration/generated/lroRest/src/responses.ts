// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse } from "@azure-rest/core-client";
import {
  ProductOutput,
  CloudErrorOutput,
  SkuOutput,
  SubProductOutput
} from "./outputModels";

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LrOSPut200Succeeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LrOSPut200Succeeded204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LrOSPut200SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPatch200SucceededIgnoreHeaders200Headers {
  /** This header should be ignored in this case */
  "azure-asyncoperation"?: string;
}

/** Long running put request, service returns a 200 to the initial request with location header. We should not have any subsequent calls after receiving this first response. */
export interface LrOSPatch200SucceededIgnoreHeaders200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrOSPatch200SucceededIgnoreHeaders200Headers;
}

/** Long running put request, service returns a 200 to the initial request with location header. We should not have any subsequent calls after receiving this first response. */
export interface LrOSPatch200SucceededIgnoreHeadersdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LrOSPut201Succeeded201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LrOSPut201SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LrOSPost202List200Response extends HttpResponse {
  status: "200";
  body: Array<ProductOutput>;
}

export interface LrOSPost202List202Headers {
  /** Location to poll for result status: will be set to /lro/list/pollingGet */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/list/finalGet */
  location?: string;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LrOSPost202List202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSPost202List202Headers;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LrOSPost202ListdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
export interface LrOSPut200SucceededNoState200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
export interface LrOSPut200SucceededNoStatedefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
export interface LrOSPut202Retry200202Response extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
export interface LrOSPut202Retry200DefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSPut201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSPut201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSPut201CreatingSucceeded200DefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSPut200UpdatingSucceeded204200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSPut200UpdatingSucceeded204DefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LrOSPut201CreatingFailed200200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LrOSPut201CreatingFailed200201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LrOSPut201CreatingFailed200DefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LrOSPut200Acceptedcanceled200200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LrOSPut200Acceptedcanceled200DefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPutNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/noheader/202/200/operationResults */
  location?: string;
}

/** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
export interface LrOSPutNoHeaderInRetry202Response extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders & LrOSPutNoHeaderInRetry202Headers;
}

/** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
export interface LrOSPutNoHeaderInRetrydefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPutAsyncRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPutAsyncRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrOSPutAsyncRetrySucceeded200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPutAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPutAsyncNoRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/noretry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/noretry/succeeded/operationResults/200 */
  location?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPutAsyncNoRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrOSPutAsyncNoRetrySucceeded200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPutAsyncNoRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPutAsyncRetryFailed200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPutAsyncRetryFailed200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrOSPutAsyncRetryFailed200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPutAsyncRetryFaileddefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPutAsyncNoRetrycanceled200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/noretry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/noretry/canceled/operationResults/200 */
  location?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPutAsyncNoRetrycanceled200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrOSPutAsyncNoRetrycanceled200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPutAsyncNoRetrycanceleddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPutAsyncNoHeaderInRetry201Headers {
  "azure-asyncoperation"?: string;
}

/** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LrOSPutAsyncNoHeaderInRetry201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
  headers: RawHttpHeaders & LrOSPutAsyncNoHeaderInRetry201Headers;
}

/** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LrOSPutAsyncNoHeaderInRetrydefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request with non resource. */
export interface LrOSPutNonResource202Response extends HttpResponse {
  status: "202";
  body: SkuOutput;
}

/** Long running put request with non resource. */
export interface LrOSPutNonResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request with non resource. */
export interface LrOSPutAsyncNonResource202Response extends HttpResponse {
  status: "202";
  body: SkuOutput;
}

/** Long running put request with non resource. */
export interface LrOSPutAsyncNonResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request with sub resource. */
export interface LrOSPutSubResource202Response extends HttpResponse {
  status: "202";
  body: SubProductOutput;
}

/** Long running put request with sub resource. */
export interface LrOSPutSubResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request with sub resource. */
export interface LrOSPutAsyncSubResource202Response extends HttpResponse {
  status: "202";
  body: SubProductOutput;
}

/** Long running put request with sub resource. */
export interface LrOSPutAsyncSubResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSDeleteProvisioning202Accepted200Succeeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LrOSDeleteProvisioning202Accepted200Succeeded202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/accepted/200/succeeded */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSDeleteProvisioning202Accepted200Succeeded202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LrOSDeleteProvisioning202Accepted200Succeeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSDeleteProvisioning202Accepted200SucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LrOSDeleteProvisioning202DeletingFailed200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LrOSDeleteProvisioning202DeletingFailed200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/deleting/200/failed */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LrOSDeleteProvisioning202DeletingFailed200202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LrOSDeleteProvisioning202DeletingFailed200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LrOSDeleteProvisioning202DeletingFailed200DefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LrOSDeleteProvisioning202Deletingcanceled200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LrOSDeleteProvisioning202Deletingcanceled200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/deleting/200/canceled */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LrOSDeleteProvisioning202Deletingcanceled200202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LrOSDeleteProvisioning202Deletingcanceled200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LrOSDeleteProvisioning202Deletingcanceled200DefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete succeeds and returns right away */
export interface LrOSDelete204Succeeded204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete succeeds and returns right away */
export interface LrOSDelete204SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSDelete202Retry200200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LrOSDelete202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSDelete202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSDelete202Retry200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSDelete202Retry200DefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSDelete202NoRetry204200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LrOSDelete202NoRetry204202Headers {
  /** Location to poll for result status: will be set to /lro/delete/202/noretry/204 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSDelete202NoRetry204202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSDelete202NoRetry204202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSDelete202NoRetry204DefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSDeleteNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/put/noheader/202/204/operationresults */
  location?: string;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LrOSDeleteNoHeaderInRetry202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSDeleteNoHeaderInRetry202Headers;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LrOSDeleteNoHeaderInRetry204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LrOSDeleteNoHeaderInRetrydefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSDeleteAsyncNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/put/noheader/202/204/operationresults */
  location?: string;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LrOSDeleteAsyncNoHeaderInRetry202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSDeleteAsyncNoHeaderInRetry202Headers;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LrOSDeleteAsyncNoHeaderInRetry204Response
  extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LrOSDeleteAsyncNoHeaderInRetrydefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSDeleteAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSDeleteAsyncRetrySucceeded202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSDeleteAsyncRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSDeleteAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSDeleteAsyncNoRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/noretry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/noretry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSDeleteAsyncNoRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSDeleteAsyncNoRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSDeleteAsyncNoRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSDeleteAsyncRetryFailed202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSDeleteAsyncRetryFailed202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSDeleteAsyncRetryFailed202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSDeleteAsyncRetryFaileddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSDeleteAsyncRetrycanceled202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/canceled/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSDeleteAsyncRetrycanceled202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSDeleteAsyncRetrycanceled202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSDeleteAsyncRetrycanceleddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LrOSPost200WithPayload200Response extends HttpResponse {
  status: "200";
  body: SkuOutput;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LrOSPost200WithPayload202Response extends HttpResponse {
  status: "202";
  body: SkuOutput;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LrOSPost200WithPayloaddefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LrOSPost202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSPost202Retry200202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LrOSPost202Retry200DefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPost202NoRetry204202Headers {
  /** Location to poll for result status: will be set to /lro/post/202/noretry/204 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
export interface LrOSPost202NoRetry204202Response extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders & LrOSPost202NoRetry204202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
export interface LrOSPost202NoRetry204DefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
export interface LrOSPostDoubleHeadersFinalLocationGet202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
export interface LrOSPostDoubleHeadersFinalLocationGetdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
export interface LrOSPostDoubleHeadersFinalAzureHeaderGet202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
export interface LrOSPostDoubleHeadersFinalAzureHeaderGetdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
export interface LrOSPostDoubleHeadersFinalAzureHeaderGetDefault202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
export interface LrOSPostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPostAsyncRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LrOSPostAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPostAsyncRetrySucceeded202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSPostAsyncRetrySucceeded202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPostAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPostAsyncNoRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LrOSPostAsyncNoRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPostAsyncNoRetrySucceeded202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSPostAsyncNoRetrySucceeded202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPostAsyncNoRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPostAsyncRetryFailed202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPostAsyncRetryFailed202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSPostAsyncRetryFailed202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPostAsyncRetryFaileddefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSPostAsyncRetrycanceled202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/canceled/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPostAsyncRetrycanceled202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSPostAsyncRetrycanceled202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSPostAsyncRetrycanceleddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LroRetrysPut201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LroRetrysPut201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LroRetrysPut201CreatingSucceeded200DefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LroRetrysPutAsyncRelativeRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LroRetrysPutAsyncRelativeRetrySucceeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LroRetrysPutAsyncRelativeRetrySucceeded200Headers;
}

/** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LroRetrysPutAsyncRelativeRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LroRetrysDeleteProvisioning202Accepted200Succeeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LroRetrysDeleteProvisioning202Accepted200Succeeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/provisioning/202/accepted/200/succeeded */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LroRetrysDeleteProvisioning202Accepted200Succeeded202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LroRetrysDeleteProvisioning202Accepted200Succeeded202Headers;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LroRetrysDeleteProvisioning202Accepted200SucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LroRetrysDelete202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LroRetrysDelete202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LroRetrysDelete202Retry200202Headers;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LroRetrysDelete202Retry200DefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LroRetrysDeleteAsyncRelativeRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LroRetrysDeleteAsyncRelativeRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LroRetrysDeleteAsyncRelativeRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LroRetrysDeleteAsyncRelativeRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LroRetrysPost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LroRetrysPost202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LroRetrysPost202Retry200202Headers;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LroRetrysPost202Retry200DefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LroRetrysPostAsyncRelativeRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LroRetrysPostAsyncRelativeRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LroRetrysPostAsyncRelativeRetrySucceeded202Headers;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LroRetrysPostAsyncRelativeRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
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
  status: "500";
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
  status: "500";
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
export interface LrosaDsPutNonRetry201Creating400InvalidJsondefaultResponse
  extends HttpResponse {
  status: "500";
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
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsDeleteNonRetry400202Headers;
}

/** Long running delete request, service returns a 400 with an error body */
export interface LrosaDsDeleteNonRetry400DefaultResponse extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsDelete202NonRetry400202Headers;
}

/** Long running delete request, service returns a 202 with a location header */
export interface LrosaDsDelete202NonRetry400DefaultResponse
  extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsDeleteAsyncRelativeRetry400202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetry400DefaultResponse
  extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsPostNonRetry400202Headers;
}

/** Long running post request, service returns a 400 with no error body */
export interface LrosaDsPostNonRetry400DefaultResponse extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsPost202NonRetry400202Headers;
}

/** Long running post request, service returns a 202 with a location header */
export interface LrosaDsPost202NonRetry400DefaultResponse extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsPostAsyncRelativeRetry400202Headers;
}

/** Long running post request, service returns a 202 to the initial request Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetry400DefaultResponse
  extends HttpResponse {
  status: "500";
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
export interface LrosaDsPutError201NoProvisioningStatePayloaddefaultResponse
  extends HttpResponse {
  status: "500";
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
export interface LrosaDsPutAsyncRelativeRetryNoStatusdefaultResponse
  extends HttpResponse {
  status: "500";
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
export interface LrosaDsPutAsyncRelativeRetryNoStatusPayloaddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 204 to the initial request, indicating success. */
export interface LrosaDsDelete204Succeeded204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete request, service returns a 204 to the initial request, indicating success. */
export interface LrosaDsDelete204SucceededdefaultResponse extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsDeleteAsyncRelativeRetryNoStatus202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetryNoStatusdefaultResponse
  extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsPost202NoLocation202Headers;
}

/** Long running post request, service returns a 202 to the initial request, without a location header. */
export interface LrosaDsPost202NoLocationdefaultResponse extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsPostAsyncRelativeRetryNoPayload202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetryNoPayloaddefaultResponse
  extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
export interface LrosaDsPut200InvalidJsondefaultResponse extends HttpResponse {
  status: "500";
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
export interface LrosaDsPutAsyncRelativeRetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
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
export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsDelete202RetryInvalidHeader202Headers;
}

/** Long running delete request, service returns a 202 to the initial request receing a reponse with an invalid 'Location' and 'Retry-After' headers */
export interface LrosaDsDelete202RetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. The endpoint indicated in the Azure-AsyncOperation header is invalid */
export interface LrosaDsDeleteAsyncRelativeRetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsPost202RetryInvalidHeader202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with invalid 'Location' and 'Retry-After' headers. */
export interface LrosaDsPost202RetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LrosaDsPostAsyncRelativeRetryInvalidHeader202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDsPostAsyncRelativeRetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSCustomHeaderPutAsyncRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSCustomHeaderPutAsyncRetrySucceeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrOSCustomHeaderPutAsyncRetrySucceeded200Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSCustomHeaderPutAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSCustomHeaderPut201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSCustomHeaderPut201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LrOSCustomHeaderPut201CreatingSucceeded200DefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSCustomHeaderPost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/customheader/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LrOSCustomHeaderPost202Retry200202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSCustomHeaderPost202Retry200202Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LrOSCustomHeaderPost202Retry200DefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrOSCustomHeaderPostAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSCustomHeaderPostAsyncRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrOSCustomHeaderPostAsyncRetrySucceeded202Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrOSCustomHeaderPostAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}
