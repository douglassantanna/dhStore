using System.Linq;
using System.Net;
using System.Threading.Tasks;
using api.Auth.Services;
using api.Data;
using api.Shared;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace api.Auth.Controllers
{
    [Authorize]
    [ApiController]
    [Route("auth")]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly DataContext _context;
        private readonly IMediator _mediator;

        public LoginController(DataContext context, IMediator mediator, IConfiguration configuration)
        {
            _context = context;
            _mediator = mediator;
            _configuration = configuration;
        }
        [AllowAnonymous]
        [HttpPost]
        public ActionResult Login(UserLogin2 login)
        {
            // var result = await _mediator.Send(login);
            // if (!result.Success)
            //     return BadRequest(result);
            // return Ok(new {result});

            var existingEmail = _context.User.Any(x => x.Email == login.Email);
            if (!existingEmail)
                return NotFound(new Response("Usuário não encontrado.", false));

            var user =  _context.User
                        .Where(x => x.Email == login.Email)
                        .Where(x => x.Password == login.Password)
                        .FirstOrDefault();
            if (user is null)
                return NotFound(new Response("Dados não conferem. Senha inválida.", false));

            var token = _configuration.TokenGenerate(user.Email, user.Name, user.Role.ToString());
            return Ok(new { token });
        }
        public record UserLogin2(string Email, string Password);
    }
}