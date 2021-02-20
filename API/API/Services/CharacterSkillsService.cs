using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterSkillsService
    {
        public Task<int> InsertOrUpdateCharacterSkillsAsync(CharacterSkills model);
        public Task DeleteCharacterSkills(int characterRef);
        public IEnumerable<CharacterSkills> GetCharactersSkills();
        public CharacterSkills GetCharacterSkills(int characterRef);
    }
    public class CharacterSkillsService : ICharacterSkillsService
    {
        private readonly DNDDbContext _context;

        public CharacterSkillsService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateCharacterSkillsAsync(CharacterSkills model)
        {
            //checking if Ref is zero, if so we understand it is a new character saving Throws object
            if (model.Ref == 0)
            {
                var characterSkills = new CharacterSkills
                {
                    CharacterRef = model.CharacterRef,
                    Acrobatics = model.Acrobatics,
                    AnimalHandling = model.AnimalHandling,
                    Arcana = model.Arcana,
                    Athletics = model.Athletics,
                    Deception = model.Deception,
                    History = model.History,
                    Insight = model.Insight,
                    Intimidation = model.Intimidation,
                    Investigation = model.Investigation,
                    Medicine = model.Medicine,
                    Nature = model.Nature,
                    Perception = model.Perception,
                    Performance = model.Performance,
                    Persuasion = model.Persuasion,
                    Religion = model.Religion,
                    SleightOfHand = model.SleightOfHand,
                    Stealth = model.Stealth,
                    Survival = model.Survival
                    
                };
                await _context.CharacterSkills.AddAsync(characterSkills);
                await _context.SaveChangesAsync();
                return characterSkills.Ref;
            }
            else
            {
                var existingCharacterSkills = _context.CharacterSkills.FirstOrDefault(i => i.Ref == model.Ref);
                existingCharacterSkills.Acrobatics = model.Acrobatics;
                existingCharacterSkills.AnimalHandling = model.AnimalHandling;
                existingCharacterSkills.Arcana = model.Arcana;
                existingCharacterSkills.Athletics = model.Athletics;
                existingCharacterSkills.Deception = model.Deception;
                existingCharacterSkills.History = model.History;
                existingCharacterSkills.Insight = model.Insight;
                existingCharacterSkills.Intimidation = model.Intimidation;
                existingCharacterSkills.Investigation = model.Investigation;
                existingCharacterSkills.Medicine = model.Medicine;
                existingCharacterSkills.Nature = model.Nature;
                existingCharacterSkills.Perception = model.Perception;
                existingCharacterSkills.Performance = model.Performance;
                existingCharacterSkills.Persuasion = model.Persuasion;
                existingCharacterSkills.Religion = model.Religion;
                existingCharacterSkills.SleightOfHand = model.SleightOfHand;
                existingCharacterSkills.Stealth = model.Stealth;
                existingCharacterSkills.Survival = model.Survival;
                await _context.SaveChangesAsync();
                return existingCharacterSkills.Ref;
            }

        }


        public async Task DeleteCharacterSkills(int characterRef)
        {
            var characterSkills = _context.CharacterSkills.FirstOrDefault(i => i.CharacterRef == characterRef);
            //checking if object is null, if so we return exception
            if (characterSkills == null)
            {
                throw new Exception("There is no object for that ref " + characterRef.ToString());
            }
            else
            {
                _context.CharacterSkills.Remove(characterSkills);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<CharacterSkills> GetCharactersSkills()
        {
            return _context.CharacterSkills.OrderBy(i => i.Ref);
        }

        public CharacterSkills GetCharacterSkills(int characterRef)
        {
            return _context.CharacterSkills.FirstOrDefault(i => i.CharacterRef == characterRef);
        }
    }
}
