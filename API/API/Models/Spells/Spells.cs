using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models.Equipments
{
    [Table("Spells")]
    public class Spells
    {
        [Key]
        [Required]
        public int Ref { get; set; }

        public string SpellName { get; set; }
        public int ActionTime { get; set; }
        public int Range { get; set; }
        public int Level { get; set; }
        public string CastType { get; set; }
        public double Duration { get; set; }
        public string Components { get; set; }
        public string Description { get; set; }
        public int HitBase { get; set; }
        public int DamageBase { get; set; }
    }
}
