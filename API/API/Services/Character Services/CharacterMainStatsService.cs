using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterMainStatsService
    {
        public Task<int> InsertOrUpdateCharacterMainStatsAsync(CharacterMainStats model);
        public Task DeleteCharacterMainStats(int characterRef);
        public IEnumerable<CharacterMainStats> GetCharactersMainStats();
        public CharacterMainStats GetCharacterMainStats(int characterRef);
    }
    public class CharacterMainStatsService : ICharacterMainStatsService
    {
        private readonly DNDDbContext _context;

        public CharacterMainStatsService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateCharacterMainStatsAsync(CharacterMainStats model)
        {
            //checking if Ref is zero, if so we understand it is a new character
            if (model.Ref == 0)
            {
                var characterMainStats = new CharacterMainStats
                {
                    CharacterRef = model.CharacterRef,
                    Armor = model.Armor,
                    Experience = model.Experience,
                    Health = model.Health,
                    Initiative = model.Initiative,
                    Inspiration = model.Inspiration,
                    MaxHealth = model.MaxHealth,
                    Speed = model.Speed,
                    Proficiency = model.Proficiency,
                    TempHealth = model.TempHealth
                    
                };
                await _context.CharacterMainStats.AddAsync(characterMainStats);
                await _context.SaveChangesAsync();
                return characterMainStats.Ref;
            }
            else
            {
                var existingCharacterMainStats = _context.CharacterMainStats.FirstOrDefault(i => i.CharacterRef == model.CharacterRef);
                existingCharacterMainStats.Armor = model.Armor;
                existingCharacterMainStats.Experience = model.Experience;
                existingCharacterMainStats.Health = model.Health;
                existingCharacterMainStats.Initiative = model.Initiative;
                existingCharacterMainStats.Inspiration = model.Inspiration;
                existingCharacterMainStats.MaxHealth = model.MaxHealth;
                existingCharacterMainStats.Speed = model.Speed;
                existingCharacterMainStats.Proficiency = model.Proficiency;
                existingCharacterMainStats.TempHealth = model.TempHealth;
                await _context.SaveChangesAsync();
                return existingCharacterMainStats.Ref;

            }

        }


        public async Task DeleteCharacterMainStats(int characterRef)
        {
            var characterMainStats = _context.CharacterMainStats.FirstOrDefault(i => i.CharacterRef == characterRef);
            //checking if character is null, if so we return exception
            if (characterMainStats == null)
            {
                throw new Exception("There is no character main stats for that character ref " + characterRef.ToString());
            }
            else
            {
                _context.CharacterMainStats.Remove(characterMainStats);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<CharacterMainStats> GetCharactersMainStats()
        {
            return _context.CharacterMainStats.OrderBy(i => i.Ref);
        }

        public CharacterMainStats GetCharacterMainStats(int characterRef)
        {
            return _context.CharacterMainStats.FirstOrDefault(i => i.CharacterRef == characterRef);
        }
    }
}
