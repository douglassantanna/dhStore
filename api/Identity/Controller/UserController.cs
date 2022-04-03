using System.Threading.Tasks;
using api.Identity.Queries;
using api.Identity.Services;
using api.Identity.ViewModels;
using api.Shared;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace api.Identity.Controller
{
    // [Authorize]
    [ApiController]
    [Route("user")]
    public class UserController : ControllerBase
    {
        IMediator _mediator;
        IUserQuery _userQuery;

        public UserController(IMediator mediator, IUserQuery userQuery)
        {
            _mediator = mediator;
            _userQuery = userQuery;
        }

        [HttpPost]
        public async Task<ActionResult> Create(NewUser newUser)
        {
            var result = await _mediator.Send(newUser);
            if (!result.Success)
                return BadRequest(result);
            return Created("", result);
        }

        [HttpGet]
        public ActionResult<Pagination<ViewUser>> Get([FromQuery] GetUsers getUsers) => _userQuery.GetData(getUsers);

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var request = new UserToDelete(id);

            var result = await _mediator.Send(request);
            if (!result.Success)
                return BadRequest(result);
            return NoContent();
        }
    }
}