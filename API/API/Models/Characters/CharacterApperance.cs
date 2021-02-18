using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("CharacterApperance")]
    public class CharacterApperance
    {
        public int CharacterRef { get; set; }
        public string Size { get; set; }
        public string Eyes { get; set; }
        public string Height { get; set; }
        public string Hair { get; set; }
        public string Skin { get; set; }
        public string Age { get; set; }
        public string Weight { get; set; }



    }
}
