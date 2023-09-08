import * as sinon from "sinon";
import * as autorestSession from "../../../../src/autorestSession";
import { assert } from "chai";
import { CodeModel } from "@autorest/codemodel";
import { generateReadmeFile } from "../../../../src/generators/static/readmeFileGenerator";
import { Project, IndentationText } from "ts-morph";
import { readFileSync, writeFileSync } from "fs";
import * as path from "path";
import { SampleGroup } from "../../../../src/models/sampleDetails";
import { ClientDetails } from "../../../../src/models/clientDetails";

describe("readmeFileGenerator", () => {
  describe("generateReadmeFile", () => {
    afterEach(() => {
      sinon.restore();
    });

    it("should NOT generate readme file if generateMetadata is false", async () => {
      const autorestOption = getMockAutorestOptions();
      autorestOption.generateMetadata = false;
      sinon.replace(
        autorestSession,
        "getAutorestOptions",
        () => autorestOption
      );
      const project = getEmptyProject();
      const codeModel = new CodeModel("testCodeModel");
      generateReadmeFile(codeModel, project);

      // Save the source files to the virtual filesystem
      project.saveSync();
      const fileList = project.getSourceFiles();
      assert.strictEqual(fileList.length, 0);
    });

    it("should generate high-level client readme file correctly", async () => {
      const autorestOption = {
        srcPath: ".",
        azureOutputDirectory: "sdk/kusto/arm-kusto",
        packageDetails: {
          name: "@azure/arm-kusto",
          nameWithoutScope: "arm-kusto",
          scopeName: "azure",
          version: "1.0.0-beta.1"
        },
        licenseHeader: false,
        hideClients: true,
        azureArm: true,
        addCredentials: true,
        generateMetadata: true,
        isTestPackage: false,
        ignoreNullableOnOptional: false,
        useCoreV2: true,
        allowInsecureConnection: true
      } as autorestSession.AutorestOptions;
      const codeModel = new CodeModel("testCodeModel");
      // set client details info
      codeModel.language = {
        default: {
          name: "KustoManagementClient",
          description: ""
        }
      };
      codeModel.info.title = "KustoManagementClient";
      codeModel.info.description =
        "The Azure Kusto management API provides a RESTful set of web services that interact with Azure Kusto services to manage your clusters and databases. The API enables you to create, update, and delete clusters and databases.";
      sinon.replace(
        autorestSession,
        "getAutorestOptions",
        () => autorestOption
      );
      codeModel.security.authenticationRequired = true;
      const project = getEmptyProject();
      generateReadmeFile(codeModel, project);

      const expectedContends = readFileSync(
        path.join(__dirname, "files/case-hlcReadme.md"),
        "utf-8"
      ).replace(/(\r\n|\n|\r)/gm, " ");
      const actualContents = getFirstFileContent(project).replace(
        /(\r\n|\n|\r)/gm,
        " "
      );
      writeFileSync(
        path.join(__dirname, "files/case-hlcReadme.md"),
        getFirstFileContent(project)
      );
      assert.strictEqual(actualContents, expectedContends);
    });

    it("should generate readme if no subscriptionid param in samples", async () => {
      const autorestOption = {
        srcPath: ".",
        azureOutputDirectory: "sdk/kusto/arm-kusto",
        packageDetails: {
          name: "@azure/arm-kusto",
          nameWithoutScope: "arm-kusto",
          scopeName: "azure",
          version: "1.0.0-beta.1"
        },
        licenseHeader: false,
        hideClients: true,
        azureArm: true,
        addCredentials: true,
        generateMetadata: true,
        isTestPackage: false,
        ignoreNullableOnOptional: false,
        useCoreV2: true,
        allowInsecureConnection: true
      } as autorestSession.AutorestOptions;
      const codeModel = new CodeModel("testCodeModel");
      // set client details info
      codeModel.language = {
        default: {
          name: "KustoManagementClient",
          description: ""
        }
      };
      codeModel.info.title = "KustoManagementClient";
      codeModel.info.description =
        "The Azure Kusto management API provides a RESTful set of web services that interact with Azure Kusto services to manage your clusters and databases. The API enables you to create, update, and delete clusters and databases.";
      sinon.replace(
        autorestSession,
        "getAutorestOptions",
        () => autorestOption
      );
      codeModel.security.authenticationRequired = true;
      const project = getEmptyProject();
      const sample = {
        samples: [
          {
            clientParameterNames: "credential"
          }
        ]
      } as SampleGroup;
      generateReadmeFile(codeModel, project, {
        samples: [sample]
      } as ClientDetails);

      const expectedContends = readFileSync(
        path.join(__dirname, "files/case-hlcReadme-without-subid.md"),
        "utf-8"
      ).replace(/(\r\n|\n|\r)/gm, " ");
      const actualContents = getFirstFileContent(project).replace(
        /(\r\n|\n|\r)/gm,
        " "
      );
      assert.strictEqual(actualContents, expectedContends);
    });
  });
});

// helper functions for mock data
const getMockAutorestOptions = () =>
  ({
    srcPath: ".",
    packageDetails: {
      name: "test",
      nameWithoutScope: "test",
      version: "1.0.0"
    },
    licenseHeader: false,
    hideClients: true,
    azureArm: false,
    ignoreNullableOnOptional: false,
    useCoreV2: true,
    allowInsecureConnection: true
  } as autorestSession.AutorestOptions);

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
