import { CodeModel, SchemaContext } from "@autorest/codemodel";

export function hasInputModels(model: CodeModel) {
  return model.schemas.objects?.some(o =>
    o.usage?.includes(SchemaContext.Input)
  );
}

export function hasOutputModels(model: CodeModel) {
  return model.schemas.objects?.some(
    o =>
      o.usage?.includes(SchemaContext.Output) ||
      o.usage?.includes(SchemaContext.Exception)
  );
}
