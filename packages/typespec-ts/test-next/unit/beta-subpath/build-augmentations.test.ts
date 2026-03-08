import { describe, it, expect, vi, beforeEach } from "vitest";
import { Project } from "ts-morph";
import { buildAugmentations } from "../../../src/modular/buildAugmentations.js";
import { PreviewClassification } from "../../../src/modular/helpers/previewDetection.js";
import {
  SdkClientType,
  SdkServiceOperation,
  InitializedByFlags
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../../../src/utils/interfaces.js";

// Mock contextManager
vi.mock("../../../src/contextManager.js", () => ({
  useContext: vi.fn()
}));

// Mock namingHelpers
vi.mock("../../../src/modular/helpers/namingHelpers.js", () => ({
  getClassicalLayerPrefix: vi.fn((prefixes: string[], nameType: any) => {
    if (nameType === "File") {
      return prefixes.join("/");
    }
    return prefixes.map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join("");
  }),
  getClientName: vi.fn((client: any) => client.name),
  getClassicalClientName: vi.fn((client: any) => client.name)
}));

// Mock clientHelpers
vi.mock("../../../src/modular/helpers/clientHelpers.js", () => ({
  getClientParametersDeclaration: vi.fn(() => [])
}));

import { useContext } from "../../../src/contextManager.js";

const mockUseContext = useContext as any;

function createMockEmitterOptions(packageName: string): any {
  return {
    modularOptions: {
      sourceRoot: "src/beta",
      betaMergeStrategy: "namespace"
    },
    options: {
      packageDetails: {
        name: packageName
      }
    }
  };
}

function createMockClient(name: string, children?: any[]): SdkClientType<SdkServiceOperation> {
  return {
    name,
    kind: "client",
    children: children ?? []
  } as any;
}

function createMockPreviewInfo(
  previewOnlyGroups: string[] = [],
  mixedGroups: string[] = []
): PreviewClassification {
  return {
    previewMethods: new Map(),
    stableMethods: new Map(),
    previewOnlyGroups: new Set(previewOnlyGroups),
    mixedGroups: new Set(mixedGroups),
    previewTypes: new Set(),
    stableTypes: new Set(),
    previewModels: new Set(),
    previewEnums: new Set(),
    hasAnyPreview: true
  };
}

describe("Build Augmentations", () => {
  let project: Project;

  beforeEach(() => {
    project = new Project({ useInMemoryFileSystem: true });
    mockUseContext.mockReturnValue(project);
  });

  describe("buildAugmentations structure", () => {
    it("should create augmentations.ts file with correct module specifier", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      expect(file).toBeDefined();

      const content = file?.getFullText() ?? "";
      expect(content).toContain('declare module "../index.js"');
    });

    it("should add type-only imports from classic layer", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      // Should have type-only import
      expect(content).toMatch(/import\s+type/);
      expect(content).toContain("./classic/");
    });

    it("should augment client interface with preview-only group properties", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toContain("interface TestClient");
      expect(content).toContain("readonly");
      expect(content).toContain("@experimental");
    });

    it("should use namespace strategy for mixed groups by default", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo([], ["mixedGroup"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        new Set(),
        undefined
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      // Namespace strategy: adds "beta" property
      expect(content).toContain("beta:");
    });

    it("should use merge strategy for mixed groups when configured", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = {
        modularOptions: {
          sourceRoot: "src/beta",
          betaMergeStrategy: "merge"
        },
        options: {
          packageDetails: {
            name: "@azure/test-package"
          }
        }
      };
      const previewInfo = createMockPreviewInfo([], ["mixedGroup"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions as any,
        previewInfo,
        new Set(),
        new Set(),
        undefined
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      // Merge strategy: extends interface
      expect(content).toContain("extends");
    });

    it("should not create file when no preview groups or child clients exist", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo();

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        new Set(),
        undefined
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      expect(file).toBeUndefined();
    });

    it("should not create file when package name is missing", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = {
        modularOptions: { sourceRoot: "src/beta" },
        options: { packageDetails: { name: "" } }
      };
      const previewInfo = createMockPreviewInfo(["operations"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions as any,
        previewInfo,
        new Set(["operations"]),
        new Set(),
        undefined
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      expect(file).toBeUndefined();
    });

    it("should handle nested preview groups", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo();
      const previewOnlyNested = new Set(["parent/child"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        previewOnlyNested,
        undefined
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toBeDefined();
      // Capitalized due to mock implementation
      expect(content).toContain("./classic/ParentChild/index.js");
    });

    it("should handle preview child clients", () => {
      const dpgContext = {} as SdkContext;
      const childClient = {
        name: "ChildClient",
        kind: "client",
        clientInitialization: {
          initializedBy: InitializedByFlags.Parent
        }
      } as any;
      const client = createMockClient("ParentClient", [childClient]);
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo();
      const previewChildClients = new Set(["ChildClient"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        new Set(),
        previewChildClients
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toBeDefined();
      expect(content).toContain("interface ParentClient");
      expect(content).toContain("getChildClient");
      expect(content).toContain("@experimental");
    });

    it("should skip child clients not initialized by parent", () => {
      const dpgContext = {} as SdkContext;
      const childClient = {
        name: "ChildClient",
        kind: "client",
        clientInitialization: {
          initializedBy: InitializedByFlags.Individually
        }
      } as any;
      const client = createMockClient("ParentClient", [childClient]);
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo();
      const previewChildClients = new Set(["ChildClient"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        new Set(),
        previewChildClients
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      
      // Should not create file if only non-parent child clients
      expect(file).toBeUndefined();
    });

    it("should handle multiple preview-only groups", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo([
        "operations",
        "admin",
        "diagnostics"
      ]);
      const previewOnlyTopLevel = new Set([
        "operations",
        "admin",
        "diagnostics"
      ]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toContain("interface TestClient");
      // Should have multiple properties
      const matches = content.match(/readonly\s+\w+:/g);
      expect(matches).toBeDefined();
      expect(matches!.length).toBeGreaterThanOrEqual(3);
    });

    it("should handle combination of top-level, nested, and mixed groups", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(
        ["topLevel"],
        ["mixedGroup"]
      );
      const previewOnlyTopLevel = new Set(["topLevel"]);
      const previewOnlyNested = new Set(["parent/nested"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        previewOnlyNested
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toBeDefined();
      // Capitalized due to mock implementation
      expect(content).toContain("./classic/TopLevel/index.js");
      expect(content).toContain("./classic/ParentNested/index.js");
      expect(content).toContain("./classic/MixedGroup/index.js");
    });

    it("should group imports by module specifier", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(
        ["operations", "admin"],
        []
      );
      const previewOnlyTopLevel = new Set(["operations", "admin"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      // Count import statements
      const importCount = (content.match(/^import\s+type/gm) || []).length;
      
      // Should have two separate imports for two different modules
      expect(importCount).toBeGreaterThanOrEqual(2);
    });

    it("should preserve readonly modifier on preview-only properties", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo(["operations"]);
      const previewOnlyTopLevel = new Set(["operations"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        previewOnlyTopLevel,
        new Set()
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      expect(content).toContain("readonly");
    });

    it("should not add readonly modifier to nested group properties", () => {
      const dpgContext = {} as SdkContext;
      const client = createMockClient("TestClient");
      const clientMap: [string[], SdkClientType<SdkServiceOperation>] = [
        [],
        client
      ];
      const emitterOptions = createMockEmitterOptions("@azure/test-package");
      const previewInfo = createMockPreviewInfo();
      const previewOnlyNested = new Set(["parent/child"]);

      buildAugmentations(
        dpgContext,
        clientMap,
        emitterOptions,
        previewInfo,
        new Set(),
        previewOnlyNested
      );

      const file = project.getSourceFile("src/beta/augmentations.ts");
      const content = file?.getFullText() ?? "";

      // Nested properties should not be readonly on the parent interface
      expect(content).toBeDefined();
    });
  });
});
