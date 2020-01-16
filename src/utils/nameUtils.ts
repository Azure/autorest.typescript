// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const ReservedModelNames = ["Error"];

export enum CasingConvention {
  Pascal,
  Camel
}

export enum NameType {
  Class,
  File,
  Interface,
  Property
}

export function guardReservedNames(name: string): string {
  return ReservedModelNames.indexOf(name) > -1 ? `${name}Model` : name;
}

export function normalizeName(name: string, nameType: NameType): string {
  const casingConvention = getCasingConvention(nameType);

  let parts = getNameParts(name);
  const [firstPart, ...otherParts] = parts;
  const normalizedFirstPart = toCasing(firstPart, casingConvention);
  const normalizedParts = (otherParts || [])
    .map(part => toCasing(part, CasingConvention.Pascal))
    .join("");

  const normalized = `${normalizedFirstPart}${normalizedParts}`;
  return guardReservedNames(normalized);
}

export function getModelsName(title: string): string {
  const spaceRemovedTitle = title.replace(/ /g, "");
  return `${spaceRemovedTitle.replace("Client", "")}Models`;
}

export function getMappersName(title: string): string {
  const spaceRemovedTitle = title.replace(/ /g, "");
  return `${spaceRemovedTitle.replace("Client", "")}Mappers`;
}

function getCasingConvention(nameType: NameType) {
  switch (nameType) {
    case NameType.Class:
    case NameType.Interface:
      return CasingConvention.Pascal;
    case NameType.File:
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
  let parts = name.split(/[-._ ]+/);

  return parts.length > 0 ? parts : [name];
}
