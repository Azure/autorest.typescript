import { Schema as RlcType } from "@azure-tools/rlc-common";
import { Type } from "@typespec/compiler";

export interface RlcTypeMetadata {
  rlcType: RlcType;
}

export type RlcMetaTree = Map<Type, RlcTypeMetadata>;
