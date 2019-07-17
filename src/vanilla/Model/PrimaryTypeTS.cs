// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using AutoRest.Core.Model;

namespace AutoRest.TypeScript.Model
{
    public class PrimaryTypeTS : Core.Model.PrimaryType
    {
        public PrimaryTypeTS(KnownPrimaryType primaryType) : base(primaryType)
        {
            Name.OnGet += v => ImplementationName;
        }

        protected PrimaryTypeTS()
        {
            Name.OnGet += v => ImplementationName;
        }

        public virtual string ImplementationName
        {
            get
            {
                switch (KnownPrimaryType)
                {
                    case KnownPrimaryType.Base64Url:
                    case KnownPrimaryType.ByteArray:
                        return "Uint8Array";

                    case KnownPrimaryType.Boolean:
                        return "boolean";

                    case KnownPrimaryType.Date:
                    case KnownPrimaryType.DateTime:
                    case KnownPrimaryType.DateTimeRfc1123:
                    case KnownPrimaryType.UnixTime:
                        return "Date";

                    case KnownPrimaryType.Double:
                    case KnownPrimaryType.Decimal:
                    case KnownPrimaryType.Int:
                    case KnownPrimaryType.Long:
                        return "number";

                    case KnownPrimaryType.Stream:
                        return "coreHttp.HttpRequestBody";

                    case KnownPrimaryType.String:
                    case KnownPrimaryType.Uuid:
                        return "string";

                    case KnownPrimaryType.TimeSpan:
                        return "string";

                    case KnownPrimaryType.Object:
                        return "Object";

                    case KnownPrimaryType.Credentials:
                        return "coreHttp.TokenCredential | coreHttp.ServiceClientCredentials";
                }
                throw new NotImplementedException($"Primary type {KnownPrimaryType} is not implemented in {GetType().Name}");
            }
        }
    }
}
