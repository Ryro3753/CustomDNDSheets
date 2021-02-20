﻿using API.Data;
using API.Models.Equipments;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Services
{
    public interface ISpellService
    {
        public Task<int> InsertOrUpdateSpellAsync(Spell model);
        public Task DeleteSpell(int Ref);
        public IEnumerable<Spell> GetSpells();
        public Spell GetSpell(int Ref);
    }
    public class SpellService : ISpellService
    {
        private readonly DNDDbContext _context;

        public SpellService(DNDDbContext context)
        {
            _context = context;
        }

        public async Task<int> InsertOrUpdateSpellAsync(Spell model)
        {
            //checking if Ref is zero, if so we understand it is a new character
            if (model.Ref == 0)
            {
                var spell = new Spell
                {
                    SpellName = model.SpellName,
                    ActionTime = model.ActionTime,
                    CastType = model.CastType,
                    Components = model.Components,
                    DamageBase = model.DamageBase,
                    Description = model.Description,
                    Duration = model.Duration,
                    HitBase = model.HitBase,
                    Level = model.Level,
                    Range = model.Range
                };
                await _context.Spell.AddAsync(spell);
                await _context.SaveChangesAsync();
                return spell.Ref;
            }
            else
            {
                var existingSpell = _context.Spell.FirstOrDefault(i => i.Ref == model.Ref);
                existingSpell.SpellName = model.SpellName;
                existingSpell.ActionTime = model.ActionTime;
                existingSpell.CastType = model.CastType;
                existingSpell.Components = model.Components;
                existingSpell.DamageBase = model.DamageBase;
                existingSpell.Description = model.Description;
                existingSpell.Duration = model.Duration;
                existingSpell.HitBase = model.HitBase;
                existingSpell.Level = model.Level;
                existingSpell.Range = model.Range;
                await _context.SaveChangesAsync();
                return existingSpell.Ref;

            }

        }


        public async Task DeleteSpell(int Ref)
        {
            var spell = _context.Spell.FirstOrDefault(i => i.Ref == Ref);
            //checking if spell is null, if so we return exception
            if (spell == null)
            {
                throw new Exception("There is no spell for that ref " + Ref.ToString());
            }
            else
            {
                _context.Spell.Remove(spell);
                await _context.SaveChangesAsync();
            }
        }

        public IEnumerable<Spell> GetSpells()
        {
            return _context.Spell.OrderBy(i => i.Ref);
        }

        public Spell GetSpell(int Ref)
        {
            return _context.Spell.FirstOrDefault(i => i.Ref == Ref);
        }
    }
}