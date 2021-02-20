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
    public class CharacterMoneyController : ControllerBase
    {
        private readonly ICharacterMoneyService _service;
        public CharacterMoneyController(ICharacterMoneyService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateCharacterMoney")]
        public async Task<int> InsertOrUpdateCharacterMoneyAsync(CharacterMoney model)
        {
            return await _service.InsertOrUpdateCharacterMoneyAsync(model);
        }
        [HttpDelete("DeleteCharacterMoney")]
        public async Task DeleteCharacterMoney(int characterRef)
        {
            await _service.DeleteCharacterMoney(characterRef);
        }
        [HttpGet("GetCharactersMoney")]
        public IEnumerable<CharacterMoney> GetCharactersMoney()
        {
            return _service.GetCharactersMoney();
        }

        [HttpGet("GetCharacterMoney")]
        public CharacterMoney GetCharacterMoney(int characterRef)
        {
            return _service.GetCharacterMoney(characterRef);
        }

    }
}
