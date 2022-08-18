export interface ErrorModelOutput {
  code: number;
  message: string;
}

export interface PetOutput {
  name: string;
  tag?: string;
  age: number;
}

export interface PetListResultsOutput {
  items: array;
  nextLink?: string;
}

export interface Output {
  name: string;
  tag?: string;
  age: number;
}

export interface ToyOutput {
  id: number;
  petId: number;
  name: string;
}

export interface ToyListResultsOutput {
  items: array;
  nextLink?: string;
}
