﻿using System;
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
        [Key]
        [Required]
        public int Ref { get; set; }
        public int CharacterRef { get; set; }
        public int EquipmentRef { get; set; }
        public int Quantity { get; set; }
        public int Cost { get; set; }
        public string Notes { get; set; }
        public bool IsEquipped { get; set; }



    }
}
