import { describe, it, expect, vi } from "vitest";
import {
  classifyPreviewFeatures,
  getPreviewOnlyTopLevelGroups,
  PreviewClassification
} from "../../../src/modular/helpers/previewDetection.js";
import {
  SdkClientType,
  SdkServiceOperation,
  SdkEnumType,
  SdkModelType,
  SdkType
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../../../src/utils/interfaces.js";

// Mock getMethodHierarchiesMap
vi.mock("../../../src/utils/operationUtil.js", () => ({
  getMethodHierarchiesMap: vi.fn()
}));

// Mock getExternalModel
vi.mock("../../../src/modular/type-expressions/get-model-expression.js", () => ({
  getExternalModel: vi.fn(() => null)
}));

import { getMethodHierarchiesMap } from "../../../src/utils/operationUtil.js";

const mockGetMethodHierarchiesMap = getMethodHierarchiesMap as any;

function createMockOperation(
  name: string,
  apiVersions: string[] = []
): any {
  return {
    __raw: { name },
    name,
    kind: "method",
    apiVersions,
    parameters: [],
    response: { type: { kind: "void" } },
    operation: {
      bodyParam: null,
      exceptions: [],
      parameters: [],
      responses: []
    }
  };
}

function createMockContext(
  packageApiVersions: string[] = [],
  previewRegex?: RegExp
): SdkContext {
  return {
    sdkPackage: {
      metadata: {
        apiVersions: packageApiVersions
      },
      enums: []
    },
    previewStringRegex: previewRegex
  } as any;
}

function createMockClient(name: string = "TestClient"): SdkClientType<SdkServiceOperation> {
  return {
    name,
    kind: "client"
  } as any;
}

describe("Preview Detection", () => {
  describe("classifyPreviewFeatures", () => {
    it("should return hasAnyPreview=false when no stable package version exists (all-preview package)", () => {
      const context = createMockContext(["2024-01-01-preview"]);
      const client = createMockClient();
      const op1 = createMockOperation("operation1", ["2024-01-01-preview"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [op1]]])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(false);
      expect(result.previewMethods.size).toBe(0);
      expect(result.stableMethods.size).toBe(1);
    });

    it("should return hasAnyPreview=false when no preview operations exist (all-stable package)", () => {
      const context = createMockContext(["2024-01-01"]);
      const client = createMockClient();
      const op1 = createMockOperation("operation1", ["2024-01-01"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [op1]]])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(false);
      expect(result.previewMethods.size).toBe(0);
      expect(result.stableMethods.size).toBe(1);
    });

    it("should classify preview-only groups correctly", () => {
      const context = createMockContext(["2024-01-01", "2024-02-01-preview"]);
      const client = createMockClient();
      const previewOp = createMockOperation("previewOp", [
        "2024-02-01-preview"
      ]);
      const stableOp = createMockOperation("stableOp", ["2024-01-01"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["previewGroup", [previewOp]],
          ["stableGroup", [stableOp]]
        ])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(true);
      expect(result.previewOnlyGroups.has("previewGroup")).toBe(true);
      expect(result.previewOnlyGroups.has("stableGroup")).toBe(false);
      expect(result.mixedGroups.size).toBe(0);
    });

    it("should classify mixed groups (stable + preview methods in same group)", () => {
      const context = createMockContext(["2024-01-01", "2024-02-01-preview"]);
      const client = createMockClient();
      const previewOp = createMockOperation("previewOp", [
        "2024-02-01-preview"
      ]);
      const stableOp = createMockOperation("stableOp", ["2024-01-01"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["mixedGroup", [previewOp, stableOp]]])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(true);
      expect(result.mixedGroups.has("mixedGroup")).toBe(true);
      expect(result.previewOnlyGroups.has("mixedGroup")).toBe(false);
      expect(result.previewMethods.get("mixedGroup")).toHaveLength(1);
      expect(result.stableMethods.get("mixedGroup")).toHaveLength(1);
    });

    it("should handle empty client (no operations)", () => {
      const context = createMockContext(["2024-01-01"]);
      const client = createMockClient();

      mockGetMethodHierarchiesMap.mockReturnValue(new Map());

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(false);
      expect(result.previewMethods.size).toBe(0);
      expect(result.stableMethods.size).toBe(0);
      expect(result.previewOnlyGroups.size).toBe(0);
      expect(result.mixedGroups.size).toBe(0);
    });

    it("should handle nested hierarchy with / separators", () => {
      const context = createMockContext(["2024-01-01", "2024-02-01-preview"]);
      const client = createMockClient();
      const nestedPreviewOp = createMockOperation("nestedPreviewOp", [
        "2024-02-01-preview"
      ]);
      const nestedStableOp = createMockOperation("nestedStableOp", [
        "2024-01-01"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["parent/child/preview", [nestedPreviewOp]],
          ["parent/child/stable", [nestedStableOp]]
        ])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(true);
      expect(result.previewOnlyGroups.has("parent/child/preview")).toBe(true);
      expect(result.previewOnlyGroups.has("parent/child/stable")).toBe(false);
    });

    it("should use custom preview regex when provided", () => {
      const context = createMockContext(
        ["2024-01-01", "2024-02-01-beta"],
        /beta/i
      );
      const client = createMockClient();
      const betaOp = createMockOperation("betaOp", ["2024-02-01-beta"]);
      const stableOp = createMockOperation("stableOp", ["2024-01-01"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["betaGroup", [betaOp]],
          ["stableGroup", [stableOp]]
        ])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(true);
      expect(result.previewOnlyGroups.has("betaGroup")).toBe(true);
    });

    it("should handle operations with no api versions", () => {
      const context = createMockContext(["2024-01-01"]);
      const client = createMockClient();
      const op = createMockOperation("operation1", []);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [op]]])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(false);
      expect(result.stableMethods.size).toBe(1);
    });

    it("should handle operations with mixed api versions (some preview, some stable)", () => {
      const context = createMockContext(["2024-01-01", "2024-02-01-preview"]);
      const client = createMockClient();
      const mixedOp = createMockOperation("mixedOp", [
        "2024-01-01",
        "2024-02-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [mixedOp]]])
      );

      const result = classifyPreviewFeatures(context, client);

      // If operation has both stable and preview versions, it's considered stable
      expect(result.stableMethods.size).toBe(1);
      expect(result.previewMethods.size).toBe(0);
    });

    it("should handle operations with all-preview api versions", () => {
      const context = createMockContext(["2024-01-01", "2024-02-01-preview"]);
      const client = createMockClient();
      const previewOnlyOp = createMockOperation("previewOnlyOp", [
        "2024-01-01-preview",
        "2024-02-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [previewOnlyOp]]])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(true);
      expect(result.previewMethods.size).toBe(1);
      expect(result.stableMethods.size).toBe(0);
    });
  });

  describe("getPreviewOnlyTopLevelGroups", () => {
    it("should return empty set when no preview groups exist", () => {
      const previewInfo: PreviewClassification = {
        previewMethods: new Map(),
        stableMethods: new Map([["stable", []]]),
        previewOnlyGroups: new Set(),
        mixedGroups: new Set(),
        previewTypes: new Set(),
        stableTypes: new Set(),
        previewModels: new Set(),
        previewEnums: new Set(),
        hasAnyPreview: false
      };

      const result = getPreviewOnlyTopLevelGroups(previewInfo);

      expect(result.size).toBe(0);
    });

    it("should return top-level preview-only groups", () => {
      const previewInfo: PreviewClassification = {
        previewMethods: new Map([
          ["previewGroup", []],
          ["anotherPreview", []]
        ]),
        stableMethods: new Map([["stableGroup", []]]),
        previewOnlyGroups: new Set(["previewGroup", "anotherPreview"]),
        mixedGroups: new Set(),
        previewTypes: new Set(),
        stableTypes: new Set(),
        previewModels: new Set(),
        previewEnums: new Set(),
        hasAnyPreview: true
      };

      const result = getPreviewOnlyTopLevelGroups(previewInfo);

      expect(result.size).toBe(2);
      expect(result.has("previewGroup")).toBe(true);
      expect(result.has("anotherPreview")).toBe(true);
    });

    it("should exclude top-level groups that have stable methods", () => {
      const previewInfo: PreviewClassification = {
        previewMethods: new Map([
          ["parent/preview", []],
          ["purePreview", []]
        ]),
        stableMethods: new Map([["parent/stable", []]]),
        previewOnlyGroups: new Set(["parent/preview", "purePreview"]),
        mixedGroups: new Set(),
        previewTypes: new Set(),
        stableTypes: new Set(),
        previewModels: new Set(),
        previewEnums: new Set(),
        hasAnyPreview: true
      };

      const result = getPreviewOnlyTopLevelGroups(previewInfo);

      // "parent" should be excluded because it has stable methods
      expect(result.has("parent")).toBe(false);
      // "purePreview" should be included
      expect(result.has("purePreview")).toBe(true);
      expect(result.size).toBe(1);
    });

    it("should handle nested hierarchy correctly", () => {
      const previewInfo: PreviewClassification = {
        previewMethods: new Map([
          ["parent/child/grandchild", []],
          ["another/preview", []]
        ]),
        stableMethods: new Map([["parent/child/stable", []]]),
        previewOnlyGroups: new Set([
          "parent/child/grandchild",
          "another/preview"
        ]),
        mixedGroups: new Set(),
        previewTypes: new Set(),
        stableTypes: new Set(),
        previewModels: new Set(),
        previewEnums: new Set(),
        hasAnyPreview: true
      };

      const result = getPreviewOnlyTopLevelGroups(previewInfo);

      // "parent" should be excluded (has stable child)
      expect(result.has("parent")).toBe(false);
      // "another" should be included (no stable children)
      expect(result.has("another")).toBe(true);
      expect(result.size).toBe(1);
    });

    it("should handle empty strings in group keys", () => {
      const previewInfo: PreviewClassification = {
        previewMethods: new Map([["", []]]),
        stableMethods: new Map(),
        previewOnlyGroups: new Set([""]),
        mixedGroups: new Set(),
        previewTypes: new Set(),
        stableTypes: new Set(),
        previewModels: new Set(),
        previewEnums: new Set(),
        hasAnyPreview: true
      };

      const result = getPreviewOnlyTopLevelGroups(previewInfo);

      // Empty string should be filtered out
      expect(result.size).toBe(0);
    });

    it("should handle mixed top-level groups correctly", () => {
      const previewInfo: PreviewClassification = {
        previewMethods: new Map([
          ["operations/preview", []],
          ["operations/morePreview", []],
          ["purePreview", []]
        ]),
        stableMethods: new Map([["operations/stable", []]]),
        previewOnlyGroups: new Set([
          "operations/preview",
          "operations/morePreview",
          "purePreview"
        ]),
        mixedGroups: new Set(),
        previewTypes: new Set(),
        stableTypes: new Set(),
        previewModels: new Set(),
        previewEnums: new Set(),
        hasAnyPreview: true
      };

      const result = getPreviewOnlyTopLevelGroups(previewInfo);

      // "operations" has both preview and stable children, should be excluded
      expect(result.has("operations")).toBe(false);
      // "purePreview" has only preview methods
      expect(result.has("purePreview")).toBe(true);
      expect(result.size).toBe(1);
    });
  });

  describe("getApiVersions helper (internal)", () => {
    // These tests verify the defensive parsing behavior of the internal getApiVersions function
    // by observing the behavior of classifyPreviewFeatures with different metadata shapes

    it("should handle Array input via operation metadata", () => {
      const context = createMockContext(["2024-01-01", "2024-02-01-preview"]);
      const client = createMockClient();
      const op = createMockOperation("operation1", [
        "2024-01-01",
        "2024-02-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [op]]])
      );

      const result = classifyPreviewFeatures(context, client);

      // Should successfully classify as stable (has at least one non-preview version)
      expect(result.stableMethods.size).toBe(1);
    });

    it("should handle Map input via package metadata", () => {
      const apiVersionMap = new Map([
        ["2024-01-01", {}],
        ["2024-02-01-preview", {}]
      ]);
      const context = createMockContext(apiVersionMap as any);
      const client = createMockClient();
      const op = createMockOperation("operation1", ["2024-01-01"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [op]]])
      );

      const result = classifyPreviewFeatures(context, client);

      // Should successfully detect stable package version
      expect(result.hasAnyPreview).toBe(false);
    });

    it("should handle Set input via package metadata", () => {
      const apiVersionSet = new Set([
        "2024-01-01",
        "2024-02-01-preview"
      ]);
      const context = createMockContext(apiVersionSet as any);
      const client = createMockClient();
      const previewOp = createMockOperation("operation1", [
        "2024-02-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [previewOp]]])
      );

      const result = classifyPreviewFeatures(context, client);

      // Should detect mixed package (has both stable and preview)
      expect(result.hasAnyPreview).toBe(true);
    });

    it("should handle Object input via package metadata", () => {
      const apiVersionObject = {
        "2024-01-01": {},
        "2024-02-01-preview": {}
      };
      const context = createMockContext(apiVersionObject as any);
      const client = createMockClient();
      const op = createMockOperation("operation1", ["2024-01-01"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [op]]])
      );

      const result = classifyPreviewFeatures(context, client);

      // Should successfully parse object keys
      expect(result.hasAnyPreview).toBe(false);
    });

    it("should handle string input via package metadata", () => {
      const context = createMockContext("2024-01-01" as any);
      const client = createMockClient();
      const op = createMockOperation("operation1", ["2024-01-01"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [op]]])
      );

      const result = classifyPreviewFeatures(context, client);

      // Should successfully parse single string
      expect(result.hasAnyPreview).toBe(false);
    });

    it("should handle null/undefined via package metadata", () => {
      const contextNull = createMockContext(null as any);
      const contextUndefined = createMockContext(undefined as any);
      const client = createMockClient();
      const op = createMockOperation("operation1", []);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [op]]])
      );

      const resultNull = classifyPreviewFeatures(contextNull, client);
      const resultUndefined = classifyPreviewFeatures(contextUndefined, client);

      // Should handle gracefully (no package versions = all-preview package)
      expect(resultNull.hasAnyPreview).toBe(false);
      expect(resultUndefined.hasAnyPreview).toBe(false);
    });

    it("should filter non-string values from Array input", () => {
      const context = createMockContext(["2024-01-01", "2024-02-01-preview"]);
      const client = createMockClient();
      // Mixed array with non-string values
      const op = createMockOperation("operation1", [
        "2024-01-01",
        null,
        undefined,
        123,
        {}
      ] as any);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["operations", [op]]])
      );

      const result = classifyPreviewFeatures(context, client);

      // Should filter out non-strings and still classify correctly
      expect(result.stableMethods.size).toBe(1);
    });
  });
});
