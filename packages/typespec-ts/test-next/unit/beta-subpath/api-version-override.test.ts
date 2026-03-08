import { describe, it, expect } from "vitest";
import {
  getLatestStableApiVersion,
  getLatestPreviewApiVersion
} from "../../../src/modular/helpers/previewDetection.js";
import {
  SdkEnumType,
  UsageFlags
} from "@azure-tools/typespec-client-generator-core";
import { SdkContext } from "../../../src/utils/interfaces.js";

/**
 * Unit tests for API version override mechanism.
 * Tests the functions that extract stable/preview versions from package metadata
 * and the apiVersionOverride property used during beta code generation.
 */

function createMockContext(
  versions: string[] = [],
  previewRegex?: RegExp,
  useEnum: boolean = false
): SdkContext {
  const context: SdkContext = {
    sdkPackage: {
      metadata: {
        apiVersions: useEnum ? new Map() : versions
      },
      enums: []
    },
    previewStringRegex: previewRegex
  } as any;

  // If useEnum is true, create an ApiVersionEnum with the versions
  if (useEnum) {
    const apiVersionEnum: SdkEnumType = {
      kind: "enum",
      name: "ServiceApiVersions",
      usage: UsageFlags.ApiVersionEnum,
      values: versions.map((v) => ({
        name: v.replace(/[^a-zA-Z0-9]/g, "_"),
        value: v,
        kind: "enumvalue"
      }))
    } as any;
    context.sdkPackage.enums = [apiVersionEnum];
  }

  return context;
}

describe("API Version Override", () => {
  describe("getPackageApiVersions() underlying logic", () => {
    describe("returns versions from UsageFlags.ApiVersionEnum when available", () => {
      it("extracts versions from enum values", () => {
        const context = createMockContext(
          ["2023-01-01", "2024-01-01", "2024-06-01-preview"],
          undefined,
          true
        );

        const stable = getLatestStableApiVersion(context);
        const preview = getLatestPreviewApiVersion(context);

        // If enum returns all versions, we should get the latest of each type
        expect(stable).toBe("2024-01-01");
        expect(preview).toBe("2024-06-01-preview");
      });

      it("handles single version in enum", () => {
        const context = createMockContext(["2024-01-01"], undefined, true);

        const stable = getLatestStableApiVersion(context);
        const preview = getLatestPreviewApiVersion(context);

        expect(stable).toBe("2024-01-01");
        expect(preview).toBeUndefined();
      });

      it("handles only preview versions in enum", () => {
        const context = createMockContext(
          ["2024-06-01-preview"],
          undefined,
          true
        );

        const stable = getLatestStableApiVersion(context);
        const preview = getLatestPreviewApiVersion(context);

        expect(stable).toBeUndefined();
        expect(preview).toBe("2024-06-01-preview");
      });
    });

    describe("falls back to metadata.apiVersions when no enum exists", () => {
      it("extracts versions from array", () => {
        const context = createMockContext([
          "2023-01-01",
          "2024-01-01",
          "2024-06-01-preview"
        ]);

        const stable = getLatestStableApiVersion(context);
        const preview = getLatestPreviewApiVersion(context);

        expect(stable).toBe("2024-01-01");
        expect(preview).toBe("2024-06-01-preview");
      });

      it("extracts versions from Map", () => {
        const context: SdkContext = {
          sdkPackage: {
            metadata: {
              apiVersions: new Map([
                ["v1", "2023-01-01"],
                ["v2", "2024-01-01"],
                ["v3", "2024-06-01-preview"]
              ])
            },
            enums: []
          },
          previewStringRegex: /preview|beta/i
        } as any;

        const stable = getLatestStableApiVersion(context);
        const preview = getLatestPreviewApiVersion(context);

        expect(stable).toBe("2024-01-01");
        expect(preview).toBe("2024-06-01-preview");
      });

      it("returns empty array when no versions found", () => {
        const context = createMockContext([]);

        const stable = getLatestStableApiVersion(context);
        const preview = getLatestPreviewApiVersion(context);

        expect(stable).toBeUndefined();
        expect(preview).toBeUndefined();
      });
    });

    describe("handles multiple versions correctly", () => {
      it("sorts chronologically and returns latest", () => {
        const context = createMockContext([
          "2021-01-01",
          "2022-06-01",
          "2023-01-01",
          "2024-01-01"
        ]);

        const stable = getLatestStableApiVersion(context);

        expect(stable).toBe("2024-01-01");
      });

      it("handles multiple preview versions", () => {
        const context = createMockContext([
          "2023-01-01",
          "2024-01-01-preview",
          "2024-06-01-preview",
          "2024-12-01-preview"
        ]);

        const preview = getLatestPreviewApiVersion(context);

        expect(preview).toBe("2024-12-01-preview");
      });
    });
  });

  describe("getLatestStableApiVersion()", () => {
    it("returns latest GA version when multiple stable versions exist", () => {
      const context = createMockContext([
        "2023-01-01",
        "2023-06-01",
        "2024-01-01"
      ]);

      const result = getLatestStableApiVersion(context);

      expect(result).toBe("2024-01-01");
    });

    it("returns undefined when ALL versions are preview", () => {
      const context = createMockContext([
        "2024-01-01-preview",
        "2024-06-01-preview"
      ]);

      const result = getLatestStableApiVersion(context);

      expect(result).toBeUndefined();
    });

    it("returns the only stable version when mix of stable and preview", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview",
        "2024-12-01-preview"
      ]);

      const result = getLatestStableApiVersion(context);

      expect(result).toBe("2024-01-01");
    });

    it("returns undefined when no versions exist at all", () => {
      const context = createMockContext([]);

      const result = getLatestStableApiVersion(context);

      expect(result).toBeUndefined();
    });

    it("uses latest when multiple stable versions", () => {
      const context = createMockContext([
        "2022-01-01",
        "2023-01-01",
        "2023-06-01-preview",
        "2024-01-01"
      ]);

      const result = getLatestStableApiVersion(context);

      expect(result).toBe("2024-01-01");
    });

    it("respects custom preview regex", () => {
      const context = createMockContext(
        ["2024-01-01", "2024-06-01-alpha", "2024-12-01-beta"],
        /alpha|beta/i
      );

      const result = getLatestStableApiVersion(context);

      expect(result).toBe("2024-01-01");
    });

    it("defaults to preview|beta regex when not specified", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview",
        "2024-12-01-alpha"
      ]);
      // Note: default regex only matches preview|beta, not alpha
      context.previewStringRegex = undefined;

      const result = getLatestStableApiVersion(context);

      // "2024-12-01-alpha" should be treated as stable with default regex
      expect(result).toBe("2024-12-01-alpha");
    });
  });

  describe("getLatestPreviewApiVersion()", () => {
    it("returns latest preview version when multiple preview versions exist", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview",
        "2024-09-01-preview",
        "2024-12-01-preview"
      ]);

      const result = getLatestPreviewApiVersion(context);

      expect(result).toBe("2024-12-01-preview");
    });

    it("returns undefined when ALL versions are stable (no preview)", () => {
      const context = createMockContext(["2023-01-01", "2024-01-01"]);

      const result = getLatestPreviewApiVersion(context);

      expect(result).toBeUndefined();
    });

    it("returns the only preview version when mix of stable and preview", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);

      const result = getLatestPreviewApiVersion(context);

      expect(result).toBe("2024-06-01-preview");
    });

    it("returns undefined when no versions exist", () => {
      const context = createMockContext([]);

      const result = getLatestPreviewApiVersion(context);

      expect(result).toBeUndefined();
    });

    it("handles various preview suffixes with default regex", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview",
        "2024-09-01-beta"
      ]);
      context.previewStringRegex = undefined; // Use default

      const result = getLatestPreviewApiVersion(context);

      // With default /preview|beta/i, should return latest matching
      expect(result).toBe("2024-09-01-beta");
    });

    it("respects custom preview regex", () => {
      const context = createMockContext(
        ["2024-01-01", "2024-06-01-alpha", "2024-12-01-beta"],
        /alpha/i
      );

      const result = getLatestPreviewApiVersion(context);

      // Only "alpha" matches, not "beta"
      expect(result).toBe("2024-06-01-alpha");
    });

    it("handles multiple preview versions with different suffixes", () => {
      const context = createMockContext([
        "2024-01-01-preview",
        "2024-06-01-beta",
        "2024-09-01-preview"
      ]);

      const result = getLatestPreviewApiVersion(context);

      expect(result).toBe("2024-09-01-preview");
    });
  });

  describe("apiVersionOverride integration patterns", () => {
    it("getLatestPreviewApiVersion returns correct value for use as override", () => {
      const context = createMockContext([
        "2023-01-01",
        "2024-01-01",
        "2024-06-01-preview",
        "2024-12-01-preview"
      ]);

      const override = getLatestPreviewApiVersion(context);

      // This value would be set as context.apiVersionOverride during beta generation
      expect(override).toBe("2024-12-01-preview");
    });

    it("getLatestStableApiVersion returns correct value for stable generation", () => {
      const context = createMockContext([
        "2023-01-01",
        "2024-01-01",
        "2024-06-01-preview"
      ]);

      const stable = getLatestStableApiVersion(context);

      // This value could be used as override for stable generation (though typically not set)
      expect(stable).toBe("2024-01-01");
    });

    it("returns undefined when no preview versions for beta override", () => {
      const context = createMockContext(["2023-01-01", "2024-01-01"]);

      const override = getLatestPreviewApiVersion(context);

      // When undefined, beta generation would skip or use default
      expect(override).toBeUndefined();
    });

    it("handles edge case: only stable version exists", () => {
      const context = createMockContext(["2024-01-01"]);

      const stable = getLatestStableApiVersion(context);
      const preview = getLatestPreviewApiVersion(context);

      expect(stable).toBe("2024-01-01");
      expect(preview).toBeUndefined();
    });

    it("handles edge case: only preview version exists", () => {
      const context = createMockContext(["2024-01-01-preview"]);

      const stable = getLatestStableApiVersion(context);
      const preview = getLatestPreviewApiVersion(context);

      expect(stable).toBeUndefined();
      expect(preview).toBe("2024-01-01-preview");
    });

    it("simulates preview generation phase setting override", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);

      // Simulate what buildBeta.ts does:
      const previousOverride = context.apiVersionOverride;
      context.apiVersionOverride = getLatestPreviewApiVersion(context);

      expect(context.apiVersionOverride).toBe("2024-06-01-preview");
      expect(previousOverride).toBeUndefined();

      // Would generate operations with this override...

      // Then restore:
      context.apiVersionOverride = previousOverride;
      expect(context.apiVersionOverride).toBeUndefined();
    });

    it("simulates stable generation not setting override", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-preview"
      ]);

      // Normal stable generation does not set apiVersionOverride
      expect(context.apiVersionOverride).toBeUndefined();

      // Operations would use default clientDefaultValue
    });
  });

  describe("edge cases and defensive handling", () => {
    it("handles empty string versions in enum (filters them)", () => {
      const context = createMockContext(["", "2024-01-01", ""], undefined, true);

      const stable = getLatestStableApiVersion(context);

      // Enum path filters out empty strings via .filter((v) => v.length > 0)
      expect(stable).toBe("2024-01-01");
    });

    it("handles empty string versions in fallback (returns last)", () => {
      const context = createMockContext(["", "2024-01-01", ""]);

      const stable = getLatestStableApiVersion(context);

      // Fallback path doesn't filter empty strings, so last version is empty
      expect(stable).toBe("");
    });

    it("handles versions with various formats", () => {
      const context = createMockContext([
        "v1",
        "v2-preview",
        "2024-01-01",
        "2024-06-01-beta"
      ]);

      const stable = getLatestStableApiVersion(context);
      const preview = getLatestPreviewApiVersion(context);

      // With default regex, "v2-preview" and "2024-06-01-beta" are preview
      expect(stable).toBe("2024-01-01");
      expect(preview).toBe("2024-06-01-beta");
    });

    it("handles null/undefined metadata gracefully", () => {
      const context: SdkContext = {
        sdkPackage: {
          metadata: {
            apiVersions: null as any
          },
          enums: []
        },
        previewStringRegex: /preview|beta/i
      } as any;

      const stable = getLatestStableApiVersion(context);
      const preview = getLatestPreviewApiVersion(context);

      expect(stable).toBeUndefined();
      expect(preview).toBeUndefined();
    });

    it("handles case-insensitive preview matching", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-06-01-PREVIEW",
        "2024-09-01-Preview"
      ]);

      const preview = getLatestPreviewApiVersion(context);

      expect(preview).toBe("2024-09-01-Preview");
    });

    it("handles versions that partially match preview regex", () => {
      const context = createMockContext([
        "2024-01-01",
        "2024-preview-01-01", // preview in the middle
        "preview-2024-06-01" // preview at start
      ]);

      const stable = getLatestStableApiVersion(context);
      const preview = getLatestPreviewApiVersion(context);

      // Regex matches anywhere in string
      expect(stable).toBe("2024-01-01");
      expect(preview).toBe("preview-2024-06-01");
    });
  });
});
