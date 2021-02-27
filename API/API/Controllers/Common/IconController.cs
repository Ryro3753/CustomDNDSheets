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
        [HttpPost("UploadEquipmentIcon")]
        public async Task UploadEquipmentIcon(int EquipmentRef)
        {
            var imageFolderPath = Path.Combine(_service.GetEquipmentImageFolderPath(), EquipmentRef.ToString() + ".jpg");

            using var stream = System.IO.File.Create(imageFolderPath);


            foreach (var item in Request.Form.Files)
            {
                await item.CopyToAsync(stream);
            } 
        }

       



    }
}
