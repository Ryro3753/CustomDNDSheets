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

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CharacterSpellsController : ControllerBase
    {
        private readonly ICharacterSpellsService _service;
        public CharacterSpellsController(ICharacterSpellsService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateCharacterSpells")]
        public async Task<int> InsertOrUpdateCharacterSpellsAsync(CharacterSpells model)
        {
            return await _service.InsertOrUpdateCharacterSpellsAsync(model);
        }
        [HttpDelete("DeleteCharacterSpells")]
        public async Task DeleteCharacterSpells(int Ref)
        {
            await _service.DeleteCharacterSpells(Ref);
        }
        [HttpGet("GetEveryCharacterSpells")]
        public IEnumerable<CharacterSpells> GetEveryCharacterSpells()
        {
            return _service.GetEveryCharacterSpells();
        }

        [HttpGet("GetCharacterSpells")]
        public CharacterSpells GetCharacterSpells(int characterRef)
        {
            return _service.GetCharacterSpells(characterRef);
        }

    }
}
