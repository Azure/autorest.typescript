import "@typespec/rest";
import "@typespec/http";
import "@typespec/versioning";
import "@azure-tools/typespec-azure-core";
import "./routes.tsp";
import "@typespec/versioning";

using TypeSpec.Http;
using TypeSpec.Versioning;

@service(#{ title: "KeyVaultClient" })
@server(
    "{vaultBaseUrl}",
    "The key vault client performs cryptographic key operations and vault operations against the Key Vault service.",
    {
        vaultBaseUrl: url,
    }
)
@versioned(Versions)
namespace KeyVault;

enum Versions {
    v1,
}
