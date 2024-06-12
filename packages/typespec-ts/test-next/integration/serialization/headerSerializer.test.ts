import { describe, it, assert, beforeEach } from "vitest";
import { createMyTestRunner, createTcgcContext } from "./test-hots.js";
import {
  getHttpOperationWithCache,
  SdkHeaderParameter,
  listOperationsInOperationGroup,
  SdkMethodParameter,
  SdkParameter
} from "@azure-tools/typespec-client-generator-core";
import { headerSerializer } from "../../../src/modular/serialization/headerSerializer.js";

import { EmitContext, Operation } from "@typespec/compiler";
import { BasicTestRunner } from "@typespec/compiler/testing";
import { SerializeTypeOptions } from "../../../src/modular/serialization/serializers.js";

describe("headerSerializer", () => {
  let runner: BasicTestRunner;

  beforeEach(async () => {
    runner = await createMyTestRunner();
  });

  it("should handle a simple string header", async () => {
    const headerParam = await getSdkHeader("@header param: string", runner);
    const result = headerSerializer(headerParam);

    assert.equal(result, "param");
  });

  it("should handle a simple numeric header", async () => {
    const int64 = await getSdkHeader("@header param: int64", runner);
    const int32 = await getSdkHeader("@header param: int32", runner);
    const int16 = await getSdkHeader("@header param: int16", runner);
    const int8 = await getSdkHeader("@header param: int8", runner);
    const integerParam = await getSdkHeader("@header param: integer", runner);
    const numericParam = await getSdkHeader("@header param: numeric", runner);
    const decimal = await getSdkHeader("@header param: decimal", runner);
    const decimal128 = await getSdkHeader("@header param: decimal128", runner);
    const float = await getSdkHeader("@header param: float", runner);
    const float32 = await getSdkHeader("@header param: float32", runner);
    const float64 = await getSdkHeader("@header param: float64", runner);
    const safeint = await getSdkHeader("@header param: safeint", runner);
    const uint64 = await getSdkHeader("@header param: uint64", runner);
    const uint32 = await getSdkHeader("@header param: uint32", runner);
    const uint16 = await getSdkHeader("@header param: uint16", runner);
    const uint8 = await getSdkHeader("@header param: uint8", runner);

    assert.equal(headerSerializer(int16), "String(param)");
    assert.equal(headerSerializer(int32), "String(param)");
    assert.equal(headerSerializer(int64), "String(param)");
    assert.equal(headerSerializer(int8), "String(param)");
    assert.equal(headerSerializer(integerParam), "String(param)");
    assert.equal(headerSerializer(numericParam), "String(param)");
    assert.equal(headerSerializer(decimal), "String(param)");
    assert.equal(headerSerializer(decimal128), "String(param)");
    assert.equal(headerSerializer(float), "String(param)");
    assert.equal(headerSerializer(float32), "String(param)");
    assert.equal(headerSerializer(float64), "String(param)");
    assert.equal(headerSerializer(safeint), "String(param)");
    assert.equal(headerSerializer(uint64), "String(param)");
    assert.equal(headerSerializer(uint32), "String(param)");
    assert.equal(headerSerializer(uint16), "String(param)");
    assert.equal(headerSerializer(uint8), "String(param)");
  });

  it("should handle a simple boolean header", async () => {
    const headerParam = await getSdkHeader("@header param: boolean", runner);
    const result = headerSerializer(headerParam);

    assert.equal(result, "String(param)");
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

  const { foo } = await runner.compile(template);

  const context: EmitContext = {
    program: runner.program
  } as any;

  const sdkContext = createTcgcContext(context);
  const headerParam = sdkContext.experimental_sdkPackage.clients[0].methods[0]
    .parameters[0] as unknown as SdkHeaderParameter;

  return {
    dpgContext: sdkContext,
    type: headerParam,
    valueExpr: headerParam.name
  } as any;
}
