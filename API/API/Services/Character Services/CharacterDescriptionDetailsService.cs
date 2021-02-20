using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterDescriptionDetailsService
    {
        public Task<int> InsertOrUpdateCharacterDescriptionDetailsAsync(CharacterDescriptionDetails model);
        public Task DeleteCharacterDescriptionDetail(int characterRef);
        public IEnumerable<CharacterDescriptionDetails> GetCharacterDescriptionDetails();
        public CharacterDescriptionDetails GetCharacterDescriptionDetail(int characterRef);
    }
    public class CharacterDescriptionDetailsService : ICharacterDescriptionDetailsService
    {
        private readonly DNDDbContext _context;

        public CharacterDescriptionDetailsService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateCharacterDescriptionDetailsAsync(CharacterDescriptionDetails model)
        {
            //checking if Ref is zero, if so we understand it is a new character description
            if (model.Ref == 0)
            {
                var characterDescriptionDetails = new CharacterDescriptionDetails
                {
                    CharacterRef = model.CharacterRef,
                    Alignment = model.Alignment,
                    Allies = model.Allies,
                    Backstory = model.Backstory,
                    Bonds = model.Bonds,
                    Faith = model.Faith,
                    Flaws = model.Flaws,
                    Ideals = model.Ideals,
                    PersonalityTraits = model.PersonalityTraits
                };
                await _context.CharacterDescriptionDetails.AddAsync(characterDescriptionDetails);
                await _context.SaveChangesAsync();
                return characterDescriptionDetails.Ref;

            }
            else
            {
                var existingCharacterDescription = _context.CharacterDescriptionDetails.FirstOrDefault(i => i.CharacterRef == model.CharacterRef);
                existingCharacterDescription.Alignment = model.Alignment;
                existingCharacterDescription.Allies = model.Allies;
                existingCharacterDescription.Backstory = model.Backstory;
                existingCharacterDescription.Bonds = model.Bonds;
                existingCharacterDescription.Faith = model.Faith;
                existingCharacterDescription.Flaws = model.Flaws;
                existingCharacterDescription.Ideals = model.Ideals;
                existingCharacterDescription.PersonalityTraits = model.PersonalityTraits;
                await _context.SaveChangesAsync();
                return existingCharacterDescription.Ref;

            }
        }


        public async Task DeleteCharacterDescriptionDetail(int characterRef)
        {
            var characterDescriptionDetails = _context.CharacterDescriptionDetails.FirstOrDefault(i => i.CharacterRef == characterRef);
            //checking if character is null, if so we return exception
            if (characterDescriptionDetails == null)
            {
                throw new Exception("There is no character description details for that ref " + characterRef.ToString());
            }
            else
            {
                _context.CharacterDescriptionDetails.Remove(characterDescriptionDetails);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<CharacterDescriptionDetails> GetCharacterDescriptionDetails()
        {
            return _context.CharacterDescriptionDetails.OrderBy(i => i.CharacterRef);
        }

        public CharacterDescriptionDetails GetCharacterDescriptionDetail(int characterRef)
        {
            return _context.CharacterDescriptionDetails.FirstOrDefault(i => i.CharacterRef == characterRef);
        }
    }
}
