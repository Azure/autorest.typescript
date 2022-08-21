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

  return decorators;
}

export function getPropertyDecorators(property: Property): CadlDecorator[] {
  const decorators: CadlDecorator[] = [];

  const paging = property.language.default.paging ?? {};

  if (paging.isNextLink) {
    decorators.push({ name: "nextLink" });
  }

  if (paging.isValue) {
    decorators.push({ name: "items" });
  }

  return decorators;
}

export function generateDecorators(decorators: CadlDecorator[] = []): string {
  const definitions: string[] = [];
  for (const decorator of decorators ?? []) {
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
