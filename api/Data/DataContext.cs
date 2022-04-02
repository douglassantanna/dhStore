using api.Identity.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Data
{
    public class DataContext : DbContext
    {
        public DbSet<User> User { get; set; }
        public DataContext(DbContextOptions options) : base(options)
        {
        }
    }
}