// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

<<<<<<< HEAD
import { A0 as A0Rest, A1 as A1Rest, A2 as A2Rest } from "../rest/index.js";

export interface A0 {
  prop1: string;
}

export function a0Serializer(item: A0): A0Rest {
=======
export interface A {
  prop1: string;
}

export function aSerializer(item: A): Record<string, unknown> {
>>>>>>> main
  return {
    prop1: item["prop1"],
  };
}

export interface A1 {
  prop2: string;
}

<<<<<<< HEAD
export function a1Serializer(item: A1): A1Rest {
=======
export function bASerializer(item: BA): Record<string, unknown> {
>>>>>>> main
  return {
    prop2: item["prop2"],
  };
}

export interface A2 {
  prop3: string;
}

<<<<<<< HEAD
export function a2Serializer(item: A2): A2Rest {
=======
export function bEASerializer(item: BEA): Record<string, unknown> {
>>>>>>> main
  return {
    prop3: item["prop3"],
  };
}
