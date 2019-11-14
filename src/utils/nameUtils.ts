export function getCamelCase(value:string):string{
  return (value.substr(0, 1).toLowerCase() +  value.substr(1));
}

export function getClientFileName(title:string):string {
  return getCamelCase(title);
}

export function getClientContextClassName(title:string):string {
  return `${title}Context`;
}

export function getClientContextFileName(title:string):string {
  return `${getClientFileName(title)}Context`;
}

export function getModelsName(title:string):string {
  return `${title.replace('Client', '')}Models`;
}

export function getMappersName(title:string):string {
  return `${title.replace('Client', '')}Mappers`;
}

export function getPackageNameModified(packageName:string):string {
  return `${packageName.replace('@azure/', '')}`;
}