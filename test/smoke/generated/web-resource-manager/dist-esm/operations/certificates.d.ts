import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { Certificates } from "../operationsInterfaces";
import { WebSiteManagementClientContext } from "../webSiteManagementClientContext";
import { Certificate, CertificatesListOptionalParams, CertificatesListByResourceGroupOptionalParams, CertificatesGetOptionalParams, CertificatesGetResponse, CertificatesCreateOrUpdateOptionalParams, CertificatesCreateOrUpdateResponse, CertificatesDeleteOptionalParams, CertificatePatchResource, CertificatesUpdateOptionalParams, CertificatesUpdateResponse } from "../models";
/** Class representing a Certificates. */
export declare class CertificatesImpl implements Certificates {
    private readonly client;
    /**
     * Initialize a new instance of the class Certificates class.
     * @param client Reference to the service client
     */
    constructor(client: WebSiteManagementClientContext);
    /**
     * Description for Get all certificates for a subscription.
     * @param options The options parameters.
     */
    list(options?: CertificatesListOptionalParams): PagedAsyncIterableIterator<Certificate>;
    private listPagingPage;
    private listPagingAll;
    /**
     * Description for Get all certificates in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    listByResourceGroup(resourceGroupName: string, options?: CertificatesListByResourceGroupOptionalParams): PagedAsyncIterableIterator<Certificate>;
    private listByResourceGroupPagingPage;
    private listByResourceGroupPagingAll;
    /**
     * Description for Get all certificates for a subscription.
     * @param options The options parameters.
     */
    private _list;
    /**
     * Description for Get all certificates in a resource group.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param options The options parameters.
     */
    private _listByResourceGroup;
    /**
     * Description for Get a certificate.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the certificate.
     * @param options The options parameters.
     */
    get(resourceGroupName: string, name: string, options?: CertificatesGetOptionalParams): Promise<CertificatesGetResponse>;
    /**
     * Description for Create or update a certificate.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the certificate.
     * @param certificateEnvelope Details of certificate, if it exists already.
     * @param options The options parameters.
     */
    createOrUpdate(resourceGroupName: string, name: string, certificateEnvelope: Certificate, options?: CertificatesCreateOrUpdateOptionalParams): Promise<CertificatesCreateOrUpdateResponse>;
    /**
     * Description for Delete a certificate.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the certificate.
     * @param options The options parameters.
     */
    delete(resourceGroupName: string, name: string, options?: CertificatesDeleteOptionalParams): Promise<void>;
    /**
     * Description for Create or update a certificate.
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param name Name of the certificate.
     * @param certificateEnvelope Details of certificate, if it exists already.
     * @param options The options parameters.
     */
    update(resourceGroupName: string, name: string, certificateEnvelope: CertificatePatchResource, options?: CertificatesUpdateOptionalParams): Promise<CertificatesUpdateResponse>;
    /**
     * ListNext
     * @param nextLink The nextLink from the previous successful call to the List method.
     * @param options The options parameters.
     */
    private _listNext;
    /**
     * ListByResourceGroupNext
     * @param resourceGroupName Name of the resource group to which the resource belongs.
     * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
     * @param options The options parameters.
     */
    private _listByResourceGroupNext;
}
//# sourceMappingURL=certificates.d.ts.map