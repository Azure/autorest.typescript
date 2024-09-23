import { RLCOptions, SchemaContext } from "@azure-tools/rlc-common";
import { SdkContext as TCGCSdkContext } from "@azure-tools/typespec-client-generator-core";
import { ModelProperty } from "@typespec/compiler";
import { KnownMediaType } from "./mediaTypes.js";

export interface SdkContext extends TCGCSdkContext {
  rlcOptions?: RLCOptions;
  generationPathDetail?: GenerationDirDetail;
  hasApiVersionInClient?: boolean;
}

export interface GenerationDirDetail {
  rootDir: string;
  rlcSourcesDir: string;
  modularSourcesDir?: string;
  metadataDir: string;
}

export interface GetSchemaOptions {
  // usage is used to determine the type name of the schema
  usage?: SchemaContext[];
  // default to false
  // when it is true and we would only generate a reference and not cover too many details
  needRef?: boolean;
  // relevant property which the type belongs to
  relevantProperty?: ModelProperty;
  // content types which would impact the schema
  mediaTypes?: KnownMediaType[];
  // if this type is taken as request body
  isRequestBody?: boolean;
  // if the parent type is taken as request body
  isParentRequestBody?: boolean;
}
