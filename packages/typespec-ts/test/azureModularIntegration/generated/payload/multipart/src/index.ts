// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileContents } from "./static-helpers/multipartHelpers.js";

export { MultiPartClient } from "./multiPartClient.js";
export {
  MultiPartRequest,
  ComplexPartsRequest,
  Address,
  JsonPartRequest,
  BinaryArrayPartsRequest,
  MultiBinaryPartsRequest,
  ComplexHttpPartsModelRequest,
  FileWithHttpPartSpecificContentTypeRequest,
  FileWithHttpPartRequiredContentTypeRequest,
  FileWithHttpPartOptionalContentTypeRequest,
} from "./models/index.js";
export {
  MultiPartClientOptionalParams,
  FormDataHttpPartsNonStringFloatOptionalParams,
  FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams,
  FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams,
  FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams,
  FormDataHttpPartsJsonArrayAndFileArrayOptionalParams,
  FormDataAnonymousModelOptionalParams,
  FormDataCheckFileNameAndContentTypeOptionalParams,
  FormDataMultiBinaryPartsOptionalParams,
  FormDataBinaryArrayPartsOptionalParams,
  FormDataJsonPartOptionalParams,
  FormDataFileArrayAndBasicOptionalParams,
  FormDataBasicOptionalParams,
} from "./api/index.js";
export {
  FormDataOperations,
  FormDataHttpPartsOperations,
  FormDataHttpPartsContentTypeOperations,
  FormDataHttpPartsNonStringOperations,
} from "./classic/index.js";
export { FileContents };
