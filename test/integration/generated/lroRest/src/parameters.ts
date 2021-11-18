// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Product, Sku, SubProduct } from "./models";

export interface LROsput200SucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsput200SucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsput200SucceededParameters = LROsput200SucceededMediaTypesParam &
  LROsput200SucceededBodyParam &
  RequestParameters;

export interface LROspatch200SucceededIgnoreHeadersBodyParam {
  /** Product to patch */
  body?: Product;
}

export interface LROspatch200SucceededIgnoreHeadersMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROspatch200SucceededIgnoreHeadersParameters = LROspatch200SucceededIgnoreHeadersMediaTypesParam &
  LROspatch200SucceededIgnoreHeadersBodyParam &
  RequestParameters;

export interface LROsput201SucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsput201SucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsput201SucceededParameters = LROsput201SucceededMediaTypesParam &
  LROsput201SucceededBodyParam &
  RequestParameters;
export type LROspost202ListParameters = RequestParameters;

export interface LROsput200SucceededNoStateBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsput200SucceededNoStateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsput200SucceededNoStateParameters = LROsput200SucceededNoStateMediaTypesParam &
  LROsput200SucceededNoStateBodyParam &
  RequestParameters;

export interface LROsput202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsput202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsput202Retry200Parameters = LROsput202Retry200MediaTypesParam &
  LROsput202Retry200BodyParam &
  RequestParameters;

export interface LROsput201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsput201CreatingSucceeded200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsput201CreatingSucceeded200Parameters = LROsput201CreatingSucceeded200MediaTypesParam &
  LROsput201CreatingSucceeded200BodyParam &
  RequestParameters;

export interface LROsput200UpdatingSucceeded204BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsput200UpdatingSucceeded204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsput200UpdatingSucceeded204Parameters = LROsput200UpdatingSucceeded204MediaTypesParam &
  LROsput200UpdatingSucceeded204BodyParam &
  RequestParameters;

export interface LROsput201CreatingFailed200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsput201CreatingFailed200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsput201CreatingFailed200Parameters = LROsput201CreatingFailed200MediaTypesParam &
  LROsput201CreatingFailed200BodyParam &
  RequestParameters;

export interface LROsput200Acceptedcanceled200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsput200Acceptedcanceled200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsput200Acceptedcanceled200Parameters = LROsput200Acceptedcanceled200MediaTypesParam &
  LROsput200Acceptedcanceled200BodyParam &
  RequestParameters;

export interface LROsputNoHeaderInRetryBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsputNoHeaderInRetryMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsputNoHeaderInRetryParameters = LROsputNoHeaderInRetryMediaTypesParam &
  LROsputNoHeaderInRetryBodyParam &
  RequestParameters;

export interface LROsputAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsputAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsputAsyncRetrySucceededParameters = LROsputAsyncRetrySucceededMediaTypesParam &
  LROsputAsyncRetrySucceededBodyParam &
  RequestParameters;

export interface LROsputAsyncNoRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsputAsyncNoRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsputAsyncNoRetrySucceededParameters = LROsputAsyncNoRetrySucceededMediaTypesParam &
  LROsputAsyncNoRetrySucceededBodyParam &
  RequestParameters;

export interface LROsputAsyncRetryFailedBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsputAsyncRetryFailedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsputAsyncRetryFailedParameters = LROsputAsyncRetryFailedMediaTypesParam &
  LROsputAsyncRetryFailedBodyParam &
  RequestParameters;

export interface LROsputAsyncNoRetrycanceledBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsputAsyncNoRetrycanceledMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsputAsyncNoRetrycanceledParameters = LROsputAsyncNoRetrycanceledMediaTypesParam &
  LROsputAsyncNoRetrycanceledBodyParam &
  RequestParameters;

export interface LROsputAsyncNoHeaderInRetryBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsputAsyncNoHeaderInRetryMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsputAsyncNoHeaderInRetryParameters = LROsputAsyncNoHeaderInRetryMediaTypesParam &
  LROsputAsyncNoHeaderInRetryBodyParam &
  RequestParameters;

export interface LROsputNonResourceBodyParam {
  /** sku to put */
  body?: Sku;
}

export interface LROsputNonResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsputNonResourceParameters = LROsputNonResourceMediaTypesParam &
  LROsputNonResourceBodyParam &
  RequestParameters;

export interface LROsputAsyncNonResourceBodyParam {
  /** Sku to put */
  body?: Sku;
}

export interface LROsputAsyncNonResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsputAsyncNonResourceParameters = LROsputAsyncNonResourceMediaTypesParam &
  LROsputAsyncNonResourceBodyParam &
  RequestParameters;

export interface LROsputSubResourceBodyParam {
  /** Sub Product to put */
  body?: SubProduct;
}

export interface LROsputSubResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsputSubResourceParameters = LROsputSubResourceMediaTypesParam &
  LROsputSubResourceBodyParam &
  RequestParameters;

export interface LROsputAsyncSubResourceBodyParam {
  /** Sub Product to put */
  body?: SubProduct;
}

export interface LROsputAsyncSubResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsputAsyncSubResourceParameters = LROsputAsyncSubResourceMediaTypesParam &
  LROsputAsyncSubResourceBodyParam &
  RequestParameters;
export type LROsdeleteProvisioning202Accepted200SucceededParameters = RequestParameters;
export type LROsdeleteProvisioning202DeletingFailed200Parameters = RequestParameters;
export type LROsdeleteProvisioning202Deletingcanceled200Parameters = RequestParameters;
export type LROsdelete204SucceededParameters = RequestParameters;
export type LROsdelete202Retry200Parameters = RequestParameters;
export type LROsdelete202NoRetry204Parameters = RequestParameters;
export type LROsdeleteNoHeaderInRetryParameters = RequestParameters;
export type LROsdeleteAsyncNoHeaderInRetryParameters = RequestParameters;
export type LROsdeleteAsyncRetrySucceededParameters = RequestParameters;
export type LROsdeleteAsyncNoRetrySucceededParameters = RequestParameters;
export type LROsdeleteAsyncRetryFailedParameters = RequestParameters;
export type LROsdeleteAsyncRetrycanceledParameters = RequestParameters;
export type LROspost200WithPayloadParameters = RequestParameters;

export interface LROspost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROspost202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROspost202Retry200Parameters = LROspost202Retry200MediaTypesParam &
  LROspost202Retry200BodyParam &
  RequestParameters;

export interface LROspost202NoRetry204BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROspost202NoRetry204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROspost202NoRetry204Parameters = LROspost202NoRetry204MediaTypesParam &
  LROspost202NoRetry204BodyParam &
  RequestParameters;
export type LROspostDoubleHeadersFinalLocationGetParameters = RequestParameters;
export type LROspostDoubleHeadersFinalAzureHeaderGetParameters = RequestParameters;
export type LROspostDoubleHeadersFinalAzureHeaderGetDefaultParameters = RequestParameters;

export interface LROspostAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROspostAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROspostAsyncRetrySucceededParameters = LROspostAsyncRetrySucceededMediaTypesParam &
  LROspostAsyncRetrySucceededBodyParam &
  RequestParameters;

export interface LROspostAsyncNoRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROspostAsyncNoRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROspostAsyncNoRetrySucceededParameters = LROspostAsyncNoRetrySucceededMediaTypesParam &
  LROspostAsyncNoRetrySucceededBodyParam &
  RequestParameters;

export interface LROspostAsyncRetryFailedBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROspostAsyncRetryFailedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROspostAsyncRetryFailedParameters = LROspostAsyncRetryFailedMediaTypesParam &
  LROspostAsyncRetryFailedBodyParam &
  RequestParameters;

export interface LROspostAsyncRetrycanceledBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROspostAsyncRetrycanceledMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROspostAsyncRetrycanceledParameters = LROspostAsyncRetrycanceledMediaTypesParam &
  LROspostAsyncRetrycanceledBodyParam &
  RequestParameters;

export interface LRORetrysput201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LRORetrysput201CreatingSucceeded200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LRORetrysput201CreatingSucceeded200Parameters = LRORetrysput201CreatingSucceeded200MediaTypesParam &
  LRORetrysput201CreatingSucceeded200BodyParam &
  RequestParameters;

export interface LRORetrysputAsyncRelativeRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LRORetrysputAsyncRelativeRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LRORetrysputAsyncRelativeRetrySucceededParameters = LRORetrysputAsyncRelativeRetrySucceededMediaTypesParam &
  LRORetrysputAsyncRelativeRetrySucceededBodyParam &
  RequestParameters;
export type LRORetrysdeleteProvisioning202Accepted200SucceededParameters = RequestParameters;
export type LRORetrysdelete202Retry200Parameters = RequestParameters;
export type LRORetrysdeleteAsyncRelativeRetrySucceededParameters = RequestParameters;

export interface LRORetryspost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LRORetryspost202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LRORetryspost202Retry200Parameters = LRORetryspost202Retry200MediaTypesParam &
  LRORetryspost202Retry200BodyParam &
  RequestParameters;

export interface LRORetryspostAsyncRelativeRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LRORetryspostAsyncRelativeRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LRORetryspostAsyncRelativeRetrySucceededParameters = LRORetryspostAsyncRelativeRetrySucceededMediaTypesParam &
  LRORetryspostAsyncRelativeRetrySucceededBodyParam &
  RequestParameters;

export interface LrosaDsputNonRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsputNonRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsputNonRetry400Parameters = LrosaDsputNonRetry400MediaTypesParam &
  LrosaDsputNonRetry400BodyParam &
  RequestParameters;

export interface LrosaDsputNonRetry201Creating400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsputNonRetry201Creating400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsputNonRetry201Creating400Parameters = LrosaDsputNonRetry201Creating400MediaTypesParam &
  LrosaDsputNonRetry201Creating400BodyParam &
  RequestParameters;

export interface LrosaDsputNonRetry201Creating400InvalidJsonBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsputNonRetry201Creating400InvalidJsonMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsputNonRetry201Creating400InvalidJsonParameters = LrosaDsputNonRetry201Creating400InvalidJsonMediaTypesParam &
  LrosaDsputNonRetry201Creating400InvalidJsonBodyParam &
  RequestParameters;

export interface LrosaDsputAsyncRelativeRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsputAsyncRelativeRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsputAsyncRelativeRetry400Parameters = LrosaDsputAsyncRelativeRetry400MediaTypesParam &
  LrosaDsputAsyncRelativeRetry400BodyParam &
  RequestParameters;
export type LrosaDsdeleteNonRetry400Parameters = RequestParameters;
export type LrosaDsdelete202NonRetry400Parameters = RequestParameters;
export type LrosaDsdeleteAsyncRelativeRetry400Parameters = RequestParameters;

export interface LrosaDspostNonRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDspostNonRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDspostNonRetry400Parameters = LrosaDspostNonRetry400MediaTypesParam &
  LrosaDspostNonRetry400BodyParam &
  RequestParameters;

export interface LrosaDspost202NonRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDspost202NonRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDspost202NonRetry400Parameters = LrosaDspost202NonRetry400MediaTypesParam &
  LrosaDspost202NonRetry400BodyParam &
  RequestParameters;

export interface LrosaDspostAsyncRelativeRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDspostAsyncRelativeRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDspostAsyncRelativeRetry400Parameters = LrosaDspostAsyncRelativeRetry400MediaTypesParam &
  LrosaDspostAsyncRelativeRetry400BodyParam &
  RequestParameters;

export interface LrosaDsputError201NoProvisioningStatePayloadBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsputError201NoProvisioningStatePayloadMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsputError201NoProvisioningStatePayloadParameters = LrosaDsputError201NoProvisioningStatePayloadMediaTypesParam &
  LrosaDsputError201NoProvisioningStatePayloadBodyParam &
  RequestParameters;

export interface LrosaDsputAsyncRelativeRetryNoStatusBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsputAsyncRelativeRetryNoStatusMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsputAsyncRelativeRetryNoStatusParameters = LrosaDsputAsyncRelativeRetryNoStatusMediaTypesParam &
  LrosaDsputAsyncRelativeRetryNoStatusBodyParam &
  RequestParameters;

export interface LrosaDsputAsyncRelativeRetryNoStatusPayloadBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsputAsyncRelativeRetryNoStatusPayloadMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsputAsyncRelativeRetryNoStatusPayloadParameters = LrosaDsputAsyncRelativeRetryNoStatusPayloadMediaTypesParam &
  LrosaDsputAsyncRelativeRetryNoStatusPayloadBodyParam &
  RequestParameters;
export type LrosaDsdelete204SucceededParameters = RequestParameters;
export type LrosaDsdeleteAsyncRelativeRetryNoStatusParameters = RequestParameters;

export interface LrosaDspost202NoLocationBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDspost202NoLocationMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDspost202NoLocationParameters = LrosaDspost202NoLocationMediaTypesParam &
  LrosaDspost202NoLocationBodyParam &
  RequestParameters;

export interface LrosaDspostAsyncRelativeRetryNoPayloadBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDspostAsyncRelativeRetryNoPayloadMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDspostAsyncRelativeRetryNoPayloadParameters = LrosaDspostAsyncRelativeRetryNoPayloadMediaTypesParam &
  LrosaDspostAsyncRelativeRetryNoPayloadBodyParam &
  RequestParameters;

export interface LrosaDsput200InvalidJsonBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsput200InvalidJsonMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsput200InvalidJsonParameters = LrosaDsput200InvalidJsonMediaTypesParam &
  LrosaDsput200InvalidJsonBodyParam &
  RequestParameters;

export interface LrosaDsputAsyncRelativeRetryInvalidHeaderBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsputAsyncRelativeRetryInvalidHeaderMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsputAsyncRelativeRetryInvalidHeaderParameters = LrosaDsputAsyncRelativeRetryInvalidHeaderMediaTypesParam &
  LrosaDsputAsyncRelativeRetryInvalidHeaderBodyParam &
  RequestParameters;

export interface LrosaDsputAsyncRelativeRetryInvalidJsonPollingBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsputAsyncRelativeRetryInvalidJsonPollingMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsputAsyncRelativeRetryInvalidJsonPollingParameters = LrosaDsputAsyncRelativeRetryInvalidJsonPollingMediaTypesParam &
  LrosaDsputAsyncRelativeRetryInvalidJsonPollingBodyParam &
  RequestParameters;
export type LrosaDsdelete202RetryInvalidHeaderParameters = RequestParameters;
export type LrosaDsdeleteAsyncRelativeRetryInvalidHeaderParameters = RequestParameters;
export type LrosaDsdeleteAsyncRelativeRetryInvalidJsonPollingParameters = RequestParameters;

export interface LrosaDspost202RetryInvalidHeaderBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDspost202RetryInvalidHeaderMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDspost202RetryInvalidHeaderParameters = LrosaDspost202RetryInvalidHeaderMediaTypesParam &
  LrosaDspost202RetryInvalidHeaderBodyParam &
  RequestParameters;

export interface LrosaDspostAsyncRelativeRetryInvalidHeaderBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDspostAsyncRelativeRetryInvalidHeaderMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDspostAsyncRelativeRetryInvalidHeaderParameters = LrosaDspostAsyncRelativeRetryInvalidHeaderMediaTypesParam &
  LrosaDspostAsyncRelativeRetryInvalidHeaderBodyParam &
  RequestParameters;

export interface LrosaDspostAsyncRelativeRetryInvalidJsonPollingBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDspostAsyncRelativeRetryInvalidJsonPollingMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDspostAsyncRelativeRetryInvalidJsonPollingParameters = LrosaDspostAsyncRelativeRetryInvalidJsonPollingMediaTypesParam &
  LrosaDspostAsyncRelativeRetryInvalidJsonPollingBodyParam &
  RequestParameters;

export interface LROsCustomHeaderputAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsCustomHeaderputAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsCustomHeaderputAsyncRetrySucceededParameters = LROsCustomHeaderputAsyncRetrySucceededMediaTypesParam &
  LROsCustomHeaderputAsyncRetrySucceededBodyParam &
  RequestParameters;

export interface LROsCustomHeaderput201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsCustomHeaderput201CreatingSucceeded200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsCustomHeaderput201CreatingSucceeded200Parameters = LROsCustomHeaderput201CreatingSucceeded200MediaTypesParam &
  LROsCustomHeaderput201CreatingSucceeded200BodyParam &
  RequestParameters;

export interface LROsCustomHeaderpost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsCustomHeaderpost202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsCustomHeaderpost202Retry200Parameters = LROsCustomHeaderpost202Retry200MediaTypesParam &
  LROsCustomHeaderpost202Retry200BodyParam &
  RequestParameters;

export interface LROsCustomHeaderpostAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsCustomHeaderpostAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsCustomHeaderpostAsyncRetrySucceededParameters = LROsCustomHeaderpostAsyncRetrySucceededMediaTypesParam &
  LROsCustomHeaderpostAsyncRetrySucceededBodyParam &
  RequestParameters;
