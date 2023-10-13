// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { CreateFileRequest } from "./models.js";

export interface CreateFileBodyParam {
  body: CreateFileRequest;
}

export interface CreateFileMediaTypesParam {
  contentType: "multipart/form-data";
}

export type CreateFileParameters = CreateFileMediaTypesParam &
  CreateFileBodyParam &
  RequestParameters;
