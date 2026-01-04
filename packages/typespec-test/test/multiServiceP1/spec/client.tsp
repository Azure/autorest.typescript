import "./service1.tsp";
import "./service2.tsp";
import "@azure-tools/typespec-client-generator-core";

using Versioning;
using Azure.Core;
using Azure.ResourceManager;
using Azure.ClientGenerator.Core;

/**
 * Comute Client
 */
@client({
    name: "ComputeClient",
    service: [Microsoft.Compute, Microsoft.ComputeDisk],
})
// @useDependency(Microsoft.Compute.Versions.v2024_11_01)
namespace Azure.ResourceManager.MultiService;
