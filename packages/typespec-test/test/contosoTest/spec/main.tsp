import "@typespec/http";
import "@typespec/rest";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-azure-resource-manager";

using Http;
using Rest;
using Versioning;
using Azure.Core;
using Azure.ResourceManager;

/** Contoso Resource Provider management API. */
@armProviderNamespace
@service(#{ title: "ContosoProviderHubClient" })
@versioned(Versions)
namespace Microsoft.ContosoProviderHub;

/** Contoso API versions */
enum Versions {
    /** 2021-10-01-preview version */
    @useDependency(Azure.ResourceManager.Versions.v1_0_Preview_1)
    @armCommonTypesVersion(Azure.ResourceManager.CommonTypes.Versions.v5)
    `2021-10-01-preview`,
}

/** A ContosoProviderHub resource */
model Employee is TrackedResource<EmployeeProperties> {
    ...ResourceNameParameter<Employee>;
}

/** Employee properties */
model EmployeeProperties {
    /** Age of employee */
    age?: int32;

    /** City of employee */
    city?: string;

    /** Profile of employee */
    @encode("base64url")
    profile?: bytes;

    /** The status of the last operation. */
    @visibility(Lifecycle.Read)
    provisioningState?: ProvisioningState;
}

/** The provisioning state of a resource. */
@lroStatus
union ProvisioningState {
    string,

    /** The resource create request has been accepted */
    Accepted: "Accepted",

    /** The resource is being provisioned */
    Provisioning: "Provisioning",

    /** The resource is updating */
    Updating: "Updating",

    /** Resource has been created. */
    Succeeded: "Succeeded",

    /** Resource creation failed. */
    Failed: "Failed",

    /** Resource creation was canceled. */
    Canceled: "Canceled",

    /** The resource is being deleted */
    Deleting: "Deleting",
}

/** Employee move request */
model MoveRequest {
    /** The moving from location */
    from: string;

    /** The moving to location */
    to: string;
}

/** Employee move response */
model MoveResponse {
    /** The status of the move */
    movingStatus: string;
}

interface Operations extends Azure.ResourceManager.Operations {}

#suppress "@azure-tools/typespec-azure-resource-manager/arm-resource-interface-requires-decorator"
interface LegacyOps
    extends Azure.ResourceManager.Legacy.LegacyOperations<
            {
                ...ResourceParentParameters<
                    Employee,
                    Azure.ResourceManager.Foundations.BaseParameters<Employee>
                >,
            },
            {
                /** the employee name */
                @path @segment("employees") employeeName: string,
            },
            ErrorResponse
        > {}

@error
model ArmDefault {
    @body error: ARMErrorResponse;
}

model Arm404 is ArmDefault {
    ...Response<404>;
}

model ARMErrorResponse {
    /**
     * Gets or sets the string that describes the error in detail and provides debugging information.
     */
    message?: string;

    /**
     * Gets or sets the string that can be used to programmatically identify the error.
     */
    code?: string;
}

@armResourceOperations
interface Employees {
    get is ArmResourceRead<
        Employee,
        Response = Employee,
        Error = ArmDefault | Arm404
    >;
}
