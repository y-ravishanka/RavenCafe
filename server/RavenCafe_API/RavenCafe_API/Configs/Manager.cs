namespace RavenCafe_API.Configs
{
    internal sealed class Manager
    {
        private Manager() { }
        private static Manager instance = null;
        public static Manager Instance
        {
            get
            {
                if (instance == null)
                {
                    instance = new Manager();
                }
                return instance;
            }
        }

        internal string GetConnectionString()
        {
            return @"";
        }

        internal string GetDiscordWebHook()
        {
            return @"https://discord.com/api/webhooks/1096731398594887691/hgx5Kd1KDRLkTyaTMBr00IDQtcWf7S53O7rDhbps6kpXNlzpUt6ffVSHBjN5o2oN68uh";
        }
    }

    enum APIResponse
    {
        Success,
        Fail
    }
}
