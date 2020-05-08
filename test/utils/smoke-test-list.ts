export interface SpecDefinition {
  path: string;
  branch?: string;
}

export const readmes: SpecDefinition[] = [
  { path: "./.tmp/specs/specification/cosmos-db/resource-manager/readme.md" },
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
