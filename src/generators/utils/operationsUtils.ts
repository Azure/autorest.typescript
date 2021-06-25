import { OperationDetails } from "../../models/operationDetails";
import { NameType, normalizeName } from "../../utils/nameUtils";

export function calculateMethodName(operation: OperationDetails): string {
  const name = `${operation.namePrefix || ""}${normalizeName(
    operation.name,
    NameType.Property
  )}`;
  const firstLetter = name.substr(0, 1)[0].toUpperCase();
  return operation.isLro && operation.pagination === undefined
    ? `begin${firstLetter}${name.substr(1)}`
    : name;
}
