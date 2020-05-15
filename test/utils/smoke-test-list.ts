export interface SpecDefinition {
  path: string;
  branch?: string;
  params?: string[];
}

export enum AutorestParams {
  ModelDedup = "--modelerfour.lenient-model-deduplication"
}

export const readmes: SpecDefinition[] = [
  { path: "./.tmp/specs/specification/web/resource-manager/readme.md" },
  { path: "./.tmp/specs/specification/monitor/data-plane/readme.md" },
  { path: "./.tmp/specs/specification/graphrbac/data-plane/readme.md" },
  {
    path: "./.tmp/specs/specification/cosmos-db/resource-manager/readme.md",
    params: [AutorestParams.ModelDedup]
  },
  { path: "./.tmp/specs/specification/compute/resource-manager/readme.md" },
  { path: "./.tmp/specs/specification/network/resource-manager/readme.md" },
  { path: "./.tmp/specs/specification/keyvault/resource-manager/readme.md" },
  { path: "./.tmp/specs/specification/storage/resource-manager/readme.md" },
  { path: "./.tmp/specs/specification/msi/resource-manager/readme.md" },
  {
    path:
      "./.tmp/specs/specification/adhybridhealthservice/resource-manager/readme.md"
  }
];
