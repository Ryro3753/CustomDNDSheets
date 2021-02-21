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
    public class CharacterDescriptionDetailsController : ControllerBase
    {
        private readonly ICharacterDescriptionDetailsService _service;
        public CharacterDescriptionDetailsController(ICharacterDescriptionDetailsService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateCharactersDescriptionDetails")]
        public async Task<int> InsertOrUpdateCharactersDescriptionDetailsAsync(CharacterDescriptionDetails model)
        {
           return  await _service.InsertOrUpdateCharacterDescriptionDetailsAsync(model);
        }
        [HttpDelete("DeleteCharacterDescriptionDetail")]
        public async Task DeleteCharacterDescriptionDetail(int Ref)
        {
            await _service.DeleteCharacterDescriptionDetail(Ref);
        }
        [HttpGet("GetCharactersDescriptionsDetails")]
        public IEnumerable<CharacterDescriptionDetails> GetCharactersDescriptionsDetails()
        {
            return _service.GetCharactersDescriptionDetails();
        }

        [HttpGet("GetCharacterDescriptionDetail")]
        public CharacterDescriptionDetails GetCharacterDescriptionDetail(int characterRef)
        {
            return _service.GetCharacterDescriptionDetail(characterRef);
        }

    }
}
