// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpMethod } from "@azure-tools/codemodel";
import { KnownMediaType } from "@azure-tools/codegen";
import { Mapper } from "@azure/core-http";
import { ParameterDetails } from "./parameterDetails";
import { TypeDetails } from "./modelDetails";

/**
 * Details of an operation request, transformed from Request.
 */
export interface OperationRequestDetails {
  path: string;
  method: HttpMethod;
  mediaType?: KnownMediaType;
}

export type OperationResponseMapper = Mapper | string;

/**
 * Contains all the mappers related to an operation response
 */
export interface OperationResponseMappers {
  bodyMapper?: OperationResponseMapper;
  headersMapper?: OperationResponseMapper;
}

/**
 * Contains the type information about each part of the response
 * these types will be used to generate the ResponseType by
 * combining these types as needed.
 */
export interface OperationResponseTypes {
  bodyType?: TypeDetails;
  headersType?: TypeDetails;
}

/**
 * Details of an operation response, transformed from Response or SchemaResponse.
 */
export interface OperationResponseDetails {
  statusCodes: string[]; // Can be a status code number or "default"
  mediaType?: KnownMediaType;
  mappers: OperationResponseMappers;
  types: OperationResponseTypes;
  isError?: boolean;
}

/**
 * Metadata about operation paging
 */
export interface PagingDetails {
  group: string;
  member: string;
  valueTypes: TypeDetails[];
  itemName?: string;
  nextLinkName: string;
}

/**
 * Details of an operation, transformed from Operation.
 */
export interface OperationDetails {
  name: string;
  fullName: string;
  description: string;
  apiVersions: string[];
  request: OperationRequestDetails;
  responses: OperationResponseDetails[];
  typeDetails: TypeDetails;
  mediaTypes: Set<KnownMediaType>;
  paging?: PagingDetails;
}

/**
 * Details of an operation spec, transformed from OperationSpec.
 */
export interface OperationSpecDetails {
  path: string;
  httpMethod: string;
  responses: OperationSpecResponses;
  requestBody?: ParameterDetails;
  queryParameters?: ParameterDetails[];
  urlParameters?: ParameterDetails[];
  isXML?: boolean;
}

/**
 * Details of an operation group, transformed from OperationGroup.
 */
export interface OperationGroupDetails {
  key: string;
  name: string;
  operations: OperationDetails[];
  mediaTypes: Set<KnownMediaType>;
  isTopLevel: boolean;
}

export interface OperationSpecResponse {
  bodyMapper?: Mapper | string;
}

export type OperationSpecResponses = {
  [responseCode: string]: OperationResponseMappers;
};
