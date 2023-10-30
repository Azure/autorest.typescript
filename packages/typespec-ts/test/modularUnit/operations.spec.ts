import { assert } from "chai";
import { emitModularOperationsFromTypeSpec } from "../util/emitUtil.js";
import { assertEqualContent } from "../util/testUtil.js";

describe("operations", () => {
  it("required & optional headers", async () => {
    const tspContent = `
      model Bar {
        prop1: string;
        prop2: int64;
      }
      op read(@header requiredHeader: string, @header optionalHeader?: string, ...Bar): OkResponse;
        `;

    const operationFiles = await emitModularOperationsFromTypeSpec(tspContent);
    assert.ok(operationFiles);
    assert.equal(operationFiles?.length, 1);
    console.log(operationFiles?.[0]?.getFullText()!);
    assertEqualContent(
      operationFiles?.[0]?.getFullText()!,
      `
      import { TestingContext as Client } from "../rest/index.js";
      import { StreamableMethod, operationOptionsToRequestParameters } from "@azure-rest/core-client";
      
      export function _readSend(context: Client, requiredHeader: string, body: Bar, options: ReadOptions = { requestOptions: {} }): StreamableMethod<Read200Response> {
          return context.path("/", ).post({...operationOptionsToRequestParameters(options), 
          headers: {
            "required-header": requiredHeader,
            ...(options?.optionalHeader !== undefined ? {"optional-header": options?.optionalHeader} : {})
          },
          body: {"prop1": body["prop1"], "prop2": body["prop2"]},});
      }
      
      export async function _readDeserialize(result: Read200Response): Promise<void> {
          if(result.status !== "200"){
          throw result.body
          }
      
          return;
      }
      
      export async function read(context: Client, requiredHeader: string, body: Bar, options: ReadOptions = { requestOptions: {} }): Promise<void> {
          const result = await _readSend(context, requiredHeader, body, options);
          return _readDeserialize(result);
      }`,
      true
    );
  });
});
