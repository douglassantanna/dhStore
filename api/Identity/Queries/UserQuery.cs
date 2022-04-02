using System.Linq;
using api.Data;
using api.Identity.ViewModels;
using api.Shared;
using Microsoft.EntityFrameworkCore;

namespace api.Identity.Queries
{
    public class UserQuery : IUserQuery
    {
        private readonly DataContext _context;

        public UserQuery(DataContext context)
        {
            _context = context;
        }

        public Pagination<ViewUser> GetData(GetUsers getUsers)
        {
            var query = _context.User
                        .AsSingleQuery().Select(user => new ViewUser
                        {
                            Id = user.Id,
                            Name = user.Name,
                            Surname = user.Surname,
                            Email = user.Email,
                            Role = user.Role,
                            IsActive = user.IsActive
                        });

            if (!string.IsNullOrEmpty(getUsers.Name))
                query = query.Where(u => u.Name.StartsWith(getUsers.Name));

            if (!string.IsNullOrEmpty(getUsers.Surname))
                query = query.Where(u => u.Surname.StartsWith(getUsers.Surname));

            if (!string.IsNullOrEmpty(getUsers.Email))
                query = query.Where(u => u.Email.StartsWith(getUsers.Email));

            if (getUsers.Sort == "desc")
                query = query.OrderByDescending(u => u.Id);
            else
                query = query.OrderBy(u => u.Id);

            return new Pagination<ViewUser>(query, getUsers.PageIndex, getUsers.PageSize);
        }
    }
}