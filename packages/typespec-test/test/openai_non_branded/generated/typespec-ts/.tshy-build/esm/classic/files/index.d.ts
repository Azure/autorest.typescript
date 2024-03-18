import { OpenAIContext } from "../../api/OpenAIContext.js";
import { OpenAIFile, ListFilesResponse, CreateFileRequest, DeleteFileResponse } from "../../models/models.js";
import { FilesListOptions, FilesCreateOptions, FilesRetrieveOptions, FilesDeleteOperationOptions, FilesDownloadOptions } from "../../models/options.js";
export interface FilesOperations {
    list: (options?: FilesListOptions) => Promise<ListFilesResponse>;
    create: (file: CreateFileRequest, options?: FilesCreateOptions) => Promise<OpenAIFile>;
    retrieve: (fileId: string, options?: FilesRetrieveOptions) => Promise<OpenAIFile>;
    deleteOperation: (fileId: string, options?: FilesDeleteOperationOptions) => Promise<DeleteFileResponse>;
    download: (fileId: string, options?: FilesDownloadOptions) => Promise<string>;
}
export declare function getFiles(context: OpenAIContext): {
    list: (options?: FilesListOptions) => Promise<ListFilesResponse>;
    create: (file: CreateFileRequest, options?: FilesCreateOptions) => Promise<OpenAIFile>;
    retrieve: (fileId: string, options?: FilesRetrieveOptions) => Promise<OpenAIFile>;
    deleteOperation: (fileId: string, options?: FilesDeleteOperationOptions) => Promise<DeleteFileResponse>;
    download: (fileId: string, options?: FilesDownloadOptions) => Promise<string>;
};
export declare function getFilesOperations(context: OpenAIContext): FilesOperations;
//# sourceMappingURL=index.d.ts.map