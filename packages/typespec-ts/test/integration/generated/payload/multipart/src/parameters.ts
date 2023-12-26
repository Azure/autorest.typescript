// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { MultiPartRequest } from "./models";

export interface FormDataBasicBodyParam {
  body: MultiPartRequest;
}

export interface FormDataBasicMediaTypesParam {
  contentType: "multipart/form-data";
}

export type FormDataBasicParameters = FormDataBasicMediaTypesParam &
  FormDataBasicBodyParam &
  RequestParameters;
