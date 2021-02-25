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
        public async Task UploadIcon(int EquipmentRef)
        {
            var imageFolderPath = Path.Combine(_service.GetImageFolderPath(), EquipmentRef.ToString() + ".jpg");

            using var stream = System.IO.File.Create(imageFolderPath);

            foreach (var item in Request.Form.Files)
            {
                await _service.UpdateHasIcon(EquipmentRef);
                await item.CopyToAsync(stream);
            } 

        }
      


    }
}
