import { beforeEach, describe, it, expect } from "vitest";
import { createMyTestRunner, createTcgcContext } from "./test-hots.js";
import {
  SdkArrayType,
  SdkContext,
  SdkDatetimeType
} from "@azure-tools/typespec-client-generator-core";
import { EmitContext, UsageFlags } from "@typespec/compiler";
import { BasicTestRunner } from "@typespec/compiler/testing";
import { SerializeTypeOptions } from "../../../src/modular/serialization/serializers.js";
import { serializeDatetime } from "../../../src/modular/serialization/serializeDateTime.js";

describe("serializeDateTime", () => {
  let runner: BasicTestRunner;

  beforeEach(async () => {
    runner = await createMyTestRunner();
  });

  describe("serialization", () => {
    let testArrays: TestArrays;
    beforeEach(async () => {
      testArrays = await getSdkDateTimes(runner, "serialize");
    });

    it("should serialize utcDateTime without encoding", () => {
      const { utcDateTime } = testArrays;
      const result = serializeDatetime(utcDateTime);

      expect(result).toEqual("(myDate).toISOString()");
    });

    it("should serialize rfc3339 with encoding", () => {
      const { rfc3339 } = testArrays;
      const result = serializeDatetime(rfc3339);

      expect(result).toEqual("(myDate).toISOString()");
    });

    it("should serialize rfc7231 with encoding", () => {
      const { rfc7231 } = testArrays;
      const result = serializeDatetime(rfc7231);

      expect(result).toEqual("(myDate).toUTCString()");
    });

    it("should serialize unixTimestamp with encoding", () => {
      const { unixTimestamp } = testArrays;
      const result = serializeDatetime(unixTimestamp);

      expect(result).toEqual("(myDate).getTime()");
    });

    it("should serialize offsetDateTime without encoding", () => {
      const { offsetDateTime } = testArrays;
      const result = serializeDatetime(offsetDateTime);

      expect(result).toEqual("(myDate).toISOString()");
    });
  });

  describe("deserialization", () => {
    let testArrays: TestArrays;

    beforeEach(async () => {
      testArrays = await getSdkDateTimes(runner, "deserialize");
    });

    it("should deserialize utcDateTime without encoding", () => {
      const { utcDateTime } = testArrays;
      const result = serializeDatetime(utcDateTime);

      expect(result).toEqual("new Date(myDate)");
    });

    it("should deserialize rfc3339 with encoding", () => {
      const { rfc3339 } = testArrays;
      const result = serializeDatetime(rfc3339);

      expect(result).toEqual("new Date(myDate)");
    });

    it("should deserialize rfc7231 with encoding", () => {
      const { rfc7231 } = testArrays;
      const result = serializeDatetime(rfc7231);

      expect(result).toEqual("new Date(myDate)");
    });

    it("should deserialize unixTimestamp with encoding", () => {
      const { unixTimestamp } = testArrays;
      const result = serializeDatetime(unixTimestamp);

      expect(result).toEqual("new Date(myDate)");
    });

    it("should deserialize offsetDateTime without encoding", () => {
      const { offsetDateTime } = testArrays;
      const result = serializeDatetime(offsetDateTime);

      expect(result).toEqual("new Date(myDate)");
    });
  });
});

type DateTimeSerializeOptions = SerializeTypeOptions<
  SdkDatetimeType & {
    kind: "";
  }
>;

interface TestArrays {
  utcDateTime: DateTimeSerializeOptions;
  rfc3339: DateTimeSerializeOptions;
  rfc7231: DateTimeSerializeOptions;
  unixTimestamp: DateTimeSerializeOptions;
  offsetDateTime: DateTimeSerializeOptions;
}

async function getSdkDateTimes(
  runner: BasicTestRunner,
  mode: "serialize" | "deserialize"
): Promise<TestArrays> {
  const template = `   @service({
            title: "Widget Service",
          })
          namespace DemoService;
  
          @test model Test {
            utcDateTime: utcDateTime;
            @encode(DateTimeKnownEncoding.rfc3339)
            rfc3339: utcDateTime;
            @encode(DateTimeKnownEncoding.rfc7231)
            rfc7231: utcDateTime;
            @encode(DateTimeKnownEncoding.unixTimestamp, int32)
            unixTimestamp: utcDateTime;
            offsetDateTime: offsetDateTime;
            };

            op getTest(): Test;
          `;

  await runner.compile(template);
  const context: EmitContext = {
    program: runner.program
  } as any;

  const sdkContext = createTcgcContext(context);

  const utcDateTime =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "utcDateTime"
    )?.type as unknown as SdkDatetimeType;

  const offsetDateTime =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "offsetDateTime"
    )?.type as unknown as SdkDatetimeType;
  const rfc3339 = sdkContext.experimental_sdkPackage.models[0].properties.find(
    (p) => p.name === "rfc3339"
  )?.type as unknown as SdkDatetimeType;
  const rfc7231 = sdkContext.experimental_sdkPackage.models[0].properties.find(
    (p) => p.name === "rfc7231"
  )?.type as unknown as SdkDatetimeType;
  const unixTimestamp =
    sdkContext.experimental_sdkPackage.models[0].properties.find(
      (p) => p.name === "unixTimestamp"
    )?.type as unknown as SdkDatetimeType;

  return {
    utcDateTime: getSerializeOptions(utcDateTime, sdkContext, mode),
    offsetDateTime: getSerializeOptions(offsetDateTime, sdkContext, mode),
    rfc3339: getSerializeOptions(rfc3339, sdkContext, mode),
    rfc7231: getSerializeOptions(rfc7231, sdkContext, mode),
    unixTimestamp: getSerializeOptions(unixTimestamp, sdkContext, mode)
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
    valueExpr: "myDate",
    functionType
  } as any;
}
