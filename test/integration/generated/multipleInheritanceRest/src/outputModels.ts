// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface HorseOutput extends PetOutput {
  isAShowHorse?: boolean;
}

export interface PetOutput {
  name: string;
}

export interface ErrorModelOutput {
  status?: number;
  message?: string;
}

export interface FelineOutput {
  meows?: boolean;
  hisses?: boolean;
}

export interface CatOutput extends PetOutput, FelineOutput {
  likesMilk?: boolean;
}

export interface KittenOutput extends CatOutput {
  eatsMiceYet?: boolean;
}
