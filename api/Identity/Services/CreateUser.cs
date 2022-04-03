using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using api.Data;
using api.Identity.Models;
using api.Identity.Enum;
using api.Shared;
using MediatR;
using FluentValidation;
using System;

namespace api.Identity.Services
{
    public record NewUser(string Name, string Surname, string Email, Role Role, string Password, string ConfirmPassword) : IRequest<Response>;
    public class CreateUser : IRequestHandler<NewUser, Response>
    {
        private readonly DataContext _context;

        public CreateUser(DataContext context)
        {
            _context = context;
        }

        public async Task<Response> Handle(NewUser request, CancellationToken cancellationToken)
        {
            try
            {
                var existingEmail = _context.User.Any(u => u.Email == request.Email);
                if (existingEmail) return new Response("Ops.. Ja existe um usuario cadastrado com este e-mail.", false);

                var user = new User(request.Name, request.Surname, request.Email, request.Role);
                _context.User.Add(user);
                await _context.SaveChangesAsync();
                return new Response("Usuario cadastrado com sucesso.");
            }
            catch (Exception e)
            {

                return new Response(e.Message, false);
            }

        }
    }
    public class NewUserValidation : AbstractValidator<NewUser>
    {
        public NewUserValidation()
        {
            RuleFor(x => x.Email).NotEmpty().WithMessage("Ops.. É necessário informar um e-mail")
                                 .EmailAddress().WithMessage("Ops.. É necessário informar um e-mail válido")
                                 ;
            RuleFor(x => x.Name).NotEmpty().NotNull().WithMessage("Ops.. É necessário informar um nome");
            RuleFor(x => x.Surname).NotEmpty().NotNull().WithMessage("Ops.. É necessário informar um sobrenome");
            RuleFor(x => x.Role).IsInEnum().NotEmpty().NotNull().WithMessage("Ops.. É necessário informar uma função");
            RuleFor(x => x.Password).NotEmpty().NotNull().WithMessage("Ops.. É necessário informar uma senha");
            RuleFor(x => x.ConfirmPassword).Equal(x => x.Password).WithMessage("Ops.. As senhas não batem");
        }
    }
}