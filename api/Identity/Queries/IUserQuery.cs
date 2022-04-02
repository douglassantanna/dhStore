using api.Identity.ViewModels;
using api.Shared;

namespace api.Identity.Queries
{
    public interface IUserQuery
    {
        public Pagination<ViewUser> GetData(GetUsers getUsers);
    }

    public class GetUsers
    {
        public int PageIndex { get; set; } = 0;
        public int PageSize { get; set; } = 10;
        public string Name { get; set; } = "";
        public string Surname { get; set; } = "";
        public string Email { get; set; } = "";
        public string Sort { get; set; } = "desc";
    }
}