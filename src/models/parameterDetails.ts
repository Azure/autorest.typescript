// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Parameter,
  ParameterLocation,
  AllSchemaTypes,
  ImplementationLocation,
  SchemaType
} from "@azure-tools/codemodel";
import { Mapper } from "@azure/core-http";
import { TypeDetails } from "./modelDetails";

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
  collectionFormat?: string;
  schemaType: AllSchemaTypes;
  implementationLocation?: ImplementationLocation;
  typeDetails: TypeDetails;
}
