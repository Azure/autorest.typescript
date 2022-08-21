import { CadlProgram } from "../interfaces";

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
