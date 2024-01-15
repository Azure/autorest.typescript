// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  HttpFailureGetEmptyError200Response,
  HttpFailureGetEmptyErrorDefaultResponse,
  HttpSuccessHead200200Response,
  HttpSuccessHead200DefaultResponse,
  HttpSuccessGet200200Response,
  HttpSuccessGet200DefaultResponse,
  HttpSuccessOptions200200Response,
  HttpSuccessOptions200DefaultResponse,
  HttpSuccessPut200200Response,
  HttpSuccessPut200DefaultResponse,
  HttpSuccessPatch200200Response,
  HttpSuccessPatch200DefaultResponse,
  HttpSuccessPost200200Response,
  HttpSuccessPost200DefaultResponse,
  HttpSuccessDelete200200Response,
  HttpSuccessDelete200DefaultResponse,
  HttpSuccessPut201201Response,
  HttpSuccessPut201DefaultResponse,
  HttpSuccessPost201201Response,
  HttpSuccessPost201DefaultResponse,
  HttpSuccessPut202202Response,
  HttpSuccessPut202DefaultResponse,
  HttpSuccessPatch202202Response,
  HttpSuccessPatch202DefaultResponse,
  HttpSuccessPost202202Response,
  HttpSuccessPost202DefaultResponse,
  HttpSuccessDelete202202Response,
  HttpSuccessDelete202DefaultResponse,
  HttpSuccessHead204204Response,
  HttpSuccessHead204DefaultResponse,
  HttpSuccessPut204204Response,
  HttpSuccessPut204DefaultResponse,
  HttpSuccessPatch204204Response,
  HttpSuccessPatch204DefaultResponse,
  HttpSuccessPost204204Response,
  HttpSuccessPost204DefaultResponse,
  HttpSuccessDelete204204Response,
  HttpSuccessDelete204DefaultResponse,
  HttpSuccessHead404204Response,
  HttpSuccessHead404404Response,
  HttpSuccessHead404DefaultResponse,
  HttpRedirectsHead300200Response,
  HttpRedirectsHead300300Response,
  HttpRedirectsHead300DefaultResponse,
  HttpRedirectsGet300200Response,
  HttpRedirectsGet300300Response,
  HttpRedirectsGet300DefaultResponse,
  HttpRedirectsHead301200Response,
  HttpRedirectsHead301301Response,
  HttpRedirectsHead301DefaultResponse,
  HttpRedirectsGet301200Response,
  HttpRedirectsGet301301Response,
  HttpRedirectsGet301DefaultResponse,
  HttpRedirectsPut301301Response,
  HttpRedirectsPut301DefaultResponse,
  HttpRedirectsHead302200Response,
  HttpRedirectsHead302302Response,
  HttpRedirectsHead302DefaultResponse,
  HttpRedirectsGet302200Response,
  HttpRedirectsGet302302Response,
  HttpRedirectsGet302DefaultResponse,
  HttpRedirectsPatch302302Response,
  HttpRedirectsPatch302DefaultResponse,
  HttpRedirectsPost303200Response,
  HttpRedirectsPost303303Response,
  HttpRedirectsPost303DefaultResponse,
  HttpRedirectsHead307200Response,
  HttpRedirectsHead307307Response,
  HttpRedirectsHead307DefaultResponse,
  HttpRedirectsGet307200Response,
  HttpRedirectsGet307307Response,
  HttpRedirectsGet307DefaultResponse,
  HttpRedirectsOptions307200Response,
  HttpRedirectsOptions307307Response,
  HttpRedirectsOptions307DefaultResponse,
  HttpRedirectsPut307200Response,
  HttpRedirectsPut307307Response,
  HttpRedirectsPut307DefaultResponse,
  HttpRedirectsPatch307200Response,
  HttpRedirectsPatch307307Response,
  HttpRedirectsPatch307DefaultResponse,
  HttpRedirectsPost307200Response,
  HttpRedirectsPost307307Response,
  HttpRedirectsPost307DefaultResponse,
  HttpRedirectsDelete307200Response,
  HttpRedirectsDelete307307Response,
  HttpRedirectsDelete307DefaultResponse,
  HttpRetryHead408200Response,
  HttpRetryHead408DefaultResponse,
  HttpRetryPut500200Response,
  HttpRetryPut500DefaultResponse,
  HttpRetryPatch500200Response,
  HttpRetryPatch500DefaultResponse,
  HttpRetryGet502200Response,
  HttpRetryGet502DefaultResponse,
  HttpRetryOptions502200Response,
  HttpRetryOptions502DefaultResponse,
  HttpRetryPost503200Response,
  HttpRetryPost503DefaultResponse,
  HttpRetryDelete503200Response,
  HttpRetryDelete503DefaultResponse,
  HttpRetryPut504200Response,
  HttpRetryPut504DefaultResponse,
  HttpRetryPatch504200Response,
  HttpRetryPatch504DefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError200Valid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError200Valid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError200ValidDefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError204Valid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError204Valid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError204ValidDefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError201Invalid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError201Invalid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError201InvalidDefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError202None200Response,
  MultipleResponsesGet200Model204NoModelDefaultError202None204Response,
  MultipleResponsesGet200Model204NoModelDefaultError202NoneDefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError400Valid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError400Valid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError400ValidDefaultResponse,
  MultipleResponsesGet200Model201ModelDefaultError200Valid200Response,
  MultipleResponsesGet200Model201ModelDefaultError200Valid201Response,
  MultipleResponsesGet200Model201ModelDefaultError200ValidDefaultResponse,
  MultipleResponsesGet200Model201ModelDefaultError201Valid200Response,
  MultipleResponsesGet200Model201ModelDefaultError201Valid201Response,
  MultipleResponsesGet200Model201ModelDefaultError201ValidDefaultResponse,
  MultipleResponsesGet200Model201ModelDefaultError400Valid200Response,
  MultipleResponsesGet200Model201ModelDefaultError400Valid201Response,
  MultipleResponsesGet200Model201ModelDefaultError400ValidDefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidDefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidDefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidDefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultError202None202Response,
  MultipleResponsesGet202None204NoneDefaultError202None204Response,
  MultipleResponsesGet202None204NoneDefaultError202NoneDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultError204None202Response,
  MultipleResponsesGet202None204NoneDefaultError204None204Response,
  MultipleResponsesGet202None204NoneDefaultError204NoneDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultError400Valid202Response,
  MultipleResponsesGet202None204NoneDefaultError400Valid204Response,
  MultipleResponsesGet202None204NoneDefaultError400ValidDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response,
  MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response,
  MultipleResponsesGet202None204NoneDefaultNone202InvalidDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone204None202Response,
  MultipleResponsesGet202None204NoneDefaultNone204None204Response,
  MultipleResponsesGet202None204NoneDefaultNone204NoneDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone400None202Response,
  MultipleResponsesGet202None204NoneDefaultNone400None204Response,
  MultipleResponsesGet202None204NoneDefaultNone400NoneDefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response,
  MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response,
  MultipleResponsesGet202None204NoneDefaultNone400InvalidDefaultResponse,
  MultipleResponsesGetDefaultModelA400Valid200Response,
  MultipleResponsesGetDefaultModelA400ValidDefaultResponse,
  MultipleResponsesGetDefaultModelA400None200Response,
  MultipleResponsesGetDefaultModelA400NoneDefaultResponse,
  MultipleResponsesGetDefaultNone400Invalid200Response,
  MultipleResponsesGetDefaultNone400InvalidDefaultResponse,
  MultipleResponsesGetDefaultNone400None200Response,
  MultipleResponsesGetDefaultNone400NoneDefaultResponse,
} from "./responses";

const responseMap: Record<string, string[]> = {
  "GET /http/failure/emptybody/error": ["200"],
  "GET /http/failure/nomodel/error": ["200"],
  "GET /http/failure/nomodel/empty": ["200"],
  "HEAD /http/success/200": ["200"],
  "GET /http/success/200": ["200"],
  "OPTIONS /http/success/200": ["200"],
  "PUT /http/success/200": ["200"],
  "PATCH /http/success/200": ["200"],
  "POST /http/success/200": ["200"],
  "DELETE /http/success/200": ["200"],
  "PUT /http/success/201": ["201"],
  "POST /http/success/201": ["201"],
  "PUT /http/success/202": ["202"],
  "PATCH /http/success/202": ["202"],
  "POST /http/success/202": ["202"],
  "DELETE /http/success/202": ["202"],
  "HEAD /http/success/204": ["204"],
  "PUT /http/success/204": ["204"],
  "PATCH /http/success/204": ["204"],
  "POST /http/success/204": ["204"],
  "DELETE /http/success/204": ["204"],
  "HEAD /http/success/404": ["204", "404"],
  "HEAD /http/redirect/300": ["200", "300"],
  "GET /http/redirect/300": ["200", "300"],
  "HEAD /http/redirect/301": ["200", "301"],
  "GET /http/redirect/301": ["200", "301"],
  "PUT /http/redirect/301": ["301"],
  "HEAD /http/redirect/302": ["200", "302"],
  "GET /http/redirect/302": ["200", "302"],
  "PATCH /http/redirect/302": ["302"],
  "POST /http/redirect/303": ["200", "303"],
  "HEAD /http/redirect/307": ["200", "307"],
  "GET /http/redirect/307": ["200", "307"],
  "OPTIONS /http/redirect/307": ["200", "307"],
  "PUT /http/redirect/307": ["200", "307"],
  "PATCH /http/redirect/307": ["200", "307"],
  "POST /http/redirect/307": ["200", "307"],
  "DELETE /http/redirect/307": ["200", "307"],
  "HEAD /http/failure/client/400": [],
  "GET /http/failure/client/400": [],
  "OPTIONS /http/failure/client/400": [],
  "PUT /http/failure/client/400": [],
  "PATCH /http/failure/client/400": [],
  "POST /http/failure/client/400": [],
  "DELETE /http/failure/client/400": [],
  "HEAD /http/failure/client/401": [],
  "GET /http/failure/client/402": [],
  "OPTIONS /http/failure/client/403": [],
  "GET /http/failure/client/403": [],
  "PUT /http/failure/client/404": [],
  "PATCH /http/failure/client/405": [],
  "POST /http/failure/client/406": [],
  "DELETE /http/failure/client/407": [],
  "PUT /http/failure/client/409": [],
  "HEAD /http/failure/client/410": [],
  "GET /http/failure/client/411": [],
  "OPTIONS /http/failure/client/412": [],
  "GET /http/failure/client/412": [],
  "PUT /http/failure/client/413": [],
  "PATCH /http/failure/client/414": [],
  "POST /http/failure/client/415": [],
  "GET /http/failure/client/416": [],
  "DELETE /http/failure/client/417": [],
  "HEAD /http/failure/client/429": [],
  "HEAD /http/failure/server/501": [],
  "GET /http/failure/server/501": [],
  "POST /http/failure/server/505": [],
  "DELETE /http/failure/server/505": [],
  "HEAD /http/retry/408": ["200"],
  "PUT /http/retry/500": ["200"],
  "PATCH /http/retry/500": ["200"],
  "GET /http/retry/502": ["200"],
  "OPTIONS /http/retry/502": ["200"],
  "POST /http/retry/503": ["200"],
  "DELETE /http/retry/503": ["200"],
  "PUT /http/retry/504": ["200"],
  "PATCH /http/retry/504": ["200"],
  "GET /http/payloads/200/A/204/none/default/Error/response/200/valid": [
    "200",
    "204",
  ],
  "GET /http/payloads/200/A/204/none/default/Error/response/204/none": [
    "200",
    "204",
  ],
  "GET /http/payloads/200/A/204/none/default/Error/response/201/valid": [
    "200",
    "204",
  ],
  "GET /http/payloads/200/A/204/none/default/Error/response/202/none": [
    "200",
    "204",
  ],
  "GET /http/payloads/200/A/204/none/default/Error/response/400/valid": [
    "200",
    "204",
  ],
  "GET /http/payloads/200/A/201/B/default/Error/response/200/valid": [
    "200",
    "201",
  ],
  "GET /http/payloads/200/A/201/B/default/Error/response/201/valid": [
    "200",
    "201",
  ],
  "GET /http/payloads/200/A/201/B/default/Error/response/400/valid": [
    "200",
    "201",
  ],
  "GET /http/payloads/200/A/201/C/404/D/default/Error/response/200/valid": [
    "200",
    "201",
    "404",
  ],
  "GET /http/payloads/200/A/201/C/404/D/default/Error/response/201/valid": [
    "200",
    "201",
    "404",
  ],
  "GET /http/payloads/200/A/201/C/404/D/default/Error/response/404/valid": [
    "200",
    "201",
    "404",
  ],
  "GET /http/payloads/200/A/201/C/404/D/default/Error/response/400/valid": [
    "200",
    "201",
    "404",
  ],
  "GET /http/payloads/202/none/204/none/default/Error/response/202/none": [
    "202",
    "204",
  ],
  "GET /http/payloads/202/none/204/none/default/Error/response/204/none": [
    "202",
    "204",
  ],
  "GET /http/payloads/202/none/204/none/default/Error/response/400/valid": [
    "202",
    "204",
  ],
  "GET /http/payloads/202/none/204/none/default/none/response/202/invalid": [
    "202",
    "204",
  ],
  "GET /http/payloads/202/none/204/none/default/none/response/204/none": [
    "202",
    "204",
  ],
  "GET /http/payloads/202/none/204/none/default/none/response/400/none": [
    "202",
    "204",
  ],
  "GET /http/payloads/202/none/204/none/default/none/response/400/invalid": [
    "202",
    "204",
  ],
  "GET /http/payloads/default/A/response/200/valid": ["200"],
  "GET /http/payloads/default/A/response/200/none": ["200"],
  "GET /http/payloads/default/A/response/400/valid": ["200"],
  "GET /http/payloads/default/A/response/400/none": ["200"],
  "GET /http/payloads/default/none/response/200/invalid": ["200"],
  "GET /http/payloads/default/none/response/200/none": ["200"],
  "GET /http/payloads/default/none/response/400/invalid": ["200"],
  "GET /http/payloads/default/none/response/400/none": ["200"],
  "GET /http/payloads/200/A/response/200/none": ["200"],
  "GET /http/payloads/200/A/response/200/valid": ["200"],
  "GET /http/payloads/200/A/response/200/invalid": ["200"],
  "GET /http/payloads/200/A/response/400/none": ["200"],
  "GET /http/payloads/200/A/response/400/valid": ["200"],
  "GET /http/payloads/200/A/response/400/invalid": ["200"],
  "GET /http/payloads/200/A/response/202/valid": ["200"],
};

export function isUnexpected(
  response:
    | HttpFailureGetEmptyError200Response
    | HttpFailureGetEmptyErrorDefaultResponse,
): response is HttpFailureGetEmptyErrorDefaultResponse;
export function isUnexpected(
  response: HttpSuccessHead200200Response | HttpSuccessHead200DefaultResponse,
): response is HttpSuccessHead200DefaultResponse;
export function isUnexpected(
  response: HttpSuccessGet200200Response | HttpSuccessGet200DefaultResponse,
): response is HttpSuccessGet200DefaultResponse;
export function isUnexpected(
  response:
    | HttpSuccessOptions200200Response
    | HttpSuccessOptions200DefaultResponse,
): response is HttpSuccessOptions200DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPut200200Response | HttpSuccessPut200DefaultResponse,
): response is HttpSuccessPut200DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPatch200200Response | HttpSuccessPatch200DefaultResponse,
): response is HttpSuccessPatch200DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPost200200Response | HttpSuccessPost200DefaultResponse,
): response is HttpSuccessPost200DefaultResponse;
export function isUnexpected(
  response:
    | HttpSuccessDelete200200Response
    | HttpSuccessDelete200DefaultResponse,
): response is HttpSuccessDelete200DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPut201201Response | HttpSuccessPut201DefaultResponse,
): response is HttpSuccessPut201DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPost201201Response | HttpSuccessPost201DefaultResponse,
): response is HttpSuccessPost201DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPut202202Response | HttpSuccessPut202DefaultResponse,
): response is HttpSuccessPut202DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPatch202202Response | HttpSuccessPatch202DefaultResponse,
): response is HttpSuccessPatch202DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPost202202Response | HttpSuccessPost202DefaultResponse,
): response is HttpSuccessPost202DefaultResponse;
export function isUnexpected(
  response:
    | HttpSuccessDelete202202Response
    | HttpSuccessDelete202DefaultResponse,
): response is HttpSuccessDelete202DefaultResponse;
export function isUnexpected(
  response: HttpSuccessHead204204Response | HttpSuccessHead204DefaultResponse,
): response is HttpSuccessHead204DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPut204204Response | HttpSuccessPut204DefaultResponse,
): response is HttpSuccessPut204DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPatch204204Response | HttpSuccessPatch204DefaultResponse,
): response is HttpSuccessPatch204DefaultResponse;
export function isUnexpected(
  response: HttpSuccessPost204204Response | HttpSuccessPost204DefaultResponse,
): response is HttpSuccessPost204DefaultResponse;
export function isUnexpected(
  response:
    | HttpSuccessDelete204204Response
    | HttpSuccessDelete204DefaultResponse,
): response is HttpSuccessDelete204DefaultResponse;
export function isUnexpected(
  response:
    | HttpSuccessHead404204Response
    | HttpSuccessHead404404Response
    | HttpSuccessHead404DefaultResponse,
): response is HttpSuccessHead404DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsHead300200Response
    | HttpRedirectsHead300300Response
    | HttpRedirectsHead300DefaultResponse,
): response is HttpRedirectsHead300DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsGet300200Response
    | HttpRedirectsGet300300Response
    | HttpRedirectsGet300DefaultResponse,
): response is HttpRedirectsGet300DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsHead301200Response
    | HttpRedirectsHead301301Response
    | HttpRedirectsHead301DefaultResponse,
): response is HttpRedirectsHead301DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsGet301200Response
    | HttpRedirectsGet301301Response
    | HttpRedirectsGet301DefaultResponse,
): response is HttpRedirectsGet301DefaultResponse;
export function isUnexpected(
  response: HttpRedirectsPut301301Response | HttpRedirectsPut301DefaultResponse,
): response is HttpRedirectsPut301DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsHead302200Response
    | HttpRedirectsHead302302Response
    | HttpRedirectsHead302DefaultResponse,
): response is HttpRedirectsHead302DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsGet302200Response
    | HttpRedirectsGet302302Response
    | HttpRedirectsGet302DefaultResponse,
): response is HttpRedirectsGet302DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsPatch302302Response
    | HttpRedirectsPatch302DefaultResponse,
): response is HttpRedirectsPatch302DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsPost303200Response
    | HttpRedirectsPost303303Response
    | HttpRedirectsPost303DefaultResponse,
): response is HttpRedirectsPost303DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsHead307200Response
    | HttpRedirectsHead307307Response
    | HttpRedirectsHead307DefaultResponse,
): response is HttpRedirectsHead307DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsGet307200Response
    | HttpRedirectsGet307307Response
    | HttpRedirectsGet307DefaultResponse,
): response is HttpRedirectsGet307DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsOptions307200Response
    | HttpRedirectsOptions307307Response
    | HttpRedirectsOptions307DefaultResponse,
): response is HttpRedirectsOptions307DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsPut307200Response
    | HttpRedirectsPut307307Response
    | HttpRedirectsPut307DefaultResponse,
): response is HttpRedirectsPut307DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsPatch307200Response
    | HttpRedirectsPatch307307Response
    | HttpRedirectsPatch307DefaultResponse,
): response is HttpRedirectsPatch307DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsPost307200Response
    | HttpRedirectsPost307307Response
    | HttpRedirectsPost307DefaultResponse,
): response is HttpRedirectsPost307DefaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsDelete307200Response
    | HttpRedirectsDelete307307Response
    | HttpRedirectsDelete307DefaultResponse,
): response is HttpRedirectsDelete307DefaultResponse;
export function isUnexpected(
  response: HttpRetryHead408200Response | HttpRetryHead408DefaultResponse,
): response is HttpRetryHead408DefaultResponse;
export function isUnexpected(
  response: HttpRetryPut500200Response | HttpRetryPut500DefaultResponse,
): response is HttpRetryPut500DefaultResponse;
export function isUnexpected(
  response: HttpRetryPatch500200Response | HttpRetryPatch500DefaultResponse,
): response is HttpRetryPatch500DefaultResponse;
export function isUnexpected(
  response: HttpRetryGet502200Response | HttpRetryGet502DefaultResponse,
): response is HttpRetryGet502DefaultResponse;
export function isUnexpected(
  response: HttpRetryOptions502200Response | HttpRetryOptions502DefaultResponse,
): response is HttpRetryOptions502DefaultResponse;
export function isUnexpected(
  response: HttpRetryPost503200Response | HttpRetryPost503DefaultResponse,
): response is HttpRetryPost503DefaultResponse;
export function isUnexpected(
  response: HttpRetryDelete503200Response | HttpRetryDelete503DefaultResponse,
): response is HttpRetryDelete503DefaultResponse;
export function isUnexpected(
  response: HttpRetryPut504200Response | HttpRetryPut504DefaultResponse,
): response is HttpRetryPut504DefaultResponse;
export function isUnexpected(
  response: HttpRetryPatch504200Response | HttpRetryPatch504DefaultResponse,
): response is HttpRetryPatch504DefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError200ValidDefaultResponse,
): response is MultipleResponsesGet200Model204NoModelDefaultError200ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError204ValidDefaultResponse,
): response is MultipleResponsesGet200Model204NoModelDefaultError204ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError201InvalidDefaultResponse,
): response is MultipleResponsesGet200Model204NoModelDefaultError201InvalidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model204NoModelDefaultError202None200Response
    | MultipleResponsesGet200Model204NoModelDefaultError202None204Response
    | MultipleResponsesGet200Model204NoModelDefaultError202NoneDefaultResponse,
): response is MultipleResponsesGet200Model204NoModelDefaultError202NoneDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError400ValidDefaultResponse,
): response is MultipleResponsesGet200Model204NoModelDefaultError400ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model201ModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError200Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError200ValidDefaultResponse,
): response is MultipleResponsesGet200Model201ModelDefaultError200ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model201ModelDefaultError201Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError201Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError201ValidDefaultResponse,
): response is MultipleResponsesGet200Model201ModelDefaultError201ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model201ModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError400Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError400ValidDefaultResponse,
): response is MultipleResponsesGet200Model201ModelDefaultError400ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidDefaultResponse,
): response is MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidDefaultResponse,
): response is MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidDefaultResponse,
): response is MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidDefaultResponse,
): response is MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultError202None202Response
    | MultipleResponsesGet202None204NoneDefaultError202None204Response
    | MultipleResponsesGet202None204NoneDefaultError202NoneDefaultResponse,
): response is MultipleResponsesGet202None204NoneDefaultError202NoneDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultError204None202Response
    | MultipleResponsesGet202None204NoneDefaultError204None204Response
    | MultipleResponsesGet202None204NoneDefaultError204NoneDefaultResponse,
): response is MultipleResponsesGet202None204NoneDefaultError204NoneDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultError400Valid202Response
    | MultipleResponsesGet202None204NoneDefaultError400Valid204Response
    | MultipleResponsesGet202None204NoneDefaultError400ValidDefaultResponse,
): response is MultipleResponsesGet202None204NoneDefaultError400ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone202InvalidDefaultResponse,
): response is MultipleResponsesGet202None204NoneDefaultNone202InvalidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultNone204None202Response
    | MultipleResponsesGet202None204NoneDefaultNone204None204Response
    | MultipleResponsesGet202None204NoneDefaultNone204NoneDefaultResponse,
): response is MultipleResponsesGet202None204NoneDefaultNone204NoneDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultNone400None202Response
    | MultipleResponsesGet202None204NoneDefaultNone400None204Response
    | MultipleResponsesGet202None204NoneDefaultNone400NoneDefaultResponse,
): response is MultipleResponsesGet202None204NoneDefaultNone400NoneDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone400InvalidDefaultResponse,
): response is MultipleResponsesGet202None204NoneDefaultNone400InvalidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGetDefaultModelA400Valid200Response
    | MultipleResponsesGetDefaultModelA400ValidDefaultResponse,
): response is MultipleResponsesGetDefaultModelA400ValidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGetDefaultModelA400None200Response
    | MultipleResponsesGetDefaultModelA400NoneDefaultResponse,
): response is MultipleResponsesGetDefaultModelA400NoneDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGetDefaultNone400Invalid200Response
    | MultipleResponsesGetDefaultNone400InvalidDefaultResponse,
): response is MultipleResponsesGetDefaultNone400InvalidDefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGetDefaultNone400None200Response
    | MultipleResponsesGetDefaultNone400NoneDefaultResponse,
): response is MultipleResponsesGetDefaultNone400NoneDefaultResponse;
export function isUnexpected(
  response:
    | HttpFailureGetEmptyError200Response
    | HttpFailureGetEmptyErrorDefaultResponse
    | HttpSuccessHead200200Response
    | HttpSuccessHead200DefaultResponse
    | HttpSuccessGet200200Response
    | HttpSuccessGet200DefaultResponse
    | HttpSuccessOptions200200Response
    | HttpSuccessOptions200DefaultResponse
    | HttpSuccessPut200200Response
    | HttpSuccessPut200DefaultResponse
    | HttpSuccessPatch200200Response
    | HttpSuccessPatch200DefaultResponse
    | HttpSuccessPost200200Response
    | HttpSuccessPost200DefaultResponse
    | HttpSuccessDelete200200Response
    | HttpSuccessDelete200DefaultResponse
    | HttpSuccessPut201201Response
    | HttpSuccessPut201DefaultResponse
    | HttpSuccessPost201201Response
    | HttpSuccessPost201DefaultResponse
    | HttpSuccessPut202202Response
    | HttpSuccessPut202DefaultResponse
    | HttpSuccessPatch202202Response
    | HttpSuccessPatch202DefaultResponse
    | HttpSuccessPost202202Response
    | HttpSuccessPost202DefaultResponse
    | HttpSuccessDelete202202Response
    | HttpSuccessDelete202DefaultResponse
    | HttpSuccessHead204204Response
    | HttpSuccessHead204DefaultResponse
    | HttpSuccessPut204204Response
    | HttpSuccessPut204DefaultResponse
    | HttpSuccessPatch204204Response
    | HttpSuccessPatch204DefaultResponse
    | HttpSuccessPost204204Response
    | HttpSuccessPost204DefaultResponse
    | HttpSuccessDelete204204Response
    | HttpSuccessDelete204DefaultResponse
    | HttpSuccessHead404204Response
    | HttpSuccessHead404404Response
    | HttpSuccessHead404DefaultResponse
    | HttpRedirectsHead300200Response
    | HttpRedirectsHead300300Response
    | HttpRedirectsHead300DefaultResponse
    | HttpRedirectsGet300200Response
    | HttpRedirectsGet300300Response
    | HttpRedirectsGet300DefaultResponse
    | HttpRedirectsHead301200Response
    | HttpRedirectsHead301301Response
    | HttpRedirectsHead301DefaultResponse
    | HttpRedirectsGet301200Response
    | HttpRedirectsGet301301Response
    | HttpRedirectsGet301DefaultResponse
    | HttpRedirectsPut301301Response
    | HttpRedirectsPut301DefaultResponse
    | HttpRedirectsHead302200Response
    | HttpRedirectsHead302302Response
    | HttpRedirectsHead302DefaultResponse
    | HttpRedirectsGet302200Response
    | HttpRedirectsGet302302Response
    | HttpRedirectsGet302DefaultResponse
    | HttpRedirectsPatch302302Response
    | HttpRedirectsPatch302DefaultResponse
    | HttpRedirectsPost303200Response
    | HttpRedirectsPost303303Response
    | HttpRedirectsPost303DefaultResponse
    | HttpRedirectsHead307200Response
    | HttpRedirectsHead307307Response
    | HttpRedirectsHead307DefaultResponse
    | HttpRedirectsGet307200Response
    | HttpRedirectsGet307307Response
    | HttpRedirectsGet307DefaultResponse
    | HttpRedirectsOptions307200Response
    | HttpRedirectsOptions307307Response
    | HttpRedirectsOptions307DefaultResponse
    | HttpRedirectsPut307200Response
    | HttpRedirectsPut307307Response
    | HttpRedirectsPut307DefaultResponse
    | HttpRedirectsPatch307200Response
    | HttpRedirectsPatch307307Response
    | HttpRedirectsPatch307DefaultResponse
    | HttpRedirectsPost307200Response
    | HttpRedirectsPost307307Response
    | HttpRedirectsPost307DefaultResponse
    | HttpRedirectsDelete307200Response
    | HttpRedirectsDelete307307Response
    | HttpRedirectsDelete307DefaultResponse
    | HttpRetryHead408200Response
    | HttpRetryHead408DefaultResponse
    | HttpRetryPut500200Response
    | HttpRetryPut500DefaultResponse
    | HttpRetryPatch500200Response
    | HttpRetryPatch500DefaultResponse
    | HttpRetryGet502200Response
    | HttpRetryGet502DefaultResponse
    | HttpRetryOptions502200Response
    | HttpRetryOptions502DefaultResponse
    | HttpRetryPost503200Response
    | HttpRetryPost503DefaultResponse
    | HttpRetryDelete503200Response
    | HttpRetryDelete503DefaultResponse
    | HttpRetryPut504200Response
    | HttpRetryPut504DefaultResponse
    | HttpRetryPatch504200Response
    | HttpRetryPatch504DefaultResponse
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError200ValidDefaultResponse
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError204ValidDefaultResponse
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError201InvalidDefaultResponse
    | MultipleResponsesGet200Model204NoModelDefaultError202None200Response
    | MultipleResponsesGet200Model204NoModelDefaultError202None204Response
    | MultipleResponsesGet200Model204NoModelDefaultError202NoneDefaultResponse
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError400ValidDefaultResponse
    | MultipleResponsesGet200Model201ModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError200Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError200ValidDefaultResponse
    | MultipleResponsesGet200Model201ModelDefaultError201Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError201Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError201ValidDefaultResponse
    | MultipleResponsesGet200Model201ModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError400Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError400ValidDefaultResponse
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidDefaultResponse
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidDefaultResponse
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidDefaultResponse
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidDefaultResponse
    | MultipleResponsesGet202None204NoneDefaultError202None202Response
    | MultipleResponsesGet202None204NoneDefaultError202None204Response
    | MultipleResponsesGet202None204NoneDefaultError202NoneDefaultResponse
    | MultipleResponsesGet202None204NoneDefaultError204None202Response
    | MultipleResponsesGet202None204NoneDefaultError204None204Response
    | MultipleResponsesGet202None204NoneDefaultError204NoneDefaultResponse
    | MultipleResponsesGet202None204NoneDefaultError400Valid202Response
    | MultipleResponsesGet202None204NoneDefaultError400Valid204Response
    | MultipleResponsesGet202None204NoneDefaultError400ValidDefaultResponse
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone202InvalidDefaultResponse
    | MultipleResponsesGet202None204NoneDefaultNone204None202Response
    | MultipleResponsesGet202None204NoneDefaultNone204None204Response
    | MultipleResponsesGet202None204NoneDefaultNone204NoneDefaultResponse
    | MultipleResponsesGet202None204NoneDefaultNone400None202Response
    | MultipleResponsesGet202None204NoneDefaultNone400None204Response
    | MultipleResponsesGet202None204NoneDefaultNone400NoneDefaultResponse
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone400InvalidDefaultResponse
    | MultipleResponsesGetDefaultModelA400Valid200Response
    | MultipleResponsesGetDefaultModelA400ValidDefaultResponse
    | MultipleResponsesGetDefaultModelA400None200Response
    | MultipleResponsesGetDefaultModelA400NoneDefaultResponse
    | MultipleResponsesGetDefaultNone400Invalid200Response
    | MultipleResponsesGetDefaultNone400InvalidDefaultResponse
    | MultipleResponsesGetDefaultNone400None200Response
    | MultipleResponsesGetDefaultNone400NoneDefaultResponse,
): response is
  | HttpFailureGetEmptyErrorDefaultResponse
  | HttpSuccessHead200DefaultResponse
  | HttpSuccessGet200DefaultResponse
  | HttpSuccessOptions200DefaultResponse
  | HttpSuccessPut200DefaultResponse
  | HttpSuccessPatch200DefaultResponse
  | HttpSuccessPost200DefaultResponse
  | HttpSuccessDelete200DefaultResponse
  | HttpSuccessPut201DefaultResponse
  | HttpSuccessPost201DefaultResponse
  | HttpSuccessPut202DefaultResponse
  | HttpSuccessPatch202DefaultResponse
  | HttpSuccessPost202DefaultResponse
  | HttpSuccessDelete202DefaultResponse
  | HttpSuccessHead204DefaultResponse
  | HttpSuccessPut204DefaultResponse
  | HttpSuccessPatch204DefaultResponse
  | HttpSuccessPost204DefaultResponse
  | HttpSuccessDelete204DefaultResponse
  | HttpSuccessHead404DefaultResponse
  | HttpRedirectsHead300DefaultResponse
  | HttpRedirectsGet300DefaultResponse
  | HttpRedirectsHead301DefaultResponse
  | HttpRedirectsGet301DefaultResponse
  | HttpRedirectsPut301DefaultResponse
  | HttpRedirectsHead302DefaultResponse
  | HttpRedirectsGet302DefaultResponse
  | HttpRedirectsPatch302DefaultResponse
  | HttpRedirectsPost303DefaultResponse
  | HttpRedirectsHead307DefaultResponse
  | HttpRedirectsGet307DefaultResponse
  | HttpRedirectsOptions307DefaultResponse
  | HttpRedirectsPut307DefaultResponse
  | HttpRedirectsPatch307DefaultResponse
  | HttpRedirectsPost307DefaultResponse
  | HttpRedirectsDelete307DefaultResponse
  | HttpRetryHead408DefaultResponse
  | HttpRetryPut500DefaultResponse
  | HttpRetryPatch500DefaultResponse
  | HttpRetryGet502DefaultResponse
  | HttpRetryOptions502DefaultResponse
  | HttpRetryPost503DefaultResponse
  | HttpRetryDelete503DefaultResponse
  | HttpRetryPut504DefaultResponse
  | HttpRetryPatch504DefaultResponse
  | MultipleResponsesGet200Model204NoModelDefaultError200ValidDefaultResponse
  | MultipleResponsesGet200Model204NoModelDefaultError204ValidDefaultResponse
  | MultipleResponsesGet200Model204NoModelDefaultError201InvalidDefaultResponse
  | MultipleResponsesGet200Model204NoModelDefaultError202NoneDefaultResponse
  | MultipleResponsesGet200Model204NoModelDefaultError400ValidDefaultResponse
  | MultipleResponsesGet200Model201ModelDefaultError200ValidDefaultResponse
  | MultipleResponsesGet200Model201ModelDefaultError201ValidDefaultResponse
  | MultipleResponsesGet200Model201ModelDefaultError400ValidDefaultResponse
  | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValidDefaultResponse
  | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValidDefaultResponse
  | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValidDefaultResponse
  | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValidDefaultResponse
  | MultipleResponsesGet202None204NoneDefaultError202NoneDefaultResponse
  | MultipleResponsesGet202None204NoneDefaultError204NoneDefaultResponse
  | MultipleResponsesGet202None204NoneDefaultError400ValidDefaultResponse
  | MultipleResponsesGet202None204NoneDefaultNone202InvalidDefaultResponse
  | MultipleResponsesGet202None204NoneDefaultNone204NoneDefaultResponse
  | MultipleResponsesGet202None204NoneDefaultNone400NoneDefaultResponse
  | MultipleResponsesGet202None204NoneDefaultNone400InvalidDefaultResponse
  | MultipleResponsesGetDefaultModelA400ValidDefaultResponse
  | MultipleResponsesGetDefaultModelA400NoneDefaultResponse
  | MultipleResponsesGetDefaultNone400InvalidDefaultResponse
  | MultipleResponsesGetDefaultNone400NoneDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
