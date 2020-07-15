type BuildTag = "ci_1" | "ci_2" | "ci_3";

export interface SpecDefinition {
  path: string;
  branch?: string;
  params?: string[];
  outputFolderName?: string;
  buildTag?: BuildTag;
}

export enum AutorestParams {
  ModelDedup = "--modelerfour.lenient-model-deduplication"
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
  return armTags.map(tag => ({
    path: "./.tmp/specs/specification/resources/resource-manager/readme.md",
    params: [`--tag=${tag}`],
    outputFolderName: `arm-${tag}`,
    buildTag: "ci_1"
  }));
};

export const readmes: SpecDefinition[] = [
  ...getArmReadmes(),
  {
    path: "./.tmp/specs/specification/sql/resource-manager/readme.md",
    params: [AutorestParams.ModelDedup],
    buildTag: "ci_1"
  },
  {
    path: "./.tmp/specs/specification/web/resource-manager/readme.md",
    buildTag: "ci_2"
  },
  {
    path: "./.tmp/specs/specification/monitor/data-plane/readme.md",
    buildTag: "ci_2"
  },
  {
    path: "./.tmp/specs/specification/graphrbac/data-plane/readme.md",
    buildTag: "ci_2"
  },
  {
    path: "./.tmp/specs/specification/cosmos-db/resource-manager/readme.md",
    params: [AutorestParams.ModelDedup],
    buildTag: "ci_2"
  },
  {
    path: "./.tmp/specs/specification/compute/resource-manager/readme.md",
    buildTag: "ci_2"
  },
  {
    path: "./.tmp/specs/specification/network/resource-manager/readme.md",
    buildTag: "ci_3"
  },
  {
    path: "./.tmp/specs/specification/keyvault/resource-manager/readme.md",
    buildTag: "ci_3"
  },
  {
    path: "./.tmp/specs/specification/storage/resource-manager/readme.md",
    params: [AutorestParams.ModelDedup],
    buildTag: "ci_3"
  },
  {
    path: "./.tmp/specs/specification/msi/resource-manager/readme.md",
    buildTag: "ci_3"
  },
  // {
  //   path:
  //     "./.tmp/specs/specification/adhybridhealthservice/resource-manager/readme.md",
  //   buildTag: "ci_3"
  // }
];
