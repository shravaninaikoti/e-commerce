using Microsoft.EntityFrameworkCore;
using API.Entities;
namespace API.Data
{
    public class StoreContext : DbContext
    {
        //constructor
       public StoreContext(DbContextOptions<StoreContext> options) : base(options) 
       {

       }
       public DbSet<Product> Products{get;set;}
    }
}