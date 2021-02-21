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
    public class CharacterMainStatsController : ControllerBase
    {
        private readonly ICharacterMainStatsService _service;
        public CharacterMainStatsController(ICharacterMainStatsService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateCharacterMainStats")]
        public async Task<int> InsertOrUpdateCharacterMainStatsAsync(CharacterMainStats model)
        {
            return await _service.InsertOrUpdateCharacterMainStatsAsync(model);
        }
        [HttpDelete("DeleteCharacter")]
        public async Task DeleteCharacterMainStats(int characterRef)
        {
            await _service.DeleteCharacterMainStats(characterRef);
        }
        [HttpGet("GetCharactersMainStats")]
        public IEnumerable<CharacterMainStats> GetCharactersMainStats()
        {
            return _service.GetCharactersMainStats();
        }

        [HttpGet("GetCharacter")]
        public CharacterMainStats GetCharacterMainStats(int characterRef)
        {
            return _service.GetCharacterMainStats(characterRef);
        }

    }
}
