﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Equipments
{
    [Table("Spells")]
    public class Spell
    {
        [Key]
        [Required]
        public int Ref { get; set; }
        public string SpellName { get; set; }
        public string Description { get; set; }
        public string HigherLevel { get; set; }
        public int Level { get; set; }
        public string CastingTime { get; set; }
        public int Range { get; set; }
        public int Area { get; set; }
        public string Duration { get; set; }
        public string Components { get; set; }
        public string School { get; set; }
        public string AttackSave { get; set; }
        public string DamageBase { get; set; }
        public string DamageType { get; set; }
        public bool Concentration { get; set; }
        public bool Ritual { get; set; }
        public int HasIcon { get; set; }

    }
}
