import {
  SdkHttpOperation,
  SdkMethod,
  SdkPackage,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { Operation, Type } from "@typespec/compiler";
import { provideContext, useContext } from "../contextManager.js";

export interface SdkTypeContext {
  operations: Map<Type, SdkMethod<SdkHttpOperation>>;
  types: Map<Type, SdkType>;
}

export function useSdkTypes() {
  const sdkTypesContext = useContext("sdkTypes");

  function getSdkType(type: Operation): SdkMethod<SdkHttpOperation>;
  function getSdkType(type: Type): SdkType;
  function getSdkType(
    type: Type | Operation
  ): SdkType | SdkMethod<SdkHttpOperation> {
    let sdkType: SdkType | SdkMethod<SdkHttpOperation> | undefined;

    if (type.kind === "Operation") {
      sdkType = sdkTypesContext.operations.get(type);
    } else {
      sdkType = sdkTypesContext.types.get(type);
    }

    if (!sdkType) {
      throw new Error(`SdkType not found for type: ${type}`);
    }

    return sdkType;
  }

  return getSdkType;
}

export function provideSdkTypes(sdkPackage: SdkPackage<SdkHttpOperation>) {
  const sdkTypesContext = {
    operations: new Map<Type, SdkMethod<SdkHttpOperation>>(),
    types: new Map<Type, SdkType>()
  };

  for (const sdkEnum of sdkPackage.enums) {
    if (!sdkEnum.__raw) {
      continue;
    }

    sdkTypesContext.types.set(sdkEnum.__raw, sdkEnum);
  }

  for (const sdkModel of sdkPackage.models) {
    if (!sdkModel.__raw) {
      continue;
    }

    sdkTypesContext.types.set(sdkModel.__raw, sdkModel);
  }

  for (const client of sdkPackage.clients) {
    for (const method of client.methods) {
      if (!method.__raw) {
        continue;
      }

      sdkTypesContext.operations.set(method.__raw, method);
    }
  }

  provideContext("sdkTypes", sdkTypesContext);
}
