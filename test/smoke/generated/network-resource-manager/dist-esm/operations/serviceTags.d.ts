import { ServiceTags } from "../operationsInterfaces";
import { NetworkManagementClientContext } from "../networkManagementClientContext";
import { ServiceTagsListOptionalParams, ServiceTagsListResponse } from "../models";
/** Class representing a ServiceTags. */
export declare class ServiceTagsImpl implements ServiceTags {
    private readonly client;
    /**
     * Initialize a new instance of the class ServiceTags class.
     * @param client Reference to the service client
     */
    constructor(client: NetworkManagementClientContext);
    /**
     * Gets a list of service tag information resources.
     * @param location The location that will be used as a reference for version (not as a filter based on
     *                 location, you will get the list of service tags with prefix details across all regions but limited
     *                 to the cloud that your subscription belongs to).
     * @param options The options parameters.
     */
    list(location: string, options?: ServiceTagsListOptionalParams): Promise<ServiceTagsListResponse>;
}
//# sourceMappingURL=serviceTags.d.ts.map