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
  items: Array<PetOutput>;
  nextLink?: string;
}

export interface ToyOutput {
  id: number;
  petId: number;
  name: string;
}

export interface ToyListResultsOutput {
  items: Array<ToyOutput>;
  nextLink?: string;
}
