import { Schema } from "@autorest/codemodel";

export type PathParameter = {
  name: string;
  schema: Schema;
  description?: string;
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
}

export type Methods = {
  [key: string]: [OperationMethod];
};

export interface PathMetadata {
  name: string;
  pathParameters: PathParameter[];
  methods: Methods;
  annotations?: OperationAnnotations;
}

export type Paths = Record<string, PathMetadata>;

export interface OperationAnnotations {
  isLongRunning?: boolean;
  isPageable?: boolean;
}
