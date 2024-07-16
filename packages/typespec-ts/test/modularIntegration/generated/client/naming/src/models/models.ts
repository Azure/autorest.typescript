// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ClientNameModel as ClientNameModelRest,
  LanguageClientNameModel as LanguageClientNameModelRest,
  ClientNameAndJsonEncodedNameModel as ClientNameAndJsonEncodedNameModelRest,
  ModelWithClientClientName as ModelWithClientClientNameRest,
  ModelWithLanguageClientName as ModelWithLanguageClientNameRest,
} from "../rest/index.js";

export interface ClientNameModel {
  /** Pass in true */
  clientName: boolean;
}

export function clientNameModelSerializer(
  item: ClientNameModel,
): ClientNameModelRest {
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
): LanguageClientNameModelRest {
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
): ClientNameAndJsonEncodedNameModelRest {
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
): ModelWithClientClientNameRest {
  return {
    defaultName: item["defaultName"],
  };
}

export interface TSModel {
  /** Pass in true */
  defaultName: boolean;
}

export function tSModelSerializer(
  item: TSModel,
): ModelWithLanguageClientNameRest {
  return {
    defaultName: item["defaultName"],
  };
}
