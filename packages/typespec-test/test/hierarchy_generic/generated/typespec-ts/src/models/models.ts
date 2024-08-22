// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface A {
  propRename: string;
}

export function aSerializer(input: A): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

export interface A_1 {
  prop2: string;
}

export function aSerializer_1(input: A_1): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

export interface A_2 {
  prop3: string;
}

export function aSerializer_2(input: A_2): unknown {
  console.log(input);
  throw new Error("Not implemented");
}

/** Initialization class for the client */
export interface FooClientOptions {
  /** Service host */
  endpoint: string;
}

export function fooClientOptionsSerializer(input: {
  endpoint: string;
}): unknown {
  console.log(input);
  throw new Error("Not implemented");
}
