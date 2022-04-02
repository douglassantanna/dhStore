namespace api.Shared
{
    public record Responde(string Message, bool Success = true, object Data = null);
}