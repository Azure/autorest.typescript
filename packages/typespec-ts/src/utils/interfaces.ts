import { RLCOptions } from "@azure-tools/rlc-common";
import { SdkContext as TCGCSdkContext } from "@azure-tools/typespec-client-generator-core";

export interface SdkContext extends TCGCSdkContext {
  options?: RLCOptions;
  generationDir?: GenerationDirDetail;
}

export interface GenerationDirDetail {
  rlcSourcesDir: string;
  modularSourcesDir?: string;
  metadataDir?: string;
}
