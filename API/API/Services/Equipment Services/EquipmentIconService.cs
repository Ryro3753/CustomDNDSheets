using API.Data;
using API.Models.Equipments;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface IEquipmentIconService
    {
        public void UploadIcon(FileStream fs);
        
    }
    public class EquipmentIconService : IEquipmentIconService
    {
        private readonly DNDDbContext _context;

        public EquipmentIconService(DNDDbContext context)
        {
            _context = context;
        }

        public  void UploadIcon(FileStream fs)
        {
           _context.SaveChanges();
        }

    }
}
