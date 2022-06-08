// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { UnionDetails } from "./unionDetails";
import { OperationGroupDetails } from "./operationDetails";
import { Mapper } from "@azure/core-http";
import { ParameterDetails } from "./parameterDetails";
import { ObjectDetails } from "./modelDetails";
import { EndpointDetails } from "../transforms/urlTransforms";
import { KnownMediaType } from "@azure-tools/codegen";
import { Info } from "@autorest/codemodel";
import { SampleGroup } from "./sampleDetails";
import { Security } from "@autorest/codemodel";

export interface ClientOptions {
  mediaTypes?: Set<KnownMediaType>;
  hasPaging?: boolean;
}

export interface TracingInfo {
  namespace: string;
  packagePrefix?: string;
}

export interface DependencyInfo {
  link: string;
  description: string;
}

export interface ClientDetails {
  name: string;
  className: string;
  info: Info;
  sourceFileName: string;
  objects: ObjectDetails[];
  mappers: Mapper[];
  unions: UnionDetails[];
  operationGroups: OperationGroupDetails[];
  parameters: ParameterDetails[];
  options: ClientOptions;
  endpoint: EndpointDetails;
  samples?: SampleGroup[];
  allTypes: string[];
  security: Security
}
