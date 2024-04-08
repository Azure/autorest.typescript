// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { PropertySendParameters, PropertyGetParameters } from "./parameters.js";
import {
  PropertySend204Response,
  PropertyGet200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Send {
  post(
    options?: PropertySendParameters,
  ): StreamableMethod<PropertySend204Response>;
  get(
    options?: PropertyGetParameters,
  ): StreamableMethod<PropertyGet200Response>;
}

export interface Routes {
  /** Resource for '/serialization/encoded-name/json/property' has methods for the following verbs: post, get */
  (path: "/serialization/encoded-name/json/property"): Send;
}

export type SerializationEncodedNameJsonClient = Client & {
  path: Routes;
};
