// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ClientNameModel {
  /** Pass in true */
  clientName: boolean;
}

export function clientNameModelSerializer(
  item: ClientNameModel,
): Record<string, unknown> {
  return {
    defaultName: item["clientName"],
  };
}

export interface LanguageClientNameModel {
  /** Pass in true */
  tSName: boolean;
}

export function languageClientNameModelSerializer(
  item: LanguageClientNameModel,
): Record<string, unknown> {
  return {
    defaultName: item["tSName"],
  };
}

export interface ClientNameAndJsonEncodedNameModel {
  /** Pass in true */
  clientName: boolean;
}

export function clientNameAndJsonEncodedNameModelSerializer(
  item: ClientNameAndJsonEncodedNameModel,
): Record<string, unknown> {
  return {
    wireName: item["clientName"],
  };
}

/** Type of ClientExtensibleEnum */
export type ClientExtensibleEnum = "value1";
/** Type of ExtensibleEnum */
export type ExtensibleEnum = "value1" | "value2";

export interface ClientModel {
  /** Pass in true */
  defaultName: boolean;
}

export function clientModelSerializer(
  item: ClientModel,
): Record<string, unknown> {
  return {
    defaultName: item["defaultName"],
  };
}

export interface TSModel {
  /** Pass in true */
  defaultName: boolean;
}

export function tSModelSerializer(item: TSModel): Record<string, unknown> {
  return {
    defaultName: item["defaultName"],
  };
}
