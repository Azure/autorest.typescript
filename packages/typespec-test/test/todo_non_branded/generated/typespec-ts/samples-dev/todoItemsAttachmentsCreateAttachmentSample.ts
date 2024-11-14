// Licensed under the MIT License.

import createTodoClient from "@notabrand/todo-non-branded";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateAttachment
 *
 * @summary call operation CreateAttachment
 */
async function todoItemsAttachmentsCreateAttachmentSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = { key: "{Your API key}" };
  const client = createTodoClient(endpointParam, credential);
  const itemId = 123;
  const result = await client
    .path("/items/{itemId}/attachments", itemId)
    .post({
      body: {
        filename: "{Your filename}",
        mediaType: "{Your mediaType}",
        contents: "{Your contents}",
      },
    });
  console.log(result);
}

async function main() {
  todoItemsAttachmentsCreateAttachmentSample();
}

main().catch(console.error);
