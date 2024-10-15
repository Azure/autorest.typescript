import { assert } from "chai";
import { emitParameterFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("Client definition generation", () => {
  it("should generate method-level parameter", async () => {
    const clientDef = await emitParameterFromTypeSpec(
      `
    @route("template/{+param}")
    op template(param: string): void;
        `
    );
    assert.ok(clientDef);
    console.log(clientDef?.content);
    await assertEqualContent(
      clientDef?.content!,
      `
    import { RequestParameters } from "@azure-rest/core-client";

    /** You can use the function buildAllowReservedValue to help prepare this parameter. */
    export interface TemplateParamPathParam {
      /** A sequence of textual characters. */
      value: string;
      /** Whether to allow reserved characters */
      allowReserved: true;
    }

    export type TemplateParameters = RequestParameters;
      `
    );
  });
});
