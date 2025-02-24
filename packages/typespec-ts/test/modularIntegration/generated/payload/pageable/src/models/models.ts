// Licensed under the MIT License.

export function petArrayDeserializer(result: Array<Pet>): any[] {
  return result.map((item) => {
    return petDeserializer(item);
  });
}

/** model interface Pet */
export interface Pet {
  id: string;
  name: string;
}

export function petDeserializer(item: any): Pet {
  return {
    id: item["id"],
    name: item["name"],
  };
}
