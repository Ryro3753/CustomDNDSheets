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
using API.Models.Equipments;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EquipmentController : ControllerBase
    {
        private readonly IEquipmentService _service;
        public EquipmentController(IEquipmentService service )
        {
            _service = service;
        }
        [HttpPost("InsertOrUpdateEquipment")]
        public async Task<int> InsertOrUpdateEquipmentAsync(Equipment model)
        {
            return await _service.InsertOrUpdateEquipmentAsync(model);
        }
        [HttpDelete("DeleteEquipment")]
        public async Task DeleteEquipment(int Ref)
        {
            await _service.DeleteEquipment(Ref);
        }
        [HttpGet("GetEquipments")]
        public IEnumerable<Equipment> GetEquipments()
        {
            return _service.GetEquipments();
        }

        [HttpGet("GetEquipment")]
        public Equipment GetEquipment(int Ref)
        {
            return _service.GetEquipment(Ref);
        }
    }
}
