import { IndentationText, Project } from "ts-morph";
import { assert } from "chai";
import * as autorestSession from "../../../src/autorestSession";
import * as sinon from "sinon";
import { buildReadmeFile } from "@azure-tools/rlc-common";
import { CodeModel } from "@autorest/codemodel";
import { transform } from "../../../src/restLevelClient/transforms/transform";
import { generateFileByBuilder } from "../../../src/restLevelClient/helpers/generatorHelpers";
import { readFileSync, writeFileSync } from "fs";
import * as path from "path";

describe("generateReadmeFile", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should generate rest-level client readme file correctly", async () => {
    const autorestOption = {
      srcPath: ".",
      packageDetails: {
        name: "@azure-rest/agrifood-farming",
        nameWithoutScope: "agrifood-farming",
        scopeName: "azure-rest",
        version: "1.0.0-beta.1"
      },
      flavor: "azure",
      azureOutputDirectory: "sdk/agrifood/agrifood-farming-rest",
      licenseHeader: false,
      hideClients: true,
      azureArm: false,
      addCredentials: true,
      generateMetadata: true,
      isTestPackage: false,
      ignoreNullableOnOptional: false,
      useCoreV2: true,
      allowInsecureConnection: true,
      restLevelClient: true,
      productDocLink: "https://azure.microsoft.com/en-us/services/purview/",
      dependencyInfo: {
        link:
          "https://docs.microsoft.com/en-us/azure/purview/create-catalog-portal#add-a-security-principal-to-a-data-plane-role",
        description: "enable AAD authentication on your Purview resource"
      }
    } as autorestSession.AutorestOptions;
    const codeModel = new CodeModel("testCodeModel");
    // set client details info
    codeModel.language = {
      default: {
        name: "AgfoodClient",
        description: ""
      }
    };
    codeModel.info.title = "AgfoodClient";
    codeModel.info.description = "Simple test description";
    sinon.replace(autorestSession, "getAutorestOptions", () => autorestOption);
    const project = getEmptyProject();
    // then transform CodeModel to RLCModel
    const rlcModels = transform(codeModel);
    generateFileByBuilder(project, buildReadmeFile, rlcModels);
    const expectedContends = readFileSync(
      path.join(__dirname, "files/case-rlcReadme.md"),
      "utf-8"
    ).replace(/(\r\n|\n|\r)/gm, " ");
    const actualContents = getFirstFileContent(project).replace(
      /(\r\n|\n|\r)/gm,
      " "
    );
    // writeFileSync(
    //   path.join(__dirname, "files/case-rlcReadme2.md"),
    //   getFirstFileContent(project)
    // );
    // Mitigate the newline issues
    assert.strictEqual(actualContents, expectedContends);
  });
});

// helper functions for mock data
const getEmptyProject = () =>
  new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces
    }
  });

const getFirstFileContent = (project: Project) => {
  project.saveSync();
  const fileList = project.getSourceFiles();
  assert.strictEqual(fileList.length >= 1, true);
  const fs = project.getFileSystem();
  return fs.readFileSync(fileList[0].getFilePath());
};
