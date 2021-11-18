// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Product, Sku, SubProduct } from "./models";

export interface LrOSPut200SucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPut200SucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPut200SucceededParameters = LrOSPut200SucceededMediaTypesParam &
  LrOSPut200SucceededBodyParam &
  RequestParameters;

export interface LrOSPatch200SucceededIgnoreHeadersBodyParam {
  /** Product to patch */
  body?: Product;
}

export interface LrOSPatch200SucceededIgnoreHeadersMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPatch200SucceededIgnoreHeadersParameters = LrOSPatch200SucceededIgnoreHeadersMediaTypesParam &
  LrOSPatch200SucceededIgnoreHeadersBodyParam &
  RequestParameters;

export interface LrOSPut201SucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPut201SucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPut201SucceededParameters = LrOSPut201SucceededMediaTypesParam &
  LrOSPut201SucceededBodyParam &
  RequestParameters;
export type LrOSPost202ListParameters = RequestParameters;

export interface LrOSPut200SucceededNoStateBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPut200SucceededNoStateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPut200SucceededNoStateParameters = LrOSPut200SucceededNoStateMediaTypesParam &
  LrOSPut200SucceededNoStateBodyParam &
  RequestParameters;

export interface LrOSPut202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPut202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPut202Retry200Parameters = LrOSPut202Retry200MediaTypesParam &
  LrOSPut202Retry200BodyParam &
  RequestParameters;

export interface LrOSPut201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPut201CreatingSucceeded200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPut201CreatingSucceeded200Parameters = LrOSPut201CreatingSucceeded200MediaTypesParam &
  LrOSPut201CreatingSucceeded200BodyParam &
  RequestParameters;

export interface LrOSPut200UpdatingSucceeded204BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPut200UpdatingSucceeded204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPut200UpdatingSucceeded204Parameters = LrOSPut200UpdatingSucceeded204MediaTypesParam &
  LrOSPut200UpdatingSucceeded204BodyParam &
  RequestParameters;

export interface LrOSPut201CreatingFailed200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPut201CreatingFailed200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPut201CreatingFailed200Parameters = LrOSPut201CreatingFailed200MediaTypesParam &
  LrOSPut201CreatingFailed200BodyParam &
  RequestParameters;

export interface LrOSPut200Acceptedcanceled200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPut200Acceptedcanceled200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPut200Acceptedcanceled200Parameters = LrOSPut200Acceptedcanceled200MediaTypesParam &
  LrOSPut200Acceptedcanceled200BodyParam &
  RequestParameters;

export interface LrOSPutNoHeaderInRetryBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPutNoHeaderInRetryMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPutNoHeaderInRetryParameters = LrOSPutNoHeaderInRetryMediaTypesParam &
  LrOSPutNoHeaderInRetryBodyParam &
  RequestParameters;

export interface LrOSPutAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPutAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPutAsyncRetrySucceededParameters = LrOSPutAsyncRetrySucceededMediaTypesParam &
  LrOSPutAsyncRetrySucceededBodyParam &
  RequestParameters;

export interface LrOSPutAsyncNoRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPutAsyncNoRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPutAsyncNoRetrySucceededParameters = LrOSPutAsyncNoRetrySucceededMediaTypesParam &
  LrOSPutAsyncNoRetrySucceededBodyParam &
  RequestParameters;

export interface LrOSPutAsyncRetryFailedBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPutAsyncRetryFailedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPutAsyncRetryFailedParameters = LrOSPutAsyncRetryFailedMediaTypesParam &
  LrOSPutAsyncRetryFailedBodyParam &
  RequestParameters;

export interface LrOSPutAsyncNoRetrycanceledBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPutAsyncNoRetrycanceledMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPutAsyncNoRetrycanceledParameters = LrOSPutAsyncNoRetrycanceledMediaTypesParam &
  LrOSPutAsyncNoRetrycanceledBodyParam &
  RequestParameters;

export interface LrOSPutAsyncNoHeaderInRetryBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPutAsyncNoHeaderInRetryMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPutAsyncNoHeaderInRetryParameters = LrOSPutAsyncNoHeaderInRetryMediaTypesParam &
  LrOSPutAsyncNoHeaderInRetryBodyParam &
  RequestParameters;

export interface LrOSPutNonResourceBodyParam {
  /** sku to put */
  body?: Sku;
}

export interface LrOSPutNonResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPutNonResourceParameters = LrOSPutNonResourceMediaTypesParam &
  LrOSPutNonResourceBodyParam &
  RequestParameters;

export interface LrOSPutAsyncNonResourceBodyParam {
  /** Sku to put */
  body?: Sku;
}

export interface LrOSPutAsyncNonResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPutAsyncNonResourceParameters = LrOSPutAsyncNonResourceMediaTypesParam &
  LrOSPutAsyncNonResourceBodyParam &
  RequestParameters;

export interface LrOSPutSubResourceBodyParam {
  /** Sub Product to put */
  body?: SubProduct;
}

export interface LrOSPutSubResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPutSubResourceParameters = LrOSPutSubResourceMediaTypesParam &
  LrOSPutSubResourceBodyParam &
  RequestParameters;

export interface LrOSPutAsyncSubResourceBodyParam {
  /** Sub Product to put */
  body?: SubProduct;
}

export interface LrOSPutAsyncSubResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPutAsyncSubResourceParameters = LrOSPutAsyncSubResourceMediaTypesParam &
  LrOSPutAsyncSubResourceBodyParam &
  RequestParameters;
export type LrOSDeleteProvisioning202Accepted200SucceededParameters = RequestParameters;
export type LrOSDeleteProvisioning202DeletingFailed200Parameters = RequestParameters;
export type LrOSDeleteProvisioning202Deletingcanceled200Parameters = RequestParameters;
export type LrOSDelete204SucceededParameters = RequestParameters;
export type LrOSDelete202Retry200Parameters = RequestParameters;
export type LrOSDelete202NoRetry204Parameters = RequestParameters;
export type LrOSDeleteNoHeaderInRetryParameters = RequestParameters;
export type LrOSDeleteAsyncNoHeaderInRetryParameters = RequestParameters;
export type LrOSDeleteAsyncRetrySucceededParameters = RequestParameters;
export type LrOSDeleteAsyncNoRetrySucceededParameters = RequestParameters;
export type LrOSDeleteAsyncRetryFailedParameters = RequestParameters;
export type LrOSDeleteAsyncRetrycanceledParameters = RequestParameters;
export type LrOSPost200WithPayloadParameters = RequestParameters;

export interface LrOSPost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPost202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPost202Retry200Parameters = LrOSPost202Retry200MediaTypesParam &
  LrOSPost202Retry200BodyParam &
  RequestParameters;

export interface LrOSPost202NoRetry204BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPost202NoRetry204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPost202NoRetry204Parameters = LrOSPost202NoRetry204MediaTypesParam &
  LrOSPost202NoRetry204BodyParam &
  RequestParameters;
export type LrOSPostDoubleHeadersFinalLocationGetParameters = RequestParameters;
export type LrOSPostDoubleHeadersFinalAzureHeaderGetParameters = RequestParameters;
export type LrOSPostDoubleHeadersFinalAzureHeaderGetDefaultParameters = RequestParameters;

export interface LrOSPostAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPostAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPostAsyncRetrySucceededParameters = LrOSPostAsyncRetrySucceededMediaTypesParam &
  LrOSPostAsyncRetrySucceededBodyParam &
  RequestParameters;

export interface LrOSPostAsyncNoRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPostAsyncNoRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPostAsyncNoRetrySucceededParameters = LrOSPostAsyncNoRetrySucceededMediaTypesParam &
  LrOSPostAsyncNoRetrySucceededBodyParam &
  RequestParameters;

export interface LrOSPostAsyncRetryFailedBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPostAsyncRetryFailedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPostAsyncRetryFailedParameters = LrOSPostAsyncRetryFailedMediaTypesParam &
  LrOSPostAsyncRetryFailedBodyParam &
  RequestParameters;

export interface LrOSPostAsyncRetrycanceledBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSPostAsyncRetrycanceledMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSPostAsyncRetrycanceledParameters = LrOSPostAsyncRetrycanceledMediaTypesParam &
  LrOSPostAsyncRetrycanceledBodyParam &
  RequestParameters;

export interface LroRetrysPut201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LroRetrysPut201CreatingSucceeded200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LroRetrysPut201CreatingSucceeded200Parameters = LroRetrysPut201CreatingSucceeded200MediaTypesParam &
  LroRetrysPut201CreatingSucceeded200BodyParam &
  RequestParameters;

export interface LroRetrysPutAsyncRelativeRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LroRetrysPutAsyncRelativeRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LroRetrysPutAsyncRelativeRetrySucceededParameters = LroRetrysPutAsyncRelativeRetrySucceededMediaTypesParam &
  LroRetrysPutAsyncRelativeRetrySucceededBodyParam &
  RequestParameters;
export type LroRetrysDeleteProvisioning202Accepted200SucceededParameters = RequestParameters;
export type LroRetrysDelete202Retry200Parameters = RequestParameters;
export type LroRetrysDeleteAsyncRelativeRetrySucceededParameters = RequestParameters;

export interface LroRetrysPost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LroRetrysPost202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LroRetrysPost202Retry200Parameters = LroRetrysPost202Retry200MediaTypesParam &
  LroRetrysPost202Retry200BodyParam &
  RequestParameters;

export interface LroRetrysPostAsyncRelativeRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LroRetrysPostAsyncRelativeRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LroRetrysPostAsyncRelativeRetrySucceededParameters = LroRetrysPostAsyncRelativeRetrySucceededMediaTypesParam &
  LroRetrysPostAsyncRelativeRetrySucceededBodyParam &
  RequestParameters;

export interface LrosaDsPutNonRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPutNonRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPutNonRetry400Parameters = LrosaDsPutNonRetry400MediaTypesParam &
  LrosaDsPutNonRetry400BodyParam &
  RequestParameters;

export interface LrosaDsPutNonRetry201Creating400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPutNonRetry201Creating400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPutNonRetry201Creating400Parameters = LrosaDsPutNonRetry201Creating400MediaTypesParam &
  LrosaDsPutNonRetry201Creating400BodyParam &
  RequestParameters;

export interface LrosaDsPutNonRetry201Creating400InvalidJsonBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPutNonRetry201Creating400InvalidJsonMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPutNonRetry201Creating400InvalidJsonParameters = LrosaDsPutNonRetry201Creating400InvalidJsonMediaTypesParam &
  LrosaDsPutNonRetry201Creating400InvalidJsonBodyParam &
  RequestParameters;

export interface LrosaDsPutAsyncRelativeRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPutAsyncRelativeRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPutAsyncRelativeRetry400Parameters = LrosaDsPutAsyncRelativeRetry400MediaTypesParam &
  LrosaDsPutAsyncRelativeRetry400BodyParam &
  RequestParameters;
export type LrosaDsDeleteNonRetry400Parameters = RequestParameters;
export type LrosaDsDelete202NonRetry400Parameters = RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetry400Parameters = RequestParameters;

export interface LrosaDsPostNonRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPostNonRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPostNonRetry400Parameters = LrosaDsPostNonRetry400MediaTypesParam &
  LrosaDsPostNonRetry400BodyParam &
  RequestParameters;

export interface LrosaDsPost202NonRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPost202NonRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPost202NonRetry400Parameters = LrosaDsPost202NonRetry400MediaTypesParam &
  LrosaDsPost202NonRetry400BodyParam &
  RequestParameters;

export interface LrosaDsPostAsyncRelativeRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPostAsyncRelativeRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPostAsyncRelativeRetry400Parameters = LrosaDsPostAsyncRelativeRetry400MediaTypesParam &
  LrosaDsPostAsyncRelativeRetry400BodyParam &
  RequestParameters;

export interface LrosaDsPutError201NoProvisioningStatePayloadBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPutError201NoProvisioningStatePayloadMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPutError201NoProvisioningStatePayloadParameters = LrosaDsPutError201NoProvisioningStatePayloadMediaTypesParam &
  LrosaDsPutError201NoProvisioningStatePayloadBodyParam &
  RequestParameters;

export interface LrosaDsPutAsyncRelativeRetryNoStatusBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPutAsyncRelativeRetryNoStatusMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPutAsyncRelativeRetryNoStatusParameters = LrosaDsPutAsyncRelativeRetryNoStatusMediaTypesParam &
  LrosaDsPutAsyncRelativeRetryNoStatusBodyParam &
  RequestParameters;

export interface LrosaDsPutAsyncRelativeRetryNoStatusPayloadBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPutAsyncRelativeRetryNoStatusPayloadMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPutAsyncRelativeRetryNoStatusPayloadParameters = LrosaDsPutAsyncRelativeRetryNoStatusPayloadMediaTypesParam &
  LrosaDsPutAsyncRelativeRetryNoStatusPayloadBodyParam &
  RequestParameters;
export type LrosaDsDelete204SucceededParameters = RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetryNoStatusParameters = RequestParameters;

export interface LrosaDsPost202NoLocationBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPost202NoLocationMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPost202NoLocationParameters = LrosaDsPost202NoLocationMediaTypesParam &
  LrosaDsPost202NoLocationBodyParam &
  RequestParameters;

export interface LrosaDsPostAsyncRelativeRetryNoPayloadBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPostAsyncRelativeRetryNoPayloadMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPostAsyncRelativeRetryNoPayloadParameters = LrosaDsPostAsyncRelativeRetryNoPayloadMediaTypesParam &
  LrosaDsPostAsyncRelativeRetryNoPayloadBodyParam &
  RequestParameters;

export interface LrosaDsPut200InvalidJsonBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPut200InvalidJsonMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPut200InvalidJsonParameters = LrosaDsPut200InvalidJsonMediaTypesParam &
  LrosaDsPut200InvalidJsonBodyParam &
  RequestParameters;

export interface LrosaDsPutAsyncRelativeRetryInvalidHeaderBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPutAsyncRelativeRetryInvalidHeaderMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPutAsyncRelativeRetryInvalidHeaderParameters = LrosaDsPutAsyncRelativeRetryInvalidHeaderMediaTypesParam &
  LrosaDsPutAsyncRelativeRetryInvalidHeaderBodyParam &
  RequestParameters;

export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPollingBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPutAsyncRelativeRetryInvalidJsonPollingMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPutAsyncRelativeRetryInvalidJsonPollingParameters = LrosaDsPutAsyncRelativeRetryInvalidJsonPollingMediaTypesParam &
  LrosaDsPutAsyncRelativeRetryInvalidJsonPollingBodyParam &
  RequestParameters;
export type LrosaDsDelete202RetryInvalidHeaderParameters = RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetryInvalidHeaderParameters = RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingParameters = RequestParameters;

export interface LrosaDsPost202RetryInvalidHeaderBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPost202RetryInvalidHeaderMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPost202RetryInvalidHeaderParameters = LrosaDsPost202RetryInvalidHeaderMediaTypesParam &
  LrosaDsPost202RetryInvalidHeaderBodyParam &
  RequestParameters;

export interface LrosaDsPostAsyncRelativeRetryInvalidHeaderBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPostAsyncRelativeRetryInvalidHeaderMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPostAsyncRelativeRetryInvalidHeaderParameters = LrosaDsPostAsyncRelativeRetryInvalidHeaderMediaTypesParam &
  LrosaDsPostAsyncRelativeRetryInvalidHeaderBodyParam &
  RequestParameters;

export interface LrosaDsPostAsyncRelativeRetryInvalidJsonPollingBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPostAsyncRelativeRetryInvalidJsonPollingMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPostAsyncRelativeRetryInvalidJsonPollingParameters = LrosaDsPostAsyncRelativeRetryInvalidJsonPollingMediaTypesParam &
  LrosaDsPostAsyncRelativeRetryInvalidJsonPollingBodyParam &
  RequestParameters;

export interface LrOSCustomHeaderPutAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSCustomHeaderPutAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSCustomHeaderPutAsyncRetrySucceededParameters = LrOSCustomHeaderPutAsyncRetrySucceededMediaTypesParam &
  LrOSCustomHeaderPutAsyncRetrySucceededBodyParam &
  RequestParameters;

export interface LrOSCustomHeaderPut201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSCustomHeaderPut201CreatingSucceeded200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSCustomHeaderPut201CreatingSucceeded200Parameters = LrOSCustomHeaderPut201CreatingSucceeded200MediaTypesParam &
  LrOSCustomHeaderPut201CreatingSucceeded200BodyParam &
  RequestParameters;

export interface LrOSCustomHeaderPost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSCustomHeaderPost202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSCustomHeaderPost202Retry200Parameters = LrOSCustomHeaderPost202Retry200MediaTypesParam &
  LrOSCustomHeaderPost202Retry200BodyParam &
  RequestParameters;

export interface LrOSCustomHeaderPostAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrOSCustomHeaderPostAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrOSCustomHeaderPostAsyncRetrySucceededParameters = LrOSCustomHeaderPostAsyncRetrySucceededMediaTypesParam &
  LrOSCustomHeaderPostAsyncRetrySucceededBodyParam &
  RequestParameters;
