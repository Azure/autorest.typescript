// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  HttpMethod,
  Language as ModelerLanguage,
  Parameter,
  VirtualParameter
} from "@autorest/codemodel";
import { KnownMediaType } from "@azure-tools/codegen";
import { Mapper } from "@azure/core-http";
import { ParameterDetails } from "./parameterDetails";
import { TypeDetails } from "./modelDetails";
import { Scope } from "ts-morph";

/**
 * Details of an operation request, transformed from Request.
 */
export interface OperationRequestDetails {
  path: string;
  method: HttpMethod;
  mediaType?: KnownMediaType;
  parameters?: (Parameter | VirtualParameter)[];
}

export type OperationResponseMapper = Mapper | string;

/**
 * Contains all the mappers related to an operation response
 */
export interface OperationResponseMappers {
  bodyMapper?: OperationResponseMapper;
  headersMapper?: OperationResponseMapper;
  isError?: boolean;
}

/**
 * Contains the type information about each part of the response
 * these types will be used to generate the ResponseType by
 * combining these types as needed.
 */
export interface OperationResponseTypes {
  bodyType?: TypeDetails;
  headersType?: TypeDetails;
  pagingValueType?: TypeDetails;
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
 * Details of an operation, transformed from Operation.
 */
export interface OperationDetails {
  name: string;
  fullName: string;
  description: string;
  apiVersions: string[];
  /**
   * Operation parameters that are shared across requests.
   */
  parameters: Parameter[];
  requests: OperationRequestDetails[];
  responses: OperationResponseDetails[];
  typeDetails: TypeDetails;
  mediaTypes: Set<KnownMediaType>;
  pagination?: PaginationDetails;
  isLro: boolean;
  lroOptions?: { "final-state-via": string };
  scope?: Scope;
  namePrefix?: string;
}

/**
 * Details of an operation spec, transformed from OperationSpec.
 */
export interface OperationSpecDetails {
  /**
   * The name that the OperationSpec will have once generated.
   */
  name: string;
  path: string;
  httpMethod: string;
  responses: OperationSpecResponses;
  requestBody?: ParameterDetails | ParameterDetails[];
  formDataParameters?: ParameterDetails[];
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
  originalKey: string;
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

/**
 * Operation pagination metadata.
 */
export interface PaginationDetails {
  /**
   * The name of the field in the response that can be paged over.
   */
  itemName: string;
  /**
   * The possible types for the iterable field.
   */
  itemTypes: TypeDetails[];
  /**
   * Name of the field containing the nextLink value.
   * If missing, all results are returned in a single page.
   */
  nextLinkName?: string | null;
  /**
   * The name of the operation to call with the nextLink.
   */
  nextLinkOperationName?: string;
  /**
   * The name of the operationGroup that nextLinkOperationName resides in.
   */
  group?: string;
  /**
   * The name of the operation that nextLinkOperationName references.
   */
  member?: string;
  /**
   * Indicates whether this operation is used by another operation to get pages.
   */
  isNextLinkMethod: boolean;
}
