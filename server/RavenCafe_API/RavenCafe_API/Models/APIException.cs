namespace RavenCafe_API.Models
{
    public class APIException
    {
        public string? Function_Name { get; set; }
        public string? Message { get; set; }
        public string? Stack_Trace { get; set; }

        public APIException(string? function_Name, Exception ex)
        {
            Function_Name = function_Name;
            Message = ex.Message;
            Stack_Trace = ex.StackTrace;
        }

        public APIException(string? function_Name, string? message, string? stack_Trace)
        {
            Function_Name = function_Name;
            Message = message;
            Stack_Trace = stack_Trace;
        }
    }
}
