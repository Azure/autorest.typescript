// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Parameter,
  ParameterLocation,
  AllSchemaTypes,
  ImplementationLocation
} from "@azure-tools/codemodel";
import { Mapper } from "@azure/core-http";

export interface ParameterDetails {
  nameRef: string;
  description: string;
  name: string;
  serializedName: string;
  location: ParameterLocation;
  required?: boolean;
  parameterPath: string | string[];
  mapper: string | Mapper;
  isGlobal: boolean;
  parameter: Parameter;
  operationsIn?: string[];
  modelType: string;
  collectionFormat?: string;
  schemaType: AllSchemaTypes;
  implementationLocation?: ImplementationLocation;
}
