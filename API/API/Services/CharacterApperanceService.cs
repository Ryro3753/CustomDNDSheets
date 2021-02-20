﻿using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterApperanceService
    {
        public Task InsertOrUpdateCharacterApperanceAsync(CharacterApperance model);
        public Task DeleteCharacterApperance(int Ref);
        public IEnumerable<CharacterApperance> GetCharacterApperances();
        public CharacterApperance GetCharacterApperance(int Ref);
    }
    public class CharacterApperanceService : ICharacterApperanceService
    {
        private readonly DNDDbContext _context;

        public CharacterApperanceService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task InsertOrUpdateCharacterApperanceAsync(CharacterApperance model)
        {
            var existingCharacter = _context.CharacterApperance.FirstOrDefault(i => i.CharacterRef == model.CharacterRef);
            //checking if there are a character for that ref, if not create a new apperance value
            if (existingCharacter == null)
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
            }
            else
            {
                existingCharacter.Eyes = model.Eyes;
                existingCharacter.Hair = model.Hair;
                existingCharacter.Size = model.Size;
                existingCharacter.Height = model.Height;
                existingCharacter.Skin = model.Skin;
                existingCharacter.Weight = model.Weight;
                existingCharacter.Age = model.Age;
            }

            await _context.SaveChangesAsync();
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

        public IEnumerable<CharacterApperance> GetCharacterApperances()
        {
            return _context.CharacterApperance.OrderBy(i => i.CharacterRef);
        }

        public CharacterApperance GetCharacterApperance(int characterRef)
        {
            return _context.CharacterApperance.FirstOrDefault(i => i.CharacterRef == characterRef);
        }
    }
}
