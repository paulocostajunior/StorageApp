using System.Collections.Generic;
using System.Threading.Tasks;
using StorageApp.API.Models;

namespace StorageApp.API.Data
{
    public interface IStorageRepository
    {
        Task<List<Product>> GetProducts();
        Task<Product> GetProduct(int id);
        Task<bool> SaveAll();
        Task<bool> Register(Product product);
        Task<bool> ProductExists(string name);
    }
}