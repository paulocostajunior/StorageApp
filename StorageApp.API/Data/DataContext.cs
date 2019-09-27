using Microsoft.EntityFrameworkCore;
using StorageApp.API.Models;

namespace StorageApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) {}
        
        public DbSet<Product> Products { get; set; }
        public DbSet<PackageType> PackageTypes { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            // builder.Entity<Product>()
            //     .HasOne(p => p.Id)
            //     .WithMany(p => p.PackageTypes)
            //     .HasForeignKey(u => u.PackageTypeId)
            //     .OnDelete(DeleteBehavior.Restrict);

        }
    }
}