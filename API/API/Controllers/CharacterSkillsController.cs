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
    public class CharacterSkillsController : ControllerBase
    {
        private readonly ICharacterSkillsService _service;
        public CharacterSkillsController(ICharacterSkillsService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateCharacterSkills")]
        public async Task<int> InsertOrUpdateCharacterSkillsAsync(CharacterSkills model)
        {
            return await _service.InsertOrUpdateCharacterSkillsAsync(model);
        }
        [HttpDelete("DeleteCharacterSkills")]
        public async Task DeleteCharacterSkills(int characterRef)
        {
            await _service.DeleteCharacterSkills(characterRef);
        }
        [HttpGet("GetCharactersSkills")]
        public IEnumerable<CharacterSkills> GetCharactersSkills()
        {
            return _service.GetCharactersSkills();
        }

        [HttpGet("GetCharacterSkills")]
        public CharacterSkills GetCharacterSkills(int characterRef)
        {
            return _service.GetCharacterSkills(characterRef);
        }

    }
}
