using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API.Data;
using API.Models;
using API.Services;
using API.Models.Equipments;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SpellController : ControllerBase
    {
        private readonly ISpellService _service;
        public SpellController(ISpellService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateSpell")]
        public async Task<int> InsertOrUpdateSpellAsync(Spell model)
        {
            return await _service.InsertOrUpdateSpellAsync(model);
        }
        [HttpDelete("DeleteSpell")]
        public async Task DeleteSpell(int Ref)
        {
            await _service.DeleteSpell(Ref);
        }
        [HttpGet("GetSpells")]
        public IEnumerable<Spell> GetSpells()
        {
            return _service.GetSpells();
        }

        [HttpGet("GetSpell")]
        public Spell GetSpell(int Ref)
        {
            return _service.GetSpell(Ref);
        }
    }
}
