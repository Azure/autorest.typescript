// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using AutoRest.Core;
using AutoRest.Core.Utilities;
using AutoRest.Extensions;

namespace AutoRest.TypeScript.Model
{
    public class PropertyTS : Core.Model.Property
    {
        protected PropertyTS()
        {
            // properties with dots by surrounding them with single quotes to represent
            // them as a single property and not as one being part of another. For example: 'odata.nextLink'
            Name.OnGet += name =>
            {
                // completely replacing base behavior.

                // use either the overriden client name or the raw value
                name = Extensions.GetValue<string>("x-ms-client-name").Else(Name.RawValue);

                return CodeNamer.Instance.GetPropertyName(name);

            };
        }

        public override string SerializedName
        {
            get => (this.WasFlattened() ? base.SerializedName : base.SerializedName?.Replace(".", "\\\\."))?.Replace("\\\\\\\\", "\\\\");
            set => base.SerializedName = value;
        }
    }
}