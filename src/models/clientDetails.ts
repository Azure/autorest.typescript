// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { UnionDetails } from "./unionDetails";
import { OperationGroupDetails } from "./operationDetails";
import { Mapper } from "@azure/core-http";
import { ParameterDetails } from "./parameterDetails";
import { ObjectDetails } from "./modelDetails";
import { EndpointDetails } from "../transforms/urlTransforms";
import { KnownMediaType } from "@azure-tools/codegen";

export interface ClientOptions {
  azureArm?: boolean;
  addCredentials?: boolean;
  disablePagingAsyncIterators?: boolean;
  mediaTypes?: Set<KnownMediaType>;
  hasPaging?: boolean;
  skipEnumValidation?: boolean;
  credentialScopes?: string[];
}

export interface TracingInfo {
  namespace: string;
  packagePrefix: string;
}

export interface ClientDetails {
  name: string;
  className: string;
  description?: string;
  sourceFileName: string;
  objects: ObjectDetails[];
  mappers: Mapper[];
  unions: UnionDetails[];
  operationGroups: OperationGroupDetails[];
  parameters: ParameterDetails[];
  options: ClientOptions;
  endpoint: EndpointDetails;
  srcPath?: string;
  tracing?: TracingInfo;
}
