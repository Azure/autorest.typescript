import {
  ArraySchema,
  CodeModel,
  HttpMethod,
  isObjectSchema,
  ObjectSchema,
  Operation,
  Schema,
  SchemaResponse,
} from "@autorest/codemodel";
import { getDataTypes } from "../dataTypes";
import { CadlResource } from "../interfaces";
import { transformDataType } from "../model";
import { getOptions } from "../options";
import { hasLROExtension } from "./lro";
import {
  getPageableResponse,
  isPageableOperation,
  isPageValue,
} from "./paging";
import { isArraySchema, isResponseSchema } from "./schemas";

const knownResourceSchema: Map<string, Schema> = new Map();

export function markResources(codeModel: CodeModel) {
  for (const operationGroup of codeModel.operationGroups) {
    for (const operation of operationGroup.operations) {
      const resource = getResourceKind(codeModel, operation);
      if (resource) {
        operation.language.default.resource = resource;
      }
    }
  }
}

/**
 * Figures out if the path represents an
 */
// function markActionResource(codeModel: CodeModel, operation: Operation): void {
//   const method = getHttpMethod(codeModel, operation);
//   const pathParts = getResourcePath(operation).split("/");
//   const partsLastIndex = pathParts.length - 1;

//   if (method !== HttpMethod.Post) {
//     return;
//   }

//   const lastPart = pathParts[partsLastIndex];

//   if (lastPart.startsWith(":")) {
//     operation.language.default.actionResource = {
//       resource: pathParts.slice(0, partsLastIndex).join("/"),
//       action: lastPart,
//     };
//   }
// }

function getResourceKind(
  codeModel: CodeModel,
  operation: Operation
): CadlResource | undefined {
  const operationMethod = getHttpMethod(codeModel, operation);
  if (hasLROExtension(operation)) {
    const resource = handleLROResource(codeModel, operation);
    if (resource) {
      return resource;
    }
  }

  if (operationMethod === HttpMethod.Get) {
    const resource = handleGetOperation(codeModel, operation);
    if (resource) {
      return resource;
    }
  }

  if (operationMethod === HttpMethod.Patch) {
    const resource = handleResource(
      codeModel,
      operation,
      "ResourceCreateOrUpdate"
    );
    if (resource) {
      return resource;
    }
  }

  if (operationMethod === HttpMethod.Put) {
    const resource = handleResource(
      codeModel,
      operation,
      "ResourceCreateOrReplace"
    );
    if (resource) {
      return resource;
    }
  }

  if (operationMethod === HttpMethod.Post) {
    const resource = handleResource(
      codeModel,
      operation,
      "ResourceCreateWithServiceProvidedName"
    );
    if (resource) {
      return resource;
    }
  }

  if (operationMethod === HttpMethod.Delete) {
    const resource = handleResource(codeModel, operation, "ResourceDelete");
    if (resource) {
      return resource;
    }
  }

  if (operation.language.default.actionResource) {
    return handleResource(codeModel, operation, "ResourceAction");
  }

  return undefined;
}

function handleLROResource(
  codeModel: CodeModel,
  operation: Operation
): CadlResource | undefined {
  const operationMethod = getHttpMethod(codeModel, operation);

  if (operationMethod === HttpMethod.Patch) {
    return handleResource(
      codeModel,
      operation,
      "LongRunningResourceCreateOrUpdate"
    );
  }

  if (operationMethod === HttpMethod.Put) {
    return handleResource(
      codeModel,
      operation,
      "LongRunningResourceCreateOrReplace"
    );
  }

  if (operationMethod === HttpMethod.Post) {
    return handleResource(
      codeModel,
      operation,
      "LongRunningResourceCreateWithServiceProvidedName"
    );
  }

  if (operationMethod === HttpMethod.Delete) {
    return handleResource(codeModel, operation, "LongRunningResourceDelete");
  }

  return undefined;
}

function handleResource(
  codeModel: CodeModel,
  operation: Operation,
  kind:
    | "ResourceRead"
    | "ResourceCreateOrUpdate"
    | "ResourceCreateOrReplace"
    | "ResourceCreateWithServiceProvidedName"
    | "ResourceDelete"
    | "LongRunningResourceCreateOrReplace"
    | "LongRunningResourceCreateOrUpdate"
    | "LongRunningResourceCreateWithServiceProvidedName"
    | "LongRunningResourceDelete"
    | "ResourceAction"
): CadlResource | undefined {
  const dataTypes = getDataTypes(codeModel);
  for (const response of operation.responses ?? []) {
    let schema: Schema | undefined;
    if (!isResponseSchema(response)) {
      let resourcePath = getResourcePath(operation);
      schema = knownResourceSchema.get(resourcePath);

      if (
        kind === "ResourceAction" &&
        operation.language.default.actionResource?.resource
      ) {
        resourcePath = operation.language.default.actionResource.resource;
        schema = knownResourceSchema.get(resourcePath);
      }

      if (!schema) {
        continue;
      }
    } else {
      schema = response.schema;
    }
    markResource(operation, schema);
    let cadlResponse =
      dataTypes.get(schema) ?? transformDataType(schema, codeModel);
    return {
      kind,
      response: cadlResponse,
    };
  }

  return undefined;
}

function getResourcePath(operation: Operation): string {
  for (const requests of operation.requests ?? []) {
    const path = requests.protocol.http?.path;
    if (path) {
      return path;
    }
  }

  throw new Error(
    `Couldn't find a resource path for operation ${operation.language.default.name}`
  );
}

function getHttpMethod(
  _codeModel: CodeModel,
  operation: Operation
): HttpMethod {
  return operation.requests?.[0].protocol.http?.method;
}

function getNonPageableListResource(
  operation: Operation
): ArraySchema | undefined {
  if (!operation.responses) {
    throw new Error(
      `Operation ${operation.language.default.name} has no defined responses`
    );
  }
  for (const response of operation.responses) {
    let schema: Schema | undefined;
    if (!isResponseSchema(response)) {
      const resourcePath = getResourcePath(operation);
      schema = knownResourceSchema.get(resourcePath);

      if (!schema) {
        continue;
      }
    } else {
      schema = response.schema;
    }

    if (!isArraySchema(schema)) {
      return undefined;
    }
  }

  const firstResponse = operation.responses[0];
  return isResponseSchema(firstResponse) && isArraySchema(firstResponse.schema)
    ? firstResponse.schema
    : undefined;
}

function handleGetOperation(
  codeModel: CodeModel,
  operation: Operation
): CadlResource | undefined {
  if (isPageableOperation(operation)) {
    return getPageableResource(codeModel, operation);
  }

  const nonPageableListResource = getNonPageableListResource(operation);
  if (nonPageableListResource) {
    markResource(operation, nonPageableListResource.elementType);
    const dataTypes = getDataTypes(codeModel);
    let cadlResponse =
      dataTypes.get(nonPageableListResource.elementType) ??
      transformDataType(nonPageableListResource.elementType, codeModel);
    return {
      kind: "NonPagedResourceList",
      response: cadlResponse,
    };
  }

  return handleResource(codeModel, operation, "ResourceRead");
}

function markResource(operation: Operation, elementType: Schema) {
  if (!isObjectSchema(elementType)) {
    throw new Error(
      `A Resource type has to be a model but got ${elementType.type}`
    );
  }

  markModelWithResource(elementType, getResourcePath(operation));
  markWithKey(elementType);
}

function getPageableResource(
  codeModel: CodeModel,
  operation: Operation
): CadlResource {
  const response = getPageableResponse(operation) as SchemaResponse;
  if (isObjectSchema(response.schema)) {
    for (const property of response.schema.properties ?? []) {
      if (isPageValue(property) && isArraySchema(property.schema)) {
        const dataTypes = getDataTypes(codeModel);

        const elementType = property.schema.elementType;
        if (!isObjectSchema(elementType)) {
          throw new Error(
            `A Resource type has to be a model but got ${elementType.type}`
          );
        }

        markResource(operation, elementType);

        let cadlResponse =
          dataTypes.get(elementType) ??
          transformDataType(elementType, codeModel);
        return {
          kind: "ResourceList",
          response: cadlResponse,
        };
      }
    }
  }

  throw new Error(
    `Couldn't determine the Pageable resource for the operation: ${operation.language.default.name}`
  );
}

function markModelWithResource(elementType: Schema, resource: string) {
  knownResourceSchema.set(resource, elementType);
  elementType.language.default.resource = resource;
}

function markWithKey({ properties }: ObjectSchema) {
  const { guessResourceKey } = getOptions();

  if (!guessResourceKey) {
    return;
  }

  const requiredProperties = properties?.filter((p) => p.required === true);

  if (!requiredProperties || !requiredProperties.length) {
    return;
  }

  for (const property of requiredProperties) {
    const serializedName = property.serializedName.toLowerCase();
    if (
      serializedName.endsWith("name") ||
      serializedName.endsWith("key") ||
      serializedName.endsWith("id")
    ) {
      property.language.default.isResourceKey = true;
      return;
    }
  }

  requiredProperties[0].language.default.isResourceKey = true;
}
