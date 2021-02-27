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
        string GetSpellImageFolderPath();
        Task<int> UpdateHasIcon(int Ref, int Type);
    }
    public class IconService : IIconService
    {
        private readonly IWebHostEnvironment _env;
        private readonly DNDDbContext _contex;

        public IconService(DNDDbContext context, IWebHostEnvironment env)
        {
            _contex = context;
            _env = env;
        }

        public  string GetEquipmentImageFolderPath()
        {
            return Path.Combine(_env.WebRootPath, "images", "EquipmentImages");
        }
        public string GetSpellImageFolderPath()
        {
            return Path.Combine(_env.WebRootPath, "images", "SpellImages");
        }
        public async Task<int> UpdateHasIcon(int Ref, int Type)
        {
            if(Type == 1)
            {
                var existingEquipment = _contex.Equipment.FirstOrDefault(i => i.Ref == Ref);
                existingEquipment.HasIcon = 1;
                await _contex.SaveChangesAsync();
                return existingEquipment.HasIcon;
            }
            else if(Type == 2)
            {
                var existingSpell = _contex.Spell.FirstOrDefault(i => i.Ref == Ref);
                existingSpell.HasIcon = 1;
                await _contex.SaveChangesAsync();
                return existingSpell.HasIcon;
            }
            return 0;
        }
    }
}
