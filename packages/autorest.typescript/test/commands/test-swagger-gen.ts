import { spawn } from "child_process";
import { TracingInfo } from "../../src/models/clientDetails";
import { onExit } from "./childProcessOnExit";
import { runAutorest } from "./run";

interface SwaggerConfig {
  swaggerOrConfig: string;
  clientName: string;
  packageName: string;
  addCredentials?: boolean;
  security?: string;
  licenseHeader?: boolean;
  securityScopes?: string;
  tracing?: TracingInfo;
  disableAsyncIterators?: boolean;
  hideClients?: boolean;
  ignoreNullableOnOptional?: boolean;
  useCoreV2?: boolean;
  allowInsecureConnection?: boolean;
  restLevelClient?: boolean;
  azureSdkForJs?: boolean;
  rlcShortcut?: boolean;
  headAsBoolean?: boolean;
  isTestPackage?: boolean;
  generateTest?: boolean;
  coreHttpCompatMode?: boolean;
  generateSample?: boolean;
  lenientModelDeduplication?: boolean;
}

const package_version = "1.0.0-preview1";
let whiteList: string[] = [];

let testSwaggers: { [name: string]: SwaggerConfig } = {
  lro: {
    swaggerOrConfig: "lro.json",
    clientName: "LROClient",
    packageName: "lro",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    tracing: {
      namespace: "Microsoft.Autorest.LRO",
      packagePrefix: "Azure.Autorest.LRO"
    }
  }
};

const rlcTestSwaggers: { [name: string]: SwaggerConfig } = {
  // TEST REST LEVEL CLIENTS
  lroRest: {
    swaggerOrConfig: "lro.json",
    clientName: "LRORestClient",
    packageName: "lro-rest",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true,
    azureSdkForJs: false,
    generateSample: true
  },
  dpgCustomization: {
    swaggerOrConfig: "dpg-customization.json",
    clientName: "DPGCustomizationClient",
    packageName: "dpg-customization-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateSample: true
  },
  bodyStringRest: {
    swaggerOrConfig: "body-string.json",
    clientName: "BodyStringRest",
    packageName: "body-string-rest",
    addCredentials: false,
    restLevelClient: true,
    azureSdkForJs: false,
    licenseHeader: true,
    isTestPackage: true,
    generateTest: true,
    generateSample: true
  },
  bodyComplexRest: {
    swaggerOrConfig: "test/integration/swaggers/bodyComplex.md",
    clientName: "BodyComplexRestClient",
    packageName: "body-complex-rest",
    licenseHeader: true,
    restLevelClient: true,
    azureSdkForJs: false,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateSample: false
  },
  pagingRest: {
    swaggerOrConfig: "paging.json",
    clientName: "Paging",
    packageName: "paging-service",
    licenseHeader: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true,
    azureSdkForJs: false,
    generateSample: true
  },
  multipleInheritanceRest: {
    swaggerOrConfig: "multiple-inheritance.json",
    clientName: "MultipleInheritanceRestClient",
    packageName: "multiple-inheritance-rest",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    restLevelClient: true,
    azureSdkForJs: false,
    rlcShortcut: true,
    isTestPackage: true,
    generateSample: true
  },
  mediaTypesRest: {
    swaggerOrConfig: "media_types.json",
    clientName: "MediaTypes",
    packageName: "media-types-service-rest",
    licenseHeader: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true,
    azureSdkForJs: false,
    generateSample: true
  },
  bodyFileRest: {
    swaggerOrConfig: "body-file.json",
    clientName: "BodyFile",
    packageName: "body-file",
    licenseHeader: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true,
    azureSdkForJs: false,
    generateSample: true
  },
  headerRest: {
    swaggerOrConfig: "header.json",
    clientName: "HeaderRestClient",
    packageName: "header-rest",
    licenseHeader: true,
    restLevelClient: true,
    azureSdkForJs: false,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateSample: true
  },
  urlRest: {
    swaggerOrConfig: "url.json",
    clientName: "UrlRestClient",
    packageName: "url-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    azureSdkForJs: false,
    generateSample: true
  },
  bodyFormDataRest: {
    swaggerOrConfig: "body-formdata.json",
    clientName: "BodyFormData",
    packageName: "body-formdata-rest",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    restLevelClient: true,
    azureSdkForJs: false,
    generateSample: true
  },
  customUrlRest: {
    swaggerOrConfig: "custom-baseUrl.json",
    clientName: "CustomUrlRestClient",
    packageName: "custom-url-rest",
    licenseHeader: true,
    restLevelClient: true,
    azureSdkForJs: false,
    rlcShortcut: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateSample: false // have issues in custom url samples
  },
  httpInfrastructureRest: {
    swaggerOrConfig: "httpInfrastructure.json",
    clientName: "HttpInfrastructureRestClient",
    packageName: "http-infrastructure-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    generateSample: true
  },
  securityAADRest: {
    swaggerOrConfig: "security-aad.json",
    clientName: "SecurityAADRestClient",
    packageName: "security-aad-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    isTestPackage: true
  },
  securityKeyRest: {
    swaggerOrConfig: "security-key.json",
    clientName: "SecurityKeyRestClient",
    packageName: "security-key-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    isTestPackage: true
  },
  multipleUrlParameters: {
    swaggerOrConfig: "test/rlcIntegration/swaggers/multipleUrlParameter.json",
    clientName: "MultipleUrlParameterRestClient",
    packageName: "multiple-url-parameter-rest",
    licenseHeader: true,
    restLevelClient: true,
    rlcShortcut: true,
    allowInsecureConnection: true,
    isTestPackage: true
  },
  azureReport: {
    swaggerOrConfig: "azure-report.json",
    clientName: "ReportClient",
    packageName: "zzzAzureReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true
  },
  report: {
    swaggerOrConfig: "report.json",
    clientName: "ReportClient",
    packageName: "zzzReport",
    licenseHeader: true,
    useCoreV2: true,
    allowInsecureConnection: true,
    addCredentials: false,
    isTestPackage: true,
    azureSdkForJs: false
  }
};

const generateSwaggers = async (
  whiteList?: string[],
  isDebugging?: boolean,
  isRlc?: boolean
) => {
  if (isRlc) {
    testSwaggers = rlcTestSwaggers;
  }
  const swaggers = Object.keys(testSwaggers).filter(name => {
    if (!whiteList || !whiteList.length) {
      return true;
    }
    return whiteList.includes(name);
  });

  for (let name of swaggers) {
    const {
      addCredentials,
      security,
      clientName,
      swaggerOrConfig,
      packageName,
      licenseHeader,
      tracing,
      disableAsyncIterators,
      securityScopes,
      hideClients,
      ignoreNullableOnOptional,
      useCoreV2,
      allowInsecureConnection,
      restLevelClient,
      azureSdkForJs,
      headAsBoolean,
      isTestPackage,
      generateTest,
      rlcShortcut,
      coreHttpCompatMode,
      generateSample
    } = testSwaggers[name];

    let swaggerPath = swaggerOrConfig;
    if (swaggerOrConfig.split("/").length === 1) {
      // When given a filename look for it in test server, otherwise use the path
      swaggerPath = `node_modules/@microsoft.azure/autorest.testserver/swagger/${swaggerOrConfig}`;
    }

    let inputFileCommand: string = `${swaggerPath}`;
    if (!swaggerPath.endsWith(".md")) {
      inputFileCommand = `--input-file=${inputFileCommand}`;
    }
    await runAutorest(
      swaggerPath,
      {
        tracingInfo: tracing,
        disablePagingAsyncIterators: disableAsyncIterators,
        security,
        securityScopes:
          security && securityScopes && security.length > 0
            ? securityScopes
            : undefined,
        srcPath: "",
        licenseHeader: !!licenseHeader,
        addCredentials,
        outputPath: isRlc
          ? `./test/rlcIntegration/generated/${name}`
          : `./test/integration/generated/${name}`,
        title: clientName,
        packageDetails: {
          name:
            packageName.split("/").length === 1
              ? `@msinternal/${packageName}`
              : packageName,
          version: package_version,
          nameWithoutScope: ""
        },
        hideClients,
        ignoreNullableOnOptional,
        useCoreV2,
        allowInsecureConnection,
        restLevelClient,
        azureSdkForJs: azureSdkForJs,
        rlcShortcut,
        headAsBoolean,
        isTestPackage,
        generateTest,
        coreHttpCompatMode,
        generateSample
      },
      isDebugging
    );
  }
};

const buildWhitelist = () => {
  if (process.argv.find(arg => arg === "--all-rlc")) {
    console.log("Generating all RLC test clients");
    for (const swagger in testSwaggers) {
      if (testSwaggers[swagger].restLevelClient) {
        whiteList.push(swagger);
      }
    }

    return;
  }

  if (process.argv.find(arg => arg === "--non-hlc")) {
    console.log("Generating all non-RLC test clients");

    for (const swagger in testSwaggers) {
      if (!testSwaggers[swagger].restLevelClient) {
        whiteList.push(swagger);
      }
    }

    return;
  }

  process.argv.forEach((arg, index) => {
    if (arg !== "--include" && arg !== "-i") {
      return;
    }

    const includesValue = process.argv[index + 1];
    if (!includesValue) {
      console.warn(
        "No valid include list provided, generating all test swaggers"
      );
      return;
    }

    const swaggers = includesValue.split(",");

    swaggers.forEach(swagger => {
      const validSwaggers = Object.keys(testSwaggers);
      if (!validSwaggers.includes(swagger)) {
        throw new Error(
          `Unknown swagger ${swagger}, valid swaggers: \n ${JSON.stringify(
            validSwaggers
          )}`
        );
      }

      whiteList.push(swagger);
    });
  });
};
const buildAutorest = () => {
  if (!process.argv.includes("--build") && !process.argv.includes("-b")) {
    console.warn(
      "Not building Autorest.Typescript, use --build or -b to build"
    );
    return Promise.resolve();
  }
  const childProcess = spawn("npm run build", {
    stdio: [process.stdin, process.stdout, process.stderr],
    shell: process.platform === "win32"
  });

  return onExit(childProcess);
};

const logAutorestInfo = async () => {
  const childProcess = spawn("autorest", ["--info"], {
    stdio: [process.stdin, process.stdout, process.stderr],
    shell: process.platform === "win32"
  });
  await onExit(childProcess);
};

const run = async () => {
  const isDebugging = process.argv.indexOf("--debug") !== -1;
  const isRlc = process.argv.indexOf("rlc") !== -1;
  buildWhitelist();
  await logAutorestInfo();
  await buildAutorest();
  await generateSwaggers(whiteList, isDebugging, isRlc);
};

run().catch(error => {
  console.error(error);
  process.exit(-1000);
});
