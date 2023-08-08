import { RLCOptions } from "@azure-tools/rlc-common";
import { SdkContext } from "@azure-tools/typespec-client-generator-core";

export interface RLCSdkContext extends SdkContext {
  options: RLCOptions;
}
