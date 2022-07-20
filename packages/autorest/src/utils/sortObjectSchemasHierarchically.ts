import { ObjectSchema, SchemaType, CodeModel } from "@autorest/codemodel";
import { getLanguageMetadata } from "./languageHelpers";

/**
 * This function sorts objects in a topographical order
 * this is to make sure that mappers of parents are generated
 * before children to avoid issues trying to reference a mapper
 * before being defined.
 */
export function sortObjectSchemasHierarchically(codeModel: CodeModel) {
  // Start processing objects without parents and walk the hierarchy
  // level by level
  const stack: ObjectSchema[] = (codeModel.schemas.objects || []).filter(
    o =>
      // Get objects that don't have any parents
      !o.parents ||
      o.parents.all.length === 0 ||
      // Or objects that have parents but none of them are Objects
      // this is to handle the case where an object's parent is a
      // DictionarySchema, common for additional properties
      !(
        o.parents.all.length &&
        o.parents.all.some(p => p.type === SchemaType.Object)
      )
  );

  const result: ObjectSchema[] = [];

  // Keep track of the processed schemas to avoid inserting one twice
  const processed = new Set<string>();

  while (stack.length) {
    const current = stack.shift();

    if (!current) {
      continue;
    }

    const { name } = getLanguageMetadata(current.language);

    if (processed.has(name)) {
      continue;
    }

    result.push(current);
    processed.add(name);

    const currentChildren = !current.children
      ? []
      : (current.children.immediate.filter(
          c => c.type === SchemaType.Object
        ) as ObjectSchema[]);

    stack.push(...currentChildren);
  }

  codeModel.schemas.objects = result;
}
