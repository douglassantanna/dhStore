using System;
using api.Identity.Enum;
using api.Shared;

namespace api.Identity.Models
{
    public class User : Entity, IAggregateRoot
    {
        public User(string name, string surname, Role role, string email, DateTime createdAt)
        {
            Name = name;
            Surname = surname;
            Active = true;
            Role = role;
            Email = email;
            Password = Guid.NewGuid().ToString().Encrypt();
            CreatedAt = DateTime.Now;
        }

        protected User()
        {}
        public string Name { get; private set; }
        public string Surname { get; private set; }
        public bool Active { get; private set; }
        public Role Role { get; private set; }
        public string Email { get; private set; }
        public string Password { get; private set; }
        public DateTime CreatedAt { get; private set; }

        public void UpdateName(string name) => Name = name;
        public void UpdateSurname(string surname) => Surname = surname;
        public void UpdateActive(bool active) => Active = active;
        public void UpdateRole(Role role) => Role = role;
        public void UpdateEmail(string email) => Email = email;
        public void UpdatePassword(string password) => Password = password.Encrypt();
    }
}