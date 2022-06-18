// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  HttpFailureGetEmptyError200Response,
  HttpFailureGetEmptyErrordefaultResponse,
  HttpSuccessHead200200Response,
  HttpSuccessHead200defaultResponse,
  HttpSuccessGet200200Response,
  HttpSuccessGet200defaultResponse,
  HttpSuccessOptions200200Response,
  HttpSuccessOptions200defaultResponse,
  HttpSuccessPut200200Response,
  HttpSuccessPut200defaultResponse,
  HttpSuccessPatch200200Response,
  HttpSuccessPatch200defaultResponse,
  HttpSuccessPost200200Response,
  HttpSuccessPost200defaultResponse,
  HttpSuccessDelete200200Response,
  HttpSuccessDelete200defaultResponse,
  HttpSuccessPut201201Response,
  HttpSuccessPut201defaultResponse,
  HttpSuccessPost201201Response,
  HttpSuccessPost201defaultResponse,
  HttpSuccessPut202202Response,
  HttpSuccessPut202defaultResponse,
  HttpSuccessPatch202202Response,
  HttpSuccessPatch202defaultResponse,
  HttpSuccessPost202202Response,
  HttpSuccessPost202defaultResponse,
  HttpSuccessDelete202202Response,
  HttpSuccessDelete202defaultResponse,
  HttpSuccessHead204204Response,
  HttpSuccessHead204defaultResponse,
  HttpSuccessPut204204Response,
  HttpSuccessPut204defaultResponse,
  HttpSuccessPatch204204Response,
  HttpSuccessPatch204defaultResponse,
  HttpSuccessPost204204Response,
  HttpSuccessPost204defaultResponse,
  HttpSuccessDelete204204Response,
  HttpSuccessDelete204defaultResponse,
  HttpSuccessHead404204Response,
  HttpSuccessHead404404Response,
  HttpSuccessHead404defaultResponse,
  HttpRedirectsHead300200Response,
  HttpRedirectsHead300300Response,
  HttpRedirectsHead300defaultResponse,
  HttpRedirectsGet300200Response,
  HttpRedirectsGet300300Response,
  HttpRedirectsGet300defaultResponse,
  HttpRedirectsHead301200Response,
  HttpRedirectsHead301301Response,
  HttpRedirectsHead301defaultResponse,
  HttpRedirectsGet301200Response,
  HttpRedirectsGet301301Response,
  HttpRedirectsGet301defaultResponse,
  HttpRedirectsPut301301Response,
  HttpRedirectsPut301defaultResponse,
  HttpRedirectsHead302200Response,
  HttpRedirectsHead302302Response,
  HttpRedirectsHead302defaultResponse,
  HttpRedirectsGet302200Response,
  HttpRedirectsGet302302Response,
  HttpRedirectsGet302defaultResponse,
  HttpRedirectsPatch302302Response,
  HttpRedirectsPatch302defaultResponse,
  HttpRedirectsPost303200Response,
  HttpRedirectsPost303303Response,
  HttpRedirectsPost303defaultResponse,
  HttpRedirectsHead307200Response,
  HttpRedirectsHead307307Response,
  HttpRedirectsHead307defaultResponse,
  HttpRedirectsGet307200Response,
  HttpRedirectsGet307307Response,
  HttpRedirectsGet307defaultResponse,
  HttpRedirectsOptions307200Response,
  HttpRedirectsOptions307307Response,
  HttpRedirectsOptions307defaultResponse,
  HttpRedirectsPut307200Response,
  HttpRedirectsPut307307Response,
  HttpRedirectsPut307defaultResponse,
  HttpRedirectsPatch307200Response,
  HttpRedirectsPatch307307Response,
  HttpRedirectsPatch307defaultResponse,
  HttpRedirectsPost307200Response,
  HttpRedirectsPost307307Response,
  HttpRedirectsPost307defaultResponse,
  HttpRedirectsDelete307200Response,
  HttpRedirectsDelete307307Response,
  HttpRedirectsDelete307defaultResponse,
  HttpRetryHead408200Response,
  HttpRetryHead408defaultResponse,
  HttpRetryPut500200Response,
  HttpRetryPut500defaultResponse,
  HttpRetryPatch500200Response,
  HttpRetryPatch500defaultResponse,
  HttpRetryGet502200Response,
  HttpRetryGet502defaultResponse,
  HttpRetryOptions502200Response,
  HttpRetryOptions502defaultResponse,
  HttpRetryPost503200Response,
  HttpRetryPost503defaultResponse,
  HttpRetryDelete503200Response,
  HttpRetryDelete503defaultResponse,
  HttpRetryPut504200Response,
  HttpRetryPut504defaultResponse,
  HttpRetryPatch504200Response,
  HttpRetryPatch504defaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError200Valid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError200Valid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError200ValiddefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError204Valid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError204Valid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError204ValiddefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError201Invalid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError201Invalid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError201InvaliddefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError202None200Response,
  MultipleResponsesGet200Model204NoModelDefaultError202None204Response,
  MultipleResponsesGet200Model204NoModelDefaultError202NonedefaultResponse,
  MultipleResponsesGet200Model204NoModelDefaultError400Valid200Response,
  MultipleResponsesGet200Model204NoModelDefaultError400Valid204Response,
  MultipleResponsesGet200Model204NoModelDefaultError400ValiddefaultResponse,
  MultipleResponsesGet200Model201ModelDefaultError200Valid200Response,
  MultipleResponsesGet200Model201ModelDefaultError200Valid201Response,
  MultipleResponsesGet200Model201ModelDefaultError200ValiddefaultResponse,
  MultipleResponsesGet200Model201ModelDefaultError201Valid200Response,
  MultipleResponsesGet200Model201ModelDefaultError201Valid201Response,
  MultipleResponsesGet200Model201ModelDefaultError201ValiddefaultResponse,
  MultipleResponsesGet200Model201ModelDefaultError400Valid200Response,
  MultipleResponsesGet200Model201ModelDefaultError400Valid201Response,
  MultipleResponsesGet200Model201ModelDefaultError400ValiddefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValiddefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValiddefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValiddefaultResponse,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid200Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid201Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid404Response,
  MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValiddefaultResponse,
  MultipleResponsesGet202None204NoneDefaultError202None202Response,
  MultipleResponsesGet202None204NoneDefaultError202None204Response,
  MultipleResponsesGet202None204NoneDefaultError202NonedefaultResponse,
  MultipleResponsesGet202None204NoneDefaultError204None202Response,
  MultipleResponsesGet202None204NoneDefaultError204None204Response,
  MultipleResponsesGet202None204NoneDefaultError204NonedefaultResponse,
  MultipleResponsesGet202None204NoneDefaultError400Valid202Response,
  MultipleResponsesGet202None204NoneDefaultError400Valid204Response,
  MultipleResponsesGet202None204NoneDefaultError400ValiddefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response,
  MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response,
  MultipleResponsesGet202None204NoneDefaultNone202InvaliddefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone204None202Response,
  MultipleResponsesGet202None204NoneDefaultNone204None204Response,
  MultipleResponsesGet202None204NoneDefaultNone204NonedefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone400None202Response,
  MultipleResponsesGet202None204NoneDefaultNone400None204Response,
  MultipleResponsesGet202None204NoneDefaultNone400NonedefaultResponse,
  MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response,
  MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response,
  MultipleResponsesGet202None204NoneDefaultNone400InvaliddefaultResponse,
  MultipleResponsesGetDefaultModelA400Valid200Response,
  MultipleResponsesGetDefaultModelA400ValiddefaultResponse,
  MultipleResponsesGetDefaultModelA400None200Response,
  MultipleResponsesGetDefaultModelA400NonedefaultResponse,
  MultipleResponsesGetDefaultNone400Invalid200Response,
  MultipleResponsesGetDefaultNone400InvaliddefaultResponse,
  MultipleResponsesGetDefaultNone400None200Response,
  MultipleResponsesGetDefaultNone400NonedefaultResponse
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
    "204"
  ],
  "GET /http/payloads/200/A/204/none/default/Error/response/204/none": [
    "200",
    "204"
  ],
  "GET /http/payloads/200/A/204/none/default/Error/response/201/valid": [
    "200",
    "204"
  ],
  "GET /http/payloads/200/A/204/none/default/Error/response/202/none": [
    "200",
    "204"
  ],
  "GET /http/payloads/200/A/204/none/default/Error/response/400/valid": [
    "200",
    "204"
  ],
  "GET /http/payloads/200/A/201/B/default/Error/response/200/valid": [
    "200",
    "201"
  ],
  "GET /http/payloads/200/A/201/B/default/Error/response/201/valid": [
    "200",
    "201"
  ],
  "GET /http/payloads/200/A/201/B/default/Error/response/400/valid": [
    "200",
    "201"
  ],
  "GET /http/payloads/200/A/201/C/404/D/default/Error/response/200/valid": [
    "200",
    "201",
    "404"
  ],
  "GET /http/payloads/200/A/201/C/404/D/default/Error/response/201/valid": [
    "200",
    "201",
    "404"
  ],
  "GET /http/payloads/200/A/201/C/404/D/default/Error/response/404/valid": [
    "200",
    "201",
    "404"
  ],
  "GET /http/payloads/200/A/201/C/404/D/default/Error/response/400/valid": [
    "200",
    "201",
    "404"
  ],
  "GET /http/payloads/202/none/204/none/default/Error/response/202/none": [
    "202",
    "204"
  ],
  "GET /http/payloads/202/none/204/none/default/Error/response/204/none": [
    "202",
    "204"
  ],
  "GET /http/payloads/202/none/204/none/default/Error/response/400/valid": [
    "202",
    "204"
  ],
  "GET /http/payloads/202/none/204/none/default/none/response/202/invalid": [
    "202",
    "204"
  ],
  "GET /http/payloads/202/none/204/none/default/none/response/204/none": [
    "202",
    "204"
  ],
  "GET /http/payloads/202/none/204/none/default/none/response/400/none": [
    "202",
    "204"
  ],
  "GET /http/payloads/202/none/204/none/default/none/response/400/invalid": [
    "202",
    "204"
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
  "GET /http/payloads/200/A/response/202/valid": ["200"]
};

export function isUnexpected(
  response:
    | HttpFailureGetEmptyError200Response
    | HttpFailureGetEmptyErrordefaultResponse
): response is HttpFailureGetEmptyErrordefaultResponse;
export function isUnexpected(
  response: HttpSuccessHead200200Response | HttpSuccessHead200defaultResponse
): response is HttpSuccessHead200defaultResponse;
export function isUnexpected(
  response: HttpSuccessGet200200Response | HttpSuccessGet200defaultResponse
): response is HttpSuccessGet200defaultResponse;
export function isUnexpected(
  response:
    | HttpSuccessOptions200200Response
    | HttpSuccessOptions200defaultResponse
): response is HttpSuccessOptions200defaultResponse;
export function isUnexpected(
  response: HttpSuccessPut200200Response | HttpSuccessPut200defaultResponse
): response is HttpSuccessPut200defaultResponse;
export function isUnexpected(
  response: HttpSuccessPatch200200Response | HttpSuccessPatch200defaultResponse
): response is HttpSuccessPatch200defaultResponse;
export function isUnexpected(
  response: HttpSuccessPost200200Response | HttpSuccessPost200defaultResponse
): response is HttpSuccessPost200defaultResponse;
export function isUnexpected(
  response:
    | HttpSuccessDelete200200Response
    | HttpSuccessDelete200defaultResponse
): response is HttpSuccessDelete200defaultResponse;
export function isUnexpected(
  response: HttpSuccessPut201201Response | HttpSuccessPut201defaultResponse
): response is HttpSuccessPut201defaultResponse;
export function isUnexpected(
  response: HttpSuccessPost201201Response | HttpSuccessPost201defaultResponse
): response is HttpSuccessPost201defaultResponse;
export function isUnexpected(
  response: HttpSuccessPut202202Response | HttpSuccessPut202defaultResponse
): response is HttpSuccessPut202defaultResponse;
export function isUnexpected(
  response: HttpSuccessPatch202202Response | HttpSuccessPatch202defaultResponse
): response is HttpSuccessPatch202defaultResponse;
export function isUnexpected(
  response: HttpSuccessPost202202Response | HttpSuccessPost202defaultResponse
): response is HttpSuccessPost202defaultResponse;
export function isUnexpected(
  response:
    | HttpSuccessDelete202202Response
    | HttpSuccessDelete202defaultResponse
): response is HttpSuccessDelete202defaultResponse;
export function isUnexpected(
  response: HttpSuccessHead204204Response | HttpSuccessHead204defaultResponse
): response is HttpSuccessHead204defaultResponse;
export function isUnexpected(
  response: HttpSuccessPut204204Response | HttpSuccessPut204defaultResponse
): response is HttpSuccessPut204defaultResponse;
export function isUnexpected(
  response: HttpSuccessPatch204204Response | HttpSuccessPatch204defaultResponse
): response is HttpSuccessPatch204defaultResponse;
export function isUnexpected(
  response: HttpSuccessPost204204Response | HttpSuccessPost204defaultResponse
): response is HttpSuccessPost204defaultResponse;
export function isUnexpected(
  response:
    | HttpSuccessDelete204204Response
    | HttpSuccessDelete204defaultResponse
): response is HttpSuccessDelete204defaultResponse;
export function isUnexpected(
  response:
    | HttpSuccessHead404204Response
    | HttpSuccessHead404404Response
    | HttpSuccessHead404defaultResponse
): response is HttpSuccessHead404defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsHead300200Response
    | HttpRedirectsHead300300Response
    | HttpRedirectsHead300defaultResponse
): response is HttpRedirectsHead300defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsGet300200Response
    | HttpRedirectsGet300300Response
    | HttpRedirectsGet300defaultResponse
): response is HttpRedirectsGet300defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsHead301200Response
    | HttpRedirectsHead301301Response
    | HttpRedirectsHead301defaultResponse
): response is HttpRedirectsHead301defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsGet301200Response
    | HttpRedirectsGet301301Response
    | HttpRedirectsGet301defaultResponse
): response is HttpRedirectsGet301defaultResponse;
export function isUnexpected(
  response: HttpRedirectsPut301301Response | HttpRedirectsPut301defaultResponse
): response is HttpRedirectsPut301defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsHead302200Response
    | HttpRedirectsHead302302Response
    | HttpRedirectsHead302defaultResponse
): response is HttpRedirectsHead302defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsGet302200Response
    | HttpRedirectsGet302302Response
    | HttpRedirectsGet302defaultResponse
): response is HttpRedirectsGet302defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsPatch302302Response
    | HttpRedirectsPatch302defaultResponse
): response is HttpRedirectsPatch302defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsPost303200Response
    | HttpRedirectsPost303303Response
    | HttpRedirectsPost303defaultResponse
): response is HttpRedirectsPost303defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsHead307200Response
    | HttpRedirectsHead307307Response
    | HttpRedirectsHead307defaultResponse
): response is HttpRedirectsHead307defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsGet307200Response
    | HttpRedirectsGet307307Response
    | HttpRedirectsGet307defaultResponse
): response is HttpRedirectsGet307defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsOptions307200Response
    | HttpRedirectsOptions307307Response
    | HttpRedirectsOptions307defaultResponse
): response is HttpRedirectsOptions307defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsPut307200Response
    | HttpRedirectsPut307307Response
    | HttpRedirectsPut307defaultResponse
): response is HttpRedirectsPut307defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsPatch307200Response
    | HttpRedirectsPatch307307Response
    | HttpRedirectsPatch307defaultResponse
): response is HttpRedirectsPatch307defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsPost307200Response
    | HttpRedirectsPost307307Response
    | HttpRedirectsPost307defaultResponse
): response is HttpRedirectsPost307defaultResponse;
export function isUnexpected(
  response:
    | HttpRedirectsDelete307200Response
    | HttpRedirectsDelete307307Response
    | HttpRedirectsDelete307defaultResponse
): response is HttpRedirectsDelete307defaultResponse;
export function isUnexpected(
  response: HttpRetryHead408200Response | HttpRetryHead408defaultResponse
): response is HttpRetryHead408defaultResponse;
export function isUnexpected(
  response: HttpRetryPut500200Response | HttpRetryPut500defaultResponse
): response is HttpRetryPut500defaultResponse;
export function isUnexpected(
  response: HttpRetryPatch500200Response | HttpRetryPatch500defaultResponse
): response is HttpRetryPatch500defaultResponse;
export function isUnexpected(
  response: HttpRetryGet502200Response | HttpRetryGet502defaultResponse
): response is HttpRetryGet502defaultResponse;
export function isUnexpected(
  response: HttpRetryOptions502200Response | HttpRetryOptions502defaultResponse
): response is HttpRetryOptions502defaultResponse;
export function isUnexpected(
  response: HttpRetryPost503200Response | HttpRetryPost503defaultResponse
): response is HttpRetryPost503defaultResponse;
export function isUnexpected(
  response: HttpRetryDelete503200Response | HttpRetryDelete503defaultResponse
): response is HttpRetryDelete503defaultResponse;
export function isUnexpected(
  response: HttpRetryPut504200Response | HttpRetryPut504defaultResponse
): response is HttpRetryPut504defaultResponse;
export function isUnexpected(
  response: HttpRetryPatch504200Response | HttpRetryPatch504defaultResponse
): response is HttpRetryPatch504defaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError200ValiddefaultResponse
): response is MultipleResponsesGet200Model204NoModelDefaultError200ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError204ValiddefaultResponse
): response is MultipleResponsesGet200Model204NoModelDefaultError204ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError201InvaliddefaultResponse
): response is MultipleResponsesGet200Model204NoModelDefaultError201InvaliddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model204NoModelDefaultError202None200Response
    | MultipleResponsesGet200Model204NoModelDefaultError202None204Response
    | MultipleResponsesGet200Model204NoModelDefaultError202NonedefaultResponse
): response is MultipleResponsesGet200Model204NoModelDefaultError202NonedefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError400ValiddefaultResponse
): response is MultipleResponsesGet200Model204NoModelDefaultError400ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model201ModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError200Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError200ValiddefaultResponse
): response is MultipleResponsesGet200Model201ModelDefaultError200ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model201ModelDefaultError201Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError201Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError201ValiddefaultResponse
): response is MultipleResponsesGet200Model201ModelDefaultError201ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200Model201ModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError400Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError400ValiddefaultResponse
): response is MultipleResponsesGet200Model201ModelDefaultError400ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValiddefaultResponse
): response is MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValiddefaultResponse
): response is MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValiddefaultResponse
): response is MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValiddefaultResponse
): response is MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultError202None202Response
    | MultipleResponsesGet202None204NoneDefaultError202None204Response
    | MultipleResponsesGet202None204NoneDefaultError202NonedefaultResponse
): response is MultipleResponsesGet202None204NoneDefaultError202NonedefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultError204None202Response
    | MultipleResponsesGet202None204NoneDefaultError204None204Response
    | MultipleResponsesGet202None204NoneDefaultError204NonedefaultResponse
): response is MultipleResponsesGet202None204NoneDefaultError204NonedefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultError400Valid202Response
    | MultipleResponsesGet202None204NoneDefaultError400Valid204Response
    | MultipleResponsesGet202None204NoneDefaultError400ValiddefaultResponse
): response is MultipleResponsesGet202None204NoneDefaultError400ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone202InvaliddefaultResponse
): response is MultipleResponsesGet202None204NoneDefaultNone202InvaliddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultNone204None202Response
    | MultipleResponsesGet202None204NoneDefaultNone204None204Response
    | MultipleResponsesGet202None204NoneDefaultNone204NonedefaultResponse
): response is MultipleResponsesGet202None204NoneDefaultNone204NonedefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultNone400None202Response
    | MultipleResponsesGet202None204NoneDefaultNone400None204Response
    | MultipleResponsesGet202None204NoneDefaultNone400NonedefaultResponse
): response is MultipleResponsesGet202None204NoneDefaultNone400NonedefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone400InvaliddefaultResponse
): response is MultipleResponsesGet202None204NoneDefaultNone400InvaliddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGetDefaultModelA400Valid200Response
    | MultipleResponsesGetDefaultModelA400ValiddefaultResponse
): response is MultipleResponsesGetDefaultModelA400ValiddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGetDefaultModelA400None200Response
    | MultipleResponsesGetDefaultModelA400NonedefaultResponse
): response is MultipleResponsesGetDefaultModelA400NonedefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGetDefaultNone400Invalid200Response
    | MultipleResponsesGetDefaultNone400InvaliddefaultResponse
): response is MultipleResponsesGetDefaultNone400InvaliddefaultResponse;
export function isUnexpected(
  response:
    | MultipleResponsesGetDefaultNone400None200Response
    | MultipleResponsesGetDefaultNone400NonedefaultResponse
): response is MultipleResponsesGetDefaultNone400NonedefaultResponse;
export function isUnexpected(
  response:
    | HttpFailureGetEmptyError200Response
    | HttpFailureGetEmptyErrordefaultResponse
    | HttpSuccessHead200200Response
    | HttpSuccessHead200defaultResponse
    | HttpSuccessGet200200Response
    | HttpSuccessGet200defaultResponse
    | HttpSuccessOptions200200Response
    | HttpSuccessOptions200defaultResponse
    | HttpSuccessPut200200Response
    | HttpSuccessPut200defaultResponse
    | HttpSuccessPatch200200Response
    | HttpSuccessPatch200defaultResponse
    | HttpSuccessPost200200Response
    | HttpSuccessPost200defaultResponse
    | HttpSuccessDelete200200Response
    | HttpSuccessDelete200defaultResponse
    | HttpSuccessPut201201Response
    | HttpSuccessPut201defaultResponse
    | HttpSuccessPost201201Response
    | HttpSuccessPost201defaultResponse
    | HttpSuccessPut202202Response
    | HttpSuccessPut202defaultResponse
    | HttpSuccessPatch202202Response
    | HttpSuccessPatch202defaultResponse
    | HttpSuccessPost202202Response
    | HttpSuccessPost202defaultResponse
    | HttpSuccessDelete202202Response
    | HttpSuccessDelete202defaultResponse
    | HttpSuccessHead204204Response
    | HttpSuccessHead204defaultResponse
    | HttpSuccessPut204204Response
    | HttpSuccessPut204defaultResponse
    | HttpSuccessPatch204204Response
    | HttpSuccessPatch204defaultResponse
    | HttpSuccessPost204204Response
    | HttpSuccessPost204defaultResponse
    | HttpSuccessDelete204204Response
    | HttpSuccessDelete204defaultResponse
    | HttpSuccessHead404204Response
    | HttpSuccessHead404404Response
    | HttpSuccessHead404defaultResponse
    | HttpRedirectsHead300200Response
    | HttpRedirectsHead300300Response
    | HttpRedirectsHead300defaultResponse
    | HttpRedirectsGet300200Response
    | HttpRedirectsGet300300Response
    | HttpRedirectsGet300defaultResponse
    | HttpRedirectsHead301200Response
    | HttpRedirectsHead301301Response
    | HttpRedirectsHead301defaultResponse
    | HttpRedirectsGet301200Response
    | HttpRedirectsGet301301Response
    | HttpRedirectsGet301defaultResponse
    | HttpRedirectsPut301301Response
    | HttpRedirectsPut301defaultResponse
    | HttpRedirectsHead302200Response
    | HttpRedirectsHead302302Response
    | HttpRedirectsHead302defaultResponse
    | HttpRedirectsGet302200Response
    | HttpRedirectsGet302302Response
    | HttpRedirectsGet302defaultResponse
    | HttpRedirectsPatch302302Response
    | HttpRedirectsPatch302defaultResponse
    | HttpRedirectsPost303200Response
    | HttpRedirectsPost303303Response
    | HttpRedirectsPost303defaultResponse
    | HttpRedirectsHead307200Response
    | HttpRedirectsHead307307Response
    | HttpRedirectsHead307defaultResponse
    | HttpRedirectsGet307200Response
    | HttpRedirectsGet307307Response
    | HttpRedirectsGet307defaultResponse
    | HttpRedirectsOptions307200Response
    | HttpRedirectsOptions307307Response
    | HttpRedirectsOptions307defaultResponse
    | HttpRedirectsPut307200Response
    | HttpRedirectsPut307307Response
    | HttpRedirectsPut307defaultResponse
    | HttpRedirectsPatch307200Response
    | HttpRedirectsPatch307307Response
    | HttpRedirectsPatch307defaultResponse
    | HttpRedirectsPost307200Response
    | HttpRedirectsPost307307Response
    | HttpRedirectsPost307defaultResponse
    | HttpRedirectsDelete307200Response
    | HttpRedirectsDelete307307Response
    | HttpRedirectsDelete307defaultResponse
    | HttpRetryHead408200Response
    | HttpRetryHead408defaultResponse
    | HttpRetryPut500200Response
    | HttpRetryPut500defaultResponse
    | HttpRetryPatch500200Response
    | HttpRetryPatch500defaultResponse
    | HttpRetryGet502200Response
    | HttpRetryGet502defaultResponse
    | HttpRetryOptions502200Response
    | HttpRetryOptions502defaultResponse
    | HttpRetryPost503200Response
    | HttpRetryPost503defaultResponse
    | HttpRetryDelete503200Response
    | HttpRetryDelete503defaultResponse
    | HttpRetryPut504200Response
    | HttpRetryPut504defaultResponse
    | HttpRetryPatch504200Response
    | HttpRetryPatch504defaultResponse
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError200Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError200ValiddefaultResponse
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError204Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError204ValiddefaultResponse
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError201Invalid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError201InvaliddefaultResponse
    | MultipleResponsesGet200Model204NoModelDefaultError202None200Response
    | MultipleResponsesGet200Model204NoModelDefaultError202None204Response
    | MultipleResponsesGet200Model204NoModelDefaultError202NonedefaultResponse
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model204NoModelDefaultError400Valid204Response
    | MultipleResponsesGet200Model204NoModelDefaultError400ValiddefaultResponse
    | MultipleResponsesGet200Model201ModelDefaultError200Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError200Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError200ValiddefaultResponse
    | MultipleResponsesGet200Model201ModelDefaultError201Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError201Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError201ValiddefaultResponse
    | MultipleResponsesGet200Model201ModelDefaultError400Valid200Response
    | MultipleResponsesGet200Model201ModelDefaultError400Valid201Response
    | MultipleResponsesGet200Model201ModelDefaultError400ValiddefaultResponse
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValiddefaultResponse
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValiddefaultResponse
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValiddefaultResponse
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid200Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid201Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400Valid404Response
    | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValiddefaultResponse
    | MultipleResponsesGet202None204NoneDefaultError202None202Response
    | MultipleResponsesGet202None204NoneDefaultError202None204Response
    | MultipleResponsesGet202None204NoneDefaultError202NonedefaultResponse
    | MultipleResponsesGet202None204NoneDefaultError204None202Response
    | MultipleResponsesGet202None204NoneDefaultError204None204Response
    | MultipleResponsesGet202None204NoneDefaultError204NonedefaultResponse
    | MultipleResponsesGet202None204NoneDefaultError400Valid202Response
    | MultipleResponsesGet202None204NoneDefaultError400Valid204Response
    | MultipleResponsesGet202None204NoneDefaultError400ValiddefaultResponse
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone202Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone202InvaliddefaultResponse
    | MultipleResponsesGet202None204NoneDefaultNone204None202Response
    | MultipleResponsesGet202None204NoneDefaultNone204None204Response
    | MultipleResponsesGet202None204NoneDefaultNone204NonedefaultResponse
    | MultipleResponsesGet202None204NoneDefaultNone400None202Response
    | MultipleResponsesGet202None204NoneDefaultNone400None204Response
    | MultipleResponsesGet202None204NoneDefaultNone400NonedefaultResponse
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid202Response
    | MultipleResponsesGet202None204NoneDefaultNone400Invalid204Response
    | MultipleResponsesGet202None204NoneDefaultNone400InvaliddefaultResponse
    | MultipleResponsesGetDefaultModelA400Valid200Response
    | MultipleResponsesGetDefaultModelA400ValiddefaultResponse
    | MultipleResponsesGetDefaultModelA400None200Response
    | MultipleResponsesGetDefaultModelA400NonedefaultResponse
    | MultipleResponsesGetDefaultNone400Invalid200Response
    | MultipleResponsesGetDefaultNone400InvaliddefaultResponse
    | MultipleResponsesGetDefaultNone400None200Response
    | MultipleResponsesGetDefaultNone400NonedefaultResponse
): response is
  | HttpFailureGetEmptyErrordefaultResponse
  | HttpSuccessHead200defaultResponse
  | HttpSuccessGet200defaultResponse
  | HttpSuccessOptions200defaultResponse
  | HttpSuccessPut200defaultResponse
  | HttpSuccessPatch200defaultResponse
  | HttpSuccessPost200defaultResponse
  | HttpSuccessDelete200defaultResponse
  | HttpSuccessPut201defaultResponse
  | HttpSuccessPost201defaultResponse
  | HttpSuccessPut202defaultResponse
  | HttpSuccessPatch202defaultResponse
  | HttpSuccessPost202defaultResponse
  | HttpSuccessDelete202defaultResponse
  | HttpSuccessHead204defaultResponse
  | HttpSuccessPut204defaultResponse
  | HttpSuccessPatch204defaultResponse
  | HttpSuccessPost204defaultResponse
  | HttpSuccessDelete204defaultResponse
  | HttpSuccessHead404defaultResponse
  | HttpRedirectsHead300defaultResponse
  | HttpRedirectsGet300defaultResponse
  | HttpRedirectsHead301defaultResponse
  | HttpRedirectsGet301defaultResponse
  | HttpRedirectsPut301defaultResponse
  | HttpRedirectsHead302defaultResponse
  | HttpRedirectsGet302defaultResponse
  | HttpRedirectsPatch302defaultResponse
  | HttpRedirectsPost303defaultResponse
  | HttpRedirectsHead307defaultResponse
  | HttpRedirectsGet307defaultResponse
  | HttpRedirectsOptions307defaultResponse
  | HttpRedirectsPut307defaultResponse
  | HttpRedirectsPatch307defaultResponse
  | HttpRedirectsPost307defaultResponse
  | HttpRedirectsDelete307defaultResponse
  | HttpRetryHead408defaultResponse
  | HttpRetryPut500defaultResponse
  | HttpRetryPatch500defaultResponse
  | HttpRetryGet502defaultResponse
  | HttpRetryOptions502defaultResponse
  | HttpRetryPost503defaultResponse
  | HttpRetryDelete503defaultResponse
  | HttpRetryPut504defaultResponse
  | HttpRetryPatch504defaultResponse
  | MultipleResponsesGet200Model204NoModelDefaultError200ValiddefaultResponse
  | MultipleResponsesGet200Model204NoModelDefaultError204ValiddefaultResponse
  | MultipleResponsesGet200Model204NoModelDefaultError201InvaliddefaultResponse
  | MultipleResponsesGet200Model204NoModelDefaultError202NonedefaultResponse
  | MultipleResponsesGet200Model204NoModelDefaultError400ValiddefaultResponse
  | MultipleResponsesGet200Model201ModelDefaultError200ValiddefaultResponse
  | MultipleResponsesGet200Model201ModelDefaultError201ValiddefaultResponse
  | MultipleResponsesGet200Model201ModelDefaultError400ValiddefaultResponse
  | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError200ValiddefaultResponse
  | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError201ValiddefaultResponse
  | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError404ValiddefaultResponse
  | MultipleResponsesGet200ModelA201ModelC404ModelDDefaultError400ValiddefaultResponse
  | MultipleResponsesGet202None204NoneDefaultError202NonedefaultResponse
  | MultipleResponsesGet202None204NoneDefaultError204NonedefaultResponse
  | MultipleResponsesGet202None204NoneDefaultError400ValiddefaultResponse
  | MultipleResponsesGet202None204NoneDefaultNone202InvaliddefaultResponse
  | MultipleResponsesGet202None204NoneDefaultNone204NonedefaultResponse
  | MultipleResponsesGet202None204NoneDefaultNone400NonedefaultResponse
  | MultipleResponsesGet202None204NoneDefaultNone400InvaliddefaultResponse
  | MultipleResponsesGetDefaultModelA400ValiddefaultResponse
  | MultipleResponsesGetDefaultModelA400NonedefaultResponse
  | MultipleResponsesGetDefaultNone400InvaliddefaultResponse
  | MultipleResponsesGetDefaultNone400NonedefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  const pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    return true;
  }
  return !pathDetails.includes(response.status);
}
