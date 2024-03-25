// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface ClientNameModel {
  /** Pass in true */
  clientName: boolean;
}

export interface LanguageClientNameModel {
  /** Pass in true */
  tSName: boolean;
}

export interface ClientNameAndJsonEncodedNameModel {
  /** Pass in true */
  clientName: boolean;
}

/** Type of ClientExtensibleEnum */
/** "value1" */
export type ClientExtensibleEnum = string;
/** Type of ExtensibleEnum */
/** "value1", "value2" */
export type ExtensibleEnum = string;

export interface ClientModel {
  /** Pass in true */
  defaultName: boolean;
}

export interface TSModel {
  /** Pass in true */
  defaultName: boolean;
}
