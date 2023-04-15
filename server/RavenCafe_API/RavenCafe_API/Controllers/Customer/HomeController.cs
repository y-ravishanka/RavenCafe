using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RavenCafe_API.Configs;
using RavenCafe_API.Models;

namespace RavenCafe_API.Controllers.Customer
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        [AllowAnonymous]
        [HttpGet]
        [Route("Banners")]
        public async Task<APIResult> checkDiscordWebhook()
        {
            Helper h = new();
            h.SendDiscordMessage(new APIException("test discord webhook", "hello there !!!", "obi wan wave at you"));

            return new APIResult()
            {
                status = APIResponse.Success.ToString(),
                content = null,
                message = "to check discord webhook"
            };
        }
    }
}
