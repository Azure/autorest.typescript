using AutoRest.TypeScript.DSL;

namespace AutoRest.TypeScript.Utilities
{
    class LicenseHeader
    {
        public static string GenerateLicenseHeader(int maxWordWrap = 100)
        {
            if (AutoRest.Core.Settings.Instance.Header != "")
            {
                TSBuilder builder = new TSBuilder(maxWordWrap);
                builder.Comment(AutoRest.Core.Settings.Instance.Header);
                return builder.ToString();
            }
            return "";
        }
    }
}
