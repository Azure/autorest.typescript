import { ObjectSchema, SchemaType } from "@azure-tools/codemodel";
import { Mapper, MapperType, CompositeMapper } from "@azure/core-http";
import { transformObject } from "./transforms";

export function getMapperType(type: string): MapperType {
  switch (type) {
    case SchemaType.String:
      return { name: MapperType.String };
    case SchemaType.Number:
    case SchemaType.Integer:
      return { name: MapperType.Number };
    default:
      throw new Error(`Unsupported schema type: ${type}`);
  }
}

export type ModelProperties = { [propertyName: string]: Mapper };

export function transformMapper(obj: ObjectSchema): CompositeMapper {
  const transformedObject = transformObject(obj);
  const modelProperties: ModelProperties = {};
  transformedObject.properties.forEach(prop => {
    const {
      name,
      serializedName,
      required,
      isConstant,
      type,
      defaultValue
    } = prop;
    return (modelProperties[name] = {
      serializedName,
      required,
      isConstant,
      defaultValue,
      type: getMapperType(type)
    });
  });
  return {
    serializedName: transformedObject.serializedName,
    type: {
      name: MapperType.Composite,
      className: transformedObject.name,
      modelProperties
    }
  };
}
