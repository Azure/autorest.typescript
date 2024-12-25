import { assert } from "chai";
import { emitClientDefinitionFromTypeSpec, emitParameterFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("Client definition generation", () => {
  it("should generate method-level parameter", async () => {
    const tsp = `
    @route("template/{+param}")
    op template(param: string): void;
        `;
    const parameters = await emitParameterFromTypeSpec(
      tsp
    );
    assert.ok(parameters);
    await assertEqualContent(
      parameters?.content!,
      `
    import type { RequestParameters } from "@azure-rest/core-client";

    /** This is the wrapper object for the parameter \`param\` with allowReserved set to true. */
    export interface TemplateParamPathParam {
      /** A sequence of textual characters. */
      value: string;
      /** Whether to allow reserved characters */
      allowReserved: true;
    }

    export type TemplateParameters = RequestParameters;
      `
    );

    const clientDef = await emitClientDefinitionFromTypeSpec(
      tsp);
    assert.ok(clientDef);
    await assertEqualContent(
      clientDef!.content,
      `
        import { TemplateParameters, TemplateParamPathParam } from "./parameters.js";
        import { Template204Response } from "./responses.js";
        import { Client, StreamableMethod } from "@azure-rest/core-client";

        export interface Template {
            get(options?: TemplateParameters): StreamableMethod<Template204Response>;
        }

        export interface Routes {
            /** Resource for '/template/\\{param\\}' has methods for the following verbs: get */
            (path: "/template/{param}", param: TemplateParamPathParam): Template;
        }

        export type testClient = Client & {
            path: Routes;
        };
    `
    );
  });
});
