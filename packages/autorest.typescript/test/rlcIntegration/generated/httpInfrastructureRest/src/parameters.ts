// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";

export type HttpFailureGetEmptyErrorParameters = RequestParameters;
export type HttpFailureGetNoModelErrorParameters = RequestParameters;
export type HttpFailureGetNoModelEmptyParameters = RequestParameters;
export type HttpSuccessHead200_Parameters = RequestParameters;
export type HttpSuccessGet200_Parameters = RequestParameters;
export type HttpSuccessOptions200_Parameters = RequestParameters;

export interface HttpSuccessPut200BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPut200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPut200_Parameters = HttpSuccessPut200MediaTypesParam &
  HttpSuccessPut200BodyParam &
  RequestParameters;

export interface HttpSuccessPatch200BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPatch200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPatch200_Parameters =
  HttpSuccessPatch200MediaTypesParam &
    HttpSuccessPatch200BodyParam &
    RequestParameters;

export interface HttpSuccessPost200BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPost200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPost200_Parameters = HttpSuccessPost200MediaTypesParam &
  HttpSuccessPost200BodyParam &
  RequestParameters;

export interface HttpSuccessDelete200BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessDelete200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessDelete200_Parameters =
  HttpSuccessDelete200MediaTypesParam &
    HttpSuccessDelete200BodyParam &
    RequestParameters;

export interface HttpSuccessPut201BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPut201MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPut201_Parameters = HttpSuccessPut201MediaTypesParam &
  HttpSuccessPut201BodyParam &
  RequestParameters;

export interface HttpSuccessPost201BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPost201MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPost201_Parameters = HttpSuccessPost201MediaTypesParam &
  HttpSuccessPost201BodyParam &
  RequestParameters;

export interface HttpSuccessPut202BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPut202MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPut202_Parameters = HttpSuccessPut202MediaTypesParam &
  HttpSuccessPut202BodyParam &
  RequestParameters;

export interface HttpSuccessPatch202BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPatch202MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPatch202_Parameters =
  HttpSuccessPatch202MediaTypesParam &
    HttpSuccessPatch202BodyParam &
    RequestParameters;

export interface HttpSuccessPost202BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPost202MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPost202_Parameters = HttpSuccessPost202MediaTypesParam &
  HttpSuccessPost202BodyParam &
  RequestParameters;

export interface HttpSuccessDelete202BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessDelete202MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessDelete202_Parameters =
  HttpSuccessDelete202MediaTypesParam &
    HttpSuccessDelete202BodyParam &
    RequestParameters;
export type HttpSuccessHead204_Parameters = RequestParameters;

export interface HttpSuccessPut204BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPut204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPut204_Parameters = HttpSuccessPut204MediaTypesParam &
  HttpSuccessPut204BodyParam &
  RequestParameters;

export interface HttpSuccessPatch204BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPatch204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPatch204_Parameters =
  HttpSuccessPatch204MediaTypesParam &
    HttpSuccessPatch204BodyParam &
    RequestParameters;

export interface HttpSuccessPost204BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPost204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPost204_Parameters = HttpSuccessPost204MediaTypesParam &
  HttpSuccessPost204BodyParam &
  RequestParameters;

export interface HttpSuccessDelete204BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessDelete204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessDelete204_Parameters =
  HttpSuccessDelete204MediaTypesParam &
    HttpSuccessDelete204BodyParam &
    RequestParameters;
export type HttpSuccessHead404_Parameters = RequestParameters;
export type HttpRedirectsHead300_Parameters = RequestParameters;
export type HttpRedirectsGet300_Parameters = RequestParameters;
export type HttpRedirectsHead301_Parameters = RequestParameters;
export type HttpRedirectsGet301_Parameters = RequestParameters;

export interface HttpRedirectsPut301BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRedirectsPut301MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRedirectsPut301_Parameters =
  HttpRedirectsPut301MediaTypesParam &
    HttpRedirectsPut301BodyParam &
    RequestParameters;
export type HttpRedirectsHead302_Parameters = RequestParameters;
export type HttpRedirectsGet302_Parameters = RequestParameters;

export interface HttpRedirectsPatch302BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRedirectsPatch302MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRedirectsPatch302_Parameters =
  HttpRedirectsPatch302MediaTypesParam &
    HttpRedirectsPatch302BodyParam &
    RequestParameters;

export interface HttpRedirectsPost303BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRedirectsPost303MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRedirectsPost303_Parameters =
  HttpRedirectsPost303MediaTypesParam &
    HttpRedirectsPost303BodyParam &
    RequestParameters;
export type HttpRedirectsHead307_Parameters = RequestParameters;
export type HttpRedirectsGet307_Parameters = RequestParameters;
export type HttpRedirectsOptions307_Parameters = RequestParameters;

export interface HttpRedirectsPut307BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRedirectsPut307MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRedirectsPut307_Parameters =
  HttpRedirectsPut307MediaTypesParam &
    HttpRedirectsPut307BodyParam &
    RequestParameters;

export interface HttpRedirectsPatch307BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRedirectsPatch307MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRedirectsPatch307_Parameters =
  HttpRedirectsPatch307MediaTypesParam &
    HttpRedirectsPatch307BodyParam &
    RequestParameters;

export interface HttpRedirectsPost307BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRedirectsPost307MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRedirectsPost307_Parameters =
  HttpRedirectsPost307MediaTypesParam &
    HttpRedirectsPost307BodyParam &
    RequestParameters;

export interface HttpRedirectsDelete307BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRedirectsDelete307MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRedirectsDelete307_Parameters =
  HttpRedirectsDelete307MediaTypesParam &
    HttpRedirectsDelete307BodyParam &
    RequestParameters;
export type HttpClientFailureHead400_Parameters = RequestParameters;
export type HttpClientFailureGet400_Parameters = RequestParameters;
export type HttpClientFailureOptions400_Parameters = RequestParameters;

export interface HttpClientFailurePut400BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePut400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePut400_Parameters =
  HttpClientFailurePut400MediaTypesParam &
    HttpClientFailurePut400BodyParam &
    RequestParameters;

export interface HttpClientFailurePatch400BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePatch400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePatch400_Parameters =
  HttpClientFailurePatch400MediaTypesParam &
    HttpClientFailurePatch400BodyParam &
    RequestParameters;

export interface HttpClientFailurePost400BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePost400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePost400_Parameters =
  HttpClientFailurePost400MediaTypesParam &
    HttpClientFailurePost400BodyParam &
    RequestParameters;

export interface HttpClientFailureDelete400BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailureDelete400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailureDelete400_Parameters =
  HttpClientFailureDelete400MediaTypesParam &
    HttpClientFailureDelete400BodyParam &
    RequestParameters;
export type HttpClientFailureHead401_Parameters = RequestParameters;
export type HttpClientFailureGet402_Parameters = RequestParameters;
export type HttpClientFailureOptions403_Parameters = RequestParameters;
export type HttpClientFailureGet403_Parameters = RequestParameters;

export interface HttpClientFailurePut404BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePut404MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePut404_Parameters =
  HttpClientFailurePut404MediaTypesParam &
    HttpClientFailurePut404BodyParam &
    RequestParameters;

export interface HttpClientFailurePatch405BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePatch405MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePatch405_Parameters =
  HttpClientFailurePatch405MediaTypesParam &
    HttpClientFailurePatch405BodyParam &
    RequestParameters;

export interface HttpClientFailurePost406BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePost406MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePost406_Parameters =
  HttpClientFailurePost406MediaTypesParam &
    HttpClientFailurePost406BodyParam &
    RequestParameters;

export interface HttpClientFailureDelete407BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailureDelete407MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailureDelete407_Parameters =
  HttpClientFailureDelete407MediaTypesParam &
    HttpClientFailureDelete407BodyParam &
    RequestParameters;

export interface HttpClientFailurePut409BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePut409MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePut409_Parameters =
  HttpClientFailurePut409MediaTypesParam &
    HttpClientFailurePut409BodyParam &
    RequestParameters;
export type HttpClientFailureHead410_Parameters = RequestParameters;
export type HttpClientFailureGet411_Parameters = RequestParameters;
export type HttpClientFailureOptions412_Parameters = RequestParameters;
export type HttpClientFailureGet412_Parameters = RequestParameters;

export interface HttpClientFailurePut413BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePut413MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePut413_Parameters =
  HttpClientFailurePut413MediaTypesParam &
    HttpClientFailurePut413BodyParam &
    RequestParameters;

export interface HttpClientFailurePatch414BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePatch414MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePatch414_Parameters =
  HttpClientFailurePatch414MediaTypesParam &
    HttpClientFailurePatch414BodyParam &
    RequestParameters;

export interface HttpClientFailurePost415BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePost415MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePost415_Parameters =
  HttpClientFailurePost415MediaTypesParam &
    HttpClientFailurePost415BodyParam &
    RequestParameters;
export type HttpClientFailureGet416_Parameters = RequestParameters;

export interface HttpClientFailureDelete417BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailureDelete417MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailureDelete417_Parameters =
  HttpClientFailureDelete417MediaTypesParam &
    HttpClientFailureDelete417BodyParam &
    RequestParameters;
export type HttpClientFailureHead429_Parameters = RequestParameters;
export type HttpServerFailureHead501_Parameters = RequestParameters;
export type HttpServerFailureGet501_Parameters = RequestParameters;

export interface HttpServerFailurePost505BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpServerFailurePost505MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpServerFailurePost505_Parameters =
  HttpServerFailurePost505MediaTypesParam &
    HttpServerFailurePost505BodyParam &
    RequestParameters;

export interface HttpServerFailureDelete505BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpServerFailureDelete505MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpServerFailureDelete505_Parameters =
  HttpServerFailureDelete505MediaTypesParam &
    HttpServerFailureDelete505BodyParam &
    RequestParameters;
export type HttpRetryHead408_Parameters = RequestParameters;

export interface HttpRetryPut500BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRetryPut500MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRetryPut500_Parameters = HttpRetryPut500MediaTypesParam &
  HttpRetryPut500BodyParam &
  RequestParameters;

export interface HttpRetryPatch500BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRetryPatch500MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRetryPatch500_Parameters = HttpRetryPatch500MediaTypesParam &
  HttpRetryPatch500BodyParam &
  RequestParameters;
export type HttpRetryGet502_Parameters = RequestParameters;
export type HttpRetryOptions502_Parameters = RequestParameters;

export interface HttpRetryPost503BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRetryPost503MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRetryPost503_Parameters = HttpRetryPost503MediaTypesParam &
  HttpRetryPost503BodyParam &
  RequestParameters;

export interface HttpRetryDelete503BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRetryDelete503MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRetryDelete503_Parameters = HttpRetryDelete503MediaTypesParam &
  HttpRetryDelete503BodyParam &
  RequestParameters;

export interface HttpRetryPut504BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRetryPut504MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRetryPut504_Parameters = HttpRetryPut504MediaTypesParam &
  HttpRetryPut504BodyParam &
  RequestParameters;

export interface HttpRetryPatch504BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRetryPatch504MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRetryPatch504_Parameters = HttpRetryPatch504MediaTypesParam &
  HttpRetryPatch504BodyParam &
  RequestParameters;
export type MultipleResponsesGet200Model204NoModelDefaultError200ValidParameters =
  RequestParameters;
export type MultipleResponsesGet200Model204NoModelDefaultError204ValidParameters =
  RequestParameters;
export type MultipleResponsesGet200Model204NoModelDefaultError201InvalidParameters =
  RequestParameters;
export type MultipleResponsesGet200Model204NoModelDefaultError202NoneParameters =
  RequestParameters;
export type MultipleResponsesGet200Model204NoModelDefaultError400ValidParameters =
  RequestParameters;
export type MultipleResponsesGet200Model201ModelDefaultError200ValidParameters =
  RequestParameters;
export type MultipleResponsesGet200Model201ModelDefaultError201ValidParameters =
  RequestParameters;
export type MultipleResponsesGet200Model201ModelDefaultError400ValidParameters =
  RequestParameters;
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidParameters =
  RequestParameters;
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidParameters =
  RequestParameters;
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidParameters =
  RequestParameters;
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidParameters =
  RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultError202NoneParameters =
  RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultError204NoneParameters =
  RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultError400ValidParameters =
  RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultNone202InvalidParameters =
  RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultNone204NoneParameters =
  RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultNone400NoneParameters =
  RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultNone400InvalidParameters =
  RequestParameters;
export type MultipleResponsesGetDefaultModelA200ValidParameters =
  RequestParameters;
export type MultipleResponsesGetDefaultModelA200NoneParameters =
  RequestParameters;
export type MultipleResponsesGetDefaultModelA400ValidParameters =
  RequestParameters;
export type MultipleResponsesGetDefaultModelA400NoneParameters =
  RequestParameters;
export type MultipleResponsesGetDefaultNone200InvalidParameters =
  RequestParameters;
export type MultipleResponsesGetDefaultNone200NoneParameters =
  RequestParameters;
export type MultipleResponsesGetDefaultNone400InvalidParameters =
  RequestParameters;
export type MultipleResponsesGetDefaultNone400NoneParameters =
  RequestParameters;
export type MultipleResponsesGet200ModelA200NoneParameters = RequestParameters;
export type MultipleResponsesGet200ModelA200ValidParameters = RequestParameters;
export type MultipleResponsesGet200ModelA200InvalidParameters =
  RequestParameters;
export type MultipleResponsesGet200ModelA400NoneParameters = RequestParameters;
export type MultipleResponsesGet200ModelA400ValidParameters = RequestParameters;
export type MultipleResponsesGet200ModelA400InvalidParameters =
  RequestParameters;
export type MultipleResponsesGet200ModelA202ValidParameters = RequestParameters;
