import {
  DecoratedType,
  SdkModelType
} from "@azure-tools/typespec-client-generator-core";

/**
 * Represents a header-to-property mapping from @clientOption("header", ...).
 */
export interface HeaderClientOption {
  /** The HTTP header name, e.g. "x-ms-error-code" */
  headerName: string;
  /** The property name on the model, e.g. "errorCode" */
  propertyName: string;
}

const CLIENT_OPTION_DECORATOR_NAME = "Azure.ClientGenerator.Core.@clientOption";

/**
 * Extracts all header client options from a decorated type.
 * Parses @clientOption("header", "x-ms-error-code:errorCode", "javascript") decorators.
 *
 * @param type - A decorated SDK type (typically an SdkModelType for error models)
 * @returns Array of header-to-property mappings
 */
export function getHeaderClientOptions(
  type: DecoratedType
): HeaderClientOption[] {
  const results: HeaderClientOption[] = [];
  for (const decorator of type.decorators) {
    if (decorator.name !== CLIENT_OPTION_DECORATOR_NAME) {
      continue;
    }
    if (decorator.arguments["name"] !== "header") {
      continue;
    }
    const value = decorator.arguments["value"];
    if (typeof value !== "string") {
      continue;
    }
    const parsed = parseHeaderMapping(value);
    if (parsed) {
      results.push(parsed);
    }
  }
  return results;
}

/**
 * Checks if a model type has any header client options defined.
 */
export function hasHeaderClientOptions(type: DecoratedType): boolean {
  return getHeaderClientOptions(type).length > 0;
}

/**
 * Parses a header mapping string like "x-ms-error-code:errorCode"
 * into its header name and property name components.
 *
 * @returns parsed mapping or undefined if the format is invalid
 */
function parseHeaderMapping(value: string): HeaderClientOption | undefined {
  const colonIndex = value.indexOf(":");
  if (colonIndex <= 0 || colonIndex >= value.length - 1) {
    return undefined;
  }
  const headerName = value.substring(0, colonIndex).trim();
  const propertyName = value.substring(colonIndex + 1).trim();
  if (!headerName || !propertyName) {
    return undefined;
  }
  return { headerName, propertyName };
}

/**
 * Collects header client options from all exception types in an operation.
 * Deduplicates by property name.
 */
export function getExceptionHeaderClientOptions(
  exceptions: { type?: SdkModelType | any }[]
): { model: SdkModelType; options: HeaderClientOption[] }[] {
  const results: { model: SdkModelType; options: HeaderClientOption[] }[] = [];
  const seenProperties = new Set<string>();

  for (const exception of exceptions ?? []) {
    if (!exception.type || exception.type.kind !== "model") {
      continue;
    }
    const model = exception.type as SdkModelType;
    const options = getHeaderClientOptions(model);
    const dedupedOptions = options.filter((opt) => {
      if (seenProperties.has(opt.propertyName)) {
        return false;
      }
      seenProperties.add(opt.propertyName);
      return true;
    });
    if (dedupedOptions.length > 0) {
      results.push({ model, options: dedupedOptions });
    }
  }
  return results;
}

/**
 * Gets the header name for the restErrorCodeHeader client option.
 * When present, the emitter generates code to set `error.code` from the specified header.
 *
 * Usage: @clientOption("restErrorCodeHeader", "x-ms-error-code", "javascript")
 *
 * @param type - A decorated SDK type (typically an SdkModelType for error models)
 * @returns The header name string, or undefined if the option is not set
 */
export function getRestErrorCodeHeader(
  type: DecoratedType
): string | undefined {
  for (const decorator of type.decorators) {
    if (decorator.name !== CLIENT_OPTION_DECORATOR_NAME) {
      continue;
    }
    if (decorator.arguments["name"] !== "restErrorCodeHeader") {
      continue;
    }
    const value = decorator.arguments["value"];
    if (typeof value === "string") {
      return value;
    }
  }
  return undefined;
}
