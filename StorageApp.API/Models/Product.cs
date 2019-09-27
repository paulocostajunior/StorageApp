using System.Collections.Generic;

namespace StorageApp.API.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; } 
        public int Quantity { get; set; }
        public virtual int PackageTypeId { get; set; }
        public virtual PackageType PackageType { get; set; }

    }
}