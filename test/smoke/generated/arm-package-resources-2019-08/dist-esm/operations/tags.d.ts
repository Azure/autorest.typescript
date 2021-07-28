import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Tags } from "../operationsInterfaces";
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
import { TagDetails, TagsListOptionalParams, TagsDeleteValueOptionalParams, TagsCreateOrUpdateValueOptionalParams, TagsCreateOrUpdateValueResponse, TagsCreateOrUpdateOptionalParams, TagsCreateOrUpdateResponse, TagsDeleteOptionalParams } from "../models";
/** Class representing a Tags. */
export declare class TagsImpl implements Tags {
    private readonly client;
    /**
     * Initialize a new instance of the class Tags class.
     * @param client Reference to the service client
     */
    constructor(client: ResourceManagementClientContext);
    /**
     * Gets the names and values of all resource tags that are defined in a subscription.
     * @param options The options parameters.
     */
    list(options?: TagsListOptionalParams): PagedAsyncIterableIterator<TagDetails>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Deletes a tag value.
     * @param tagName The name of the tag.
     * @param tagValue The value of the tag to delete.
     * @param options The options parameters.
     */
    deleteValue(tagName: string, tagValue: string, options?: TagsDeleteValueOptionalParams): Promise<void>;
    /**
     * Creates a tag value. The name of the tag must already exist.
     * @param tagName The name of the tag.
     * @param tagValue The value of the tag to create.
     * @param options The options parameters.
     */
    createOrUpdateValue(tagName: string, tagValue: string, options?: TagsCreateOrUpdateValueOptionalParams): Promise<TagsCreateOrUpdateValueResponse>;
    /**
     * The tag name can have a maximum of 512 characters and is case insensitive. Tag names created by
     * Azure have prefixes of microsoft, azure, or windows. You cannot create tags with one of these
     * prefixes.
     * @param tagName The name of the tag to create.
     * @param options The options parameters.
     */
    createOrUpdate(tagName: string, options?: TagsCreateOrUpdateOptionalParams): Promise<TagsCreateOrUpdateResponse>;
    /**
     * You must remove all values from a resource tag before you can delete it.
     * @param tagName The name of the tag.
     * @param options The options parameters.
     */
    delete(tagName: string, options?: TagsDeleteOptionalParams): Promise<void>;
    /**
     * Gets the names and values of all resource tags that are defined in a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
}
//# sourceMappingURL=tags.d.ts.map