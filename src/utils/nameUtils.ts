// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export enum CasingConvention {
  Pascal,
  Camel
}

export enum NameType {
  Class,
  Property
}

export function normalizeName(name: string, nameType: NameType): string {
  const casingConvention = getCasingConvention(nameType);

  let parts = getNameParts(name);
  const [firstPart, ...otherParts] = parts;
  const normalizedFirstPart = toCasing(firstPart, casingConvention);
  const normalizedParts = (otherParts || [])
    .map(part => toCasing(part, CasingConvention.Pascal))
    .join("");
  return `${normalizedFirstPart}${normalizedParts}`;
}

export function getCamelCaseWithUpperCaseBeginning(value: string): string {
  const spaceRemovedValue = value.replace(/ /g, "");
  return (
    spaceRemovedValue.substr(0, 1).toUpperCase() + spaceRemovedValue.substr(1)
  );
}

export function getClientFileName(title: string): string {
  return toCasing(title, CasingConvention.Pascal);
}

export function getPackageOutputName(packageName: string): string {
  packageName = packageName.replace(/@azure\//g, "");
  const splitPackageName = packageName.split("-");
  let result: string = "";
  splitPackageName.forEach((str, index) => {
    result = result + str.substr(0, 1).toUpperCase() + str.substr(1);
    if (index != splitPackageName.length - 1) {
      result = result + "-";
    }
  });
  return result;
}

export function getClientClassName(title: string): string {
  const spaceRemovedTitle = title.replace(/ /g, "");
  return spaceRemovedTitle;
}

export function getClientContextClassName(title: string): string {
  const spaceRemovedTitle = title.replace(/ /g, "");
  return `${spaceRemovedTitle}Context`;
}

export function getClientContextFileName(title: string): string {
  return `${getClientFileName(title)}Context`;
}

export function getModelsName(title: string): string {
  const spaceRemovedTitle = title.replace(/ /g, "");
  return `${spaceRemovedTitle.replace("Client", "")}Models`;
}

export function getMappersName(title: string): string {
  const spaceRemovedTitle = title.replace(/ /g, "");
  return `${spaceRemovedTitle.replace("Client", "")}Mappers`;
}

export function getPackageNameModified(packageName: string): string {
  return `${packageName.replace("@azure/", "")}`;
}

function getCasingConvention(nameType: NameType) {
  switch (nameType) {
    case NameType.Class:
      return CasingConvention.Pascal;
    case NameType.Property:
      return CasingConvention.Camel;
  }
}

/**
 * TODO: Improve this function to handle cases such as TEST -> test. Current basic implementation
 * results in TEST -> tEST
 */
function toCasing(value: string, casing: CasingConvention): string {
  const firstChar =
    casing === CasingConvention.Pascal
      ? value.charAt(0).toUpperCase()
      : value.charAt(0).toLocaleLowerCase();
  return `${firstChar}${value.substring(1)}`;
}

function getNameParts(name: string) {
  let parts = name.split(/[-_ ]+/);

  return parts.length > 0 ? parts : [name];
}
