import "@azure-tools/typespec-azure-core";
import "@azure-tools/typespec-client-generator-core";
import "@typespec/rest";
import "./models.tsp";

using Azure.ClientGenerator.Core;
using TypeSpec.Http;

namespace KeyVault;

@summary("Get a specified secret from a given key vault.")
@route("/secrets/{secret-name}/{secret-version}")
@get
op getSecret is KeyVaultOperation<
    {
        /**
         * The name of the secret.
         */
        @path("secret-name")
        @clientName("name", "go")
        secretName: string;

        /**
         * The version of the secret. This URI fragment is optional. If not specified, the latest version of the secret is returned.
         */
        @path("secret-version")
        @clientName("version", "go")
        secretVersion?: string;

        /**
         * The media type (MIME type) of the certificate. If a supported format is specified, the certificate content is converted to the requested format. Currently, only PFX to PEM conversion is supported. If an unsupported format is specified, the request is rejected. If not specified, the certificate is returned in its original format without conversion.
         */
        @query("outContentType")
        outContentType?: string;
    },
    {}
>;
