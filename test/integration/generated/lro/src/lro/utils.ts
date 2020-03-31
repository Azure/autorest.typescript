import { OperationSpec } from "@azure/core-http";

/**
 * Transforms an initial operation spec to a poll operation spec
 */
export function transformInitialSpecToPoll(
  initialOperationSpec: OperationSpec,
  pathOverride?: string
): OperationSpec {
  let path = pathOverride || initialOperationSpec.path;
  return { ...initialOperationSpec, httpMethod: "GET", path };
}
