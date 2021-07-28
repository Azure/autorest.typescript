import { FileServices } from "../operationsInterfaces";
import { StorageManagementClientContext } from "../storageManagementClientContext";
import { FileServicesListOptionalParams, FileServicesListResponse, FileServiceProperties, FileServicesSetServicePropertiesOptionalParams, FileServicesSetServicePropertiesResponse, FileServicesGetServicePropertiesOptionalParams, FileServicesGetServicePropertiesResponse } from "../models";
/** Class representing a FileServices. */
export declare class FileServicesImpl implements FileServices {
    private readonly client;
    /**
     * Initialize a new instance of the class FileServices class.
     * @param client Reference to the service client
     */
    constructor(client: StorageManagementClientContext);
    /**
     * List all file services in storage accounts
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    list(resourceGroupName: string, accountName: string, options?: FileServicesListOptionalParams): Promise<FileServicesListResponse>;
    /**
     * Sets the properties of file services in storage accounts, including CORS (Cross-Origin Resource
     * Sharing) rules.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param parameters The properties of file services in storage accounts, including CORS (Cross-Origin
     *                   Resource Sharing) rules.
     * @param options The options parameters.
     */
    setServiceProperties(resourceGroupName: string, accountName: string, parameters: FileServiceProperties, options?: FileServicesSetServicePropertiesOptionalParams): Promise<FileServicesSetServicePropertiesResponse>;
    /**
     * Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource
     * Sharing) rules.
     * @param resourceGroupName The name of the resource group within the user's subscription. The name is
     *                          case insensitive.
     * @param accountName The name of the storage account within the specified resource group. Storage
     *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
     *                    only.
     * @param options The options parameters.
     */
    getServiceProperties(resourceGroupName: string, accountName: string, options?: FileServicesGetServicePropertiesOptionalParams): Promise<FileServicesGetServicePropertiesResponse>;
}
//# sourceMappingURL=fileServices.d.ts.map