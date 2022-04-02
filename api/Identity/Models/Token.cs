namespace api.Identity.Models
{
    public class Token
    {
        public Token(string value)
        {
            Valeu = value;
        }

        public string Valeu { get; private set; }
    }
}