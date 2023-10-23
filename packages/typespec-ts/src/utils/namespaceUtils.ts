import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { Namespace, isGlobalNamespace, isService } from "@typespec/compiler";

export function getModelNamespaceName(
  dpgContext: SdkContext,
  namespace: Namespace
): string[] {
  const result: string[] = [];
  namespace &&
    !isGlobalNamespace(dpgContext.program, namespace) &&
    !isService(dpgContext.program, namespace)
    ? (result.push(...getModelNamespaceName(dpgContext, namespace.namespace!)), result.push(namespace.name))
    : result;
  return result;
}
