import { assert } from "chai";
import { emitParameterFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe.only("Client definition generation", () => {
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
    
    export interface TemplatePathParameters {}
    
    export interface TemplatePathParam {
      pathParameters: TemplatePathParameters;
    }

    /** String with encoding metadata */
      export interface TemplateParamPathParam {
        /** Value of the parameter */
        value: string;
        /** Whether to allow reserved characters */
        allowReserved: true;
    }

    export type TemplateParameters = TemplatePathParam & RequestParameters;
      `
    );
  });
});
