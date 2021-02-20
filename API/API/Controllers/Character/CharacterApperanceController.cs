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
    public class CharacterApperanceController : ControllerBase
    {
        private readonly ICharacterApperanceService _service;
        public CharacterApperanceController(ICharacterApperanceService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateCharacterApperance")]
        public async Task<int> InsertOrUpdateCharactersApperanceAsync(CharacterApperance model)
        {
            return await _service.InsertOrUpdateCharacterApperanceAsync(model);
        }
        [HttpDelete("DeleteCharacterApperance")]
        public async Task DeleteCharacterApperance(int Ref)
        {
            await _service.DeleteCharacterApperance(Ref);
        }
        [HttpGet("GetCharacterApperances")]
        public IEnumerable<CharacterApperance> GetCharacterApperances()
        {
            return _service.GetCharacterApperances();
        }

        [HttpGet("GetCharacterApperance")]
        public CharacterApperance GetCharacterApperance(int characterRef)
        {
            return _service.GetCharacterApperance(characterRef);
        }

    }
}
