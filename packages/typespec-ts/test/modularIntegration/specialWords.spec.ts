import { assert } from "chai";
import { SpecialWordsClient } from "./generated/special-words/src/index.js";

describe("Special Words Client", () => {
  let client: SpecialWordsClient;

  beforeEach(() => {
    client = new SpecialWordsClient({
      allowInsecureConnection: true,
      endpoint: "http://localhost:3002"
    });
  });

  it("should post modelProperties sameAsModel", async () => {
    const result = await client.modelProperties.sameAsModel({
      sameAsModel: "ok"
    });
    assert.equal(result, undefined);
  });
  it("should post modelProperties dictMethods", async () => {
    await client.modelProperties.dictMethods({
      keys: "ok",
      items: "ok",
      values: "ok",
      popitem: "ok",
      clear: "ok",
      update: "ok",
      setdefault: "ok",
      pop: "ok",
      get: "ok",
      copy: "ok"
    });
  });
  it("should post modelProperties withList", async () => {
    await client.modelProperties.withList({
      list: "ok"
    });
  });
  it("should get operations And", async () => {
    await client.operations.and();
  });
  it("should get operations As", async () => {
    await client.operations.as();
  });
  it("should get operations Assert", async () => {
    await client.operations.assert();
  });
  it("should get operations Async", async () => {
    await client.operations.async();
  });
  it("should get operations Await", async () => {
    await client.operations.await();
  });
  it("should get operations Break", async () => {
    await client.operations.break();
  });
  it("should get operations Class", async () => {
    await client.operations.class();
  });
  it("should get operations Constructor", async () => {
    await client.operations.constructor();
  });
  it("should get operations Continue", async () => {
    await client.operations.continue();
  });
  it("should get operations Def", async () => {
    await client.operations.def();
  });
  it("should get operations Del", async () => {
    await client.operations.del();
  });
  it("should get operations Elif", async () => {
    await client.operations.elif();
  });
  it("should get operations Else", async () => {
    await client.operations.else();
  });
  it("should get operations Except", async () => {
    await client.operations.except();
  });
  it("should get operations Exec", async () => {
    await client.operations.exec();
  });
  it("should get operations Finally", async () => {
    await client.operations.finally();
  });
  it("should get operations For", async () => {
    await client.operations.for();
  });
  it("should get operations From", async () => {
    await client.operations.from();
  });
  it("should get operations Global", async () => {
    await client.operations.global();
  });
  it("should get operations If", async () => {
    await client.operations.if();
  });
  it("should get operations Import", async () => {
    await client.operations.import();
  });
  it("should get operations In", async () => {
    await client.operations.in();
  });
  it("should get operations Is", async () => {
    await client.operations.is();
  });
  it("should get operations Lambda", async () => {
    await client.operations.lambda();
  });
  it("should get operations Not", async () => {
    await client.operations.not();
  });
  it("should get operations Or", async () => {
    await client.operations.or();
  });
  it("should get operations Pass", async () => {
    await client.operations.pass();
  });
  it("should get operations Raise", async () => {
    await client.operations.raise();
  });
  it("should get operations Return", async () => {
    await client.operations.return();
  });
  it("should get operations Try", async () => {
    await client.operations.try();
  });
  it("should get operations While", async () => {
    await client.operations.while();
  });
  it("should get operations With", async () => {
    await client.operations.with();
  });
  it("should get operations Yield", async () => {
    await client.operations.yield();
  });
  it("should post parameters withAnd", async () => {
    await client.parameters.withAnd("ok");
  });
  it("should post parameters withAs", async () => {
    await client.parameters.withAs("ok");
  });
  it("should post parameters withAssert", async () => {
    await client.parameters.withAssert("ok");
  });
  it("should post parameters withAsync", async () => {
    await client.parameters.withAsync("ok");
  });
  it("should post parameters withAwait", async () => {
    await client.parameters.withAwait("ok");
  });
  it("should post parameters withBreak", async () => {
    await client.parameters.withBreak("ok");
  });
  it("should post parameters withClass", async () => {
    await client.parameters.withClass("ok");
  });
  it("should post parameters withConstructor", async () => {
    await client.parameters.withConstructor("ok");
  });
  it("should post parameters withContinue", async () => {
    await client.parameters.withContinue("ok");
  });
  it("should post parameters withDef", async () => {
    await client.parameters.withDef("ok");
  });
  it("should post parameters withDel", async () => {
    await client.parameters.withDel("ok");
  });
  it("should post parameters withElif", async () => {
    await client.parameters.withElif("ok");
  });
  it("should post parameters withElse", async () => {
    await client.parameters.withElse("ok");
  });
  it("should post parameters withExcept", async () => {
    await client.parameters.withExcept("ok");
  });
  it("should post parameters withExec", async () => {
    await client.parameters.withExec("ok");
  });
  it("should post parameters withFinally", async () => {
    await client.parameters.withFinally("ok");
  });
  it("should post parameters withFor", async () => {
    await client.parameters.withFor("ok");
  });
  it("should post parameters withFrom", async () => {
    await client.parameters.withFrom("ok");
  });
  it("should post parameters withGlobal", async () => {
    await client.parameters.withGlobal("ok");
  });
  it("should post parameters withIf", async () => {
    await client.parameters.withIf("ok");
  });
  it("should post parameters withImport", async () => {
    await client.parameters.withImport("ok");
  });
  it("should post parameters withIn", async () => {
    await client.parameters.withIn("ok");
  });
  it("should post parameters withIs", async () => {
    await client.parameters.withIs("ok");
  });
  it("should post parameters withLambda", async () => {
    await client.parameters.withLambda("ok");
  });
  it("should post parameters withNot", async () => {
    await client.parameters.withNot("ok");
  });
  it("should post parameters withOr", async () => {
    await client.parameters.withOr("ok");
  });
  it("should post parameters withPass", async () => {
    await client.parameters.withPass("ok");
  });
  it("should post parameters withRaise", async () => {
    await client.parameters.withRaise("ok");
  });
  it("should post parameters withReturn", async () => {
    await client.parameters.withReturn("ok");
  });
  it("should post parameters withTry", async () => {
    await client.parameters.withTry("ok");
  });
  it("should post parameters withWhile", async () => {
    await client.parameters.withWhile("ok");
  });
  it("should post parameters withWith", async () => {
    await client.parameters.withWith("ok");
  });
  it("should post parameters withYield", async () => {
    await client.parameters.withYield("ok");
  });
  it("should post parameters withCancellationToken", async () => {
    await client.parameters.withCancellationToken("ok");
  });
  it("should post models withAnd", async () => {
    await client.models.withAnd({
      name: "ok"
    });
  });
  it("should post models withAs", async () => {
    await client.models.withAs({
      name: "ok"
    });
  });
  it("should post models withAssert", async () => {
    await client.models.withAssert({
      name: "ok"
    });
  });
  it("should post models withAsync", async () => {
    await client.models.withAsync({
      name: "ok"
    });
  });
  it("should post models withAwait", async () => {
    await client.models.withAwait({
      name: "ok"
    });
  });
  it("should post models withBreak", async () => {
    await client.models.withBreak({
      name: "ok"
    });
  });
  it("should post models withClass", async () => {
    await client.models.withClass({
      name: "ok"
    });
  });
  it("should post models withConstructor", async () => {
    await client.models.withConstructor({
      name: "ok"
    });
  });
  it("should post models withContinue", async () => {
    await client.models.withContinue({
      name: "ok"
    });
  });
  it("should post models withDef", async () => {
    await client.models.withDef({
      name: "ok"
    });
  });
  it("should post models withDel", async () => {
    await client.models.withDel({
      name: "ok"
    });
  });
  it("should post models withElif", async () => {
    await client.models.withElif({
      name: "ok"
    });
  });
  it("should post models withElse", async () => {
    await client.models.withElse({
      name: "ok"
    });
  });
  it("should post models withExcept", async () => {
    await client.models.withExcept({
      name: "ok"
    });
  });
  it("should post models withExec", async () => {
    await client.models.withExec({
      name: "ok"
    });
  });
  it("should post models withFinally", async () => {
    await client.models.withFinally({
      name: "ok"
    });
  });
  it("should post models withFor", async () => {
    await client.models.withFor({
      name: "ok"
    });
  });
  it("should post models withFrom", async () => {
    await client.models.withFrom({
      name: "ok"
    });
  });
  it("should post models withGlobal", async () => {
    await client.models.withGlobal({
      name: "ok"
    });
  });
  it("should post models withIf", async () => {
    await client.models.withIf({
      name: "ok"
    });
  });
  it("should post models withImport", async () => {
    await client.models.withImport({
      name: "ok"
    });
  });
  it("should post models withIn", async () => {
    await client.models.withIn({
      name: "ok"
    });
  });
  it("should post models withIs", async () => {
    await client.models.withIs({
      name: "ok"
    });
  });
  it("should post models withLambda", async () => {
    await client.models.withLambda({
      name: "ok"
    });
  });
  it("should post models withNot", async () => {
    await client.models.withNot({
      name: "ok"
    });
  });
  it("should post models withOr", async () => {
    await client.models.withOr({
      name: "ok"
    });
  });
  it("should post models withPass", async () => {
    await client.models.withPass({
      name: "ok"
    });
  });
  it("should post models withRaise", async () => {
    await client.models.withRaise({
      name: "ok"
    });
  });
  it("should post models withReturn", async () => {
    await client.models.withReturn({
      name: "ok"
    });
  });
  it("should post models withTry", async () => {
    await client.models.withTry({
      name: "ok"
    });
  });
  it("should post models withWhile", async () => {
    await client.models.withWhile({
      name: "ok"
    });
  });
  it("should post models withWith", async () => {
    await client.models.withWith({
      name: "ok"
    });
  });
  it("should post models withYield", async () => {
    await client.models.withYield({
      name: "ok"
    });
  });
});
