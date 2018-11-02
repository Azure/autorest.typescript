// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.

import * as assert from "assert";
import { DaysOfWeekExtensibleEnum, IntEnum } from "./generated/ExtensibleEnum/models";
import { PetStoreInc } from "./generated/ExtensibleEnum/petStoreInc";


const testClient = new PetStoreInc();

describe("Extensible enums", function () {
  it("should handle expectedEnum", async function () {
    const pet = await testClient.pet.getByPetId("tommy");
    assert.strictEqual(pet.intEnum, "1");
    assert.strictEqual(pet.daysOfWeek, "Monday");
    assert.strictEqual(pet.name, "Tommy Tomson");
  });

  it("should handle unexpectedEnum", async function () {
    const pet = await testClient.pet.getByPetId("casper");
    assert.strictEqual(pet.daysOfWeek, "Weekend");
    assert.strictEqual(pet.intEnum, "2");
    assert.strictEqual(pet.name, "Casper Ghosty");
  });

  it("should handle allowedValueEnum", async function () {
    const pet = await testClient.pet.getByPetId("scooby");
    assert.strictEqual(pet.daysOfWeek, "Thursday");
    assert.strictEqual(pet.intEnum, "2.1");
    assert.strictEqual(pet.name, "Scooby Scarface");
  });

  it("should handle roundTripEnum", async function () {
    const response = await testClient.pet.addPet({
      petParam: {
        name: "Retriever",
        daysOfWeek: "Funday" as DaysOfWeekExtensibleEnum,
        intEnum: "42" as IntEnum
      }
    });

    assert.strictEqual(response.name, "Retriever");
    assert.strictEqual(response.daysOfWeek, "Funday");
    assert.strictEqual(response.intEnum, "42");
  });
});