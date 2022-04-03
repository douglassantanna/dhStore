using System;
using api.Identity.Enum;
using api.Shared;

namespace api.Identity.Models
{
    public class User : Entity, IAggregateRoot
    {
        public User(string name, string surname, string email, Role role, string password)
        {
            Name = name;
            Surname = surname;
            Email = email;
            Role = role;
            IsActive = true;
            Password = password;
            CreatedAt = DateTime.Now;
        }

        protected User()
        {}
        public string Name { get; private set; }
        public string Surname { get; private set; }
        public bool IsActive { get; private set; }
        public Role Role { get; private set; }
        public string Email { get; private set; }
        public string Password { get; private set; }
        public string ConfirmPassword { get; private set; }
        public DateTime CreatedAt { get; private set; }

        public void UpdateName(string name) => Name = name;
        public void UpdateSurname(string surname) => Surname = surname;
        public void UpdateActive(bool isActive) => IsActive = isActive;
        public void UpdateRole(Role role) => Role = role;
        public void UpdateEmail(string email) => Email = email;
        public void UpdatePassword(string password) => Password = password.Encrypt();
    }
}