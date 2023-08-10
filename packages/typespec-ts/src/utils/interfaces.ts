import { RLCOptions } from "@azure-tools/rlc-common";
import { SdkContext as TCGCSdkContext } from "@azure-tools/typespec-client-generator-core";

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
