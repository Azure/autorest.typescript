using AutoRest.TypeScript.DSL;

namespace AutoRest.TypeScript
{
    class LicenseHeader
    {
        public static string GenerateLicenseHeaderTS()
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
        public static string GenerateLicenseHeaderJS()
        {
            if (AutoRest.Core.Settings.Instance.Header != "")
            {
                JSBuilder builder = new JSBuilder();
                builder.Comment(AutoRest.Core.Settings.Instance.Header);
                builder.Line();
                return builder.ToString();
            }
            return "";
        }
    }
}
