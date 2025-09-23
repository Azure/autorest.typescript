import {
  HierarchyBuildingClient,
  Pet,
  Dog
} from "./generated/azure/client-generator-core/hierarchy-building/src/index.js";
import { assert } from "chai";

describe("Azure ClientGeneratorCore Hierarchy Building", () => {
  let client: HierarchyBuildingClient;

  beforeEach(() => {
    client = new HierarchyBuildingClient({
      endpoint: "http://localhost:3002",
      allowInsecureConnection: true
    });
  });
  const samplePet: Pet = {
    kind: "pet",
    name: "Buddy",
    trained: true
  };
  const sampleDog: Dog = {
    kind: "dog",
    name: "Rex",
    trained: true,
    breed: "German Shepherd"
  };
  describe("Animal Operations", () => {
    it("should update pet as animal", async () => {
      const result = await client.animalOperations.updatePetAsAnimal(samplePet);
      assert.equal(result.kind, "pet");
      assert.equal(result.name, "Buddy");
    });

    it("should update dog as animal", async () => {
      const result = await client.animalOperations.updateDogAsAnimal(sampleDog);
      assert.equal(result.kind, "dog");
      assert.equal(result.name, "Rex");
    });
  });

  describe("Pet Operations", () => {
    it("should update pet as pet", async () => {
      const result = await client.petOperations.updatePetAsPet(samplePet);
      assert.equal(result.kind, "pet");
      assert.equal(result.name, "Buddy");
      assert.equal(result.trained, true);
    });

    it("should update dog as pet", async () => {
      const result = await client.petOperations.updateDogAsPet(sampleDog);
      assert.equal(result.kind, "dog");
      assert.equal(result.name, "Rex");
      assert.equal(result.trained, true);
    });
  });

  describe("Dog Operations", () => {
    it("should update dog as dog", async () => {
      const result = await client.dogOperations.updateDogAsDog(sampleDog);
      assert.equal(result.kind, "dog");
      assert.equal(result.name, "Rex");
      assert.equal(result.trained, true);
      assert.equal(result.breed, "German Shepherd");
    });
  });
});
