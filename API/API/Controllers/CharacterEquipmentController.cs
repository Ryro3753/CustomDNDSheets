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
    public class CharacterEquipmentController : ControllerBase
    {
        private readonly ICharacterEquipmentService _service;
        public CharacterEquipmentController(ICharacterEquipmentService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateCharacterEquipments")]
        public async Task<int> InsertOrUpdateCharacterEquipmentsAsync(CharacterEquipments model)
        {
            return await _service.InsertOrUpdateCharacterEquipmentsAsync(model);
        }
        [HttpDelete("DeleteCharacterEquipment")]
        public async Task DeleteCharacterEquipment(int Ref)
        {
            await _service.DeleteCharacterEquipment(Ref);
        }
        [HttpGet("GetEveryCharacterEquipment")]
        public IEnumerable<CharacterEquipments> GetEveryCharacterEquipment()
        {
            return _service.GetEveryCharacterEquipment();
        }

        [HttpGet("GetCharacterEquipments")]
        public CharacterEquipments GetCharacterEquipments(int Ref)
        {
            return _service.GetCharacterEquipments(Ref);
        }

    }
}
