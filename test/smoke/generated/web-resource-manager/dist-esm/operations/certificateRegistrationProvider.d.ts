import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { CertificateRegistrationProvider } from "../operationsInterfaces";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { CsmOperationDescription, CertificateRegistrationProviderListOperationsOptionalParams } from "../models";
/** Class representing a CertificateRegistrationProvider. */
export declare class CertificateRegistrationProviderImpl implements CertificateRegistrationProvider {
    private readonly client;
    /**
     * Initialize a new instance of the class CertificateRegistrationProvider class.
     * @param client Reference to the service client
     */
    constructor(client: WebSiteManagementClientContext);
    /**
     * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the
     * resource provider
     * @param options The options parameters.
     */
    listOperations(options?: CertificateRegistrationProviderListOperationsOptionalParams): PagedAsyncIterableIterator<CsmOperationDescription>;
    private listOperationsPagingPage;
    private listOperationsPagingAll;
    /**
     * Description for Implements Csm operations Api to exposes the list of available Csm Apis under the
     * resource provider
     * @param options The options parameters.
     */
    private _listOperations;
    /**
     * ListOperationsNext
     * @param nextLink The nextLink from the previous successful call to the ListOperations method.
     * @param options The options parameters.
     */
    private _listOperationsNext;
}
//# sourceMappingURL=certificateRegistrationProvider.d.ts.map