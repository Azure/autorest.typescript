import { PagedOperation, Operation } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { AVSContext as Client, OperationsList200Response, OperationsListDefaultResponse } from "../../rest/index.js";
import { StreamableMethod } from "@azure-rest/core-client";
import { OperationsListOptionalParams } from "../../models/options.js";
export declare function _listSend(context: Client, options?: OperationsListOptionalParams): StreamableMethod<OperationsList200Response | OperationsListDefaultResponse>;
export declare function _listDeserialize(result: OperationsList200Response | OperationsListDefaultResponse): Promise<PagedOperation>;
/** List the operations for the provider */
export declare function list(context: Client, options?: OperationsListOptionalParams): PagedAsyncIterableIterator<Operation>;
//# sourceMappingURL=index.d.ts.map