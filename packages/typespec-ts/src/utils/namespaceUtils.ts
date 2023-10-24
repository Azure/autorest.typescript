import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import {
  Namespace,
  isGlobalNamespace,
  isService,
  Operation
} from "@typespec/compiler";

export function getModelNamespaceName(
  dpgContext: SdkContext,
  namespace: Namespace
): string[] {
  const result: string[] = [];
  namespace &&
  !isGlobalNamespace(dpgContext.program, namespace) &&
  !isService(dpgContext.program, namespace)
    ? (result.push(...getModelNamespaceName(dpgContext, namespace.namespace!)),
      result.push(namespace.name))
    : result;
  return result;
}

export function getOperationNamespaceInterfaceName(
  dpgContext: SdkContext,
  operation: Operation
): string[] {
  const result: string[] = [];
  if (operation.interface) {
    if (operation.interface.namespace) {
      result.push(
        ...getModelNamespaceName(dpgContext, operation.interface.namespace)
      );
    }
    result.push(operation.interface.name);
  } else if (operation.namespace) {
    !isGlobalNamespace(dpgContext.program, operation.namespace) &&
    !isService(dpgContext.program, operation.namespace)
      ? (result.push(
          ...getModelNamespaceName(dpgContext, operation.namespace!)
        ),
        result.push(operation.namespace.name))
      : result;
  }

  return result;
}
