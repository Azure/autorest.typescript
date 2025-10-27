import { ClientOptions } from '@azure-rest/core-client';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

export declare interface Animal {
    kind: string;
    name: string;
}

export declare interface AnimalOperationsOperations {
    updateDogAsAnimal: (animal: AnimalUnion, options?: AnimalOperationsUpdateDogAsAnimalOptionalParams) => Promise<AnimalUnion>;
    updatePetAsAnimal: (animal: AnimalUnion, options?: AnimalOperationsUpdatePetAsAnimalOptionalParams) => Promise<AnimalUnion>;
}

export declare interface AnimalOperationsUpdateDogAsAnimalOptionalParams extends OperationOptions {
}

export declare interface AnimalOperationsUpdatePetAsAnimalOptionalParams extends OperationOptions {
}

export declare type AnimalUnion = PetUnion | Animal;

export declare interface Dog extends Pet {
    kind: "dog";
    breed: string;
}

export declare interface DogOperationsOperations {
    updateDogAsDog: (dog: Dog, options?: DogOperationsUpdateDogAsDogOptionalParams) => Promise<Dog>;
}

export declare interface DogOperationsUpdateDogAsDogOptionalParams extends OperationOptions {
}

export declare class HierarchyBuildingClient {
    private _client;
    readonly pipeline: Pipeline;
    constructor(options?: HierarchyBuildingClientOptionalParams);
    readonly dogOperations: DogOperationsOperations;
    readonly petOperations: PetOperationsOperations;
    readonly animalOperations: AnimalOperationsOperations;
}

export declare interface HierarchyBuildingClientOptionalParams extends ClientOptions {
}

export declare interface Pet extends Animal {
    kind: "pet" | "dog";
    trained: boolean;
}

export declare interface PetOperationsOperations {
    updateDogAsPet: (pet: PetUnion, options?: PetOperationsUpdateDogAsPetOptionalParams) => Promise<PetUnion>;
    updatePetAsPet: (pet: PetUnion, options?: PetOperationsUpdatePetAsPetOptionalParams) => Promise<PetUnion>;
}

export declare interface PetOperationsUpdateDogAsPetOptionalParams extends OperationOptions {
}

export declare interface PetOperationsUpdatePetAsPetOptionalParams extends OperationOptions {
}

export declare type PetUnion = Dog | Pet;

export { }
