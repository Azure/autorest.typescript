// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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

export type SampleParameterPosition = "client" | "path" | "method";

export type SampleParameters = Record<
  SampleParameterPosition,
  SampleParameter[]
>;

export type TestSampleParameters = Record<
  SampleParameterPosition,
  ExampleParameter[]
>;

export interface SampleParameter {
  name: string;
  assignment?: string;
}
