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
}

export interface RLCModel {
  libraryName: string;
  srcPath: string;
  paths: Paths;
  options?: RLCOptions;
  params?: OperationParameter[];
  respons?: OperationResponse[];
}

export interface OperationParameter {
  operationName: string;
  parameters: ParameterMetadata[];
}

export interface ParameterMetadata {
  type: "query" | "path" | "header" | "body";
  name: string;
  param: Schema;
}

export interface OperationResponse {
  operationName: string;
  responses: ResponseMetadata[];
}

export interface ResponseMetadata {
  statusCode: string;
  description?: string;
  headers?: Record<string, Schema>;
  body?: Schema;
}
export interface Schema {
  name: string;
  type: string;
  description?: string;
  required?: boolean;
  default?: any;
  readOnly?: boolean;
  usage?: SchemaContext[];
}

export enum SchemaContext {
  /** Schema is used as an input to an operation. */
  Input = "input",
  /** Schema is used as an output from an operation. */
  Output = "output",
  /** Schema is used as an exception from an operation. */
  Exception = "exception"
}