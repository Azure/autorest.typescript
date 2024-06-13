import { CollectionFormat } from "@azure-tools/typespec-client-generator-core";

export function getCollectionSeparator(
  collectionFormat?: CollectionFormat
): string {
  switch (collectionFormat) {
    case "csv":
      return ",";
    case "ssv":
      return " ";
    case "tsv":
      return "\t";
    case "pipes":
      return "|";
    case "multi":
      return "&";
    default:
      return ",";
  }
}
