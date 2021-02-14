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
        public async Task InsertCharactersAsync([FromBody]string name)
        {
            await _service.InsertCharacterAsync(name);
        }
        [HttpGet("GetCharacters")]
        public IEnumerable<Character> GetCharactersAsync()
        {
            return _service.GetCharacters();
        }

       
    }
}
