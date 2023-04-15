using JNogueira.Discord.Webhook.Client;
using RavenCafe_API.Models;

namespace RavenCafe_API.Configs
{
    internal class Helper
    {
        internal async Task SendDiscordMessage(APIException ExcepClass)
        {
            // Create an instance of the class DiscordWebhookClient with your Discord webhook URL.
            var client = new DiscordWebhookClient(Manager.Instance.GetDiscordWebHook());

            // Create your DiscordMessage with all parameters of your message.
            var message = new DiscordMessage
            (
                "Trending stability issues for API Server " + DiscordEmoji.Confused,
                username: "RavenCafe API Server",
                tts: false,
                embeds: new[]
                {
                    new DiscordMessageEmbed(
                        author: new DiscordMessageEmbedAuthor("System User"),
                        title:"Error Function : " + ExcepClass.Function_Name,
                        description: "Message : \n" + ExcepClass.Message+"\n\n Stack Trace : \n" + ExcepClass.Stack_Trace,
                        footer: new DiscordMessageEmbedFooter("Thank You!")
                        )
                }
            );

            // Send the message!
            await client.SendToDiscord(message);
        }
    }
}
