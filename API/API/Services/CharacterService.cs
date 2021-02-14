using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterService
    {
        public Task InsertCharacterAsync(string name);
        public IEnumerable<Character> GetCharacters();
        public Task DeleteCharacter(int Ref);
    }
    public class CharacterService : ICharacterService
    {
        private readonly DNDDbContext _context;

        public CharacterService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task InsertCharacterAsync(string name)
        {
            var character = new Character {
                Name = name
            };
            await _context.Character.AddAsync(character);
            await _context.SaveChangesAsync();
        }


        public async Task DeleteCharacter(int Ref)
        {
            var character = _context.Character.FirstOrDefault(i => i.Ref == Ref);
            _context.Character.Remove(character);
            await _context.SaveChangesAsync();
        }

        public IEnumerable<Character> GetCharacters()
        {
            return _context.Character.OrderBy(i => i.Ref);
        }
    }
}
