import "./compute.tsp";
import "./disk.tsp";
import "@azure-tools/typespec-client-generator-core";

using Azure.ClientGenerator.Core;

/**
 * Compute Client
 */
@client({
    name: "ComputeClient",
    service: [Compute, ComputeDisk],
})
namespace ComputeCombine;

@@clientName(Compute.ActionGroup, "ComputeActionGroup");
@@clientName(Compute.ActionGroupsProperties, "ComputeActionGroupsProperties");
@@clientName(ComputeDisk.ActionGroup, "ComputeDiskActionGroup");
@@clientName(ComputeDisk.ActionGroupsProperties,
    "ComputeDiskActionGroupsProperties");
