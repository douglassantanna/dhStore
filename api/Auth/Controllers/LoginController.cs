using System.Threading.Tasks;
using api.Auth.Services;
using api.Data;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Auth.Controllers
{
    [Authorize]
    [ApiController]
    [Route("login")]
    public class LoginController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly IMediator _mediator;

        public LoginController(DataContext context, IMediator mediator)
        {
            _context = context;
            _mediator = mediator;
        }
        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult> Login(UserLogin login)
        {
            var result = await _mediator.Send(login);
            if (!result.Success)
                return BadRequest(result);
            return Ok(new {result});
        }
    }
}