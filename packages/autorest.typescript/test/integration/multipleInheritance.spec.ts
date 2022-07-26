import { MultipleInheritanceClient } from "./generated/multipleInheritance/src";
import { assert } from "chai";
import { responseStatusChecker } from "../utils/responseStatusChecker";

describe("MultipleInheritance", () => {
  let client: MultipleInheritanceClient;

  beforeEach(() => {
    client = new MultipleInheritanceClient({ allowInsecureConnection: true });
  });

  it("should get a pet", async () => {
    const result = await client.getPet(responseStatusChecker);
    assert.deepEqual(result, {
      name: "Peanut"
    });
  });

  it("should put a pet", async () => {
    const result = await client.putPet(
      { name: "Butter" },
      responseStatusChecker
    );
    assert.deepEqual(result.body, "Pet was correct!");
  });

  it("should get a Horse", async () => {
    const result = await client.getHorse(responseStatusChecker);
    assert.deepEqual(result, {
      name: "Fred",
      isAShowHorse: true
    });
  });

  it("should put a Horse", async () => {
    const result = await client.putHorse(
      {
        name: "General",
        isAShowHorse: false
      },
      responseStatusChecker
    );
    assert.deepEqual(result.body, "Horse was correct!");
  });

  it("should get a Feline", async () => {
    const result = await client.getFeline(responseStatusChecker);
    assert.deepEqual(result, {
      meows: true,
      hisses: true
    });
  });

  it("should put a Feline", async () => {
    const result = await client.putFeline(
      {
        meows: false,
        hisses: true
      },
      responseStatusChecker
    );
    assert.deepEqual(result.body, "Feline was correct!");
  });

  it("should get a cat", async () => {
    const result = await client.getCat(responseStatusChecker);
    assert.deepEqual(result, {
      name: "Whiskers",
      meows: true,
      hisses: true,
      likesMilk: true
    });
  });

  it("should put a Cat", async () => {
    const result = await client.putCat(
      {
        name: "Boots",
        likesMilk: false,
        meows: true,
        hisses: false
      },
      responseStatusChecker
    );
    assert.deepEqual(result.body, "Cat was correct!");
  });

  it("should get a kitten", async () => {
    const result = await client.getKitten(responseStatusChecker);
    assert.deepEqual(result, {
      name: "Gatito",
      meows: true,
      hisses: true,
      likesMilk: true,
      eatsMiceYet: false
    });
  });

  it("should put a kitten(", async () => {
    const result = await client.putKitten(
      {
        name: "Kitty",
        likesMilk: false,
        meows: true,
        hisses: false,
        eatsMiceYet: true
      },
      responseStatusChecker
    );
    assert.deepEqual(result.body, "Kitten was correct!");
  });
});
