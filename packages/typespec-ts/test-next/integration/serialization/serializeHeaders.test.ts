import { describe, it, assert, beforeEach } from "vitest";
import { createMyTestRunner, createTcgcContext } from "./test-hots.js";
import { SdkHeaderParameter } from "@azure-tools/typespec-client-generator-core";
import { serializeHeader } from "../../../src/modular/serialization/serializeHeaders.js";

import { EmitContext, UsageFlags } from "@typespec/compiler";
import { BasicTestRunner } from "@typespec/compiler/testing";
import { SerializeTypeOptions } from "../../../src/modular/serialization/serializers.js";

describe("headerSerializer", () => {
  let runner: BasicTestRunner;

  beforeEach(async () => {
    runner = await createMyTestRunner();
  });

  describe("serialization", () => {
    it("should handle a simple header", async () => {
      const headerParam = await getSdkHeader(
        `@header param: string`,
        runner,
        "serialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(result, "param");
    });

    it("should handle a simple array header", async () => {
      const headerParam = await getSdkHeader(
        `@header({format: "csv"}) param: string[]`,
        runner,
        "serialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(result, 'param.join(",")');
    });

    it("should handle a numeric array header", async () => {
      const headerParam = await getSdkHeader(
        `@header({format: "csv"}) param: int32[]`,
        runner,
        "serialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(result, `param.join(",")`);
    });

    it("should handle a boolean array header", async () => {
      const headerParam = await getSdkHeader(
        `@header({format: "csv"}) param: boolean[]`,
        runner,
        "serialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(result, `param.join(",")`);
    });

    it("should handle a datetime array header", async () => {
      const headerParam = await getSdkHeader(
        `@header({format: "csv"}) param: utcDateTime[]`,
        runner,
        "serialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(
        result,
        `param.map((e: Date)=>((e).toISOString())).join(",")`
      );
    });

    it("should handle a string array header with tsv format", async () => {
      const headerParam = await getSdkHeader(
        `@header({format: "tsv"}) param: string[]`,
        runner,
        "serialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(result, `param.join("\\t")`);
    });
  });
  describe("deserialization", () => {
    it("should handle a simple header", async () => {
      const headerParam = await getSdkHeader(
        `@header param: string`,
        runner,
        "deserialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(result, "param");
    });

    it("should handle a simple array header", async () => {
      const headerParam = await getSdkHeader(
        `@header({format: "csv"}) param: string[]`,
        runner,
        "deserialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(result, 'param.split(",")');
    });

    it("should handle a numeric array header", async () => {
      const headerParam = await getSdkHeader(
        `@header({format: "csv"}) param: int32[]`,
        runner,
        "deserialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(result, `param.split(",").map(e => JSON.parse(e))`);
    });

    it("should handle a boolean array header", async () => {
      const headerParam = await getSdkHeader(
        `@header({format: "csv"}) param: boolean[]`,
        runner,
        "deserialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(result, `param.split(",").map(e => JSON.parse(e))`);
    });

    it("should handle a datetime array header", async () => {
      const headerParam = await getSdkHeader(
        `@header({format: "csv"}) param: utcDateTime[]`,
        runner,
        "deserialize"
      );
      const result = serializeHeader(headerParam);

      assert.equal(result, `param.split(",").map(e => new Date(e))`);
    });
  });
});

type HeaderType = SerializeTypeOptions<
  SdkHeaderParameter & {
    kind: "header";
  }
>;

async function getSdkHeader(
  code: string,
  runner: BasicTestRunner,
  mode: "serialize" | "deserialize"
): Promise<HeaderType> {
  const template = `   @service({
          title: "Widget Service",
        })
        namespace DemoService;

        @route("/widgets")
        interface Widgets {
           @test op foo(${code}): string;
        }`;

  await runner.compile(template);

  const context: EmitContext = {
    program: runner.program
  } as any;

  const sdkContext = createTcgcContext(context);
  const headerParam = sdkContext.experimental_sdkPackage.clients[0].methods[0]
    .parameters[0] as unknown as SdkHeaderParameter;

  const functionType =
    mode === "serialize" ? UsageFlags.Input : UsageFlags.Output;

  return {
    dpgContext: sdkContext,
    type: headerParam,
    valueExpr: headerParam.name,
    functionType
  } as any;
}
