// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  SameAsModel as SameAsModelRest,
  And as AndRest,
  As as AsRest,
  Assert as AssertRest,
  Async as AsyncRest,
  Await as AwaitRest,
  Break as BreakRest,
  Class as ClassRest,
  Constructor as ConstructorRest,
  Continue as ContinueRest,
  Def as DefRest,
  Del as DelRest,
  Elif as ElifRest,
  Else as ElseRest,
  Except as ExceptRest,
  Exec as ExecRest,
  Finally as FinallyRest,
  For as ForRest,
  From as FromRest,
  Global as GlobalRest,
  If as IfRest,
  Import as ImportRest,
  In as InRest,
  Is as IsRest,
  Lambda as LambdaRest,
  Not as NotRest,
  Or as OrRest,
  Pass as PassRest,
  Raise as RaiseRest,
  Return as ReturnRest,
  Try as TryRest,
  While as WhileRest,
  With as WithRest,
  Yield as YieldRest,
} from "../rest/index.js";

export interface SameAsModel {
  sameAsModel: string;
}

export function sameAsModelSerializer(item: SameAsModel): SameAsModelRest {
  return {
    SameAsModel: item["sameAsModel"],
  };
}

export interface And {
  name: string;
}

export function andSerializer(item: And): AndRest {
  return {
    name: item["name"],
  };
}

export interface As {
  name: string;
}

export function asSerializer(item: As): AsRest {
  return {
    name: item["name"],
  };
}

export interface Assert {
  name: string;
}

export function assertSerializer(item: Assert): AssertRest {
  return {
    name: item["name"],
  };
}

export interface Async {
  name: string;
}

export function asyncSerializer(item: Async): AsyncRest {
  return {
    name: item["name"],
  };
}

export interface Await {
  name: string;
}

export function awaitSerializer(item: Await): AwaitRest {
  return {
    name: item["name"],
  };
}

export interface Break {
  name: string;
}

export function breakSerializer(item: Break): BreakRest {
  return {
    name: item["name"],
  };
}

export interface Class {
  name: string;
}

export function classSerializer(item: Class): ClassRest {
  return {
    name: item["name"],
  };
}

export interface Constructor {
  name: string;
}

export function constructorSerializer(item: Constructor): ConstructorRest {
  return {
    name: item["name"],
  };
}

export interface Continue {
  name: string;
}

export function continueSerializer(item: Continue): ContinueRest {
  return {
    name: item["name"],
  };
}

export interface Def {
  name: string;
}

export function defSerializer(item: Def): DefRest {
  return {
    name: item["name"],
  };
}

export interface Del {
  name: string;
}

export function delSerializer(item: Del): DelRest {
  return {
    name: item["name"],
  };
}

export interface Elif {
  name: string;
}

export function elifSerializer(item: Elif): ElifRest {
  return {
    name: item["name"],
  };
}

export interface Else {
  name: string;
}

export function elseSerializer(item: Else): ElseRest {
  return {
    name: item["name"],
  };
}

export interface Except {
  name: string;
}

export function exceptSerializer(item: Except): ExceptRest {
  return {
    name: item["name"],
  };
}

export interface Exec {
  name: string;
}

export function execSerializer(item: Exec): ExecRest {
  return {
    name: item["name"],
  };
}

export interface Finally {
  name: string;
}

export function finallySerializer(item: Finally): FinallyRest {
  return {
    name: item["name"],
  };
}

export interface For {
  name: string;
}

export function forSerializer(item: For): ForRest {
  return {
    name: item["name"],
  };
}

export interface From {
  name: string;
}

export function fromSerializer(item: From): FromRest {
  return {
    name: item["name"],
  };
}

export interface Global {
  name: string;
}

export function globalSerializer(item: Global): GlobalRest {
  return {
    name: item["name"],
  };
}

export interface If {
  name: string;
}

export function ifSerializer(item: If): IfRest {
  return {
    name: item["name"],
  };
}

export interface Import {
  name: string;
}

export function importSerializer(item: Import): ImportRest {
  return {
    name: item["name"],
  };
}

export interface In {
  name: string;
}

export function inSerializer(item: In): InRest {
  return {
    name: item["name"],
  };
}

export interface Is {
  name: string;
}

export function isSerializer(item: Is): IsRest {
  return {
    name: item["name"],
  };
}

export interface Lambda {
  name: string;
}

export function lambdaSerializer(item: Lambda): LambdaRest {
  return {
    name: item["name"],
  };
}

export interface Not {
  name: string;
}

export function notSerializer(item: Not): NotRest {
  return {
    name: item["name"],
  };
}

export interface Or {
  name: string;
}

export function orSerializer(item: Or): OrRest {
  return {
    name: item["name"],
  };
}

export interface Pass {
  name: string;
}

export function passSerializer(item: Pass): PassRest {
  return {
    name: item["name"],
  };
}

export interface Raise {
  name: string;
}

export function raiseSerializer(item: Raise): RaiseRest {
  return {
    name: item["name"],
  };
}

export interface Return {
  name: string;
}

export function returnSerializer(item: Return): ReturnRest {
  return {
    name: item["name"],
  };
}

export interface Try {
  name: string;
}

export function trySerializer(item: Try): TryRest {
  return {
    name: item["name"],
  };
}

export interface While {
  name: string;
}

export function whileSerializer(item: While): WhileRest {
  return {
    name: item["name"],
  };
}

export interface With {
  name: string;
}

export function withSerializer(item: With): WithRest {
  return {
    name: item["name"],
  };
}

export interface Yield {
  name: string;
}

export function yieldSerializer(item: Yield): YieldRest {
  return {
    name: item["name"],
  };
}
