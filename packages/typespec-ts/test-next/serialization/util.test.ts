import { assert } from "chai";
import {
  getEncodingFormat,
  getModularTypeId,
  getParameterTypePropertyName,
  getRLCTypeId,
  getReturnTypePropertyName
} from "../../src/modular/serialization/util.js";
import { UsageFlags } from "@typespec/compiler";
import {
  describe,
  it,
  afterEach,
  vi,
  MockedObject,
  MockedFunction,
  Mock
} from "vitest";
import { getLibraryName } from "@azure-tools/typespec-client-generator-core";
import { beforeEach } from "node:test";

// Mock the module
vi.mock("@azure-tools/typespec-client-generator-core", async () => {
  const actual = await vi.importActual(
    "@azure-tools/typespec-client-generator-core"
  );
  return {
    ...actual,
    getWireName: vi.fn(),
    getLibraryName: vi.fn()
  };
});

type SdkType = any;
describe("serialization utils", () => {
  describe("getEncodingFormat", () => {
    it("should return the encoding format for output", () => {
      const type = { encode: "base64" } as SdkType & { kind: "bytes" };
      const result = getEncodingFormat(UsageFlags.Output, type);
      assert.equal(result, "base64");
    });

    it("should return the encoding format for input when it is supported", () => {
      const type = { encode: "base64url" } as SdkType & { kind: "bytes" };
      const result = getEncodingFormat(UsageFlags.Input, type);
      assert.equal(result, "base64url");
    });

    it("should fallback to base64 when the provided encode is not supported", () => {
      const type = { encode: "somerandom" } as SdkType & { kind: "bytes" };
      const result = getEncodingFormat(UsageFlags.Input, type);
      assert.equal(result, "base64");
    });
  });

  describe("getModularTypeId", () => {
    it("should return the name of the type", () => {
      const type = { name: "myType" } as SdkType;
      const result = getModularTypeId(type);
      assert.equal(result, "myType");
    });
  });

  // this needs the compiled types
  describe("getParameterTypePropertyName", () => {
    afterEach(() => {
      // Restore all mocks after each test to ensure clean state
      vi.restoreAllMocks();
    });

    it("should return the wire name for output", async () => {
      const { getWireName, getLibraryName } = await import(
        "@azure-tools/typespec-client-generator-core"
      );

      (getWireName as any).mockImplementation(() => "wireName");
      (getLibraryName as any).mockImplementation(() => "libraryName");

      const dpgContext = {} as any;
      const functionType = UsageFlags.Output;
      const p = { __raw: {} } as any;
      const result = getParameterTypePropertyName(dpgContext, functionType, p);
      assert.equal(result, "wireName");
    });

    it("should return the library name for input", async () => {
      const { getWireName, getLibraryName } = await import(
        "@azure-tools/typespec-client-generator-core"
      );

      (getWireName as any).mockImplementation(() => "wireName");
      (getLibraryName as any).mockImplementation(() => "libraryName");
      const dpgContext = {} as any;
      const functionType = UsageFlags.Input;
      const p = { __raw: {} } as any;
      const result = getParameterTypePropertyName(dpgContext, functionType, p);
      assert.equal(result, "libraryName");
    });
  });

  // this needs the compiled types
  describe("getReturnTypePropertyName", () => {
    afterEach(() => {
      // Restore all mocks after each test to ensure clean state
      vi.restoreAllMocks();
    });

    it("should return the library name for output", async () => {
      const { getWireName, getLibraryName } = await import(
        "@azure-tools/typespec-client-generator-core"
      );

      (getWireName as any).mockImplementation(() => "wireName");
      (getLibraryName as any).mockImplementation(() => "libraryName");

      const result = getReturnTypePropertyName(
        {} as any,
        UsageFlags.Output,
        {} as any
      );
      assert.equal(result, "libraryName");
    });

    it("should return the wire name for input", async () => {
      const { getWireName, getLibraryName } = await import(
        "@azure-tools/typespec-client-generator-core"
      );

      (getWireName as any).mockImplementation(() => "wireName");
      (getLibraryName as any).mockImplementation(() => "libraryName");

      const result = getReturnTypePropertyName(
        {} as any,
        UsageFlags.Input,
        {} as any
      );
      assert.equal(result, "wireName");
    });
  });

  describe("getRLCTypeId", () => {
    it("should return the type name for input", async () => {
      const dpgContext = {} as any;
      const type = { name: "myType" } as SdkType;
      const result = getRLCTypeId(dpgContext, type);
      assert.equal(result, "myType");
    });

    // TODO: Enable when getUsage gets updated. Currently it always returns TCGCUsageFlags.Input | TCGCUsageFlags.Output
    it.skip("should return the type name for output", async () => {
      const dpgContext = {} as any;
      const type = { name: "myType" } as SdkType;
      const result = getRLCTypeId(dpgContext, type);
      assert.equal(result, "myType Rest");
    });
  });
});
