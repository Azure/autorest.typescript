import { beforeEach, describe, it, expect } from "vitest";
import { createMyTestRunner, createTcgcContext } from "./test-hots.js";
import { serializeArray } from "../../../src/modular/serialization/serializeArray.js";
import {
  SdkArrayType,
  SdkContext
} from "@azure-tools/typespec-client-generator-core";
import { EmitContext, UsageFlags } from "@typespec/compiler";
import { BasicTestRunner } from "@typespec/compiler/testing";
import { SerializeTypeOptions } from "../../../src/modular/serialization/serializers.js";
import { format } from "prettier";

describe("serializeArray", () => {
  let runner: BasicTestRunner;

  beforeEach(async () => {
    runner = await createMyTestRunner();
  });

  describe("serialization", () => {
    let testArrays: TestArrays;
    beforeEach(async () => {
      testArrays = await getSdkArrays(runner, "serialize");
    });

    it("should handle a string array", async () => {
      const { stringArray } = testArrays;
      const result = serializeArray(stringArray);

      expect(result).to.equal("myArray");
    });

    it("should handle a numeric array", async () => {
      const { numericArray } = testArrays;
      const result = serializeArray(numericArray);

      expect(result).to.equal("myArray");
    });

    it("should handle a boolean array", async () => {
      const { booleanArray } = testArrays;
      const result = serializeArray(booleanArray);

      expect(result).to.equal("myArray");
    });

    it("should handle a date array", async () => {
      const { dateArray } = testArrays;
      const result = serializeArray(dateArray);

      expect(result).to.equal("myArray.map((e: Date)=>((e).toISOString()))");
    });

    it("should handle a model array", async () => {
      const { modelArray } = testArrays;
      const result = serializeArray(modelArray);

      const expected = await format(
        `myArray.map((e: Foo)=>({...(e),
                            "bar": ({...(e["bar"]),
                            "baz": ({...(e["bar"]["myBaz"]),
                            "qux": (e["bar"]["myBaz"]["qux"])})})}))`,
        { parser: "typescript" }
      );

      const actual = await format(result, { parser: "typescript" });

      expect(actual).to.equal(expected);
    });

    // Handle cyclic models
    it.skip("should handle a cyclic array", async () => {
      const { cyclicArray } = testArrays;
      const result = serializeArray(cyclicArray);

      expect(result).to.equal("myArray");
    });

    it("should handle an optional properties array", async () => {
      const { optionalPropertiesArray } = testArrays;
      const result = serializeArray(optionalPropertiesArray);

      const expected = await format(
        `myArray.map((e: OptionalFoo) => ({
                            ...e,
                            ...(e["bar"] === undefined
                                ? {}
                                : {
                                    bar: {
                                    ...e["bar"],
                                    baz: { ...e["bar"]["myBaz"], qux: e["bar"]["myBaz"]["qux"] },
                                    },
                                }),
                            }));`,
        { parser: "typescript" }
      );

      const actual = await format(result, { parser: "typescript" });

      expect(actual).to.equal(expected);
    });
  });

  describe("deserialization", () => {
    let testArrays: TestArrays;

    beforeEach(async () => {
      testArrays = await getSdkArrays(runner, "deserialize");
    });

    it("should handle a string array", async () => {
      const { stringArray } = testArrays;
      const result = serializeArray(stringArray);

      expect(result).to.equal("myArray");
    });

    it("should handle a numeric array", async () => {
      const { numericArray } = testArrays;
      const result = serializeArray(numericArray);

      expect(result).to.equal("myArray");
    });

    it("should handle a boolean array", async () => {
      const { booleanArray } = testArrays;
      const result = serializeArray(booleanArray);

      expect(result).to.equal("myArray");
    });

    it("should handle a date array", async () => {
      const { dateArray } = testArrays;
      const result = serializeArray(dateArray);

      expect(result).to.equal("myArray.map(Date)");
    });

    it("should handle a model array", async () => {
      const { modelArray } = testArrays;
      const result = serializeArray(modelArray);

      const expected = await format(
        `myArray.map((e: Foo)=>({...(e),
                            "bar": ({...(e["bar"]),
                            "myBaz": ({...(e["bar"]["baz"]),
                            "qux": (e["bar"]["baz"]["qux"])})})}))`,
        { parser: "typescript" }
      );

      const actual = await format(result, { parser: "typescript" });

      expect(actual).to.equal(expected);
    });

    // Handle cyclic models
    it.skip("should handle a cyclic array", async () => {
      const { cyclicArray } = testArrays;
      const result = serializeArray(cyclicArray);

      expect(result).to.equal("myArray");
    });

    it("should handle an optional properties array", async () => {
      const { optionalPropertiesArray } = testArrays;
      const result = serializeArray(optionalPropertiesArray);

      const expected = await format(
        `myArray.map((e: OptionalFoo) => ({
                                ...e,
                                ...(e["bar"] === undefined
                                    ? {}
                                    : {
                                        bar: {
                                        ...e["bar"],
                                        myBaz: { ...e["bar"]["baz"],
                                        qux: e["bar"]["baz"]["qux"] },
                                        },
                                    }),
                                }));`,
        { parser: "typescript" }
      );

      const actual = await format(result, { parser: "typescript" });

      expect(actual).to.equal(expected);
    });
  });
});

type ArraySerializeOptions = SerializeTypeOptions<
  SdkArrayType & {
    kind: "array";
  }
>;

interface TestArrays {
  stringArray: ArraySerializeOptions;
  numericArray: ArraySerializeOptions;
  booleanArray: ArraySerializeOptions;
  dateArray: ArraySerializeOptions;
  modelArray: ArraySerializeOptions;
  cyclicArray: ArraySerializeOptions;
  optionalPropertiesArray: ArraySerializeOptions;
}

async function getSdkArrays(
  runner: BasicTestRunner,
  mode: "serialize" | "deserialize"
): Promise<TestArrays> {
  const template = `   @service({
            title: "Widget Service",
          })
          namespace DemoService;
  
          @test model Test {
            stringArray: string[];
            numericArray: int32[];
            booleanArray: boolean[];
            dateArray: utcDateTime[];
            modelArray: Foo[];
            cyclicArray: Test[];
            optionalModelArray?: Foo[];
            optionalPropertiesArray?: OptionalFoo[];
          };

          model OptionalFoo {
             bar?: Bar
          }

          model Foo {
             bar: Bar
          };

          model Bar {
             @clientName("myBaz")
             baz: Baz   
          };

          model Baz {
            qux: string;
          };

          op foo(): Test;
          `;

  await runner.compile(template);
  const context: EmitContext = {
    program: runner.program
  } as any;

  const sdkContext = createTcgcContext(context);

  const stringArray =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "stringArray"
    )?.type as unknown as SdkArrayType;

  const numericArray =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "numericArray"
    )?.type as unknown as SdkArrayType;
  const booleanArray =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "booleanArray"
    )?.type as unknown as SdkArrayType;
  const dateArray =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "dateArray"
    )?.type as unknown as SdkArrayType;
  const modelArray =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "modelArray"
    )?.type as unknown as SdkArrayType;
  const cyclicArray =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "cyclicArray"
    )?.type as unknown as SdkArrayType;

  const optionalModelArray =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "optionalModelArray"
    )?.type as unknown as SdkArrayType;
  const optionalPropertiesArray =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "optionalPropertiesArray"
    )?.type as unknown as SdkArrayType;

  return {
    booleanArray: getSerializeOptions(booleanArray, sdkContext, mode),
    cyclicArray: getSerializeOptions(cyclicArray, sdkContext, mode),
    dateArray: getSerializeOptions(dateArray, sdkContext, mode),
    modelArray: getSerializeOptions(modelArray, sdkContext, mode),
    numericArray: getSerializeOptions(numericArray, sdkContext, mode),
    stringArray: getSerializeOptions(stringArray, sdkContext, mode),
    optionalPropertiesArray: getSerializeOptions(
      optionalPropertiesArray,
      sdkContext,
      mode
    )
  };
}

function getSerializeOptions<T>(
  type: T,
  context: SdkContext,
  mode: "serialize" | "deserialize"
) {
  const functionType =
    mode === "serialize" ? UsageFlags.Input : UsageFlags.Output;

  return {
    dpgContext: context,
    type,
    valueExpr: "myArray",
    functionType
  } as any;
}
