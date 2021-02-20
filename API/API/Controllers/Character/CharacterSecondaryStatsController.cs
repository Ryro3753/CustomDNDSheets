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
    public class CharacterSecondaryStatsController : ControllerBase
    {
        private readonly ICharacterSecondaryStatsService _service;
        public CharacterSecondaryStatsController(ICharacterSecondaryStatsService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateCharacterSecondaryStats")]
        public async Task<int> InsertOrUpdateCharacterSecondaryStatsAsync(CharacterSecondaryStats model)
        {
            return await _service.InsertOrUpdateCharacterSecondaryStatsAsync(model);
        }
        [HttpDelete("DeleteCharacterSecondaryStats")]
        public async Task DeleteCharacterSecondaryStats(int characterRef)
        {
            await _service.DeleteCharacterSecondaryStats(characterRef);
        }
        [HttpGet("GetCharactersSecondaryStats")]
        public IEnumerable<CharacterSecondaryStats> GetCharactersSecondaryStats()
        {
            return _service.GetCharactersSecondaryStats();
        }

        [HttpGet("GetCharacterSecondaryStats")]
        public CharacterSecondaryStats GetCharacterSecondaryStats(int characterRef)
        {
            return _service.GetCharacterSecondaryStats(characterRef);
        }

    }
}
