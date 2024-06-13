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

  it("should handle a simple header", async () => {
    const headerParam = await getSdkHeader(`@header param: string`, runner);
    const result = serializeHeader(headerParam);

    assert.equal(result, "param");
  });

  it("should handle a simple array header", async () => {
    const headerParam = await getSdkHeader(
      `@header({format: "csv"}) param: string[]`,
      runner
    );
    const result = serializeHeader(headerParam);

    assert.equal(result, 'param.join(",")');
  });

  it("should handle a numeric array header", async () => {
    const headerParam = await getSdkHeader(
      `@header({format: "csv"}) param: int32[]`,
      runner
    );
    const result = serializeHeader(headerParam);

    assert.equal(result, `param.join(",")`);
  });

  it("should handle a boolean array header", async () => {
    const headerParam = await getSdkHeader(
      `@header({format: "csv"}) param: boolean[]`,
      runner
    );
    const result = serializeHeader(headerParam);

    assert.equal(result, `param.join(",")`);
  });

  it("should handle a datetime array header", async () => {
    const headerParam = await getSdkHeader(
      `@header({format: "csv"}) param: utcDateTime[]`,
      runner
    );
    const result = serializeHeader(headerParam);

    assert.equal(result, `param.map((e: Date)=>((e).toISOString())).join(",")`);
  });

  it("should handle a string array header with tsv format", async () => {
    const headerParam = await getSdkHeader(
      `@header({format: "tsv"}) param: string[]`,
      runner
    );
    const result = serializeHeader(headerParam);

    assert.equal(result, `param.join("\\t")`);
  });
});

type HeaderType = SerializeTypeOptions<
  SdkHeaderParameter & {
    kind: "header";
  }
>;

async function getSdkHeader(
  code: string,
  runner: BasicTestRunner
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

  return {
    dpgContext: sdkContext,
    type: headerParam,
    valueExpr: headerParam.name,
    functionType: UsageFlags.Input
  } as any;
}
