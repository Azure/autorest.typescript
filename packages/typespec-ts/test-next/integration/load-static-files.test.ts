import { describe, it, beforeEach, expect, assert } from "vitest";
import { loadStaticHelpers } from "../../src/framework/load-static-helpers.js";
import { Project } from "ts-morph";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

describe("loadStaticHelpers", () => {
  let project: Project;
  let helpersAssetDirectory: string;
  beforeEach(() => {
    project = new Project();
    helpersAssetDirectory = path.resolve(__dirname, "assets/static-helpers");
  });

  it("should load static helpers", async () => {
    const helpers = {
      buildCsvCollection: {
        kind: "function",
        name: "buildCsvCollection",
        location: "utils.ts"
      }
    } as const;
    const helperDeclarations = await loadStaticHelpers(project, helpers, {
      helpersAssetDirectory
    });
    expect(project.getSourceFiles()).to.toHaveLength(1);
    const buildCsvCollectionDeclaration =
      helperDeclarations.get("buildCsvCollection");
    expect(buildCsvCollectionDeclaration).toEqual(helpers.buildCsvCollection);
  });

  it("should handle missing helpers gracefully", async () => {
    const helpers = {
      buildCsvCollection: {
        kind: "function",
        name: "nonExisting",
        location: "utils.ts"
      }
    } as const;

    await expect(
      loadStaticHelpers(project, helpers, {
        helpersAssetDirectory
      })
    ).rejects.toThrowError(/not found/);
  });

  it("should handle invalid helper kind gracefully", async () => {
    const helpers = {
      buildCsvCollection: {
        kind: "invalid",
        name: "buildCsvCollection",
        location: "utils.ts"
      }
    } as any;

    await expect(
      loadStaticHelpers(project, helpers, {
        helpersAssetDirectory
      })
    ).rejects.toThrowError(/invalid helper kind/);
  });
});
