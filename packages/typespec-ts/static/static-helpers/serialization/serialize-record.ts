export function serializeRecord(item: any, excludeProperties: string[] = []) {
  let res: any = {};
  for (let key of Object.keys(item)) {
    if (!excludeProperties.includes(key)) {
      res[key] = item[key] as any;
    }
  }
  return Object.keys(res).length === 0 ? undefined : res;
}
