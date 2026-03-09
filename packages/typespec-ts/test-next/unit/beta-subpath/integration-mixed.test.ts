import { describe, it, expect, vi, beforeEach } from "vitest";
import { Project } from "ts-morph";
import {
  classifyPreviewFeatures,
  getPreviewOnlyTopLevelGroups
} from "../../../src/modular/helpers/previewDetection.js";
import { buildAugmentations } from "../../../src/modular/buildAugmentations.js";
import { buildBetaIndex } from "../../../src/modular/buildBetaIndex.js";
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
  name: string = "TestClient"
): SdkClientType<SdkServiceOperation> {
  return { name, kind: "client", children: [] } as any;
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

function setupMixedScenario() {
  const context = createMockContext([
    "2024-01-01",
    "2024-06-01-preview"
  ]);
  const client = createMockClient();

  const stableOp = createMockOperation("stableOp", ["2024-01-01"]);
  const previewOp = createMockOperation("previewOp", [
    "2024-06-01-preview"
  ]);
  const mixedStableOp = createMockOperation("mixedStable", [
    "2024-01-01"
  ]);
  const mixedPreviewOp = createMockOperation("mixedPreview", [
    "2024-06-01-preview"
  ]);

  mockGetMethodHierarchiesMap.mockReturnValue(
    new Map([
      ["stableOps", [stableOp]],
      ["previewOps", [previewOp]],
      ["mixedOps", [mixedStableOp, mixedPreviewOp]]
    ])
  );

  return { context, client };
}

describe("E6 — Mixed Stable/Preview Package Integration", () => {
  let project: Project;

  beforeEach(() => {
    project = new Project({ useInMemoryFileSystem: true });
    // Create mock source files needed for type re-exports
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

  describe("classification", () => {
    it("should classify mixed package with hasAnyPreview=true", () => {
      const { context, client } = setupMixedScenario();

      const result = classifyPreviewFeatures(context, client);

      expect(result.hasAnyPreview).toBe(true);
    });

    it("should correctly identify preview-only and mixed groups", () => {
      const { context, client } = setupMixedScenario();

      const result = classifyPreviewFeatures(context, client);

      expect(result.previewOnlyGroups.has("previewOps")).toBe(true);
      expect(result.mixedGroups.has("mixedOps")).toBe(true);
      expect(result.previewOnlyGroups.has("stableOps")).toBe(false);
      expect(result.previewOnlyGroups.has("mixedOps")).toBe(false);
    });

    it("should separate preview and stable methods in mixed groups", () => {
      const { context, client } = setupMixedScenario();

      const result = classifyPreviewFeatures(context, client);

      expect(result.previewMethods.get("mixedOps")).toHaveLength(1);
      expect(result.stableMethods.get("mixedOps")).toHaveLength(1);
      expect(result.previewMethods.get("previewOps")).toHaveLength(1);
      expect(result.stableMethods.get("stableOps")).toHaveLength(1);
    });

    it("should compute correct preview-only top-level groups", () => {
      const { context, client } = setupMixedScenario();

      const result = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(result);

      // "previewOps" is preview-only; "mixedOps" has stable methods
      expect(topLevelGroups.has("previewOps")).toBe(true);
      expect(topLevelGroups.has("mixedOps")).toBe(false);
      expect(topLevelGroups.size).toBe(1);
    });
  });

  describe("augmentation generation (namespace strategy)", () => {
    it("should create augmentation file with declare module block", () => {
      const { context, client } = setupMixedScenario();
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
        undefined
      );

      const file = project.getSourceFile(
        "src/beta/augmentations.ts"
      );
      expect(file).toBeDefined();

      const content = file!.getFullText();
      expect(content).toContain('declare module "../index.js"');
    });

    it("should augment client with readonly property for preview-only group", () => {
      const { context, client } = setupMixedScenario();
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
        undefined
      );

      const content = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();

      expect(content).toContain("interface TestClient");
      expect(content).toContain("readonly");
      expect(content).toContain("ExperimentalPreviewOpsOperations");
      expect(content).toContain("@experimental");
    });

    it("should add 'beta' property for mixed group (namespace strategy)", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package",
        "namespace"
      );

      buildAugmentations(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        undefined
      );

      const content = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();

      // Namespace strategy: single beta property on client interface
      expect(content).toContain("interface TestClient");
      expect(content).toContain("readonly beta:");
      expect(content).toContain("ExperimentalMixedOpsOperations");
    });

    it("should have type-only imports from classic layer", () => {
      const { context, client } = setupMixedScenario();
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
        undefined
      );

      const content = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();

      expect(content).toMatch(/import\s+type/);
      expect(content).toContain("./classic/PreviewOps/index.js");
      expect(content).toContain("./classic/MixedOps/index.js");
    });
  });

  describe("augmentation generation (merge strategy)", () => {
    it("should use extends clause for mixed groups in merge strategy", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package",
        "merge"
      );

      buildAugmentations(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        undefined
      );

      const content = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();

      expect(content).toContain("extends ExperimentalMixedOpsOperations");
      // Should not have "beta:" property in merge mode
      expect(content).not.toMatch(
        /interface MixedOpsOperations[^{]*{[^}]*beta:/s
      );
    });
  });

  describe("beta index generation", () => {
    it("should create index.ts with augmentation side-effect import", () => {
      const { context, client } = setupMixedScenario();
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
        undefined
      );

      const indexFile = project.getSourceFile(
        "src/beta/index.ts"
      );
      expect(indexFile).toBeDefined();

      const content = indexFile!.getFullText();
      expect(content).toContain('"./augmentations.js"');
    });

    it("should import client from package", () => {
      const { context, client } = setupMixedScenario();
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
        undefined
      );

      const content = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      expect(content).toContain("TestClient");
      expect(content).toContain('"../index.js"');
    });

    it("should generate Object.defineProperty with getter for preview-only group", () => {
      const { context, client } = setupMixedScenario();
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
        undefined
      );

      const content = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      // Namespace strategy: single beta getter contains all groups
      expect(content).toContain(
        'Object.defineProperty(TestClient.prototype, "beta"'
      );
      expect(content).toContain("Symbol.for");
      expect(content).toContain("_getPreviewOpsOperations");
    });

    it("should generate Object.defineProperty with getter+setter for mixed group (namespace)", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package",
        "namespace"
      );

      buildBetaIndex(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        undefined
      );

      const content = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      // Namespace strategy: mixed groups are inside single beta getter, no setter
      expect(content).toContain(
        'Object.defineProperty(TestClient.prototype, "beta"'
      );
      expect(content).toContain("_getMixedOpsOperations");
      expect(content).not.toContain("set(this: TestClient, value)");
    });

    it("should use Object.assign for mixed group in merge strategy", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/test-package",
        "merge"
      );

      buildBetaIndex(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        undefined
      );

      const content = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      expect(content).toContain("Object.assign");
      expect(content).not.toContain(".beta =");
    });

    it("should import operation factories from classic layer", () => {
      const { context, client } = setupMixedScenario();
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
        undefined
      );

      const content = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      expect(content).toContain("_getPreviewOpsOperations");
      expect(content).toContain("_getMixedOpsOperations");
      expect(content).toContain("./classic/PreviewOps/index.js");
      expect(content).toContain("./classic/MixedOps/index.js");
    });

    it("should include enumerable and configurable in defineProperty", () => {
      const { context, client } = setupMixedScenario();
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
        undefined
      );

      const content = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      expect(content).toContain("enumerable: true");
      expect(content).toContain("configurable: true");
    });
  });

  describe("end-to-end: classification → augmentation → index", () => {
    it("should produce consistent augmentation and index files from same classification", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

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
        new Set(),
        undefined
      );
      buildBetaIndex(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        undefined
      );

      const augContent = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();
      const indexContent = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      // Both files reference the same groups
      expect(augContent).toContain("PreviewOps");
      expect(indexContent).toContain("PreviewOps");
      expect(augContent).toContain("MixedOps");
      expect(indexContent).toContain("MixedOps");

      // Index imports augmentation
      expect(indexContent).toContain("./augmentations.js");

      // Augmentation uses declare module
      expect(augContent).toContain("declare module");

      // Index uses prototype patching
      expect(indexContent).toContain("Object.defineProperty");
    });
  });
});
