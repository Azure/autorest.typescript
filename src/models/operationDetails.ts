// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ParameterLocation, HttpMethod } from "@azure-tools/codemodel";
import { KnownMediaType } from "@azure-tools/codegen";
import { Mapper, OperationQueryParameter } from "@azure/core-http";

/**
 * Details of an operation request parameter, transformed from Request.
 */
export interface OperationRequestParameterDetails {
  name: string;
  description: string;
  required?: boolean;
  modelType?: string; // Could be a primitive or actual model type
  mapper: Mapper | string;
  location: ParameterLocation;
  serializedName?: string;
}

/**
 * Details of an operation request, transformed from Request.
 */
export interface OperationRequestDetails {
  path: string;
  method: HttpMethod;
  mediaType?: KnownMediaType;
  parameters?: OperationRequestParameterDetails[];
}

/**
 * Details of an operation response, transformed from Response or SchemaResponse.
 */
export interface OperationResponseDetails {
  statusCodes: string[]; // Can be a status code number or "default"
  modelType?: string; // Could be a primitive or actual model type
  mediaType?: KnownMediaType;
  bodyMapper?: Mapper | string;
}

/**
 * Details of an operation, transformed from Operation.
 */
export interface OperationDetails {
  name: string;
  description: string;
  apiVersions: string[];
  request: OperationRequestDetails;
  responses: OperationResponseDetails[];
}

/**
 * Details of an operation spec, transformed from OperationSpec.
 */
export interface OperationSpecDetails {
  path: string;
  httpMethod: string;
  responses: OperationSpecResponses;
  requestBody?: OperationSpecRequest;
  queryParameters?: OperationQueryParameter[];
}

/**
 * Details of an operation group, transformed from OperationGroup.
 */
export interface OperationGroupDetails {
  key: string;
  name: string;
  operations: OperationDetails[];
}

export interface OperationSpecResponse {
  bodyMapper?: Mapper | string;
}

export type OperationSpecResponses = {
  [responseCode: string]: OperationSpecResponse;
};

export type OperationSpecRequest = {
  queryParameters: OperationQueryParameter[];
  parameterPath: string;
  mapper: Mapper | string;
};
