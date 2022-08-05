import { Schema, SchemaContext } from "@azure-tools/rlc-codegen";
import { ModelType, Program, Type } from "@cadl-lang/compiler";
import { getAllRoutes } from "@cadl-lang/rest/http";
import { getSchemaForType } from "../modelUtils.js";

export function transformSchemas(program: Program) {
  const schemas: Schema[] = [];
  const [routes, _diagnostics] = getAllRoutes(program);
  const modelMap: Map<Type, SchemaContext[]> = new Map<Type, SchemaContext[]>();
  for (const route of routes) {
    if (route.parameters.body) {
      const bodyModel = route.parameters.body.type;
      if (bodyModel.kind === "Model") {
        setModelMap(bodyModel, SchemaContext.Input);
      } else if (
        bodyModel.kind === "Array" &&
        bodyModel.elementType.kind === "Model"
      ) {
        setModelMap(bodyModel.elementType, SchemaContext.Input);
      }
    }
    for (const resp of route.responses) {
      if (resp.type.kind === "Model") {
        setModelMap(resp.type, SchemaContext.Output);
      } else if (
        resp.type.kind === "Array" &&
        resp.type.elementType.kind === "Model"
      ) {
        setModelMap(resp.type.elementType, SchemaContext.Output);
      }
    }
  }
  modelMap.forEach((context, cadlModel) => {
    const model = getSchemaForType(program, cadlModel);
    model.usage = context;
    schemas.push(model);
  });
  function setModelMap(type: ModelType, schemaContext: SchemaContext) {
    if (modelMap.has(type)) {
      const context = modelMap.get(type);
      if (context && context.indexOf(schemaContext) === -1) {
        context.push(schemaContext);
        modelMap.set(type, context);
      }
    } else {
      modelMap.set(type, [schemaContext]);
    }
  }
  return schemas;
}
