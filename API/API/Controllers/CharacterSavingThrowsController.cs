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
    public class CharacterSavingThrowsController : ControllerBase
    {
        private readonly ICharacterSavingThrowsService _service;
        public CharacterSavingThrowsController(ICharacterSavingThrowsService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateCharacterSavingThrows")]
        public async Task<int> InsertOrUpdateCharacterSavingThrowsAsync(CharacterSavingThrows model)
        {
            return await _service.InsertOrUpdateCharacterSavingThrowsAsync(model);
        }
        [HttpDelete("DeleteCharacterSavingThrows")]
        public async Task DeleteCharacterSavingThrows(int characterRef)
        {
            await _service.DeleteCharacterSavingThrows(characterRef);
        }
        [HttpGet("GetCharactersSavingThrows")]
        public IEnumerable<CharacterSavingThrows> GetCharactersSavingThrows()
        {
            return _service.GetCharactersSavingThrows();
        }

        [HttpGet("GetCharacterSavingThrows")]
        public CharacterSavingThrows GetCharacterSavingThrows(int characterRef)
        {
            return _service.GetCharacterSavingThrows(characterRef);
        }

    }
}
