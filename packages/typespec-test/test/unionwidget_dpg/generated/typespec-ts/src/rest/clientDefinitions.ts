// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CustomGetParameters,
  CustomGet1Parameters,
  CustomGet2Parameters,
  CustomGet3Parameters,
  CustomGet4Parameters,
  CustomGet5Parameters,
  CustomGet6Parameters,
  CustomGet7Parameters,
  CustomGet8Parameters,
  CustomGet9Parameters,
  CustomGet10Parameters,
  CustomGet11Parameters,
  CustomGet12Parameters,
  CustomGet13Parameters,
  CustomGet14Parameters,
  CustomGet15Parameters,
  CustomGet16Parameters,
  CustomGet17Parameters,
  CustomGet18Parameters,
  CustomGet19Parameters,
  CustomGet20Parameters,
  CustomGet21Parameters,
  CustomGet22Parameters,
  CustomGet23Parameters,
  CustomGet24Parameters,
  CustomGet25Parameters,
  CustomGet26Parameters,
} from "./parameters.js";
import {
  CustomGet200Response,
  CustomGet1200Response,
  CustomGet2200Response,
  CustomGet3200Response,
  CustomGet4200Response,
  CustomGet5200Response,
  CustomGet6200Response,
  CustomGet7200Response,
  CustomGet8200Response,
  CustomGet9200Response,
  CustomGet10200Response,
  CustomGet11200Response,
  CustomGet12200Response,
  CustomGet13200Response,
  CustomGet14200Response,
  CustomGet15200Response,
  CustomGet16200Response,
  CustomGet17200Response,
  CustomGet18200Response,
  CustomGet19200Response,
  CustomGet20200Response,
  CustomGet21200Response,
  CustomGet22200Response,
  CustomGet23200Response,
  CustomGet24200Response,
  CustomGet25200Response,
  CustomGet26200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CustomGet {
  get(options?: CustomGetParameters): StreamableMethod<CustomGet200Response>;
}

export interface CustomGet1 {
  get(options?: CustomGet1Parameters): StreamableMethod<CustomGet1200Response>;
}

export interface CustomGet2 {
  get(options?: CustomGet2Parameters): StreamableMethod<CustomGet2200Response>;
}

export interface CustomGet3 {
  get(options?: CustomGet3Parameters): StreamableMethod<CustomGet3200Response>;
}

export interface CustomGet4 {
  get(options?: CustomGet4Parameters): StreamableMethod<CustomGet4200Response>;
}

export interface CustomGet5 {
  get(options?: CustomGet5Parameters): StreamableMethod<CustomGet5200Response>;
}

export interface CustomGet6 {
  get(options?: CustomGet6Parameters): StreamableMethod<CustomGet6200Response>;
}

export interface CustomGet7 {
  get(options?: CustomGet7Parameters): StreamableMethod<CustomGet7200Response>;
}

export interface CustomGet8 {
  get(options?: CustomGet8Parameters): StreamableMethod<CustomGet8200Response>;
}

export interface CustomGet9 {
  get(options?: CustomGet9Parameters): StreamableMethod<CustomGet9200Response>;
}

export interface CustomGet10 {
  get(
    options?: CustomGet10Parameters
  ): StreamableMethod<CustomGet10200Response>;
}

export interface CustomGet11 {
  get(
    options?: CustomGet11Parameters
  ): StreamableMethod<CustomGet11200Response>;
}

export interface CustomGet12 {
  get(
    options?: CustomGet12Parameters
  ): StreamableMethod<CustomGet12200Response>;
}

export interface CustomGet13 {
  get(
    options?: CustomGet13Parameters
  ): StreamableMethod<CustomGet13200Response>;
}

export interface CustomGet14 {
  get(
    options?: CustomGet14Parameters
  ): StreamableMethod<CustomGet14200Response>;
}

export interface CustomGet15 {
  get(
    options?: CustomGet15Parameters
  ): StreamableMethod<CustomGet15200Response>;
}

export interface CustomGet16 {
  get(
    options?: CustomGet16Parameters
  ): StreamableMethod<CustomGet16200Response>;
}

export interface CustomGet17 {
  get(
    options?: CustomGet17Parameters
  ): StreamableMethod<CustomGet17200Response>;
}

export interface CustomGet18 {
  get(
    options?: CustomGet18Parameters
  ): StreamableMethod<CustomGet18200Response>;
}

export interface CustomGet19 {
  get(
    options?: CustomGet19Parameters
  ): StreamableMethod<CustomGet19200Response>;
}

export interface CustomGet20 {
  get(
    options?: CustomGet20Parameters
  ): StreamableMethod<CustomGet20200Response>;
}

export interface CustomGet21 {
  get(
    options?: CustomGet21Parameters
  ): StreamableMethod<CustomGet21200Response>;
}

export interface CustomGet22 {
  get(
    options?: CustomGet22Parameters
  ): StreamableMethod<CustomGet22200Response>;
}

export interface CustomGet23 {
  get(
    options?: CustomGet23Parameters
  ): StreamableMethod<CustomGet23200Response>;
}

export interface CustomGet24 {
  get(
    options?: CustomGet24Parameters
  ): StreamableMethod<CustomGet24200Response>;
}

export interface CustomGet25 {
  get(
    options?: CustomGet25Parameters
  ): StreamableMethod<CustomGet25200Response>;
}

export interface CustomGet26 {
  get(
    options?: CustomGet26Parameters
  ): StreamableMethod<CustomGet26200Response>;
}

export interface Routes {
  /** Resource for '/customGet' has methods for the following verbs: get */
  (path: "/customGet"): CustomGet;
  /** Resource for '/customGet1' has methods for the following verbs: get */
  (path: "/customGet1"): CustomGet1;
  /** Resource for '/customGet2' has methods for the following verbs: get */
  (path: "/customGet2"): CustomGet2;
  /** Resource for '/customGet3' has methods for the following verbs: get */
  (path: "/customGet3"): CustomGet3;
  /** Resource for '/customGet4' has methods for the following verbs: get */
  (path: "/customGet4"): CustomGet4;
  /** Resource for '/customGet5' has methods for the following verbs: get */
  (path: "/customGet5"): CustomGet5;
  /** Resource for '/customGet6' has methods for the following verbs: get */
  (path: "/customGet6"): CustomGet6;
  /** Resource for '/customGet7' has methods for the following verbs: get */
  (path: "/customGet7"): CustomGet7;
  /** Resource for '/customGet8' has methods for the following verbs: get */
  (path: "/customGet8"): CustomGet8;
  /** Resource for '/customGet9' has methods for the following verbs: get */
  (path: "/customGet9"): CustomGet9;
  /** Resource for '/customGet10' has methods for the following verbs: get */
  (path: "/customGet10"): CustomGet10;
  /** Resource for '/customGet11' has methods for the following verbs: get */
  (path: "/customGet11"): CustomGet11;
  /** Resource for '/customGet12' has methods for the following verbs: get */
  (path: "/customGet12"): CustomGet12;
  /** Resource for '/customGet13' has methods for the following verbs: get */
  (path: "/customGet13"): CustomGet13;
  /** Resource for '/customGet14' has methods for the following verbs: get */
  (path: "/customGet14"): CustomGet14;
  /** Resource for '/customGet15' has methods for the following verbs: get */
  (path: "/customGet15"): CustomGet15;
  /** Resource for '/customGet16' has methods for the following verbs: get */
  (path: "/customGet16"): CustomGet16;
  /** Resource for '/customGet17' has methods for the following verbs: get */
  (path: "/customGet17"): CustomGet17;
  /** Resource for '/customGet18' has methods for the following verbs: get */
  (path: "/customGet18"): CustomGet18;
  /** Resource for '/customGet19' has methods for the following verbs: get */
  (path: "/customGet19"): CustomGet19;
  /** Resource for '/customGet20' has methods for the following verbs: get */
  (path: "/customGet20"): CustomGet20;
  /** Resource for '/customGet21' has methods for the following verbs: get */
  (path: "/customGet21"): CustomGet21;
  /** Resource for '/customGet22' has methods for the following verbs: get */
  (path: "/customGet22"): CustomGet22;
  /** Resource for '/customGet23' has methods for the following verbs: get */
  (path: "/customGet23"): CustomGet23;
  /** Resource for '/customGet24' has methods for the following verbs: get */
  (path: "/customGet24"): CustomGet24;
  /** Resource for '/customGet25' has methods for the following verbs: get */
  (path: "/customGet25"): CustomGet25;
  /** Resource for '/customGet26' has methods for the following verbs: get */
  (path: "/customGet26"): CustomGet26;
}

export type DemoServiceContext = Client & {
  path: Routes;
};
