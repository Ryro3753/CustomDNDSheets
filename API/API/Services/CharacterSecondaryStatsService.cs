using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterSecondaryStatsService
    {
        public Task<int> InsertOrUpdateCharacterSecondaryStatsAsync(CharacterSecondaryStats model);
        public Task DeleteCharacterSecondaryStats(int characterRef);
        public IEnumerable<CharacterSecondaryStats> GetCharactersSecondaryStats();
        public CharacterSecondaryStats GetCharacterSecondaryStats(int characterRef);
    }
    public class CharacterSecondaryStatsService : ICharacterSecondaryStatsService
    {
        private readonly DNDDbContext _context;

        public CharacterSecondaryStatsService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateCharacterSecondaryStatsAsync(CharacterSecondaryStats model)
        {
            //checking if Ref is zero, if so we understand it is a new character saving Throws object
            if (model.Ref == 0)
            {
                var characterSavingThrows = new CharacterSecondaryStats
                {
                    CharacterRef = model.CharacterRef,
                    Strength = model.Strength,
                    Charisma = model.Charisma,
                    Constitution = model.Constitution,
                    Dexterity = model.Dexterity,
                    Intelligence = model.Intelligence,
                    Wisdom = model.Wisdom
                };
                await _context.CharacterSecondaryStats.AddAsync(characterSavingThrows);
                await _context.SaveChangesAsync();
                return characterSavingThrows.Ref;
            }
            else
            {
                var existingCharacterSecondaryStats = _context.CharacterSecondaryStats.FirstOrDefault(i => i.Ref == model.Ref);
                existingCharacterSecondaryStats.Strength = model.Strength;
                existingCharacterSecondaryStats.Charisma = model.Charisma;
                existingCharacterSecondaryStats.Constitution = model.Constitution;
                existingCharacterSecondaryStats.Dexterity = model.Dexterity;
                existingCharacterSecondaryStats.Intelligence = model.Intelligence;
                existingCharacterSecondaryStats.Wisdom = model.Wisdom;
                await _context.SaveChangesAsync();
                return existingCharacterSecondaryStats.Ref;
            }

        }


        public async Task DeleteCharacterSecondaryStats(int characterRef)
        {
            var characterSecondaryStats = _context.CharacterSecondaryStats.FirstOrDefault(i => i.CharacterRef == characterRef);
            //checking if object is null, if so we return exception
            if (characterSecondaryStats == null)
            {
                throw new Exception("There is no object for that ref " + characterRef.ToString());
            }
            else
            {
                _context.CharacterSecondaryStats.Remove(characterSecondaryStats);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<CharacterSecondaryStats> GetCharactersSecondaryStats()
        {
            return _context.CharacterSecondaryStats.OrderBy(i => i.Ref);
        }

        public CharacterSecondaryStats GetCharacterSecondaryStats(int characterRef)
        {
            return _context.CharacterSecondaryStats.FirstOrDefault(i => i.CharacterRef == characterRef);
        }
    }
}
