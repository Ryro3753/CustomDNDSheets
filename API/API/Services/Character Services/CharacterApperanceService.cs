using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterApperanceService
    {
        public Task<int> InsertOrUpdateCharacterApperanceAsync(CharacterApperance model);
        public Task DeleteCharacterApperance(int characterRef);
        public IEnumerable<CharacterApperance> GetCharactersApperances();
        public CharacterApperance GetCharacterApperance(int characterRef);
    }
    public class CharacterApperanceService : ICharacterApperanceService
    {
        private readonly DNDDbContext _context;

        public CharacterApperanceService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateCharacterApperanceAsync(CharacterApperance model)
        {
            //checking if Ref is zero, if so we understand it is a new character apperance
            if (model.Ref == 0)
            {
                var characterApperance = new CharacterApperance
                {
                    CharacterRef = model.CharacterRef,
                    Age = model.Age,
                    Eyes = model.Eyes,
                    Hair = model.Hair,
                    Size = model.Size,
                    Skin = model.Skin,
                    Height = model.Height,
                    Weight = model.Weight
                    
                };
                await _context.CharacterApperance.AddAsync(characterApperance);
                await _context.SaveChangesAsync();
                return characterApperance.Ref;

            }
            else
            {
                var existingCharacterApperance = _context.CharacterApperance.FirstOrDefault(i => i.CharacterRef == model.CharacterRef);
                existingCharacterApperance.Eyes = model.Eyes;
                existingCharacterApperance.Hair = model.Hair;
                existingCharacterApperance.Size = model.Size;
                existingCharacterApperance.Height = model.Height;
                existingCharacterApperance.Skin = model.Skin;
                existingCharacterApperance.Weight = model.Weight;
                existingCharacterApperance.Age = model.Age;
                await _context.SaveChangesAsync();
                return existingCharacterApperance.Ref;

            }

        }


        public async Task DeleteCharacterApperance(int characterRef)
        {
            var characterApperance = _context.CharacterApperance.FirstOrDefault(i => i.CharacterRef == characterRef);
            //checking if character is null, if so we return exception
            if (characterApperance == null)
            {
                throw new Exception("There is no character apperance for that ref " + characterRef.ToString());
            }
            else
            {
                _context.CharacterApperance.Remove(characterApperance);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<CharacterApperance> GetCharactersApperances()
        {
            return _context.CharacterApperance.OrderBy(i => i.CharacterRef);
        }

        public CharacterApperance GetCharacterApperance(int characterRef)
        {
            return _context.CharacterApperance.FirstOrDefault(i => i.CharacterRef == characterRef);
        }
    }
}
