import { ParameterDetails } from "../models/parameterDetails";

export function getParameterDescription(
  parameter: ParameterDetails,
  operationName?: string
): string {
  let description: string | undefined;
  if (operationName) {
    description = parameter.operationsIn?.[operationName].description;
  }
  if (!description) {
    description = parameter.description ?? "";
  }
  return description;
}
