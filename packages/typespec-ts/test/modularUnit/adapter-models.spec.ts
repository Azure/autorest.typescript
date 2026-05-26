import { describe, expect, it } from "vitest";

import type {
  TSCodeModel,
  TSEnum,
  TSModel,
  TSProperty,
  TSUnion
} from "../../src/codemodel/index.js";
import { renameClientName } from "../../src/index.js";
import { transformModularEmitterOptions } from "../../src/modular/buildModularOptions.js";
import { adaptToCodeModel } from "../../src/tcgcadapter/adapter.js";
import { getClientHierarchyMap } from "../../src/utils/clientUtils.js";
import type { SdkContext } from "../../src/utils/interfaces.js";
import {
  createDpgContextTestHelper,
  rlcEmitterFor,
  type RLCEmitterOptions
} from "../util/testUtil.js";

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

async function buildAdapterFixture(
  tspContent: string,
  configs: Record<string, unknown> = {},
  hostOptions: RLCEmitterOptions = { withRawContent: true }
): Promise<{
  sdkContext: SdkContext;
  emitterOptions: ReturnType<typeof transformModularEmitterOptions>;
}> {
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
  return { sdkContext, emitterOptions };
}

async function adaptCodeModelFromTypeSpec(
  tspContent: string,
  configs: Record<string, unknown> = {}
): Promise<TSCodeModel> {
  const { sdkContext, emitterOptions } = await buildAdapterFixture(
    tspContent,
    configs
  );

  return adaptToCodeModel({ sdkContext, emitterOptions });
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

function getModelProperties(model: TSModel): TSProperty[] {
  return model.properties;
}

function findProperty(model: TSModel, name: string): TSProperty {
  const property = getModelProperties(model).find(
    (candidate) => candidate.name === name
  );
  expect(
    property,
    `Expected property ${name} on model ${model.name}`
  ).toBeDefined();
  return property!;
}

function getEnumMembers(enumType: TSEnum) {
  return enumType.members;
}

function getUnionVariants(unionType: TSUnion) {
  return unionType.variants;
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

function getDiscriminatorPropertyName(model: TSModel): string | undefined {
  return model.discriminator?.propertyName;
}

function getSerializedName(property: TSProperty): string | undefined {
  return property.serializedName;
}

function isOptionalProperty(property: TSProperty): boolean {
  return property.optional;
}

function isReadonlyProperty(property: TSProperty): boolean {
  return property.readonly;
}

describe("tcgc adapter model adapters", () => {
  it("adapts a simple model into a TSModel", async () => {
    const { models } = await adaptCodeModelFromTypeSpec(
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
    const { models } = await adaptCodeModelFromTypeSpec(
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
    const { models } = await adaptCodeModelFromTypeSpec(
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
    const { models } = await adaptCodeModelFromTypeSpec(
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
    const { enums } = await adaptCodeModelFromTypeSpec(
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
    const { enums } = await adaptCodeModelFromTypeSpec(
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
    const { unions } = await adaptCodeModelFromTypeSpec(
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
    const { models } = await adaptCodeModelFromTypeSpec(
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
    const { models } = await adaptCodeModelFromTypeSpec(
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
