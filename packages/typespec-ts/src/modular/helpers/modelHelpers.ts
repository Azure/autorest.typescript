/**
 * This is the helper to build the model filters when importing models
 * @param hasLroImport
 * @returns the model names which should be filtered and not included in model imports
 */
export function buildModelImportFilters(
  hasLroImport = false
): Set<string> | undefined {
  if (!hasLroImport) {
    return undefined;
  }
  // If there is an LRO import then we should filter out the OperationState model
  // Because it is already imported in core-lro
  return new Set(["OperationState"]);
}
