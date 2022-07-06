import { Schema } from "@autorest/codemodel";
import { ExampleParameter } from "@autorest/testmodeler/dist/src/core/model";
// import { ExampleParameter } from "@autorest/testmodeler";

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

/**
 * A group of samples in operation_id level and they are used to generate in a sample file
 */
export interface RLCSampleGroup {
  filename: string,
  clientPackageName: string,
  defaultFactoryName: string,
  samples: RLCSampleDetail[],
  importedTypes?: string[],
}

/**
 * An independent sample detail and it will be wrapped as a func
 */
export interface RLCSampleDetail {
  /**
   * metadata for comments
   */
  description: string,
  originalFileLocation?: string,
  name: string,
  path: string;
  defaultFactoryName: string,
  clientParamAssignments: string[],
  pathParamAssignments: string[];
  methodParamAssignments: string[],
  clientParamNames: string;
  pathParamNames: string;
  methodParamNames: "options" | "";
  method: string;
  isLRO: boolean,
  isPaging: boolean,
}

export type SampleParameterPosition = 'client' | 'path' | 'method';

export type SampleParameters = Record<SampleParameterPosition, SampleParameter[]>;

export type TestSampleParameters = Record<SampleParameterPosition, ExampleParameter[]>;

export interface SampleParameter {
  name: string;
  assignment?: string;
}
