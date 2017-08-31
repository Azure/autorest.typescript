using AutoRest.Core.Utilities;
using System;
using System.Collections.Generic;
using System.Text;

namespace AutoRest.TypeScript.Model
{
    public class TsConfigModel
    {
        public TsConfigModel()
        {
        }

        public TsConfigModel(bool isBrowser)
        {
            IsBrowser = isBrowser;
        }

        public bool IsBrowser { get; set; }

        public string SupportedLib()
        {
            var builder = new IndentedStringBuilder("  ");
            if (IsBrowser)
            {
                builder.Append("\"lib\": [ \"dom\", \"es2015\", \"es2016\"]");
            }
            else
            {
                builder.Append("\"lib\": [ \"es2015\", \"es2016\"]");
            }
            return builder.ToString();
        }

        public string SpecficOptions()
        {
            var builder = new IndentedStringBuilder("  ");
            if (IsBrowser)
            {
                builder.AppendLine("\"module\": \"es6\",")
                    .AppendLine("\"outDir\": \"dist/browser\",")
                    .AppendLine("\"declaration\": true,")
                    .Append("\"declarationDir\": \"./typings/lib\",");
            }
            else
            {
                builder.AppendLine("\"module\": \"commonjs\",")
                    .AppendLine("\"outDir\": \"dist/node\",");
            }
            return builder.ToString();
        }
    }
}
