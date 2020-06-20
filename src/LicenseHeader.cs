using AutoRest.TypeScript.DSL;

namespace AutoRest.TypeScript
{
    class LicenseHeader
    {
        public static string GenerateLicenseHeader()
        {

            if (AutoRest.Core.Settings.Instance.Header != "")
            {
                TSBuilder builder = new TSBuilder();
                builder.Comment(AutoRest.Core.Settings.Instance.Header);
                builder.Line();
                return builder.ToString();
            }

            return "";
        }
    }
}
