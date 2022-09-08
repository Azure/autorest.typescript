// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface BasicDef {
  /** Basic Id */
  id?: number;
  /** Name property with a very long description that does not fit on a single line and a line break. */
  name?: string;
  color?: "cyan" | "Magenta" | "YELLOW" | "blacK";
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
  field_56_zeros_after_the_dot_and_negative_zero_before_dot_and_this_is_a_long_field_name_on_purpose?: number;
}

export interface BooleanWrapper {
  field_true?: boolean;
  field_false?: boolean;
}

export interface StringWrapper {
  field?: string;
  empty?: string;
  null?: string;
}

export interface DateWrapper {
  field?: Date | string;
  leap?: Date | string;
}

export interface DatetimeWrapper {
  field?: Date | string;
  now?: Date | string;
}

export interface Datetimerfc1123Wrapper {
  field?: Date | string;
  now?: Date | string;
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

export interface Siamese extends Cat {
  breed?: string;
}

export interface Cat extends Pet {
  color?: string;
  hates?: Array<Dog>;
}

export interface Dog extends Pet {
  food?: string;
}

export interface Pet {
  id?: number;
  name?: string;
}

export interface FishParent {
  species?: string;
  length: number;
  siblings?: Array<Fish>;
  fishtype:
    | "Fish"
    | "salmon"
    | "smart_salmon"
    | "shark"
    | "sawshark"
    | "goblin"
    | "cookiecuttershark";
}

export interface SalmonParent extends FishParent {
  location?: string;
  iswild?: boolean;
  fishtype: "salmon" | "smart_salmon";
}

export interface ReadonlyObj {
  id?: string;
  size?: number;
}

export interface SmartSalmon extends SalmonParent, Record<string, unknown> {
  college_degree?: string;
  fishtype: "smart_salmon";
}

export interface SharkParent extends FishParent {
  age?: number;
  birthday: Date | string;
  fishtype: "shark" | "sawshark" | "goblin" | "cookiecuttershark";
}

export interface Sawshark extends SharkParent {
  /** Value may contain base64 encoded characters */
  picture?: string;
  fishtype: "sawshark";
}

export interface Goblinshark extends SharkParent {
  jawsize?: number;
  /** Colors possible */
  color?: "pink" | "gray" | "brown" | "RED" | "red";
  fishtype: "goblin";
}

export interface Cookiecuttershark extends SharkParent {
  fishtype: "cookiecuttershark";
}

export type Fish =
  | Salmon
  | SmartSalmon
  | Shark
  | Sawshark
  | Goblinshark
  | Cookiecuttershark;
export type Salmon = SalmonParent | SmartSalmon;
export type Shark = SharkParent | Sawshark | Goblinshark | Cookiecuttershark;
