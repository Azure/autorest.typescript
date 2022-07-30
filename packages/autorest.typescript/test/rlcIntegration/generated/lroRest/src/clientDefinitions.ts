// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  LROsPut200SucceededParameters,
  LROsPatch200SucceededIgnoreHeadersParameters,
  LROsPatch201RetryWithAsyncHeaderParameters,
  LROsPatch202RetryWithAsyncAndLocationHeaderParameters,
  LROsPut201SucceededParameters,
  LROsPost202ListParameters,
  LROsPut200SucceededNoStateParameters,
  LROsPut202Retry200Parameters,
  LROsPut201CreatingSucceeded200Parameters,
  LROsPut200UpdatingSucceeded204Parameters,
  LROsPut201CreatingFailed200Parameters,
  LROsPut200Acceptedcanceled200Parameters,
  LROsPutNoHeaderInRetryParameters,
  LROsPutAsyncRetrySucceededParameters,
  LROsPutAsyncNoRetrySucceededParameters,
  LROsPutAsyncRetryFailedParameters,
  LROsPutAsyncNoRetrycanceledParameters,
  LROsPutAsyncNoHeaderInRetryParameters,
  LROsPutNonResourceParameters,
  LROsPutAsyncNonResourceParameters,
  LROsPutSubResourceParameters,
  LROsPutAsyncSubResourceParameters,
  LROsDeleteProvisioning202Accepted200SucceededParameters,
  LROsDeleteProvisioning202DeletingFailed200Parameters,
  LROsDeleteProvisioning202Deletingcanceled200Parameters,
  LROsDelete204SucceededParameters,
  LROsDelete202Retry200Parameters,
  LROsDelete202NoRetry204Parameters,
  LROsDeleteNoHeaderInRetryParameters,
  LROsDeleteAsyncNoHeaderInRetryParameters,
  LROsDeleteAsyncRetrySucceededParameters,
  LROsDeleteAsyncNoRetrySucceededParameters,
  LROsDeleteAsyncRetryFailedParameters,
  LROsDeleteAsyncRetrycanceledParameters,
  LROsPost200WithPayloadParameters,
  LROsPost202Retry200Parameters,
  LROsPost202NoRetry204Parameters,
  LROsPostDoubleHeadersFinalLocationGetParameters,
  LROsPostDoubleHeadersFinalAzureHeaderGetParameters,
  LROsPostDoubleHeadersFinalAzureHeaderGetDefaultParameters,
  LROsPostAsyncRetrySucceededParameters,
  LROsPostAsyncNoRetrySucceededParameters,
  LROsPostAsyncRetryFailedParameters,
  LROsPostAsyncRetrycanceledParameters,
  LRORetrysPut201CreatingSucceeded200Parameters,
  LRORetrysPutAsyncRelativeRetrySucceededParameters,
  LRORetrysDeleteProvisioning202Accepted200SucceededParameters,
  LRORetrysDelete202Retry200Parameters,
  LRORetrysDeleteAsyncRelativeRetrySucceededParameters,
  LRORetrysPost202Retry200Parameters,
  LRORetrysPostAsyncRelativeRetrySucceededParameters,
  LrosaDsPutNonRetry400Parameters,
  LrosaDsPutNonRetry201Creating400Parameters,
  LrosaDsPutNonRetry201Creating400InvalidJsonParameters,
  LrosaDsPutAsyncRelativeRetry400Parameters,
  LrosaDsDeleteNonRetry400Parameters,
  LrosaDsDelete202NonRetry400Parameters,
  LrosaDsDeleteAsyncRelativeRetry400Parameters,
  LrosaDsPostNonRetry400Parameters,
  LrosaDsPost202NonRetry400Parameters,
  LrosaDsPostAsyncRelativeRetry400Parameters,
  LrosaDsPutError201NoProvisioningStatePayloadParameters,
  LrosaDsPutAsyncRelativeRetryNoStatusParameters,
  LrosaDsPutAsyncRelativeRetryNoStatusPayloadParameters,
  LrosaDsDelete204SucceededParameters,
  LrosaDsDeleteAsyncRelativeRetryNoStatusParameters,
  LrosaDsPost202NoLocationParameters,
  LrosaDsPostAsyncRelativeRetryNoPayloadParameters,
  LrosaDsPut200InvalidJsonParameters,
  LrosaDsPutAsyncRelativeRetryInvalidHeaderParameters,
  LrosaDsPutAsyncRelativeRetryInvalidJsonPollingParameters,
  LrosaDsDelete202RetryInvalidHeaderParameters,
  LrosaDsDeleteAsyncRelativeRetryInvalidHeaderParameters,
  LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingParameters,
  LrosaDsPost202RetryInvalidHeaderParameters,
  LrosaDsPostAsyncRelativeRetryInvalidHeaderParameters,
  LrosaDsPostAsyncRelativeRetryInvalidJsonPollingParameters,
  LROsCustomHeaderPutAsyncRetrySucceededParameters,
  LROsCustomHeaderPut201CreatingSucceeded200Parameters,
  LROsCustomHeaderPost202Retry200Parameters,
  LROsCustomHeaderPostAsyncRetrySucceededParameters
} from "./parameters";
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
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Put200Succeeded {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
  put(
    options?: LROsPut200SucceededParameters
  ): StreamableMethod<
    | LROsPut200Succeeded200Response
    | LROsPut200Succeeded204Response
    | LROsPut200SucceededdefaultResponse
  >;
}

export interface Patch200SucceededIgnoreHeaders {
  /** Long running put request, service returns a 200 to the initial request with location header. We should not have any subsequent calls after receiving this first response. */
  patch(
    options?: LROsPatch200SucceededIgnoreHeadersParameters
  ): StreamableMethod<
    | LROsPatch200SucceededIgnoreHeaders200Response
    | LROsPatch200SucceededIgnoreHeadersdefaultResponse
  >;
}

export interface Patch201RetryWithAsyncHeader {
  /** Long running patch request, service returns a 201 to the initial request with async header. */
  patch(
    options?: LROsPatch201RetryWithAsyncHeaderParameters
  ): StreamableMethod<
    | LROsPatch201RetryWithAsyncHeader200Response
    | LROsPatch201RetryWithAsyncHeader201Response
    | LROsPatch201RetryWithAsyncHeaderdefaultResponse
  >;
}

export interface Patch202RetryWithAsyncAndLocationHeader {
  /** Long running patch request, service returns a 202 to the initial request with async and location header. */
  patch(
    options?: LROsPatch202RetryWithAsyncAndLocationHeaderParameters
  ): StreamableMethod<
    | LROsPatch202RetryWithAsyncAndLocationHeader200Response
    | LROsPatch202RetryWithAsyncAndLocationHeader202Response
    | LROsPatch202RetryWithAsyncAndLocationHeaderdefaultResponse
  >;
}

export interface Put201Succeeded {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
  put(
    options?: LROsPut201SucceededParameters
  ): StreamableMethod<
    LROsPut201Succeeded201Response | LROsPut201SucceededdefaultResponse
  >;
}

export interface Post202List {
  /** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
  post(
    options?: LROsPost202ListParameters
  ): StreamableMethod<
    | LROsPost202List200Response
    | LROsPost202List202Response
    | LROsPost202ListdefaultResponse
  >;
}

export interface Put200SucceededNoState {
  /** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
  put(
    options?: LROsPut200SucceededNoStateParameters
  ): StreamableMethod<
    | LROsPut200SucceededNoState200Response
    | LROsPut200SucceededNoStatedefaultResponse
  >;
}

export interface Put202Retry200 {
  /** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
  put(
    options?: LROsPut202Retry200Parameters
  ): StreamableMethod<
    LROsPut202Retry200202Response | LROsPut202Retry200defaultResponse
  >;
}

export interface Put201CreatingSucceeded200 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LROsPut201CreatingSucceeded200Parameters
  ): StreamableMethod<
    | LROsPut201CreatingSucceeded200200Response
    | LROsPut201CreatingSucceeded200201Response
    | LROsPut201CreatingSucceeded200defaultResponse
  >;
}

export interface Put200UpdatingSucceeded204 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LROsPut200UpdatingSucceeded204Parameters
  ): StreamableMethod<
    | LROsPut200UpdatingSucceeded204200Response
    | LROsPut200UpdatingSucceeded204defaultResponse
  >;
}

export interface Put201CreatingFailed200 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
  put(
    options?: LROsPut201CreatingFailed200Parameters
  ): StreamableMethod<
    | LROsPut201CreatingFailed200200Response
    | LROsPut201CreatingFailed200201Response
    | LROsPut201CreatingFailed200defaultResponse
  >;
}

export interface Put200Acceptedcanceled200 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
  put(
    options?: LROsPut200Acceptedcanceled200Parameters
  ): StreamableMethod<
    | LROsPut200Acceptedcanceled200200Response
    | LROsPut200Acceptedcanceled200defaultResponse
  >;
}

export interface PutNoHeaderInRetry {
  /** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
  put(
    options?: LROsPutNoHeaderInRetryParameters
  ): StreamableMethod<
    LROsPutNoHeaderInRetry202Response | LROsPutNoHeaderInRetrydefaultResponse
  >;
}

export interface PutAsyncRetrySucceeded {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsPutAsyncRetrySucceededParameters
  ): StreamableMethod<
    | LROsPutAsyncRetrySucceeded200Response
    | LROsPutAsyncRetrySucceededdefaultResponse
  >;
}

export interface PutAsyncNoRetrySucceeded {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsPutAsyncNoRetrySucceededParameters
  ): StreamableMethod<
    | LROsPutAsyncNoRetrySucceeded200Response
    | LROsPutAsyncNoRetrySucceededdefaultResponse
  >;
}

export interface PutAsyncRetryFailed {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsPutAsyncRetryFailedParameters
  ): StreamableMethod<
    LROsPutAsyncRetryFailed200Response | LROsPutAsyncRetryFaileddefaultResponse
  >;
}

export interface PutAsyncNoRetrycanceled {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsPutAsyncNoRetrycanceledParameters
  ): StreamableMethod<
    | LROsPutAsyncNoRetrycanceled200Response
    | LROsPutAsyncNoRetrycanceleddefaultResponse
  >;
}

export interface PutAsyncNoHeaderInRetry {
  /** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
  put(
    options?: LROsPutAsyncNoHeaderInRetryParameters
  ): StreamableMethod<
    | LROsPutAsyncNoHeaderInRetry201Response
    | LROsPutAsyncNoHeaderInRetrydefaultResponse
  >;
}

export interface PutNonResource {
  /** Long running put request with non resource. */
  put(
    options?: LROsPutNonResourceParameters
  ): StreamableMethod<
    LROsPutNonResource202Response | LROsPutNonResourcedefaultResponse
  >;
}

export interface PutAsyncNonResource {
  /** Long running put request with non resource. */
  put(
    options?: LROsPutAsyncNonResourceParameters
  ): StreamableMethod<
    LROsPutAsyncNonResource202Response | LROsPutAsyncNonResourcedefaultResponse
  >;
}

export interface PutSubResource {
  /** Long running put request with sub resource. */
  put(
    options?: LROsPutSubResourceParameters
  ): StreamableMethod<
    LROsPutSubResource202Response | LROsPutSubResourcedefaultResponse
  >;
}

export interface PutAsyncSubResource {
  /** Long running put request with sub resource. */
  put(
    options?: LROsPutAsyncSubResourceParameters
  ): StreamableMethod<
    LROsPutAsyncSubResource202Response | LROsPutAsyncSubResourcedefaultResponse
  >;
}

export interface DeleteProvisioning202Accepted200Succeeded {
  /** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LROsDeleteProvisioning202Accepted200SucceededParameters
  ): StreamableMethod<
    | LROsDeleteProvisioning202Accepted200Succeeded200Response
    | LROsDeleteProvisioning202Accepted200Succeeded202Response
    | LROsDeleteProvisioning202Accepted200SucceededdefaultResponse
  >;
}

export interface DeleteProvisioning202DeletingFailed200 {
  /** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
  delete(
    options?: LROsDeleteProvisioning202DeletingFailed200Parameters
  ): StreamableMethod<
    | LROsDeleteProvisioning202DeletingFailed200200Response
    | LROsDeleteProvisioning202DeletingFailed200202Response
    | LROsDeleteProvisioning202DeletingFailed200defaultResponse
  >;
}

export interface DeleteProvisioning202Deletingcanceled200 {
  /** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
  delete(
    options?: LROsDeleteProvisioning202Deletingcanceled200Parameters
  ): StreamableMethod<
    | LROsDeleteProvisioning202Deletingcanceled200200Response
    | LROsDeleteProvisioning202Deletingcanceled200202Response
    | LROsDeleteProvisioning202Deletingcanceled200defaultResponse
  >;
}

export interface Delete204Succeeded {
  /** Long running delete succeeds and returns right away */
  delete(
    options?: LROsDelete204SucceededParameters
  ): StreamableMethod<
    LROsDelete204Succeeded204Response | LROsDelete204SucceededdefaultResponse
  >;
}

export interface Delete202Retry200 {
  /** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LROsDelete202Retry200Parameters
  ): StreamableMethod<
    | LROsDelete202Retry200200Response
    | LROsDelete202Retry200202Response
    | LROsDelete202Retry200defaultResponse
  >;
}

export interface Delete202NoRetry204 {
  /** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LROsDelete202NoRetry204Parameters
  ): StreamableMethod<
    | LROsDelete202NoRetry204200Response
    | LROsDelete202NoRetry204202Response
    | LROsDelete202NoRetry204defaultResponse
  >;
}

export interface DeleteNoHeaderInRetry {
  /** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
  delete(
    options?: LROsDeleteNoHeaderInRetryParameters
  ): StreamableMethod<
    | LROsDeleteNoHeaderInRetry202Response
    | LROsDeleteNoHeaderInRetry204Response
    | LROsDeleteNoHeaderInRetrydefaultResponse
  >;
}

export interface DeleteAsyncNoHeaderInRetry {
  /** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
  delete(
    options?: LROsDeleteAsyncNoHeaderInRetryParameters
  ): StreamableMethod<
    | LROsDeleteAsyncNoHeaderInRetry202Response
    | LROsDeleteAsyncNoHeaderInRetry204Response
    | LROsDeleteAsyncNoHeaderInRetrydefaultResponse
  >;
}

export interface DeleteAsyncRetrySucceeded {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsDeleteAsyncRetrySucceededParameters
  ): StreamableMethod<
    | LROsDeleteAsyncRetrySucceeded202Response
    | LROsDeleteAsyncRetrySucceededdefaultResponse
  >;
}

export interface DeleteAsyncNoRetrySucceeded {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsDeleteAsyncNoRetrySucceededParameters
  ): StreamableMethod<
    | LROsDeleteAsyncNoRetrySucceeded202Response
    | LROsDeleteAsyncNoRetrySucceededdefaultResponse
  >;
}

export interface DeleteAsyncRetryFailed {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsDeleteAsyncRetryFailedParameters
  ): StreamableMethod<
    | LROsDeleteAsyncRetryFailed202Response
    | LROsDeleteAsyncRetryFaileddefaultResponse
  >;
}

export interface DeleteAsyncRetrycanceled {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsDeleteAsyncRetrycanceledParameters
  ): StreamableMethod<
    | LROsDeleteAsyncRetrycanceled202Response
    | LROsDeleteAsyncRetrycanceleddefaultResponse
  >;
}

export interface Post200WithPayload {
  /** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
  post(
    options?: LROsPost200WithPayloadParameters
  ): StreamableMethod<
    | LROsPost200WithPayload200Response
    | LROsPost200WithPayload202Response
    | LROsPost200WithPayloaddefaultResponse
  >;
}

export interface Post202Retry200 {
  /** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
  post(
    options?: LROsPost202Retry200Parameters
  ): StreamableMethod<
    LROsPost202Retry200202Response | LROsPost202Retry200defaultResponse
  >;
}

export interface Post202NoRetry204 {
  /** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
  post(
    options?: LROsPost202NoRetry204Parameters
  ): StreamableMethod<
    LROsPost202NoRetry204202Response | LROsPost202NoRetry204defaultResponse
  >;
}

export interface PostDoubleHeadersFinalLocationGet {
  /** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
  post(
    options?: LROsPostDoubleHeadersFinalLocationGetParameters
  ): StreamableMethod<
    | LROsPostDoubleHeadersFinalLocationGet202Response
    | LROsPostDoubleHeadersFinalLocationGetdefaultResponse
  >;
}

export interface PostDoubleHeadersFinalAzureHeaderGet {
  /** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
  post(
    options?: LROsPostDoubleHeadersFinalAzureHeaderGetParameters
  ): StreamableMethod<
    | LROsPostDoubleHeadersFinalAzureHeaderGet202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetdefaultResponse
  >;
}

export interface PostDoubleHeadersFinalAzureHeaderGetDefault {
  /** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
  post(
    options?: LROsPostDoubleHeadersFinalAzureHeaderGetDefaultParameters
  ): StreamableMethod<
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefault202Response
    | LROsPostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse
  >;
}

export interface PostAsyncRetrySucceeded {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsPostAsyncRetrySucceededParameters
  ): StreamableMethod<
    | LROsPostAsyncRetrySucceeded200Response
    | LROsPostAsyncRetrySucceeded202Response
    | LROsPostAsyncRetrySucceededdefaultResponse
  >;
}

export interface PostAsyncNoRetrySucceeded {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsPostAsyncNoRetrySucceededParameters
  ): StreamableMethod<
    | LROsPostAsyncNoRetrySucceeded200Response
    | LROsPostAsyncNoRetrySucceeded202Response
    | LROsPostAsyncNoRetrySucceededdefaultResponse
  >;
}

export interface PostAsyncRetryFailed {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsPostAsyncRetryFailedParameters
  ): StreamableMethod<
    | LROsPostAsyncRetryFailed202Response
    | LROsPostAsyncRetryFaileddefaultResponse
  >;
}

export interface PostAsyncRetrycanceled {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsPostAsyncRetrycanceledParameters
  ): StreamableMethod<
    | LROsPostAsyncRetrycanceled202Response
    | LROsPostAsyncRetrycanceleddefaultResponse
  >;
}

export interface Put201CreatingSucceeded200 {
  /** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LRORetrysPut201CreatingSucceeded200Parameters
  ): StreamableMethod<
    | LRORetrysPut201CreatingSucceeded200200Response
    | LRORetrysPut201CreatingSucceeded200201Response
    | LRORetrysPut201CreatingSucceeded200defaultResponse
  >;
}

export interface PutAsyncRelativeRetrySucceeded {
  /** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LRORetrysPutAsyncRelativeRetrySucceededParameters
  ): StreamableMethod<
    | LRORetrysPutAsyncRelativeRetrySucceeded200Response
    | LRORetrysPutAsyncRelativeRetrySucceededdefaultResponse
  >;
}

export interface DeleteProvisioning202Accepted200Succeeded {
  /** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LRORetrysDeleteProvisioning202Accepted200SucceededParameters
  ): StreamableMethod<
    | LRORetrysDeleteProvisioning202Accepted200Succeeded200Response
    | LRORetrysDeleteProvisioning202Accepted200Succeeded202Response
    | LRORetrysDeleteProvisioning202Accepted200SucceededdefaultResponse
  >;
}

export interface Delete202Retry200 {
  /** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LRORetrysDelete202Retry200Parameters
  ): StreamableMethod<
    | LRORetrysDelete202Retry200202Response
    | LRORetrysDelete202Retry200defaultResponse
  >;
}

export interface DeleteAsyncRelativeRetrySucceeded {
  /** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LRORetrysDeleteAsyncRelativeRetrySucceededParameters
  ): StreamableMethod<
    | LRORetrysDeleteAsyncRelativeRetrySucceeded202Response
    | LRORetrysDeleteAsyncRelativeRetrySucceededdefaultResponse
  >;
}

export interface Post202Retry200 {
  /** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
  post(
    options?: LRORetrysPost202Retry200Parameters
  ): StreamableMethod<
    | LRORetrysPost202Retry200202Response
    | LRORetrysPost202Retry200defaultResponse
  >;
}

export interface PostAsyncRelativeRetrySucceeded {
  /** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LRORetrysPostAsyncRelativeRetrySucceededParameters
  ): StreamableMethod<
    | LRORetrysPostAsyncRelativeRetrySucceeded202Response
    | LRORetrysPostAsyncRelativeRetrySucceededdefaultResponse
  >;
}

export interface PutNonRetry400 {
  /** Long running put request, service returns a 400 to the initial request */
  put(
    options?: LrosaDsPutNonRetry400Parameters
  ): StreamableMethod<
    | LrosaDsPutNonRetry400200Response
    | LrosaDsPutNonRetry400201Response
    | LrosaDsPutNonRetry400defaultResponse
  >;
}

export interface PutNonRetry201Creating400 {
  /** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
  put(
    options?: LrosaDsPutNonRetry201Creating400Parameters
  ): StreamableMethod<
    | LrosaDsPutNonRetry201Creating400200Response
    | LrosaDsPutNonRetry201Creating400201Response
    | LrosaDsPutNonRetry201Creating400defaultResponse
  >;
}

export interface PutNonRetry201Creating400InvalidJson {
  /** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
  put(
    options?: LrosaDsPutNonRetry201Creating400InvalidJsonParameters
  ): StreamableMethod<
    | LrosaDsPutNonRetry201Creating400InvalidJson200Response
    | LrosaDsPutNonRetry201Creating400InvalidJson201Response
    | LrosaDsPutNonRetry201Creating400InvalidJsondefaultResponse
  >;
}

export interface PutAsyncRelativeRetry400 {
  /** Long running put request, service returns a 200 with ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsPutAsyncRelativeRetry400Parameters
  ): StreamableMethod<
    | LrosaDsPutAsyncRelativeRetry400200Response
    | LrosaDsPutAsyncRelativeRetry400defaultResponse
  >;
}

export interface DeleteNonRetry400 {
  /** Long running delete request, service returns a 400 with an error body */
  delete(
    options?: LrosaDsDeleteNonRetry400Parameters
  ): StreamableMethod<
    | LrosaDsDeleteNonRetry400202Response
    | LrosaDsDeleteNonRetry400defaultResponse
  >;
}

export interface Delete202NonRetry400 {
  /** Long running delete request, service returns a 202 with a location header */
  delete(
    options?: LrosaDsDelete202NonRetry400Parameters
  ): StreamableMethod<
    | LrosaDsDelete202NonRetry400202Response
    | LrosaDsDelete202NonRetry400defaultResponse
  >;
}

export interface DeleteAsyncRelativeRetry400 {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LrosaDsDeleteAsyncRelativeRetry400Parameters
  ): StreamableMethod<
    | LrosaDsDeleteAsyncRelativeRetry400202Response
    | LrosaDsDeleteAsyncRelativeRetry400defaultResponse
  >;
}

export interface PostNonRetry400 {
  /** Long running post request, service returns a 400 with no error body */
  post(
    options?: LrosaDsPostNonRetry400Parameters
  ): StreamableMethod<
    LrosaDsPostNonRetry400202Response | LrosaDsPostNonRetry400defaultResponse
  >;
}

export interface Post202NonRetry400 {
  /** Long running post request, service returns a 202 with a location header */
  post(
    options?: LrosaDsPost202NonRetry400Parameters
  ): StreamableMethod<
    | LrosaDsPost202NonRetry400202Response
    | LrosaDsPost202NonRetry400defaultResponse
  >;
}

export interface PostAsyncRelativeRetry400 {
  /** Long running post request, service returns a 202 to the initial request Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LrosaDsPostAsyncRelativeRetry400Parameters
  ): StreamableMethod<
    | LrosaDsPostAsyncRelativeRetry400202Response
    | LrosaDsPostAsyncRelativeRetry400defaultResponse
  >;
}

export interface PutError201NoProvisioningStatePayload {
  /** Long running put request, service returns a 201 to the initial request with no payload */
  put(
    options?: LrosaDsPutError201NoProvisioningStatePayloadParameters
  ): StreamableMethod<
    | LrosaDsPutError201NoProvisioningStatePayload200Response
    | LrosaDsPutError201NoProvisioningStatePayload201Response
    | LrosaDsPutError201NoProvisioningStatePayloaddefaultResponse
  >;
}

export interface PutAsyncRelativeRetryNoStatus {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsPutAsyncRelativeRetryNoStatusParameters
  ): StreamableMethod<
    | LrosaDsPutAsyncRelativeRetryNoStatus200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusdefaultResponse
  >;
}

export interface PutAsyncRelativeRetryNoStatusPayload {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsPutAsyncRelativeRetryNoStatusPayloadParameters
  ): StreamableMethod<
    | LrosaDsPutAsyncRelativeRetryNoStatusPayload200Response
    | LrosaDsPutAsyncRelativeRetryNoStatusPayloaddefaultResponse
  >;
}

export interface Delete204Succeeded {
  /** Long running delete request, service returns a 204 to the initial request, indicating success. */
  delete(
    options?: LrosaDsDelete204SucceededParameters
  ): StreamableMethod<
    | LrosaDsDelete204Succeeded204Response
    | LrosaDsDelete204SucceededdefaultResponse
  >;
}

export interface DeleteAsyncRelativeRetryNoStatus {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LrosaDsDeleteAsyncRelativeRetryNoStatusParameters
  ): StreamableMethod<
    | LrosaDsDeleteAsyncRelativeRetryNoStatus202Response
    | LrosaDsDeleteAsyncRelativeRetryNoStatusdefaultResponse
  >;
}

export interface Post202NoLocation {
  /** Long running post request, service returns a 202 to the initial request, without a location header. */
  post(
    options?: LrosaDsPost202NoLocationParameters
  ): StreamableMethod<
    | LrosaDsPost202NoLocation202Response
    | LrosaDsPost202NoLocationdefaultResponse
  >;
}

export interface PostAsyncRelativeRetryNoPayload {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LrosaDsPostAsyncRelativeRetryNoPayloadParameters
  ): StreamableMethod<
    | LrosaDsPostAsyncRelativeRetryNoPayload202Response
    | LrosaDsPostAsyncRelativeRetryNoPayloaddefaultResponse
  >;
}

export interface Put200InvalidJson {
  /** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
  put(
    options?: LrosaDsPut200InvalidJsonParameters
  ): StreamableMethod<
    | LrosaDsPut200InvalidJson200Response
    | LrosaDsPut200InvalidJson204Response
    | LrosaDsPut200InvalidJsondefaultResponse
  >;
}

export interface PutAsyncRelativeRetryInvalidHeader {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
  put(
    options?: LrosaDsPutAsyncRelativeRetryInvalidHeaderParameters
  ): StreamableMethod<
    | LrosaDsPutAsyncRelativeRetryInvalidHeader200Response
    | LrosaDsPutAsyncRelativeRetryInvalidHeaderdefaultResponse
  >;
}

export interface PutAsyncRelativeRetryInvalidJsonPolling {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsPutAsyncRelativeRetryInvalidJsonPollingParameters
  ): StreamableMethod<
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPolling200Response
    | LrosaDsPutAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  >;
}

export interface Delete202RetryInvalidHeader {
  /** Long running delete request, service returns a 202 to the initial request receing a reponse with an invalid 'Location' and 'Retry-After' headers */
  delete(
    options?: LrosaDsDelete202RetryInvalidHeaderParameters
  ): StreamableMethod<
    | LrosaDsDelete202RetryInvalidHeader202Response
    | LrosaDsDelete202RetryInvalidHeaderdefaultResponse
  >;
}

export interface DeleteAsyncRelativeRetryInvalidHeader {
  /** Long running delete request, service returns a 202 to the initial request. The endpoint indicated in the Azure-AsyncOperation header is invalid */
  delete(
    options?: LrosaDsDeleteAsyncRelativeRetryInvalidHeaderParameters
  ): StreamableMethod<
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidHeaderdefaultResponse
  >;
}

export interface DeleteAsyncRelativeRetryInvalidJsonPolling {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingParameters
  ): StreamableMethod<
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  >;
}

export interface Post202RetryInvalidHeader {
  /** Long running post request, service returns a 202 to the initial request, with invalid 'Location' and 'Retry-After' headers. */
  post(
    options?: LrosaDsPost202RetryInvalidHeaderParameters
  ): StreamableMethod<
    | LrosaDsPost202RetryInvalidHeader202Response
    | LrosaDsPost202RetryInvalidHeaderdefaultResponse
  >;
}

export interface PostAsyncRelativeRetryInvalidHeader {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
  post(
    options?: LrosaDsPostAsyncRelativeRetryInvalidHeaderParameters
  ): StreamableMethod<
    | LrosaDsPostAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsPostAsyncRelativeRetryInvalidHeaderdefaultResponse
  >;
}

export interface PostAsyncRelativeRetryInvalidJsonPolling {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LrosaDsPostAsyncRelativeRetryInvalidJsonPollingParameters
  ): StreamableMethod<
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsPostAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  >;
}

export interface PutAsyncRetrySucceeded {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsCustomHeaderPutAsyncRetrySucceededParameters
  ): StreamableMethod<
    | LROsCustomHeaderPutAsyncRetrySucceeded200Response
    | LROsCustomHeaderPutAsyncRetrySucceededdefaultResponse
  >;
}

export interface Put201CreatingSucceeded200 {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LROsCustomHeaderPut201CreatingSucceeded200Parameters
  ): StreamableMethod<
    | LROsCustomHeaderPut201CreatingSucceeded200200Response
    | LROsCustomHeaderPut201CreatingSucceeded200201Response
    | LROsCustomHeaderPut201CreatingSucceeded200defaultResponse
  >;
}

export interface Post202Retry200 {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
  post(
    options?: LROsCustomHeaderPost202Retry200Parameters
  ): StreamableMethod<
    | LROsCustomHeaderPost202Retry200202Response
    | LROsCustomHeaderPost202Retry200defaultResponse
  >;
}

export interface PostAsyncRetrySucceeded {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsCustomHeaderPostAsyncRetrySucceededParameters
  ): StreamableMethod<
    | LROsCustomHeaderPostAsyncRetrySucceeded202Response
    | LROsCustomHeaderPostAsyncRetrySucceededdefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/lro/put/200/succeeded' has methods for the following verbs: put */
  (path: "/lro/put/200/succeeded"): Put200Succeeded;
  /** Resource for '/lro/patch/200/succeeded/ignoreheaders' has methods for the following verbs: patch */
  (
    path: "/lro/patch/200/succeeded/ignoreheaders"
  ): Patch200SucceededIgnoreHeaders;
  /** Resource for '/lro/patch/201/retry/onlyAsyncHeader' has methods for the following verbs: patch */
  (path: "/lro/patch/201/retry/onlyAsyncHeader"): Patch201RetryWithAsyncHeader;
  /** Resource for '/lro/patch/202/retry/asyncAndLocationHeader' has methods for the following verbs: patch */
  (
    path: "/lro/patch/202/retry/asyncAndLocationHeader"
  ): Patch202RetryWithAsyncAndLocationHeader;
  /** Resource for '/lro/put/201/succeeded' has methods for the following verbs: put */
  (path: "/lro/put/201/succeeded"): Put201Succeeded;
  /** Resource for '/lro/list' has methods for the following verbs: post */
  (path: "/lro/list"): Post202List;
  /** Resource for '/lro/put/200/succeeded/nostate' has methods for the following verbs: put */
  (path: "/lro/put/200/succeeded/nostate"): Put200SucceededNoState;
  /** Resource for '/lro/put/202/retry/200' has methods for the following verbs: put */
  (path: "/lro/put/202/retry/200"): Put202Retry200;
  /** Resource for '/lro/put/201/creating/succeeded/200' has methods for the following verbs: put */
  (path: "/lro/put/201/creating/succeeded/200"): Put201CreatingSucceeded200;
  /** Resource for '/lro/put/200/updating/succeeded/200' has methods for the following verbs: put */
  (path: "/lro/put/200/updating/succeeded/200"): Put200UpdatingSucceeded204;
  /** Resource for '/lro/put/201/created/failed/200' has methods for the following verbs: put */
  (path: "/lro/put/201/created/failed/200"): Put201CreatingFailed200;
  /** Resource for '/lro/put/200/accepted/canceled/200' has methods for the following verbs: put */
  (path: "/lro/put/200/accepted/canceled/200"): Put200Acceptedcanceled200;
  /** Resource for '/lro/put/noheader/202/200' has methods for the following verbs: put */
  (path: "/lro/put/noheader/202/200"): PutNoHeaderInRetry;
  /** Resource for '/lro/putasync/retry/succeeded' has methods for the following verbs: put */
  (path: "/lro/putasync/retry/succeeded"): PutAsyncRetrySucceeded;
  /** Resource for '/lro/putasync/noretry/succeeded' has methods for the following verbs: put */
  (path: "/lro/putasync/noretry/succeeded"): PutAsyncNoRetrySucceeded;
  /** Resource for '/lro/putasync/retry/failed' has methods for the following verbs: put */
  (path: "/lro/putasync/retry/failed"): PutAsyncRetryFailed;
  /** Resource for '/lro/putasync/noretry/canceled' has methods for the following verbs: put */
  (path: "/lro/putasync/noretry/canceled"): PutAsyncNoRetrycanceled;
  /** Resource for '/lro/putasync/noheader/201/200' has methods for the following verbs: put */
  (path: "/lro/putasync/noheader/201/200"): PutAsyncNoHeaderInRetry;
  /** Resource for '/lro/putnonresource/202/200' has methods for the following verbs: put */
  (path: "/lro/putnonresource/202/200"): PutNonResource;
  /** Resource for '/lro/putnonresourceasync/202/200' has methods for the following verbs: put */
  (path: "/lro/putnonresourceasync/202/200"): PutAsyncNonResource;
  /** Resource for '/lro/putsubresource/202/200' has methods for the following verbs: put */
  (path: "/lro/putsubresource/202/200"): PutSubResource;
  /** Resource for '/lro/putsubresourceasync/202/200' has methods for the following verbs: put */
  (path: "/lro/putsubresourceasync/202/200"): PutAsyncSubResource;
  /** Resource for '/lro/delete/provisioning/202/accepted/200/succeeded' has methods for the following verbs: delete */
  (
    path: "/lro/delete/provisioning/202/accepted/200/succeeded"
  ): DeleteProvisioning202Accepted200Succeeded;
  /** Resource for '/lro/delete/provisioning/202/deleting/200/failed' has methods for the following verbs: delete */
  (
    path: "/lro/delete/provisioning/202/deleting/200/failed"
  ): DeleteProvisioning202DeletingFailed200;
  /** Resource for '/lro/delete/provisioning/202/deleting/200/canceled' has methods for the following verbs: delete */
  (
    path: "/lro/delete/provisioning/202/deleting/200/canceled"
  ): DeleteProvisioning202Deletingcanceled200;
  /** Resource for '/lro/delete/204/succeeded' has methods for the following verbs: delete */
  (path: "/lro/delete/204/succeeded"): Delete204Succeeded;
  /** Resource for '/lro/delete/202/retry/200' has methods for the following verbs: delete */
  (path: "/lro/delete/202/retry/200"): Delete202Retry200;
  /** Resource for '/lro/delete/202/noretry/204' has methods for the following verbs: delete */
  (path: "/lro/delete/202/noretry/204"): Delete202NoRetry204;
  /** Resource for '/lro/delete/noheader' has methods for the following verbs: delete */
  (path: "/lro/delete/noheader"): DeleteNoHeaderInRetry;
  /** Resource for '/lro/deleteasync/noheader/202/204' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/noheader/202/204"): DeleteAsyncNoHeaderInRetry;
  /** Resource for '/lro/deleteasync/retry/succeeded' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/retry/succeeded"): DeleteAsyncRetrySucceeded;
  /** Resource for '/lro/deleteasync/noretry/succeeded' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/noretry/succeeded"): DeleteAsyncNoRetrySucceeded;
  /** Resource for '/lro/deleteasync/retry/failed' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/retry/failed"): DeleteAsyncRetryFailed;
  /** Resource for '/lro/deleteasync/retry/canceled' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/retry/canceled"): DeleteAsyncRetrycanceled;
  /** Resource for '/lro/post/payload/200' has methods for the following verbs: post */
  (path: "/lro/post/payload/200"): Post200WithPayload;
  /** Resource for '/lro/post/202/retry/200' has methods for the following verbs: post */
  (path: "/lro/post/202/retry/200"): Post202Retry200;
  /** Resource for '/lro/post/202/noretry/204' has methods for the following verbs: post */
  (path: "/lro/post/202/noretry/204"): Post202NoRetry204;
  /** Resource for '/lro/LROPostDoubleHeadersFinalLocationGet' has methods for the following verbs: post */
  (
    path: "/lro/LROPostDoubleHeadersFinalLocationGet"
  ): PostDoubleHeadersFinalLocationGet;
  /** Resource for '/lro/LROPostDoubleHeadersFinalAzureHeaderGet' has methods for the following verbs: post */
  (
    path: "/lro/LROPostDoubleHeadersFinalAzureHeaderGet"
  ): PostDoubleHeadersFinalAzureHeaderGet;
  /** Resource for '/lro/LROPostDoubleHeadersFinalAzureHeaderGetDefault' has methods for the following verbs: post */
  (
    path: "/lro/LROPostDoubleHeadersFinalAzureHeaderGetDefault"
  ): PostDoubleHeadersFinalAzureHeaderGetDefault;
  /** Resource for '/lro/postasync/retry/succeeded' has methods for the following verbs: post */
  (path: "/lro/postasync/retry/succeeded"): PostAsyncRetrySucceeded;
  /** Resource for '/lro/postasync/noretry/succeeded' has methods for the following verbs: post */
  (path: "/lro/postasync/noretry/succeeded"): PostAsyncNoRetrySucceeded;
  /** Resource for '/lro/postasync/retry/failed' has methods for the following verbs: post */
  (path: "/lro/postasync/retry/failed"): PostAsyncRetryFailed;
  /** Resource for '/lro/postasync/retry/canceled' has methods for the following verbs: post */
  (path: "/lro/postasync/retry/canceled"): PostAsyncRetrycanceled;
  /** Resource for '/lro/retryerror/put/201/creating/succeeded/200' has methods for the following verbs: put */
  (
    path: "/lro/retryerror/put/201/creating/succeeded/200"
  ): Put201CreatingSucceeded200;
  /** Resource for '/lro/retryerror/putasync/retry/succeeded' has methods for the following verbs: put */
  (
    path: "/lro/retryerror/putasync/retry/succeeded"
  ): PutAsyncRelativeRetrySucceeded;
  /** Resource for '/lro/retryerror/delete/provisioning/202/accepted/200/succeeded' has methods for the following verbs: delete */
  (
    path: "/lro/retryerror/delete/provisioning/202/accepted/200/succeeded"
  ): DeleteProvisioning202Accepted200Succeeded;
  /** Resource for '/lro/retryerror/delete/202/retry/200' has methods for the following verbs: delete */
  (path: "/lro/retryerror/delete/202/retry/200"): Delete202Retry200;
  /** Resource for '/lro/retryerror/deleteasync/retry/succeeded' has methods for the following verbs: delete */
  (
    path: "/lro/retryerror/deleteasync/retry/succeeded"
  ): DeleteAsyncRelativeRetrySucceeded;
  /** Resource for '/lro/retryerror/post/202/retry/200' has methods for the following verbs: post */
  (path: "/lro/retryerror/post/202/retry/200"): Post202Retry200;
  /** Resource for '/lro/retryerror/postasync/retry/succeeded' has methods for the following verbs: post */
  (
    path: "/lro/retryerror/postasync/retry/succeeded"
  ): PostAsyncRelativeRetrySucceeded;
  /** Resource for '/lro/nonretryerror/put/400' has methods for the following verbs: put */
  (path: "/lro/nonretryerror/put/400"): PutNonRetry400;
  /** Resource for '/lro/nonretryerror/put/201/creating/400' has methods for the following verbs: put */
  (path: "/lro/nonretryerror/put/201/creating/400"): PutNonRetry201Creating400;
  /** Resource for '/lro/nonretryerror/put/201/creating/400/invalidjson' has methods for the following verbs: put */
  (
    path: "/lro/nonretryerror/put/201/creating/400/invalidjson"
  ): PutNonRetry201Creating400InvalidJson;
  /** Resource for '/lro/nonretryerror/putasync/retry/400' has methods for the following verbs: put */
  (path: "/lro/nonretryerror/putasync/retry/400"): PutAsyncRelativeRetry400;
  /** Resource for '/lro/nonretryerror/delete/400' has methods for the following verbs: delete */
  (path: "/lro/nonretryerror/delete/400"): DeleteNonRetry400;
  /** Resource for '/lro/nonretryerror/delete/202/retry/400' has methods for the following verbs: delete */
  (path: "/lro/nonretryerror/delete/202/retry/400"): Delete202NonRetry400;
  /** Resource for '/lro/nonretryerror/deleteasync/retry/400' has methods for the following verbs: delete */
  (
    path: "/lro/nonretryerror/deleteasync/retry/400"
  ): DeleteAsyncRelativeRetry400;
  /** Resource for '/lro/nonretryerror/post/400' has methods for the following verbs: post */
  (path: "/lro/nonretryerror/post/400"): PostNonRetry400;
  /** Resource for '/lro/nonretryerror/post/202/retry/400' has methods for the following verbs: post */
  (path: "/lro/nonretryerror/post/202/retry/400"): Post202NonRetry400;
  /** Resource for '/lro/nonretryerror/postasync/retry/400' has methods for the following verbs: post */
  (path: "/lro/nonretryerror/postasync/retry/400"): PostAsyncRelativeRetry400;
  /** Resource for '/lro/error/put/201/noprovisioningstatepayload' has methods for the following verbs: put */
  (
    path: "/lro/error/put/201/noprovisioningstatepayload"
  ): PutError201NoProvisioningStatePayload;
  /** Resource for '/lro/error/putasync/retry/nostatus' has methods for the following verbs: put */
  (path: "/lro/error/putasync/retry/nostatus"): PutAsyncRelativeRetryNoStatus;
  /** Resource for '/lro/error/putasync/retry/nostatuspayload' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/nostatuspayload"
  ): PutAsyncRelativeRetryNoStatusPayload;
  /** Resource for '/lro/error/delete/204/nolocation' has methods for the following verbs: delete */
  (path: "/lro/error/delete/204/nolocation"): Delete204Succeeded;
  /** Resource for '/lro/error/deleteasync/retry/nostatus' has methods for the following verbs: delete */
  (
    path: "/lro/error/deleteasync/retry/nostatus"
  ): DeleteAsyncRelativeRetryNoStatus;
  /** Resource for '/lro/error/post/202/nolocation' has methods for the following verbs: post */
  (path: "/lro/error/post/202/nolocation"): Post202NoLocation;
  /** Resource for '/lro/error/postasync/retry/nopayload' has methods for the following verbs: post */
  (
    path: "/lro/error/postasync/retry/nopayload"
  ): PostAsyncRelativeRetryNoPayload;
  /** Resource for '/lro/error/put/200/invalidjson' has methods for the following verbs: put */
  (path: "/lro/error/put/200/invalidjson"): Put200InvalidJson;
  /** Resource for '/lro/error/putasync/retry/invalidheader' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/invalidheader"
  ): PutAsyncRelativeRetryInvalidHeader;
  /** Resource for '/lro/error/putasync/retry/invalidjsonpolling' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/invalidjsonpolling"
  ): PutAsyncRelativeRetryInvalidJsonPolling;
  /** Resource for '/lro/error/delete/202/retry/invalidheader' has methods for the following verbs: delete */
  (
    path: "/lro/error/delete/202/retry/invalidheader"
  ): Delete202RetryInvalidHeader;
  /** Resource for '/lro/error/deleteasync/retry/invalidheader' has methods for the following verbs: delete */
  (
    path: "/lro/error/deleteasync/retry/invalidheader"
  ): DeleteAsyncRelativeRetryInvalidHeader;
  /** Resource for '/lro/error/deleteasync/retry/invalidjsonpolling' has methods for the following verbs: delete */
  (
    path: "/lro/error/deleteasync/retry/invalidjsonpolling"
  ): DeleteAsyncRelativeRetryInvalidJsonPolling;
  /** Resource for '/lro/error/post/202/retry/invalidheader' has methods for the following verbs: post */
  (path: "/lro/error/post/202/retry/invalidheader"): Post202RetryInvalidHeader;
  /** Resource for '/lro/error/postasync/retry/invalidheader' has methods for the following verbs: post */
  (
    path: "/lro/error/postasync/retry/invalidheader"
  ): PostAsyncRelativeRetryInvalidHeader;
  /** Resource for '/lro/error/postasync/retry/invalidjsonpolling' has methods for the following verbs: post */
  (
    path: "/lro/error/postasync/retry/invalidjsonpolling"
  ): PostAsyncRelativeRetryInvalidJsonPolling;
  /** Resource for '/lro/customheader/putasync/retry/succeeded' has methods for the following verbs: put */
  (path: "/lro/customheader/putasync/retry/succeeded"): PutAsyncRetrySucceeded;
  /** Resource for '/lro/customheader/put/201/creating/succeeded/200' has methods for the following verbs: put */
  (
    path: "/lro/customheader/put/201/creating/succeeded/200"
  ): Put201CreatingSucceeded200;
  /** Resource for '/lro/customheader/post/202/retry/200' has methods for the following verbs: post */
  (path: "/lro/customheader/post/202/retry/200"): Post202Retry200;
  /** Resource for '/lro/customheader/postasync/retry/succeeded' has methods for the following verbs: post */
  (
    path: "/lro/customheader/postasync/retry/succeeded"
  ): PostAsyncRetrySucceeded;
}

export type LRORestClient = Client & {
  path: Routes;
};
