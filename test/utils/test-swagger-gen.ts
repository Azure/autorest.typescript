import { exec } from "child_process";
import { join as joinPath } from "path";

interface SwaggerConfig {
  swagger: string;
  clientName: string;
  packageName: string;
  category: Category;
  addCredentials?: boolean;
  outputFolder?: string;
}

enum Category {
  TestServer = "testserver",
  Services = "services"
}

const servicesPath = joinPath("test", "integration", "generated", "services");
const package_version = "1.0.0-preview1";
let whiteList: string[] = [];

const testSwaggers: { [name: string]: SwaggerConfig } = {
  additionalProperties: {
    swagger: "additionalProperties.json",
    clientName: "AdditionalPropertiesClient",
    packageName: "additional-properties",
    category: Category.TestServer
  },
  azureParameterGrouping: {
    swagger: "azure-parameter-grouping.json",
    clientName: "AzureParameterGroupingClient",
    packageName: "azure-parameter-grouping",
    category: Category.TestServer
  },
  azureReport: {
    swagger: "azure-report.json",
    clientName: "ReportClient",
    packageName: "zzzAzureReport",
    category: Category.TestServer
  },
  azureSpecialProperties: {
    swagger: "azure-special-properties.json",
    clientName: "AzureSpecialPropertiesClient",
    packageName: "azure-special-properties",
    addCredentials: true,
    category: Category.TestServer
  },
  bodyArray: {
    swagger: "body-array.json",
    clientName: "BodyArrayClient",
    packageName: "body-array",
    category: Category.TestServer
  },
  bodyBoolean: {
    swagger: "body-boolean.json",
    clientName: "BodyBooleanClient",
    packageName: "body-boolean",
    category: Category.TestServer
  },
  bodyBooleanQuirks: {
    swagger: "body-boolean.quirks.json",
    clientName: "BodyBooleanQuirksClient",
    packageName: "body-boolean-quirks",
    category: Category.TestServer
  },
  bodyByte: {
    swagger: "body-byte.json",
    clientName: "BodyByteClient",
    packageName: "body-byte",
    category: Category.TestServer
  },
  bodyComplex: {
    swagger: "body-complex.json",
    clientName: "BodyComplexClient",
    packageName: "body-complex",
    category: Category.TestServer
  },
  bodyDate: {
    swagger: "body-date.json",
    clientName: "BodyDateClient",
    packageName: "body-date",
    category: Category.TestServer
  },
  bodyDateTime: {
    swagger: "body-datetime.json",
    clientName: "BodyDateTimeClient",
    packageName: "body-datetime",
    category: Category.TestServer
  },
  bodyDateTimeRfc1123: {
    swagger: "body-datetime-rfc1123.json",
    clientName: "BodyDateTimeRfc1123Client",
    packageName: "body-datetime-rfc1123",
    category: Category.TestServer
  },
  bodyTime: {
    swagger: "body-time.json",
    clientName: "BodyTimeClient",
    packageName: "body-time",
    category: Category.TestServer
  },
  bodyDictionary: {
    swagger: "body-dictionary.json",
    clientName: "BodyDictionaryClient",
    packageName: "body-dictionary",
    category: Category.TestServer
  },
  bodyDuration: {
    swagger: "body-duration.json",
    clientName: "BodyDurationClient",
    packageName: "body-duration",
    category: Category.TestServer
  },
  bodyInteger: {
    swagger: "body-integer.json",
    clientName: "BodyIntegerClient",
    packageName: "body-integer",
    category: Category.TestServer
  },
  bodyNumber: {
    swagger: "body-number.json",
    clientName: "BodyNumberClient",
    packageName: "body-number",
    category: Category.TestServer
  },
  bodyString: {
    swagger: "body-string.json",
    clientName: "BodyStringClient",
    packageName: "body-string",
    category: Category.TestServer
  },
  customUrl: {
    swagger: "custom-baseUrl.json",
    clientName: "CustomUrlClient",
    packageName: "custom-url",
    category: Category.TestServer
  },
  header: {
    swagger: "header.json",
    clientName: "HeaderClient",
    packageName: "header",
    category: Category.TestServer
  },
  lro: {
    swagger: "lro.json",
    clientName: "LROClient",
    packageName: "lro",
    category: Category.TestServer
  },
  mediaTypes: {
    swagger: "media_types.json",
    clientName: "MediaTypesClient",
    packageName: "media-types-service",
    category: Category.TestServer
  },
  modelFlattening: {
    swagger: "model-flattening.json",
    clientName: "ModelFlatteningClient",
    packageName: "model-flattening",
    category: Category.TestServer
  },
  noMappers: {
    swagger: "test/integration/swaggers/no-mappers.json",
    clientName: "NoMappersClient",
    packageName: "no-mappers",
    category: Category.TestServer
  },
  paging: {
    swagger: "paging.json",
    clientName: "PagingClient",
    packageName: "paging-service",
    category: Category.TestServer
  },
  report: {
    swagger: "report.json",
    clientName: "ReportClient",
    packageName: "zzzReport",
    category: Category.TestServer
  },
  url: {
    swagger: "url.json",
    clientName: "UrlClient",
    packageName: "url",
    category: Category.TestServer
  },
  xmlservice: {
    swagger: "xml-service.json",
    clientName: "XmlServiceClient",
    packageName: "xml-service",
    category: Category.TestServer
  },
  /**
   * Real Services swaggers
   */
  addOns: {
    swagger:
      "https://github.com/Azure/azure-rest-api-specs/blob/master/specification/addons/resource-manager/Microsoft.Addons/preview/2018-03-01/addons-swagger.json",
    clientName: "AzureAddonsResourceProvider",
    packageName: "@azure/arm-addons",
    outputFolder: servicesPath,
    category: Category.Services
  },
  adHybridHealthService: {
    swagger:
      "https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master/specification/adhybridhealthservice/resource-manager/Microsoft.ADHybridHealthService/stable/2014-01-01/ADHybridHealthService.json",
    clientName: "ADHybridHealthServiceClient",
    packageName: "@azure/arm-ADHybridHealthServiceClient",
    outputFolder: servicesPath,
    category: Category.Services
  },
  advisorManagementClient: {
    swagger:
      "https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master/specification/adhybridhealthservice/resource-manager/Microsoft.ADHybridHealthService/stable/2014-01-01/ADHybridHealthService.json",
    clientName: "AdvisorManagementClient",
    packageName: "@azure/arm-advisorManagementClient",
    outputFolder: servicesPath,
    category: Category.Services
  },
  alertsManagement: {
    swagger:
      "https://raw.githubusercontent.com/Azure/azure-rest-api-specs/master/specification/alertsmanagement/resource-manager/Microsoft.AlertsManagement/preview/2019-05-05-preview/AlertsManagement.json",
    clientName: "AlertsManagementClient",
    packageName: "@azure/arm-AlertsManagementClient",
    outputFolder: servicesPath,
    category: Category.Services
  }
};

const getSwaggerPath = (swagger: string) => {
  if (swagger.split("/").length === 1) {
    // When given a filename look for it in test server, otherwise use the path
    return joinPath(
      "node_modules",
      "@microsoft.azure",
      "autorest.testserver",
      "swagger",
      swagger
    );
  }

  return swagger;
};

const getOutputFolder = (name: string, outputFolder?: string) => {
  if (!outputFolder) {
    // When given a filename look for it in test server, otherwise use the path
    return joinPath("test", "integration", "generated", name);
  }

  return joinPath(outputFolder, name);
};

const generateSwaggers = async (
  whiteList?: string[],
  isDebugging?: boolean
) => {
  let generationTasks: Promise<void>[] = [];
  const categories = getCategories();

  Object.keys(testSwaggers)
    .filter(name => {
      if (!whiteList || !whiteList.length) {
        return true;
      }
      return whiteList.includes(name);
    })
    .forEach(name => {
      const {
        addCredentials,
        clientName,
        swagger,
        packageName,
        outputFolder,
        category
      } = testSwaggers[name];

      if (!categories.has(category)) {
        return;
      }

      const swaggerPath = getSwaggerPath(swagger);
      const outputPath = getOutputFolder(name, outputFolder);

      let autorestCommand = `autorest --add-credentials=${!!addCredentials} --typescript --output-folder=${outputPath} --use=. --title=${clientName} --input-file=${swaggerPath} --package-name=${packageName} --package-version=${package_version}`;

      if (isDebugging) {
        autorestCommand = `${autorestCommand} --typescript.debugger`;
      }

      const generationTask = () => {
        return new Promise<void>((resolve, reject) => {
          exec(autorestCommand, (error, stdout, stderr) => {
            if (error) {
              reject(`Failed to generate ${name} with error: \n ${error}`);
              return;
            }
            console.log(`=== Start ${name} ===`);
            console.log(stdout);
            stderr && console.error(stderr);
            console.log(`=== End ${name} ===`);
            resolve();
          });
        });
      };

      generationTasks.push(generationTask());
    });

  try {
    await Promise.all(generationTasks);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const buildWhitelist = () =>
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

const buildAutorest = () => {
  if (!process.argv.includes("--build") && !process.argv.includes("-b")) {
    console.warn(
      "Not building Autorest.Typescript, use --build or -b to build"
    );
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    console.log("Building Autorest.Typescript");
    exec("npm run build", (error, stdout, stderror) => {
      if (error) {
        reject(
          `Failed to build autorest.typescript \n ${JSON.stringify(error)}`
        );
        return;
      }

      console.log(stdout);
      stderror && console.error(stderror);
      resolve();
    });
  });
};

const getCategories = () => {
  let categorySet: Set<Category> = new Set<Category>();

  process.argv.forEach((arg, index) => {
    if (arg !== "--catrgory" && arg !== "-c") {
      return;
    }

    const value = process.argv[index + 1];
    if (!value) {
      return;
    }

    const categories = value.split(",");
    categories.forEach(category => {
      switch (category.toLowerCase()) {
        case "services":
          categorySet.add(Category.Services);
          return;
        case "testserver":
          categorySet.add(Category.TestServer);
          return;
        default:
          console.warn(`Ignoring Unknown category: ${category}`);
      }
    });
  });

  return categorySet;
};

const run = async () => {
  const isDebugging = process.argv.indexOf("--debug") !== -1;
  buildWhitelist();
  await buildAutorest();
  await generateSwaggers(whiteList, isDebugging);
};

run().catch(error => {
  process.exit(-1000);
});
