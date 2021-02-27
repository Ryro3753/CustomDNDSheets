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
    public class IconController : ControllerBase
    {
        private readonly IIconService _service;

        public IconController(IIconService service )
        {
            _service = service;
        }
        [HttpPost("UploadIcon")]
        public async Task UploadEquipmentIcon(int Ref, int Type) //Type 1 = Equipment, Type 2 = Spell
        {
            var imageFolderPath = "";
            if (Type == 1)
                imageFolderPath = Path.Combine(_service.GetEquipmentImageFolderPath(), Ref.ToString() + ".jpg");
            else if (Type == 2)
                imageFolderPath = Path.Combine(_service.GetSpellImageFolderPath(), Ref.ToString() + ".jpg");

            using var stream = System.IO.File.Create(imageFolderPath);

            foreach (var item in Request.Form.Files)
            {
                await item.CopyToAsync(stream);
            } 
        }


    }
}
