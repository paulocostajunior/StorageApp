using System.Linq;
using AutoMapper;
using StorageApp.API.Dtos;
using StorageApp.API.Models;

namespace StorageApp.API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<ProductForUpdateDto, Product>();
        }
    }
}