using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterEquipmentService
    {
        public Task<int> InsertOrUpdateCharacterEquipmentsAsync(CharacterEquipments model);
        public Task DeleteCharacterEquipment(int Ref);
        public IEnumerable<CharacterEquipments> GetEveryCharacterEquipment();
        public CharacterEquipments GetCharacterEquipments(int Ref);
    }
    public class CharacterEquipmentService : ICharacterEquipmentService
    {
        private readonly DNDDbContext _context;

        public CharacterEquipmentService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateCharacterEquipmentsAsync(CharacterEquipments model)
        {
            //checking if Ref is zero, if so we understand it is a new character equipments
            if (model.Ref == 0)
            {
                var characterEquipments = new CharacterEquipments
                {
                    CharacterRef = model.CharacterRef,
                    EquipmentRef = model.EquipmentRef,
                    Cost = model.Cost,
                    Notes = model.Notes,
                    Quantity = model.Quantity,
                    IsEquipped = model.IsEquipped

                };
                await _context.CharacterEquipments.AddAsync(characterEquipments);
                await _context.SaveChangesAsync();
                return characterEquipments.Ref;
            }
            else
            {
                var existingEquipment = _context.CharacterEquipments.FirstOrDefault(i => i.CharacterRef == model.CharacterRef);
                await _context.SaveChangesAsync();
                return existingEquipment.Ref;


            }



        }


        public async Task DeleteCharacterEquipment(int Ref)
        {
            var characterEquipments = _context.CharacterEquipments.FirstOrDefault(i => i.Ref == Ref);
            //checking if character equipment is null, if so we return exception
            if (characterEquipments == null)
            {
                throw new Exception("There is no equipment that ref equals to " + Ref.ToString());
            }
            else
            {
                _context.CharacterEquipments.Remove(characterEquipments);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<CharacterEquipments> GetEveryCharacterEquipment()
        {
            return _context.CharacterEquipments.OrderBy(i => i.CharacterRef);
        }

        public CharacterEquipments GetCharacterEquipments(int characterRef)
        {
            return _context.CharacterEquipments.FirstOrDefault(i => i.CharacterRef == characterRef);
        }
    }
}
