import { Schema as RlcType } from "./rlc-common/index.js";
import { Type } from "@typespec/compiler";

export interface RlcTypeMetadata {
  rlcType: RlcType;
}

export type RlcMetaTree = Map<Type, RlcTypeMetadata>;
