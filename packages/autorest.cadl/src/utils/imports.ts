import { CadlProgram } from "../interfaces";

type Imports = {
  modules: string[];
  namespaces: string[];
};

export function getModelsImports(program: CadlProgram) {
  const modules = new Set<string>();
  const namespaces = new Set<string>();
  for (const model of program.models.objects) {
    for (const decorator of model.decorators ?? []) {
      decorator.module && modules.add(`import "${decorator.module}";`);
      decorator.namespace && namespaces.add(`using ${decorator.namespace};`);
    }

    for (const property of model.properties) {
      for (const decorator of property.decorators ?? []) {
        decorator.module && modules.add(`import "${decorator.module}";`);
        decorator.namespace && namespaces.add(`using ${decorator.namespace};`);
      }
    }
  }

  return {
    modules: [...modules],
    namespaces: [...namespaces],
  };
}

export function getRoutesImports(program: CadlProgram) {
  let imports: Imports = {
    modules: [`import "@cadl-lang/rest";`, `import "./models.cadl";`],
    namespaces: [`using Cadl.Rest;`, `using Cadl.Http;`],
  };

  let core = false;
  for (const operationGroup of program.operationGroups) {
    const hasPagination = operationGroup.operations.some((o) =>
      o.extensions.includes("Pageable")
    );

    if (hasPagination) {
      core = true;
    }
  }

  if (core) {
    imports.modules.push(`import "@azure-tools/cadl-azure-core";`);
  }

  return imports;
}
