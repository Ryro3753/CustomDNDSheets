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
    public interface IEquipmentIconService
    {
        void UploadIcon(FileStream fs);
        string GetImageFolderPath();
        Task UpdateHasIcon(int Ref);
    }
    public class EquipmentIconService : IEquipmentIconService
    {
        private readonly DNDDbContext _context;
        private readonly IWebHostEnvironment _env;

        public EquipmentIconService(DNDDbContext context, IWebHostEnvironment env)
        {
            _context = context;
            _env = env;
        }

        public string GetImageFolderPath()
        {
            return Path.Combine(_env.WebRootPath, "images", "EquipmentImages");
            //return  Path.Combine(Directory.GetParent(Directory.GetCurrentDirectory()).FullName, @"wwwroot\images\EquipmentImages\");
        }
        public  void UploadIcon(FileStream fs)
        {
           _context.SaveChanges();
        }

        public async Task UpdateHasIcon(int Ref)
        {
            var existingEquipment = _context.Equipment.FirstOrDefault(i => i.Ref == Ref);
            existingEquipment.HasIcon = true;
            await _context.SaveChangesAsync();
        }
    }
}
