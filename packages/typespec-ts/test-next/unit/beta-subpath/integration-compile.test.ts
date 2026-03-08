import { describe, it, expect, vi, beforeEach } from "vitest";
import { Project } from "ts-morph";
import * as ts from "typescript";
import {
  classifyPreviewFeatures,
  getPreviewOnlyTopLevelGroups,
  PreviewClassification
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

/**
 * Checks for TypeScript syntax errors in the given code string.
 * Returns an array of error messages. Empty array means no syntax errors.
 */
function getSyntaxErrors(code: string, fileName = "test.ts"): string[] {
  const sourceFile = ts.createSourceFile(
    fileName,
    code,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS
  );
  // parseDiagnostics is available at runtime on all SourceFile objects
  const diagnostics: ts.DiagnosticWithDetachedLocation[] =
    (sourceFile as any).parseDiagnostics ?? [];
  return diagnostics.map((d) => {
    const message = ts.flattenDiagnosticMessageText(
      d.messageText,
      "\n"
    );
    return `${fileName}(${d.start}): ${message}`;
  });
}

function setupMixedScenario() {
  const context = createMockContext([
    "2024-01-01",
    "2024-06-01-preview"
  ]);
  const client = createMockClient("ComputeClient");

  const stableOp = createMockOperation("listVMs", ["2024-01-01"]);
  const previewOp = createMockOperation("createSnapshot", [
    "2024-06-01-preview"
  ]);
  const mixedStableOp = createMockOperation("getDisk", [
    "2024-01-01"
  ]);
  const mixedPreviewOp = createMockOperation("analyzeDisk", [
    "2024-06-01-preview"
  ]);

  mockGetMethodHierarchiesMap.mockReturnValue(
    new Map([
      ["virtualMachines", [stableOp]],
      ["snapshots", [previewOp]],
      ["disks", [mixedStableOp, mixedPreviewOp]]
    ])
  );

  return { context, client };
}

describe("E8 — Compilation Smoke Test", () => {
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

  describe("augmentation file syntax validation", () => {
    it("should produce syntactically valid TypeScript for augmentation file", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/compute",
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

      const augFile = project.getSourceFile(
        "src/beta/augmentations.ts"
      );
      expect(augFile).toBeDefined();

      const code = augFile!.getFullText();
      const errors = getSyntaxErrors(code, "augmentations.ts");

      expect(errors).toEqual([]);
    });

    it("should produce syntactically valid TypeScript for merge strategy", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/compute",
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

      const code = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();
      const errors = getSyntaxErrors(code, "augmentations.ts");

      expect(errors).toEqual([]);
    });
  });

  describe("beta index file syntax validation", () => {
    it("should produce syntactically valid TypeScript for index file (namespace)", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/compute",
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

      const indexFile = project.getSourceFile(
        "src/beta/index.ts"
      );
      expect(indexFile).toBeDefined();

      const code = indexFile!.getFullText();
      const errors = getSyntaxErrors(code, "index.ts");

      expect(errors).toEqual([]);
    });

    it("should produce syntactically valid TypeScript for index file (merge)", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/compute",
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

      const code = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();
      const errors = getSyntaxErrors(code, "index.ts");

      expect(errors).toEqual([]);
    });
  });

  describe("structural correctness", () => {
    it("augmentation file should have valid declare module structure", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/compute"
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

      const code = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();

      // Parse the file and check AST structure
      const sourceFile = ts.createSourceFile(
        "augmentations.ts",
        code,
        ts.ScriptTarget.Latest,
        true
      );

      // Should have import declarations
      const importDeclarations = sourceFile.statements.filter(
        ts.isImportDeclaration
      );
      expect(importDeclarations.length).toBeGreaterThan(0);

      // All imports should be type-only
      for (const imp of importDeclarations) {
        expect(imp.importClause?.isTypeOnly).toBe(true);
      }

      // Should have a module declaration (declare module "...")
      const hasModuleDeclaration = code.includes("declare module");
      expect(hasModuleDeclaration).toBe(true);

      // Braces should be balanced
      const openBraces = (code.match(/{/g) || []).length;
      const closeBraces = (code.match(/}/g) || []).length;
      expect(openBraces).toBe(closeBraces);
    });

    it("beta index should have valid Object.defineProperty calls", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/compute"
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

      const code = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      // Count Object.defineProperty calls
      const definePropertyCalls = (
        code.match(/Object\.defineProperty/g) || []
      ).length;
      // Should have at least 2: one for preview-only group, one for mixed group
      expect(definePropertyCalls).toBeGreaterThanOrEqual(2);

      // Each defineProperty should have enumerable: true
      const enumerableCount = (
        code.match(/enumerable:\s*true/g) || []
      ).length;
      expect(enumerableCount).toBe(definePropertyCalls);

      // Each defineProperty should have configurable: true
      const configurableCount = (
        code.match(/configurable:\s*true/g) || []
      ).length;
      expect(configurableCount).toBe(definePropertyCalls);

      // Braces should be balanced
      const openBraces = (code.match(/{/g) || []).length;
      const closeBraces = (code.match(/}/g) || []).length;
      expect(openBraces).toBe(closeBraces);

      // Parentheses should be balanced
      const openParens = (code.match(/\(/g) || []).length;
      const closeParens = (code.match(/\)/g) || []).length;
      expect(openParens).toBe(closeParens);
    });

    it("generated import statements should be well-formed", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/compute"
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
      buildBetaIndex(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        undefined
      );

      const augCode = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();
      const indexCode = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      // Augmentation: type-only imports with aliases
      expect(augCode).toMatch(
        /import\s+type\s+{[^}]+}\s+from\s+"[^"]+"/
      );

      // Index: side-effect import
      expect(indexCode).toMatch(
        /import\s+"\.\/augmentations\.js"/
      );

      // Index: named imports from parent index
      expect(indexCode).toMatch(
        /import\s+{[^}]+}\s+from\s+"\.\.\/index\.js"/
      );

      // Index: named imports from classic layer
      expect(indexCode).toMatch(
        /import\s+{[^}]+}\s+from\s+"\.\/classic\/[^"]+"/
      );
    });
  });

  describe("end-to-end compilation", () => {
    it("should produce both files without syntax errors for a complete mixed scenario", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/compute",
        "namespace"
      );

      // Generate both files
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

      // Verify both files exist
      const augFile = project.getSourceFile(
        "src/beta/augmentations.ts"
      );
      const indexFile = project.getSourceFile(
        "src/beta/index.ts"
      );
      expect(augFile).toBeDefined();
      expect(indexFile).toBeDefined();

      // Verify no syntax errors in either file
      const augErrors = getSyntaxErrors(
        augFile!.getFullText(),
        "augmentations.ts"
      );
      const indexErrors = getSyntaxErrors(
        indexFile!.getFullText(),
        "index.ts"
      );

      expect(augErrors).toEqual([]);
      expect(indexErrors).toEqual([]);
    });

    it("should produce syntax-valid files for merge strategy", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/compute",
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
      buildBetaIndex(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        undefined
      );

      const augErrors = getSyntaxErrors(
        project
          .getSourceFile("src/beta/augmentations.ts")!
          .getFullText(),
        "augmentations.ts"
      );
      const indexErrors = getSyntaxErrors(
        project
          .getSourceFile("src/beta/index.ts")!
          .getFullText(),
        "index.ts"
      );

      expect(augErrors).toEqual([]);
      expect(indexErrors).toEqual([]);
    });

    it("should produce non-empty, meaningful TypeScript code", () => {
      const { context, client } = setupMixedScenario();
      const classification = classifyPreviewFeatures(context, client);
      const topLevelGroups = getPreviewOnlyTopLevelGroups(classification);

      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions(
        "@azure/compute"
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
      buildBetaIndex(
        context,
        clientMap,
        emitterOptions,
        classification,
        topLevelGroups,
        new Set(),
        undefined
      );

      const augCode = project
        .getSourceFile("src/beta/augmentations.ts")!
        .getFullText();
      const indexCode = project
        .getSourceFile("src/beta/index.ts")!
        .getFullText();

      // Both files should have substantial content (not just whitespace)
      expect(augCode.trim().length).toBeGreaterThan(100);
      expect(indexCode.trim().length).toBeGreaterThan(100);

      // Augmentation should have the full pattern
      expect(augCode).toContain("import type");
      expect(augCode).toContain("declare module");
      expect(augCode).toContain("interface");

      // Index should have the full pattern
      expect(indexCode).toContain("import");
      expect(indexCode).toContain("Object.defineProperty");
      expect(indexCode).toContain("Symbol.for");
      expect(indexCode).toContain("prototype");
    });
  });
});
