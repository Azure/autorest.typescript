// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  Parameter,
  ParameterLocation,
  AllSchemaTypes,
  ImplementationLocation
} from "@azure-tools/codemodel";
import { Mapper } from "@azure/core-http";
import { TypeDetails } from "./modelDetails";
import { KnownMediaType } from "@azure-tools/codegen";

export interface ParameterDetails {
  nameRef: string;
  defaultValue?: any;
  description?: string;
  name: string;
  serializedName: string;
  location: ParameterLocation;
  required?: boolean;
  parameterPath: string | string[];
  mapper: string | Mapper;
  isGlobal: boolean;
  parameter: Parameter;
  operationsIn?: { [operationName: string]: { description: string } };
  collectionFormat?: string;
  schemaType: AllSchemaTypes;
  implementationLocation?: ImplementationLocation;
  typeDetails: TypeDetails;
  skipEncoding?: boolean;
  isSynthetic?: boolean;
  /**
   * Only specified when an operation has multiple requests.
   * This is used to identify which request a parameter belongs to.
   */
  targetMediaType?: KnownMediaType;
}
