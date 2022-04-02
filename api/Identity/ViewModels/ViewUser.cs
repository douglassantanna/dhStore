using System;
using System.Linq.Expressions;
using api.Identity.Enum;
using api.Identity.Models;

namespace api.Identity.ViewModels
{
    public class ViewUser
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Surname { get; set; }
        public bool Active { get; set; }
        public Role Role { get; set; }
        public string Email { get; set; }
    }
    public static class ViewUserExtension
    {
        public static Expression<Func<User, ViewUser>> ToView() => x => new ViewUser
        {
            Id = x.Id,
            Name = x.Name,
            Surname = x.Surname,
            Active = x.Active,
            Role = x.Role,
            Email = x.Email
        };
    }
}