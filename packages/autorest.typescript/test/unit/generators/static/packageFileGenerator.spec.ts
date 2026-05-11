import * as sinon from "sinon";
import * as autorestSession from "../../../../src/autorestSession";
import { assert } from "chai";
import { Project, IndentationText } from "ts-morph";
import { generatePackageJson } from "../../../../src/generators/static/packageFileGenerator";
import { ClientDetails } from "../../../../src/models/clientDetails";

describe("packageFileGenerator", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("should generate repository metadata in object format for azure-sdk-for-js packages", () => {
    const autorestOption = getMockAutorestOptions();
    autorestOption.azureOutputDirectory = "sdk/contoso/arm-contoso";

    sinon.replace(autorestSession, "getAutorestOptions", () => autorestOption);
    sinon.replace(autorestSession, "getSession", () => getMockSession() as any);

    const project = getEmptyProject();
    generatePackageJson(project, getMockClientDetails());
    const packageJson = getGeneratedPackageJson(project);

    assert.deepEqual(packageJson.repository, {
      type: "git",
      url: "git+https://github.com/Azure/azure-sdk-for-js",
      directory: "sdk/contoso/arm-contoso"
    });
    assert.strictEqual(
      packageJson.homepage,
      "https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/contoso/arm-contoso/README.md"
    );
  });

  it("should use sdk/ as repository directory when output directory is unavailable", () => {
    const autorestOption = getMockAutorestOptions();
    delete autorestOption.azureOutputDirectory;

    sinon.replace(autorestSession, "getAutorestOptions", () => autorestOption);
    sinon.replace(autorestSession, "getSession", () => getMockSession() as any);

    const project = getEmptyProject();
    generatePackageJson(project, getMockClientDetails());
    const packageJson = getGeneratedPackageJson(project);

    assert.deepEqual(packageJson.repository, {
      type: "git",
      url: "git+https://github.com/Azure/azure-sdk-for-js",
      directory: "sdk/"
    });
  });

  it("should keep string repository metadata for non-azure-sdk-for-js packages", () => {
    const autorestOption = getMockAutorestOptions();
    autorestOption.azureSdkForJs = false;

    sinon.replace(autorestSession, "getAutorestOptions", () => autorestOption);
    sinon.replace(autorestSession, "getSession", () => getMockSession() as any);

    const project = getEmptyProject();
    generatePackageJson(project, getMockClientDetails());
    const packageJson = getGeneratedPackageJson(project);

    assert.strictEqual(packageJson.repository, "github:Azure/azure-sdk-for-js");
  });
});

function getMockAutorestOptions() {
  return {
    restLevelClient: false,
    generateMetadata: true,
    generateTest: false,
    generateSample: false,
    azureSdkForJs: true,
    azureOutputDirectory: "sdk/contoso/arm-contoso",
    packageDetails: {
      name: "@azure/arm-contoso",
      nameWithoutScope: "arm-contoso",
      scopeName: "azure",
      version: "1.0.0"
    },
    disablePagingAsyncIterators: false,
    useCoreV2: true,
    tracingInfo: undefined,
    coreHttpCompatMode: false,
    azureArm: true,
    isTestPackage: false,
    srcPath: "src"
  } as autorestSession.AutorestOptions;
}

function getMockSession() {
  return {
    model: {
      operationGroups: [],
      security: {
        schemes: [],
        authenticationRequired: false
      }
    }
  };
}

function getMockClientDetails() {
  return {
    name: "ContosoClient",
    className: "ContosoClient",
    info: {} as any,
    sourceFileName: "contosoClient",
    objects: [],
    mappers: [],
    unions: [],
    operationGroups: [],
    parameters: [],
    options: {
      hasPaging: false
    },
    endpoint: {} as any,
    allTypes: [],
    security: {
      schemes: [],
      authenticationRequired: false
    }
  } as unknown as ClientDetails;
}

function getEmptyProject() {
  return new Project({
    useInMemoryFileSystem: true,
    manipulationSettings: {
      indentationText: IndentationText.TwoSpaces
    }
  });
}

function getGeneratedPackageJson(project: Project) {
  project.saveSync();
  const source = project.getSourceFileOrThrow("package.json");
  return JSON.parse(source.getFullText());
}
