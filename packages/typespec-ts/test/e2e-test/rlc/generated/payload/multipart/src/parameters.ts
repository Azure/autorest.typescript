// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  MultiPartRequest,
  ComplexPartsRequest,
  JsonPartRequest,
  BinaryArrayPartsRequest,
  JsonArrayPartsRequest,
  MultiBinaryPartsRequest,
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

export interface FormDataJsonArrayPartsBodyParam {
  body: JsonArrayPartsRequest;
}

export interface FormDataJsonArrayPartsMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataJsonArrayPartsParameters =
  FormDataJsonArrayPartsMediaTypesParam &
    FormDataJsonArrayPartsBodyParam &
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
