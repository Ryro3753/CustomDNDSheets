using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterSavingThrowsService
    {
        public Task<int> InsertOrUpdateCharacterSavingThrowsAsync(CharacterSavingThrows model);
        public Task DeleteCharacterSavingThrows(int characterRef);
        public IEnumerable<CharacterSavingThrows> GetCharactersSavingThrows();
        public CharacterSavingThrows GetCharacterSavingThrows(int characterRef);
    }
    public class CharacterSavingThrowsService : ICharacterSavingThrowsService
    {
        private readonly DNDDbContext _context;

        public CharacterSavingThrowsService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateCharacterSavingThrowsAsync(CharacterSavingThrows model)
        {
            //checking if Ref is zero, if so we understand it is a new character saving Throws object
            if (model.Ref == 0)
            {
                var characterSavingThrows = new CharacterSavingThrows
                {
                    CharacterRef = model.CharacterRef,
                    Strength = model.Strength,
                    Charisma = model.Charisma,
                    Constitution = model.Constitution,
                    Dexterity = model.Dexterity,
                    Intelligence = model.Intelligence,
                    Wisdom = model.Wisdom
                };
                await _context.CharacterSavingThrows.AddAsync(characterSavingThrows);
                await _context.SaveChangesAsync();
                return characterSavingThrows.Ref;
            }
            else
            {
                var existingCharacterSavingThrows = _context.CharacterSavingThrows.FirstOrDefault(i => i.Ref == model.Ref);
                existingCharacterSavingThrows.Strength = model.Strength;
                existingCharacterSavingThrows.Charisma = model.Charisma;
                existingCharacterSavingThrows.Constitution = model.Constitution;
                existingCharacterSavingThrows.Dexterity = model.Dexterity;
                existingCharacterSavingThrows.Intelligence = model.Intelligence;
                existingCharacterSavingThrows.Wisdom = model.Wisdom;
                await _context.SaveChangesAsync();
                return existingCharacterSavingThrows.Ref;
            }

        }


        public async Task DeleteCharacterSavingThrows(int characterRef)
        {
            var characterSavingThrows = _context.CharacterSavingThrows.FirstOrDefault(i => i.CharacterRef == characterRef);
            //checking if object is null, if so we return exception
            if (characterSavingThrows == null)
            {
                throw new Exception("There is no object for that ref " + characterRef.ToString());
            }
            else
            {
                _context.CharacterSavingThrows.Remove(characterSavingThrows);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<CharacterSavingThrows> GetCharactersSavingThrows()
        {
            return _context.CharacterSavingThrows.OrderBy(i => i.Ref);
        }

        public CharacterSavingThrows GetCharacterSavingThrows(int characterRef)
        {
            return _context.CharacterSavingThrows.FirstOrDefault(i => i.CharacterRef == characterRef);
        }
    }
}
