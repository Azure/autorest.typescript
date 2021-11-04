// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Product, Sku, SubProduct } from "./models";

export interface LROsPut200SucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPut200SucceededParameters = LROsPut200SucceededBodyParam &
  RequestParameters;

export interface LROsPatch200SucceededIgnoreHeadersBodyParam {
  /** Product to patch */
  body?: Product;
}

export type LROsPatch200SucceededIgnoreHeadersParameters = LROsPatch200SucceededIgnoreHeadersBodyParam &
  RequestParameters;

export interface LROsPut201SucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPut201SucceededParameters = LROsPut201SucceededBodyParam &
  RequestParameters;
export type LROsPost202ListParameters = RequestParameters;

export interface LROsPut200SucceededNoStateBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPut200SucceededNoStateParameters = LROsPut200SucceededNoStateBodyParam &
  RequestParameters;

export interface LROsPut202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPut202Retry200Parameters = LROsPut202Retry200BodyParam &
  RequestParameters;

export interface LROsPut201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPut201CreatingSucceeded200Parameters = LROsPut201CreatingSucceeded200BodyParam &
  RequestParameters;

export interface LROsPut200UpdatingSucceeded204BodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPut200UpdatingSucceeded204Parameters = LROsPut200UpdatingSucceeded204BodyParam &
  RequestParameters;

export interface LROsPut201CreatingFailed200BodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPut201CreatingFailed200Parameters = LROsPut201CreatingFailed200BodyParam &
  RequestParameters;

export interface LROsPut200Acceptedcanceled200BodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPut200Acceptedcanceled200Parameters = LROsPut200Acceptedcanceled200BodyParam &
  RequestParameters;

export interface LROsPutNoHeaderInRetryBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPutNoHeaderInRetryParameters = LROsPutNoHeaderInRetryBodyParam &
  RequestParameters;

export interface LROsPutAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPutAsyncRetrySucceededParameters = LROsPutAsyncRetrySucceededBodyParam &
  RequestParameters;

export interface LROsPutAsyncNoRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPutAsyncNoRetrySucceededParameters = LROsPutAsyncNoRetrySucceededBodyParam &
  RequestParameters;

export interface LROsPutAsyncRetryFailedBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPutAsyncRetryFailedParameters = LROsPutAsyncRetryFailedBodyParam &
  RequestParameters;

export interface LROsPutAsyncNoRetrycanceledBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPutAsyncNoRetrycanceledParameters = LROsPutAsyncNoRetrycanceledBodyParam &
  RequestParameters;

export interface LROsPutAsyncNoHeaderInRetryBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPutAsyncNoHeaderInRetryParameters = LROsPutAsyncNoHeaderInRetryBodyParam &
  RequestParameters;

export interface LROsPutNonResourceBodyParam {
  /** sku to put */
  body?: Sku;
}

export type LROsPutNonResourceParameters = LROsPutNonResourceBodyParam &
  RequestParameters;

export interface LROsPutAsyncNonResourceBodyParam {
  /** Sku to put */
  body?: Sku;
}

export type LROsPutAsyncNonResourceParameters = LROsPutAsyncNonResourceBodyParam &
  RequestParameters;

export interface LROsPutSubResourceBodyParam {
  /** Sub Product to put */
  body?: SubProduct;
}

export type LROsPutSubResourceParameters = LROsPutSubResourceBodyParam &
  RequestParameters;

export interface LROsPutAsyncSubResourceBodyParam {
  /** Sub Product to put */
  body?: SubProduct;
}

export type LROsPutAsyncSubResourceParameters = LROsPutAsyncSubResourceBodyParam &
  RequestParameters;
export type LROsDeleteProvisioning202Accepted200SucceededParameters = RequestParameters;
export type LROsDeleteProvisioning202DeletingFailed200Parameters = RequestParameters;
export type LROsDeleteProvisioning202Deletingcanceled200Parameters = RequestParameters;
export type LROsDelete204SucceededParameters = RequestParameters;
export type LROsDelete202Retry200Parameters = RequestParameters;
export type LROsDelete202NoRetry204Parameters = RequestParameters;
export type LROsDeleteNoHeaderInRetryParameters = RequestParameters;
export type LROsDeleteAsyncNoHeaderInRetryParameters = RequestParameters;
export type LROsDeleteAsyncRetrySucceededParameters = RequestParameters;
export type LROsDeleteAsyncNoRetrySucceededParameters = RequestParameters;
export type LROsDeleteAsyncRetryFailedParameters = RequestParameters;
export type LROsDeleteAsyncRetrycanceledParameters = RequestParameters;
export type LROsPost200WithPayloadParameters = RequestParameters;

export interface LROsPost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPost202Retry200Parameters = LROsPost202Retry200BodyParam &
  RequestParameters;

export interface LROsPost202NoRetry204BodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPost202NoRetry204Parameters = LROsPost202NoRetry204BodyParam &
  RequestParameters;
export type LROsPostDoubleHeadersFinalLocationGetParameters = RequestParameters;
export type LROsPostDoubleHeadersFinalAzureHeaderGetParameters = RequestParameters;
export type LROsPostDoubleHeadersFinalAzureHeaderGetDefaultParameters = RequestParameters;

export interface LROsPostAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPostAsyncRetrySucceededParameters = LROsPostAsyncRetrySucceededBodyParam &
  RequestParameters;

export interface LROsPostAsyncNoRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPostAsyncNoRetrySucceededParameters = LROsPostAsyncNoRetrySucceededBodyParam &
  RequestParameters;

export interface LROsPostAsyncRetryFailedBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPostAsyncRetryFailedParameters = LROsPostAsyncRetryFailedBodyParam &
  RequestParameters;

export interface LROsPostAsyncRetrycanceledBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsPostAsyncRetrycanceledParameters = LROsPostAsyncRetrycanceledBodyParam &
  RequestParameters;

export interface LRORetrysPut201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export type LRORetrysPut201CreatingSucceeded200Parameters = LRORetrysPut201CreatingSucceeded200BodyParam &
  RequestParameters;

export interface LRORetrysPutAsyncRelativeRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export type LRORetrysPutAsyncRelativeRetrySucceededParameters = LRORetrysPutAsyncRelativeRetrySucceededBodyParam &
  RequestParameters;
export type LRORetrysDeleteProvisioning202Accepted200SucceededParameters = RequestParameters;
export type LRORetrysDelete202Retry200Parameters = RequestParameters;
export type LRORetrysDeleteAsyncRelativeRetrySucceededParameters = RequestParameters;

export interface LRORetrysPost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export type LRORetrysPost202Retry200Parameters = LRORetrysPost202Retry200BodyParam &
  RequestParameters;

export interface LRORetrysPostAsyncRelativeRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export type LRORetrysPostAsyncRelativeRetrySucceededParameters = LRORetrysPostAsyncRelativeRetrySucceededBodyParam &
  RequestParameters;

export interface LrosaDsPutNonRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPutNonRetry400Parameters = LrosaDsPutNonRetry400BodyParam &
  RequestParameters;

export interface LrosaDsPutNonRetry201Creating400BodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPutNonRetry201Creating400Parameters = LrosaDsPutNonRetry201Creating400BodyParam &
  RequestParameters;

export interface LrosaDsPutNonRetry201Creating400InvalidJsonBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPutNonRetry201Creating400InvalidJsonParameters = LrosaDsPutNonRetry201Creating400InvalidJsonBodyParam &
  RequestParameters;

export interface LrosaDsPutAsyncRelativeRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPutAsyncRelativeRetry400Parameters = LrosaDsPutAsyncRelativeRetry400BodyParam &
  RequestParameters;
export type LrosaDsDeleteNonRetry400Parameters = RequestParameters;
export type LrosaDsDelete202NonRetry400Parameters = RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetry400Parameters = RequestParameters;

export interface LrosaDsPostNonRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPostNonRetry400Parameters = LrosaDsPostNonRetry400BodyParam &
  RequestParameters;

export interface LrosaDsPost202NonRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPost202NonRetry400Parameters = LrosaDsPost202NonRetry400BodyParam &
  RequestParameters;

export interface LrosaDsPostAsyncRelativeRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPostAsyncRelativeRetry400Parameters = LrosaDsPostAsyncRelativeRetry400BodyParam &
  RequestParameters;

export interface LrosaDsPutError201NoProvisioningStatePayloadBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPutError201NoProvisioningStatePayloadParameters = LrosaDsPutError201NoProvisioningStatePayloadBodyParam &
  RequestParameters;

export interface LrosaDsPutAsyncRelativeRetryNoStatusBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPutAsyncRelativeRetryNoStatusParameters = LrosaDsPutAsyncRelativeRetryNoStatusBodyParam &
  RequestParameters;

export interface LrosaDsPutAsyncRelativeRetryNoStatusPayloadBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPutAsyncRelativeRetryNoStatusPayloadParameters = LrosaDsPutAsyncRelativeRetryNoStatusPayloadBodyParam &
  RequestParameters;
export type LrosaDsDelete204SucceededParameters = RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetryNoStatusParameters = RequestParameters;

export interface LrosaDsPost202NoLocationBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPost202NoLocationParameters = LrosaDsPost202NoLocationBodyParam &
  RequestParameters;

export interface LrosaDsPostAsyncRelativeRetryNoPayloadBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPostAsyncRelativeRetryNoPayloadParameters = LrosaDsPostAsyncRelativeRetryNoPayloadBodyParam &
  RequestParameters;

export interface LrosaDsPut200InvalidJsonBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPut200InvalidJsonParameters = LrosaDsPut200InvalidJsonBodyParam &
  RequestParameters;

export interface LrosaDsPutAsyncRelativeRetryInvalidHeaderBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPutAsyncRelativeRetryInvalidHeaderParameters = LrosaDsPutAsyncRelativeRetryInvalidHeaderBodyParam &
  RequestParameters;

export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPollingBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPutAsyncRelativeRetryInvalidJsonPollingParameters = LrosaDsPutAsyncRelativeRetryInvalidJsonPollingBodyParam &
  RequestParameters;
export type LrosaDsDelete202RetryInvalidHeaderParameters = RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetryInvalidHeaderParameters = RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingParameters = RequestParameters;

export interface LrosaDsPost202RetryInvalidHeaderBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPost202RetryInvalidHeaderParameters = LrosaDsPost202RetryInvalidHeaderBodyParam &
  RequestParameters;

export interface LrosaDsPostAsyncRelativeRetryInvalidHeaderBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPostAsyncRelativeRetryInvalidHeaderParameters = LrosaDsPostAsyncRelativeRetryInvalidHeaderBodyParam &
  RequestParameters;

export interface LrosaDsPostAsyncRelativeRetryInvalidJsonPollingBodyParam {
  /** Product to put */
  body?: Product;
}

export type LrosaDsPostAsyncRelativeRetryInvalidJsonPollingParameters = LrosaDsPostAsyncRelativeRetryInvalidJsonPollingBodyParam &
  RequestParameters;

export interface LROsCustomHeaderPutAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsCustomHeaderPutAsyncRetrySucceededParameters = LROsCustomHeaderPutAsyncRetrySucceededBodyParam &
  RequestParameters;

export interface LROsCustomHeaderPut201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsCustomHeaderPut201CreatingSucceeded200Parameters = LROsCustomHeaderPut201CreatingSucceeded200BodyParam &
  RequestParameters;

export interface LROsCustomHeaderPost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsCustomHeaderPost202Retry200Parameters = LROsCustomHeaderPost202Retry200BodyParam &
  RequestParameters;

export interface LROsCustomHeaderPostAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export type LROsCustomHeaderPostAsyncRetrySucceededParameters = LROsCustomHeaderPostAsyncRetrySucceededBodyParam &
  RequestParameters;
