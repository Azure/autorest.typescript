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
    import { TemplateParameters, StringWithEncodingMetadata  } from "./parameters.js";
    import { Template204Response } from "./responses.js";
    import { Client, StreamableMethod } from "@azure-rest/core-client";

    export interface Template {
        get(options?: TemplateParameters): StreamableMethod<Template204Response>;
    }

    export interface Routes {
        /** Resource for '/template/\{param\}' has methods for the following verbs: get */
        (path: "/template/{param}", param: StringWithEncodingMetadata ): Template;
    }

    export type testClient = Client & {
            path: Routes;
    };
      `
    );
  });
});
