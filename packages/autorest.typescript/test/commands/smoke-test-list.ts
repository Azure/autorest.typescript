import { join as joinPath } from "path";

type BuildTag = "ci_1" | "ci_2" | "ci_3" | "ci_rlc" | "debug";

export interface SpecDefinition {
  path: string;
  branch?: string;
  params?: string[];
  outputFolderName?: string;
  buildTag?: BuildTag;
}

export enum AutorestParams {
  ModelDedup = "--modelerfour.lenient-model-deduplication",
  RestClient = "--rest-level-client=true",
  GenerateTest = "--generate-test=true",
  GenerateSamples = "--generate-sample=true",
  MultiClient = "--multi-client",
  NotAzureSdkForJs = "--azure-sdk-for-js=false",
  AzureArm = "--azure-arm",
  Security = "--security=AADToken"
}

const getArmReadmes = (): SpecDefinition[] => {
  const armTags = [
    "package-features-2015-12",
    "package-locks-2016-09",
    "package-policy-2019-09",
    "package-resources-2019-08",
    "package-subscriptions-2019-06",
    "package-links-2016-09",
    "package-managedapplications-2018-06",
    "package-deploymentscripts-2019-10-preview"
  ];
  return armTags.map((tag) => ({
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/resources/resource-manager/readme.md"
    ),
    params:
      tag === "package-subscriptions-2019-06"
        ? [
            AutorestParams.GenerateSamples,
            AutorestParams.GenerateTest,
            AutorestParams.NotAzureSdkForJs,
            `--tag=${tag}`
          ]
        : [AutorestParams.NotAzureSdkForJs, `--tag=${tag}`],
    outputFolderName: `arm-${tag}`,
    buildTag: "ci_1"
  }));
};

export const readmes: SpecDefinition[] = [
  ...getArmReadmes(),
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/networkcloud/resource-manager/readme.md"
    ),
    branch: "0ab5469dc0d75594f5747493dcfe8774e22d728f",
    params: [
      AutorestParams.ModelDedup,
      AutorestParams.AzureArm,
      AutorestParams.NotAzureSdkForJs
    ],
    buildTag: "ci_1"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/sql/resource-manager/readme.md"
    ),
    branch: "925e8285703ddd461588d8f5fbf14bd97c286fab",
    params: [
      AutorestParams.GenerateTest,
      AutorestParams.ModelDedup,
      AutorestParams.GenerateSamples,
      AutorestParams.AzureArm,
      AutorestParams.NotAzureSdkForJs
    ],
    buildTag: "ci_1"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/web/resource-manager/readme.md"
    ),
    params: [
      AutorestParams.GenerateTest,
      AutorestParams.GenerateSamples,
      AutorestParams.NotAzureSdkForJs
    ],
    branch: "925e8285703ddd461588d8f5fbf14bd97c286fab",
    buildTag: "ci_2"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/monitor/data-plane/readme.md"
    ),
    params: [AutorestParams.Security, AutorestParams.NotAzureSdkForJs],
    buildTag: "ci_2"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/graphrbac/data-plane/readme.md"
    ),
    params: [AutorestParams.NotAzureSdkForJs],
    buildTag: "ci_2"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/cosmos-db/resource-manager/readme.md"
    ),
    params: [AutorestParams.ModelDedup, AutorestParams.NotAzureSdkForJs],
    branch: "925e8285703ddd461588d8f5fbf14bd97c286fab",
    buildTag: "ci_2"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/compute/resource-manager/readme.md"
    ),
    params: [
      AutorestParams.GenerateTest,
      AutorestParams.ModelDedup,
      AutorestParams.GenerateSamples,
      AutorestParams.NotAzureSdkForJs
    ],
    branch: "925e8285703ddd461588d8f5fbf14bd97c286fab",
    buildTag: "ci_2"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/network/resource-manager/readme.md"
    ),
    params: [
      AutorestParams.GenerateTest,
      AutorestParams.GenerateSamples,
      AutorestParams.NotAzureSdkForJs,
      AutorestParams.AzureArm
    ],
    branch: "25bea13c86145a7620e363826a9ae476c18adb5f",
    buildTag: "ci_3"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/keyvault/resource-manager/readme.md"
    ),
    params: [
      AutorestParams.GenerateTest,
      AutorestParams.GenerateSamples,
      AutorestParams.NotAzureSdkForJs,
      AutorestParams.AzureArm
    ],
    branch: "925e8285703ddd461588d8f5fbf14bd97c286fab",
    buildTag: "ci_3"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/storage/resource-manager/readme.md"
    ),
    params: [
      AutorestParams.ModelDedup,
      AutorestParams.GenerateTest,
      AutorestParams.GenerateSamples,
      AutorestParams.NotAzureSdkForJs
    ],
    branch: "925e8285703ddd461588d8f5fbf14bd97c286fab",
    buildTag: "ci_3"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/msi/resource-manager/readme.md"
    ),
    params: [
      AutorestParams.GenerateTest,
      AutorestParams.GenerateSamples,
      AutorestParams.NotAzureSdkForJs
    ],
    branch: "925e8285703ddd461588d8f5fbf14bd97c286fab",
    buildTag: "ci_3"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "..",
      "./.tmp/specs/specification/agrifood/data-plane/readme.md"
    ),
    branch: "3ac6ce225efe665e6c74abe48016dcb2a236d609",
    params: [
      AutorestParams.RestClient,
      AutorestParams.GenerateTest,
      AutorestParams.NotAzureSdkForJs,
      AutorestParams.GenerateSamples
    ],
    buildTag: "ci_rlc"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "./smoke/swagger/purview-administration-rest.md"
    ),
    params: [
      AutorestParams.RestClient,
      AutorestParams.MultiClient,
      AutorestParams.NotAzureSdkForJs,
      AutorestParams.GenerateSamples
    ],
    buildTag: "ci_rlc"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "./smoke/swagger/synapse-artifacts-rest.md"
    ),
    params: [
      AutorestParams.RestClient,
      AutorestParams.NotAzureSdkForJs,
      AutorestParams.GenerateSamples
    ],
    buildTag: "ci_rlc"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "./smoke/swagger/anomaly-detector-rest.md"
    ),
    params: [
      AutorestParams.RestClient,
      AutorestParams.NotAzureSdkForJs,
      AutorestParams.GenerateSamples
    ],
    buildTag: "ci_rlc"
  },
  {
    path: joinPath(
      `${__dirname}`,
      "..",
      "./smoke/swagger/anomaly-detector-mv-rest.md"
    ),
    params: [AutorestParams.RestClient, AutorestParams.NotAzureSdkForJs],
    buildTag: "ci_rlc"
  }
  // {
  //   path:
  //     "./.tmp/specs/specification/adhybridhealthservice/resource-manager/readme.md",
  //   buildTag: "ci_3"
  // }
];
