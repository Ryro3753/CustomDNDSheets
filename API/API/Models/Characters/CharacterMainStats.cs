using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    [Table("CharacterStats")]
    public class CharacterMainStats
    {
        public int CharacterRef { get; set; }
        public int Speed { get; set; }
        public int Armor { get; set; }
        public int Initiative { get; set; }
        public int Profiency { get; set; }
        public bool Inspiration { get; set; }
        public int Health { get; set; }
        public int MaxHealth { get; set; }
        public int EXP { get; set; }

    }
}
