// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { HttpResponse } from "@azure-rest/core-client";
import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { Product, CloudError, Sku, SubProduct } from "./models";

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsPut200Succeeded200Response extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsPut200Succeeded204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsPut200SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsPut201Succeeded201Response extends HttpResponse {
  status: "201";
  body: Product;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
export interface LROsPut201SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LROsPost202List200Response extends HttpResponse {
  status: "200";
  body: Array<Product>;
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
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsPost202List202Headers;
}

/** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
export interface LROsPost202ListdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
export interface LROsPut200SucceededNoState200Response extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
export interface LROsPut200SucceededNoStatedefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
export interface LROsPut202Retry200202Response extends HttpResponse {
  status: "202";
  body: Product;
}

/** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
export interface LROsPut202Retry200defaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsPut201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsPut201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: Product;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsPut201CreatingSucceeded200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsPut200UpdatingSucceeded204200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsPut200UpdatingSucceeded204defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsPut201CreatingFailed200200Response extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsPut201CreatingFailed200201Response extends HttpResponse {
  status: "201";
  body: Product;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsPut201CreatingFailed200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsPut200Acceptedcanceled200200Response extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsPut200Acceptedcanceled200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsPutNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/noheader/202/200/operationResults */
  location?: string;
}

/** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
export interface LROsPutNoHeaderInRetry202Response extends HttpResponse {
  status: "202";
  body: Product;
  headers: RawHttpHeaders & LROsPutNoHeaderInRetry202Headers;
}

/** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
export interface LROsPutNoHeaderInRetrydefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsPutAsyncRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: Product;
  headers: RawHttpHeaders & LROsPutAsyncRetrySucceeded200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
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
  body: Product;
  headers: RawHttpHeaders & LROsPutAsyncNoRetrySucceeded200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncNoRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsPutAsyncRetryFailed200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncRetryFailed200Response extends HttpResponse {
  status: "200";
  body: Product;
  headers: RawHttpHeaders & LROsPutAsyncRetryFailed200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncRetryFaileddefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
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
  body: Product;
  headers: RawHttpHeaders & LROsPutAsyncNoRetrycanceled200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPutAsyncNoRetrycanceleddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsPutAsyncNoHeaderInRetry201Headers {
  "azure-asyncoperation"?: string;
}

/** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsPutAsyncNoHeaderInRetry201Response extends HttpResponse {
  status: "201";
  body: Product;
  headers: RawHttpHeaders & LROsPutAsyncNoHeaderInRetry201Headers;
}

/** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsPutAsyncNoHeaderInRetrydefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request with non resource. */
export interface LROsPutNonResource202Response extends HttpResponse {
  status: "202";
  body: Sku;
}

/** Long running put request with non resource. */
export interface LROsPutNonResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request with non resource. */
export interface LROsPutAsyncNonResource202Response extends HttpResponse {
  status: "202";
  body: Sku;
}

/** Long running put request with non resource. */
export interface LROsPutAsyncNonResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request with sub resource. */
export interface LROsPutSubResource202Response extends HttpResponse {
  status: "202";
  body: SubProduct;
}

/** Long running put request with sub resource. */
export interface LROsPutSubResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request with sub resource. */
export interface LROsPutAsyncSubResource202Response extends HttpResponse {
  status: "202";
  body: SubProduct;
}

/** Long running put request with sub resource. */
export interface LROsPutAsyncSubResourcedefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDeleteProvisioning202Accepted200Succeeded200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

export interface LROsDeleteProvisioning202Accepted200Succeeded202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/accepted/200/succeeded */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDeleteProvisioning202Accepted200Succeeded202Response
  extends HttpResponse {
  status: "202";
  body: Product;
  headers: RawHttpHeaders &
    LROsDeleteProvisioning202Accepted200Succeeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDeleteProvisioning202Accepted200SucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsDeleteProvisioning202DeletingFailed200200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

export interface LROsDeleteProvisioning202DeletingFailed200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/deleting/200/failed */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsDeleteProvisioning202DeletingFailed200202Response
  extends HttpResponse {
  status: "202";
  body: Product;
  headers: RawHttpHeaders &
    LROsDeleteProvisioning202DeletingFailed200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
export interface LROsDeleteProvisioning202DeletingFailed200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsDeleteProvisioning202Deletingcanceled200200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

export interface LROsDeleteProvisioning202Deletingcanceled200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/provisioning/202/deleting/200/canceled */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsDeleteProvisioning202Deletingcanceled200202Response
  extends HttpResponse {
  status: "202";
  body: Product;
  headers: RawHttpHeaders &
    LROsDeleteProvisioning202Deletingcanceled200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
export interface LROsDeleteProvisioning202Deletingcanceled200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running delete succeeds and returns right away */
export interface LROsDelete204Succeeded204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete succeeds and returns right away */
export interface LROsDelete204SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202Retry200200Response extends HttpResponse {
  status: "200";
  body: Product;
}

export interface LROsDelete202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsDelete202Retry200202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202Retry200defaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202NoRetry204200Response extends HttpResponse {
  status: "200";
  body: Product;
}

export interface LROsDelete202NoRetry204202Headers {
  /** Location to poll for result status: will be set to /lro/delete/202/noretry/204 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202NoRetry204202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsDelete202NoRetry204202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsDelete202NoRetry204defaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsDeleteNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/put/noheader/202/204/operationresults */
  location?: string;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LROsDeleteNoHeaderInRetry202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsDeleteNoHeaderInRetry202Headers;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LROsDeleteNoHeaderInRetry204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
export interface LROsDeleteNoHeaderInRetrydefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsDeleteAsyncNoHeaderInRetry202Headers {
  /** Location to poll for result status: will be set to /lro/put/noheader/202/204/operationresults */
  location?: string;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsDeleteAsyncNoHeaderInRetry202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsDeleteAsyncNoHeaderInRetry202Headers;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsDeleteAsyncNoHeaderInRetry204Response
  extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
export interface LROsDeleteAsyncNoHeaderInRetrydefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsDeleteAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetrySucceeded202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsDeleteAsyncRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsDeleteAsyncNoRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/noretry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/noretry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncNoRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsDeleteAsyncNoRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncNoRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsDeleteAsyncRetryFailed202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetryFailed202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsDeleteAsyncRetryFailed202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetryFaileddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsDeleteAsyncRetrycanceled202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/canceled/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetrycanceled202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsDeleteAsyncRetrycanceled202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsDeleteAsyncRetrycanceleddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LROsPost200WithPayload200Response extends HttpResponse {
  status: "200";
  body: Sku;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LROsPost200WithPayload202Response extends HttpResponse {
  status: "202";
  body: Sku;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
export interface LROsPost200WithPayloaddefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsPost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROsPost202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsPost202Retry200202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROsPost202Retry200defaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsPost202NoRetry204202Headers {
  /** Location to poll for result status: will be set to /lro/post/202/noretry/204 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
export interface LROsPost202NoRetry204202Response extends HttpResponse {
  status: "202";
  body: Product;
  headers: RawHttpHeaders & LROsPost202NoRetry204202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
export interface LROsPost202NoRetry204defaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
export interface LROsPostDoubleHeadersFinalLocationGet202Response
  extends HttpResponse {
  status: "202";
  body: Product;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
export interface LROsPostDoubleHeadersFinalLocationGetdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
export interface LROsPostDoubleHeadersFinalAzureHeaderGet202Response
  extends HttpResponse {
  status: "202";
  body: Product;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
export interface LROsPostDoubleHeadersFinalAzureHeaderGetdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
export interface LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response
  extends HttpResponse {
  status: "202";
  body: Product;
}

/** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
export interface LROsPostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: Product;
}

export interface LROsPostAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetrySucceeded202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsPostAsyncRetrySucceeded202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncNoRetrySucceeded200Response extends HttpResponse {
  status: "200";
  body: Product;
}

export interface LROsPostAsyncNoRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncNoRetrySucceeded202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsPostAsyncNoRetrySucceeded202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncNoRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsPostAsyncRetryFailed202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetryFailed202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsPostAsyncRetryFailed202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetryFaileddefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsPostAsyncRetrycanceled202Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/canceled/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/canceled/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetrycanceled202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsPostAsyncRetrycanceled202Headers;
}

/** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsPostAsyncRetrycanceleddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysPut201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysPut201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: Product;
}

/** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysPut201CreatingSucceeded200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LRORetrysPutAsyncRelativeRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysPutAsyncRelativeRetrySucceeded200Response
  extends HttpResponse {
  status: "200";
  body: Product;
  headers: RawHttpHeaders & LRORetrysPutAsyncRelativeRetrySucceeded200Headers;
}

/** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysPutAsyncRelativeRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysDeleteProvisioning202Accepted200Succeeded200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

export interface LRORetrysDeleteProvisioning202Accepted200Succeeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/provisioning/202/accepted/200/succeeded */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysDeleteProvisioning202Accepted200Succeeded202Response
  extends HttpResponse {
  status: "202";
  body: Product;
  headers: RawHttpHeaders &
    LRORetrysDeleteProvisioning202Accepted200Succeeded202Headers;
}

/** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysDeleteProvisioning202Accepted200SucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LRORetrysDelete202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysDelete202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LRORetrysDelete202Retry200202Headers;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LRORetrysDelete202Retry200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LRORetrysDeleteAsyncRelativeRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysDeleteAsyncRelativeRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders &
    LRORetrysDeleteAsyncRelativeRetrySucceeded202Headers;
}

/** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysDeleteAsyncRelativeRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LRORetrysPost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LRORetrysPost202Retry200202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LRORetrysPost202Retry200202Headers;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LRORetrysPost202Retry200defaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LRORetrysPostAsyncRelativeRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/retryerror/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysPostAsyncRelativeRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LRORetrysPostAsyncRelativeRetrySucceeded202Headers;
}

/** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LRORetrysPostAsyncRelativeRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 400 to the initial request */
export interface LrosaDsPutNonRetry400200Response extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a 400 to the initial request */
export interface LrosaDsPutNonRetry400201Response extends HttpResponse {
  status: "201";
  body: Product;
}

/** Long running put request, service returns a 400 to the initial request */
export interface LrosaDsPutNonRetry400defaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400201Response
  extends HttpResponse {
  status: "201";
  body: Product;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400InvalidJson200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400InvalidJson201Response
  extends HttpResponse {
  status: "201";
  body: Product;
}

/** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
export interface LrosaDsPutNonRetry201Creating400InvalidJsondefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsPutAsyncRelativeRetry400200Headers {
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running put request, service returns a 200 with ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetry400200Response
  extends HttpResponse {
  status: "200";
  body: Product;
  headers: RawHttpHeaders & LrosaDsPutAsyncRelativeRetry400200Headers;
}

/** Long running put request, service returns a 200 with ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetry400defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsDeleteNonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 400 with an error body */
export interface LrosaDsDeleteNonRetry400202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsDeleteNonRetry400202Headers;
}

/** Long running delete request, service returns a 400 with an error body */
export interface LrosaDsDeleteNonRetry400defaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsDelete202NonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/delete/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 with a location header */
export interface LrosaDsDelete202NonRetry400202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsDelete202NonRetry400202Headers;
}

/** Long running delete request, service returns a 202 with a location header */
export interface LrosaDsDelete202NonRetry400defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsDeleteAsyncRelativeRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/nonretryerror/deleteasync/retry/operationResults/400 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/nonretryerror/deleteasync/retry/operationResults/400 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetry400202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsDeleteAsyncRelativeRetry400202Headers;
}

/** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsDeleteAsyncRelativeRetry400defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsPostNonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 400 with no error body */
export interface LrosaDsPostNonRetry400202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsPostNonRetry400202Headers;
}

/** Long running post request, service returns a 400 with no error body */
export interface LrosaDsPostNonRetry400defaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsPost202NonRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/retryerror/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 202 with a location header */
export interface LrosaDsPost202NonRetry400202Response extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsPost202NonRetry400202Headers;
}

/** Long running post request, service returns a 202 with a location header */
export interface LrosaDsPost202NonRetry400defaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsPostAsyncRelativeRetry400202Headers {
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/nonretryerror/putasync/retry/operationResults/400 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running post request, service returns a 202 to the initial request Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetry400202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LrosaDsPostAsyncRelativeRetry400202Headers;
}

/** Long running post request, service returns a 202 to the initial request Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPostAsyncRelativeRetry400defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running put request, service returns a 201 to the initial request with no payload */
export interface LrosaDsPutError201NoProvisioningStatePayload200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a 201 to the initial request with no payload */
export interface LrosaDsPutError201NoProvisioningStatePayload201Response
  extends HttpResponse {
  status: "201";
  body: Product;
}

/** Long running put request, service returns a 201 to the initial request with no payload */
export interface LrosaDsPutError201NoProvisioningStatePayloaddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsPutAsyncRelativeRetryNoStatus200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryNoStatus200Response
  extends HttpResponse {
  status: "200";
  body: Product;
  headers: RawHttpHeaders & LrosaDsPutAsyncRelativeRetryNoStatus200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryNoStatusdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsPutAsyncRelativeRetryNoStatusPayload200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response
  extends HttpResponse {
  status: "200";
  body: Product;
  headers: RawHttpHeaders &
    LrosaDsPutAsyncRelativeRetryNoStatusPayload200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryNoStatusPayloaddefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** Long running delete request, service returns a 204 to the initial request, indicating success. */
export interface LrosaDsDelete204Succeeded204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running delete request, service returns a 204 to the initial request, indicating success. */
export interface LrosaDsDelete204SucceededdefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsDeleteAsyncRelativeRetryNoStatus202Headers {
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/deleteasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
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
  body: CloudError;
}

export interface LrosaDsPost202NoLocation202Headers {
  /** Location to poll for result status: will not be set */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
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
  body: CloudError;
}

export interface LrosaDsPostAsyncRelativeRetryNoPayload202Headers {
  /** Location to poll for result status: will be set to /lro/error/putasync/retry/failed/operationResults/nopayload */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/error/putasync/retry/failed/operationResults/nopayload */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
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
  body: CloudError;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
export interface LrosaDsPut200InvalidJson200Response extends HttpResponse {
  status: "200";
  body: Product;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
export interface LrosaDsPut200InvalidJson204Response extends HttpResponse {
  status: "204";
  body: Record<string, unknown>;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
export interface LrosaDsPut200InvalidJsondefaultResponse extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsPutAsyncRelativeRetryInvalidHeader200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDsPutAsyncRelativeRetryInvalidHeader200Response
  extends HttpResponse {
  status: "200";
  body: Product;
  headers: RawHttpHeaders & LrosaDsPutAsyncRelativeRetryInvalidHeader200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
export interface LrosaDsPutAsyncRelativeRetryInvalidHeaderdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Headers {
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/putasync/retry/failed/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response
  extends HttpResponse {
  status: "200";
  body: Product;
  headers: RawHttpHeaders &
    LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Headers;
}

/** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LrosaDsDelete202RetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to /foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: string;
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
  body: CloudError;
}

export interface LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to /foo */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: string;
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
  body: CloudError;
}

export interface LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Headers {
  /** Location to poll for result status: will be set to /lro/error/deleteasync/retry/failed/operationResults/invalidjsonpolling */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/error/deleteasync/retry/failed/operationResults/invalidjsonpolling */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
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
  body: CloudError;
}

export interface LrosaDsPost202RetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to /foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: string;
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
  body: CloudError;
}

export interface LrosaDsPostAsyncRelativeRetryInvalidHeader202Headers {
  /** Location to poll for result status: will be set to foo */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to foo */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to /bar */
  "retry-after"?: string;
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
  body: CloudError;
}

export interface LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Headers {
  /** Location to poll for result status: will be set to /lro/error/postasync/retry/failed/operationResults/invalidjsonpolling */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/error/postasync/retry/failed/operationResults/invalidjsonpolling */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
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
  body: CloudError;
}

export interface LROsCustomHeaderPutAsyncRetrySucceeded200Headers {
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderPutAsyncRetrySucceeded200Response
  extends HttpResponse {
  status: "200";
  body: Product;
  headers: RawHttpHeaders & LROsCustomHeaderPutAsyncRetrySucceeded200Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderPutAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsCustomHeaderPut201CreatingSucceeded200200Response
  extends HttpResponse {
  status: "200";
  body: Product;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsCustomHeaderPut201CreatingSucceeded200201Response
  extends HttpResponse {
  status: "201";
  body: Product;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
export interface LROsCustomHeaderPut201CreatingSucceeded200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsCustomHeaderPost202Retry200202Headers {
  /** Location to poll for result status: will be set to /lro/customheader/post/202/retry/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROsCustomHeaderPost202Retry200202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsCustomHeaderPost202Retry200202Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
export interface LROsCustomHeaderPost202Retry200defaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}

export interface LROsCustomHeaderPostAsyncRetrySucceeded202Headers {
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  "azure-asyncoperation"?: string;
  /** Location to poll for result status: will be set to /lro/customheader/putasync/retry/succeeded/operationResults/200 */
  location?: string;
  /** Number of milliseconds until the next poll should be sent, will be set to zero */
  "retry-after"?: string;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderPostAsyncRetrySucceeded202Response
  extends HttpResponse {
  status: "202";
  body: Record<string, unknown>;
  headers: RawHttpHeaders & LROsCustomHeaderPostAsyncRetrySucceeded202Headers;
}

/** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
export interface LROsCustomHeaderPostAsyncRetrySucceededdefaultResponse
  extends HttpResponse {
  status: "500";
  body: CloudError;
}
