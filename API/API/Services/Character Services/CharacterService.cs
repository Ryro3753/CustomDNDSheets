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
        public Task<int> InsertOrUpdateCharacterAsync(Character model);
        public Task DeleteCharacter(int Ref);
        public IEnumerable<Character> GetCharacters();
        public Character GetCharacter(int Ref);
    }
    public class CharacterService : ICharacterService
    {
        private readonly DNDDbContext _context;

        public CharacterService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateCharacterAsync(Character model)
        {
            //checking if Ref is zero, if so we understand it is a new character
            if (model.Ref == 0)
            {
                var character = new Character
                {
                    CharacterName = model.CharacterName,
                    Class = model.Class,
                    Race = model.Race
                };
                await _context.Character.AddAsync(character);
                await _context.SaveChangesAsync();
                return character.Ref;
            }
            else
            {
                var existingCharacter = _context.Character.FirstOrDefault(i => i.Ref == model.Ref);
                existingCharacter.CharacterName = model.CharacterName;
                existingCharacter.Class = model.Class;
                existingCharacter.Race = model.Race;
                await _context.SaveChangesAsync();
                return existingCharacter.Ref;

            }

        }


        public async Task DeleteCharacter(int Ref)
        {
            var character = _context.Character.FirstOrDefault(i => i.Ref == Ref);
            //checking if character is null, if so we return exception
            if (character == null)
            {
                throw new Exception("There is no character for that ref " + Ref.ToString());
            }
            else
            {
                _context.Character.Remove(character);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<Character> GetCharacters()
        {
            return _context.Character.OrderBy(i => i.Ref);
        }

        public Character GetCharacter(int Ref)
        {
            return _context.Character.FirstOrDefault(i => i.Ref == Ref);
        }
    }
}
