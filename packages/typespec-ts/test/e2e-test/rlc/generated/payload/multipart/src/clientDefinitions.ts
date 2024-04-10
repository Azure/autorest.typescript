// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FormDataBasicParameters,
  FormDataComplexParameters,
  FormDataJsonPartParameters,
  FormDataBinaryArrayPartsParameters,
  FormDataJsonArrayPartsParameters,
  FormDataMultiBinaryPartsParameters,
  FormDataCheckFileNameAndContentTypeParameters,
} from "./parameters.js";
import {
  FormDataBasic204Response,
  FormDataComplex204Response,
  FormDataJsonPart204Response,
  FormDataBinaryArrayParts204Response,
  FormDataJsonArrayParts204Response,
  FormDataMultiBinaryParts204Response,
  FormDataCheckFileNameAndContentType204Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Basic {
  /** Test content-type: multipart/form-data */
  post(
    options: FormDataBasicParameters,
  ): StreamableMethod<FormDataBasic204Response>;
}

export interface Complex {
  /** Test content-type: multipart/form-data for mixed scenarios */
  post(
    options: FormDataComplexParameters,
  ): StreamableMethod<FormDataComplex204Response>;
}

export interface JsonPart {
  /** Test content-type: multipart/form-data for scenario contains json part and binary part */
  post(
    options: FormDataJsonPartParameters,
  ): StreamableMethod<FormDataJsonPart204Response>;
}

export interface BinaryArrayParts {
  /** Test content-type: multipart/form-data for scenario contains multi binary parts */
  post(
    options: FormDataBinaryArrayPartsParameters,
  ): StreamableMethod<FormDataBinaryArrayParts204Response>;
}

export interface JsonArrayParts {
  /** Test content-type: multipart/form-data for scenario contains multi json parts */
  post(
    options: FormDataJsonArrayPartsParameters,
  ): StreamableMethod<FormDataJsonArrayParts204Response>;
}

export interface MultiBinaryParts {
  /** Test content-type: multipart/form-data for scenario contains multi binary parts */
  post(
    options: FormDataMultiBinaryPartsParameters,
  ): StreamableMethod<FormDataMultiBinaryParts204Response>;
}

export interface CheckFileNameAndContentType {
  /** Test content-type: multipart/form-data */
  post(
    options: FormDataCheckFileNameAndContentTypeParameters,
  ): StreamableMethod<FormDataCheckFileNameAndContentType204Response>;
}

export interface Routes {
  /** Resource for '/multipart/form-data/mixed-parts' has methods for the following verbs: post */
  (path: "/multipart/form-data/mixed-parts"): Basic;
  /** Resource for '/multipart/form-data/complex-parts' has methods for the following verbs: post */
  (path: "/multipart/form-data/complex-parts"): Complex;
  /** Resource for '/multipart/form-data/json-part' has methods for the following verbs: post */
  (path: "/multipart/form-data/json-part"): JsonPart;
  /** Resource for '/multipart/form-data/binary-array-parts' has methods for the following verbs: post */
  (path: "/multipart/form-data/binary-array-parts"): BinaryArrayParts;
  /** Resource for '/multipart/form-data/json-array-parts' has methods for the following verbs: post */
  (path: "/multipart/form-data/json-array-parts"): JsonArrayParts;
  /** Resource for '/multipart/form-data/multi-binary-parts' has methods for the following verbs: post */
  (path: "/multipart/form-data/multi-binary-parts"): MultiBinaryParts;
  /** Resource for '/multipart/form-data/check-filename-and-content-type' has methods for the following verbs: post */
  (
    path: "/multipart/form-data/check-filename-and-content-type",
  ): CheckFileNameAndContentType;
}

export type MultiPartClient = Client & {
  path: Routes;
};
