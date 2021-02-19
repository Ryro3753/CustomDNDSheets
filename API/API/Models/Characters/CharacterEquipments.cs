using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("CharacterEquipments")]
    public class CharacterEquipments
    {
        public int CharacterRef { get; set; }
        public int EquipmentRef { get; set; }
        public int Quanitity { get; set; }
        public int Cost { get; set; }
        public string Notes { get; set; }
        public bool IsEquipped { get; set; }



    }
}
