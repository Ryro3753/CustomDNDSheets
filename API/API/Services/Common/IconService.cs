using API.Data;
using API.Models.Equipments;
using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface IIconService
    {
        string GetEquipmentImageFolderPath();
    }
    public class IconService : IIconService
    {
        private readonly IWebHostEnvironment _env;

        public IconService( IWebHostEnvironment env)
        {
            _env = env;
        }

        public  string GetEquipmentImageFolderPath()
        {
            return Path.Combine(_env.WebRootPath, "images", "EquipmentImages");
            //return  Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).FullName, @"wwwroot\images\EquipmentImages\");
        }



    }
}
