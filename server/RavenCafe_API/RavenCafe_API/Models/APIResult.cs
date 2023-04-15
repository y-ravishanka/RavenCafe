namespace RavenCafe_API.Models
{
    public class APIResult
    {
        public string? status {  get; set; }
        public object? content { get; set; }
        public string? message { get; set; }
    }
}
