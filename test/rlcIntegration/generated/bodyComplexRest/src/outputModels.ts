// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface BasicDefOutput {
  /** Basic Id */
  id?: number;
  /** Name property with a very long description that does not fit on a single line and a line break. */
  name?: string;
  color?: "cyan" | "Magenta" | "YELLOW" | "blacK";
}

export interface ErrorModelOutput {
  status?: number;
  message?: string;
}

export interface IntWrapperOutput {
  field1?: number;
  field2?: number;
}

export interface LongWrapperOutput {
  field1?: number;
  field2?: number;
}

export interface FloatWrapperOutput {
  field1?: number;
  field2?: number;
}

export interface DoubleWrapperOutput {
  field1?: number;
  field_56_zeros_after_the_dot_and_negative_zero_before_dot_and_this_is_a_long_field_name_on_purpose?: number;
}

export interface BooleanWrapperOutput {
  field_true?: boolean;
  field_false?: boolean;
}

export interface StringWrapperOutput {
  field?: string;
  empty?: string;
  null?: string;
}

export interface DateWrapperOutput {
  field?: string;
  leap?: string;
}

export interface DatetimeWrapperOutput {
  field?: string;
  now?: string;
}

export interface Datetimerfc1123WrapperOutput {
  field?: string;
  now?: string;
}

export interface DurationWrapperOutput {
  field?: string;
}

export interface ByteWrapperOutput {
  /** Value may contain base64 encoded characters */
  field?: string;
}

export interface ArrayWrapperOutput {
  array?: Array<string>;
}

export interface DictionaryWrapperOutput {
  /** Dictionary of <string> */
  defaultProgram?: Record<string, string>;
}

export interface SiameseOutput extends CatOutput {
  breed?: string;
}

export interface CatOutput extends PetOutput {
  color?: string;
  hates?: Array<DogOutput>;
}

export interface DogOutput extends PetOutput {
  food?: string;
}

export interface PetOutput {
  id?: number;
  name?: string;
}

export interface FishOutputParent {
  species?: string;
  length: number;
  siblings?: Array<FishOutput>;
  fishtype:
    | "Fish"
    | "salmon"
    | "smart_salmon"
    | "shark"
    | "sawshark"
    | "goblin"
    | "cookiecuttershark";
}

export interface DotFishOutputParent {
  species?: string;
  "fish.type": "DotFish" | "DotSalmon";
}

export interface DotFishMarketOutput {
  sampleSalmon?: DotSalmonOutput;
  salmons?: Array<DotSalmonOutput>;
  sampleFish?: DotFishOutput;
  fishes?: Array<DotFishOutput>;
}

export interface DotSalmonOutput extends DotFishOutputParent {
  location?: string;
  iswild?: boolean;
  "fish.type": "DotSalmon";
}

export interface SalmonOutputParent extends FishOutputParent {
  location?: string;
  iswild?: boolean;
  fishtype: "salmon" | "smart_salmon";
}

export interface ReadonlyObjOutput {
  id?: string;
  size?: number;
}

export interface MyBaseTypeOutputParent {
  propB1?: string;
  helper?: MyBaseHelperTypeOutput;
  kind: "MyBaseType" | "Kind1";
}

export interface MyBaseHelperTypeOutput {
  propBH1?: string;
}

export interface SmartSalmonOutput
  extends SalmonOutputParent,
    Record<string, unknown> {
  college_degree?: string;
  fishtype: "smart_salmon";
}

export interface SharkOutputParent extends FishOutputParent {
  age?: number;
  birthday: string;
  fishtype: "shark" | "sawshark" | "goblin" | "cookiecuttershark";
}

export interface SawsharkOutput extends SharkOutputParent {
  /** Value may contain base64 encoded characters */
  picture?: string;
  fishtype: "sawshark";
}

export interface GoblinsharkOutput extends SharkOutputParent {
  jawsize?: number;
  /** Colors possible */
  color?: "pink" | "gray" | "brown" | "RED" | "red";
  fishtype: "goblin";
}

export interface CookiecuttersharkOutput extends SharkOutputParent {
  fishtype: "cookiecuttershark";
}

export interface MyDerivedTypeOutput extends MyBaseTypeOutputParent {
  propD1?: string;
  kind: "Kind1";
}

export type FishOutput =
  | SalmonOutput
  | SmartSalmonOutput
  | SharkOutput
  | SawsharkOutput
  | GoblinsharkOutput
  | CookiecuttersharkOutput;
export type DotFishOutput = DotSalmonOutput;
export type SalmonOutput = SalmonOutputParent | SmartSalmonOutput;
export type MyBaseTypeOutput = MyDerivedTypeOutput;
export type SharkOutput =
  | SharkOutputParent
  | SawsharkOutput
  | GoblinsharkOutput
  | CookiecuttersharkOutput;
