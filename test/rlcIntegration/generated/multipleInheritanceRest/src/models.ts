// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface Horse extends Pet {
  isAShowHorse?: boolean;
}

export interface Pet {
  name: string;
}

export interface Feline {
  meows?: boolean;
  hisses?: boolean;
}

export interface Cat extends Pet, Feline {
  likesMilk?: boolean;
}

export interface Kitten extends Cat {
  eatsMiceYet?: boolean;
}
