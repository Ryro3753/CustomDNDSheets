using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterSpellsService
    {
        public Task<int> InsertOrUpdateCharacterSpellsAsync(CharacterSpells model);
        public Task DeleteCharacterSpells(int Ref);
        public IEnumerable<CharacterSpells> GetEveryCharacterSpells();
        public CharacterSpells GetCharacterSpells(int characterRef);
    }
    public class CharacterSpellsService : ICharacterSpellsService
    {
        private readonly DNDDbContext _context;

        public CharacterSpellsService(DNDDbContext context) { 
        
            _context = context;
        }

        public async Task<int> InsertOrUpdateCharacterSpellsAsync(CharacterSpells model)
        {
            //checking if Ref is zero, if so we understand it is a new character equipments
            if (model.Ref == 0)
            {
                var characterSpells = new CharacterSpells
                {
                    CharacterRef = model.CharacterRef,
                    SpellRef = model.SpellRef,
                    Damage = model.Damage,
                    Hit = model.Hit
                };
                await _context.CharacterSpells.AddAsync(characterSpells);
                await _context.SaveChangesAsync();
                return characterSpells.Ref;
            }
            else
            {
                var existingSpells = _context.CharacterSpells.FirstOrDefault(i => i.CharacterRef == model.CharacterRef);
                existingSpells.SpellRef = model.SpellRef;
                existingSpells.Damage = model.Damage;
                existingSpells.Hit = model.Hit;
                await _context.SaveChangesAsync();
                return existingSpells.Ref;
            }
        }


        public async Task DeleteCharacterSpells(int Ref)
        {
            var characterSpells = _context.CharacterSpells.FirstOrDefault(i => i.Ref == Ref);
            //checking if character equipment is null, if so we return exception
            if (characterSpells == null)
            {
                throw new Exception("There is no equipment that ref equals to " + Ref.ToString());
            }
            else
            {
                _context.CharacterSpells.Remove(characterSpells);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<CharacterSpells> GetEveryCharacterSpells()
        {
            return _context.CharacterSpells.OrderBy(i => i.CharacterRef);
        }

        public CharacterSpells GetCharacterSpells(int characterRef)
        {
            return _context.CharacterSpells.FirstOrDefault(i => i.CharacterRef == characterRef);
        }
}
    }
