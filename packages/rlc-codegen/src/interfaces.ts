// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
export interface RLCModel {
  libraryName: string;
  srcPath: string;
  paths: Paths;
  options?: RLCOptions;
  schemas: Schema[];
  apiVersionParam?: Parameter;
  parameters?: OperationParameter[];
  responses?: OperationResponse[];
  importSet?: Map<ImportKind, Set<string>>;
  pageInfo?: PageInfo;
}

export interface PageInfo {
  hasPaging: boolean;
  pageDetails?: PagingDetails;
}

export interface PagingDetails {
  itemNames: string[];
  nextLinkNames: string[];
  isComplexPaging: boolean;
}

export type Methods = {
  [key: string]: [OperationMethod];
};

export interface ResponseTypes {
  success: string[];
  error: string[];
}

export interface OperationMethod {
  optionsName: string;
  description: string;
  hasOptionalOptions: boolean;
  returnType: string;
  successStatus: string[];
  responseTypes: ResponseTypes;
  operationName: string;
}
export interface PathMetadata {
  name: string;
  pathParameters: PathParameter[];
  methods: Methods;
  annotations?: OperationAnnotations;
  operationGroupName: string;
  description: string;
}

export type Paths = Record<string, PathMetadata>;

export type PathParameter = {
  name: string;
  type: string;
  description?: string;
};

export interface OperationAnnotations {
  isLongRunning?: boolean;
  isPageable?: boolean;
}

export interface RLCOptions {
  includeShortcuts?: boolean;
  multiClient?: boolean;
  batch?: any[];
  packageDetails?: PackageDetails;
  addCredentials?: boolean;
  credentialScopes?: string[];
  credentialKeyHeaderName?: string;
  endpoint?: string;
  endpointParameterName?: string;
  generateMetadata?: boolean;
  generateTest?: boolean;
  generateSample?: boolean;
  azureSdkForJs?: boolean;
  azureOutputDirectory?: string;
  isCadlTest?: boolean;
}

export enum ImportKind {
  ResponseOutput,
  ParameterInput
}
export interface File {
  path: string;
  content: string;
}

export enum SchemaContext {
  /** Schema is used as an input to an operation. */
  Input = "input",
  /** Schema is used as an output from an operation. */
  Output = "output",
  /** Schema is used as an exception from an operation. */
  Exception = "exception"
}

export interface Schema {
  name: string;
  type: string;
  typeName?: string;
  outputTypeName?: string;
  description?: string;
  required?: boolean;
  default?: any;
  readOnly?: boolean;
  usage?: SchemaContext[];
}

export interface ObjectSchema extends Schema {
  properties?: Record<string, Schema>;
  discriminatorValue?: string;
  discriminator?: Schema;
  isPolyParent?: boolean;
  children?: {
    all?: ObjectSchema[];
    immediate?: ObjectSchema[];
  };
  parents?: {
    all?: ObjectSchema[];
    immediate?: ObjectSchema[];
  };
}

export interface Property extends Schema {}

export interface Parameter extends Schema {}

export interface PackageDetails {
  name: string;
  scopeName?: string;
  nameWithoutScope?: string;
  description?: string;
  version: string;
}
export interface OperationParameter {
  operationGroup: string;
  operationName: string;
  /**
   * An operation with multiple request parameters means that
   * the operation can get different values for content-type and each value
   * may have a different type associated to it.
   */
  parameters: ParameterMetadatas[];
}

export interface ParameterMetadatas {
  parameters?: ParameterMetadata[];
  body?: ParameterBodyMetadata;
}

export interface ParameterBodyMetadata {
  // In case of formData we'd get multiple properties in body marked as partialBody
  isPartialBody?: boolean;
  body?: ParameterBodySchema[];
}

export type ParameterBodySchema = Schema;
export interface ParameterMetadata {
  type: "query" | "path" | "header";
  name: string;
  param: Schema;
}

export interface OperationResponse {
  operationGroup: string;
  operationName: string;
  responses: ResponseMetadata[];
}
export interface ResponseMetadata {
  statusCode: string;
  description?: string;
  headers?: ResponseHeaderSchema[];
  body?: ResponseBodySchema;
}

export type ResponseHeaderSchema = Schema;
export type ResponseBodySchema = Schema;

export type ContentBuilder = {
  (model: RLCModel): File | undefined;
  (model: RLCModel, hasSampleGenerated?: boolean): File | undefined;
};
