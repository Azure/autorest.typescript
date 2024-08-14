import {
  SdkClientType,
  SdkHttpOperation,
  SdkPackage,
  SdkServiceMethod,
  SdkType,
  getClientType
} from "@azure-tools/typespec-client-generator-core";
import { Operation, Type, getNamespaceFullName } from "@typespec/compiler";
import { provideContext, useContext } from "../../contextManager.js";

export interface SdkTypeContext {
  operations: Map<Type, SdkServiceMethod<SdkHttpOperation>>;
  types: Map<Type, SdkType>;
}

export function useSdkTypes() {
  const sdkTypesContext = useContext("sdkTypes");
  const { tcgcContext } = useContext("emitContext");

  function getSdkType(type: Operation): SdkServiceMethod<SdkHttpOperation>;
  function getSdkType(type: Type): SdkType;
  function getSdkType(
    type: Type | Operation
  ): SdkType | SdkServiceMethod<SdkHttpOperation> {
    let sdkType: SdkType | SdkServiceMethod<SdkHttpOperation> | undefined;

    if (type.kind === "Operation") {
      sdkType = sdkTypesContext.operations.get(type);
    } else {
      sdkType =
        sdkTypesContext.types.get(type) ?? getClientType(tcgcContext, type);
    }

    if (!sdkType) {
      throw new Error(
        `SdkType not found for type: ${type.kind} ${
          "name" in type && typeof type.name == "string" ? type.name : ""
        } ${
          "namespace" in type && type.namespace
            ? ` in ${getNamespaceFullName(type.namespace)}`
            : ""
        }`
      );
    }

    return sdkType;
  }

  return getSdkType;
}

export function provideSdkTypes(sdkPackage: SdkPackage<SdkHttpOperation>) {
  const sdkTypesContext = {
    operations: new Map<Type, SdkServiceMethod<SdkHttpOperation>>(),
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
    for (const method of getAllOperationsFromClient(client)) {
      if (!method.__raw) {
        continue;
      }

      sdkTypesContext.operations.set(method.__raw, method);
    }
  }

  provideContext("sdkTypes", sdkTypesContext);
}

function getAllOperationsFromClient(client: SdkClientType<SdkHttpOperation>) {
  const methodQueue = [...client.methods];
  const operations: SdkServiceMethod<SdkHttpOperation>[] = [];
  while (methodQueue.length > 0) {
    const method = methodQueue.pop()!;
    if (method.kind === "clientaccessor") {
      method.response.methods.forEach((m) => methodQueue.push(m));
    } else {
      operations.push(method);
    }
  }

  return operations;
}
