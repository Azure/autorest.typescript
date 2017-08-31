// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
// 

namespace AutoRest.TypeScript.Model
{
    public class SequenceTypeTS : Core.Model.SequenceType
    {
        public SequenceTypeTS()
        {
            Name.OnGet += v => $"Array";
        }
    }
}