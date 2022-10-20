import { CadlProgram } from "../interfaces";

type Imports = {
  modules: string[];
  namespaces: string[];
};

export function getModelsImports(program: CadlProgram) {
  const modules = new Set<string>();
  const namespaces = new Set<string>();
  for (const model of program.models.objects) {
    model.alias?.module && modules.add(`import "${model.alias.module}";`);
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

export function getRoutesImports(_program: CadlProgram) {
  let imports: Imports = {
    modules: [
      `import "@azure-tools/cadl-azure-core";`,
      `import "@cadl-lang/rest";`,
      `import "./models.cadl";`,
    ],
    namespaces: [`using Cadl.Rest;`, `using Cadl.Http;`],
  };

  return imports;
}
