namespace api.Shared
{
    public record Response(string Message = null, bool Success = true, object Data = null);

}