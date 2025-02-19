// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MultiPartContext } from "../../../api/multiPartContext.js";
import { jsonArrayAndFileArray } from "../../../api/formData/httpParts/index.js";
import { ComplexHttpPartsModelRequest } from "../../../models/models.js";
import { FormDataHttpPartsJsonArrayAndFileArrayOptionalParams } from "../../../api/options.js";
import {
  FormDataHttpPartsContentTypeOperations,
  _getFormDataHttpPartsContentTypeOperations,
} from "./contentType/index.js";
import {
  FormDataHttpPartsNonStringOperations,
  _getFormDataHttpPartsNonStringOperations,
} from "./nonString/index.js";

/** Interface representing a FormDataHttpParts operations. */
export interface FormDataHttpPartsOperations {
  /** Test content-type: multipart/form-data for mixed scenarios */
  jsonArrayAndFileArray: (
    body: ComplexHttpPartsModelRequest,
    options?: FormDataHttpPartsJsonArrayAndFileArrayOptionalParams,
  ) => Promise<void>;
  nonString: FormDataHttpPartsNonStringOperations;
  contentType: FormDataHttpPartsContentTypeOperations;
}

function _getFormDataHttpParts(context: MultiPartContext) {
  return {
    jsonArrayAndFileArray: (
      body: ComplexHttpPartsModelRequest,
      options?: FormDataHttpPartsJsonArrayAndFileArrayOptionalParams,
    ) => jsonArrayAndFileArray(context, body, options),
  };
}

export function _getFormDataHttpPartsOperations(
  context: MultiPartContext,
): FormDataHttpPartsOperations {
  return {
    ..._getFormDataHttpParts(context),
    nonString: _getFormDataHttpPartsNonStringOperations(context),
    contentType: _getFormDataHttpPartsContentTypeOperations(context),
  };
}
