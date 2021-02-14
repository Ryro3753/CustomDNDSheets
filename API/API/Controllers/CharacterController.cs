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
        private CharacterService _service;
        public CharacterController(CharacterService service )
        {
            _service = service;
        }
        [HttpPost("InsertCharacter")]
        public async Task InsertCharactersAsync(string name)
        {
            await _service.InsertCharacter(name);
        }

        public async IEnumerable<Character> GetCharactersAsync

       
    }
}
