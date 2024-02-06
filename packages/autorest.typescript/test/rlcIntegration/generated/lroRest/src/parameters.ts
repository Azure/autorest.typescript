// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Product, Sku, SubProduct } from "./models";

export interface LROsPut200SucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPut200SucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPut200SucceededParameters = LROsPut200SucceededMediaTypesParam &
  LROsPut200SucceededBodyParam &
  RequestParameters;

export interface LROsPatch200SucceededIgnoreHeadersBodyParam {
  /** Product to patch */
  body?: Product;
}

export interface LROsPatch200SucceededIgnoreHeadersMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPatch200SucceededIgnoreHeadersParameters =
  LROsPatch200SucceededIgnoreHeadersMediaTypesParam &
    LROsPatch200SucceededIgnoreHeadersBodyParam &
    RequestParameters;

export interface LROsPatch201RetryWithAsyncHeaderBodyParam {
  /** Product to patch */
  body?: Product;
}

export interface LROsPatch201RetryWithAsyncHeaderMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPatch201RetryWithAsyncHeaderParameters =
  LROsPatch201RetryWithAsyncHeaderMediaTypesParam &
    LROsPatch201RetryWithAsyncHeaderBodyParam &
    RequestParameters;

export interface LROsPatch202RetryWithAsyncAndLocationHeaderBodyParam {
  /** Product to patch */
  body?: Product;
}

export interface LROsPatch202RetryWithAsyncAndLocationHeaderMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPatch202RetryWithAsyncAndLocationHeaderParameters =
  LROsPatch202RetryWithAsyncAndLocationHeaderMediaTypesParam &
    LROsPatch202RetryWithAsyncAndLocationHeaderBodyParam &
    RequestParameters;

export interface LROsPut201SucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPut201SucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPut201SucceededParameters = LROsPut201SucceededMediaTypesParam &
  LROsPut201SucceededBodyParam &
  RequestParameters;
export type LROsPost202ListParameters = RequestParameters;

export interface LROsPut200SucceededNoStateBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPut200SucceededNoStateMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPut200SucceededNoStateParameters =
  LROsPut200SucceededNoStateMediaTypesParam &
    LROsPut200SucceededNoStateBodyParam &
    RequestParameters;

export interface LROsPut202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPut202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPut202Retry200Parameters = LROsPut202Retry200MediaTypesParam &
  LROsPut202Retry200BodyParam &
  RequestParameters;

export interface LROsPut201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPut201CreatingSucceeded200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPut201CreatingSucceeded200Parameters =
  LROsPut201CreatingSucceeded200MediaTypesParam &
    LROsPut201CreatingSucceeded200BodyParam &
    RequestParameters;

export interface LROsPut200UpdatingSucceeded204BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPut200UpdatingSucceeded204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPut200UpdatingSucceeded204Parameters =
  LROsPut200UpdatingSucceeded204MediaTypesParam &
    LROsPut200UpdatingSucceeded204BodyParam &
    RequestParameters;

export interface LROsPut201CreatingFailed200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPut201CreatingFailed200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPut201CreatingFailed200Parameters =
  LROsPut201CreatingFailed200MediaTypesParam &
    LROsPut201CreatingFailed200BodyParam &
    RequestParameters;

export interface LROsPut200Acceptedcanceled200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPut200Acceptedcanceled200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPut200Acceptedcanceled200Parameters =
  LROsPut200Acceptedcanceled200MediaTypesParam &
    LROsPut200Acceptedcanceled200BodyParam &
    RequestParameters;

export interface LROsPutNoHeaderInRetryBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPutNoHeaderInRetryMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPutNoHeaderInRetryParameters =
  LROsPutNoHeaderInRetryMediaTypesParam &
    LROsPutNoHeaderInRetryBodyParam &
    RequestParameters;

export interface LROsPutAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPutAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPutAsyncRetrySucceededParameters =
  LROsPutAsyncRetrySucceededMediaTypesParam &
    LROsPutAsyncRetrySucceededBodyParam &
    RequestParameters;

export interface LROsPutAsyncNoRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPutAsyncNoRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPutAsyncNoRetrySucceededParameters =
  LROsPutAsyncNoRetrySucceededMediaTypesParam &
    LROsPutAsyncNoRetrySucceededBodyParam &
    RequestParameters;

export interface LROsPutAsyncRetryFailedBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPutAsyncRetryFailedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPutAsyncRetryFailedParameters =
  LROsPutAsyncRetryFailedMediaTypesParam &
    LROsPutAsyncRetryFailedBodyParam &
    RequestParameters;

export interface LROsPutAsyncNoRetrycanceledBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPutAsyncNoRetrycanceledMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPutAsyncNoRetrycanceledParameters =
  LROsPutAsyncNoRetrycanceledMediaTypesParam &
    LROsPutAsyncNoRetrycanceledBodyParam &
    RequestParameters;

export interface LROsPutAsyncNoHeaderInRetryBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPutAsyncNoHeaderInRetryMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPutAsyncNoHeaderInRetryParameters =
  LROsPutAsyncNoHeaderInRetryMediaTypesParam &
    LROsPutAsyncNoHeaderInRetryBodyParam &
    RequestParameters;

export interface LROsPutNonResourceBodyParam {
  /** sku to put */
  body?: Sku;
}

export interface LROsPutNonResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPutNonResourceParameters = LROsPutNonResourceMediaTypesParam &
  LROsPutNonResourceBodyParam &
  RequestParameters;

export interface LROsPutAsyncNonResourceBodyParam {
  /** Sku to put */
  body?: Sku;
}

export interface LROsPutAsyncNonResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPutAsyncNonResourceParameters =
  LROsPutAsyncNonResourceMediaTypesParam &
    LROsPutAsyncNonResourceBodyParam &
    RequestParameters;

export interface LROsPutSubResourceBodyParam {
  /** Sub Product to put */
  body?: SubProduct;
}

export interface LROsPutSubResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPutSubResourceParameters = LROsPutSubResourceMediaTypesParam &
  LROsPutSubResourceBodyParam &
  RequestParameters;

export interface LROsPutAsyncSubResourceBodyParam {
  /** Sub Product to put */
  body?: SubProduct;
}

export interface LROsPutAsyncSubResourceMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPutAsyncSubResourceParameters =
  LROsPutAsyncSubResourceMediaTypesParam &
    LROsPutAsyncSubResourceBodyParam &
    RequestParameters;
export type LROsDeleteProvisioning202Accepted200SucceededParameters =
  RequestParameters;
export type LROsDeleteProvisioning202DeletingFailed200Parameters =
  RequestParameters;
export type LROsDeleteProvisioning202Deletingcanceled200Parameters =
  RequestParameters;
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

export interface LROsPost202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPost202Retry200Parameters = LROsPost202Retry200MediaTypesParam &
  LROsPost202Retry200BodyParam &
  RequestParameters;

export interface LROsPost202NoRetry204BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPost202NoRetry204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPost202NoRetry204Parameters =
  LROsPost202NoRetry204MediaTypesParam &
    LROsPost202NoRetry204BodyParam &
    RequestParameters;
export type LROsPostDoubleHeadersFinalLocationGetParameters = RequestParameters;
export type LROsPostDoubleHeadersFinalAzureHeaderGetParameters =
  RequestParameters;
export type LROsPostDoubleHeadersFinalAzureHeaderGetDefaultParameters =
  RequestParameters;

export interface LROsPostAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPostAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPostAsyncRetrySucceededParameters =
  LROsPostAsyncRetrySucceededMediaTypesParam &
    LROsPostAsyncRetrySucceededBodyParam &
    RequestParameters;

export interface LROsPostAsyncNoRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPostAsyncNoRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPostAsyncNoRetrySucceededParameters =
  LROsPostAsyncNoRetrySucceededMediaTypesParam &
    LROsPostAsyncNoRetrySucceededBodyParam &
    RequestParameters;

export interface LROsPostAsyncRetryFailedBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPostAsyncRetryFailedMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPostAsyncRetryFailedParameters =
  LROsPostAsyncRetryFailedMediaTypesParam &
    LROsPostAsyncRetryFailedBodyParam &
    RequestParameters;

export interface LROsPostAsyncRetrycanceledBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsPostAsyncRetrycanceledMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsPostAsyncRetrycanceledParameters =
  LROsPostAsyncRetrycanceledMediaTypesParam &
    LROsPostAsyncRetrycanceledBodyParam &
    RequestParameters;

export interface LRORetrysPut201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LRORetrysPut201CreatingSucceeded200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LRORetrysPut201CreatingSucceeded200Parameters =
  LRORetrysPut201CreatingSucceeded200MediaTypesParam &
    LRORetrysPut201CreatingSucceeded200BodyParam &
    RequestParameters;

export interface LRORetrysPutAsyncRelativeRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LRORetrysPutAsyncRelativeRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LRORetrysPutAsyncRelativeRetrySucceededParameters =
  LRORetrysPutAsyncRelativeRetrySucceededMediaTypesParam &
    LRORetrysPutAsyncRelativeRetrySucceededBodyParam &
    RequestParameters;
export type LRORetrysDeleteProvisioning202Accepted200SucceededParameters =
  RequestParameters;
export type LRORetrysDelete202Retry200Parameters = RequestParameters;
export type LRORetrysDeleteAsyncRelativeRetrySucceededParameters =
  RequestParameters;

export interface LRORetrysPost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LRORetrysPost202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LRORetrysPost202Retry200Parameters =
  LRORetrysPost202Retry200MediaTypesParam &
    LRORetrysPost202Retry200BodyParam &
    RequestParameters;

export interface LRORetrysPostAsyncRelativeRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LRORetrysPostAsyncRelativeRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LRORetrysPostAsyncRelativeRetrySucceededParameters =
  LRORetrysPostAsyncRelativeRetrySucceededMediaTypesParam &
    LRORetrysPostAsyncRelativeRetrySucceededBodyParam &
    RequestParameters;

export interface LrosaDsPutNonRetry400BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPutNonRetry400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPutNonRetry400Parameters =
  LrosaDsPutNonRetry400MediaTypesParam &
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

export type LrosaDsPutNonRetry201Creating400Parameters =
  LrosaDsPutNonRetry201Creating400MediaTypesParam &
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

export type LrosaDsPutNonRetry201Creating400InvalidJsonParameters =
  LrosaDsPutNonRetry201Creating400InvalidJsonMediaTypesParam &
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

export type LrosaDsPutAsyncRelativeRetry400Parameters =
  LrosaDsPutAsyncRelativeRetry400MediaTypesParam &
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

export type LrosaDsPostNonRetry400Parameters =
  LrosaDsPostNonRetry400MediaTypesParam &
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

export type LrosaDsPost202NonRetry400Parameters =
  LrosaDsPost202NonRetry400MediaTypesParam &
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

export type LrosaDsPostAsyncRelativeRetry400Parameters =
  LrosaDsPostAsyncRelativeRetry400MediaTypesParam &
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

export type LrosaDsPutError201NoProvisioningStatePayloadParameters =
  LrosaDsPutError201NoProvisioningStatePayloadMediaTypesParam &
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

export type LrosaDsPutAsyncRelativeRetryNoStatusParameters =
  LrosaDsPutAsyncRelativeRetryNoStatusMediaTypesParam &
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

export type LrosaDsPutAsyncRelativeRetryNoStatusPayloadParameters =
  LrosaDsPutAsyncRelativeRetryNoStatusPayloadMediaTypesParam &
    LrosaDsPutAsyncRelativeRetryNoStatusPayloadBodyParam &
    RequestParameters;
export type LrosaDsDelete204SucceededParameters = RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetryNoStatusParameters =
  RequestParameters;

export interface LrosaDsPost202NoLocationBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPost202NoLocationMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPost202NoLocationParameters =
  LrosaDsPost202NoLocationMediaTypesParam &
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

export type LrosaDsPostAsyncRelativeRetryNoPayloadParameters =
  LrosaDsPostAsyncRelativeRetryNoPayloadMediaTypesParam &
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

export type LrosaDsPut200InvalidJsonParameters =
  LrosaDsPut200InvalidJsonMediaTypesParam &
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

export type LrosaDsPutAsyncRelativeRetryInvalidHeaderParameters =
  LrosaDsPutAsyncRelativeRetryInvalidHeaderMediaTypesParam &
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

export type LrosaDsPutAsyncRelativeRetryInvalidJsonPollingParameters =
  LrosaDsPutAsyncRelativeRetryInvalidJsonPollingMediaTypesParam &
    LrosaDsPutAsyncRelativeRetryInvalidJsonPollingBodyParam &
    RequestParameters;
export type LrosaDsDelete202RetryInvalidHeaderParameters = RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetryInvalidHeaderParameters =
  RequestParameters;
export type LrosaDsDeleteAsyncRelativeRetryInvalidJsonPollingParameters =
  RequestParameters;

export interface LrosaDsPost202RetryInvalidHeaderBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LrosaDsPost202RetryInvalidHeaderMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LrosaDsPost202RetryInvalidHeaderParameters =
  LrosaDsPost202RetryInvalidHeaderMediaTypesParam &
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

export type LrosaDsPostAsyncRelativeRetryInvalidHeaderParameters =
  LrosaDsPostAsyncRelativeRetryInvalidHeaderMediaTypesParam &
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

export type LrosaDsPostAsyncRelativeRetryInvalidJsonPollingParameters =
  LrosaDsPostAsyncRelativeRetryInvalidJsonPollingMediaTypesParam &
    LrosaDsPostAsyncRelativeRetryInvalidJsonPollingBodyParam &
    RequestParameters;

export interface LROsCustomHeaderPutAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsCustomHeaderPutAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsCustomHeaderPutAsyncRetrySucceededParameters =
  LROsCustomHeaderPutAsyncRetrySucceededMediaTypesParam &
    LROsCustomHeaderPutAsyncRetrySucceededBodyParam &
    RequestParameters;

export interface LROsCustomHeaderPut201CreatingSucceeded200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsCustomHeaderPut201CreatingSucceeded200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsCustomHeaderPut201CreatingSucceeded200Parameters =
  LROsCustomHeaderPut201CreatingSucceeded200MediaTypesParam &
    LROsCustomHeaderPut201CreatingSucceeded200BodyParam &
    RequestParameters;

export interface LROsCustomHeaderPost202Retry200BodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsCustomHeaderPost202Retry200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsCustomHeaderPost202Retry200Parameters =
  LROsCustomHeaderPost202Retry200MediaTypesParam &
    LROsCustomHeaderPost202Retry200BodyParam &
    RequestParameters;

export interface LROsCustomHeaderPostAsyncRetrySucceededBodyParam {
  /** Product to put */
  body?: Product;
}

export interface LROsCustomHeaderPostAsyncRetrySucceededMediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type LROsCustomHeaderPostAsyncRetrySucceededParameters =
  LROsCustomHeaderPostAsyncRetrySucceededMediaTypesParam &
    LROsCustomHeaderPostAsyncRetrySucceededBodyParam &
    RequestParameters;
