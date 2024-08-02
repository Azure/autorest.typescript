// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface SameAsModel {
  sameAsModel: string;
}

export function sameAsModelSerializer(
  item: SameAsModel,
): Record<string, unknown> {
  return {
    SameAsModel: item["sameAsModel"],
  };
}

export interface And {
  name: string;
}

export function andSerializer(item: And): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface As {
  name: string;
}

export function asSerializer(item: As): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Assert {
  name: string;
}

export function assertSerializer(item: Assert): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Async {
  name: string;
}

export function asyncSerializer(item: Async): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Await {
  name: string;
}

export function awaitSerializer(item: Await): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Break {
  name: string;
}

export function breakSerializer(item: Break): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Class {
  name: string;
}

export function classSerializer(item: Class): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Constructor {
  name: string;
}

export function constructorSerializer(
  item: Constructor,
): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Continue {
  name: string;
}

export function continueSerializer(item: Continue): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Def {
  name: string;
}

export function defSerializer(item: Def): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Del {
  name: string;
}

export function delSerializer(item: Del): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Elif {
  name: string;
}

export function elifSerializer(item: Elif): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Else {
  name: string;
}

export function elseSerializer(item: Else): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Except {
  name: string;
}

export function exceptSerializer(item: Except): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Exec {
  name: string;
}

export function execSerializer(item: Exec): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Finally {
  name: string;
}

export function finallySerializer(item: Finally): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface For {
  name: string;
}

export function forSerializer(item: For): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface From {
  name: string;
}

export function fromSerializer(item: From): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Global {
  name: string;
}

export function globalSerializer(item: Global): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface If {
  name: string;
}

export function ifSerializer(item: If): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Import {
  name: string;
}

export function importSerializer(item: Import): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface In {
  name: string;
}

export function inSerializer(item: In): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Is {
  name: string;
}

export function isSerializer(item: Is): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Lambda {
  name: string;
}

export function lambdaSerializer(item: Lambda): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Not {
  name: string;
}

export function notSerializer(item: Not): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Or {
  name: string;
}

export function orSerializer(item: Or): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Pass {
  name: string;
}

export function passSerializer(item: Pass): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Raise {
  name: string;
}

export function raiseSerializer(item: Raise): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Return {
  name: string;
}

export function returnSerializer(item: Return): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Try {
  name: string;
}

export function trySerializer(item: Try): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface While {
  name: string;
}

export function whileSerializer(item: While): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface With {
  name: string;
}

export function withSerializer(item: With): Record<string, unknown> {
  return {
    name: item["name"],
  };
}

export interface Yield {
  name: string;
}

export function yieldSerializer(item: Yield): Record<string, unknown> {
  return {
    name: item["name"],
  };
}
