// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  MultiPartRequest,
  ComplexPartsRequest,
  JsonPartRequest,
  BinaryArrayPartsRequest,
  MultiBinaryPartsRequest,
  FileWithHttpPartSpecificContentTypeRequest,
  FileWithHttpPartRequiredContentTypeRequest,
  FileWithHttpPartOptionalContentTypeRequest,
  ComplexHttpPartsModelRequest,
} from "./models.js";

export interface FormDataBasicBodyParam {
  body: MultiPartRequest;
}

export interface FormDataBasicMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataBasicParameters = FormDataBasicMediaTypesParam &
  FormDataBasicBodyParam &
  RequestParameters;

export interface FormDataComplexBodyParam {
  body: ComplexPartsRequest;
}

export interface FormDataComplexMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataComplexParameters = FormDataComplexMediaTypesParam &
  FormDataComplexBodyParam &
  RequestParameters;

export interface FormDataJsonPartBodyParam {
  body: JsonPartRequest;
}

export interface FormDataJsonPartMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataJsonPartParameters = FormDataJsonPartMediaTypesParam &
  FormDataJsonPartBodyParam &
  RequestParameters;

export interface FormDataBinaryArrayPartsBodyParam {
  body: BinaryArrayPartsRequest;
}

export interface FormDataBinaryArrayPartsMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataBinaryArrayPartsParameters =
  FormDataBinaryArrayPartsMediaTypesParam &
    FormDataBinaryArrayPartsBodyParam &
    RequestParameters;

export interface FormDataMultiBinaryPartsBodyParam {
  body: MultiBinaryPartsRequest;
}

export interface FormDataMultiBinaryPartsMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataMultiBinaryPartsParameters =
  FormDataMultiBinaryPartsMediaTypesParam &
    FormDataMultiBinaryPartsBodyParam &
    RequestParameters;

export interface FormDataCheckFileNameAndContentTypeBodyParam {
  body: MultiPartRequest;
}

export interface FormDataCheckFileNameAndContentTypeMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataCheckFileNameAndContentTypeParameters =
  FormDataCheckFileNameAndContentTypeMediaTypesParam &
    FormDataCheckFileNameAndContentTypeBodyParam &
    RequestParameters;

export interface FormDataAnonymousModelBodyParam {
  body?:
    | FormData
    | Array<{
        name: "profileImage";
        body:
          | string
          | Uint8Array
          | ReadableStream<Uint8Array>
          | NodeJS.ReadableStream
          | File;
        filename?: string;
        contentType?: string;
      }>;
}

export interface FormDataAnonymousModelMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataAnonymousModelParameters =
  FormDataAnonymousModelMediaTypesParam &
    FormDataAnonymousModelBodyParam &
    RequestParameters;

export interface FormDataFileWithHttpPartSpecificContentTypeBodyParam {
  body: FileWithHttpPartSpecificContentTypeRequest;
}

export interface FormDataFileWithHttpPartSpecificContentTypeMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataFileWithHttpPartSpecificContentTypeParameters =
  FormDataFileWithHttpPartSpecificContentTypeMediaTypesParam &
    FormDataFileWithHttpPartSpecificContentTypeBodyParam &
    RequestParameters;

export interface FormDataFileWithHttpPartRequiredContentTypeBodyParam {
  body: FileWithHttpPartRequiredContentTypeRequest;
}

export interface FormDataFileWithHttpPartRequiredContentTypeMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataFileWithHttpPartRequiredContentTypeParameters =
  FormDataFileWithHttpPartRequiredContentTypeMediaTypesParam &
    FormDataFileWithHttpPartRequiredContentTypeBodyParam &
    RequestParameters;

export interface FormDataFileWithHttpPartOptionalContentTypeBodyParam {
  body: FileWithHttpPartOptionalContentTypeRequest;
}

export interface FormDataFileWithHttpPartOptionalContentTypeMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataFileWithHttpPartOptionalContentTypeParameters =
  FormDataFileWithHttpPartOptionalContentTypeMediaTypesParam &
    FormDataFileWithHttpPartOptionalContentTypeBodyParam &
    RequestParameters;

export interface FormDataComplexWithHttpPartBodyParam {
  body: ComplexHttpPartsModelRequest;
}

export interface FormDataComplexWithHttpPartMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataComplexWithHttpPartParameters =
  FormDataComplexWithHttpPartMediaTypesParam &
    FormDataComplexWithHttpPartBodyParam &
    RequestParameters;
