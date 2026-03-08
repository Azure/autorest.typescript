import { describe, it, expect, vi, beforeEach } from "vitest";
import { Project } from "ts-morph";
import {
  classifyPreviewFeatures,
  getPreviewOnlyTopLevelGroups,
  PreviewClassification
} from "../../../src/modular/helpers/previewDetection.js";
import { buildAugmentations } from "../../../src/modular/buildAugmentations.js";
import { buildBetaIndex } from "../../../src/modular/buildBetaIndex.js";
import {
  SdkClientType,
  SdkServiceOperation,
  InitializedByFlags
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

// --- Mocks for builders ---
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
vi.mock("../../../src/modular/buildSubpathIndex.js", () => ({
  isTypeOnlyNode: vi.fn(() => true)
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
  name: string = "TestClient",
  children?: any[]
): SdkClientType<SdkServiceOperation> {
  return { name, kind: "client", children: children ?? [] } as any;
}

function createMockEmitterOptions(
  packageName: string,
  mergeStrategy: "merge" | "namespace" = "namespace"
): any {
  return {
    modularOptions: {
      sourceRoot: "src/beta",
      betaMergeStrategy: mergeStrategy
    },
    options: { packageDetails: { name: packageName } }
  };
}

/**
 * Computes previewOnlyNestedGroups the same way buildBeta.ts does.
 * This is a private function in the implementation, so we replicate it for testing.
 */
function computePreviewOnlyNestedGroups(
  previewInfo: PreviewClassification,
  previewTopLevelGroups: Set<string>
): Set<string> {
  const nestedGroups = new Set<string>();
  for (const groupKey of previewInfo.previewOnlyGroups) {
    if (!groupKey) continue;
    const [topLevel] = groupKey.split("/");
    if (!topLevel || previewTopLevelGroups.has(topLevel)) continue;
    if (groupKey.includes("/")) {
      nestedGroups.add(groupKey);
    }
  }
  return nestedGroups;
}

describe("E7 — Nested Client Hierarchy Integration", () => {
  let project: Project;

  beforeEach(() => {
    project = new Project({ useInMemoryFileSystem: true });
    project.createSourceFile(
      "src/beta/classic/index.ts",
      "export type Foo = string;"
    );
    project.createSourceFile(
      "src/beta/api/index.ts",
      "export type Bar = number;"
    );
    project.createSourceFile(
      "src/beta/models/index.ts",
      "export type Baz = boolean;"
    );
    mockUseContext.mockReturnValue(project);
  });

  describe("3-level deep nesting classification", () => {
    it("should classify deeply nested preview group alongside stable siblings", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const client = createMockClient();

      const stableOp = createMockOperation("list", ["2024-01-01"]);
      const previewOp = createMockOperation("createSnapshot", [
        "2024-06-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["compute/vms", [stableOp]],
          ["compute/vms/snapshots", [previewOp]]
        ])
      );

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(true);
      expect(result.previewOnlyGroups.has("compute/vms/snapshots")).toBe(
        true
      );
      expect(result.stableMethods.has("compute/vms")).toBe(true);
      expect(result.mixedGroups.size).toBe(0);
    });

    it("should not mark parent top-level as preview-only when it has stable children", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const client = createMockClient();

      const stableOp = createMockOperation("list", ["2024-01-01"]);
      const previewOp = createMockOperation("createSnapshot", [
        "2024-06-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["compute/vms", [stableOp]],
          ["compute/vms/snapshots", [previewOp]]
        ])
      );

      const result = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(result);

      // "compute" has stable children → not preview-only top-level
      expect(topLevelGroups.has("compute")).toBe(false);
      expect(topLevelGroups.size).toBe(0);
    });

    it("should correctly compute nested groups for 3-level hierarchy", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const client = createMockClient();

      const stableOp = createMockOperation("list", ["2024-01-01"]);
      const previewOp = createMockOperation("createSnapshot", [
        "2024-06-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["compute/vms", [stableOp]],
          ["compute/vms/snapshots", [previewOp]]
        ])
      );

      const result = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(result);
      const nestedGroups = computePreviewOnlyNestedGroups(
        result,
        topLevelGroups
      );

      expect(nestedGroups.has("compute/vms/snapshots")).toBe(true);
      expect(nestedGroups.size).toBe(1);
    });
  });

  describe("nested augmentation generation", () => {
    it("should augment parent interface with nested preview property", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const client = createMockClient();

      const stableOp = createMockOperation("list", ["2024-01-01"]);
      const previewOp = createMockOperation("createSnapshot", [
        "2024-06-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["compute/vms", [stableOp]],
          ["compute/vms/snapshots", [previewOp]]
        ])
      );

      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);
      const nestedGroups = computePreviewOnlyNestedGroups(
        classification,
        topLevelGroups
      );

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package"
      );

      buildAugmentations(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        nestedGroups,
        undefined
      );

      const content = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();

      // Parent interface (ComputeVms) should get the snapshots property
      expect(content).toContain("ComputeVmsOperations");
      expect(content).toContain(
        "ExperimentalComputeVmsSnapshotsOperations"
      );
      expect(content).toContain("@experimental");
      expect(content).toContain(
        "./classic/ComputeVmsSnapshots/index.js"
      );
    });

    it("should augment correct parent for deeply nested group (not grandparent)", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const client = createMockClient();

      const stableOp = createMockOperation("list", ["2024-01-01"]);
      const previewOp = createMockOperation("create", [
        "2024-06-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["compute/vms", [stableOp]],
          ["compute/vms/snapshots", [previewOp]]
        ])
      );

      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);
      const nestedGroups = computePreviewOnlyNestedGroups(
        classification,
        topLevelGroups
      );

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package"
      );

      buildAugmentations(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        nestedGroups,
        undefined
      );

      const content = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();

      // The parent interface for "compute/vms/snapshots" (layer=1) should be
      // ComputeVmsOperations, not just ComputeOperations or TestClient
      expect(content).toContain("interface ComputeVmsOperations");
    });
  });

  describe("nested beta index generation", () => {
    it("should generate setter-based prototype patch for nested preview group", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const client = createMockClient();

      const stableOp = createMockOperation("list", ["2024-01-01"]);
      const previewOp = createMockOperation("create", [
        "2024-06-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["compute/vms", [stableOp]],
          ["compute/vms/snapshots", [previewOp]]
        ])
      );

      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);
      const nestedGroups = computePreviewOnlyNestedGroups(
        classification,
        topLevelGroups
      );

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package"
      );

      buildBetaIndex(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        nestedGroups,
        undefined
      );

      const content = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      // Should have setter-based patching on the parent property "compute"
      expect(content).toContain(
        'Object.defineProperty(TestClient.prototype, "compute"'
      );
      expect(content).toContain("set(this: TestClient, value)");
      // Should import the nested operation factory
      expect(content).toContain(
        "_getComputeVmsSnapshotsOperations"
      );
    });

    it("should patch nested property path in setter", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const client = createMockClient();

      const stableOp = createMockOperation("list", ["2024-01-01"]);
      const previewOp = createMockOperation("create", [
        "2024-06-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["compute/vms", [stableOp]],
          ["compute/vms/snapshots", [previewOp]]
        ])
      );

      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);
      const nestedGroups = computePreviewOnlyNestedGroups(
        classification,
        topLevelGroups
      );

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package"
      );

      buildBetaIndex(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        nestedGroups,
        undefined
      );

      const content = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      // Setter should navigate nested path: value.vms → assign .snapshots
      expect(content).toContain("value.vms");
      expect(content).toContain(".snapshots =");
    });
  });

  describe("child client augmentation", () => {
    it("should augment parent client with child client methods", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const childClient = {
        name: "MemoryStoreClient",
        kind: "client",
        clientInitialization: {
          initializedBy: InitializedByFlags.Parent
        },
        children: []
      } as any;
      const client = createMockClient("AIProjectClient", [childClient]);

      // Need at least one stable operation for hasAnyPreview logic
      const stableOp = createMockOperation("get", ["2024-01-01"]);
      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["projects", [stableOp]]])
      );

      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package"
      );
      const previewChildClients = new Set(["MemoryStoreClient"]);

      buildAugmentations(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        previewChildClients
      );

      const content = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();

      expect(content).toContain("interface AIProjectClient");
      expect(content).toContain("getMemoryStoreClient");
      expect(content).toContain("MemoryStoreClient");
      expect(content).toContain("@experimental");
    });

    it("should skip child clients not initialized by parent", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const childClient = {
        name: "StandaloneClient",
        kind: "client",
        clientInitialization: {
          initializedBy: InitializedByFlags.Individually
        },
        children: []
      } as any;
      const client = createMockClient("ParentClient", [childClient]);

      const stableOp = createMockOperation("get", ["2024-01-01"]);
      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["resources", [stableOp]]])
      );

      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package"
      );

      buildAugmentations(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        new Set(["StandaloneClient"])
      );

      // Should not create file if only non-parent-initialized child clients
      const augFile = project.getSourceFile(
        "src/beta/augmentations.ts"
      );
      expect(augFile).toBeUndefined();
    });

    it("should generate child client prototype method in beta index", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const childClient = {
        name: "MemoryStoreClient",
        kind: "client",
        clientInitialization: {
          initializedBy: InitializedByFlags.Parent
        },
        children: []
      } as any;
      const client = createMockClient("AIProjectClient", [childClient]);

      const stableOp = createMockOperation("get", ["2024-01-01"]);
      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([["projects", [stableOp]]])
      );

      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package"
      );

      buildBetaIndex(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        new Set(["MemoryStoreClient"])
      );

      const content = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      expect(content).toContain(
        "AIProjectClient.prototype.getMemoryStoreClient"
      );
      expect(content).toContain("new MemoryStoreClient");
    });
  });

  describe("combined nested groups and child clients", () => {
    it("should handle both nested groups and child clients together", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);
      const childClient = {
        name: "AgentClient",
        kind: "client",
        clientInitialization: {
          initializedBy: InitializedByFlags.Parent
        },
        children: []
      } as any;
      const client = createMockClient("AIProjectClient", [childClient]);

      const stableOp = createMockOperation("list", ["2024-01-01"]);
      const previewOp = createMockOperation("createSnapshot", [
        "2024-06-01-preview"
      ]);

      mockGetMethodHierarchiesMap.mockReturnValue(
        new Map([
          ["compute/vms", [stableOp]],
          ["compute/vms/snapshots", [previewOp]]
        ])
      );

      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);
      const nestedGroups = computePreviewOnlyNestedGroups(
        classification,
        topLevelGroups
      );
      const previewChildClients = new Set(["AgentClient"]);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package"
      );

      // Build both files
      buildAugmentations(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        nestedGroups,
        previewChildClients
      );
      buildBetaIndex(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        nestedGroups,
        previewChildClients
      );

      const augContent = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();
      const indexContent = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      // Augmentation: nested group augmentation
      expect(augContent).toContain("ComputeVmsOperations");
      expect(augContent).toContain(
        "ExperimentalComputeVmsSnapshotsOperations"
      );

      // Augmentation: child client augmentation
      expect(augContent).toContain("interface AIProjectClient");
      expect(augContent).toContain("getAgentClient");

      // Index: nested prototype patch
      expect(indexContent).toContain(
        '_getComputeVmsSnapshotsOperations'
      );

      // Index: child client method
      expect(indexContent).toContain(
        "AIProjectClient.prototype.getAgentClient"
      );
    });
  });
});
