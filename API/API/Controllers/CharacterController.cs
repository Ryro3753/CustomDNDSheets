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
    public class CharacterController : ControllerBase
    {
        private readonly ICharacterService _service;
        public CharacterController(ICharacterService service )
        {
            _service = service;
        }
        [HttpPost("InsertCharacter")]
        public async Task InsertCharactersAsync(string name)
        {
            await _service.InsertCharacterAsync(name);
        }
        [HttpDelete("DeleteCharacter")]
        public async Task DeleteCharacters(int Ref)
        {
            await _service.DeleteCharacter(Ref);
        }
        [HttpGet("GetCharacters")]
        public IEnumerable<Character> GetCharacters()
        {
            return _service.GetCharacters();
        }

       
    }
}
