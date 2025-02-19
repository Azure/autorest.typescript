// Licensed under the MIT License.

import { MultiPartContext } from "../../api/multiPartContext.js";
import {
  anonymousModel,
  checkFileNameAndContentType,
  multiBinaryParts,
  binaryArrayParts,
  jsonPart,
  fileArrayAndBasic,
  basic,
} from "../../api/formData/index.js";
import {
  MultiPartRequest,
  ComplexPartsRequest,
  JsonPartRequest,
  BinaryArrayPartsRequest,
  MultiBinaryPartsRequest,
} from "../../models/models.js";
import {
  FormDataAnonymousModelOptionalParams,
  FormDataCheckFileNameAndContentTypeOptionalParams,
  FormDataMultiBinaryPartsOptionalParams,
  FormDataBinaryArrayPartsOptionalParams,
  FormDataJsonPartOptionalParams,
  FormDataFileArrayAndBasicOptionalParams,
  FormDataBasicOptionalParams,
} from "../../api/options.js";
import {
  FormDataHttpPartsOperations,
  _getFormDataHttpPartsOperations,
} from "./httpParts/index.js";

/** Interface representing a FormData operations. */
export interface FormDataOperations {
  /** Test content-type: multipart/form-data */
  anonymousModel: (
    profileImage: Uint8Array,
    options?: FormDataAnonymousModelOptionalParams,
  ) => Promise<void>;
  /** Test content-type: multipart/form-data */
  checkFileNameAndContentType: (
    body: MultiPartRequest,
    options?: FormDataCheckFileNameAndContentTypeOptionalParams,
  ) => Promise<void>;
  /** Test content-type: multipart/form-data for scenario contains multi binary parts */
  multiBinaryParts: (
    body: MultiBinaryPartsRequest,
    options?: FormDataMultiBinaryPartsOptionalParams,
  ) => Promise<void>;
  /** Test content-type: multipart/form-data for scenario contains multi binary parts */
  binaryArrayParts: (
    body: BinaryArrayPartsRequest,
    options?: FormDataBinaryArrayPartsOptionalParams,
  ) => Promise<void>;
  /** Test content-type: multipart/form-data for scenario contains json part and binary part */
  jsonPart: (
    body: JsonPartRequest,
    options?: FormDataJsonPartOptionalParams,
  ) => Promise<void>;
  /** Test content-type: multipart/form-data for mixed scenarios */
  fileArrayAndBasic: (
    body: ComplexPartsRequest,
    options?: FormDataFileArrayAndBasicOptionalParams,
  ) => Promise<void>;
  /** Test content-type: multipart/form-data */
  basic: (
    body: MultiPartRequest,
    options?: FormDataBasicOptionalParams,
  ) => Promise<void>;
  httpParts: FormDataHttpPartsOperations;
}

function _getFormData(context: MultiPartContext) {
  return {
    anonymousModel: (
      profileImage: Uint8Array,
      options?: FormDataAnonymousModelOptionalParams,
    ) => anonymousModel(context, profileImage, options),
    checkFileNameAndContentType: (
      body: MultiPartRequest,
      options?: FormDataCheckFileNameAndContentTypeOptionalParams,
    ) => checkFileNameAndContentType(context, body, options),
    multiBinaryParts: (
      body: MultiBinaryPartsRequest,
      options?: FormDataMultiBinaryPartsOptionalParams,
    ) => multiBinaryParts(context, body, options),
    binaryArrayParts: (
      body: BinaryArrayPartsRequest,
      options?: FormDataBinaryArrayPartsOptionalParams,
    ) => binaryArrayParts(context, body, options),
    jsonPart: (
      body: JsonPartRequest,
      options?: FormDataJsonPartOptionalParams,
    ) => jsonPart(context, body, options),
    fileArrayAndBasic: (
      body: ComplexPartsRequest,
      options?: FormDataFileArrayAndBasicOptionalParams,
    ) => fileArrayAndBasic(context, body, options),
    basic: (body: MultiPartRequest, options?: FormDataBasicOptionalParams) =>
      basic(context, body, options),
  };
}

export function _getFormDataOperations(
  context: MultiPartContext,
): FormDataOperations {
  return {
    ..._getFormData(context),
    httpParts: _getFormDataHttpPartsOperations(context),
  };
}
