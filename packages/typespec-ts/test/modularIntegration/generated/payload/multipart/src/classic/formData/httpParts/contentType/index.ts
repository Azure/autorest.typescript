// Licensed under the MIT License.

import { MultiPartContext } from "../../../../api/multiPartContext.js";
import {
  optionalContentType,
  requiredContentType,
  imageJpegContentType,
} from "../../../../api/formData/httpParts/contentType/index.js";
import {
  FileWithHttpPartSpecificContentTypeRequest,
  FileWithHttpPartRequiredContentTypeRequest,
  FileWithHttpPartOptionalContentTypeRequest,
} from "../../../../models/models.js";
import {
  FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams,
  FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams,
  FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams,
} from "../../../../api/options.js";

/** Interface representing a FormDataHttpPartsContentType operations. */
export interface FormDataHttpPartsContentTypeOperations {
  /** Test content-type: multipart/form-data for optional content type */
  optionalContentType: (
    body: FileWithHttpPartOptionalContentTypeRequest,
    options?: FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams,
  ) => Promise<void>;
  /** Test content-type: multipart/form-data */
  requiredContentType: (
    body: FileWithHttpPartRequiredContentTypeRequest,
    options?: FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams,
  ) => Promise<void>;
  /** Test content-type: multipart/form-data */
  imageJpegContentType: (
    body: FileWithHttpPartSpecificContentTypeRequest,
    options?: FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams,
  ) => Promise<void>;
}

function _getFormDataHttpPartsContentType(context: MultiPartContext) {
  return {
    optionalContentType: (
      body: FileWithHttpPartOptionalContentTypeRequest,
      options?: FormDataHttpPartsContentTypeOptionalContentTypeOptionalParams,
    ) => optionalContentType(context, body, options),
    requiredContentType: (
      body: FileWithHttpPartRequiredContentTypeRequest,
      options?: FormDataHttpPartsContentTypeRequiredContentTypeOptionalParams,
    ) => requiredContentType(context, body, options),
    imageJpegContentType: (
      body: FileWithHttpPartSpecificContentTypeRequest,
      options?: FormDataHttpPartsContentTypeImageJpegContentTypeOptionalParams,
    ) => imageJpegContentType(context, body, options),
  };
}

export function _getFormDataHttpPartsContentTypeOperations(
  context: MultiPartContext,
): FormDataHttpPartsContentTypeOperations {
  return {
    ..._getFormDataHttpPartsContentType(context),
  };
}
