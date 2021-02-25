using API.Data;
using API.Models.Equipments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface IEquipmentService
    {
        public Task<int> InsertOrUpdateEquipmentAsync(Equipment model);
        public Task DeleteEquipment(int Ref);
        public IEnumerable<Equipment> GetEquipments();
        public Equipment GetEquipment(int Ref);
    }
    public class EquipmentService : IEquipmentService
    {
        private readonly DNDDbContext _context;

        public EquipmentService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateEquipmentAsync(Equipment model)
        {
            //checking if Ref is zero, if so we understand it is a new character
            if (model.Ref == 0)
            {
                var equipment = new Equipment
                {
                    EquipmentName = model.EquipmentName,
                    Cost = model.Cost,
                    Description = model.Description,
                    HasIcon = false
                };
                await _context.Equipment.AddAsync(equipment);
                await _context.SaveChangesAsync();
                return equipment.Ref;
            }
            else
            {
                var existingEquipment = _context.Equipment.FirstOrDefault(i => i.Ref == model.Ref);
                existingEquipment.EquipmentName = model.EquipmentName;
                existingEquipment.Cost = model.Cost;
                existingEquipment.Description = model.Description;
                existingEquipment.HasIcon = model.HasIcon;
                await _context.SaveChangesAsync();
                return existingEquipment.Ref;

            }

        }


        public async Task DeleteEquipment(int Ref)
        {
            var equipment = _context.Equipment.FirstOrDefault(i => i.Ref == Ref);
            //checking if character is null, if so we return exception
            if (equipment == null)
            {
                throw new Exception("There is no equipment for that ref " + Ref.ToString());
            }
            else
            {
                _context.Equipment.Remove(equipment);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<Equipment> GetEquipments()
        {
            return _context.Equipment.OrderBy(i => i.Ref);
        }

        public Equipment GetEquipment(int Ref)
        {
            return _context.Equipment.FirstOrDefault(i => i.Ref == Ref);
        }
    }
}
