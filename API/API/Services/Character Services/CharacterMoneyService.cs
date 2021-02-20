using API.Data;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ICharacterMoneyService
    {
        public Task<int> InsertOrUpdateCharacterMoneyAsync(CharacterMoney model);
        public Task DeleteCharacterMoney(int characterRef);
        public IEnumerable<CharacterMoney> GetCharactersMoney();
        public CharacterMoney GetCharacterMoney(int characterRef);
    }
    public class CharacterMoneyService : ICharacterMoneyService
    {
        private readonly DNDDbContext _context;

        public CharacterMoneyService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateCharacterMoneyAsync(CharacterMoney model)
        {
            //checking if Ref is zero, if so we understand it is a new character money object
            if (model.Ref == 0)
            {
                var characterMoney = new CharacterMoney
                {
                    CharacterRef = model.CharacterRef,
                    Silver = model.Silver,
                    Copper = model.Copper,
                    Gold = model.Gold
                };
                await _context.CharacterMoney.AddAsync(characterMoney);
                await _context.SaveChangesAsync();
                return characterMoney.Ref;
            }
            else
            {
                var existingCharacterMoney = _context.CharacterMoney.FirstOrDefault(i => i.Ref == model.Ref);
                existingCharacterMoney.Silver = model.Silver;
                existingCharacterMoney.Copper = model.Copper;
                existingCharacterMoney.Gold = model.Gold;
                await _context.SaveChangesAsync();
                return existingCharacterMoney.Ref;

            }

        }


        public async Task DeleteCharacterMoney(int characterRef)
        {
            var characterMoney = _context.CharacterMoney.FirstOrDefault(i => i.CharacterRef == characterRef);
            //checking if object is null, if so we return exception
            if (characterMoney == null)
            {
                throw new Exception("There is no object for that ref " + characterRef.ToString());
            }
            else
            {
                _context.CharacterMoney.Remove(characterMoney);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<CharacterMoney> GetCharactersMoney()
        {
            return _context.CharacterMoney.OrderBy(i => i.Ref);
        }

        public CharacterMoney GetCharacterMoney(int characterRef)
        {
            return _context.CharacterMoney.FirstOrDefault(i => i.CharacterRef == characterRef);
        }
    }
}
