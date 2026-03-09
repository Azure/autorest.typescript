import { describe, it, expect, vi, beforeEach } from "vitest";
import { Project } from "ts-morph";
import {
  classifyPreviewFeatures,
  getPreviewOnlyTopLevelGroups
} from "../../../src/modular/helpers/previewDetection.js";
import { buildAugmentations } from "../../../src/modular/buildAugmentations.js";
import {
  SdkClientType,
  SdkServiceOperation
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../../../src/utils/interfaces.js";

// --- Mocks for classifyPreviewFeatures ---
vi.mock("../../../src/utils/operationUtil.js", () => ({
  getMethodHierarchiesMap: vi.fn()
}));
vi.mock(
  "../../../src/modular/type-expressions/get-model-expression.js",
  () => ({
    getExternalModel: vi.fn(() => null)
  })
);

// --- Mocks for buildAugmentations ---
vi.mock("../../../src/contextManager.js", () => ({
  useContext: vi.fn()
}));
vi.mock("../../../src/modular/helpers/namingHelpers.js", () => ({
  getClassicalLayerPrefix: vi.fn(
    (
      prefixes: string[],
      _nameType?: any,
      _separator?: string,
      layer?: number
    ) => {
      const targetLayer =
        layer !== undefined ? layer : prefixes.length - 1;
      return prefixes
        .slice(0, targetLayer + 1)
        .map((p: string) => p.charAt(0).toUpperCase() + p.slice(1))
        .join("");
    }
  ),
  getClientName: vi.fn((client: any) => client.name),
  getClassicalClientName: vi.fn((client: any) => client.name)
}));
vi.mock("../../../src/modular/helpers/clientHelpers.js", () => ({
  getClientParametersDeclaration: vi.fn(() => [])
}));

import { getMethodHierarchiesMap } from "../../../src/utils/operationUtil.js";
import { useContext } from "../../../src/contextManager.js";

const mockGetMethodHierarchiesMap = getMethodHierarchiesMap as any;
const mockUseContext = useContext as any;

function createMockOperation(name: string, apiVersions: string[]): any {
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
  packageApiVersions: string[]
): SdkContext {
  return {
    sdkPackage: { metadata: { apiVersions: packageApiVersions }, enums: [] },
    previewStringRegex: /preview|beta/i
  } as any;
}

function createMockClient(
  name: string = "TestClient"
): SdkClientType<SdkServiceOperation> {
  return { name, kind: "client", children: [] } as any;
}

function createMockEmitterOptions(packageName: string): any {
  return {
    modularOptions: {
      sourceRoot: "src/beta",
      betaMergeStrategy: "namespace"
    },
    options: { packageDetails: { name: packageName } }
  };
}

describe("E4 — All-Preview Package Integration", () => {
  let project: Project;

  beforeEach(() => {
    project = new Project({ useInMemoryFileSystem: true });
    mockUseContext.mockReturnValue(project);
  });

  describe("classification", () => {
    it("should classify single all-preview group as having no beta output", () => {
      const context = createMockContext(["2024-01-01-preview"]);
      const client = createMockClient();
      const op1 = createMockOperation("createResource", [
        "2024-01-01-preview"
      ]);
      const op2 = createMockOperation("deleteResource", [
        "2024-01-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["resources", [op1, op2]]])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(false);
      expect(result.previewMethods.size).toBe(0);
      expect(result.previewOnlyGroups.size).toBe(0);
      expect(result.mixedGroups.size).toBe(0);
      // All operations stay top-level as stable
      expect(result.stableMethods.size).toBe(1);
      expect(result.stableMethods.get("resources")).toHaveLength(2);
    });

    it("should classify multiple all-preview groups as having no beta output", () => {
      const context = createMockContext([
        "2024-01-01-preview",
        "2024-06-01-preview"
      ]);
      const client = createMockClient();
      const op1 = createMockOperation("create", ["2024-01-01-preview"]);
      const op2 = createMockOperation("analyze", ["2024-06-01-preview"]);
      const op3 = createMockOperation("diagnose", [
        "2024-01-01-preview",
        "2024-06-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["resources", [op1]],
          ["analytics", [op2]],
          ["diagnostics", [op3]]
        ])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(false);
      expect(result.stableMethods.size).toBe(3);
      expect(result.previewMethods.size).toBe(0);
    });

    it("should produce empty preview-only top-level groups", () => {
      const context = createMockContext(["2024-01-01-preview"]);
      const client = createMockClient();
      const op = createMockOperation("create", ["2024-01-01-preview"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["resources", [op]]])
      );

      const result = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(result);

      expect(topLevelGroups.size).toBe(0);
    });

    it("should handle beta-tagged versions as preview", () => {
      const context = createMockContext(["2024-01-01-beta"]);
      const client = createMockClient();
      const op = createMockOperation("create", ["2024-01-01-beta"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["resources", [op]]])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(false);
      expect(result.stableMethods.size).toBe(1);
    });
  });

  describe("generation guard", () => {
    it("should not create augmentation file when classification shows all-preview", () => {
      const context = createMockContext(["2024-01-01-preview"]);
      const client = createMockClient();
      const op = createMockOperation("create", ["2024-01-01-preview"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["resources", [op]]])
      );

      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");

      buildAugmentations(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        undefined
      );

      const augFile = project.getSourceFile(
        "src/beta/augmentations.ts"
      );
      expect(augFile).toBeUndefined();
    });

    it("should not create augmentation file for nested all-preview groups", () => {
      const context = createMockContext(["2024-02-01-beta"]);
      const client = createMockClient();
      const op1 = createMockOperation("nested1", ["2024-02-01-beta"]);
      const op2 = createMockOperation("nested2", ["2024-02-01-beta"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["parent/child", [op1]],
          ["parent/other", [op2]]
        ])
      );

      const classification = classifyPreviewFeatures(context, client);
      expect(classification.hasAnyPreview).toBe(false);

      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");

      buildAugmentations(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        undefined
      );

      const augFile = project.getSourceFile(
        "src/beta/augmentations.ts"
      );
      expect(augFile).toBeUndefined();
    });

    it("should have empty previewModels and previewEnums for all-preview package", () => {
      const context = createMockContext(["2024-01-01-preview"]);
      const client = createMockClient();
      const op = createMockOperation("create", ["2024-01-01-preview"]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["resources", [op]]])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.previewModels.size).toBe(0);
      expect(result.previewEnums.size).toBe(0);
      expect(result.previewTypes.size).toBe(0);
    });
  });
});
