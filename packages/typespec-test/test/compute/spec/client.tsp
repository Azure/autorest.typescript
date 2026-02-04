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
