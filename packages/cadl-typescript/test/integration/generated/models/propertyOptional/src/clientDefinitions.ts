// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetAllParameters,
  PutAllParameters,
  GetDefaultParameters,
  PutDefaultParameters,
  GetRequiredOnlyParameters,
  PutRequiredOnlyParameters,
} from "./parameters";
import {
  GetAll200Response,
  PutAll204Response,
  GetDefault200Response,
  PutDefault204Response,
  GetRequiredOnly200Response,
  PutRequiredOnly204Response,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetAll {
  /** Get models that will return all properties in the model */
  get(options?: GetAllParameters): StreamableMethod<GetAll200Response>;
  /** Put a body with all properties present. */
  put(options: PutAllParameters): StreamableMethod<PutAll204Response>;
}

export interface GetDefault {
  /** Get models that will return the default object */
  get(options?: GetDefaultParameters): StreamableMethod<GetDefault200Response>;
  /** Put a body with default properties. */
  put(options: PutDefaultParameters): StreamableMethod<PutDefault204Response>;
}

export interface GetAll {
  /** Get models that will return all properties in the model */
  get(options?: GetAllParameters): StreamableMethod<GetAll200Response>;
  /** Put a body with all properties present. */
  put(options: PutAllParameters): StreamableMethod<PutAll204Response>;
}

export interface GetDefault {
  /** Get models that will return the default object */
  get(options?: GetDefaultParameters): StreamableMethod<GetDefault200Response>;
  /** Put a body with default properties. */
  put(options: PutDefaultParameters): StreamableMethod<PutDefault204Response>;
}

export interface GetAll {
  /** Get models that will return all properties in the model */
  get(options?: GetAllParameters): StreamableMethod<GetAll200Response>;
  /** Put a body with all properties present. */
  put(options: PutAllParameters): StreamableMethod<PutAll204Response>;
}

export interface GetDefault {
  /** Get models that will return the default object */
  get(options?: GetDefaultParameters): StreamableMethod<GetDefault200Response>;
  /** Put a body with default properties. */
  put(options: PutDefaultParameters): StreamableMethod<PutDefault204Response>;
}

export interface GetAll {
  /** Get models that will return all properties in the model */
  get(options?: GetAllParameters): StreamableMethod<GetAll200Response>;
  /** Put a body with all properties present. */
  put(options: PutAllParameters): StreamableMethod<PutAll204Response>;
}

export interface GetDefault {
  /** Get models that will return the default object */
  get(options?: GetDefaultParameters): StreamableMethod<GetDefault200Response>;
  /** Put a body with default properties. */
  put(options: PutDefaultParameters): StreamableMethod<PutDefault204Response>;
}

export interface GetAll {
  /** Get models that will return all properties in the model */
  get(options?: GetAllParameters): StreamableMethod<GetAll200Response>;
  /** Put a body with all properties present. */
  put(options: PutAllParameters): StreamableMethod<PutAll204Response>;
}

export interface GetDefault {
  /** Get models that will return the default object */
  get(options?: GetDefaultParameters): StreamableMethod<GetDefault200Response>;
  /** Put a body with default properties. */
  put(options: PutDefaultParameters): StreamableMethod<PutDefault204Response>;
}

export interface GetAll {
  /** Get models that will return all properties in the model */
  get(options?: GetAllParameters): StreamableMethod<GetAll200Response>;
  /** Put a body with all properties present. */
  put(options: PutAllParameters): StreamableMethod<PutAll204Response>;
}

export interface GetDefault {
  /** Get models that will return the default object */
  get(options?: GetDefaultParameters): StreamableMethod<GetDefault200Response>;
  /** Put a body with default properties. */
  put(options: PutDefaultParameters): StreamableMethod<PutDefault204Response>;
}

export interface GetAll {
  /** Get models that will return all properties in the model */
  get(options?: GetAllParameters): StreamableMethod<GetAll200Response>;
  /** Put a body with all properties present. */
  put(options: PutAllParameters): StreamableMethod<PutAll204Response>;
}

export interface GetRequiredOnly {
  /** Get models that will return only the required properties */
  get(
    options?: GetRequiredOnlyParameters
  ): StreamableMethod<GetRequiredOnly200Response>;
  /** Put a body with only required properties. */
  put(
    options: PutRequiredOnlyParameters
  ): StreamableMethod<PutRequiredOnly204Response>;
}

export interface Routes {
  /** Resource for '/models/properties/optional/string/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/string/all"): GetAll;
  /** Resource for '/models/properties/optional/string/default' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/string/default"): GetDefault;
  /** Resource for '/models/properties/optional/bytes/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/bytes/all"): GetAll;
  /** Resource for '/models/properties/optional/bytes/default' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/bytes/default"): GetDefault;
  /** Resource for '/models/properties/optional/datetime/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/datetime/all"): GetAll;
  /** Resource for '/models/properties/optional/datetime/default' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/datetime/default"): GetDefault;
  /** Resource for '/models/properties/optional/duration/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/duration/all"): GetAll;
  /** Resource for '/models/properties/optional/duration/default' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/duration/default"): GetDefault;
  /** Resource for '/models/properties/optional/collections/bytes/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/collections/bytes/all"): GetAll;
  /** Resource for '/models/properties/optional/collections/bytes/default' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/collections/bytes/default"): GetDefault;
  /** Resource for '/models/properties/optional/collections/model/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/collections/model/all"): GetAll;
  /** Resource for '/models/properties/optional/collections/model/default' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/collections/model/default"): GetDefault;
  /** Resource for '/models/properties/optional/requiredAndOptional/all' has methods for the following verbs: get, put */
  (path: "/models/properties/optional/requiredAndOptional/all"): GetAll;
  /** Resource for '/models/properties/optional/requiredAndOptional/requiredOnly' has methods for the following verbs: get, put */
  (
    path: "/models/properties/optional/requiredAndOptional/requiredOnly"
  ): GetRequiredOnly;
}

export type ModelsPropertyOptionalClient = Client & {
  path: Routes;
};
