using System.Threading;
using System.Threading.Tasks;
using api.Data;
using api.Shared;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace api.Identity.Services
{
    public record UserToDelete(int userId) : IRequest<Response>;
    public class DeleteUser : IRequestHandler<UserToDelete, Response>
    {
        private readonly DataContext _context;

        public DeleteUser(DataContext context)
        {
            _context = context;
        }

        public async Task<Response> Handle(UserToDelete request, CancellationToken cancellationToken)
        {
            var user = await _context.User.FirstOrDefaultAsync(x => x.Id == request.userId);
            if (user is null)
                return new Response("Ops.. Usuário não encontrado", false);

            _context.User.Remove(user);
            _context.SaveChanges();

            return new Response("Usuário excluído.");
        }
    }
}