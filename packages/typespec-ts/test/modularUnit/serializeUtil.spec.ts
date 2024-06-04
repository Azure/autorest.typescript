import { assert } from "chai";
import {
  emitModularSerializeUtilsFromTypeSpec,
  emitModularOperationsFromTypeSpec
} from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";
import * as path from "path";
import { readFile } from "fs/promises";

function getTestFileDir(test: Mocha.Runnable) {
  let current: Mocha.Runnable | Mocha.Suite = test;
  const stack: Array<Mocha.Runnable | Mocha.Suite> = [current];
  while (current.parent) {
    stack.push(current.parent);
    current = current.parent;
  }
  stack.reverse();
  return path.join(
    test.file?.replace(/(?:\.spec)?\.ts$/, "") ?? ".",
    ...stack.map((c) => c.title.split(" ").join("_"))
  );
}

describe("modular special union serialization", function () {
  it("shouldn't generate serialize util or as any if there's no special union variant without discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("shouldn't generate serialize util or as any if there's no special union variant even with discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should not generate serialize util but generate as any if there's a special union variant of datatime without discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should not generate serialize util but generate as any if there's a special union variant of bytes without discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should not generate serialize util but generate as any if there's a special union variant of model with datatime property without discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should not generate serialize util but generate as any if there's a special union variant of model with bytes property without discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should generate serialize util if there's a special discriminated union variant of model with datatime property", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const expectSerializeUtilPath = path.join(
      getTestFileDir(this.test!),
      "serializeUtil.ts"
    );
    const expectSerializeUtil = await readFile(expectSerializeUtilPath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.equal(serializeUtil?.length, 1);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      expectSerializeUtil
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should generate serialize util if there's a special discriminated union variant of model with bytes property", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const expectSerializeUtilPath = path.join(
      getTestFileDir(this.test!),
      "serializeUtil.ts"
    );
    const expectSerializeUtil = await readFile(expectSerializeUtilPath, {
      encoding: "utf-8"
    });
    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      expectSerializeUtil
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should generate serialize util if there're special discriminated union variants of model with bytes and datetime property", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const expectSerializeUtilPath = path.join(
      getTestFileDir(this.test!),
      "serializeUtil.ts"
    );
    const expectSerializeUtil = await readFile(expectSerializeUtilPath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      expectSerializeUtil
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,

      expectOperationFile,
      true
    );
  });

  it("should generate serialize util if there're special discriminated union variants of model with bytes and bytes property", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const expectSerializeUtilPath = path.join(
      getTestFileDir(this.test!),
      "serializeUtil.ts"
    );
    const expectSerializeUtil = await readFile(expectSerializeUtilPath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      expectSerializeUtil
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,

      expectOperationFile,
      true
    );
  });
});

describe("modular special union deserialization", function () {
  it("shouldn't generate deserialize util or as any if there's no special union variant without discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("shouldn't generate deserialize util or as any if there's no special union variant with discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);
    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should not generate deserialize util but generate as any if there's a special union variant of datatime without discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should not generate deserialize util but generate as any if there's a special union variant of bytes without discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should not generate deserialize util but generate as any if there's a special union variant of model with datatime property without discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should not generate deserialize util but generate as any if there's a special union variant of model with bytes property without discriminator", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should generate deserialize util if there's a special discriminated union variant of model with datatime property", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const expectSerializeUtilPath = path.join(
      getTestFileDir(this.test!),
      "serializeUtil.ts"
    );
    const expectSerializeUtil = await readFile(expectSerializeUtilPath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.equal(serializeUtil?.length, 1);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      expectSerializeUtil
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should generate deserialize util if there's a special discriminated union variant of model with bytes property", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const expectSerializeUtilPath = path.join(
      getTestFileDir(this.test!),
      "serializeUtil.ts"
    );
    const expectSerializeUtil = await readFile(expectSerializeUtilPath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      expectSerializeUtil
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should generate serialize util if there're special discriminated union variants of model with bytes and datetime property", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const expectSerializeUtilPath = path.join(
      getTestFileDir(this.test!),
      "serializeUtil.ts"
    );
    const expectSerializeUtil = await readFile(expectSerializeUtilPath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      expectSerializeUtil
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should generate serialize util if there're special discriminated union variants of model with bytes and bytes property", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectOperationFilePath = path.join(
      getTestFileDir(this.test!),
      "operations.ts"
    );
    const expectOperationFile = await readFile(expectOperationFilePath, {
      encoding: "utf-8"
    });
    const expectSerializeUtilPath = path.join(
      getTestFileDir(this.test!),
      "serializeUtil.ts"
    );
    const expectSerializeUtil = await readFile(expectSerializeUtilPath, {
      encoding: "utf-8"
    });

    // to test the generated deserialized utils for union variant of model with datetime properties.
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      expectSerializeUtil
    );

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    await assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      expectOperationFile,
      true
    );
  });

  it("should not generate deserialize util even if circular in model properties but no other special variants", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.ok(serializeUtil?.length === 0);
  });

  it("should generate deserialize util even if circular in model properties but no other special variants", async function () {
    const tspContent = await readFile(
      path.join(getTestFileDir(this.test!), "test.tsp"),
      { encoding: "utf-8" }
    );
    const expectSerializeUtilPath = path.join(
      getTestFileDir(this.test!),
      "serializeUtil.ts"
    );
    const expectSerializeUtil = await readFile(expectSerializeUtilPath, {
      encoding: "utf-8"
    });
    const serializeUtil =
      await emitModularSerializeUtilsFromTypeSpec(tspContent);
    assert.equal(serializeUtil?.length, 1);
    await assertEqualContent(
      serializeUtil?.[0]?.getFullText()!,
      expectSerializeUtil
    );
  });
});
