// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface BasicDef {
  /** Basic Id */
  id?: number;
  /** Name property with a very long description that does not fit on a single line and a line break. */
  name?: string;
  color?: "cyan" | "Magenta" | "YELLOW" | "blacK";
}

export interface ErrorModel {
  status?: number;
  message?: string;
}

export interface IntWrapper {
  field1?: number;
  field2?: number;
}

export interface LongWrapper {
  field1?: number;
  field2?: number;
}

export interface FloatWrapper {
  field1?: number;
  field2?: number;
}

export interface DoubleWrapper {
  field1?: number;
  field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose?: number;
}

export interface BooleanWrapper {
  fieldTrue?: boolean;
  fieldFalse?: boolean;
}

export interface StringWrapper {
  field?: string;
  empty?: string;
  null?: string;
}

export interface DateWrapper {
  field?: Date;
  leap?: Date;
}

export interface DatetimeWrapper {
  field?: Date;
  now?: Date;
}

export interface Datetimerfc1123Wrapper {
  field?: Date;
  now?: Date;
}

export interface DurationWrapper {
  field?: string;
}

export interface ByteWrapper {
  /** Value may contain base64 encoded characters */
  field?: string;
}

export interface ArrayWrapper {
  array?: Array<string>;
}

export interface DictionaryWrapper {
  /** Dictionary of <string> */
  defaultProgram?: Record<string, string>;
}

export interface Pet {
  id?: number;
  name?: string;
}

export interface Cat extends Pet {
  color?: string;
  hates?: Array<Dog>;
}

export interface Dog extends Pet {
  food?: string;
}

export interface Siamese extends Cat {
  breed?: string;
}

export interface FishBase {
  species?: string;
  length: number;
  siblings?: Array<Fish>;
  fishtype:
    | "salmon"
    | "smart_salmon"
    | "shark"
    | "sawshark"
    | "goblin"
    | "cookiecuttershark";
}

export interface DotFishBase {
  fishType: string;
  species?: string;
  "fish.type": "DotSalmon";
}

export interface DotFishMarket {
  sampleSalmon?: DotSalmon;
  salmons?: Array<DotSalmon>;
  sampleFish?: DotFish;
  fishes?: Array<DotFish>;
}

export interface DotSalmon extends DotFishBase {
  location?: string;
  iswild?: boolean;
  "fish.type": "DotSalmon";
}

export interface SalmonBase extends FishBase {
  location?: string;
  iswild?: boolean;
  fishtype: "salmon" | "smart_salmon";
}

export interface ReadonlyObj {
  id?: string;
  size?: number;
}

export interface MyBaseTypeBase {
  propB1?: string;
  helper?: MyBaseHelperType;
  kind: "Kind1";
}

export interface MyBaseHelperType {
  propBH1?: string;
}

export interface SmartSalmon extends SalmonBase, Record<string, unknown> {
  collegeDegree?: string;
  fishtype: "smart_salmon";
}

export interface SharkBase extends FishBase {
  age?: number;
  birthday: Date;
  fishtype: "shark" | "sawshark" | "goblin" | "cookiecuttershark";
}

export interface Sawshark extends SharkBase {
  /** Value may contain base64 encoded characters */
  picture?: string;
  fishtype: "sawshark";
}

export interface Goblinshark extends SharkBase {
  jawsize?: number;
  /** Colors possible */
  color?: "pink" | "gray" | "brown" | "RED" | "red";
  fishtype: "goblin";
}

export interface Cookiecuttershark extends SharkBase {
  fishtype: "cookiecuttershark";
}

export interface MyDerivedType extends MyBaseTypeBase {
  propD1?: string;
  kind: "Kind1";
}

export type Fish =
  | Salmon
  | SmartSalmon
  | Shark
  | Sawshark
  | Goblinshark
  | Cookiecuttershark;
export type DotFish = DotSalmon;
export type Salmon = SalmonBase | SmartSalmon;
export type MyBaseType = MyDerivedType;
export type Shark = SharkBase | Sawshark | Goblinshark | Cookiecuttershark;
