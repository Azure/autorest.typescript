import {
  SdkHttpOperationExample,
  SdkHttpParameterExampleValue,
  SdkExampleValue,
  SdkClientInitializationType
} from "@azure-tools/typespec-client-generator-core";
import {
  isAzurePackage,
  NameType,
  normalizeName
} from "@azure-tools/rlc-common";
import { resolveReference } from "../../framework/reference.js";
import { SdkContext } from "../../utils/interfaces.js";
import { AzureIdentityDependencies } from "../external-dependencies.js";
import {
  hasKeyCredential,
  hasTokenCredential
} from "../../utils/credentialUtils.js";
import { buildPropertyNameMapper } from "./typeHelpers.js";

/**
 * Common interfaces for both samples and tests
 */
export interface CommonValue {
  name: string;
  value: string;
  isOptional: boolean;
  onClient: boolean;
}

/**
 * Build parameter value map from example
 */
export function buildParameterValueMap(
  example: SdkHttpOperationExample
): Record<string, SdkHttpParameterExampleValue> {
  const parameterMap: Record<string, SdkHttpParameterExampleValue> = {};
  example.parameters.forEach(
    (param) => (parameterMap[param.parameter.serializedName] = param)
  );
  return parameterMap;
}

/**
 * Prepare a common value for samples or tests
 */
export function prepareCommonValue(
  name: string,
  value: SdkExampleValue | string,
  isOptional?: boolean,
  onClient?: boolean
): CommonValue {
  return {
    name: normalizeName(name, NameType.Parameter),
    value: typeof value === "string" ? value : serializeExampleValue(value),
    isOptional: Boolean(isOptional),
    onClient: Boolean(onClient)
  };
}

/**
 * Get credential value for samples
 */
export function getCredentialSampleValue(
  dpgContext: SdkContext,
  initialization: SdkClientInitializationType
): CommonValue | undefined {
  const keyCredential = hasKeyCredential(initialization),
    tokenCredential = hasTokenCredential(initialization);
  const defaultSetting = {
    isOptional: false,
    onClient: true,
    name: "credential"
  };
  if (keyCredential || tokenCredential) {
    if (isAzurePackage({ options: dpgContext.rlcOptions })) {
      // Support DefaultAzureCredential for Azure packages
      return {
        ...defaultSetting,
        value: `new ${resolveReference(
          AzureIdentityDependencies.DefaultAzureCredential
        )}()`
      };
    } else if (keyCredential) {
      // Support ApiKeyCredential for non-Azure packages
      return {
        ...defaultSetting,
        value: `{ key: "INPUT_YOUR_KEY_HERE" }`
      };
    } else if (tokenCredential) {
      // Support TokenCredential for non-Azure packages
      return {
        ...defaultSetting,
        value: `{ getToken: async () => {
          return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() }; } }`
      };
    }
  }
  return undefined;
}

/**
 * Get credential value for tests
 */
export function getCredentialTestValue(
  dpgContext: SdkContext,
  initialization: SdkClientInitializationType
): CommonValue | undefined {
  const keyCredential = hasKeyCredential(initialization),
    tokenCredential = hasTokenCredential(initialization);
  const defaultSetting = {
    isOptional: false,
    onClient: true,
    name: "credential"
  };

  if (keyCredential || tokenCredential) {
    if (dpgContext.arm || hasTokenCredential(initialization)) {
      // Support createTestCredential for ARM/Azure packages
      return {
        ...defaultSetting,
        value: "createTestCredential()"
      };
    } else if (keyCredential) {
      // Support ApiKeyCredential for non-Azure packages
      return {
        ...defaultSetting,
        value: `{ key: "INPUT_YOUR_KEY_HERE" } `
      };
    } else if (tokenCredential) {
      // Support TokenCredential for non-Azure packages
      return {
        ...defaultSetting,
        value: `{
        getToken: async () => {
            return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: Date.now() };
        }
    } `
      };
    }
  }
  return undefined;
}

/**
 * Serialize example value to string representation
 */
export function serializeExampleValue(value: SdkExampleValue): string {
  let retValue = `{} as any`;
  switch (value.kind) {
    case "string": {
      switch (value.type.kind) {
        case "utcDateTime":
          retValue = `new Date("${value.value}")`;
          break;
        case "bytes": {
          const encode = value.type.encode ?? "base64";
          // TODO: add check for un-supported encode
          retValue = `Buffer.from("${value.value}",  "${encode}")`;
          break;
        }
        default:
          retValue = `"${value.value
            ?.toString()
            .replace(/\\/g, "\\\\")
            .replace(/"/g, '\\"')
            .replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\t/g, "\\t")
            .replace(/\f/g, "\\f")
            .replace(/>/g, ">")
            .replace(/</g, "<")}"`;
          break;
      }
      break;
    }
    case "boolean":
    case "number":
    case "null":
    case "unknown":
    case "union":
      retValue = `${JSON.stringify(value.value)}`;
      break;
    case "dict":
    case "model": {
      const mapper = buildPropertyNameMapper(value.type);
      const values = [];
      const additionalPropertiesValue =
        value.kind === "model" ? (value.additionalPropertiesValue ?? {}) : {};
      for (const propName in {
        ...value.value
      }) {
        const propValue = value.value[propName];
        if (propValue === undefined || propValue === null) {
          continue;
        }
        const propRetValue =
          `"${mapper.get(propName) ?? propName}": ` +
          serializeExampleValue(propValue);
        values.push(propRetValue);
      }
      const additionalBags = [];
      for (const propName in {
        ...additionalPropertiesValue
      }) {
        const propValue = additionalPropertiesValue[propName];
        if (propValue === undefined || propValue === null) {
          continue;
        }
        const propRetValue =
          `"${mapper.get(propName) ?? propName}": ` +
          serializeExampleValue(propValue);
        additionalBags.push(propRetValue);
      }
      if (additionalBags.length > 0) {
        const name = mapper.get("additionalProperties")
          ? "additionalPropertiesBag"
          : "additionalProperties";
        values.push(`"${name}": {
          ${additionalBags.join(", ")}
          }`);
      }

      retValue = `{${values.join(", ")}}`;
      break;
    }
    case "array": {
      const valuesArr = value.value.map(serializeExampleValue);
      retValue = `[${valuesArr.join(", ")}]`;
      break;
    }
    default:
      break;
  }
  return retValue;
}

/**
 * Escape special characters to spaces (for samples)
 */
export function escapeSpecialCharToSpace(str: string): string {
  if (!str) {
    return str;
  }
  return str.replace(/_|,|\.|\(|\)|'s |\[|\]/g, " ").replace(/\//g, " Or ");
}

/**
 * Generate descriptive names based on operation names
 */
export function getDescriptiveName(
  method: { doc?: string; oriName?: string; name: string },
  exampleName: string,
  type: "sample" | "test"
): string {
  const description = method.doc ?? `execute ${method.oriName ?? method.name}`;
  let descriptiveName =
    description.charAt(0).toLowerCase() + description.slice(1);

  // Remove any trailing dots
  descriptiveName = descriptiveName.replace(/\.$/, "");

  if (type === "test") {
    // Include the example name to ensure uniqueness for multiple test cases
    const functionName = normalizeName(exampleName, NameType.Method);
    return `${descriptiveName} for ${functionName}`;
  } else {
    // For samples, just return the normalized description
    return descriptiveName;
  }
}
