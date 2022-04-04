using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using api.Data;
using api.Shared;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace api.Auth.Services
{
    public record UserLogin(string Email, string Password) : IRequest<Response>;
    public class Login : IRequestHandler<UserLogin, Response>
    {
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;

        public Login(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        public async Task<Response> Handle(UserLogin request, CancellationToken cancellationToken)
        {
            var existingEmail = _context.User.Any(x => x.Email == request.Email);
            if (!existingEmail)
                return new Response("Usuário não encontrado.", false);

            var user = await _context.User
                        .Where(x => x.Email == request.Email)
                        .Where(x => x.Password == request.Password)
                        .FirstOrDefaultAsync();
            if (user is null)
                return new Response("Dados não conferem. Senha inválida.", false, user);

            var token = _configuration.TokenGenerate(user.Email, user.Name, user.Role.ToString());
            return new Response("Acesso permitido", true, new {token});
        }
    }
}