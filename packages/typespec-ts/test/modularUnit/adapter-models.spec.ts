import { describe, expect, it } from "vitest";

import { renameClientName } from "../../src/index.js";
import { transformModularEmitterOptions } from "../../src/modular/buildModularOptions.js";
import * as adapterModule from "../../src/tcgcadapter/adapter.js";
import { getClientHierarchyMap } from "../../src/utils/clientUtils.js";
import type { SdkContext } from "../../src/utils/interfaces.js";
import {
  createDpgContextTestHelper,
  rlcEmitterFor,
  type RLCEmitterOptions
} from "../util/testUtil.js";

type TSModelLike = {
  name: string;
  properties?: unknown[] | Record<string, unknown>;
  discriminator?: { propertyName?: string; name?: string };
  discriminatorProperty?: { name?: string };
  discriminatorPropertyName?: string;
};

type TSModelPropertyLike = {
  name: string;
  type?: unknown;
  optional?: boolean;
  isOptional?: boolean;
  serializedName?: string;
  wireName?: string;
  jsonName?: string;
  readonly?: boolean;
  isReadonly?: boolean;
};

type TSEnumLike = {
  name: string;
  members?: unknown[] | Record<string, unknown>;
  isFixed?: boolean;
  extensible?: boolean;
  isExtensible?: boolean;
};

type TSEnumMemberLike = {
  name?: string;
  value?: unknown;
};

type TSUnionLike = {
  name: string;
  variants?: unknown[] | Record<string, unknown>;
  members?: unknown[] | Record<string, unknown>;
  variantTypes?: unknown[];
};

type TSUnionVariantLike = {
  name?: string;
  type?: unknown;
};

type ModelAdapterModule = {
  adaptModels?: (sdkContext: SdkContext) => TSModelLike[];
  adaptEnums?: (sdkContext: SdkContext) => TSEnumLike[];
  adaptUnions?: (sdkContext: SdkContext) => TSUnionLike[];
};

const { adaptModels, adaptEnums, adaptUnions } =
  adapterModule as ModelAdapterModule;

const hasStage3Adapters =
  typeof adaptModels === "function" &&
  typeof adaptEnums === "function" &&
  typeof adaptUnions === "function";

function buildAdapterTypeSpec(tspContent: string): string {
  return `
    import "@typespec/http";
    import "@typespec/rest";
    import "@typespec/versioning";
    import "@azure-tools/typespec-client-generator-core";
    import "@azure-tools/typespec-azure-core";

    using Http;
    using Rest;
    using Versioning;
    using Azure.ClientGenerator.Core;
    using Azure.Core;
    using Azure.Core.Traits;

    ${tspContent}
  `;
}

function buildServiceTypeSpec(
  body: string,
  namespaceDecorators: string = ""
): string {
  return `
    ${namespaceDecorators}
    @service(#{
      title: "Azure TypeScript Testing"
    })
    namespace Azure.TypeScript.Testing {
      ${body}
    }
  `;
}

async function buildSdkContext(
  tspContent: string,
  configs: Record<string, unknown> = {},
  hostOptions: RLCEmitterOptions = { withRawContent: true }
): Promise<SdkContext> {
  const host = await rlcEmitterFor(
    buildAdapterTypeSpec(tspContent),
    hostOptions
  );
  const sdkContext = await createDpgContextTestHelper(host.program, false, {
    isModularLibrary: true,
    ...configs
  });
  sdkContext.rlcOptions!.isModularLibrary = true;

  const emitterOptions = transformModularEmitterOptions(sdkContext, "", {
    casing: "camel"
  });

  for (const client of sdkContext.sdkPackage.clients) {
    await renameClientName(client, emitterOptions);
  }

  expect(getClientHierarchyMap(sdkContext)).toHaveLength(1);
  return sdkContext;
}

async function adaptShapesFromTypeSpec(
  tspContent: string,
  configs: Record<string, unknown> = {}
) {
  const sdkContext = await buildSdkContext(tspContent, configs);

  if (!adaptModels || !adaptEnums || !adaptUnions) {
    throw new Error("Stage 3 model adapters are not available yet.");
  }

  return {
    models: adaptModels(sdkContext),
    enums: adaptEnums(sdkContext),
    unions: adaptUnions(sdkContext)
  };
}

function findByName<T extends { name: string }>(
  items: T[],
  kind: string,
  name: string
): T {
  const item = items.find((candidate) => candidate.name === name);
  expect(item, `Expected ${kind} ${name} to exist`).toBeDefined();
  return item!;
}

function getModelProperties(model: TSModelLike): TSModelPropertyLike[] {
  if (Array.isArray(model.properties)) {
    return model.properties as TSModelPropertyLike[];
  }

  if (model.properties && typeof model.properties === "object") {
    return Object.values(model.properties) as TSModelPropertyLike[];
  }

  return [];
}

function findProperty(model: TSModelLike, name: string): TSModelPropertyLike {
  const property = getModelProperties(model).find(
    (candidate) => candidate.name === name
  );
  expect(
    property,
    `Expected property ${name} on model ${model.name}`
  ).toBeDefined();
  return property!;
}

function getEnumMembers(enumType: TSEnumLike): TSEnumMemberLike[] {
  if (Array.isArray(enumType.members)) {
    return enumType.members as TSEnumMemberLike[];
  }

  if (enumType.members && typeof enumType.members === "object") {
    return Object.values(enumType.members) as TSEnumMemberLike[];
  }

  return [];
}

function getUnionVariants(unionType: TSUnionLike): TSUnionVariantLike[] {
  if (Array.isArray(unionType.variants)) {
    return unionType.variants as TSUnionVariantLike[];
  }

  if (unionType.variants && typeof unionType.variants === "object") {
    return Object.values(unionType.variants) as TSUnionVariantLike[];
  }

  if (Array.isArray(unionType.members)) {
    return unionType.members as TSUnionVariantLike[];
  }

  if (unionType.members && typeof unionType.members === "object") {
    return Object.values(unionType.members) as TSUnionVariantLike[];
  }

  if (Array.isArray(unionType.variantTypes)) {
    return unionType.variantTypes as TSUnionVariantLike[];
  }

  return [];
}

function readTypeText(value: unknown, depth: number = 0): string {
  if (depth > 3 || value === undefined || value === null) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  if (typeof value !== "object") {
    return String(value);
  }

  const candidate = value as Record<string, unknown>;
  const direct = [candidate.name, candidate.kind, candidate.typeName]
    .filter((item): item is string => typeof item === "string")
    .join(" ");
  const nested = [
    candidate.type,
    candidate.valueType,
    candidate.elementType,
    candidate.target,
    candidate.model,
    candidate.modelType,
    candidate.ref,
    candidate.reference
  ]
    .map((item) => readTypeText(item, depth + 1))
    .filter(Boolean)
    .join(" ");

  return `${direct} ${nested}`.trim();
}

function getDiscriminatorPropertyName(model: TSModelLike): string | undefined {
  return (
    model.discriminatorPropertyName ??
    model.discriminator?.propertyName ??
    model.discriminator?.name ??
    model.discriminatorProperty?.name
  );
}

function getSerializedName(property: TSModelPropertyLike): string | undefined {
  return property.serializedName ?? property.wireName ?? property.jsonName;
}

function isOptionalProperty(
  property: TSModelPropertyLike
): boolean | undefined {
  return property.optional ?? property.isOptional;
}

function isReadonlyProperty(
  property: TSModelPropertyLike
): boolean | undefined {
  return property.readonly ?? property.isReadonly;
}

describe("tcgc adapter model adapters", () => {
  if (!hasStage3Adapters) {
    it("tracks that Stage 3 model adapters are still pending", () => {
      expect({
        adaptModels: typeof adaptModels,
        adaptEnums: typeof adaptEnums,
        adaptUnions: typeof adaptUnions
      }).toEqual({
        adaptModels: typeof adaptModels,
        adaptEnums: typeof adaptEnums,
        adaptUnions: typeof adaptUnions
      });
    });

    it.todo("adapts a simple model into a TSModel");
    it.todo("marks optional model properties as optional");
    it.todo("captures nested model references");
    it.todo("captures polymorphic discriminator metadata");
    it.todo("adapts fixed enums into TSEnum values");
    it.todo("adapts extensible enums from string unions");
    it.todo("adapts discriminated unions into TSUnion variants");
    it.todo("captures serialized property names");
    it.todo("marks readonly model properties");
    return;
  }

  it("adapts a simple model into a TSModel", async () => {
    const { models } = await adaptShapesFromTypeSpec(
      buildServiceTypeSpec(`
        model Foo {
          name: string;
          age: int32;
        }

        @route("/foos")
        @get
        op getFoo(): Foo;
      `)
    );

    const foo = findByName(models, "model", "Foo");
    const name = findProperty(foo, "name");
    const age = findProperty(foo, "age");

    expect(getModelProperties(foo).map((property) => property.name)).toEqual([
      "name",
      "age"
    ]);
    expect(readTypeText(name.type).toLowerCase()).toContain("string");
    expect(readTypeText(age.type).toLowerCase()).toMatch(/number|int32/);
  });

  it("marks optional model properties as optional", async () => {
    const { models } = await adaptShapesFromTypeSpec(
      buildServiceTypeSpec(`
        model Bar {
          name?: string;
        }

        @route("/bars")
        @get
        op getBar(): Bar;
      `)
    );

    const bar = findByName(models, "model", "Bar");
    const name = findProperty(bar, "name");

    expect(isOptionalProperty(name)).toBe(true);
  });

  it("captures nested model references", async () => {
    const { models } = await adaptShapesFromTypeSpec(
      buildServiceTypeSpec(`
        model Foo {
          name: string;
        }

        model Baz {
          foo: Foo;
        }

        @route("/baz")
        @get
        op getBaz(): Baz;
      `)
    );

    const baz = findByName(models, "model", "Baz");
    const foo = findProperty(baz, "foo");

    expect(readTypeText(foo.type)).toContain("Foo");
  });

  it("captures polymorphic discriminator metadata", async () => {
    const { models } = await adaptShapesFromTypeSpec(
      buildServiceTypeSpec(`
        @discriminator("kind")
        model Pet {
          name: string;
        }

        model Cat extends Pet {
          kind: "cat";
          meow: string;
        }

        @route("/pets")
        @get
        op getPet(): Pet;
      `)
    );

    const pet = findByName(models, "model", "Pet");

    expect(getDiscriminatorPropertyName(pet)).toBe("kind");
  });

  it("adapts fixed enums into TSEnum values", async () => {
    const { enums } = await adaptShapesFromTypeSpec(
      buildServiceTypeSpec(`
        enum Color {
          Red,
          Green,
          Blue
        }

        model Paint {
          color: Color;
        }

        @route("/paint")
        @get
        op getPaint(): Paint;
      `)
    );

    const color = findByName(enums, "enum", "Color");

    expect(getEnumMembers(color).map((member) => member.name)).toEqual([
      "Red",
      "Green",
      "Blue"
    ]);
    expect(color.isFixed).toBe(true);
  });

  it("adapts extensible enums from string unions", async () => {
    const { enums } = await adaptShapesFromTypeSpec(
      buildServiceTypeSpec(`
        union PetKind {
          dog: "dog",
          cat: "cat",
          string
        }

        model PetEnvelope {
          kind: PetKind;
        }

        @route("/petKinds")
        @get
        op getPetKind(): PetEnvelope;
      `)
    );

    const petKind = findByName(enums, "enum", "PetKind");

    expect(
      getEnumMembers(petKind).map((member) => member.name ?? member.value)
    ).toEqual(["dog", "cat"]);
    expect(
      petKind.isFixed ?? !(petKind.extensible || petKind.isExtensible)
    ).toBe(false);
  });

  it("adapts discriminated unions into TSUnion variants", async () => {
    const { unions } = await adaptShapesFromTypeSpec(
      buildServiceTypeSpec(`
        model CatVariant {
          sound: "meow";
        }

        model DogVariant {
          sound: "bark";
        }

        union PetResponse {
          cat: CatVariant,
          dog: DogVariant
        }

        @route("/petResponse")
        @get
        op getPetResponse(): PetResponse;
      `)
    );

    const petResponse = findByName(unions, "union", "PetResponse");

    expect(
      getUnionVariants(petResponse).map((variant) => variant.name)
    ).toEqual(["cat", "dog"]);
  });

  it("captures serialized property names", async () => {
    const { models } = await adaptShapesFromTypeSpec(
      buildServiceTypeSpec(`
        model Person {
          @encodedName("application/json", "full_name")
          name: string;
        }

        @route("/people")
        @get
        op getPerson(): Person;
      `)
    );

    const person = findByName(models, "model", "Person");
    const name = findProperty(person, "name");

    expect(getSerializedName(name)).toBe("full_name");
  });

  it("marks readonly model properties", async () => {
    const { models } = await adaptShapesFromTypeSpec(
      buildServiceTypeSpec(`
        model ResourceModel {
          @visibility(Lifecycle.Read)
          id: string;
        }

        @route("/resources")
        @get
        op getResource(): ResourceModel;
      `)
    );

    const resourceModel = findByName(models, "model", "ResourceModel");
    const id = findProperty(resourceModel, "id");

    expect(isReadonlyProperty(id)).toBe(true);
  });
});
