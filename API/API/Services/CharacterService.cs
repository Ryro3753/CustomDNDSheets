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
    }
    public class CharacterService : ICharacterService
    {
        private DNDDbContext _context;

        public CharacterService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task InsertCharacterAsync(string name)
        {
            var character = new Character();
            character.Name = name;
            await _context.Character.AddAsync(character);
        }
    }
}
