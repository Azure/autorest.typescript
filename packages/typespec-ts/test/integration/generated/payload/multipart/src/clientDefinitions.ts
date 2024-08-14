// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FormDataBasicParameters,
  FormDataComplexParameters,
  FormDataJsonPartParameters,
  FormDataBinaryArrayPartsParameters,
  FormDataMultiBinaryPartsParameters,
  FormDataCheckFileNameAndContentTypeParameters,
  FormDataAnonymousModelParameters,
  FormDataFileWithHttpPartSpecificContentTypeParameters,
  FormDataFileWithHttpPartRequiredContentTypeParameters,
  FormDataFileWithHttpPartOptionalContentTypeParameters,
  FormDataComplexWithHttpPartParameters,
} from "./parameters.js";
import {
  FormDataBasic204Response,
  FormDataComplex204Response,
  FormDataJsonPart204Response,
  FormDataBinaryArrayParts204Response,
  FormDataMultiBinaryParts204Response,
  FormDataCheckFileNameAndContentType204Response,
  FormDataAnonymousModel204Response,
  FormDataFileWithHttpPartSpecificContentType204Response,
  FormDataFileWithHttpPartRequiredContentType204Response,
  FormDataFileWithHttpPartOptionalContentType204Response,
  FormDataComplexWithHttpPart204Response,
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

export interface AnonymousModel {
  /** Test content-type: multipart/form-data */
  post(
    options: FormDataAnonymousModelParameters,
  ): StreamableMethod<FormDataAnonymousModel204Response>;
}

export interface FileWithHttpPartSpecificContentType {
  /** Test content-type: multipart/form-data */
  post(
    options: FormDataFileWithHttpPartSpecificContentTypeParameters,
  ): StreamableMethod<FormDataFileWithHttpPartSpecificContentType204Response>;
}

export interface FileWithHttpPartRequiredContentType {
  /** Test content-type: multipart/form-data */
  post(
    options: FormDataFileWithHttpPartRequiredContentTypeParameters,
  ): StreamableMethod<FormDataFileWithHttpPartRequiredContentType204Response>;
}

export interface FileWithHttpPartOptionalContentType {
  /** Test content-type: multipart/form-data for optional content type */
  post(
    options: FormDataFileWithHttpPartOptionalContentTypeParameters,
  ): StreamableMethod<FormDataFileWithHttpPartOptionalContentType204Response>;
}

export interface ComplexWithHttpPart {
  /** Test content-type: multipart/form-data for mixed scenarios */
  post(
    options: FormDataComplexWithHttpPartParameters,
  ): StreamableMethod<FormDataComplexWithHttpPart204Response>;
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
  /** Resource for '/multipart/form-data/multi-binary-parts' has methods for the following verbs: post */
  (path: "/multipart/form-data/multi-binary-parts"): MultiBinaryParts;
  /** Resource for '/multipart/form-data/check-filename-and-content-type' has methods for the following verbs: post */
  (
    path: "/multipart/form-data/check-filename-and-content-type",
  ): CheckFileNameAndContentType;
  /** Resource for '/multipart/form-data/anonymous-model' has methods for the following verbs: post */
  (path: "/multipart/form-data/anonymous-model"): AnonymousModel;
  /** Resource for '/multipart/form-data/check-filename-and-specific-content-type-with-httppart' has methods for the following verbs: post */
  (
    path: "/multipart/form-data/check-filename-and-specific-content-type-with-httppart",
  ): FileWithHttpPartSpecificContentType;
  /** Resource for '/multipart/form-data/check-filename-and-required-content-type-with-httppart' has methods for the following verbs: post */
  (
    path: "/multipart/form-data/check-filename-and-required-content-type-with-httppart",
  ): FileWithHttpPartRequiredContentType;
  /** Resource for '/multipart/form-data/file-with-http-part-optional-content-type' has methods for the following verbs: post */
  (
    path: "/multipart/form-data/file-with-http-part-optional-content-type",
  ): FileWithHttpPartOptionalContentType;
  /** Resource for '/multipart/form-data/complex-parts-with-httppart' has methods for the following verbs: post */
  (
    path: "/multipart/form-data/complex-parts-with-httppart",
  ): ComplexWithHttpPart;
}

export type MultiPartClient = Client & {
  path: Routes;
};
