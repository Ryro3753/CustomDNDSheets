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
using System.IO;

namespace API.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class EquipmentIconController : ControllerBase
    {
        private readonly IEquipmentIconService _service;
        public EquipmentIconController(IEquipmentIconService service )
        {
            _service = service;
        }
        [HttpPost("UploadIcon")]
        public void UploadIcon(int EquipmentRef)
        {

            var file = Request.Form.Files;
            //var fileExtension = Path.GetExtension(file.FileName);
        }
      

    }
}
