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
export interface LROsput200Succeeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsput200Succeeded204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsput200SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROspatch200SucceededIgnoreHeaders200Headers {
  /** This header should be ignored in this case */
  "azure-asyncoperation"?: string;
}

/** Long running put request, service returns a 200 to the initial request with location header. We should not have any subsequent calls after receiving this first response. */
export interface LROspatch200SucceededIgnoreHeaders200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROspatch200SucceededIgnoreHeaders200Headers;
}

/** Long running put request, service returns a 200 to the initial request with location header. We should not have any subsequent calls after receiving this first response. */
export interface LROspatch200SucceededIgnoreHeadersdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsput201Succeeded201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsput201SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LROspost202List200Response extends HttpResponse {
  status: "200";
  body: Array<ProductOutput>;
}

export interface LROspost202List202Headers {
  /** Location to poll for result status: will be set to /lro/list/pollingGet */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/list/finalGet */
  location?: string;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LROspost202List202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROspost202List202Headers;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LROspost202ListdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
export interface LROsput200SucceededNoState200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
export interface LROsput200SucceededNoStatedefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
export interface LROsput202Retry200202Response extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
export interface LROsput202Retry200defaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsput201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsput201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsput201CreatingSucceeded200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsput200UpdatingSucceeded204200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsput200UpdatingSucceeded204defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsput201CreatingFailed200200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsput201CreatingFailed200201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsput201CreatingFailed200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsput200Acceptedcanceled200200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsput200Acceptedcanceled200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsputNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/noheader/202/200/operationResults */
  location?: string;
}

/** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
export interface LROsputNoHeaderInRetry202Response extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsputNoHeaderInRetry202Headers;
}

/** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
export interface LROsputNoHeaderInRetrydefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsputAsyncRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsputAsyncRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsputAsyncRetrySucceeded200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsputAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsputAsyncNoRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/noretry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/noretry/succeeded/operationResults/200 */
  location?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsputAsyncNoRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsputAsyncNoRetrySucceeded200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsputAsyncNoRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsputAsyncRetryFailed200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsputAsyncRetryFailed200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsputAsyncRetryFailed200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsputAsyncRetryFaileddefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsputAsyncNoRetrycanceled200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/noretry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/noretry/canceled/operationResults/200 */
  location?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsputAsyncNoRetrycanceled200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsputAsyncNoRetrycanceled200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsputAsyncNoRetrycanceleddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsputAsyncNoHeaderInRetry201Headers {
  "azure-asyncoperation"?: string;
}

/** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsputAsyncNoHeaderInRetry201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsputAsyncNoHeaderInRetry201Headers;
}

/** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsputAsyncNoHeaderInRetrydefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request with non resource. */
export interface LROsputNonResource202Response extends HttpResponse {
  status: "202";
  body: SkuOutput;
}

/** Long running put request with non resource. */
export interface LROsputNonResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request with non resource. */
export interface LROsputAsyncNonResource202Response extends HttpResponse {
  status: "202";
  body: SkuOutput;
}

/** Long running put request with non resource. */
export interface LROsputAsyncNonResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request with sub resource. */
export interface LROsputSubResource202Response extends HttpResponse {
  status: "202";
  body: SubProductOutput;
}

/** Long running put request with sub resource. */
export interface LROsputSubResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request with sub resource. */
export interface LROsputAsyncSubResource202Response extends HttpResponse {
  status: "202";
  body: SubProductOutput;
}

/** Long running put request with sub resource. */
export interface LROsputAsyncSubResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsdeleteProvisioning202Accepted200Succeeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsdeleteProvisioning202Accepted200Succeeded202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/accepted/200/succeeded */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsdeleteProvisioning202Accepted200Succeeded202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LROsdeleteProvisioning202Accepted200Succeeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsdeleteProvisioning202Accepted200SucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsdeleteProvisioning202DeletingFailed200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsdeleteProvisioning202DeletingFailed200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/deleting/200/failed */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsdeleteProvisioning202DeletingFailed200202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LROsdeleteProvisioning202DeletingFailed200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsdeleteProvisioning202DeletingFailed200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsdeleteProvisioning202Deletingcanceled200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsdeleteProvisioning202Deletingcanceled200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/deleting/200/canceled */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsdeleteProvisioning202Deletingcanceled200202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LROsdeleteProvisioning202Deletingcanceled200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsdeleteProvisioning202Deletingcanceled200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete succeeds and returns right away */
export interface LROsdelete204Succeeded204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete succeeds and returns right away */
export interface LROsdelete204SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsdelete202Retry200200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsdelete202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsdelete202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsdelete202Retry200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsdelete202Retry200defaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsdelete202NoRetry204200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROsdelete202NoRetry204202Headers {
  /** Location to poll for result status: will be set to /lro/delete/202/noretry/204 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsdelete202NoRetry204202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsdelete202NoRetry204202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsdelete202NoRetry204defaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsdeleteNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/put/noheader/202/204/operationresults */
  location?: string;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LROsdeleteNoHeaderInRetry202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsdeleteNoHeaderInRetry202Headers;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LROsdeleteNoHeaderInRetry204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LROsdeleteNoHeaderInRetrydefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsdeleteAsyncNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/put/noheader/202/204/operationresults */
  location?: string;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsdeleteAsyncNoHeaderInRetry202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsdeleteAsyncNoHeaderInRetry202Headers;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsdeleteAsyncNoHeaderInRetry204Response
  extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsdeleteAsyncNoHeaderInRetrydefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsdeleteAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsdeleteAsyncRetrySucceeded202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsdeleteAsyncRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsdeleteAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsdeleteAsyncNoRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/noretry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/noretry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsdeleteAsyncNoRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsdeleteAsyncNoRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsdeleteAsyncNoRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsdeleteAsyncRetryFailed202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsdeleteAsyncRetryFailed202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsdeleteAsyncRetryFailed202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsdeleteAsyncRetryFaileddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsdeleteAsyncRetrycanceled202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/canceled/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsdeleteAsyncRetrycanceled202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsdeleteAsyncRetrycanceled202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsdeleteAsyncRetrycanceleddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LROspost200WithPayload200Response extends HttpResponse {
  status: "200";
  body: SkuOutput;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LROspost200WithPayload202Response extends HttpResponse {
  status: "202";
  body: SkuOutput;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LROspost200WithPayloaddefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROspost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROspost202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROspost202Retry200202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROspost202Retry200defaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROspost202NoRetry204202Headers {
  /** Location to poll for result status: will be set to /lro/post/202/noretry/204 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
export interface LROspost202NoRetry204202Response extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders & LROspost202NoRetry204202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
export interface LROspost202NoRetry204defaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
export interface LROspostDoubleHeadersFinalLocationGet202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
export interface LROspostDoubleHeadersFinalLocationGetdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
export interface LROspostDoubleHeadersFinalAzureHeaderGet202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
export interface LROspostDoubleHeadersFinalAzureHeaderGetdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
export interface LROspostDoubleHeadersFinalAzureHeaderGetDefault202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
export interface LROspostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROspostAsyncRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROspostAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROspostAsyncRetrySucceeded202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROspostAsyncRetrySucceeded202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROspostAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROspostAsyncNoRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LROspostAsyncNoRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROspostAsyncNoRetrySucceeded202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROspostAsyncNoRetrySucceeded202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROspostAsyncNoRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROspostAsyncRetryFailed202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROspostAsyncRetryFailed202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROspostAsyncRetryFailed202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROspostAsyncRetryFaileddefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROspostAsyncRetrycanceled202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/canceled/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROspostAsyncRetrycanceled202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROspostAsyncRetrycanceled202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROspostAsyncRetrycanceleddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysput201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysput201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysput201CreatingSucceeded200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LRORetrysputAsyncRelativeRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysputAsyncRelativeRetrySucceeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LRORetrysputAsyncRelativeRetrySucceeded200Headers;
}

/** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysputAsyncRelativeRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysdeleteProvisioning202Accepted200Succeeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

export interface LRORetrysdeleteProvisioning202Accepted200Succeeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/provisioning/202/accepted/200/succeeded */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysdeleteProvisioning202Accepted200Succeeded202Response
  extends HttpResponse {
  status: "202";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LRORetrysdeleteProvisioning202Accepted200Succeeded202Headers;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysdeleteProvisioning202Accepted200SucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LRORetrysdelete202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysdelete202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LRORetrysdelete202Retry200202Headers;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysdelete202Retry200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LRORetrysdeleteAsyncRelativeRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysdeleteAsyncRelativeRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LRORetrysdeleteAsyncRelativeRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysdeleteAsyncRelativeRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LRORetryspost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LRORetryspost202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LRORetryspost202Retry200202Headers;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LRORetryspost202Retry200defaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LRORetryspostAsyncRelativeRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetryspostAsyncRelativeRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LRORetryspostAsyncRelativeRetrySucceeded202Headers;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetryspostAsyncRelativeRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 400 to the initial request */
export interface LrosaDsputNonRetry400200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 400 to the initial request */
export interface LrosaDsputNonRetry400201Response extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 400 to the initial request */
export interface LrosaDsputNonRetry400defaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsputNonRetry201Creating400200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsputNonRetry201Creating400201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsputNonRetry201Creating400defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsputNonRetry201Creating400InvalidJson200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsputNonRetry201Creating400InvalidJson201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsputNonRetry201Creating400InvalidJsondefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsputAsyncRelativeRetry400200Headers {
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 with ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsputAsyncRelativeRetry400200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrosaDsputAsyncRelativeRetry400200Headers;
}

/** Long running put request, service returns a 200 with ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsputAsyncRelativeRetry400defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsdeleteNonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 400 with an error body */
export interface LrosaDsdeleteNonRetry400202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsdeleteNonRetry400202Headers;
}

/** Long running delete request, service returns a 400 with an error body */
export interface LrosaDsdeleteNonRetry400defaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsdelete202NonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 with a location header */
export interface LrosaDsdelete202NonRetry400202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsdelete202NonRetry400202Headers;
}

/** Long running delete request, service returns a 202 with a location header */
export interface LrosaDsdelete202NonRetry400defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsdeleteAsyncRelativeRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/nonretryerror/deleteasync/retry/operationResults/400 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/nonretryerror/deleteasync/retry/operationResults/400 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsdeleteAsyncRelativeRetry400202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsdeleteAsyncRelativeRetry400202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsdeleteAsyncRelativeRetry400defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDspostNonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 400 with no error body */
export interface LrosaDspostNonRetry400202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDspostNonRetry400202Headers;
}

/** Long running post request, service returns a 400 with no error body */
export interface LrosaDspostNonRetry400defaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDspost202NonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 with a location header */
export interface LrosaDspost202NonRetry400202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDspost202NonRetry400202Headers;
}

/** Long running post request, service returns a 202 with a location header */
export interface LrosaDspost202NonRetry400defaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDspostAsyncRelativeRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDspostAsyncRelativeRetry400202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDspostAsyncRelativeRetry400202Headers;
}

/** Long running post request, service returns a 202 to the initial request Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDspostAsyncRelativeRetry400defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 201 to the initial request with no payload */
export interface LrosaDsputError201NoProvisioningStatePayload200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request with no payload */
export interface LrosaDsputError201NoProvisioningStatePayload201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** Long running put request, service returns a 201 to the initial request with no payload */
export interface LrosaDsputError201NoProvisioningStatePayloaddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsputAsyncRelativeRetryNoStatus200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsputAsyncRelativeRetryNoStatus200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrosaDsputAsyncRelativeRetryNoStatus200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsputAsyncRelativeRetryNoStatusdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsputAsyncRelativeRetryNoStatusPayload200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsputAsyncRelativeRetryNoStatusPayload200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LrosaDsputAsyncRelativeRetryNoStatusPayload200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsputAsyncRelativeRetryNoStatusPayloaddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running delete request, service returns a 204 to the initial request, indicating success. */
export interface LrosaDsdelete204Succeeded204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete request, service returns a 204 to the initial request, indicating success. */
export interface LrosaDsdelete204SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsdeleteAsyncRelativeRetryNoStatus202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsdeleteAsyncRelativeRetryNoStatus202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsdeleteAsyncRelativeRetryNoStatus202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsdeleteAsyncRelativeRetryNoStatusdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDspost202NoLocation202Headers {
  /** Location to poll for result status: will not be set */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, without a location header. */
export interface LrosaDspost202NoLocation202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDspost202NoLocation202Headers;
}

/** Long running post request, service returns a 202 to the initial request, without a location header. */
export interface LrosaDspost202NoLocationdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDspostAsyncRelativeRetryNoPayload202Headers {
  /** Location to poll for result status: will be set to /lro/error/putasync/retry/failed/operationResults/nopayload */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/error/putasync/retry/failed/operationResults/nopayload */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDspostAsyncRelativeRetryNoPayload202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDspostAsyncRelativeRetryNoPayload202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDspostAsyncRelativeRetryNoPayloaddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
export interface LrosaDsput200InvalidJson200Response extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
export interface LrosaDsput200InvalidJson204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
export interface LrosaDsput200InvalidJsondefaultResponse extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsputAsyncRelativeRetryInvalidHeader200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDsputAsyncRelativeRetryInvalidHeader200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LrosaDsputAsyncRelativeRetryInvalidHeader200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDsputAsyncRelativeRetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsputAsyncRelativeRetryInvalidJsonPolling200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsputAsyncRelativeRetryInvalidJsonPolling200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders &
    LrosaDsputAsyncRelativeRetryInvalidJsonPolling200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsputAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsdelete202RetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to /foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request receing a reponse with an invalid 'Location' and 'Retry-After' headers */
export interface LrosaDsdelete202RetryInvalidHeader202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsdelete202RetryInvalidHeader202Headers;
}

/** Long running delete request, service returns a 202 to the initial request receing a reponse with an invalid 'Location' and 'Retry-After' headers */
export interface LrosaDsdelete202RetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsdeleteAsyncRelativeRetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to /foo */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. The endpoint indicated in the Azure-AsyncOperation header is invalid */
export interface LrosaDsdeleteAsyncRelativeRetryInvalidHeader202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LrosaDsdeleteAsyncRelativeRetryInvalidHeader202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. The endpoint indicated in the Azure-AsyncOperation header is invalid */
export interface LrosaDsdeleteAsyncRelativeRetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDsdeleteAsyncRelativeRetryInvalidJsonPolling202Headers {
  /** Location to poll for result status: will be set to /lro/error/deleteasync/retry/failed/operationResults/invalidjsonpolling */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/error/deleteasync/retry/failed/operationResults/invalidjsonpolling */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsdeleteAsyncRelativeRetryInvalidJsonPolling202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LrosaDsdeleteAsyncRelativeRetryInvalidJsonPolling202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsdeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDspost202RetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to /foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with invalid 'Location' and 'Retry-After' headers. */
export interface LrosaDspost202RetryInvalidHeader202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDspost202RetryInvalidHeader202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with invalid 'Location' and 'Retry-After' headers. */
export interface LrosaDspost202RetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDspostAsyncRelativeRetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to foo */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDspostAsyncRelativeRetryInvalidHeader202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LrosaDspostAsyncRelativeRetryInvalidHeader202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDspostAsyncRelativeRetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LrosaDspostAsyncRelativeRetryInvalidJsonPolling202Headers {
  /** Location to poll for result status: will be set to /lro/error/postasync/retry/failed/operationResults/invalidjsonpolling */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/error/postasync/retry/failed/operationResults/invalidjsonpolling */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDspostAsyncRelativeRetryInvalidJsonPolling202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LrosaDspostAsyncRelativeRetryInvalidJsonPolling202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDspostAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsCustomHeaderputAsyncRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderputAsyncRetrySucceeded200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
  headers: RawHttpHeaders & LROsCustomHeaderputAsyncRetrySucceeded200Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderputAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsCustomHeaderput201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: ProductOutput;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsCustomHeaderput201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: ProductOutput;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsCustomHeaderput201CreatingSucceeded200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsCustomHeaderpost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/customheader/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROsCustomHeaderpost202Retry200202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsCustomHeaderpost202Retry200202Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROsCustomHeaderpost202Retry200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}

export interface LROsCustomHeaderpostAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: number;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderpostAsyncRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsCustomHeaderpostAsyncRetrySucceeded202Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderpostAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudErrorOutput;
}
