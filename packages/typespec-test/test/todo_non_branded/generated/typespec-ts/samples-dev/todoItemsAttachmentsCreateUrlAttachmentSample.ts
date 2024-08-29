// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateUrlAttachment
 *
 * @summary call operation CreateUrlAttachment
 */
async function todoItemsAttachmentsCreateUrlAttachmentSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const itemId = 123;
  const result = await client
    .path("/items/{itemId}/attachments", itemId)
    .post({
      body: {
        contents: { description: "{Your description}", url: "{Your url}" },
      },
      contentType: "application/json",
    });
  console.log(result);
}

async function main() {
  todoItemsAttachmentsCreateUrlAttachmentSample();
}

main().catch(console.error);
