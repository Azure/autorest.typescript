// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  LROsput200SucceededParameters,
  LROspatch200SucceededIgnoreHeadersParameters,
  LROsput201SucceededParameters,
  LROspost202ListParameters,
  LROsput200SucceededNoStateParameters,
  LROsput202Retry200Parameters,
  LROsput201CreatingSucceeded200Parameters,
  LROsput200UpdatingSucceeded204Parameters,
  LROsput201CreatingFailed200Parameters,
  LROsput200Acceptedcanceled200Parameters,
  LROsputNoHeaderInRetryParameters,
  LROsputAsyncRetrySucceededParameters,
  LROsputAsyncNoRetrySucceededParameters,
  LROsputAsyncRetryFailedParameters,
  LROsputAsyncNoRetrycanceledParameters,
  LROsputAsyncNoHeaderInRetryParameters,
  LROsputNonResourceParameters,
  LROsputAsyncNonResourceParameters,
  LROsputSubResourceParameters,
  LROsputAsyncSubResourceParameters,
  LROsdeleteProvisioning202Accepted200SucceededParameters,
  LROsdeleteProvisioning202DeletingFailed200Parameters,
  LROsdeleteProvisioning202Deletingcanceled200Parameters,
  LROsdelete204SucceededParameters,
  LROsdelete202Retry200Parameters,
  LROsdelete202NoRetry204Parameters,
  LROsdeleteNoHeaderInRetryParameters,
  LROsdeleteAsyncNoHeaderInRetryParameters,
  LROsdeleteAsyncRetrySucceededParameters,
  LROsdeleteAsyncNoRetrySucceededParameters,
  LROsdeleteAsyncRetryFailedParameters,
  LROsdeleteAsyncRetrycanceledParameters,
  LROspost200WithPayloadParameters,
  LROspost202Retry200Parameters,
  LROspost202NoRetry204Parameters,
  LROspostDoubleHeadersFinalLocationGetParameters,
  LROspostDoubleHeadersFinalAzureHeaderGetParameters,
  LROspostDoubleHeadersFinalAzureHeaderGetDefaultParameters,
  LROspostAsyncRetrySucceededParameters,
  LROspostAsyncNoRetrySucceededParameters,
  LROspostAsyncRetryFailedParameters,
  LROspostAsyncRetrycanceledParameters,
  LRORetrysput201CreatingSucceeded200Parameters,
  LRORetrysputAsyncRelativeRetrySucceededParameters,
  LRORetrysdeleteProvisioning202Accepted200SucceededParameters,
  LRORetrysdelete202Retry200Parameters,
  LRORetrysdeleteAsyncRelativeRetrySucceededParameters,
  LRORetryspost202Retry200Parameters,
  LRORetryspostAsyncRelativeRetrySucceededParameters,
  LrosaDsputNonRetry400Parameters,
  LrosaDsputNonRetry201Creating400Parameters,
  LrosaDsputNonRetry201Creating400InvalidJsonParameters,
  LrosaDsputAsyncRelativeRetry400Parameters,
  LrosaDsdeleteNonRetry400Parameters,
  LrosaDsdelete202NonRetry400Parameters,
  LrosaDsdeleteAsyncRelativeRetry400Parameters,
  LrosaDspostNonRetry400Parameters,
  LrosaDspost202NonRetry400Parameters,
  LrosaDspostAsyncRelativeRetry400Parameters,
  LrosaDsputError201NoProvisioningStatePayloadParameters,
  LrosaDsputAsyncRelativeRetryNoStatusParameters,
  LrosaDsputAsyncRelativeRetryNoStatusPayloadParameters,
  LrosaDsdelete204SucceededParameters,
  LrosaDsdeleteAsyncRelativeRetryNoStatusParameters,
  LrosaDspost202NoLocationParameters,
  LrosaDspostAsyncRelativeRetryNoPayloadParameters,
  LrosaDsput200InvalidJsonParameters,
  LrosaDsputAsyncRelativeRetryInvalidHeaderParameters,
  LrosaDsputAsyncRelativeRetryInvalidJsonPollingParameters,
  LrosaDsdelete202RetryInvalidHeaderParameters,
  LrosaDsdeleteAsyncRelativeRetryInvalidHeaderParameters,
  LrosaDsdeleteAsyncRelativeRetryInvalidJsonPollingParameters,
  LrosaDspost202RetryInvalidHeaderParameters,
  LrosaDspostAsyncRelativeRetryInvalidHeaderParameters,
  LrosaDspostAsyncRelativeRetryInvalidJsonPollingParameters,
  LROsCustomHeaderputAsyncRetrySucceededParameters,
  LROsCustomHeaderput201CreatingSucceeded200Parameters,
  LROsCustomHeaderpost202Retry200Parameters,
  LROsCustomHeaderpostAsyncRetrySucceededParameters
} from "./parameters";
import {
  LROsput200Succeeded200Response,
  LROsput200Succeeded204Response,
  LROsput200SucceededdefaultResponse,
  LROspatch200SucceededIgnoreHeaders200Response,
  LROspatch200SucceededIgnoreHeadersdefaultResponse,
  LROsput201Succeeded201Response,
  LROsput201SucceededdefaultResponse,
  LROspost202List200Response,
  LROspost202List202Response,
  LROspost202ListdefaultResponse,
  LROsput200SucceededNoState200Response,
  LROsput200SucceededNoStatedefaultResponse,
  LROsput202Retry200202Response,
  LROsput202Retry200defaultResponse,
  LROsput201CreatingSucceeded200200Response,
  LROsput201CreatingSucceeded200201Response,
  LROsput201CreatingSucceeded200defaultResponse,
  LROsput200UpdatingSucceeded204200Response,
  LROsput200UpdatingSucceeded204defaultResponse,
  LROsput201CreatingFailed200200Response,
  LROsput201CreatingFailed200201Response,
  LROsput201CreatingFailed200defaultResponse,
  LROsput200Acceptedcanceled200200Response,
  LROsput200Acceptedcanceled200defaultResponse,
  LROsputNoHeaderInRetry202Response,
  LROsputNoHeaderInRetrydefaultResponse,
  LROsputAsyncRetrySucceeded200Response,
  LROsputAsyncRetrySucceededdefaultResponse,
  LROsputAsyncNoRetrySucceeded200Response,
  LROsputAsyncNoRetrySucceededdefaultResponse,
  LROsputAsyncRetryFailed200Response,
  LROsputAsyncRetryFaileddefaultResponse,
  LROsputAsyncNoRetrycanceled200Response,
  LROsputAsyncNoRetrycanceleddefaultResponse,
  LROsputAsyncNoHeaderInRetry201Response,
  LROsputAsyncNoHeaderInRetrydefaultResponse,
  LROsputNonResource202Response,
  LROsputNonResourcedefaultResponse,
  LROsputAsyncNonResource202Response,
  LROsputAsyncNonResourcedefaultResponse,
  LROsputSubResource202Response,
  LROsputSubResourcedefaultResponse,
  LROsputAsyncSubResource202Response,
  LROsputAsyncSubResourcedefaultResponse,
  LROsdeleteProvisioning202Accepted200Succeeded200Response,
  LROsdeleteProvisioning202Accepted200Succeeded202Response,
  LROsdeleteProvisioning202Accepted200SucceededdefaultResponse,
  LROsdeleteProvisioning202DeletingFailed200200Response,
  LROsdeleteProvisioning202DeletingFailed200202Response,
  LROsdeleteProvisioning202DeletingFailed200defaultResponse,
  LROsdeleteProvisioning202Deletingcanceled200200Response,
  LROsdeleteProvisioning202Deletingcanceled200202Response,
  LROsdeleteProvisioning202Deletingcanceled200defaultResponse,
  LROsdelete204Succeeded204Response,
  LROsdelete204SucceededdefaultResponse,
  LROsdelete202Retry200200Response,
  LROsdelete202Retry200202Response,
  LROsdelete202Retry200defaultResponse,
  LROsdelete202NoRetry204200Response,
  LROsdelete202NoRetry204202Response,
  LROsdelete202NoRetry204defaultResponse,
  LROsdeleteNoHeaderInRetry202Response,
  LROsdeleteNoHeaderInRetry204Response,
  LROsdeleteNoHeaderInRetrydefaultResponse,
  LROsdeleteAsyncNoHeaderInRetry202Response,
  LROsdeleteAsyncNoHeaderInRetry204Response,
  LROsdeleteAsyncNoHeaderInRetrydefaultResponse,
  LROsdeleteAsyncRetrySucceeded202Response,
  LROsdeleteAsyncRetrySucceededdefaultResponse,
  LROsdeleteAsyncNoRetrySucceeded202Response,
  LROsdeleteAsyncNoRetrySucceededdefaultResponse,
  LROsdeleteAsyncRetryFailed202Response,
  LROsdeleteAsyncRetryFaileddefaultResponse,
  LROsdeleteAsyncRetrycanceled202Response,
  LROsdeleteAsyncRetrycanceleddefaultResponse,
  LROspost200WithPayload200Response,
  LROspost200WithPayload202Response,
  LROspost200WithPayloaddefaultResponse,
  LROspost202Retry200202Response,
  LROspost202Retry200defaultResponse,
  LROspost202NoRetry204202Response,
  LROspost202NoRetry204defaultResponse,
  LROspostDoubleHeadersFinalLocationGet202Response,
  LROspostDoubleHeadersFinalLocationGetdefaultResponse,
  LROspostDoubleHeadersFinalAzureHeaderGet202Response,
  LROspostDoubleHeadersFinalAzureHeaderGetdefaultResponse,
  LROspostDoubleHeadersFinalAzureHeaderGetDefault202Response,
  LROspostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse,
  LROspostAsyncRetrySucceeded200Response,
  LROspostAsyncRetrySucceeded202Response,
  LROspostAsyncRetrySucceededdefaultResponse,
  LROspostAsyncNoRetrySucceeded200Response,
  LROspostAsyncNoRetrySucceeded202Response,
  LROspostAsyncNoRetrySucceededdefaultResponse,
  LROspostAsyncRetryFailed202Response,
  LROspostAsyncRetryFaileddefaultResponse,
  LROspostAsyncRetrycanceled202Response,
  LROspostAsyncRetrycanceleddefaultResponse,
  LRORetrysput201CreatingSucceeded200200Response,
  LRORetrysput201CreatingSucceeded200201Response,
  LRORetrysput201CreatingSucceeded200defaultResponse,
  LRORetrysputAsyncRelativeRetrySucceeded200Response,
  LRORetrysputAsyncRelativeRetrySucceededdefaultResponse,
  LRORetrysdeleteProvisioning202Accepted200Succeeded200Response,
  LRORetrysdeleteProvisioning202Accepted200Succeeded202Response,
  LRORetrysdeleteProvisioning202Accepted200SucceededdefaultResponse,
  LRORetrysdelete202Retry200202Response,
  LRORetrysdelete202Retry200defaultResponse,
  LRORetrysdeleteAsyncRelativeRetrySucceeded202Response,
  LRORetrysdeleteAsyncRelativeRetrySucceededdefaultResponse,
  LRORetryspost202Retry200202Response,
  LRORetryspost202Retry200defaultResponse,
  LRORetryspostAsyncRelativeRetrySucceeded202Response,
  LRORetryspostAsyncRelativeRetrySucceededdefaultResponse,
  LrosaDsputNonRetry400200Response,
  LrosaDsputNonRetry400201Response,
  LrosaDsputNonRetry400defaultResponse,
  LrosaDsputNonRetry201Creating400200Response,
  LrosaDsputNonRetry201Creating400201Response,
  LrosaDsputNonRetry201Creating400defaultResponse,
  LrosaDsputNonRetry201Creating400InvalidJson200Response,
  LrosaDsputNonRetry201Creating400InvalidJson201Response,
  LrosaDsputNonRetry201Creating400InvalidJsondefaultResponse,
  LrosaDsputAsyncRelativeRetry400200Response,
  LrosaDsputAsyncRelativeRetry400defaultResponse,
  LrosaDsdeleteNonRetry400202Response,
  LrosaDsdeleteNonRetry400defaultResponse,
  LrosaDsdelete202NonRetry400202Response,
  LrosaDsdelete202NonRetry400defaultResponse,
  LrosaDsdeleteAsyncRelativeRetry400202Response,
  LrosaDsdeleteAsyncRelativeRetry400defaultResponse,
  LrosaDspostNonRetry400202Response,
  LrosaDspostNonRetry400defaultResponse,
  LrosaDspost202NonRetry400202Response,
  LrosaDspost202NonRetry400defaultResponse,
  LrosaDspostAsyncRelativeRetry400202Response,
  LrosaDspostAsyncRelativeRetry400defaultResponse,
  LrosaDsputError201NoProvisioningStatePayload200Response,
  LrosaDsputError201NoProvisioningStatePayload201Response,
  LrosaDsputError201NoProvisioningStatePayloaddefaultResponse,
  LrosaDsputAsyncRelativeRetryNoStatus200Response,
  LrosaDsputAsyncRelativeRetryNoStatusdefaultResponse,
  LrosaDsputAsyncRelativeRetryNoStatusPayload200Response,
  LrosaDsputAsyncRelativeRetryNoStatusPayloaddefaultResponse,
  LrosaDsdelete204Succeeded204Response,
  LrosaDsdelete204SucceededdefaultResponse,
  LrosaDsdeleteAsyncRelativeRetryNoStatus202Response,
  LrosaDsdeleteAsyncRelativeRetryNoStatusdefaultResponse,
  LrosaDspost202NoLocation202Response,
  LrosaDspost202NoLocationdefaultResponse,
  LrosaDspostAsyncRelativeRetryNoPayload202Response,
  LrosaDspostAsyncRelativeRetryNoPayloaddefaultResponse,
  LrosaDsput200InvalidJson200Response,
  LrosaDsput200InvalidJson204Response,
  LrosaDsput200InvalidJsondefaultResponse,
  LrosaDsputAsyncRelativeRetryInvalidHeader200Response,
  LrosaDsputAsyncRelativeRetryInvalidHeaderdefaultResponse,
  LrosaDsputAsyncRelativeRetryInvalidJsonPolling200Response,
  LrosaDsputAsyncRelativeRetryInvalidJsonPollingdefaultResponse,
  LrosaDsdelete202RetryInvalidHeader202Response,
  LrosaDsdelete202RetryInvalidHeaderdefaultResponse,
  LrosaDsdeleteAsyncRelativeRetryInvalidHeader202Response,
  LrosaDsdeleteAsyncRelativeRetryInvalidHeaderdefaultResponse,
  LrosaDsdeleteAsyncRelativeRetryInvalidJsonPolling202Response,
  LrosaDsdeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse,
  LrosaDspost202RetryInvalidHeader202Response,
  LrosaDspost202RetryInvalidHeaderdefaultResponse,
  LrosaDspostAsyncRelativeRetryInvalidHeader202Response,
  LrosaDspostAsyncRelativeRetryInvalidHeaderdefaultResponse,
  LrosaDspostAsyncRelativeRetryInvalidJsonPolling202Response,
  LrosaDspostAsyncRelativeRetryInvalidJsonPollingdefaultResponse,
  LROsCustomHeaderputAsyncRetrySucceeded200Response,
  LROsCustomHeaderputAsyncRetrySucceededdefaultResponse,
  LROsCustomHeaderput201CreatingSucceeded200200Response,
  LROsCustomHeaderput201CreatingSucceeded200201Response,
  LROsCustomHeaderput201CreatingSucceeded200defaultResponse,
  LROsCustomHeaderpost202Retry200202Response,
  LROsCustomHeaderpost202Retry200defaultResponse,
  LROsCustomHeaderpostAsyncRetrySucceeded202Response,
  LROsCustomHeaderpostAsyncRetrySucceededdefaultResponse
} from "./responses";
import { getClient, ClientOptions, Client } from "@azure-rest/core-client";
import "@azure/core-auth";

export interface LROsput200Succeeded {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
  put(
    options?: LROsput200SucceededParameters
  ): Promise<
    | LROsput200Succeeded200Response
    | LROsput200Succeeded204Response
    | LROsput200SucceededdefaultResponse
  >;
}

export interface LROspatch200SucceededIgnoreHeaders {
  /** Long running put request, service returns a 200 to the initial request with location header. We should not have any subsequent calls after receiving this first response. */
  patch(
    options?: LROspatch200SucceededIgnoreHeadersParameters
  ): Promise<
    | LROspatch200SucceededIgnoreHeaders200Response
    | LROspatch200SucceededIgnoreHeadersdefaultResponse
  >;
}

export interface LROsput201Succeeded {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Succeeded’. */
  put(
    options?: LROsput201SucceededParameters
  ): Promise<
    LROsput201Succeeded201Response | LROsput201SucceededdefaultResponse
  >;
}

export interface LROspost202List {
  /** Long running put request, service returns a 202 with empty body to first request, returns a 200 with body [{ 'id': '100', 'name': 'foo' }]. */
  post(
    options?: LROspost202ListParameters
  ): Promise<
    | LROspost202List200Response
    | LROspost202List202Response
    | LROspost202ListdefaultResponse
  >;
}

export interface LROsput200SucceededNoState {
  /** Long running put request, service returns a 200 to the initial request, with an entity that does not contain ProvisioningState=’Succeeded’. */
  put(
    options?: LROsput200SucceededNoStateParameters
  ): Promise<
    | LROsput200SucceededNoState200Response
    | LROsput200SucceededNoStatedefaultResponse
  >;
}

export interface LROsput202Retry200 {
  /** Long running put request, service returns a 202 to the initial request, with a location header that points to a polling URL that returns a 200 and an entity that doesn't contains ProvisioningState */
  put(
    options?: LROsput202Retry200Parameters
  ): Promise<LROsput202Retry200202Response | LROsput202Retry200defaultResponse>;
}

export interface LROsput201CreatingSucceeded200 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LROsput201CreatingSucceeded200Parameters
  ): Promise<
    | LROsput201CreatingSucceeded200200Response
    | LROsput201CreatingSucceeded200201Response
    | LROsput201CreatingSucceeded200defaultResponse
  >;
}

export interface LROsput200UpdatingSucceeded204 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Updating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LROsput200UpdatingSucceeded204Parameters
  ): Promise<
    | LROsput200UpdatingSucceeded204200Response
    | LROsput200UpdatingSucceeded204defaultResponse
  >;
}

export interface LROsput201CreatingFailed200 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Created’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
  put(
    options?: LROsput201CreatingFailed200Parameters
  ): Promise<
    | LROsput201CreatingFailed200200Response
    | LROsput201CreatingFailed200201Response
    | LROsput201CreatingFailed200defaultResponse
  >;
}

export interface LROsput200Acceptedcanceled200 {
  /** Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
  put(
    options?: LROsput200Acceptedcanceled200Parameters
  ): Promise<
    | LROsput200Acceptedcanceled200200Response
    | LROsput200Acceptedcanceled200defaultResponse
  >;
}

export interface LROsputNoHeaderInRetry {
  /** Long running put request, service returns a 202 to the initial request with location header. Subsequent calls to operation status do not contain location header. */
  put(
    options?: LROsputNoHeaderInRetryParameters
  ): Promise<
    LROsputNoHeaderInRetry202Response | LROsputNoHeaderInRetrydefaultResponse
  >;
}

export interface LROsputAsyncRetrySucceeded {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsputAsyncRetrySucceededParameters
  ): Promise<
    | LROsputAsyncRetrySucceeded200Response
    | LROsputAsyncRetrySucceededdefaultResponse
  >;
}

export interface LROsputAsyncNoRetrySucceeded {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsputAsyncNoRetrySucceededParameters
  ): Promise<
    | LROsputAsyncNoRetrySucceeded200Response
    | LROsputAsyncNoRetrySucceededdefaultResponse
  >;
}

export interface LROsputAsyncRetryFailed {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsputAsyncRetryFailedParameters
  ): Promise<
    LROsputAsyncRetryFailed200Response | LROsputAsyncRetryFaileddefaultResponse
  >;
}

export interface LROsputAsyncNoRetrycanceled {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsputAsyncNoRetrycanceledParameters
  ): Promise<
    | LROsputAsyncNoRetrycanceled200Response
    | LROsputAsyncNoRetrycanceleddefaultResponse
  >;
}

export interface LROsputAsyncNoHeaderInRetry {
  /** Long running put request, service returns a 202 to the initial request with Azure-AsyncOperation header. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
  put(
    options?: LROsputAsyncNoHeaderInRetryParameters
  ): Promise<
    | LROsputAsyncNoHeaderInRetry201Response
    | LROsputAsyncNoHeaderInRetrydefaultResponse
  >;
}

export interface LROsputNonResource {
  /** Long running put request with non resource. */
  put(
    options?: LROsputNonResourceParameters
  ): Promise<LROsputNonResource202Response | LROsputNonResourcedefaultResponse>;
}

export interface LROsputAsyncNonResource {
  /** Long running put request with non resource. */
  put(
    options?: LROsputAsyncNonResourceParameters
  ): Promise<
    LROsputAsyncNonResource202Response | LROsputAsyncNonResourcedefaultResponse
  >;
}

export interface LROsputSubResource {
  /** Long running put request with sub resource. */
  put(
    options?: LROsputSubResourceParameters
  ): Promise<LROsputSubResource202Response | LROsputSubResourcedefaultResponse>;
}

export interface LROsputAsyncSubResource {
  /** Long running put request with sub resource. */
  put(
    options?: LROsputAsyncSubResourceParameters
  ): Promise<
    LROsputAsyncSubResource202Response | LROsputAsyncSubResourcedefaultResponse
  >;
}

export interface LROsdeleteProvisioning202Accepted200Succeeded {
  /** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LROsdeleteProvisioning202Accepted200SucceededParameters
  ): Promise<
    | LROsdeleteProvisioning202Accepted200Succeeded200Response
    | LROsdeleteProvisioning202Accepted200Succeeded202Response
    | LROsdeleteProvisioning202Accepted200SucceededdefaultResponse
  >;
}

export interface LROsdeleteProvisioning202DeletingFailed200 {
  /** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Failed’ */
  delete(
    options?: LROsdeleteProvisioning202DeletingFailed200Parameters
  ): Promise<
    | LROsdeleteProvisioning202DeletingFailed200200Response
    | LROsdeleteProvisioning202DeletingFailed200202Response
    | LROsdeleteProvisioning202DeletingFailed200defaultResponse
  >;
}

export interface LROsdeleteProvisioning202Deletingcanceled200 {
  /** Long running delete request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Canceled’ */
  delete(
    options?: LROsdeleteProvisioning202Deletingcanceled200Parameters
  ): Promise<
    | LROsdeleteProvisioning202Deletingcanceled200200Response
    | LROsdeleteProvisioning202Deletingcanceled200202Response
    | LROsdeleteProvisioning202Deletingcanceled200defaultResponse
  >;
}

export interface LROsdelete204Succeeded {
  /** Long running delete succeeds and returns right away */
  delete(
    options?: LROsdelete204SucceededParameters
  ): Promise<
    LROsdelete204Succeeded204Response | LROsdelete204SucceededdefaultResponse
  >;
}

export interface LROsdelete202Retry200 {
  /** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LROsdelete202Retry200Parameters
  ): Promise<
    | LROsdelete202Retry200200Response
    | LROsdelete202Retry200202Response
    | LROsdelete202Retry200defaultResponse
  >;
}

export interface LROsdelete202NoRetry204 {
  /** Long running delete request, service returns a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LROsdelete202NoRetry204Parameters
  ): Promise<
    | LROsdelete202NoRetry204200Response
    | LROsdelete202NoRetry204202Response
    | LROsdelete202NoRetry204defaultResponse
  >;
}

export interface LROsdeleteNoHeaderInRetry {
  /** Long running delete request, service returns a location header in the initial request. Subsequent calls to operation status do not contain location header. */
  delete(
    options?: LROsdeleteNoHeaderInRetryParameters
  ): Promise<
    | LROsdeleteNoHeaderInRetry202Response
    | LROsdeleteNoHeaderInRetry204Response
    | LROsdeleteNoHeaderInRetrydefaultResponse
  >;
}

export interface LROsdeleteAsyncNoHeaderInRetry {
  /** Long running delete request, service returns an Azure-AsyncOperation header in the initial request. Subsequent calls to operation status do not contain Azure-AsyncOperation header. */
  delete(
    options?: LROsdeleteAsyncNoHeaderInRetryParameters
  ): Promise<
    | LROsdeleteAsyncNoHeaderInRetry202Response
    | LROsdeleteAsyncNoHeaderInRetry204Response
    | LROsdeleteAsyncNoHeaderInRetrydefaultResponse
  >;
}

export interface LROsdeleteAsyncRetrySucceeded {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsdeleteAsyncRetrySucceededParameters
  ): Promise<
    | LROsdeleteAsyncRetrySucceeded202Response
    | LROsdeleteAsyncRetrySucceededdefaultResponse
  >;
}

export interface LROsdeleteAsyncNoRetrySucceeded {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsdeleteAsyncNoRetrySucceededParameters
  ): Promise<
    | LROsdeleteAsyncNoRetrySucceeded202Response
    | LROsdeleteAsyncNoRetrySucceededdefaultResponse
  >;
}

export interface LROsdeleteAsyncRetryFailed {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsdeleteAsyncRetryFailedParameters
  ): Promise<
    | LROsdeleteAsyncRetryFailed202Response
    | LROsdeleteAsyncRetryFaileddefaultResponse
  >;
}

export interface LROsdeleteAsyncRetrycanceled {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LROsdeleteAsyncRetrycanceledParameters
  ): Promise<
    | LROsdeleteAsyncRetrycanceled202Response
    | LROsdeleteAsyncRetrycanceleddefaultResponse
  >;
}

export interface LROspost200WithPayload {
  /** Long running post request, service returns a 202 to the initial request, with 'Location' header. Poll returns a 200 with a response body after success. */
  post(
    options?: LROspost200WithPayloadParameters
  ): Promise<
    | LROspost200WithPayload200Response
    | LROspost200WithPayload202Response
    | LROspost200WithPayloaddefaultResponse
  >;
}

export interface LROspost202Retry200 {
  /** Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
  post(
    options?: LROspost202Retry200Parameters
  ): Promise<
    LROspost202Retry200202Response | LROspost202Retry200defaultResponse
  >;
}

export interface LROspost202NoRetry204 {
  /** Long running post request, service returns a 202 to the initial request, with 'Location' header, 204 with noresponse body after success */
  post(
    options?: LROspost202NoRetry204Parameters
  ): Promise<
    LROspost202NoRetry204202Response | LROspost202NoRetry204defaultResponse
  >;
}

export interface LROspostDoubleHeadersFinalLocationGet {
  /** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should poll Location to get the final object */
  post(
    options?: LROspostDoubleHeadersFinalLocationGetParameters
  ): Promise<
    | LROspostDoubleHeadersFinalLocationGet202Response
    | LROspostDoubleHeadersFinalLocationGetdefaultResponse
  >;
}

export interface LROspostDoubleHeadersFinalAzureHeaderGet {
  /** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object */
  post(
    options?: LROspostDoubleHeadersFinalAzureHeaderGetParameters
  ): Promise<
    | LROspostDoubleHeadersFinalAzureHeaderGet202Response
    | LROspostDoubleHeadersFinalAzureHeaderGetdefaultResponse
  >;
}

export interface LROspostDoubleHeadersFinalAzureHeaderGetDefault {
  /** Long running post request, service returns a 202 to the initial request with both Location and Azure-Async header. Poll Azure-Async and it's success. Should NOT poll Location to get the final object if you support initial Autorest behavior. */
  post(
    options?: LROspostDoubleHeadersFinalAzureHeaderGetDefaultParameters
  ): Promise<
    | LROspostDoubleHeadersFinalAzureHeaderGetDefault202Response
    | LROspostDoubleHeadersFinalAzureHeaderGetDefaultdefaultResponse
  >;
}

export interface LROspostAsyncRetrySucceeded {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROspostAsyncRetrySucceededParameters
  ): Promise<
    | LROspostAsyncRetrySucceeded200Response
    | LROspostAsyncRetrySucceeded202Response
    | LROspostAsyncRetrySucceededdefaultResponse
  >;
}

export interface LROspostAsyncNoRetrySucceeded {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROspostAsyncNoRetrySucceededParameters
  ): Promise<
    | LROspostAsyncNoRetrySucceeded200Response
    | LROspostAsyncNoRetrySucceeded202Response
    | LROspostAsyncNoRetrySucceededdefaultResponse
  >;
}

export interface LROspostAsyncRetryFailed {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROspostAsyncRetryFailedParameters
  ): Promise<
    | LROspostAsyncRetryFailed202Response
    | LROspostAsyncRetryFaileddefaultResponse
  >;
}

export interface LROspostAsyncRetrycanceled {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROspostAsyncRetrycanceledParameters
  ): Promise<
    | LROspostAsyncRetrycanceled202Response
    | LROspostAsyncRetrycanceleddefaultResponse
  >;
}

export interface LRORetrysput201CreatingSucceeded200 {
  /** Long running put request, service returns a 500, then a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LRORetrysput201CreatingSucceeded200Parameters
  ): Promise<
    | LRORetrysput201CreatingSucceeded200200Response
    | LRORetrysput201CreatingSucceeded200201Response
    | LRORetrysput201CreatingSucceeded200defaultResponse
  >;
}

export interface LRORetrysputAsyncRelativeRetrySucceeded {
  /** Long running put request, service returns a 500, then a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LRORetrysputAsyncRelativeRetrySucceededParameters
  ): Promise<
    | LRORetrysputAsyncRelativeRetrySucceeded200Response
    | LRORetrysputAsyncRelativeRetrySucceededdefaultResponse
  >;
}

export interface LRORetrysdeleteProvisioning202Accepted200Succeeded {
  /** Long running delete request, service returns a 500, then a  202 to the initial request, with an entity that contains ProvisioningState=’Accepted’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LRORetrysdeleteProvisioning202Accepted200SucceededParameters
  ): Promise<
    | LRORetrysdeleteProvisioning202Accepted200Succeeded200Response
    | LRORetrysdeleteProvisioning202Accepted200Succeeded202Response
    | LRORetrysdeleteProvisioning202Accepted200SucceededdefaultResponse
  >;
}

export interface LRORetrysdelete202Retry200 {
  /** Long running delete request, service returns a 500, then a 202 to the initial request. Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  delete(
    options?: LRORetrysdelete202Retry200Parameters
  ): Promise<
    | LRORetrysdelete202Retry200202Response
    | LRORetrysdelete202Retry200defaultResponse
  >;
}

export interface LRORetrysdeleteAsyncRelativeRetrySucceeded {
  /** Long running delete request, service returns a 500, then a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LRORetrysdeleteAsyncRelativeRetrySucceededParameters
  ): Promise<
    | LRORetrysdeleteAsyncRelativeRetrySucceeded202Response
    | LRORetrysdeleteAsyncRelativeRetrySucceededdefaultResponse
  >;
}

export interface LRORetryspost202Retry200 {
  /** Long running post request, service returns a 500, then a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
  post(
    options?: LRORetryspost202Retry200Parameters
  ): Promise<
    | LRORetryspost202Retry200202Response
    | LRORetryspost202Retry200defaultResponse
  >;
}

export interface LRORetryspostAsyncRelativeRetrySucceeded {
  /** Long running post request, service returns a 500, then a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LRORetryspostAsyncRelativeRetrySucceededParameters
  ): Promise<
    | LRORetryspostAsyncRelativeRetrySucceeded202Response
    | LRORetryspostAsyncRelativeRetrySucceededdefaultResponse
  >;
}

export interface LrosaDsputNonRetry400 {
  /** Long running put request, service returns a 400 to the initial request */
  put(
    options?: LrosaDsputNonRetry400Parameters
  ): Promise<
    | LrosaDsputNonRetry400200Response
    | LrosaDsputNonRetry400201Response
    | LrosaDsputNonRetry400defaultResponse
  >;
}

export interface LrosaDsputNonRetry201Creating400 {
  /** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
  put(
    options?: LrosaDsputNonRetry201Creating400Parameters
  ): Promise<
    | LrosaDsputNonRetry201Creating400200Response
    | LrosaDsputNonRetry201Creating400201Response
    | LrosaDsputNonRetry201Creating400defaultResponse
  >;
}

export interface LrosaDsputNonRetry201Creating400InvalidJson {
  /** Long running put request, service returns a Product with 'ProvisioningState' = 'Creating' and 201 response code */
  put(
    options?: LrosaDsputNonRetry201Creating400InvalidJsonParameters
  ): Promise<
    | LrosaDsputNonRetry201Creating400InvalidJson200Response
    | LrosaDsputNonRetry201Creating400InvalidJson201Response
    | LrosaDsputNonRetry201Creating400InvalidJsondefaultResponse
  >;
}

export interface LrosaDsputAsyncRelativeRetry400 {
  /** Long running put request, service returns a 200 with ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsputAsyncRelativeRetry400Parameters
  ): Promise<
    | LrosaDsputAsyncRelativeRetry400200Response
    | LrosaDsputAsyncRelativeRetry400defaultResponse
  >;
}

export interface LrosaDsdeleteNonRetry400 {
  /** Long running delete request, service returns a 400 with an error body */
  delete(
    options?: LrosaDsdeleteNonRetry400Parameters
  ): Promise<
    | LrosaDsdeleteNonRetry400202Response
    | LrosaDsdeleteNonRetry400defaultResponse
  >;
}

export interface LrosaDsdelete202NonRetry400 {
  /** Long running delete request, service returns a 202 with a location header */
  delete(
    options?: LrosaDsdelete202NonRetry400Parameters
  ): Promise<
    | LrosaDsdelete202NonRetry400202Response
    | LrosaDsdelete202NonRetry400defaultResponse
  >;
}

export interface LrosaDsdeleteAsyncRelativeRetry400 {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LrosaDsdeleteAsyncRelativeRetry400Parameters
  ): Promise<
    | LrosaDsdeleteAsyncRelativeRetry400202Response
    | LrosaDsdeleteAsyncRelativeRetry400defaultResponse
  >;
}

export interface LrosaDspostNonRetry400 {
  /** Long running post request, service returns a 400 with no error body */
  post(
    options?: LrosaDspostNonRetry400Parameters
  ): Promise<
    LrosaDspostNonRetry400202Response | LrosaDspostNonRetry400defaultResponse
  >;
}

export interface LrosaDspost202NonRetry400 {
  /** Long running post request, service returns a 202 with a location header */
  post(
    options?: LrosaDspost202NonRetry400Parameters
  ): Promise<
    | LrosaDspost202NonRetry400202Response
    | LrosaDspost202NonRetry400defaultResponse
  >;
}

export interface LrosaDspostAsyncRelativeRetry400 {
  /** Long running post request, service returns a 202 to the initial request Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LrosaDspostAsyncRelativeRetry400Parameters
  ): Promise<
    | LrosaDspostAsyncRelativeRetry400202Response
    | LrosaDspostAsyncRelativeRetry400defaultResponse
  >;
}

export interface LrosaDsputError201NoProvisioningStatePayload {
  /** Long running put request, service returns a 201 to the initial request with no payload */
  put(
    options?: LrosaDsputError201NoProvisioningStatePayloadParameters
  ): Promise<
    | LrosaDsputError201NoProvisioningStatePayload200Response
    | LrosaDsputError201NoProvisioningStatePayload201Response
    | LrosaDsputError201NoProvisioningStatePayloaddefaultResponse
  >;
}

export interface LrosaDsputAsyncRelativeRetryNoStatus {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsputAsyncRelativeRetryNoStatusParameters
  ): Promise<
    | LrosaDsputAsyncRelativeRetryNoStatus200Response
    | LrosaDsputAsyncRelativeRetryNoStatusdefaultResponse
  >;
}

export interface LrosaDsputAsyncRelativeRetryNoStatusPayload {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsputAsyncRelativeRetryNoStatusPayloadParameters
  ): Promise<
    | LrosaDsputAsyncRelativeRetryNoStatusPayload200Response
    | LrosaDsputAsyncRelativeRetryNoStatusPayloaddefaultResponse
  >;
}

export interface LrosaDsdelete204Succeeded {
  /** Long running delete request, service returns a 204 to the initial request, indicating success. */
  delete(
    options?: LrosaDsdelete204SucceededParameters
  ): Promise<
    | LrosaDsdelete204Succeeded204Response
    | LrosaDsdelete204SucceededdefaultResponse
  >;
}

export interface LrosaDsdeleteAsyncRelativeRetryNoStatus {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LrosaDsdeleteAsyncRelativeRetryNoStatusParameters
  ): Promise<
    | LrosaDsdeleteAsyncRelativeRetryNoStatus202Response
    | LrosaDsdeleteAsyncRelativeRetryNoStatusdefaultResponse
  >;
}

export interface LrosaDspost202NoLocation {
  /** Long running post request, service returns a 202 to the initial request, without a location header. */
  post(
    options?: LrosaDspost202NoLocationParameters
  ): Promise<
    | LrosaDspost202NoLocation202Response
    | LrosaDspost202NoLocationdefaultResponse
  >;
}

export interface LrosaDspostAsyncRelativeRetryNoPayload {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LrosaDspostAsyncRelativeRetryNoPayloadParameters
  ): Promise<
    | LrosaDspostAsyncRelativeRetryNoPayload202Response
    | LrosaDspostAsyncRelativeRetryNoPayloaddefaultResponse
  >;
}

export interface LrosaDsput200InvalidJson {
  /** Long running put request, service returns a 200 to the initial request, with an entity that is not a valid json */
  put(
    options?: LrosaDsput200InvalidJsonParameters
  ): Promise<
    | LrosaDsput200InvalidJson200Response
    | LrosaDsput200InvalidJson204Response
    | LrosaDsput200InvalidJsondefaultResponse
  >;
}

export interface LrosaDsputAsyncRelativeRetryInvalidHeader {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
  put(
    options?: LrosaDsputAsyncRelativeRetryInvalidHeaderParameters
  ): Promise<
    | LrosaDsputAsyncRelativeRetryInvalidHeader200Response
    | LrosaDsputAsyncRelativeRetryInvalidHeaderdefaultResponse
  >;
}

export interface LrosaDsputAsyncRelativeRetryInvalidJsonPolling {
  /** Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LrosaDsputAsyncRelativeRetryInvalidJsonPollingParameters
  ): Promise<
    | LrosaDsputAsyncRelativeRetryInvalidJsonPolling200Response
    | LrosaDsputAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  >;
}

export interface LrosaDsdelete202RetryInvalidHeader {
  /** Long running delete request, service returns a 202 to the initial request receing a reponse with an invalid 'Location' and 'Retry-After' headers */
  delete(
    options?: LrosaDsdelete202RetryInvalidHeaderParameters
  ): Promise<
    | LrosaDsdelete202RetryInvalidHeader202Response
    | LrosaDsdelete202RetryInvalidHeaderdefaultResponse
  >;
}

export interface LrosaDsdeleteAsyncRelativeRetryInvalidHeader {
  /** Long running delete request, service returns a 202 to the initial request. The endpoint indicated in the Azure-AsyncOperation header is invalid */
  delete(
    options?: LrosaDsdeleteAsyncRelativeRetryInvalidHeaderParameters
  ): Promise<
    | LrosaDsdeleteAsyncRelativeRetryInvalidHeader202Response
    | LrosaDsdeleteAsyncRelativeRetryInvalidHeaderdefaultResponse
  >;
}

export interface LrosaDsdeleteAsyncRelativeRetryInvalidJsonPolling {
  /** Long running delete request, service returns a 202 to the initial request. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  delete(
    options?: LrosaDsdeleteAsyncRelativeRetryInvalidJsonPollingParameters
  ): Promise<
    | LrosaDsdeleteAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDsdeleteAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  >;
}

export interface LrosaDspost202RetryInvalidHeader {
  /** Long running post request, service returns a 202 to the initial request, with invalid 'Location' and 'Retry-After' headers. */
  post(
    options?: LrosaDspost202RetryInvalidHeaderParameters
  ): Promise<
    | LrosaDspost202RetryInvalidHeader202Response
    | LrosaDspost202RetryInvalidHeaderdefaultResponse
  >;
}

export interface LrosaDspostAsyncRelativeRetryInvalidHeader {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. The endpoint indicated in the Azure-AsyncOperation header is invalid. */
  post(
    options?: LrosaDspostAsyncRelativeRetryInvalidHeaderParameters
  ): Promise<
    | LrosaDspostAsyncRelativeRetryInvalidHeader202Response
    | LrosaDspostAsyncRelativeRetryInvalidHeaderdefaultResponse
  >;
}

export interface LrosaDspostAsyncRelativeRetryInvalidJsonPolling {
  /** Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LrosaDspostAsyncRelativeRetryInvalidJsonPollingParameters
  ): Promise<
    | LrosaDspostAsyncRelativeRetryInvalidJsonPolling202Response
    | LrosaDspostAsyncRelativeRetryInvalidJsonPollingdefaultResponse
  >;
}

export interface LROsCustomHeaderputAsyncRetrySucceeded {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 200 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  put(
    options?: LROsCustomHeaderputAsyncRetrySucceededParameters
  ): Promise<
    | LROsCustomHeaderputAsyncRetrySucceeded200Response
    | LROsCustomHeaderputAsyncRetrySucceededdefaultResponse
  >;
}

export interface LROsCustomHeaderput201CreatingSucceeded200 {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running put request, service returns a 201 to the initial request, with an entity that contains ProvisioningState=’Creating’.  Polls return this value until the last poll returns a ‘200’ with ProvisioningState=’Succeeded’ */
  put(
    options?: LROsCustomHeaderput201CreatingSucceeded200Parameters
  ): Promise<
    | LROsCustomHeaderput201CreatingSucceeded200200Response
    | LROsCustomHeaderput201CreatingSucceeded200201Response
    | LROsCustomHeaderput201CreatingSucceeded200defaultResponse
  >;
}

export interface LROsCustomHeaderpost202Retry200 {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with 'Location' and 'Retry-After' headers, Polls return a 200 with a response body after success */
  post(
    options?: LROsCustomHeaderpost202Retry200Parameters
  ): Promise<
    | LROsCustomHeaderpost202Retry200202Response
    | LROsCustomHeaderpost202Retry200defaultResponse
  >;
}

export interface LROsCustomHeaderpostAsyncRetrySucceeded {
  /** x-ms-client-request-id = 9C4D50EE-2D56-4CD3-8152-34347DC9F2B0 is required message header for all requests. Long running post request, service returns a 202 to the initial request, with an entity that contains ProvisioningState=’Creating’. Poll the endpoint indicated in the Azure-AsyncOperation header for operation status */
  post(
    options?: LROsCustomHeaderpostAsyncRetrySucceededParameters
  ): Promise<
    | LROsCustomHeaderpostAsyncRetrySucceeded202Response
    | LROsCustomHeaderpostAsyncRetrySucceededdefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/lro/put/200/succeeded' has methods for the following verbs: put */
  (path: "/lro/put/200/succeeded"): LROsput200Succeeded;
  /** Resource for '/lro/patch/200/succeeded/ignoreheaders' has methods for the following verbs: patch */
  (
    path: "/lro/patch/200/succeeded/ignoreheaders"
  ): LROspatch200SucceededIgnoreHeaders;
  /** Resource for '/lro/put/201/succeeded' has methods for the following verbs: put */
  (path: "/lro/put/201/succeeded"): LROsput201Succeeded;
  /** Resource for '/lro/list' has methods for the following verbs: post */
  (path: "/lro/list"): LROspost202List;
  /** Resource for '/lro/put/200/succeeded/nostate' has methods for the following verbs: put */
  (path: "/lro/put/200/succeeded/nostate"): LROsput200SucceededNoState;
  /** Resource for '/lro/put/202/retry/200' has methods for the following verbs: put */
  (path: "/lro/put/202/retry/200"): LROsput202Retry200;
  /** Resource for '/lro/put/201/creating/succeeded/200' has methods for the following verbs: put */
  (path: "/lro/put/201/creating/succeeded/200"): LROsput201CreatingSucceeded200;
  /** Resource for '/lro/put/200/updating/succeeded/200' has methods for the following verbs: put */
  (path: "/lro/put/200/updating/succeeded/200"): LROsput200UpdatingSucceeded204;
  /** Resource for '/lro/put/201/created/failed/200' has methods for the following verbs: put */
  (path: "/lro/put/201/created/failed/200"): LROsput201CreatingFailed200;
  /** Resource for '/lro/put/200/accepted/canceled/200' has methods for the following verbs: put */
  (path: "/lro/put/200/accepted/canceled/200"): LROsput200Acceptedcanceled200;
  /** Resource for '/lro/put/noheader/202/200' has methods for the following verbs: put */
  (path: "/lro/put/noheader/202/200"): LROsputNoHeaderInRetry;
  /** Resource for '/lro/putasync/retry/succeeded' has methods for the following verbs: put */
  (path: "/lro/putasync/retry/succeeded"): LROsputAsyncRetrySucceeded;
  /** Resource for '/lro/putasync/noretry/succeeded' has methods for the following verbs: put */
  (path: "/lro/putasync/noretry/succeeded"): LROsputAsyncNoRetrySucceeded;
  /** Resource for '/lro/putasync/retry/failed' has methods for the following verbs: put */
  (path: "/lro/putasync/retry/failed"): LROsputAsyncRetryFailed;
  /** Resource for '/lro/putasync/noretry/canceled' has methods for the following verbs: put */
  (path: "/lro/putasync/noretry/canceled"): LROsputAsyncNoRetrycanceled;
  /** Resource for '/lro/putasync/noheader/201/200' has methods for the following verbs: put */
  (path: "/lro/putasync/noheader/201/200"): LROsputAsyncNoHeaderInRetry;
  /** Resource for '/lro/putnonresource/202/200' has methods for the following verbs: put */
  (path: "/lro/putnonresource/202/200"): LROsputNonResource;
  /** Resource for '/lro/putnonresourceasync/202/200' has methods for the following verbs: put */
  (path: "/lro/putnonresourceasync/202/200"): LROsputAsyncNonResource;
  /** Resource for '/lro/putsubresource/202/200' has methods for the following verbs: put */
  (path: "/lro/putsubresource/202/200"): LROsputSubResource;
  /** Resource for '/lro/putsubresourceasync/202/200' has methods for the following verbs: put */
  (path: "/lro/putsubresourceasync/202/200"): LROsputAsyncSubResource;
  /** Resource for '/lro/delete/provisioning/202/accepted/200/succeeded' has methods for the following verbs: delete */
  (
    path: "/lro/delete/provisioning/202/accepted/200/succeeded"
  ): LROsdeleteProvisioning202Accepted200Succeeded;
  /** Resource for '/lro/delete/provisioning/202/deleting/200/failed' has methods for the following verbs: delete */
  (
    path: "/lro/delete/provisioning/202/deleting/200/failed"
  ): LROsdeleteProvisioning202DeletingFailed200;
  /** Resource for '/lro/delete/provisioning/202/deleting/200/canceled' has methods for the following verbs: delete */
  (
    path: "/lro/delete/provisioning/202/deleting/200/canceled"
  ): LROsdeleteProvisioning202Deletingcanceled200;
  /** Resource for '/lro/delete/204/succeeded' has methods for the following verbs: delete */
  (path: "/lro/delete/204/succeeded"): LROsdelete204Succeeded;
  /** Resource for '/lro/delete/202/retry/200' has methods for the following verbs: delete */
  (path: "/lro/delete/202/retry/200"): LROsdelete202Retry200;
  /** Resource for '/lro/delete/202/noretry/204' has methods for the following verbs: delete */
  (path: "/lro/delete/202/noretry/204"): LROsdelete202NoRetry204;
  /** Resource for '/lro/delete/noheader' has methods for the following verbs: delete */
  (path: "/lro/delete/noheader"): LROsdeleteNoHeaderInRetry;
  /** Resource for '/lro/deleteasync/noheader/202/204' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/noheader/202/204"): LROsdeleteAsyncNoHeaderInRetry;
  /** Resource for '/lro/deleteasync/retry/succeeded' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/retry/succeeded"): LROsdeleteAsyncRetrySucceeded;
  /** Resource for '/lro/deleteasync/noretry/succeeded' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/noretry/succeeded"): LROsdeleteAsyncNoRetrySucceeded;
  /** Resource for '/lro/deleteasync/retry/failed' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/retry/failed"): LROsdeleteAsyncRetryFailed;
  /** Resource for '/lro/deleteasync/retry/canceled' has methods for the following verbs: delete */
  (path: "/lro/deleteasync/retry/canceled"): LROsdeleteAsyncRetrycanceled;
  /** Resource for '/lro/post/payload/200' has methods for the following verbs: post */
  (path: "/lro/post/payload/200"): LROspost200WithPayload;
  /** Resource for '/lro/post/202/retry/200' has methods for the following verbs: post */
  (path: "/lro/post/202/retry/200"): LROspost202Retry200;
  /** Resource for '/lro/post/202/noretry/204' has methods for the following verbs: post */
  (path: "/lro/post/202/noretry/204"): LROspost202NoRetry204;
  /** Resource for '/lro/LROPostDoubleHeadersFinalLocationGet' has methods for the following verbs: post */
  (
    path: "/lro/LROPostDoubleHeadersFinalLocationGet"
  ): LROspostDoubleHeadersFinalLocationGet;
  /** Resource for '/lro/LROPostDoubleHeadersFinalAzureHeaderGet' has methods for the following verbs: post */
  (
    path: "/lro/LROPostDoubleHeadersFinalAzureHeaderGet"
  ): LROspostDoubleHeadersFinalAzureHeaderGet;
  /** Resource for '/lro/LROPostDoubleHeadersFinalAzureHeaderGetDefault' has methods for the following verbs: post */
  (
    path: "/lro/LROPostDoubleHeadersFinalAzureHeaderGetDefault"
  ): LROspostDoubleHeadersFinalAzureHeaderGetDefault;
  /** Resource for '/lro/postasync/retry/succeeded' has methods for the following verbs: post */
  (path: "/lro/postasync/retry/succeeded"): LROspostAsyncRetrySucceeded;
  /** Resource for '/lro/postasync/noretry/succeeded' has methods for the following verbs: post */
  (path: "/lro/postasync/noretry/succeeded"): LROspostAsyncNoRetrySucceeded;
  /** Resource for '/lro/postasync/retry/failed' has methods for the following verbs: post */
  (path: "/lro/postasync/retry/failed"): LROspostAsyncRetryFailed;
  /** Resource for '/lro/postasync/retry/canceled' has methods for the following verbs: post */
  (path: "/lro/postasync/retry/canceled"): LROspostAsyncRetrycanceled;
  /** Resource for '/lro/retryerror/put/201/creating/succeeded/200' has methods for the following verbs: put */
  (
    path: "/lro/retryerror/put/201/creating/succeeded/200"
  ): LRORetrysput201CreatingSucceeded200;
  /** Resource for '/lro/retryerror/putasync/retry/succeeded' has methods for the following verbs: put */
  (
    path: "/lro/retryerror/putasync/retry/succeeded"
  ): LRORetrysputAsyncRelativeRetrySucceeded;
  /** Resource for '/lro/retryerror/delete/provisioning/202/accepted/200/succeeded' has methods for the following verbs: delete */
  (
    path: "/lro/retryerror/delete/provisioning/202/accepted/200/succeeded"
  ): LRORetrysdeleteProvisioning202Accepted200Succeeded;
  /** Resource for '/lro/retryerror/delete/202/retry/200' has methods for the following verbs: delete */
  (path: "/lro/retryerror/delete/202/retry/200"): LRORetrysdelete202Retry200;
  /** Resource for '/lro/retryerror/deleteasync/retry/succeeded' has methods for the following verbs: delete */
  (
    path: "/lro/retryerror/deleteasync/retry/succeeded"
  ): LRORetrysdeleteAsyncRelativeRetrySucceeded;
  /** Resource for '/lro/retryerror/post/202/retry/200' has methods for the following verbs: post */
  (path: "/lro/retryerror/post/202/retry/200"): LRORetryspost202Retry200;
  /** Resource for '/lro/retryerror/postasync/retry/succeeded' has methods for the following verbs: post */
  (
    path: "/lro/retryerror/postasync/retry/succeeded"
  ): LRORetryspostAsyncRelativeRetrySucceeded;
  /** Resource for '/lro/nonretryerror/put/400' has methods for the following verbs: put */
  (path: "/lro/nonretryerror/put/400"): LrosaDsputNonRetry400;
  /** Resource for '/lro/nonretryerror/put/201/creating/400' has methods for the following verbs: put */
  (
    path: "/lro/nonretryerror/put/201/creating/400"
  ): LrosaDsputNonRetry201Creating400;
  /** Resource for '/lro/nonretryerror/put/201/creating/400/invalidjson' has methods for the following verbs: put */
  (
    path: "/lro/nonretryerror/put/201/creating/400/invalidjson"
  ): LrosaDsputNonRetry201Creating400InvalidJson;
  /** Resource for '/lro/nonretryerror/putasync/retry/400' has methods for the following verbs: put */
  (
    path: "/lro/nonretryerror/putasync/retry/400"
  ): LrosaDsputAsyncRelativeRetry400;
  /** Resource for '/lro/nonretryerror/delete/400' has methods for the following verbs: delete */
  (path: "/lro/nonretryerror/delete/400"): LrosaDsdeleteNonRetry400;
  /** Resource for '/lro/nonretryerror/delete/202/retry/400' has methods for the following verbs: delete */
  (
    path: "/lro/nonretryerror/delete/202/retry/400"
  ): LrosaDsdelete202NonRetry400;
  /** Resource for '/lro/nonretryerror/deleteasync/retry/400' has methods for the following verbs: delete */
  (
    path: "/lro/nonretryerror/deleteasync/retry/400"
  ): LrosaDsdeleteAsyncRelativeRetry400;
  /** Resource for '/lro/nonretryerror/post/400' has methods for the following verbs: post */
  (path: "/lro/nonretryerror/post/400"): LrosaDspostNonRetry400;
  /** Resource for '/lro/nonretryerror/post/202/retry/400' has methods for the following verbs: post */
  (path: "/lro/nonretryerror/post/202/retry/400"): LrosaDspost202NonRetry400;
  /** Resource for '/lro/nonretryerror/postasync/retry/400' has methods for the following verbs: post */
  (
    path: "/lro/nonretryerror/postasync/retry/400"
  ): LrosaDspostAsyncRelativeRetry400;
  /** Resource for '/lro/error/put/201/noprovisioningstatepayload' has methods for the following verbs: put */
  (
    path: "/lro/error/put/201/noprovisioningstatepayload"
  ): LrosaDsputError201NoProvisioningStatePayload;
  /** Resource for '/lro/error/putasync/retry/nostatus' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/nostatus"
  ): LrosaDsputAsyncRelativeRetryNoStatus;
  /** Resource for '/lro/error/putasync/retry/nostatuspayload' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/nostatuspayload"
  ): LrosaDsputAsyncRelativeRetryNoStatusPayload;
  /** Resource for '/lro/error/delete/204/nolocation' has methods for the following verbs: delete */
  (path: "/lro/error/delete/204/nolocation"): LrosaDsdelete204Succeeded;
  /** Resource for '/lro/error/deleteasync/retry/nostatus' has methods for the following verbs: delete */
  (
    path: "/lro/error/deleteasync/retry/nostatus"
  ): LrosaDsdeleteAsyncRelativeRetryNoStatus;
  /** Resource for '/lro/error/post/202/nolocation' has methods for the following verbs: post */
  (path: "/lro/error/post/202/nolocation"): LrosaDspost202NoLocation;
  /** Resource for '/lro/error/postasync/retry/nopayload' has methods for the following verbs: post */
  (
    path: "/lro/error/postasync/retry/nopayload"
  ): LrosaDspostAsyncRelativeRetryNoPayload;
  /** Resource for '/lro/error/put/200/invalidjson' has methods for the following verbs: put */
  (path: "/lro/error/put/200/invalidjson"): LrosaDsput200InvalidJson;
  /** Resource for '/lro/error/putasync/retry/invalidheader' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/invalidheader"
  ): LrosaDsputAsyncRelativeRetryInvalidHeader;
  /** Resource for '/lro/error/putasync/retry/invalidjsonpolling' has methods for the following verbs: put */
  (
    path: "/lro/error/putasync/retry/invalidjsonpolling"
  ): LrosaDsputAsyncRelativeRetryInvalidJsonPolling;
  /** Resource for '/lro/error/delete/202/retry/invalidheader' has methods for the following verbs: delete */
  (
    path: "/lro/error/delete/202/retry/invalidheader"
  ): LrosaDsdelete202RetryInvalidHeader;
  /** Resource for '/lro/error/deleteasync/retry/invalidheader' has methods for the following verbs: delete */
  (
    path: "/lro/error/deleteasync/retry/invalidheader"
  ): LrosaDsdeleteAsyncRelativeRetryInvalidHeader;
  /** Resource for '/lro/error/deleteasync/retry/invalidjsonpolling' has methods for the following verbs: delete */
  (
    path: "/lro/error/deleteasync/retry/invalidjsonpolling"
  ): LrosaDsdeleteAsyncRelativeRetryInvalidJsonPolling;
  /** Resource for '/lro/error/post/202/retry/invalidheader' has methods for the following verbs: post */
  (
    path: "/lro/error/post/202/retry/invalidheader"
  ): LrosaDspost202RetryInvalidHeader;
  /** Resource for '/lro/error/postasync/retry/invalidheader' has methods for the following verbs: post */
  (
    path: "/lro/error/postasync/retry/invalidheader"
  ): LrosaDspostAsyncRelativeRetryInvalidHeader;
  /** Resource for '/lro/error/postasync/retry/invalidjsonpolling' has methods for the following verbs: post */
  (
    path: "/lro/error/postasync/retry/invalidjsonpolling"
  ): LrosaDspostAsyncRelativeRetryInvalidJsonPolling;
  /** Resource for '/lro/customheader/putasync/retry/succeeded' has methods for the following verbs: put */
  (
    path: "/lro/customheader/putasync/retry/succeeded"
  ): LROsCustomHeaderputAsyncRetrySucceeded;
  /** Resource for '/lro/customheader/put/201/creating/succeeded/200' has methods for the following verbs: put */
  (
    path: "/lro/customheader/put/201/creating/succeeded/200"
  ): LROsCustomHeaderput201CreatingSucceeded200;
  /** Resource for '/lro/customheader/post/202/retry/200' has methods for the following verbs: post */
  (
    path: "/lro/customheader/post/202/retry/200"
  ): LROsCustomHeaderpost202Retry200;
  /** Resource for '/lro/customheader/postasync/retry/succeeded' has methods for the following verbs: post */
  (
    path: "/lro/customheader/postasync/retry/succeeded"
  ): LROsCustomHeaderpostAsyncRetrySucceeded;
}

export type LRORestClientRestClient = Client & {
  path: Routes;
};

export default function LRORestClient(
  options: ClientOptions = {}
): LRORestClientRestClient {
  const baseUrl = options.baseUrl ?? "http://localhost:3000";

  return getClient(
    baseUrl,

    options
  ) as LRORestClientRestClient;
}
