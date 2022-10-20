import { ObjectSchema, Property } from "@autorest/codemodel";
import { CadlDecorator } from "../interfaces";
import { getOwnDiscriminator } from "./discriminator";

export function getModelDecorators(model: ObjectSchema): CadlDecorator[] {
  const decorators: CadlDecorator[] = [];

  const paging = model.language.default.paging ?? {};
  if (paging.isPageable) {
    decorators.push({
      name: "pagedResult",
      module: "@azure-tools/cadl-azure-core",
      namespace: "Azure.Core",
    });
  }

  const ownDiscriminator = getOwnDiscriminator(model);

  if (ownDiscriminator) {
    decorators.push({
      name: "discriminator",
      arguments: [ownDiscriminator.serializedName],
    });
  }

  if (model.language.default.isError) {
    decorators.push({ name: "error" });
  }

  let resource = model.language.default.resource;
  if (resource) {
    if (resource.startsWith("/")) {
      // Remove the leading
      resource = resource.slice(1);
    }
    decorators.push({
      name: "resource",
      module: "@azure-tools/cadl-azure-core",
      namespace: "Azure.Core",
      arguments: [resource],
    });
  }

  return decorators;
}

export function getPropertyDecorators(property: Property): CadlDecorator[] {
  const decorators: CadlDecorator[] = [];

  const paging = property.language.default.paging ?? {};

  if (property.readOnly) {
    decorators.push({ name: "visibility", arguments: ["read"] });
  }

  if (paging.isNextLink) {
    decorators.push({ name: "nextLink" });
  }

  if (paging.isValue) {
    decorators.push({ name: "items" });
  }

  if (property.language.default.isResourceKey) {
    decorators.push({
      name: "key",
      fixMe: [
        "// FIXME: (resource-key-guessing) - Verify that this property is the resource key, if not please update the model with the right one",
      ],
    });
  }

  return decorators;
}

export function generateDecorators(decorators: CadlDecorator[] = []): string {
  const definitions: string[] = [];
  for (const decorator of decorators ?? []) {
    if (decorator.fixMe) {
      definitions.push(decorator.fixMe.join(`\n`));
    }
    if (decorator.arguments) {
      definitions.push(
        `@${decorator.name}(${decorator.arguments
          ?.map((a) => `"${a}"`)
          .join(", ")})`
      );
    } else {
      definitions.push(`@${decorator.name}`);
    }
  }

  return definitions.join("\n");
}
