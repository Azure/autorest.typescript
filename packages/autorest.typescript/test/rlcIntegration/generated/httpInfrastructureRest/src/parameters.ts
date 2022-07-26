// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";

export type HttpFailureGetEmptyErrorParameters = RequestParameters;
export type HttpFailureGetNoModelErrorParameters = RequestParameters;
export type HttpFailureGetNoModelEmptyParameters = RequestParameters;
export type HttpSuccessHead200Parameters = RequestParameters;
export type HttpSuccessGet200Parameters = RequestParameters;
export type HttpSuccessOptions200Parameters = RequestParameters;

export interface HttpSuccessPut200BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPut200MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPut200Parameters = HttpSuccessPut200MediaTypesParam &
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

export type HttpSuccessPatch200Parameters = HttpSuccessPatch200MediaTypesParam &
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

export type HttpSuccessPost200Parameters = HttpSuccessPost200MediaTypesParam &
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

export type HttpSuccessDelete200Parameters = HttpSuccessDelete200MediaTypesParam &
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

export type HttpSuccessPut201Parameters = HttpSuccessPut201MediaTypesParam &
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

export type HttpSuccessPost201Parameters = HttpSuccessPost201MediaTypesParam &
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

export type HttpSuccessPut202Parameters = HttpSuccessPut202MediaTypesParam &
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

export type HttpSuccessPatch202Parameters = HttpSuccessPatch202MediaTypesParam &
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

export type HttpSuccessPost202Parameters = HttpSuccessPost202MediaTypesParam &
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

export type HttpSuccessDelete202Parameters = HttpSuccessDelete202MediaTypesParam &
  HttpSuccessDelete202BodyParam &
  RequestParameters;
export type HttpSuccessHead204Parameters = RequestParameters;

export interface HttpSuccessPut204BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpSuccessPut204MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpSuccessPut204Parameters = HttpSuccessPut204MediaTypesParam &
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

export type HttpSuccessPatch204Parameters = HttpSuccessPatch204MediaTypesParam &
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

export type HttpSuccessPost204Parameters = HttpSuccessPost204MediaTypesParam &
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

export type HttpSuccessDelete204Parameters = HttpSuccessDelete204MediaTypesParam &
  HttpSuccessDelete204BodyParam &
  RequestParameters;
export type HttpSuccessHead404Parameters = RequestParameters;
export type HttpRedirectsHead300Parameters = RequestParameters;
export type HttpRedirectsGet300Parameters = RequestParameters;
export type HttpRedirectsHead301Parameters = RequestParameters;
export type HttpRedirectsGet301Parameters = RequestParameters;

export interface HttpRedirectsPut301BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRedirectsPut301MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRedirectsPut301Parameters = HttpRedirectsPut301MediaTypesParam &
  HttpRedirectsPut301BodyParam &
  RequestParameters;
export type HttpRedirectsHead302Parameters = RequestParameters;
export type HttpRedirectsGet302Parameters = RequestParameters;

export interface HttpRedirectsPatch302BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRedirectsPatch302MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRedirectsPatch302Parameters = HttpRedirectsPatch302MediaTypesParam &
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

export type HttpRedirectsPost303Parameters = HttpRedirectsPost303MediaTypesParam &
  HttpRedirectsPost303BodyParam &
  RequestParameters;
export type HttpRedirectsHead307Parameters = RequestParameters;
export type HttpRedirectsGet307Parameters = RequestParameters;
export type HttpRedirectsOptions307Parameters = RequestParameters;

export interface HttpRedirectsPut307BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRedirectsPut307MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRedirectsPut307Parameters = HttpRedirectsPut307MediaTypesParam &
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

export type HttpRedirectsPatch307Parameters = HttpRedirectsPatch307MediaTypesParam &
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

export type HttpRedirectsPost307Parameters = HttpRedirectsPost307MediaTypesParam &
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

export type HttpRedirectsDelete307Parameters = HttpRedirectsDelete307MediaTypesParam &
  HttpRedirectsDelete307BodyParam &
  RequestParameters;
export type HttpClientFailureHead400Parameters = RequestParameters;
export type HttpClientFailureGet400Parameters = RequestParameters;
export type HttpClientFailureOptions400Parameters = RequestParameters;

export interface HttpClientFailurePut400BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePut400MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePut400Parameters = HttpClientFailurePut400MediaTypesParam &
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

export type HttpClientFailurePatch400Parameters = HttpClientFailurePatch400MediaTypesParam &
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

export type HttpClientFailurePost400Parameters = HttpClientFailurePost400MediaTypesParam &
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

export type HttpClientFailureDelete400Parameters = HttpClientFailureDelete400MediaTypesParam &
  HttpClientFailureDelete400BodyParam &
  RequestParameters;
export type HttpClientFailureHead401Parameters = RequestParameters;
export type HttpClientFailureGet402Parameters = RequestParameters;
export type HttpClientFailureOptions403Parameters = RequestParameters;
export type HttpClientFailureGet403Parameters = RequestParameters;

export interface HttpClientFailurePut404BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePut404MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePut404Parameters = HttpClientFailurePut404MediaTypesParam &
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

export type HttpClientFailurePatch405Parameters = HttpClientFailurePatch405MediaTypesParam &
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

export type HttpClientFailurePost406Parameters = HttpClientFailurePost406MediaTypesParam &
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

export type HttpClientFailureDelete407Parameters = HttpClientFailureDelete407MediaTypesParam &
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

export type HttpClientFailurePut409Parameters = HttpClientFailurePut409MediaTypesParam &
  HttpClientFailurePut409BodyParam &
  RequestParameters;
export type HttpClientFailureHead410Parameters = RequestParameters;
export type HttpClientFailureGet411Parameters = RequestParameters;
export type HttpClientFailureOptions412Parameters = RequestParameters;
export type HttpClientFailureGet412Parameters = RequestParameters;

export interface HttpClientFailurePut413BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailurePut413MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailurePut413Parameters = HttpClientFailurePut413MediaTypesParam &
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

export type HttpClientFailurePatch414Parameters = HttpClientFailurePatch414MediaTypesParam &
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

export type HttpClientFailurePost415Parameters = HttpClientFailurePost415MediaTypesParam &
  HttpClientFailurePost415BodyParam &
  RequestParameters;
export type HttpClientFailureGet416Parameters = RequestParameters;

export interface HttpClientFailureDelete417BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpClientFailureDelete417MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpClientFailureDelete417Parameters = HttpClientFailureDelete417MediaTypesParam &
  HttpClientFailureDelete417BodyParam &
  RequestParameters;
export type HttpClientFailureHead429Parameters = RequestParameters;
export type HttpServerFailureHead501Parameters = RequestParameters;
export type HttpServerFailureGet501Parameters = RequestParameters;

export interface HttpServerFailurePost505BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpServerFailurePost505MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpServerFailurePost505Parameters = HttpServerFailurePost505MediaTypesParam &
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

export type HttpServerFailureDelete505Parameters = HttpServerFailureDelete505MediaTypesParam &
  HttpServerFailureDelete505BodyParam &
  RequestParameters;
export type HttpRetryHead408Parameters = RequestParameters;

export interface HttpRetryPut500BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRetryPut500MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRetryPut500Parameters = HttpRetryPut500MediaTypesParam &
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

export type HttpRetryPatch500Parameters = HttpRetryPatch500MediaTypesParam &
  HttpRetryPatch500BodyParam &
  RequestParameters;
export type HttpRetryGet502Parameters = RequestParameters;
export type HttpRetryOptions502Parameters = RequestParameters;

export interface HttpRetryPost503BodyParam {
  /** Simple boolean value true */
  body?: true;
}

export interface HttpRetryPost503MediaTypesParam {
  /** Request content type */
  contentType?: "application/json";
}

export type HttpRetryPost503Parameters = HttpRetryPost503MediaTypesParam &
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

export type HttpRetryDelete503Parameters = HttpRetryDelete503MediaTypesParam &
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

export type HttpRetryPut504Parameters = HttpRetryPut504MediaTypesParam &
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

export type HttpRetryPatch504Parameters = HttpRetryPatch504MediaTypesParam &
  HttpRetryPatch504BodyParam &
  RequestParameters;
export type MultipleResponsesGet200Model204NoModelDefaultError200ValidParameters = RequestParameters;
export type MultipleResponsesGet200Model204NoModelDefaultError204ValidParameters = RequestParameters;
export type MultipleResponsesGet200Model204NoModelDefaultError201InvalidParameters = RequestParameters;
export type MultipleResponsesGet200Model204NoModelDefaultError202NoneParameters = RequestParameters;
export type MultipleResponsesGet200Model204NoModelDefaultError400ValidParameters = RequestParameters;
export type MultipleResponsesGet200Model201ModelDefaultError200ValidParameters = RequestParameters;
export type MultipleResponsesGet200Model201ModelDefaultError201ValidParameters = RequestParameters;
export type MultipleResponsesGet200Model201ModelDefaultError400ValidParameters = RequestParameters;
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidParameters = RequestParameters;
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidParameters = RequestParameters;
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidParameters = RequestParameters;
export type MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidParameters = RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultError202NoneParameters = RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultError204NoneParameters = RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultError400ValidParameters = RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultNone202InvalidParameters = RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultNone204NoneParameters = RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultNone400NoneParameters = RequestParameters;
export type MultipleResponsesGet202None204NoneDefaultNone400InvalidParameters = RequestParameters;
export type MultipleResponsesGetDefaultModelA200ValidParameters = RequestParameters;
export type MultipleResponsesGetDefaultModelA200NoneParameters = RequestParameters;
export type MultipleResponsesGetDefaultModelA400ValidParameters = RequestParameters;
export type MultipleResponsesGetDefaultModelA400NoneParameters = RequestParameters;
export type MultipleResponsesGetDefaultNone200InvalidParameters = RequestParameters;
export type MultipleResponsesGetDefaultNone200NoneParameters = RequestParameters;
export type MultipleResponsesGetDefaultNone400InvalidParameters = RequestParameters;
export type MultipleResponsesGetDefaultNone400NoneParameters = RequestParameters;
export type MultipleResponsesGet200ModelA200NoneParameters = RequestParameters;
export type MultipleResponsesGet200ModelA200ValidParameters = RequestParameters;
export type MultipleResponsesGet200ModelA200InvalidParameters = RequestParameters;
export type MultipleResponsesGet200ModelA400NoneParameters = RequestParameters;
export type MultipleResponsesGet200ModelA400ValidParameters = RequestParameters;
export type MultipleResponsesGet200ModelA400InvalidParameters = RequestParameters;
export type MultipleResponsesGet200ModelA202ValidParameters = RequestParameters;
