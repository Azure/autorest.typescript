import { RLCOptions, SchemaContext } from "@azure-tools/rlc-common";
import { SdkContext as TCGCSdkContext } from "@azure-tools/typespec-client-generator-core";
import { ModelProperty } from "@typespec/compiler";

export interface SdkContext extends TCGCSdkContext {
  rlcOptions?: RLCOptions;
  generationPathDetail?: GenerationDirDetail;
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
  // default to false, if true, the schema would be enriched with more information
  needRef?: boolean;
  // relevant property which the type belongs to
  relevantProperty?: ModelProperty;
  // content types which would impact the schema
  contentTypes?: string[];
  // if this type is taken as request body
  isRequestBody?: boolean;
  // if the parent type is taken as request body
  isParentRequestBody?: boolean;
}
