import { assert } from "chai";
import { SpecialWordsClient } from "./generated/special-words/src/index.js";
// Load the .env file if it exists
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env["PORT"] || "3000";
describe("Special Words Client", () => {
  let client: SpecialWordsClient;

  beforeEach(() => {
    client = new SpecialWordsClient({
      allowInsecureConnection: true,
      endpoint: `http://localhost:${port}`
    });
  });

  it("should post modelProperties sameAsModel", async () => {
    const result = await client.modelProperties.sameAsModel({
      sameAsModel: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should get operations And", async () => {
    const result = await client.operations.and();
    assert.equal(result, undefined);
  });
  it("should get operations As", async () => {
    const result = await client.operations.as();
    assert.equal(result, undefined);
  });
  it("should get operations Assert", async () => {
    const result = await client.operations.assert();
    assert.equal(result, undefined);
  });
  it("should get operations Async", async () => {
    const result = await client.operations.async();
    assert.equal(result, undefined);
  });
  it("should get operations Await", async () => {
    const result = await client.operations.await();
    assert.equal(result, undefined);
  });
  it("should get operations Break", async () => {
    const result = await client.operations.break();
    assert.equal(result, undefined);
  });
  it("should get operations Class", async () => {
    const result = await client.operations.class();
    assert.equal(result, undefined);
  });
  it("should get operations Constructor", async () => {
    const result = await client.operations.constructor();
    assert.equal(result, undefined);
  });
  it("should get operations Continue", async () => {
    const result = await client.operations.continue();
    assert.equal(result, undefined);
  });
  it("should get operations Def", async () => {
    const result = await client.operations.def();
    assert.equal(result, undefined);
  });
  it("should get operations Del", async () => {
    const result = await client.operations.del();
    assert.equal(result, undefined);
  });
  it("should get operations Elif", async () => {
    const result = await client.operations.elif();
    assert.equal(result, undefined);
  });
  it("should get operations Else", async () => {
    const result = await client.operations.else();
    assert.equal(result, undefined);
  });
  it("should get operations Except", async () => {
    const result = await client.operations.except();
    assert.equal(result, undefined);
  });
  it("should get operations Exec", async () => {
    const result = await client.operations.exec();
    assert.equal(result, undefined);
  });
  it("should get operations Finally", async () => {
    const result = await client.operations.finally();
    assert.equal(result, undefined);
  });
  it("should get operations For", async () => {
    const result = await client.operations.for();
    assert.equal(result, undefined);
  });
  it("should get operations From", async () => {
    const result = await client.operations.from();
    assert.equal(result, undefined);
  });
  it("should get operations Global", async () => {
    const result = await client.operations.global();
    assert.equal(result, undefined);
  });
  it("should get operations If", async () => {
    const result = await client.operations.if();
    assert.equal(result, undefined);
  });
  it("should get operations Import", async () => {
    const result = await client.operations.import();
    assert.equal(result, undefined);
  });
  it("should get operations In", async () => {
    const result = await client.operations.in();
    assert.equal(result, undefined);
  });
  it("should get operations Is", async () => {
    const result = await client.operations.is();
    assert.equal(result, undefined);
  });
  it("should get operations Lambda", async () => {
    const result = await client.operations.lambda();
    assert.equal(result, undefined);
  });
  it("should get operations Not", async () => {
    const result = await client.operations.not();
    assert.equal(result, undefined);
  });
  it("should get operations Or", async () => {
    const result = await client.operations.or();
    assert.equal(result, undefined);
  });
  it("should get operations Pass", async () => {
    const result = await client.operations.pass();
    assert.equal(result, undefined);
  });
  it("should get operations Raise", async () => {
    const result = await client.operations.raise();
    assert.equal(result, undefined);
  });
  it("should get operations Return", async () => {
    const result = await client.operations.return();
    assert.equal(result, undefined);
  });
  it("should get operations Try", async () => {
    const result = await client.operations.try();
    assert.equal(result, undefined);
  });
  it("should get operations While", async () => {
    const result = await client.operations.while();
    assert.equal(result, undefined);
  });
  it("should get operations With", async () => {
    const result = await client.operations.with();
    assert.equal(result, undefined);
  });
  it("should get operations Yield", async () => {
    const result = await client.operations.yield();
    assert.equal(result, undefined);
  });
  it("should post parameters withAnd", async () => {
    const result = await client.parameters.withAnd("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withAs", async () => {
    const result = await client.parameters.withAs("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withAssert", async () => {
    const result = await client.parameters.withAssert("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withAsync", async () => {
    const result = await client.parameters.withAsync("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withAwait", async () => {
    const result = await client.parameters.withAwait("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withBreak", async () => {
    const result = await client.parameters.withBreak("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withClass", async () => {
    const result = await client.parameters.withClass("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withConstructor", async () => {
    const result = await client.parameters.withConstructor("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withContinue", async () => {
    const result = await client.parameters.withContinue("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withDef", async () => {
    const result = await client.parameters.withDef("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withDel", async () => {
    const result = await client.parameters.withDel("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withElif", async () => {
    const result = await client.parameters.withElif("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withElse", async () => {
    const result = await client.parameters.withElse("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withExcept", async () => {
    const result = await client.parameters.withExcept("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withExec", async () => {
    const result = await client.parameters.withExec("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withFinally", async () => {
    const result = await client.parameters.withFinally("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withFor", async () => {
    const result = await client.parameters.withFor("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withFrom", async () => {
    const result = await client.parameters.withFrom("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withGlobal", async () => {
    const result = await client.parameters.withGlobal("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withIf", async () => {
    const result = await client.parameters.withIf("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withImport", async () => {
    const result = await client.parameters.withImport("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withIn", async () => {
    const result = await client.parameters.withIn("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withIs", async () => {
    const result = await client.parameters.withIs("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withLambda", async () => {
    const result = await client.parameters.withLambda("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withNot", async () => {
    const result = await client.parameters.withNot("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withOr", async () => {
    const result = await client.parameters.withOr("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withPass", async () => {
    const result = await client.parameters.withPass("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withRaise", async () => {
    const result = await client.parameters.withRaise("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withReturn", async () => {
    const result = await client.parameters.withReturn("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withTry", async () => {
    const result = await client.parameters.withTry("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withWhile", async () => {
    const result = await client.parameters.withWhile("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withWith", async () => {
    const result = await client.parameters.withWith("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withYield", async () => {
    const result = await client.parameters.withYield("ok");
    assert.equal(result, undefined);
  });
  it("should post parameters withCancellationToken", async () => {
    const result = await client.parameters.withCancellationToken("ok");
    assert.equal(result, undefined);
  });
  it("should post models withAnd", async () => {
    const result = await client.models.withAnd({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withAs", async () => {
    const result = await client.models.withAs({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withAssert", async () => {
    const result = await client.models.withAssert({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withAsync", async () => {
    const result = await client.models.withAsync({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withAwait", async () => {
    const result = await client.models.withAwait({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withBreak", async () => {
    const result = await client.models.withBreak({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withClass", async () => {
    const result = await client.models.withClass({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withConstructor", async () => {
    const result = await client.models.withConstructor({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withContinue", async () => {
    const result = await client.models.withContinue({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withDef", async () => {
    const result = await client.models.withDef({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withDel", async () => {
    const result = await client.models.withDel({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withElif", async () => {
    const result = await client.models.withElif({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withElse", async () => {
    const result = await client.models.withElse({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withExcept", async () => {
    const result = await client.models.withExcept({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withExec", async () => {
    const result = await client.models.withExec({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withFinally", async () => {
    const result = await client.models.withFinally({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withFor", async () => {
    const result = await client.models.withFor({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withFrom", async () => {
    const result = await client.models.withFrom({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withGlobal", async () => {
    const result = await client.models.withGlobal({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withIf", async () => {
    const result = await client.models.withIf({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withImport", async () => {
    const result = await client.models.withImport({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withIn", async () => {
    const result = await client.models.withIn({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withIs", async () => {
    const result = await client.models.withIs({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withLambda", async () => {
    const result = await client.models.withLambda({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withNot", async () => {
    const result = await client.models.withNot({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withOr", async () => {
    const result = await client.models.withOr({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withPass", async () => {
    const result = await client.models.withPass({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withRaise", async () => {
    const result = await client.models.withRaise({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withReturn", async () => {
    const result = await client.models.withReturn({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withTry", async () => {
    const result = await client.models.withTry({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withWhile", async () => {
    const result = await client.models.withWhile({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withWith", async () => {
    const result = await client.models.withWith({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post models withYield", async () => {
    const result = await client.models.withYield({
      name: "ok"
    });
    assert.equal(result, undefined);
  });
});
