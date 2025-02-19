// Licensed under the MIT License.

import { MultiPartContext } from "../../../../api/multiPartContext.js";
import { float } from "../../../../api/formData/httpParts/nonString/index.js";
import { FormDataHttpPartsNonStringFloatOptionalParams } from "../../../../api/options.js";

/** Interface representing a FormDataHttpPartsNonString operations. */
export interface FormDataHttpPartsNonStringOperations {
  /** Test content-type: multipart/form-data for non string */
  float: (
    body: {
      temperature: {
        body: number;
        contentType: "text/plain";
      };
    },
    options?: FormDataHttpPartsNonStringFloatOptionalParams,
  ) => Promise<void>;
}

function _getFormDataHttpPartsNonString(context: MultiPartContext) {
  return {
    float: (
      body: {
        temperature: {
          body: number;
          contentType: "text/plain";
        };
      },
      options?: FormDataHttpPartsNonStringFloatOptionalParams,
    ) => float(context, body, options),
  };
}

export function _getFormDataHttpPartsNonStringOperations(
  context: MultiPartContext,
): FormDataHttpPartsNonStringOperations {
  return {
    ..._getFormDataHttpPartsNonString(context),
  };
}
